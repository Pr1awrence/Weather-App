'use strict';

angular.module('weatherPeriod', ['ngRoute'])
    .component('weatherPeriod', {
        templateUrl: 'weather-period/weather-period.template.html',
        controller: function ($scope, $http, $location) {

            this.$onInit = () => {
                let city = $location.search().q;
                $scope.city = city;
                this.getDataFromWeatherAPI(city);
            };

            this.err = false;

            this.getDataFromWeatherAPI = function(city){
                this.err = false;
                $http.get('https://api.openweathermap.org/data/2.5/forecast?q=' + city)
                    .then(response => {
                        $scope.weatherInPeriod = response.data.list.filter(day => day.dt_txt.match(/15:00:00/g) !== null )
                    })
                    .catch(e => {
                        $scope.errMessage = e.data.message;
                        this.err = true;
                    })
            };

            $scope.sortColumn = "+main.temp";
        }
    });
