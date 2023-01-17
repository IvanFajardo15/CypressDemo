const { defineConfig } = require("cypress");
/// <reference types="Cypress" />
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    specPattern : "cypress/Integration/Ejemplos/*.js",
    projectId: "rhuywc"
  },
  
});