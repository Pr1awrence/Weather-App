'use strict';

angular.module('weatherPerDay', ['ngRoute'])
    .component('weatherPerDay', {
        templateUrl: 'weather-per-day/weather-per-day.template.html',
        bindings: {
            day: '='
        },
        controller: function ($scope) {
            $scope.Math = window.Math;
            $scope.Date = window.Date;

            $scope.convertDate = function(day) {
                $scope.date = new Date(day).toDateString();
                return $scope.date;
            }
        }
    });
