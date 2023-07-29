/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    dangerouslyAllowSVG: true,
    domains: [
      "images.unsplash.com",
      "images.pexels.com",
      "i.ibb.co",
      "localhost",
      "pexels.com",
      "4.240.13.56"
    ],
  },
}

module.exports = nextConfig
