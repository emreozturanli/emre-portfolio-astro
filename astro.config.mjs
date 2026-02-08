// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.emreozturanli.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  prefetch: true,
  integrations: [icon(), sitemap()],
});
