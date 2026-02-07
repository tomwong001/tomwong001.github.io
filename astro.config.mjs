import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tomwong001.github.io',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});

