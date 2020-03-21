<template>
  <div id="app">
    <header class="header">
      <div class="app-name">Blogr</div>
      <div id="nav">

      </div>
    </header>

    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'App',
  component: {

  }

}
</script>
<style>
body{
  margin: 0;

}
#app {
  font-family: 'Baloo Chettan 2', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}
.header{
  display: flex;
  background-color: fuchsia;
  height: 25%;
  padding: 1rem;
}
.app-name{
  font-weight: 900;
  font-size: 3rem;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
