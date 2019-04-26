'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
    'ngRoute',
    'myApp.weather-per-day',
    'myApp.view2',
    'myApp.version'
])
.controller('myApp', function ($scope) {
    $scope.var1 = 'Something about...';
});

config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/weather-per-day'});
}]);
