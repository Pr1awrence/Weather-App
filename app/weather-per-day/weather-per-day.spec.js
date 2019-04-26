'use strict';

describe('myApp.weather-per-day module', function() {

  beforeEach(module('myApp.weather-per-day'));

  describe('weather-per-day controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var weatherPerDay = $controller('weatherPerDay');
      expect(weatherPerDay).toBeDefined();
    }));

  });
});