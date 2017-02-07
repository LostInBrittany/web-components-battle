import bus from './AppBusService.js';



export default {
    user:{},
    onLogin: function(user){
        this.user=user;
        bus.$emit('logged',user);
    },
    logout: function(user){
        this.user=null;
        bus.$emit('logout');
    }
}
