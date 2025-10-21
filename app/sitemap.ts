import { MetadataRoute } from 'next'

/**
 * Next.js 14 Dynamic Sitemap
 *
 * This file automatically generates a sitemap.xml at /sitemap.xml
 * Documentation: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cagrcalculator.app'
  const currentDate = new Date()

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0, // Highest priority - Homepage
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5, // Lower priority - Legal page
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5, // Lower priority - Legal page
    },
  ]
}
