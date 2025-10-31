const fs = require('fs');
const { readFileSync } = fs;

function getVersionNumber(target) {
  const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));

  const version = pkg.dependencies?.[target] || pkg.devDependencies?.[target];

  if (version) {
    const cleanVersion = version.replace(/^[\^~]/, '');
    return cleanVersion;
  } else {
    console.error(`Dependency "${target}" not found.`);
    process.exit(1);
  }
}

module.exports = {
  en: {
    heading: 'Not using any of those?',
    paragraph:
      'If you\'re not using any of the above, choose the "Other" option below.',
    cardLink: '/en/start-to-use/develop/html/',
    cardTitle: 'Other',
    cardDescription: 'View installation instructions for all other projects.',
    cardEnvExamples:
      'This includes static sites, CMS platforms, Node.js, Java, Svelte, .NET.',
    reachOut:
      'If you need help, <gcds-link href="/en/contact/#contact-us">reach out to us</gcds-link> and we\'ll help you get started.',
  },
  fr: {
    heading: 'Vous n’utilisez aucun de ces cadres?',
    paragraph:
      'Si vous n’utilisez aucun des cadres mentionnés ci-haut, choisissez l’option « Autre » ci-dessous.',
    cardLink: '/fr/demarrer/developpement/html/',
    cardTitle: 'Autre',
    cardDescription:
      'Consultez les instructions d’installation pour tout autre type de projet. ',
    cardEnvExamples:
      'P. ex., les sites statiques, les plateformes CMS, Node.js, Java, Svelte, .NET.',
    reachOut:
      'Si vous avez besoin d’aide, <gcds-link href="/fr/contactez/">n’hésitez pas à nous écrire</gcds-link> et nous vous aiderons à partir du bon pied.',
  },
  cssshortcutsversion: getVersionNumber('@gcds-core/css-shortcuts'),
};
