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
          '/es',
          '/de',
          '/ja',
          '/ar',
          '/fr',
          '/pt-BR',
          '/ko',
          '/en/*',
          '/zh-CN/*',
          '/es/*',
          '/de/*',
          '/ja/*',
          '/ar/*',
          '/fr/*',
          '/pt-BR/*',
          '/ko/*',
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
          '/es',
          '/de',
          '/ja',
          '/ar',
          '/fr',
          '/pt-BR',
          '/ko',
          '/en/*',
          '/zh-CN/*',
          '/es/*',
          '/de/*',
          '/ja/*',
          '/ar/*',
          '/fr/*',
          '/pt-BR/*',
          '/ko/*',
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
          '/es',
          '/de',
          '/ja',
          '/ar',
          '/fr',
          '/pt-BR',
          '/ko',
          '/en/*',
          '/zh-CN/*',
          '/es/*',
          '/de/*',
          '/ja/*',
          '/ar/*',
          '/fr/*',
          '/pt-BR/*',
          '/ko/*',
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
          '/es',
          '/es/*',
          '/de',
          '/de/*',
          '/ja',
          '/ja/*',
          '/ar',
          '/ar/*',
          '/fr',
          '/fr/*',
          '/pt-BR',
          '/pt-BR/*',
          '/ko',
          '/ko/*',
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
