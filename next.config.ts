import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows any hostname
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
