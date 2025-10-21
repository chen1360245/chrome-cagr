import { MetadataRoute } from 'next'

/**
 * Next.js 14 Dynamic robots.txt
 *
 * This file automatically generates a robots.txt at /robots.txt
 * Documentation: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/', // Allow all pages
      disallow: ['/api/', '/admin/'], // Disallow API routes and admin (if any)
    },
    sitemap: 'https://cagrcalculator.app/sitemap.xml',
  }
}
