const slugify = require("./slugify");

const defaultOptions = {
  anchorClass: 'anchor-link',
};

const anchor = (md, options) => {
  options = Object.assign({}, defaultOptions, options);

  md.renderer.rules.heading_open = function(tokens, index) {
    const contentToken = tokens[index + 1];
    const slug = slugify(contentToken.content);

    if (tokens[index].tag === 'h2' || tokens[index].tag === 'h3') {
      return `
        <${tokens[index].tag} id="${slug}">
            <a class="${options.anchorClass}" href="#${slug}">`;
    }
    return `<${tokens[index].tag}>`;
  };

  md.renderer.rules.heading_close = function(tokens, index) {
    if (tokens[index].tag === 'h2' || tokens[index].tag === 'h3') {
      return `
            </a>
        </${tokens[index].tag}>`;
    }
    return `</${tokens[index].tag}>`;
  };
};

module.exports = anchor;