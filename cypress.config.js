const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.google.com",
    defaultCommandTimeout: 3000,
    reporter: 'cypress-mochawesome-reporter',
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
