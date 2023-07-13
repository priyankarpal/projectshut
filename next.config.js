/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "user-images.githubusercontent.com",
      "raw.githubusercontent.com",
      "images.weserv.nl",
      "github.com",
    ],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
