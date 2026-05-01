import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'out',
  experimental: {
    optimizePackageImports: ['pdfjs-dist', 'pdf-lib'],
  },
};

export default nextConfig;
