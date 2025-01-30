/// <reference types="cypress" />

const frLinks = require('../../src/fr/fr.json');

const pagesFr = [];

// Create index of French pages
Object.keys(frLinks.links).forEach(key => {
  const url = frLinks.links[key];
  if (
    !url.includes('developpement-en-cours') &&
    !url.includes('https') &&
    !url.includes('mailto') &&
    !url.includes('demo')
  ) {
    let regex = /composants\/[a-z]/;
    const pageName = key.replace(/([A-Z])/g, ' $1');
    if (regex.test(url)) {
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
  after
  for (const page of pagesFr) {
    it(`${page.name}: ${page.url}`, () => {
      cy.visit(page.url, { timeout: 10000 });
      cy.get('.hydrated').then(() => {
        cy.injectAxe();
        cy.checkA11y(null, null, terminalLog);
        // skip theme and topic menu since links are pulled from external source
        if (!page.url.includes('menu-thematique')) {
          cy.scanDeadLinks();
        }
      });
    });
  }
});

// Output a11y errors in table in console
function terminalLog(violations) {
  cy.task(
    'log',
    `${violations.length} accessibility violation${
      violations.length === 1 ? '' : 's'
    } ${violations.length === 1 ? 'was' : 'were'} detected`,
  );
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length,
    }),
  );

  cy.task('table', violationData);
}
