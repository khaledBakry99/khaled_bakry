import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed "output: export" to enable API routes
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'readdy.ai',
        pathname: '/api/search-image/**',
      },
    ],
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
};

export default nextConfig;
