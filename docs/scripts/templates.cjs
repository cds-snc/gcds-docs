const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
const fs = require('fs');
const path = require('path');

// To add new templates update this object
// The key will be used to create the file in ~components/PageTemplate
const templates = {
  basic: [
    {
      url: "https://raw.githubusercontent.com/cds-snc/gcds-examples/refs/heads/main/templates/english/basic/basic-page-template.html",
      lang: 'en',
    },
    {
      url: "https://raw.githubusercontent.com/cds-snc/gcds-examples/refs/heads/main/templates/french/basic/basic-page-template.html",
      lang: 'fr',
    },
  ],
  basicOTP: [
    {
      url: "https://raw.githubusercontent.com/cds-snc/gcds-examples/refs/heads/main/templates/english/basic/extensions/basic-page-template-table-of-contents.html",
      lang: 'en',
    },
    {
      url: "https://raw.githubusercontent.com/cds-snc/gcds-examples/refs/heads/main/templates/french/basic/extensions/basic-page-template-table-of-contents.html",
      lang: 'fr',
    },
  ],
};

const outputDirectory = './src/components/PageTemplate';

const NPM_PACKAGES = {
  'css-shortcuts': '@gcds-core/css-shortcuts',
  components: '@gcds-core/components',
};

// Looks up the current "latest" version of each package from npm.
async function getPackageVersions() {
  const entries = await Promise.all(
    Object.entries(NPM_PACKAGES).map(async ([key, pkgName]) => {
      const response = await fetch(
        `https://registry.npmjs.org/${pkgName}`,
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch npm metadata for ${pkgName}: ${response.statusText}`,
        );
      }
      const data = await response.json();
      return [key, data['dist-tags'].latest];
    }),
  );
  return Object.fromEntries(entries);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function applyPackageVersions(html, versions) {
  let result = html;
  for (const [key, pkgName] of Object.entries(NPM_PACKAGES)) {
    const version = versions[key];
    const placeholder = new RegExp(
      `${escapeRegExp(pkgName)}@<version-number>`,
      'g',
    );
    result = result.replace(placeholder, `${pkgName}@${version}`);
  }
  return result;
}

// Fetches the raw text content of a single URL.
async function fetchContent(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
  }
  return response.text();
}

function inferLang(url) {
  if (url.includes('/english/')) return 'en';
  if (url.includes('/french/')) return 'fr';
  throw new Error(`Could not infer language from URL: ${url}`);
}

async function generateTemplateModule(key, files, outputDir, versions) {
  const content = {};

  for (const file of files) {
    const lang = file.lang || inferLang(file.url);
    console.log(`downloading ${lang} file for "${key}"`, file.url);
    const html = await fetchContent(file.url);
    content[lang] = applyPackageVersions(html, versions);
  }

  fs.mkdirSync(outputDir, { recursive: true });
  const outputPath = path.join(outputDir, `${key}.js`);

  const fileBody =
    `export const ${key} = {\n` +
    `  en: ${JSON.stringify(content.en ?? '')},\n` +
    `  fr: ${JSON.stringify(content.fr ?? '')},\n` +
    `};\n`;

  fs.writeFileSync(outputPath, fileBody, 'utf8');
  console.log(`File saved to ${outputPath}`);
}

async function downloadTemplates() {
  const versions = await getPackageVersions();
  console.log('Using package versions:', versions);

  for (const [key, files] of Object.entries(templates)) {
    try {
      await generateTemplateModule(key, files, outputDirectory, versions);
    } catch (error) {
      console.error(`Error generating template "${key}": ${error.message}`);
    }
  }
}

downloadTemplates();