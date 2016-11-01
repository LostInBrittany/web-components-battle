'use strict';

angular.module('angular1App')
  .factory('peopleService', function ($http) {
    var peoples;
    var BASE_URL = 'http://localhost:3001';
    return {
        fetch() {
            return $http.get(`${BASE_URL}/api/peoples`)
            .then(function(response){
                peoples=response.data;
                return peoples;
            })           
        }
    }
  });
