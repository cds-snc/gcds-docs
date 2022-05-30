const slugify = require("./slugify");

const defaultOptions = {
  anchorClass: 'anchor-link',
};

const anchor = (md, options) => {
  options = Object.assign({}, defaultOptions, options);

  md.renderer.rules.heading_open = function(tokens, index) {
    const contentToken = tokens[index + 1];
    const slug = slugify(contentToken.content);

    return `<${tokens[index].tag} id="${slug}">`;
  };
};

module.exports = anchor;
