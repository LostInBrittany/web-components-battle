<template>
  <section class="container">    
      <frf-login
      login-url="http://localhost:3001/api/login"
      @login-success="onLogin">
      <span id="title">DevFest Nantes</span>
      <img id="logo" src="../assets/images/devfest.jpg"/>
      </frf-login>
  </section>
</template>

<script>
import router from '.'
import UserService from '../services/UserService'

export default {
  name: 'sfeir-login',
  data () {
    return {
      person: {},
      msg: 'Welcome to Your Vue.js App'
    }
  },  
  methods:{
    onLogin: function(e){
      UserService.onLogin(e.detail.userInfo.get());
      router.push('/people');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>