/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      afterFiles: [{ source: "/:path*", destination: "/_404/:path*" }],
    };
  },
};

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
});
