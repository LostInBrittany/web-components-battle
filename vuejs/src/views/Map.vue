<template>
<section class="container">
  <google-map latitude="48.8534100" longitude="2.3488000" fit-to-markers>    
    <google-map-marker v-for="person in people" :latitude="person.geo.lat" :longitude="person.geo.lng"
    draggable="true" animation="DROP" :open="person===currentPerson" :title="person.firstname +' '+ person.lastname"> 
      <section class="layout vertical center">
          <a class="username">
              <span>{{person.firstname}}</span>
              <span class="lastname">{{person.lastname}}</span>
          </a>
          <img :src="person.photo">
      </section>
    </google-map-marker>
  </google-map>
</section>
</template>

<script>
import peopleService from '../services/PeopleService.js'
import CardPanel from '../components/CardPanel.vue'

export default {
  name: 'sfeir-map',
  data () {
    return {
      people: [],
      currentPerson:{}
    }
  },
  components:{
    
  },
  beforeRouteEnter (route, redirect, next) {
    peopleService
        .fetch()
        .then(people => next(vm => {
          vm._people = vm.people = people
          if(route.params.id){
            var p = vm.people.filter(item=>item.id===route.params.id)
            vm.currentPerson=p[0];
          }
        }))
        .catch(console.log.bind(console));
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 600px;
  }

  md-card,
  google-map {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>