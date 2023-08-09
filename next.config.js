/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  images: {
    domains: [
      "user-images.githubusercontent.com",
      "raw.githubusercontent.com",
      "images.weserv.nl",
      "github.com",
    ],
  },
  trailingSlash: true
};

module.exports = withPWA(nextConfig);
