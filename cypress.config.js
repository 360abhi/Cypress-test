const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://practicetestautomation.com/practice-test-login/",
    setupNodeEvents(on, config) {
       allureWriter(on, config, {
        hideCyCommands: true,
      });
      return config;
    },
    env: {
      allure: true,
      allureReuseAfterSpec: false, // Try setting this to false
      allureAddVideoOnPass: true,
      allureAttachRequests: true
    }
  },
  video: false,
  trashAssetsBeforeRuns: true,
  allureResultsPath: 'allure-results' // Explicitly set results path
});