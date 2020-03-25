<template>
  <div class="auth">
    <h3>Log In</h3>
    <form action="POST" @submit.prevent="loginUser">
      <label for="email">Email Address</label>
      <input type="email" name="email" id placeholder="jagaban@borgu.com" v-model="authDetails.email" />
      <label for="password">Password</label>
      <input type="password" name="password" id placeholder="password" v-model="authDetails.password" />
      <button class="auth-submit">submit</button>

     <p class="auth-text"> Don't have an account? <router-link to="/"> Register </router-link> </p>
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      authDetails: {
        email: '',
        password: ''
      }

    }
  },
  methods: {
    ...mapActions(['login']),
    loginUser: function () {
      console.log(this.authDetails)
      this.login(this.authDetails)
        .then(() => this.$router.push('/dashboard'))
    }
  }
}
</script>
