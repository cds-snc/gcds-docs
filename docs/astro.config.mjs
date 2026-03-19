import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["en-CA", "fr-CA"],
    defaultLocale: "en-CA",
  },
  integrations: [mdx(), react()],
});
