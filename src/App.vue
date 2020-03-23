<template>
  <div id="app">
    <header class="header">
      <div class="app-name">Blogr</div>
      <div id="nav">
        <button v-if="userAuthenticated" class="auth-button"> Log Out </button>
        <!-- <button class="auth-button" v-else> Log In</button> -->
      </div>
    </header>
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'App',
  component: {

  },
  data () {
    return {
      userAuthenticated: false
    }
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

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
