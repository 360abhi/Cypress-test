const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Your e2e configuration
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,    // Enable HTML report
    json: false,   // Disable JSON output
    reportFilename: 'index',  // Name the file 'index.html'
  },
  video: false     // Optional: Disable videos if not needed
});