import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Localhost-only development config
  // No production deployment, no security concerns
  
  // Disable strict mode double-rendering in dev
  reactStrictMode: false,
  
  // Allow all image sources (dev only)
  images: {
    unoptimized: true,
  },
  
  // Disable powered-by header
  poweredByHeader: false,
  
  // No security headers needed for localhost
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
