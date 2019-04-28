'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /weather-per-day when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/weather-per-day");
  });


  describe('weather-per-day', function() {

    beforeEach(function() {
      browser.get('index.html#!/weather-per-day');
    });


    it('should render weather-per-day when user navigates to /weather-per-day', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('weather-period', function() {

    beforeEach(function() {
      browser.get('index.html#!/weather-period');
    });


    it('should render weather-period when user navigates to /weather-period', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
