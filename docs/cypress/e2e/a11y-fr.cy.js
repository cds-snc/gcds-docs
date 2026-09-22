/// <reference types="cypress" />

import { links } from '../../src/i18n/links';

const pagesFr = [];

// Create index of French pages
Object.keys(links.fr).forEach(key => {
  const url = links.fr[key];
  if (
    !url.includes('developpement-en-cours') &&
    !url.includes('https') &&
    !url.includes('mailto') &&
    !url.includes('demo')
  ) {
    let regex = /composants\/[a-z]/;
    const pageName = key.replace(/([A-Z])/g, ' $1');
    if (regex.test(url) && !url.includes('valider')) {
      pagesFr.push({
        name: `${pageName} - use case`,
        url,
      });
      pagesFr.push({
        name: `${pageName} - design`,
        url: `${url}/design/`,
      });
      pagesFr.push({
        name: `${pageName} - code`,
        url: `${url}/code/`,
      });
    } else {
      pagesFr.push({
        name: `${pageName}`,
        url,
      });
    }
  }
});

describe(`A11Y test French documentation site`, () => {
  after;
  for (const page of pagesFr) {
    it(`${page.name}: ${page.url}`, () => {
      cy.visit(page.url, { timeout: 30000 });
      
      cy.waitForHydration();
      
      cy.injectAxe();
      cy.checkA11y(null, null, cy.terminalLog);
      // skip theme and topic menu since links are pulled from external source
      if (!page.url.includes('theme-and-topic-menu')) {
        cy.scanDeadLinks();
      }
    });
  }
});
