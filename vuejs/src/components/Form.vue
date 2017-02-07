<template>
    
        <md-card class="card-panel">            
            <md-card-header v-if="editMode">
                <div class="md-title">Update {{ person.firstname }} {{ person.lastname }}</div>
                <div class="md-subhead">{{person.id}}</div>
            </md-card-header>
            <md-card-content>
                <img class="picture" :src="person.photo || 'https://randomuser.me/api/portraits/lego/6.jpg'"/>
                <form @submit="submit">
                    <md-input-container :class="{'md-input-invalid': errors.has('firstname')}">
                        <label>Firstname</label>
                        <md-input v-validate data-vv-rules="required"  v-model="person.firstname" data-vv-name="firstname" ></md-input>                            
                        <div class="md-error">{{errors.first('firstname')}}</div>
                        <div v-show="errors.has('firstname')" class="md-error">Required</div>                         
                    </md-input-container>                                        
                    <pre>{{errors}}</pre>
                    <md-input-container>
                        <label>Lastname</label>
                        <md-input required v-model="person.lastname"></md-input>
                    </md-input-container>
                    <md-input-container>
                        <label>Email</label>
                        <md-input required v-model="person.email"></md-input>
                    </md-input-container>
                    <md-input-container>
                        <label>Phone</label>
                        <md-input required v-model="person.phone"></md-input>
                    </md-input-container>
                    <section>
                        <ccj-rib @rib-valid="onRib"></ccj-rib>
                        <span>RIB valid: {{valid}}</span>
                    </section>
                </form>
            </md-card-content>
            <md-card-actions>
                <md-button @click.prevent="cancel">Cancel</md-button>
                <md-button @click.prevent="submit">Submit</md-button>                
            </md-card-actions>
        </md-card>
    
</template>
<script>

    export default {
        name: 'form',
        props: ['person'],
        data() {
            return {
                valid:false
            }
        },
        computed: {
            editMode: function () {
                return this.person && this.person.id;
            }
        },
        methods: {
            submit: function () {
                this.$emit('save', this.person);
            },
            cancel: function () {
                this.$emit('cancel');
            },
            onRib: function (e) {
                this.valid=e.detail;
            }
        }
    }

</script>
<style scoped>
    .card-panel {
        padding: 10px;
        margin: 10px !important;
        min-width: 500px;
    }
    
    .card{
        margin: 0;
    }

    .picture {
        border-radius: 50%;
        width: 80px;        
    }
</style>