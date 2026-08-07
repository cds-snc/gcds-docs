// Heading-id plugin that reproduces the 11ty slug algorithm (utils/slugify.js +
// utils/anchor.js) so anchor ids match the current site exactly.
//
// 11ty slugified the raw heading source, so a literal <br/> contributes "br"
// and inline-code backticks are stripped (leaving the code text). It also folds
// accents, removes all punctuation (including hyphens), then turns spaces into
// hyphens. rehype-slug/github-slugger can't reproduce that, hence this plugin.

const slugify = s =>
  encodeURIComponent(
    String(s)
      .trim()
      .toLowerCase()
      .replace(/[ÀÁÂÃÄÅ]/g, 'A')
      .replace(/[àáâãäå]/g, 'a')
      .replace(/[ÈÉÊË]/g, 'E')
      .replace(/[èéêë]/g, 'e')
      .replace(/[ÍÌÎÏ]/g, 'I')
      .replace(/[íìîï]/g, 'i')
      .replace(/[ÓÒÔÕÖ]/g, 'O')
      .replace(/[óòôõö]/g, 'o')
      .replace(/[ÚÙÛÜ]/g, 'U')
      .replace(/[úùûü]/g, 'u')
      .replace(/[Ç]/g, 'C')
      .replace(/[ç]/g, 'c')
      .replace(/[^\w\s]|_/g, '')
      .replace('span ', '')
      .replace(' span', '')
      .replace('langen', '')
      .replace(/\s+/g, '-'),
  );

const collect = node => {
  if (node.type === 'text') return node.value;
  // Standard hast elements use `tagName`; MDX JSX elements (e.g. a literal
  // <br />) come through as mdxJsxTextElement/mdxJsxFlowElement with `name`.
  if (
    node.type === 'element' ||
    node.type === 'mdxJsxTextElement' ||
    node.type === 'mdxJsxFlowElement'
  ) {
    const name = node.tagName || node.name;
    if (name === 'br') return 'br';
    return (node.children || []).map(collect).join('');
  }
  return '';
};

const headings = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);

const walk = node => {
  if (node.type === 'element') {
    if (headings.has(node.tagName)) {
      node.properties = node.properties || {};
      if (node.properties.id === undefined) {
        node.properties.id = slugify(collect(node));
      }
    }
    (node.children || []).forEach(walk);
  } else if (node.children) {
    node.children.forEach(walk);
  }
};

export default function rehypeGcdsSlug() {
  return tree => walk(tree);
}
