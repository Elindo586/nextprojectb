/** @type {import('next').NextConfig} */

// const withPWA = require("next-pwa");
// const runtimeCaching = require("next-pwa");

// const nextConfig = () => {

//   const theConfig = {
//     reactStrictMode: true,
//     async rewrites() {
//       return {
//         afterFiles: [{ source: "/:path*", destination: "/_404/:path*" }],
//       };
//     },
//   };
//   async redirects() {
//     return [
//       {
//         source: "/ContactUs",
//         destination: "/contact-us",
//         permanent: true,
//       },
//     ],
//   };
// };
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      afterFiles: [{ source: "/:path*", destination: "/_404/:path*" }],
    };
  },
};

module.exports = nextConfig;

// module.exports = withPWA({
//   pwa: {
//     ...nextConfig,
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//     disable: process.env.NODE_ENV === "development",
//     swSrc: "service-worker.js",
//     scope: "/",
//     runtimeCaching,
//   },
// });
