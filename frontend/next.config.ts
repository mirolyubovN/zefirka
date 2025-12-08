import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export
  output: 'export',

  // Trailing slashes for static hosting
  trailingSlash: true,

  images: {
    // For static export, use unoptimized images
    unoptimized: true,

    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: '*.railway.app',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: '*.render.com',
        pathname: '/uploads/**',
      },
    ],

    // Modern formats (used when not in static export mode)
    formats: ['image/avif', 'image/webp'],
  },

  // Optimize package imports
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
