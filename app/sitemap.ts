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

  // Define supported languages
  const locales = ['en', 'zh-CN', 'es', 'de', 'ja', 'ar']

  // Pages that exist for each locale
  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const }, // Homepage
    { path: '/privacy', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/terms', priority: 0.5, changeFrequency: 'monthly' as const },
  ]

  // Generate sitemap entries for each locale
  const sitemapEntries: MetadataRoute.Sitemap = []

  // Add root URL (will redirect to default locale)
  sitemapEntries.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 1.0,
    alternates: {
      languages: {
        'en': `${baseUrl}/en`,
        'zh-CN': `${baseUrl}/zh-CN`,
        'es': `${baseUrl}/es`,
        'de': `${baseUrl}/de`,
        'ja': `${baseUrl}/ja`,
        'ar': `${baseUrl}/ar`,
      }
    }
  })

  // Add all locale-specific URLs
  for (const locale of locales) {
    for (const page of pages) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: currentDate,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            'en': `${baseUrl}/en${page.path}`,
            'zh-CN': `${baseUrl}/zh-CN${page.path}`,
            'es': `${baseUrl}/es${page.path}`,
            'de': `${baseUrl}/de${page.path}`,
            'ja': `${baseUrl}/ja${page.path}`,
            'ar': `${baseUrl}/ar${page.path}`,
          }
        }
      })
    }
  }

  return sitemapEntries
}
