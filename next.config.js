/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lf1-cdn-tos.bytegoofy.com',
        port: '',
        pathname: '/goofy/ies/douyin_web/public/**',
      },
      {
        protocol: 'https',
        hostname: 's1.music.126.net',
        port: '',
        pathname: '/style/**',
      },
    ],
  },
}

module.exports = nextConfig
