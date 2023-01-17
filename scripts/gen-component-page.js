const fs = require('fs');
const path = require('path');
const replace = require('replace-in-file');
const prompt = require('prompt-sync')();

const englishName = prompt('English name: ');
const frenchName = prompt('French name: ');

let englishDirectory = './src/en/components/';
let frenchDirectory = './src/fr/composants/';

copyFolderSync('./examples/component-name', `${englishDirectory}${englishName}`);
copyFolderSync('./examples/component-name', `${frenchDirectory}${frenchName}`);

fs.rename(`${frenchDirectory}${frenchName}/use-case.md`, `${frenchDirectory}${frenchName}/case-dusage.md`, function(err) {
  if ( err ) console.log('ERROR: ' + err);
});

let engOptions = {
  files: [
    `${englishDirectory}${englishName}/base.md`,
    `${englishDirectory}${englishName}/use-case.md`,
    `${englishDirectory}${englishName}/design.md`,
    `${englishDirectory}${englishName}/code.md`
  ],
  from: [/componentName/g, /globalComponentName/g, /navKey/g, /{locale}/g, /{Components}/g, /{components}/g, /{localeLower}/g],
  to: [englishName, englishName, englishName.replace('-', ''), "EN", "Components", "components", "en"]
};
let frOptions = {
  files: [
    `${frenchDirectory}${frenchName}/base.md`,
    `${frenchDirectory}${frenchName}/case-dusage.md`,
    `${frenchDirectory}${frenchName}/design.md`,
    `${frenchDirectory}${frenchName}/code.md`
  ],
  from: [/componentName/g, /globalComponentName/g, /navKey/g, /{locale}/g, /{Components}/g, /{components}/g, /{localeLower}/g],
  to: [frenchName, englishName, englishName.replace('-', ''), "FR", "Composants", "composants", "fr"]
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