// next.config.js
const nextConfig = {
  output: 'export', // Static export mode
  distDir: 'out',   // Directory for output (static files)
  trailingSlash: true, // Ensure compatibility with GitHub Pages and proper routing
  reactStrictMode: true, // Optional: Enables React Strict Mode
};

module.exports = nextConfig;
