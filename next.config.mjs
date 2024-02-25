/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    if (config.name === 'server') config.optimization.concatenateModules = false

    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cloudfront.net',
        port: '',
      },
    ],
  }
}

export default nextConfig
