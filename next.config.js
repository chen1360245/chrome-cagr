const withNextIntl = require('next-intl/plugin')(
  // 指定i18n请求配置文件的路径
  './i18n/request.ts'
)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Optimize for production
  swcMinify: true,
  // Enable experimental features for better performance
  // experimental: {
  //   optimizeCss: true, // Disabled: requires 'critters' package
  // },
}

module.exports = withNextIntl(nextConfig)
