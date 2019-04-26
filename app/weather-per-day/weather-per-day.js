'use strict';

angular.module('myApp.weather-per-day', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/weather-per-day', {
    templateUrl: 'weather-per-day/weather-per-day.html',
    controller: 'weatherPerDay'
  });
}])

.controller('weatherPerDay', ['$scope', function($scope) {
    $scope.period = [
        {
            name: 'Paris',
            date: '26.01.19',
            temperature: 20
        }, {
            name: 'Paris',
            date: '27.01.19',
            temperature: 17
        }, {
            name: 'Paris',
            date: '28.01.19',
            temperature: 23
        }
    ];
}]);

