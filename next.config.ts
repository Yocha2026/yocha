
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate a static website for GitHub Pages
  output: "export",

  // Generate /about/index.html, /contact/index.html, etc.
  trailingSlash: true,

  // GitHub Pages cannot use Next.js server-side image optimization
  images: {
    unoptimized: true,
  },

  // Hide Next.js development indicator
  devIndicators: false,

  // Keep existing experimental configuration
  experimental: {
    agentFeedback: true,
  },

  // Preserve the existing Turbopack CSS configuration
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
