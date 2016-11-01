'use strict';

angular.module('angular1App')
  .controller('loginCtrl', function ($scope,loginService,$location) {
  
    $scope.loginUrl=loginService.getLoginUrl();
  
    $scope.login=function(event){
      var userInfo = event.detail.userInfo.get();
      console.log('login yeahhhh',userInfo);
      loginService.onLogin(userInfo);    
      $location.path('/peoples');
    }
  });
