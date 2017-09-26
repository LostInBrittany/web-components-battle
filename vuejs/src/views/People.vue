<template>
  <div>
    <div class="header row">
      <h1 class="col s12 flow-text">You have {{people.length}} contacts</h1>
      <search-bar @search="filterPeople"></search-bar>
    </div>
    <section class="container">
      <card-panel 
          v-for="person in people" 
          :person="person" 
          @delete="deletePerson"
          :key="person.firstname +' '+ person.lastname"></card-panel>
    </section>

    <md-button class="md-fab md-fab-bottom-right md-primary" @click="showDialog">
      <md-icon>add</md-icon>
    </md-button>>


    <md-dialog ref="dialog">
      <md-dialog-title>Contact informations</md-dialog-title>
      <md-dialog-content>
        <person-form  :person="{}" @save="addPerson" @cancel="hideDialog"></person-form>
      </md-dialog-content>
    </md-dialog>
  </div>
</template>

<script>
  import peopleService from '../services/PeopleService.js'
  import CardPanel from '../components/CardPanel.vue'
  import SearchBar from '../components/SearchBar.vue'
  import Modal from '../components/Modal.vue'
  import Form from '../components/Form.vue'

  export default {
    name: 'sfeir-people',
    data() {
      return {
        people: [],
        msg: 'Welcome to Your Vue.js App',
        showModal: false
      }
    },
    components: {
      'card-panel': CardPanel,
      'search-bar': SearchBar,
      'modal': Modal,
      'person-form': Form
    },
    beforeRouteEnter(route, redirect, next) {
      peopleService
        .fetch()
        .then(people => next(vm => {
          vm._people = vm.people = people
        }))
        .catch(console.log.bind(console))
    },
    methods: {
      showDialog() {
        this.$refs['dialog'].open();
        this.showModal = true;
      },
      hideDialog() {
        this.$refs['dialog'].close();
        this.showModal = false;
      },
      addPerson(p) {
        peopleService
          .create(p)
          .then(newPerson => {
            this._people.push(newPerson)
            this.hideDialog();
          });
      },
      deletePerson(person) {
        peopleService
          .delete(person.id)
          .then(() => {
            this._people = this.people = this._people.filter(item => item.id != person.id);
          })
          .catch(console.log.bind(console))
      },
      filterPeople(search) {
        if (!search) {
          this.people = this._people
        }
        else {
          this.people = this._people.filter(item => {
            return item.firstname.toLowerCase().indexOf(search) != -1 || item.lastname.toLowerCase().indexOf(search) != -1;
          });
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .header {
    text-align: center;
  }
  
  .header h1 {
    font-weight: bold;
  }
</style>