const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");


module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
   reporterOptions: { 
   reportDir: "cypress/reports", 
   charts: true, 
   reportPageTitle: "Rapport des tests", 
   embeddedScreenshots: true, 
   inlineAssets: true, 
 },

 env: { 
 allure: true, 
 allureResultsPath: "allure-results", 
 allureReuseAfterSpec: true, 
}, 

  e2e: {
    setupNodeEvents(on, config) {

       // plugin tags
      const { plugin: cypressGrepPlugin } = require("@cypress/grep/plugin");
      cypressGrepPlugin(config);

      //mochawesome
      require("cypress-mochawesome-reporter/plugin")(on);

      //Allure
      allureWriter(on, config);

      return config;
    },
  },
});
