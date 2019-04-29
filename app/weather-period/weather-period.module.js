angular.module('weatherPeriod', [
])
    .config(['$routeProvider',
        function config($routeProvider, $locationProvider) {
            $routeProvider
                .when('/city', {
                    template: '<weather-period></weather-period>'
                });

            $locationProvider.html5Mode(true).hashPrefix('!');
        }
    ]);