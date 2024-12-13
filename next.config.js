/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      loaders: {
        // ... any custom config
      }
    }
  }
};

module.exports = nextConfig;