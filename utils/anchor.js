const slugify = require('./slugify');

const defaultOptions = {
  anchorClass: 'anchor-link',
};

const anchor = (md, options) => {
  options = Object.assign({}, defaultOptions, options);

  md.renderer.rules.heading_open = function (tokens, index) {
    const contentToken = tokens[index + 1];
    const slug = slugify(contentToken.content);

    if (tokens[index].tag === 'h1') {
      return `<${tokens[index].tag} id="${slug}">`;
    } else if (tokens[index].tag === 'h2') {
      return `<${tokens[index].tag} id="${slug}">`;
    } else if (tokens[index].tag === 'h3') {
      return `<${tokens[index].tag} id="${slug}">`;
    } else if (tokens[index].tag === 'h4') {
      return `<${tokens[index].tag} id="${slug}">`;
    } else {
      return `<${tokens[index].tag} id="${slug}">`;
    }
  };

  md.renderer.rules.ordered_list_open = function (tokens, index) {
    return `<${tokens[index].tag} class="list-decimal mb-300">`;
  };
  md.renderer.rules.bullet_list_open = function (tokens, index) {
    return `<${tokens[index].tag} class="list-disc mb-300">`;
  };
};

module.exports = anchor;
