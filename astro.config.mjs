import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://fedepriisma.github.io',
  base: '/priisma-pf',
  integrations: [preact(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), image()]
});