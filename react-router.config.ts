import type { Config } from "@react-router/dev/config";

export default {
  // Switch to SPA mode for reliable deployment
  // This eliminates server function complexity
  ssr: false,
  
  // Prerender static routes for better performance
  prerender: ["/"],
  
  // Configure build options
  buildDirectory: "build",
} satisfies Config;
