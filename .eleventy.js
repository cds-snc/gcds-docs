const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const moment = require("moment");
const markdownIt = require("markdown-it");
const slugify = require("./utils/slugify");
const contextMenu = require("./utils/context-menu");
const markdownAnchor = require("./utils/anchor");
const svgContents = require("eleventy-plugin-svg-contents");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/styles/style.css");
  eleventyConfig.addPassthroughCopy("./src/styles/prism.css");
  eleventyConfig.addPassthroughCopy("./src/scripts/code-showcase.js");
  eleventyConfig.addPassthroughCopy("./src/admin/config.yml");
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
    linkify: true
  }).use(markdownAnchor);
  markdownLibrary.disable('blockquote');
  markdownLibrary.disable('code');

  eleventyConfig.addPairedShortcode('viewCode', (children, lang, id) => {
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
    let copyCode = children;
    copyCode = copyCode.toString().replace("``` html", "").replace("```", "").replaceAll("<", "&lt;").replaceAll(">", "&gt;").trim();
    const content = markdownLibrary.render(children);

    return `
    <div class="code-showcase">
      <gcds-button button-type="button" button-role="secondary" button-style="text-only" onclick="toggleCodeShowcase(this, '${id}');" aria-controls="${id}" aria-expanded="false">${langStrings[lang].view}</gcds-button>
      <gcds-button button-type="button" button-role="secondary" button-style="text-only" onclick="copyCodeShowcase(this, '${id}', '${lang}');" onblur="this.innerText = '${langStrings[lang].copy}'">${langStrings[lang].copy}</gcds-button>
      <div class="showcase" id="${id}" aria-hidden="true">
        ${content}
        <code class="copy-code" id="${id}-copy">${copyCode}</code>
      </div>
    </div>
    `}
  );

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
