'use strict';

angular.module('angular1App')
  .factory('loginService', function ($rootScope) {
    var user;
    var BASE_URL = 'http://localhost:3001';
    return {
        onLogin: function(u){
            user=u;
            $rootScope.$broadcast('loginChanged');
        },
        onLogout: function(){
            user=null;
            $rootScope.$broadcast('loginChanged');
        },
        getLoginUrl: function(){
            return `${BASE_URL}/api/login`;
        },
        isConnected: function(){
            return user!=null;
        },
        getUser:function(){
            return user;
        } 
    }
  });
