// features/step_definitions/browser_steps.js
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then, setDefaultTimeout}) {
  setDefaultTimeout(60 * 1000);

  Given('I am on the Cucumber.js GitHub repository', function() {
    return this.driver.get('https://github.com/cucumber/cucumber-js/tree/master');
  });

  When('I click on cli', function () {

    return this.driver.findElement({linkText: 'CLI'}).then(function(element) {

      return element.click();
    });
  });

  Then('I should see Running specific features', function () {
    var xpath = "//*[contains(text(),'" + "Running specific features" + "')]";
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition, 5000);
  });
});