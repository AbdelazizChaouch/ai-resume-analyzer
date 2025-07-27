import type { Config } from "@react-router/dev/config";

export default {
  // Disable server-side rendering for SPA mode
  ssr: false,
  
  // Configure build options
  buildDirectory: "build",
} satisfies Config; 