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
      <button>submit</button>

     <p> Already have an account? <router-link to="/login"> Login </router-link> </p>
    </form>
  </div>
</template>
<script>
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
    registerUser: function () {
      console.log(this.authDetails)
    }
  }
}
</script>
<style>
.auth {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h3 {
  margin-top: 2rem;
}
form {
  max-width: 50%;
  margin-top: 1rem;
  padding: 4rem;
  border: 1px solid #c4c4ce;

}
input {
  display: block;
  margin-bottom: 1.2rem;
  padding: 0.4rem 1.2rem;
  background-color: white;
}
button {
  margin-top: .5rem;
  padding: .5rem 1rem;
  border: none;
  background-color: fuchsia;
  color: white;
  font-weight: bold;
  text-transform: capitalize;
  border-radius: 0.3rem;
}
a{
  color: black;
  text-decoration: none;
}
a:visited{
  color: inherit;
}
a:hover{
  text-decoration: underline;
}
 p{
   margin-top: .5rem;
 }
</style>
