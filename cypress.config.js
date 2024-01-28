const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.google.com",
    defaultCommandTimeout: 3000,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      
    },
  },
});
