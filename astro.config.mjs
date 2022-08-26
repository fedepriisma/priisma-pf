import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.priisma.com',
  integrations: [preact(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), image()]
});