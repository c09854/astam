'use strict';
var app = angular.module('astam-app', [])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '../assets/main.html',
    controller: 'MainCtrl'
  })
  .when('/contact', {
    templateUrl: '../assets/contact.html',
    controller: 'ContactController'
  })
}]);
