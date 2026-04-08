import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import rehypeSlug from "rehype-slug";
import { fileURLToPath } from "node:url";

// Astro uses remark (for .md syntax) and rehype (for HTML output) instead of
// markdown-it. The equivalent of Eleventy's markdownLibrary config lives here.

// -- Disable blockquote / inline code (replaces markdownLibrary.disable()) ---
// Remark operates on the AST, so you write small plugins to strip node types.
// const remarkDisableBlockquote = () => (tree) => {
//   tree.children = tree.children.filter((node) => node.type !== 'blockquote');
// };
// const remarkDisableCode = () => (tree) => {
//   visit(tree, 'inlineCode', (node) => { node.type = 'text'; });
// };

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["_en-CA", "_fr-CA"],
    defaultLocale: "_en-CA",
  },
  markdown: {
    // Configure shared markdown behaviour (applies to both .md and .mdx).
    // Keep heading ids only. We tested rehype-autolink-headings and it changed
    // heading visuals/UX more than desired (rendered headings as links).
    // If we want anchor links again later, re-enable:
    //   import rehypeAutolinkHeadings from "rehype-autolink-headings";
    //   [rehypeAutolinkHeadings, { behavior: "wrap" }]
    rehypePlugins: [rehypeSlug],
    // remarkPlugins: [remarkDisableBlockquote, remarkDisableCode],
  },
  vite: {
    resolve: {
      alias: {
        "~assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      },
    },
  },
  integrations: [mdx(), react()],
});
