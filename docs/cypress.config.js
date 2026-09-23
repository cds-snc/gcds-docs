import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message);

          return null;
        },
        table(message) {
          console.table(message);

          return null;
        },
      });

      const sitemapUrl = `${config.baseUrl}/sitemap-0.xml`;
      const response = await fetch(sitemapUrl);

      if (!response.ok) {
        throw new Error(
          `Failed to load sitemap: ${response.status} ${sitemapUrl}`,
        );
      }

      const sitemap = await response.text();
      const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
        (match) => match[1],
      );

      config.env.enSitemapUrls = urls.filter((url) => !url.includes('/fr/'));
      config.env.frSitemapUrls = urls.filter((url) => !url.includes('/en/'));

      return config;
    },
    baseUrl: 'http://localhost:4321',
    viewportWidth: 1280,
    viewportHeight: 850,
    screenshotOnRunFailure: false,
    video: false,
    retries: {
      runMode: 3,
      openMode: 0,
    },
  },
});
