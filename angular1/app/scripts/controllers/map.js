'use strict';

angular.module('angular1App')
  .controller('mapCtrl', function ($scope,peopleService, $routeParams) {
    var id=$routeParams.id?$routeParams.id:'';
    peopleService.fetch().then(function(people){
      $scope.peoples=people;
      if(id){
        var p=people.filter((p)=>p.id===id);
        $scope.currentPerson=p[0];
      }
    })
      
  });
