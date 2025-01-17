/// <reference types="cypress" />

const enLinks = require('../../src/en/en.json');
const frLinks = require('../../src/fr/fr.json');

const pages = [];

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
      pages.push({
        name: `${pageName} - use case`,
        url,
      });
      pages.push({
        name: `${pageName} - design`,
        url: `${url}/design/`,
      });
      pages.push({
        name: `${pageName} - code`,
        url: `${url}/code/`,
      });
    } else {
      pages.push({
        name: pageName,
        url,
      });
    }
  }
});

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
      pages.push({
        name: `FR - ${pageName} - use case`,
        url,
      });
      pages.push({
        name: `FR - ${pageName} - design`,
        url: `${url}/design/`,
      });
      pages.push({
        name: `FR - ${pageName} - code`,
        url: `${url}/code/`,
      });
    } else {
      pages.push({
        name: `FR - ${pageName}`,
        url,
      });
    }
  }
});

describe(`A11Y test documentation site`, () => {
  for (const page of pages) {
    it(`${page.name}: ${page.url}`, () => {
      cy.visit(page.url);
      cy.get('.hydrated').then(() => {
        cy.injectAxe();
        cy.checkA11y(null, null, terminalLog);
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
