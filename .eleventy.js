const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const sitemap = require('@quasibit/eleventy-plugin-sitemap');
const moment = require('moment');
const chroma = require('chroma-js');
const markdownIt = require('markdown-it');
const svgContents = require('eleventy-plugin-svg-contents');
const codeClipboard = require('eleventy-plugin-code-clipboard');
const { DateTime } = require('luxon');

const contextMenu = require('./utils/context-menu');
const displayTokens = require('./utils/display-tokens');
const markdownAnchor = require('./utils/anchor');
const slugify = require('./utils/slugify');

module.exports = function (eleventyConfig) {
  // Pass through copies

  eleventyConfig.addPassthroughCopy('_redirects');
  eleventyConfig.addPassthroughCopy('./src/styles/style.css');
  eleventyConfig.addPassthroughCopy('./src/styles/prism.css');
  eleventyConfig.addPassthroughCopy('./src/images');
  eleventyConfig.addPassthroughCopy('./src/scripts/code-showcase.js');
  eleventyConfig.addPassthroughCopy('./src/admin/config.yml');
  eleventyConfig.addPassthroughCopy('./src/favicon.ico');
  eleventyConfig.addPassthroughCopy({ './src/variables/': 'variables' });
  eleventyConfig.addPassthroughCopy({
    './node_modules/@cdssnc/gcds-components/': 'components',
  });
  eleventyConfig.addPassthroughCopy({
    './node_modules/@cdssnc/gcds-utility/dist/gcds-utility.min.css':
      'gcds-utility.min.css',
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
      hostname: process.env.GITHUB_ORG
        ? `https://${process.env.GITHUB_ORG}.github.io/${process.env.PATH_PREFIX}`
        : 'http://localhost:8080',
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
        <div class="code-showcase mb-400">
          <textarea class="showcase text-light mb-400 p-400" id="${id}" rows="8" aria-label="${langStrings[lang].code} - ${name}" aria-hidden="true" readonly>${content}</textarea>
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
          github: 'GitHub',
          comingsoon: 'coming soon',
        },
        fr: {
          stage: 'phase',
          figma: 'Figma',
          github: 'GitHub',
          comingsoon: 'à venir',
        },
      };
      if (stage) {
        stageChip = `<li class="stage-chip">
          <span>${langStrings[locale].stage}</span><span>${stage}</span>
        </li>`;
      }
      if (figma) {
        figmaLink = `
        <li class="figma-link">
          <gcds-link external href="${figma}">${langStrings[locale].figma}</gcds-link>
        </li>`;
      } else {
        figmaLink = `
        <li class="figma-link">
          <span>${langStrings[locale].figma} — ${langStrings[locale].comingsoon}</span>
        </li>`;
      }
      if (github) {
        githubLink = github;
      } else {
        githubLink = 'https://github.com/cds-snc/gcds-components';
      }
      return `
      <ul class="d-flex flex-wrap gap-400">
        ${stageChip} <li class="github-link">
          <gcds-link external href="${githubLink}">${langStrings[locale].github}</gcds-link>
        </li> ${figmaLink}
      </ul>`;
    },
  );

  eleventyConfig.addPairedShortcode(
    'componentPreview',
    (children, title, padding = 'px-300 py-400', margin = 'my-500') => {
      const content = children;

      return `
      <div class="${margin} b-sm b-default component-preview">
        <p class="container-full font-semibold px-300 py-200 bb-sm b-default bg-light">
          ${title}
        </p>
        <div class="${padding}">
          ${content}
        </div>
      </div>
    `;
    },
  );

  /*
   * Display tokens in tables based on passed name
   */
  eleventyConfig.addShortcode('displayTokens', (token, subCategory, locale) => {
    return displayTokens(token, subCategory, locale);
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

  return {
    pathPrefix: process.env.PATH_PREFIX || '/',
    dir: {
      input: 'src',
      output: '_site',
    },
  };
};
