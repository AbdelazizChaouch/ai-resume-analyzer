import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  build: {
    // Enable source maps for production debugging (disabled for smaller bundle)
    sourcemap: false,
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 1000,
    // Optimize assets
    assetsInlineLimit: 4096
  },
  // Enable optimizations
  optimizeDeps: {
    include: ['zustand', 'clsx', 'tailwind-merge']
  }
});
