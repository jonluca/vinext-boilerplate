import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";
import vinext from "vinext";

const reactOptimizeDeps = [
  "react",
  "react-dom",
  "react-dom/client",
  "react-dom/server.edge",
  "react/jsx-dev-runtime",
  "react/jsx-runtime",
];

export default defineConfig({
  plugins: [vinext(), cloudflare()],
  resolve: {
    tsconfigPaths: true,
  },
  optimizeDeps: {
    include: reactOptimizeDeps,
  },
  environments: {
    vinext_boilerplate: {
      optimizeDeps: {
        include: reactOptimizeDeps,
      },
    },
  },
});
