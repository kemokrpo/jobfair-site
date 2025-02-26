import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true, // Ensures compatibility with GitHub Pages
};

export default nextConfig;
