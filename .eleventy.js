const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const sitemap = require('@quasibit/eleventy-plugin-sitemap');
const moment = require('moment');
const chroma = require('chroma-js');
const markdownIt = require('markdown-it');
const svgContents = require('eleventy-plugin-svg-contents');
const codeClipboard = require('eleventy-plugin-code-clipboard');
const { getLatestCdnVersion } = require('./utils/cdn-info');
const { DateTime } = require('luxon');

const contextMenu = require('./utils/context-menu');
const displayTokens = require('./utils/display-tokens');
const markdownAnchor = require('./utils/anchor');
const slugify = require('./utils/slugify');
const { encode } = require('html-entities');

const { downloadTemplates } = require('./scripts/templates');
const { execSync } = require('child_process');

const demoDates = require('./src/_data/registerdemos.js');

module.exports = function (eleventyConfig) {
  // Pass through copies

  eleventyConfig.addPassthroughCopy('_redirects');
  eleventyConfig.addPassthroughCopy('./src/styles/style.css');
  eleventyConfig.addPassthroughCopy('./src/styles/prism.css');
  eleventyConfig.addPassthroughCopy('./src/images');
  eleventyConfig.addPassthroughCopy('./src/scripts/code-showcase.js');
  eleventyConfig.addPassthroughCopy('./src/scripts/search.js');
  eleventyConfig.addPassthroughCopy('./src/scripts/code-copy.js');
  eleventyConfig.addPassthroughCopy('./src/scripts/general.js');
  eleventyConfig.addPassthroughCopy('./src/scripts/component-preview.js');
  eleventyConfig.addPassthroughCopy('./src/scripts/prism.min.js');
  eleventyConfig.addPassthroughCopy(
    './src/scripts/component-preview-iframe.js',
  );
  eleventyConfig.addPassthroughCopy('./src/scripts/sanitize-contact-form.js');
  eleventyConfig.addPassthroughCopy('./src/favicon.ico');
  eleventyConfig.addPassthroughCopy({ './src/variables/': 'variables' });
  eleventyConfig.addPassthroughCopy({
    './node_modules/@cdssnc/gcds-components/': 'components',
  });
  eleventyConfig.addPassthroughCopy({
    './node_modules/@cdssnc/gcds-utility/dist/gcds-utility.min.css':
      'gcds-utility.min.css',
  });
  eleventyConfig.addPassthroughCopy({
    './node_modules/@cdssnc/sanitize-pii/dist/umd/sanitize-pii.min.js':
      './scripts/sanitize-pii.min.js',
  });
  // Add copy fo a11y testing
  eleventyConfig.addPassthroughCopy('./.pa11yci.json');

  // Plugins

  eleventyConfig.addPlugin(svgContents);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(codeClipboard);
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: process.env.DOMAIN || 'http://localhost:8080',
    },
  });

  // Filters

  eleventyConfig.addFilter('sortCollection', arr => {
    // get unsorted items
    return arr.sort(function (a, b) {
      return a.data.eleventyNavigation.order - b.data.eleventyNavigation.order;
    });
  });

  eleventyConfig.addFilter('tabs', (arr, tag) => {
    let pages = {};

    arr.map(page => {
      if (page.data.tags) {
        page.data.tags.map(v => {
          if (v == tag) {
            pages[page.data.tags[1]] = page;
          }
        });
      }
    });

    return pages;
  });

  eleventyConfig.addFilter('getBreadcrumbs', contextMenu.findBreadcrumbEntries);
  eleventyConfig.addFilter('onThisPage', function (nodes) {
    let urls = {};
    for (let key in nodes) {
      urls[nodes[key]] = slugify(nodes[key]);
    }
    return urls;
  });

  /*
   * Filter to sort component navigation items
   */
  eleventyConfig.addFilter('sortAlpha', function (collection) {
    return collection.sort(function (a, b) {
      var textA = a.title.toUpperCase();
      var textB = b.title.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
  });

  /* Format last modified date */
  eleventyConfig.addFilter('dateLastModified', function (date) {
    return moment(date).format('YYYY-MM-DD');
  });

  // Token filters
  eleventyConfig.addFilter('contrast', function (value, b = '#FFF') {
    let contrast = chroma.contrast(value, b);
    return Math.floor(contrast * 100) / 100;
  });

  eleventyConfig.addFilter('border', function (value, b = '#FFF') {
    let contrast = chroma.contrast(value, b);
    return contrast > 3 ? b : 'black';
  });

  eleventyConfig.addFilter('hexTo', function (value, mode = 'hsl') {
    return chroma(value).css(mode);
  });

  eleventyConfig.addFilter('fixTokenName', function (value) {
    let fixName = '';
    function onlyCapitalLetters(str) {
      return str.replace(/[^A-Z]+/g, '');
    }

    if (onlyCapitalLetters(value)) {
      fixName = value.replace(
        onlyCapitalLetters(value),
        `-${onlyCapitalLetters(value).toLowerCase()}`,
      );
    } else {
      fixName = value;
    }
    return fixName;
  });

  eleventyConfig.addFilter('dig', function (value, object) {
    let bottom = object;
    value.forEach(element => {
      bottom = bottom[element];
    });
    return bottom;
  });

  eleventyConfig.addFilter('colourFromValue', function (value, tokens) {
    let colourName = '';
    Object.keys(tokens).forEach(colour => {
      Object.keys(tokens[colour]).forEach(weightValue => {
        if (tokens[colour][weightValue]['value'] === value) {
          colourName = `${colour}-${weightValue}`;
        }
      });
    });
    return colourName;
  });

  eleventyConfig.addFilter('encode-html', data => {
    return encode(data);
  });

  eleventyConfig.addFilter('stringify', data => {
    return JSON.stringify(data, null, '\t');
  });

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
    breaks: false,
    linkify: false,
  })
    .use(markdownAnchor)
    .use(codeClipboard.markdownItCopyButton);
  markdownLibrary.disable('blockquote');
  markdownLibrary.disable('code');

  // Short codes

  // Add correct step to installation "CSS Shortcuts" section
  eleventyConfig.addPairedShortcode(
    'addCssShortcuts',
    (content, lang = 'en', step) => {
      const langStrings = {
        en: {
          heading: 'Add CSS Shortcuts stylesheet',
          paragraphs: [
            'We recommend using <gcds-link href="/en/css-shortcuts">GC Design System CSS Shortcuts</gcds-link> to apply predefined CSS utility classes. These classes align with our components and help you build faster while maintaining consistency.',
            'Using CSS Shortcuts in your project is optional. It can be added alongside your existing CSS.',
            'Navigate to your project’s root folder and run the following command:',
          ],
        },
        fr: {
          heading: 'Ajouter la feuille de style des Raccourcis CSS ',
          paragraphs: [
            'Nous recommandons d’utiliser les <gcds-link href="/fr/raccourcis-css">raccourcis CSS de Système de design GC</gcds-link> pour appliquer des classes utilitaires CSS prédéfinies. Ces classes sont conformes à nos composants et aident à construire plus rapidement tout en assurant l’uniformité.',
            'L’utilisation des Raccourcis CSS dans votre projet n’est pas obligatoire. Ils peuvent être ajoutés à votre CSS existant.',
            'Naviguez vers le dossier racine de votre projet et exécutez la commande suivante :',
          ],
        },
      };

      return `
      <div>
        <gcds-heading tag="h3">${step ? `${step}. ` : ''} ${langStrings[lang].heading}</gcds-heading>
        ${langStrings[lang].paragraphs.map(p => `<gcds-text>${p}</gcds-text>`).join('\n')}
        <pre><code class="language-js">npm install @gcds-core/css-shortcuts</code></pre>
      </div>
    `;
    },
  );

  // Add correct step to installation "start building" section
  eleventyConfig.addPairedShortcode(
    'startBuilding',
    (content, lang = 'en', step) => {
      const langStrings = {
        en: {
          heading: 'Start building',
          text: 'Once you’ve installed the design system, you can start pulling the code you need into your project.',
          subheadingCode: 'Start with your code',
          subheadingComponents: 'Start with components',
          subheadingTemplate: 'Start with a template',
          textCode:
            'Add style classes to HTML using <gcds-link href="/en/css-shortcuts">CSS Shortcuts</gcds-link>. This is for your custom code.',
          textComponents:
            'Add <gcds-link href="/en/components">components</gcds-link> to build a product that meets your needs.',
          textTemplates:
            'Start with a <gcds-link href="/en/page-templates">basic page template</gcds-link>. It combines multiple components for common GC pages.',
        },
        fr: {
          heading: 'Commencer à créer',
          text: 'Une fois le système de design installé, vous pouvez commencer à intégrer le code dont vous avez besoin dans votre projet. ',
          subheadingCode: 'Commencer par le code',
          subheadingComponents: 'Commencer par les composants',
          subheadingTemplate: 'Commencer par un modèle',
          textCode:
            'Ajoutez des classes de style à votre code HTML à l’aide des <gcds-link href="/fr/raccourcis-css">Raccourcis CSS</gcds-link>. Ceci est pour votre code personnalisé.',
          textComponents:
            'Ajoutez des <gcds-link href="/fr/composants">composants</gcds-link> pour créer un produit qui répond à vos besoins.',
          textTemplates:
            'Commencez avec un <gcds-link href="/fr/modeles-de-page">modèle de page de base</gcds-link>. Il combine plusieurs composants pour des pages communes du GC.',
        },
      };

      return `
      <div>
        <gcds-heading tag="h3">${step ? `${step}. ` : ''} ${langStrings[lang].heading}</gcds-heading>
        <gcds-text>${langStrings[lang].text}</gcds-text>

        <gcds-heading tag="h4">${langStrings[lang].subheadingTemplate}</gcds-heading>
        <gcds-text>${langStrings[lang].textTemplates}</gcds-text>

        <gcds-heading tag="h4">${langStrings[lang].subheadingComponents}</gcds-heading>
        <gcds-text>${langStrings[lang].textComponents}</gcds-text>

        <gcds-heading tag="h4">${langStrings[lang].subheadingCode}</gcds-heading>
        <gcds-text>${langStrings[lang].textCode}</gcds-text>
      </div>
    `;
    },
  );

  eleventyConfig.addPairedShortcode('viewCode', (content, lang, id, name) => {
    const langStrings = {
      en: {
        code: 'Code display',
        view: 'View code',
        copy: 'Copy code',
      },
      fr: {
        code: 'Affichage du code',
        view: 'Voir le code',
        copy: 'Copier le code',
      },
    };
    if (lang != 'en ' && lang != 'fr') {
      lang = 'en';
    }

    return `
        <div class="code-showcase mb-300">
          <textarea class="showcase text-light mb-300 p-300" id="${id}" rows="8" aria-label="${langStrings[lang].code} - ${name}" tabindex="-1" aria-hidden="true" readonly>${content}</textarea>
          <div>
            <gcds-button
              class="showcase-view-button"
              button-type="button"
              button-role="secondary"
              aria-label="${langStrings[lang].view} - ${name}"
              aria-controls="${id}"
              aria-expanded="false"
            >
              ${langStrings[lang].view}
            </gcds-button>
            <gcds-button
              class="showcase-copy-button"
              button-type="button"
              button-role="secondary"
              lang="${lang}"
            >
              ${langStrings[lang].copy}
            </gcds-button>
          </div>
        </div>
    `;
  });

  // Add shortcode for CDN info
  eleventyConfig.addGlobalData('latestCdnVersion', async () => {
    return await getLatestCdnVersion();
  });

  eleventyConfig.addPairedShortcode(
    'docLinks',
    (children, locale, stage, figma, github) => {
      let stageChip = '';
      let figmaLink = '';
      let githubLink = '';
      const langStrings = {
        en: {
          stage: 'stage',
          figma: 'Figma',
          figmaLink: 'https://www.figma.com/community/file/1128687821123298228',
          github: 'GitHub',
          comingsoon: 'coming soon',
        },
        fr: {
          stage: 'phase',
          figma: 'Figma',
          figmaLink: 'https://www.figma.com/community/file/1369337721343886324',
          github: 'GitHub',
          comingsoon: 'à venir',
        },
      };
      if (stage) {
        stageChip = `<li class="stage-chip">
          <span>${langStrings[locale].stage}</span><span>${stage}</span>
        </li>`;
      }
      if (github) {
        githubLink = github;
      } else {
        githubLink = 'https://github.com/cds-snc/gcds-components';
      }
      return `
      <ul class="d-flex flex-wrap gap-300">
        ${stageChip} <li class="github-link">
          <gcds-link external href="${githubLink}">${langStrings[locale].github}</gcds-link>
        </li> ${figmaLink}
        <li class="figma-link">
          <gcds-link external href="${langStrings[locale].figmaLink}">
            ${langStrings[locale].figma}
          </gcds-link>
        </li>
      </ul>`;
    },
  );

  eleventyConfig.addPairedShortcode(
    'requiredOn',
    (children, locale, canSite, gcSite) => {
      const chipClasses = 'px-200 py-100 bg-light font-text-small b-radius-lg';
      const icon = `<gcds-icon name="checkmark-circle" margin-right="50"></gcds-icon>`;
      let canChip = '';
      let gcChip = '';
      const langStrings = {
        en: {
          can: 'Required on Canada.ca',
          gc: 'Required on GC sites',
        },
        fr: {
          can: 'Requis sur Canada.ca',
          gc: 'Requis sur les sites du GC',
        },
      };

      if (canSite) {
        canChip = `<li class="text-secondary">
          <span class="${chipClasses}">
            ${icon}
            ${langStrings[locale].can}
          </span>
        </li>`;
      }

      if (gcSite) {
        gcChip = `<li class="text-secondary">
          <span class="${chipClasses}">
            ${icon}
            ${langStrings[locale].gc}
          </span>
        </li>`;
      }

      return `<ul class="d-flex flex-wrap gap-300">${canChip}${gcChip}</ul>`;
    },
  );

  eleventyConfig.addPairedShortcode(
    'componentPreview',
    (children, title, padding = 'px-225 py-300', margin = 'my-600') => {
      const content = children;

      return `
      <div class="${margin} b-sm b-default component-preview">
        <p class="container-full font-semibold px-225 py-150 bb-sm b-default bg-light">
          ${title}
        </p>
        <div class="${padding}">
          ${content}
        </div>
      </div>
    `;
    },
  );

  // Add shortcode for CSS Shortcuts demos
  eleventyConfig.addPairedShortcode('shortcutPreview', (children, css = '') => {
    const content = children.trim();
    const classRegex = /class=["']([^"']*)["']/;
    const tagRegex = /<([a-zA-Z0-9-]+)([^>]*)>/;

    // Inject CSS classes into the first HTML tag
    let styledContent = content;

    if (css) {
      styledContent = content.replace(tagRegex, (match, tagName, attrs) => {
        if (attrs.includes('class=')) {
          return `<${tagName}${attrs.replace(classRegex, (_, existingClasses) => `class="${existingClasses} ${css}"`)}>`;
        } else {
          return `<${tagName}${attrs} class="${css}">`;
        }
      });
    }

    // Minify weird Eleventy spacing in rendered HTML preview
    const renderedHTML = styledContent
      .replace(/&nbsp;/g, ' ')
      .replace(/\s+/g, ' ')
      .replace(/\s+</g, '<')
      .replace(/\s+>/g, '>')
      .trim();

    return `
      <div class="b-md shortcut-preview">
        <div class="preview-demo p-300">${renderedHTML}</div>
        <pre><code class="language-html">${encode(content)}</code></pre>
      </div>
    `;
  });

  eleventyConfig.addPairedShortcode(
    'baseComponentPreview',
    (children, title, url, queryString = '') => {
      return `
      <div class="my-600 b-sm b-default component-preview">
        <h2 class="container-full font-text font-semibold m-0 px-225 py-150 bb-sm b-default bg-light">
          ${title}
        </h2>
        <div>
          <iframe
            title="${title}"
            src="${url.replace('/base', '/preview/')}${queryString}"
            style="display: block; margin: 0 auto;"
            frameBorder="0"
            width="100%"
            id="component-preview"
          ></iframe>
        </div>
      </div>
    `;
    },
  );

  /*
   * Shortcode to render demo dates
   * Renders based on data file at ./src/_data/registerdemos.js
   */
  eleventyConfig.addPairedShortcode(
    'registerForDemoLinks',
    (children, locale) => {
      const langStrings = {
        en: {
          enDemo: 'English demo',
          frDemo: 'French demo',
          timezone: 'Eastern time',
          nodates: 'No upcoming dates.',
        },
        fr: {
          enDemo: 'Démo en anglais',
          frDemo: 'Démo en français',
          timezone: "heure de l'Est",
          nodates: 'Aucune date à venir.',
        },
      };

      let validDates = [];

      demoDates.map(date => {
        if (new Date() < new Date(date.date)) {
          validDates.push(date.date);
        }
      });

      if (validDates.length > 0) {
        return `
        <ul class="mb-300">
          ${demoDates
            .map(date => {
              if (validDates.includes(date.date)) {
                const dateOptions = {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  timeZone: 'UTC',
                };

                const timeOptionsEN = {
                  hour: 'numeric',
                  minute: '2-digit',
                  hour12: true,
                };

                const timeOptionsFR = {
                  hour: 'numeric',
                  hour12: false,
                };

                const startDateTime = new Date(
                  `${date.date}T${date.starttime}`,
                );
                const endDateTime = new Date(`${date.date}T${date.endtime}`);

                const datelink = `<gcds-link external href="${date.link}">${date.lang === 'en' ? langStrings[locale].enDemo : langStrings[locale].frDemo}</gcds-link>`;
                const time = `<time>
                  ${
                    locale === 'en'
                      ? `${formatDateTime(startDateTime, locale, dateOptions)}, ${formatDateTime(startDateTime, locale, timeOptionsEN)} – ${formatDateTime(endDateTime, locale, timeOptionsEN)} ${langStrings[locale].timezone}`
                      : `${formatDateTime(startDateTime, locale, dateOptions)}, de ${formatDateTime(startDateTime, locale, timeOptionsFR)} à ${formatDateTime(endDateTime, locale, timeOptionsFR)} ${langStrings[locale].timezone}`
                  }
                </time>`;

                return `<li>${datelink} – ${time}</li>`;
              }
            })
            .join('')}
        </ul>
      `;
      } else {
        return `<p>${langStrings[locale].nodates}</p>`;
      }
    },
  );

  /*
   * Returns a formatted date or time based on locale and a set of options
   */
  const formatDateTime = (date, locale, options) => {
    if (date instanceof Date) {
      return date.toLocaleString(locale, options);
    } else {
      // Fallback if date could be converted to a Date object
      return new Date(date).toLocaleString(locale, options);
    }
  };

  /*
   * Display tokens in tables based on passed name
   */
  eleventyConfig.addShortcode('displayTokens', (token, subCategory, locale) => {
    return displayTokens(token, subCategory, locale);
  });

  /*
   * Convert string from camelCase to kebab-case
   */
  eleventyConfig.addFilter('camelToKebab', function (str) {
    return str
      .replace(/[a-z][A-Z]/g, function (match) {
        return match[0] + '-' + match[1].toLowerCase();
      })
      .toLowerCase();
  });

  // Misc

  eleventyConfig.setLibrary('md', markdownLibrary);

  eleventyConfig.addCollection('sitemap', function (collectionApi) {
    return collectionApi.getAll().map((item, index, all) => {
      return {
        url: process.env.PATH_PREFIX
          ? `${process.env.PATH_PREFIX}${item.url}`
          : item.url,
        date: item.date,
      };
    });
  });

  // Pull templates from github into partials
  eleventyConfig.on('eleventy.before', async ({ runMode }) => {
    // Only download templates in build mode
    if (runMode === 'build') {
      await downloadTemplates();
    }
  });

  eleventyConfig.on('eleventy.after', () => {
    execSync(
      `npx pagefind --site _site --exclude-selectors "gcds-side-nav, gcds-top-nav, gcds-breadcrumbs, .github-link, .figma-link, h1 > code, .component-preview" --glob \"**/*.html\"`,
      { encoding: 'utf-8' },
    );
  });

  return {
    pathPrefix: process.env.PATH_PREFIX || '/',
    dir: {
      input: 'src',
      output: '_site',
    },
  };
};
