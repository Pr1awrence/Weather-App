'use strict';

angular.module('weatherPerDay', ['ngRoute'])
    .component('weatherPerDay', {
        templateUrl: 'weather-per-day/weather-per-day.template.html',
        controller: function () {
            this.weatherInDay = {};
        }
    });
