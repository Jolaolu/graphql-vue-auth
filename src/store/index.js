import Vue from 'vue'
import Vuex from 'vuex'
import { onLogin, onLogout } from '@/vue-apollo'
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
    authStatus: state => state.status,
    getUser: state => state.user
  },
  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
    },
    LOGIN_USER (state, user) {
      state.authStatus = true
      state.user = { ...user }
      // window.location.href = '/home'
    },
    LOGOUT_USER (state) {
      state.status = ''
      state.token = '' && localStorage.removeItem('token')
    }
  },
  actions: {
    async register ({ commit, dispatch }, authDetails) {
      console.log(authDetails)
      try {
        const { data } = await this.$apollo.mutate({ mutation: REGISTER_USER, variables: { authDetails } })
        console.log(data)
        dispatch('setUser', { token: data.token })
      } catch (e) {
        console.log(e)
      }
    },
    async LOGIN_USER ({ commit, dispatch }, authDetails) {
      console.log(authDetails)
      try {
        const { data } = await this.$apollo.mutate({ mutation: LOGIN_USER, variables: { authDetails } })
        console.log(data)
        dispatch('setUser', { token: data.token })
      } catch (e) {
        console.log(e)
      }
    },
    async SET_USER ({ commit }, user) {
      commit('SET_TOKEN', user.token)
      onLogin(this.$apollo.provider.defaultClient, user.token)

      const { data } = await this.$apollo.query({ query: LOGGED_IN_USER })
      commit('LOGIN_USER', data.getUser)
    },
    async LOGOUT_USER ({ commit, dispatch }) {
      onLogout(this.$apollo.provider.defaultClient)
      commit('LOGOUT_USER')
    }
  }

})
