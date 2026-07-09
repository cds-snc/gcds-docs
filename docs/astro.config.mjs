import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import rehypeSlug from "rehype-slug";
import { fileURLToPath } from "node:url";

// Astro uses remark (for .md syntax) and rehype (for HTML output) instead of
// markdown-it. The equivalent of Eleventy's markdownLibrary config lives here.
//
// TODO(markdown parity): decide how to replicate Eleventy's disabling of
// blockquote and inline code. In 11ty this was:
//   markdownLibrary.disable('blockquote');
//   markdownLibrary.disable('code');
// (see .eleventy.js). This is NOT implemented yet in the Astro setup.
//
// One option is a pair of small remark plugins that strip those AST nodes.
// The sketch below is ILLUSTRATIVE ONLY — it is not wired up and will not run
// as written (remarkDisableCode needs `import { visit } from "unist-util-visit"`).
//   const remarkDisableBlockquote = () => (tree) => {
//     tree.children = tree.children.filter((node) => node.type !== "blockquote");
//   };
//   const remarkDisableCode = () => (tree) => {
//     visit(tree, "inlineCode", (node) => { node.type = "text"; });
//   };

// https://astro.build/config
export default defineConfig({
  // Astro's built-in i18n is intentionally NOT enabled right now: locale
  // routing is handled by the custom src/pages/[locale]/[...slug].astro
  // catch-all, which derives "en"/"fr" from the content folder names and emits
  // /en/... and /fr/... URLs. Enable this block (plus the astro:i18n helpers)
  // if we ever want Astro to own locale routing / URL generation. Note: locale
  // codes must match the URL segments we emit ("en"/"fr") — NOT "_en-CA".
  // i18n: {
  //   locales: ["en", "fr"],
  //   defaultLocale: "en",
  // },
  markdown: {
    // Configure shared markdown behaviour (applies to both .md and .mdx).
    // Keep heading ids only. We tested rehype-autolink-headings and it changed
    // heading visuals/UX more than desired (rendered headings as links).
    // If we want anchor links again later, re-enable:
    //   import rehypeAutolinkHeadings from "rehype-autolink-headings";
    //   [rehypeAutolinkHeadings, { behavior: "wrap" }]
    rehypePlugins: [rehypeSlug],
    // See the "markdown parity" TODO above. Once decided, register the plugins:
    // remarkPlugins: [remarkDisableBlockquote, remarkDisableCode],
  },
  vite: {
    resolve: {
      alias: {
        "~assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
        "~components": fileURLToPath(new URL("./src/components", import.meta.url)),
        "~layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
      },
    },
  },
  integrations: [mdx(), react()],
});
