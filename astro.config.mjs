import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.priisma.com',
  integrations: [
    preact(), tailwind({
    config: {
      applyBaseStyles: false
    }
    }),
    image(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ]
});