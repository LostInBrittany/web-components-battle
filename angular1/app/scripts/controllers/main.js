'use strict';

angular.module('angular1App')
  .controller('MainCtrl', function ($scope,$location,loginService) {

    $scope.userName=null;

    $scope.$on('loginChanged',function(){
      var user=loginService.getUser();
      if(user){
        $scope.userName=user.firstname;
      }
      else{
        $scope.userName=null;
      }
    });


    $scope.onLogout=function(){
      loginService.onLogout();
      $location.path('/login');
    }
  });
