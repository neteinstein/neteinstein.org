// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import { SITE } from './src/config/site.ts';

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  trailingSlash: 'never',
  build: { format: 'file' },

  integrations: [
    react(),
    mdx(),
    // The easter egg is meant to be found in the source, not the sitemap.
    sitemap({ filter: (page) => !page.endsWith('/easter-egg') }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  // The Google Sites original exposed two pairs of duplicate URLs. Keep them
  // resolvable so existing inbound links and bookmarks do not 404.
  redirects: {
    '/home': '/',
    '/visit-porto': '/porto/visit-porto',
  },

  image: {
    responsiveStyles: true,
  },
});
