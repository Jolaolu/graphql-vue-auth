<template>
  <div id="app">
    <header class="header">
      <div class="app-name">Blogr</div>
        <div v-if="authStatus" id="nav">
          <div>{{user.name}}</div>
          <button class="auth-button" @click="logOut" > Log Out</button>
        </div>
    </header>
    <router-view/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  component: {

  },
  data () {
    return {

    }
  },
  methods: {
    logOut: function () {
      this.$store.dispatch('logOut')
        .then(() => this.$router.push('/login'))
    }

  },
  computed: {
    ...mapGetters(['authStatus', 'user'])
  }

}
</script>
<style>

#app {
  font-family: 'Baloo Chettan 2', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}
#nav {
  display: flex;
}
#nav>div{
  color: white;
  margin-top: 1rem;
  margin-right: 2rem;
  font-size: 2rem;
  font-weight: 500;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
