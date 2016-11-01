'use strict';

angular.module('angular1App', [
  'ngMaterial','ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      })
      .when('/peoples', {
        templateUrl: 'views/peoples.html',
        controller: 'peoplesCtrl'
      })
      .when('/maps/:id', {
        templateUrl: 'views/map.html',
        controller: 'mapCtrl'
      })
      .when('/maps', {
        templateUrl: 'views/map.html',
        controller: 'mapCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });
