// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Serve static images from public folder (e.g. public/images/uploads)
  images: {
    domains: [], // Add domains here only if you're using external images (e.g. Cloudinary)
  },

  // Enable support for MDX or Markdown if you’re going to use Markdown for blog posts
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    return config;
  },
};

module.exports = nextConfig;
