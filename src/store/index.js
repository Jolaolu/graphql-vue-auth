import Vue from 'vue'
import Vuex from 'vuex'
import { onLogout, apolloClient } from '@/vue-apollo'
import { LOGGED_IN_USER } from '@/graphql/queries'
import { LOGIN_USER, REGISTER_USER } from '@/graphql/mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    user: {},
    authStatus: false
  },
  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.authStatus,
    getUser: state => state.user
  },
  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
    },
    LOGIN_USER (state, user) {
      state.authStatus = true
      state.user = { ...user }
    },
    LOGOUT_USER (state) {
      state.authStatus = ''
      state.token = '' && localStorage.removeItem('apollo-token')
    }
  },
  actions: {
    async register ({ commit, dispatch }, authDetails) {
      console.log(authDetails)
      try {
        const { data } = await apolloClient.mutate({ mutation: REGISTER_USER, variables: { ...authDetails } })
        console.log(data)
        console.log(data.createUser.token)
        const token = JSON.stringify(data.createUser.token)
        commit('SET_TOKEN', token)
        // onLogin(apolloClient, user.token)
        console.log(token)
        localStorage.setItem('apollo-token', token)
        dispatch('setUser')
      } catch (e) {
        console.log(e)
      }
    },
    async login ({ commit, dispatch }, authDetails) {
      console.log(authDetails)
      try {
        const { data } = await apolloClient.mutate({ mutation: LOGIN_USER, variables: { ...authDetails } })
        console.log(data)
        console.log(data.login.token)
        const token = JSON.stringify(data.login.token)
        commit('SET_TOKEN', token)
        console.log(token)
        localStorage.setItem('apollo-token', token)
        console.log(localStorage.getItem('apollo-token'))
        dispatch('setUser')
      } catch (e) {
        console.log(e)
      }
    },
    async setUser ({ commit }) {
      console.log(localStorage.getItem('apollo-token'))
      const { data } = await apolloClient.query({ query: LOGGED_IN_USER })
      commit('LOGIN_USER', data.getUser)
    },
    async logOut ({ commit, dispatch }) {
      commit('LOGOUT_USER')
      onLogout(apolloClient)
    }
  }

})
