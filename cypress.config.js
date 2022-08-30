const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout:8000,
  projectId: 'r221oo',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://rahulshettyacademy.com/AutomationPractice/'
  },
});
