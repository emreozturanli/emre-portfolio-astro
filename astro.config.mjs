// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://emreozturanli.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [icon()],
});
