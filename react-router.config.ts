import type { Config } from "@react-router/dev/config";

export default {
  // Server-side render by default for better SEO and performance
  // Set to `false` for SPA mode if you encounter deployment issues
  ssr: true,
  
  // Prerender static routes for better performance
  prerender: ["/"],
  
  // Configure build options
  buildDirectory: "build",
  
  // Configure server build for deployment
  serverBuildFile: "index.js",
} satisfies Config;
