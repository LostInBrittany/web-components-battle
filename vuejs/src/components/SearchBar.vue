<template>
    <div class="col s12">
        <form class="col s6 offset-s3" @submit.prevent>
            <div class="input-field">                
                <md-input-container>
                        <md-icon>search</md-icon>                
                        <label>Search</label>
                        <md-input required @input="onInput"></md-input>
                </md-input-container>                  
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        value: String
    },
    computed: {
        query () { return this.value }
    },
    methods: {
        onInput (search) {
            this.$emit('search', search)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .input-field {
        text-align: center;
        margin: auto;
        width:600px;    
    }
</style>