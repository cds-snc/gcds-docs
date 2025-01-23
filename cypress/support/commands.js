// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// keep track of what we test so we dont test the same thing twice
let links_checked = [];

Cypress.Commands.add('scanDeadLinks', () => {
  cy.get('body').within(() => {
    let checked = 0;

    cy.get('a', { includeShadowDom: true })
      .each(link => {
        if (
          link.prop('href').startsWith('mailto') ||
          link.prop('href').includes('.pdf')
        )
          return;

        const check_url = link.prop('href');

        // skip if its already been checked
        if (links_checked.includes(check_url)) return;

        cy.request(link.prop('href')).as('link');

        links_checked.push(check_url);
        checked++;
      })
      .as('links');

    cy.get('@links').then(links => {
      cy.log('links checked', checked);
    });
  });
});
