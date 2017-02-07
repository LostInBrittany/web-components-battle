<template>
    <section class="container">
        <person-form  v-bind:person="person" v-on:save="updatePerson" v-on:cancel="goBack"></person-form>
    </section>
</template>
<script>
import router from '.'
import peopleService from '../services/PeopleService.js'
import Form from '../components/Form.vue'

export default {
    name:'edit',
    data (){
        return {
            person:{}
        }
    },
    components:{
        'person-form': Form
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
      updatePerson:function(p){
        peopleService
        .update(p)
        .then(newPerson=>{
          this.goBack();
        });
    },
    goBack:function(){
        router.go(-1);
    }
  }
}


</script>
<style scoped></style>