const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const moment = require("moment");
const chroma = require("chroma-js");
const markdownIt = require("markdown-it");
const svgContents = require("eleventy-plugin-svg-contents");
const codeClipboard = require("eleventy-plugin-code-clipboard");
const { DateTime } = require("luxon");

const contextMenu = require("./utils/context-menu");
const displayTokens = require("./utils/display-tokens");
const markdownAnchor = require("./utils/anchor");
const slugify = require("./utils/slugify");

module.exports = function (eleventyConfig) {

  // Pass through copies

  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("./src/styles/style.css");
  eleventyConfig.addPassthroughCopy("./src/styles/prism.css");
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/scripts/code-showcase.js");
  eleventyConfig.addPassthroughCopy("./src/admin/config.yml");
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.addPassthroughCopy({"./src/variables/": "variables"});
  eleventyConfig.addPassthroughCopy({
    "./node_modules/@cdssnc/gcds-components/": "components"
  });
  eleventyConfig.addPassthroughCopy({
    "./node_modules/@cdssnc/gcds-utility/dist/utilities.min.css": "utilities.min.css"
  });
  // Add copy fo a11y testing
  eleventyConfig.addPassthroughCopy("./.pa11yci.json");

  // Plugins

  eleventyConfig.addPlugin(svgContents);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(codeClipboard);
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: process.env.GITHUB_ORG ? `https://${process.env.GITHUB_ORG}.github.io/${process.env.PATH_PREFIX}` : "http://localhost:8080",
    },
  });

  // Filters

  eleventyConfig.addFilter("sortCollection", (arr) => {
    // get unsorted items
    return arr.sort(function(a, b){
      return a.data.eleventyNavigation.order - b.data.eleventyNavigation.order;
    });
  });

  eleventyConfig.addFilter("tabs", (arr, tag) => {
    let pages = {};

    arr.map( page => {
      if (page.data.tags) {
        page.data.tags.map(v => {
          if (v == tag) {
            pages[page.data.tags[1]] = page;
          }
        })
      }
    });

    return pages;
  });

  eleventyConfig.addFilter("getBreadcrumbs", contextMenu.findBreadcrumbEntries);
  eleventyConfig.addFilter("onThisPage", function(nodes) {
    let urls = {};
    for (let key in nodes) {
      urls[nodes[key]] = slugify(nodes[key]);
    }
    return urls;
  });

  /*
   * Filter to sort component navigation items
   */
  eleventyConfig.addFilter("sortAlpha", function(collection) {
    return collection.sort(function(a, b) {
        var textA = a.title.toUpperCase();
        var textB = b.title.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  });

  /* Format last modified date */
  eleventyConfig.addFilter("dateLastModified", function(date) {
    return moment(date).format('YYYY-MM-DD');
  });

   // Token filters
  eleventyConfig.addFilter("contrast", function (value, b = "#FFF") {
    let contrast = chroma.contrast(value, b);
    return Math.floor(contrast * 100) / 100;
  });

  eleventyConfig.addFilter("border", function (value, b = "#FFF") {
    let contrast = chroma.contrast(value, b);
    return contrast > 3 ? b : "black";
  });

  eleventyConfig.addFilter("hexTo", function (value, mode = "hsl") {
    return chroma(value).css(mode);
  });

  eleventyConfig.addFilter("fixTokenName", function (value) {
    let fixName = "";
    function onlyCapitalLetters(str) {
      return str.replace(/[^A-Z]+/g, "");
    }

    if (onlyCapitalLetters(value)) {
      fixName = value.replace(
        onlyCapitalLetters(value),
        `-${onlyCapitalLetters(value).toLowerCase()}`
      );
    } else {
      fixName = value;
    }
    return fixName;
  });

  eleventyConfig.addFilter("dig", function (value, object) {
    let bottom = object;
    value.forEach((element) => {
      bottom = bottom[element];
    });
    return bottom;
  });

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
    breaks: false,
    linkify: false
  }).use(markdownAnchor).use(codeClipboard.markdownItCopyButton);
  markdownLibrary.disable('blockquote');
  markdownLibrary.disable('code');

  // Short codes

  eleventyConfig.addPairedShortcode('viewCode', (children, lang, id, name) => {
    const langStrings = {
      "en": {
        "view": "View code",
        "copy": "Copy code"
      },
      "fr": {
        "view": "Voir le code",
        "copy": "Copier le code"
      }
    }
    if (lang != "en " && lang != "fr") {
      lang = "en";
    }
    const content = markdownLibrary.render(children);

    return `
    <div class="code-showcase">
      <gcds-button button-type="button" button-role="primary" button-style="outline" aria-label="${langStrings[lang].view} - ${name}" onclick="toggleCodeShowcase(this, '${id}');" aria-controls="${id}" aria-expanded="false">${langStrings[lang].view}</gcds-button>
      <gcds-button button-type="button" button-role="primary" button-style="outline" onclick="copyCodeShowcase(this, '${id}', '${lang}');" onblur="this.innerText = '${langStrings[lang].copy}'">${langStrings[lang].copy}</gcds-button>
      <div class="showcase" id="${id}" aria-hidden="true">
        ${content}
      </div>
    </div>
    `}
  );

  eleventyConfig.addPairedShortcode('docLinks', (children, locale, stage, figma, github) => {
    let stageChip = "";
    let figmaLink = "";
    let githubLink = "";
    const langStrings = {
      "en": {
        "stage": "stage",
        "figma": "Figma",
        "github": "GitHub",
        "newtab": "(Opens in a new tab)",
        "comingsoon": "coming soon"
      },
      "fr": {
        "stage": "phase",
        "figma": "Figma",
        "github": "GitHub",
        "newtab": "(S'ouvre dans un nouvel onglet)",
        "comingsoon": "à venir"
      }
    }
    if (stage) {
      stageChip = `<li class="stage-chip">
          <span>${langStrings[locale].stage}</span><span>${stage}</span>
        </li>`;
    }
    if (figma) {
      figmaLink = `
        <li class="figma-link">
          <a href="${figma}" target="_blank" rel="nofollow" aria-label="${langStrings[locale].figma} ${langStrings[locale].newtab}">${langStrings[locale].figma}<gcds-icon name="external-link" margin-left="100" /></a>
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
      githubLink = "https://github.com/cds-snc/gcds-components";
    }
    return `
      <ul class="d-flex flex-wrap gap-400">
        ${stageChip} <li class="github-link">
          <a href="${githubLink}" target="_blank" rel="nofollow" aria-label="${langStrings[locale].github} ${langStrings[locale].newtab}">${langStrings[locale].github}<gcds-icon name="external-link" margin-left="100" /></a>
        </li> ${figmaLink}
      </ul>`;
  });

  eleventyConfig.addPairedShortcode('componentPreview', (children, title, padding = "py-400", margin = "my-500") => {
    const content = children;

    return `
      <div class="${margin} b-sm b-gray component-preview">
        <p class="container-full font-semibold px-300 py-200 bb-sm b-gray bg-light">
          ${title}
        </p>
        <div class="px-300 ${padding}">
          ${content}
        </div>
      </div>
    `}
  );

  /*
   * Display tokens in tables based on passed name
   */
  eleventyConfig.addShortcode('displayTokens', (token, subCategory, locale) => {
    return displayTokens(token, subCategory, locale);
  });

  // Misc

  eleventyConfig.setLibrary("md", markdownLibrary);

  eleventyConfig.addCollection("sitemap", function(collectionApi) {
    return collectionApi
      .getAll()
      .map((item, index, all) => {
          return {
            url: process.env.PATH_PREFIX ? `${process.env.PATH_PREFIX}${item.url}` : item.url,
            date: item.date
          }
      });
  });

  return {
    pathPrefix: process.env.PATH_PREFIX || "/",
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
