'use strict';

var app = angular.module('countdown-app', [])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/contact', {
    templateUrl: 'views/contact.html',
    controller: 'ContactController'
  })
}]);
