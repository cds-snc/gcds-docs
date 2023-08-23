const fs = require('fs');
const path = require('path');
const replace = require('replace-in-file');
const prompt = require('prompt-sync')();
const slugify = require("./utils/slugify");

let englishName = prompt('English name: ');
let frenchName = prompt('French name: ');

let englishNameSlug =slugify(englishName);
let frenchNameSlug =slugify(frenchName);

let englishDirectory = './src/en/components/';
let frenchDirectory = './src/fr/composants/';

copyFolderSync('./examples/component-name', `${englishDirectory}${englishNameSlug}`);
copyFolderSync('./examples/component-name', `${frenchDirectory}${frenchNameSlug}`);

fs.rename(`${frenchDirectory}${frenchNameSlug}/use-case.md`, `${frenchDirectory}${frenchNameSlug}/case-dusage.md`, function(err) {
  if ( err ) console.log('ERROR: ' + err);
});

let templateKeys = [
  /componentName/g,
  /{componentNameSlug}/g,
  /navKey/g,
  /{locale}/g,
  /alsoCalled/g,
  /componentPreview/g,
  /{components}/g,
  /{localeLower}/g,
  /related/g,
  /anatomy/g,
  /designA11y/g,
  /buildComponent/g,
  /codeA11y/g,
  /{componentNameSlugEN}/g
];

let engOptions = {
  files: [
    `${englishDirectory}${englishNameSlug}/base.md`,
    `${englishDirectory}${englishNameSlug}/use-case.md`,
    `${englishDirectory}${englishNameSlug}/design.md`,
    `${englishDirectory}${englishNameSlug}/code.md`
  ],
  from: templateKeys,
  to: [
    englishName,
    englishNameSlug,
    englishNameSlug.replace('-', ''),
    "EN",
    "Also called",
    `${englishName} component preview`,
    "components",
    "en",
    englishNameSlug,
    "Related components"
    `${englishName} anatomy`,
    `Design and accessibility for ${englishName}`,
    `Build a ${englishName}`,
    `Coding and accessibility for ${englishName}`,
    englishNameSlug
  ]
};
let frOptions = {
  files: [
    `${frenchDirectory}${frenchNameSlug}/base.md`,
    `${frenchDirectory}${frenchNameSlug}/case-dusage.md`,
    `${frenchDirectory}${frenchNameSlug}/design.md`,
    `${frenchDirectory}${frenchNameSlug}/code.md`
  ],
  from: templateKeys,
  to: [
    frenchName,
    frenchNameSlug,
    englishNameSlug.replace('-', ''),
    "FR",
    "Autres noms ",
    `Aperçu du composant de ${frenchName}`,
    "composants",
    "fr",
    frenchNameSlug,
    "Composants connexes",
    `Structure de la ${frenchName}`,
    `Accessibilité et design des ${frenchName}`,
    `Créer une case à ${frenchName}`,
    `Accessibilité et codage des cases à ${frenchName}`,
    englishNameSlug
  ]
};

try {
  replace.sync(engOptions);
  replace.sync(frOptions);
}
catch (error) {
  console.error('Error occurred:', error);
}


function copyFolderSync(from, to) {
  fs.mkdirSync(to);
  fs.readdirSync(from).forEach(element => {
    if (fs.lstatSync(path.join(from, element)).isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    } else {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
}