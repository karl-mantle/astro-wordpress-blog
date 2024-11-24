// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-wordpress-blog-mx79z.kinsta.page',
  image: {
    domains: [import.meta.env.WP_URL],
  },
  integrations: [
    sitemap(),
    tailwind(),
    alpinejs()
  ],
});