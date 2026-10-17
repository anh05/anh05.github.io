// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://anh05.github.io',
  output: 'static',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
