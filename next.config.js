/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['supabase.com', 'vercel.com'],
  },
}

module.exports = nextConfig
