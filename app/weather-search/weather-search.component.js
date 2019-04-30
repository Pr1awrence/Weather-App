'use strict';

angular.module('weatherSearch', ['ngRoute'])
    .component('weatherSearch', {
        templateUrl: 'weather-search/weather-search.template.html',
        controller: function ($scope, $location) {
            $scope.cityRedirect = function () {
                if($scope.city){
                    $location.path(`/cities/${$scope.city}`);
                }
            }
        }
    });

