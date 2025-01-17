const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)
    
          return null
        },
        table(message) {
          console.table(message)
    
          return null
        }
      })
    },
    baseUrl: 'http://localhost:8080',
    viewportWidth: 1280,
    viewportHeight: 850,
    screenshotOnRunFailure: false,
  },
});
