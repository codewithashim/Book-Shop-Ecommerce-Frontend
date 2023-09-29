/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com', "res.cloudinary.com"],
    unoptimized: true,
  }
}

module.exports = nextConfig
