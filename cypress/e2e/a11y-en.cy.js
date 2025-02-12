/// <reference types="cypress" />

const enLinks = require('../../src/en/en.json');

const pagesEn = [];

// Create index of English pages
Object.keys(enLinks.links).forEach(key => {
  const url = enLinks.links[key];
  if (
    !url.includes('coming-soon') &&
    !url.includes('https') &&
    !url.includes('mailto') &&
    !url.includes('demo')
  ) {
    let regex = /components\/[a-z]/;
    const pageName = key.replace(/([A-Z])/g, ' $1');
    if (regex.test(url)) {
      pagesEn.push({
        name: `${pageName} - use case`,
        url,
      });
      pagesEn.push({
        name: `${pageName} - design`,
        url: `${url}/design/`,
      });
      pagesEn.push({
        name: `${pageName} - code`,
        url: `${url}/code/`,
      });
    } else {
      pagesEn.push({
        name: pageName,
        url,
      });
    }
  }
});

describe(`A11Y test English documentation site`, () => {
  for (const page of pagesEn) {
    it(`${page.name}: ${page.url}`, () => {
      cy.visit(page.url, { timeout: 30000 });
      cy.get('.hydrated').then(() => {
        cy.injectAxe();
        cy.checkA11y(null, null, cy.terminalLog);
        // skip theme and topic menu since links are pulled from external source
        if (!page.url.includes('theme-and-topic-menu')) {
          cy.scanDeadLinks();
        }
      });
    });
  }
});
