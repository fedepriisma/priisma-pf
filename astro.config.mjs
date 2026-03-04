import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import partytown from '@astrojs/partytown';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.priisma.com',
  integrations: [partytown({
    // Adds dataLayer.push as a forwarding-event.
    config: {
      forward: ["dataLayer.push"],
    },
  }), sitemap({
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