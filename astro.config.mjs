import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import image from "@astrojs/image";
import compressor from "astro-compressor";
import critters from "astro-critters";
import htmlMinifier from "astro-html-minifier";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.priisma.com',
  integrations: [
    preact(), tailwind({
    config: {
      applyBaseStyles: false
    }
    }),
    image({ serviceEntryPoint: '@astrojs/image/sharp' }),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    htmlMinifier(), critters(), compressor()
  ]
});