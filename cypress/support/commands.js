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
        const href = link.prop('href');

        if (
          href.startsWith('mailto') ||
          href.includes('.pdf') ||
          href.includes('https://www.npmjs.com')
        )
          return;

        // Skip GitHub UI links to avoid 429 errors
        if (href.startsWith('https://github.com/')) {
          // Convert blob URLs to raw URLs for raw content check
          const rawMatch = href.match(
            /^https:\/\/github\.com\/([^/]+)\/([^/]+)\/blob\/([^/]+)\/(.+)$/,
          );

          if (rawMatch) {
            const [, owner, repo, branch, path] = rawMatch;
            const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${path}`;
            cy.request(rawUrl).as('link');
            links_checked.push(rawUrl);
            checked++;
          }

          return;
        }

        // skip if its already been checked
        if (links_checked.includes(href)) return;

        cy.request(href).as('link');
        links_checked.push(href);
        checked++;
      })
      .as('links');

    cy.get('@links').then(links => {
      cy.log('links checked', checked);
    });
  });
});

// Make the violation impacts more human readable
const displayImpacts = violations => {
  const impacts = violations.map(violation => violation.impact);

  const uniqueArr = [...new Set(impacts)];

  if (uniqueArr.length === 1) {
    return `with a ${uniqueArr[0]} impact`;
  }

  return (
    'with ' +
    uniqueArr.slice(0, -1).join(', ') +
    ' and ' +
    uniqueArr.slice(-1) +
    ' impacts.'
  );
};

Cypress.Commands.add('terminalLog', violations => {
  cy.task(
    'log',
    `${violations.length} accessibility violation${
      violations.length === 1 ? '' : 's'
    } ${violations.length === 1 ? 'was' : 'were'} detected ${displayImpacts(violations)}`,
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
});
