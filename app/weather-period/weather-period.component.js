'use strict';

angular.module('weatherPeriod', ['ngRoute'])
    .component('weatherPeriod', {
        templateUrl: 'weather-period/weather-period.template.html',
        controller: function () {
            this.weatherInPeriod = [
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
            ]
        }
    });
