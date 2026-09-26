// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import { SITE } from './src/config/site.ts';
import githubPages from './src/integrations/github-pages.ts';
import rehypeBaseLinks from './src/integrations/rehype-base-links.ts';

/**
 * Empty on the custom domain. The deploy workflow sets it from
 * `actions/configure-pages` (e.g. `/neteinstein.org`) while the site is still
 * served from `<owner>.github.io/<repo>/`, and `npm run check:base` sets a
 * dummy value to catch links that skip `withBase()`.
 */
const base = process.env.BASE_PATH || undefined;

/**
 * Astro applies `base` to redirect sources but not to their destinations.
 * @param {string} path
 */
const to = (path) => (base ? `${base.replace(/\/+$/, '')}${path === '/' ? '/' : path}` : path);

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  base,
  trailingSlash: 'never',
  build: { format: 'file' },

  integrations: [react(), mdx(), sitemap(), githubPages()],

  // MDX inherits this processor's plugins.
  markdown: {
    processor: unified({ rehypePlugins: [[rehypeBaseLinks, { base }]] }),
  },

  vite: {
    plugins: [tailwindcss()],
  },

  // The Google Sites original serves both of these as live duplicates. Keep
  // them resolvable so existing inbound links and bookmarks do not 404.
  redirects: {
    '/home': to('/'),
    '/visit-porto': to('/porto/visit-porto'),
  },

  image: {
    responsiveStyles: true,
  },
});
