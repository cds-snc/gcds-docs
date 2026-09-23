/// <reference types="cypress" />

import versionConfig from '../../src/routing/versioned/version-config.json';

const componentVersions = versionConfig.sections[0].versions;

describe(`A11Y test French documentation site`, () => {
  let urls = Cypress.env('frSitemapUrls');

  // only include latest versions in a11y test
  componentVersions.forEach(version => {
    urls = urls.filter((url) => !url.includes(`/composants/${version}`));
  });

  urls.forEach((url) => {
    it(url.replace(Cypress.config('baseUrl'), ''), () => {
      cy.visit(url, { timeout: 30000 });

      cy.waitForHydration();
      
      cy.injectAxe();
      cy.checkA11y(null, null, cy.terminalLog);
      // skip theme and topic menu since links are pulled from external source
      if (!url.includes('theme-and-topic-menu')) {
        cy.scanDeadLinks();
      }
      
    });
  });
});
