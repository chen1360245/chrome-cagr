import { MetadataRoute } from 'next'

/**
 * Next.js 14 Dynamic robots.txt
 *
 * This file automatically generates a robots.txt at /robots.txt
 * Documentation: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://cagrcalculator.app'

  return {
    rules: [
      {
        // Default rule for all crawlers
        userAgent: '*',
        allow: [
          '/',
          '/en',
          '/zh-CN',
          '/en/*',
          '/zh-CN/*',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/*.json$',
        ],
        crawlDelay: 1, // Be respectful to avoid overloading
      },
      {
        // Specific rules for Googlebot (no delay for faster indexing)
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/en',
          '/zh-CN',
          '/en/*',
          '/zh-CN/*',
        ],
        disallow: [
          '/api/',
          '/_next/',
        ],
        crawlDelay: 0,
      },
      {
        // Specific rules for Bingbot
        userAgent: 'Bingbot',
        allow: [
          '/',
          '/en',
          '/zh-CN',
          '/en/*',
          '/zh-CN/*',
        ],
        disallow: [
          '/api/',
          '/_next/',
        ],
        crawlDelay: 0,
      },
      {
        // Specific rules for Baidu (Chinese search engine)
        userAgent: 'Baiduspider',
        allow: [
          '/',
          '/zh-CN',
          '/zh-CN/*',
          '/en',
          '/en/*',
        ],
        disallow: [
          '/api/',
          '/_next/',
        ],
        crawlDelay: 1,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
