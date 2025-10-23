/**
 * Schema.org JSON-LD Structured Data Generator
 *
 * This module provides all the Schema.org structured data for SEO optimization.
 * Using structured data helps search engines understand your content better,
 * leading to rich snippets and improved search visibility.
 *
 * @see https://schema.org/
 * @see https://developers.google.com/search/docs/appearance/structured-data
 */

export * from './types'
export { getWebApplicationSchema } from './web-application'
export { getFAQPageSchema } from './faq-page'
export { getBreadcrumbListSchema } from './breadcrumb'
export { getHowToSchema } from './how-to'

import { Locale } from '@/i18n/config'
import { getWebApplicationSchema } from './web-application'
import { getFAQPageSchema } from './faq-page'
import { getBreadcrumbListSchema } from './breadcrumb'
import { getHowToSchema } from './how-to'

/**
 * Generate all Schema.org structured data for a page
 *
 * This function combines all relevant schemas into a single array
 * that can be rendered as JSON-LD script tags in the page head.
 *
 * @param locale - Current language
 * @param options - Optional configuration
 * @returns Array of schema objects ready to be serialized as JSON-LD
 *
 * @example
 * ```tsx
 * import { getAllSchemas } from '@/lib/schema'
 *
 * export default function Layout({ params: { locale } }) {
 *   const schemas = getAllSchemas(locale)
 *
 *   return (
 *     <html>
 *       <head>
 *         {schemas.map((schema, i) => (
 *           <script
 *             key={i}
 *             type="application/ld+json"
 *             dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
 *           />
 *         ))}
 *       </head>
 *     </html>
 *   )
 * }
 * ```
 */
export function getAllSchemas(
  locale: Locale,
  options?: {
    path?: string
    faqData?: Array<{ question: string; answer: string }>
    includeWebApp?: boolean
    includeFAQ?: boolean
    includeBreadcrumb?: boolean
    includeHowTo?: boolean
  }
): Array<Record<string, unknown>> {
  const {
    path = '/',
    faqData,
    includeWebApp = true,
    includeFAQ = true,
    includeBreadcrumb = true,
    includeHowTo = true,
  } = options || {}

  const schemas: Array<Record<string, unknown>> = []

  // WebApplication schema - tells Google this is a calculator tool
  if (includeWebApp) {
    schemas.push(getWebApplicationSchema(locale))
  }

  // FAQPage schema - MOST IMPORTANT for click-through rate!
  // Shows FAQ answers directly in search results
  if (includeFAQ) {
    schemas.push(getFAQPageSchema(locale, faqData))
  }

  // BreadcrumbList schema - shows page hierarchy
  if (includeBreadcrumb) {
    schemas.push(getBreadcrumbListSchema(locale, path))
  }

  // HowTo schema - shows step-by-step instructions
  if (includeHowTo) {
    schemas.push(getHowToSchema(locale))
  }

  return schemas
}

/**
 * Generate JSON-LD script tag content
 *
 * Helper function to convert schema objects to properly formatted
 * JSON-LD string for use in script tags.
 *
 * @param schemas - Array of schema objects
 * @returns JSON-LD string
 */
export function generateJsonLd(schemas: Array<Record<string, unknown>>): string {
  // If only one schema, return it directly
  if (schemas.length === 1) {
    return JSON.stringify(schemas[0])
  }

  // Multiple schemas - wrap in array
  return JSON.stringify(schemas)
}
