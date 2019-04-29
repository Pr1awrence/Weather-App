'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
    'weatherPeriod',
    'weatherPerDay',
    'weatherSearch',
    'ngRoute'
])
.controller('myApp', function () {
})

.config(['$locationProvider', '$routeProvider', '$httpProvider', function ($locationProvider, $routeProvider, $httpProvider) {
    //interceptor
    $httpProvider.interceptors.push(function ($q) {
        return {
            'request': function (config) {
                if(config.url.indexOf(`q=`) !== -1){
                    config.url = config.url + '&appid=2c24af2082f6197b1528df999159cd67';
                }
                return config || $q.when(config);
            }

        }
    });

    $routeProvider
        .when('/city', {
            template: '<weather-period></weather-period>'
        });

    $locationProvider.hashPrefix('!');
}]);
