<template>
    <section class="container">
        <card-panel :person="person" @delete="goBack" :showDetail="true"></card-panel>
    </section>
</template>
<script>
import router from '.'
import peopleService from '../services/PeopleService.js'
import CardPanel from '../components/CardPanel.vue'

export default {
    name:'edit',
    data (){
        return {
            person:{}
        }
    },
    components:{
        'card-panel': CardPanel
    },
    beforeRouteEnter (route, redirect, next) {
        peopleService
        .fetchOne(route.params.id)
        .then(person => next(vm => {
            vm.person = person
        }))
        .catch(console.log.bind(console))
  },
  methods:{      
    goBack:function(){
        router.go(-1);
    }
  }
}


</script>
<style scoped>
     .container{
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>