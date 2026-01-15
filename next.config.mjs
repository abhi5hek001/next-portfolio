/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Enable Static Export
  output: 'export',

  // 2. Ensure clean URLs work on S3/CloudFront
  trailingSlash: true,

  // 3. Disable built-in Image Optimization (S3 can't run the Node.js optimizer)
  images: {
    unoptimized: true,
  },

  // Your existing SVG Webpack config
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;