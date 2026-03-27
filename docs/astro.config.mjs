import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import { remarkModifiedTime } from "./src/plugins/remark-modified-time.mjs";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["en-CA", "fr-CA"],
    defaultLocale: "en-CA",
  },
  markdown: {
    remarkPlugins: [remarkModifiedTime],
  },
  integrations: [mdx(), react()],
});
