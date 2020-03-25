<template>
  <div class="auth">
    <h3>Sign Up</h3>
    <form action="POST" @submit.prevent="registerUser">
      <label for="name"> Name</label>
      <input type="text" name="name" id placeholder="John Doe" v-model="authDetails.name" />
      <label for="email">Email Address</label>
      <input type="email" name="email" id placeholder="jagaban@borgu.com" v-model="authDetails.email" />
      <label for="password">Password</label>
      <input type="password" name="password" id placeholder="password" v-model="authDetails.password" />
      <button class="auth-submit">submit</button>

     <p class="auth-text"> Already have an account? <router-link to="/login"> Login </router-link> </p>
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'Register',
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
    ...mapActions(['register']),

    registerUser: function () {
      console.log(this.authDetails)
      this.register(this.authDetails)
        .then(() => this.$router.push('/dashboard'))
    }
  }

}
</script>
<style>

</style>
