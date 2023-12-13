const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    specPattern: 'cypress/integration/**/*.js',
   videoCompression:15,
   video:false
  },
  

});
