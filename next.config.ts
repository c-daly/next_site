import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/next_site',
  trailingSlash: true,
};

export default nextConfig;
