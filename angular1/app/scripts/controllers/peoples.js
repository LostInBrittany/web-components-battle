'use strict';

angular.module('angular1App')
  .controller('peoplesCtrl', function ($scope,peopleService,$location) {
  
    peopleService.fetch().then(function(p){
      $scope.peoples=p;
    })
      
  });
