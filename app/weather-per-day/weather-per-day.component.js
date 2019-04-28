'use strict';

angular.module('weatherPerDay', ['ngRoute'])
    .component('weatherPerDay', {
        templateUrl: 'weather-per-day/weather-per-day.template.html',
        bindings: {
            day: '='
        },
        controller: function ($scope) {
            $scope.Math = window.Math;
        }
    });
