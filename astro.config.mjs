import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.priisma.com',
  integrations: [sitemap({
    filter: (page) => !page.includes('/footer/'),
  })],
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Use Lightning CSS for CSS minification to avoid esbuild warnings.
      // Options: 'esbuild' | 'lightningcss' | false
      cssMinify: 'lightningcss'
    }
  }
});
