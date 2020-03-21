<template>
  <div class="auth">
    <h3>Log In</h3>
    <form action="POST" @submit.prevent="loginUser">
      <label for="email">Email Address</label>
      <input type="email" name="email" id placeholder="jagaban@borgu.com" v-model="authDetails.email" />
      <label for="password">Password</label>
      <input type="password" name="password" id placeholder="password" v-model="authDetails.password" />
      <button>submit</button>

     <p> Don't have an account? <router-link to="/"> Register </router-link> </p>
    </form>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      authDetails: {
        name: '',
        email: '',
        password: ''
      }

    }
  },
  methods: {
    loginUser: function () {
      console.log(this.authDetails)
    }
  }
}
</script>
