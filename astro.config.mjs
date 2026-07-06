import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://printzen.app',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
});
