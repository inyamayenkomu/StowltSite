import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/StowltSite',
  assetPrefix: '/StowltSite/',
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
