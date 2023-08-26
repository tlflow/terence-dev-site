import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";
import vue from "@astrojs/vue";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), astroImageTools, purgecss()]
  /*
  output: "static",
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "styles/[name][extname]",
        },
      },
    },
  },
  */
});