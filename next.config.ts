import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",
  distDir: "dist",
  allowedDevOrigins: [
    "**.run.app",
    "*.europe-west2.run.app",
    "ais-dev-6lttmbkb2ojzjerlp5jqfd-676511655954.europe-west2.run.app",
    "ais-pre-6lttmbkb2ojzjerlp5jqfd-676511655954.europe-west2.run.app",
    "localhost:3000",
    "127.0.0.1:3000",
  ],
  experimental: {
    turbopackFileSystemCacheForDev: false,
    turbopackFileSystemCacheForBuild: false,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
