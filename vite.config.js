// import { defineConfig } from "vite";
// import { svelte } from "@sveltejs/vite-plugin-svelte";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [svelte()],
// });
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";
import { fileURLToPath } from "url";

const xDirname = path.dirname(fileURLToPath(import.meta.url));
console.log(xDirname);

// // https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  optimizeDeps: {
    exclude: ["@roxi/routify"],
  },
  resolve: {
    dedupe: ["@roxi/routify"],
    alias: {
      src: path.resolve(xDirname, "src"),
    },
  },
});
