import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  esbuild: {
    supported: {
      'top-level-await': true //browsers can handle top-level-await features
    },
  },
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        contact_us: resolve(__dirname, "src/contact-us/index.html"),
        explore: resolve(__dirname, "src/explore/index.html"),
        get_started: resolve(__dirname, "src/get-started/index.html"),
        capsule: resolve(__dirname, "src/capsule/index.html"),
        exploreLocations: resolve(__dirname, "src/explore/explore-locations.html"),
        thankyouapply: resolve(__dirname, "src/get-started/thank-you.html"),
        thankyoucontact: resolve(__dirname, "src/contact-us/thank-you.html"),
      },
    },
    supported: {
      'top-level-await': true
    },
  },
});
