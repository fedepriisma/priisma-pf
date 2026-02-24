import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import partytown from "@astrojs/partytown";
import critters from "astro-critters";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.priisma.com',
  integrations: [partytown({
    // Adds dataLayer.push as a forwarding-event.
    config: {
      forward: ["dataLayer.push"]
    }
  }), critters(), compressor({ gzip: false, brotli: true })],
  vite: {
    plugins: [tailwindcss()]
  }
});
