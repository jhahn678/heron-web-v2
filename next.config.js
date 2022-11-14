/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'heron-uploads.s3.amazonaws.com',
      'heron-static.s3.amazonaws.com',
      'heron-uploads.s3.us-east-1.amazonaws.com'
    ],

  }
}

module.exports = nextConfig
