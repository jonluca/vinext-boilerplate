import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";
import vinext from "vinext";

export default defineConfig({
  plugins: [vinext(), cloudflare()],
  resolve: {
    tsconfigPaths: true,
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-dom/client",
      "react-dom/server.edge",
      "react/jsx-dev-runtime",
      "react/jsx-runtime",
    ],
  },
});
