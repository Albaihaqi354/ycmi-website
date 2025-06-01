/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ycmi-website',
  assetPrefix: '/ycmi-website/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
