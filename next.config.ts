/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true, // Ensures compatibility with GitHub Pages
  basePath: '/jobfair-site', // Replace with your GitHub repository name
};

export default nextConfig;
