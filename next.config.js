const withNextIntl = require('next-intl/plugin')(
  // 指定i18n请求配置文件的路径
  './i18n/request.ts'
)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Image optimization
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Enable SWC minification for better performance
  swcMinify: true,

  // Enable compression
  compress: true,

  // Caching headers for static assets
  async headers() {
    return [
      {
        // Cache static assets for 1 year
        source: '/(.*)\\.(jpg|jpeg|png|gif|ico|svg|webp|avif|woff|woff2|ttf|otf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache JavaScript and CSS for 1 year (Next.js uses content hashes)
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache HTML pages for 1 hour with revalidation
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      },
    ]
  },

  // Enable experimental features for better performance
  // experimental: {
  //   optimizeCss: true, // Disabled: requires 'critters' package
  // },
}

module.exports = withNextIntl(nextConfig)
