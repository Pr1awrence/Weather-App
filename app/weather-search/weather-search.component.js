'use strict';

angular.module('weatherSearch', ['ngRoute'])
    .component('weatherSearch', {
        templateUrl: 'weather-search/weather-search.template.html',
        controller: function ($scope, $location) {

            $scope.provideCity = function () {
                $location.path(`city?q=${$scope.city}`);
            }
        }
    });