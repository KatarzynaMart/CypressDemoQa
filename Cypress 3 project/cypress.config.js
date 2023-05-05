const { defineConfig } = require("cypress");
//For Cucumber Integration
const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const nodePolyfills =
  require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      await addCucumberPreprocessorPlugin(on, config) // to allow json to be produced
      // To use esBuild for the bundler when preprocessing
      on('file:preprocessor', createBundler({
        plugins: [nodePolyfills(), createEsbuildPlugin(config)],
      }))
      return config;
    },
    specPattern: "cypress/e2e/features/*.feature",
    chromeWebSecurity: false
  },
});