import type { NextConfig } from "next";
import { basePath } from "./src/lib/basePath";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages: no Node server, no Image Optimization
  // API, no API routes available on the host.
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: {
    // GitHub Pages can't run the next/image optimization endpoint.
    unoptimized: true,
  },
};

export default nextConfig;
