<template>
  <md-toolbar class="navBar">
    <router-link to="/login">
        <img class="logo" src="../assets/images/logo-people.svg">
    </router-link>
    <h2 class="md-title" style="flex: 1"></h2>
     <user-link v-if="user.firstname" :name="user.firstname" @logout="onLogout"></user-link>
    <span class="link">          
        <router-link to="/people">Peoples</router-link>          
    </span>
    <span class="link">          
        <router-link to="/map">Map</router-link>          
    </span>
  </md-toolbar>
</template>

<script>
import UserService from '../services/UserService.js';
import router from '../views/'
import bus from '../services/AppBusService.js';

export default {
  name: 'NavBar',
  data () {
    return {
       user: {}
    }
  },
  mounted: function () {   
    var vm=this; 
    bus.$on('logged',function(user){
      vm.user=user;
    });    
  },  
  methods:{
    onLogout:function(){
        this.user={};
        UserService.logout();
        router.push('/login');
    }    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navBar {
  background-color: #0168AB !important;
  background-image: url('../assets/images/bg_right.png');
  background-repeat: no-repeat;
  background-position: right;
  top: 0px;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);  
  z-index: 1;
  color: white;
  margin-bottom: 10px;  
  display: flex;
  align-items: center;
}



.logo {
  height: 56px;
}

.link{
  color: white;
}

a {
  color: inherit !important;
  text-decoration: none !important;
  height: 100%;
  margin: 0px 10px 0px 10px;
  border-bottom: 2px solid transparent;
  font-size: 1.3em;
  font-weight: normal;
  font-family: 'Open Sans', sans-serif;
}

a:hover {
  border-bottom: 2px solid white !important;
}

</style>
