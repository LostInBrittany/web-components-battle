<template>
  <section class="container">    
    <card-panel v-bind:person="person" @delete="random"></card-panel>
    <md-button class="md-fab md-fab-bottom-right md-primary" @click="random">
      <md-icon>cached</md-icon>
    </md-button>
  </section>
</template>

<script>
import peopleService from '../services/PeopleService.js'
import CardPanel from '../components/CardPanel.vue'

export default {
  name: 'sfeir-home',
  data () {
    return {
      person: {},
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    'card-panel': CardPanel
  },
  beforeRouteEnter (route, redirect, next) {
    peopleService
      .fetchRandom()
      .then(person => next(vm => {
        vm.person = person;
      }))
      .catch(console.log.bind(console))
  },
  methods:{
    random: function(){
      peopleService
      .fetchRandom()
      .then(person =>{ 
        this.person = person;        
      })
      .catch(console.log.bind(console))
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