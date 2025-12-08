import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        contact_us: resolve(__dirname, "src/contact-us/index.html"),
        explore: resolve(__dirname, "src/explore/index.html"),
        get_started: resolve(__dirname, "src/get-started/index.html"), 
      },
    },
  },
});
