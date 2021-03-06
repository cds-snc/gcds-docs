const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const moment = require("moment");
const markdownIt = require("markdown-it");
const slugify = require("./utils/slugify");
const contextMenu = require("./utils/context-menu");
const markdownAnchor = require("./utils/anchor");
const svgContents = require("eleventy-plugin-svg-contents");
const codeClipboard = require("eleventy-plugin-code-clipboard");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/styles/style.css");
  eleventyConfig.addPassthroughCopy("./src/styles/prism.css");
  eleventyConfig.addPassthroughCopy("./src/images");
  eleventyConfig.addPassthroughCopy("./src/scripts/code-showcase.js");
  eleventyConfig.addPassthroughCopy("./src/admin/config.yml");
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.addPlugin(svgContents);
  eleventyConfig.addPassthroughCopy({"./src/variables/": "variables"});
  eleventyConfig.addPassthroughCopy({
    "./node_modules/gcds-components/": "components"
  });
  // Add copy fo a11y testing
  eleventyConfig.addPassthroughCopy("./.pa11yci.json");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(syntaxHighlight, {
    templateFormats: ['md']
  });
  eleventyConfig.addPlugin(codeClipboard);

  eleventyConfig.addFilter("sortCollection", (arr) => {
    // get unsorted items
    return arr.sort(function(a, b){
      return a.data.eleventyNavigation.order - b.data.eleventyNavigation.order;
    });
  });

  eleventyConfig.addFilter("getBreadcrumbs", contextMenu.findBreadcrumbEntries);
  eleventyConfig.addFilter("onThisPage", function(nodes) {
    let urls = {};
    for (let key in nodes) {
      urls[nodes[key]] = slugify(nodes[key]);
    }
    return urls;
  });

  // date filter (localized)
  eleventyConfig.addNunjucksFilter("date", function (date, format, locale) {
    locale = locale ? locale : "en";
    moment.locale(locale);
    return moment(date).format(format);
  });

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
    breaks: false,
    linkify: false
  }).use(markdownAnchor).use(codeClipboard.markdownItCopyButton);
  markdownLibrary.disable('blockquote');
  markdownLibrary.disable('code');

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
        "comingsoon": "?? venir"
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
          <a href="${figma}" target="_blank" rel="nofollow" aria-label="${langStrings[locale].figma} ${langStrings[locale].newtab}">${langStrings[locale].figma}</a>
        </li>`;
    } else {
      figmaLink = `
        <li class="figma-link">
          <span>${langStrings[locale].figma} ??? ${langStrings[locale].comingsoon}</span>
        </li>`;
    }
    if (github) {
      githubLink = github;
    } else {
      githubLink = "https://github.com/cds-snc/gcds-components";
    }
    return `
      <ul class="doc-links">
        ${stageChip} <li class="github-link">
          <a href="${githubLink}" target="_blank" rel="nofollow" aria-label="${langStrings[locale].github} ${langStrings[locale].newtab}">${langStrings[locale].github}</a>
        </li> ${figmaLink}
      </ul>`;
  });

  eleventyConfig.setLibrary("md", markdownLibrary);

  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: process.env.GITHUB_ORG ? `https://${process.env.GITHUB_ORG}.github.io/${process.env.PATH_PREFIX}` : "http://localhost:8080",
    },
  });

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
      output: "_site"
    },
  };
};
