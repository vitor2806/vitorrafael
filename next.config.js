/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'media.graphassets.com',
      'user-images.githubusercontent.com',
      'static-00.iconduck.com',
      'raw.githubusercontent.com',
    ],
  },
};

module.exports = nextConfig;
