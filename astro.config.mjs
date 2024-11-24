// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  site: 'https://karl-mantle.github.io/',
  base: 'astro-wordpress-blog/',
  integrations: [sitemap(), tailwind(), alpinejs()],
});