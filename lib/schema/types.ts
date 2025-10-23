/**
 * Schema.org Type Definitions for SEO Structured Data
 *
 * These types ensure type-safety when creating JSON-LD structured data
 * that helps search engines understand your content better.
 *
 * @see https://schema.org/
 */

export interface Thing {
  '@context': string
  '@type': string
  [key: string]: unknown
}

export interface WebApplication extends Thing {
  '@type': 'WebApplication'
  name: string
  description: string
  url: string
  applicationCategory: string
  operatingSystem?: string
  browserRequirements?: string
  offers?: Offer
  aggregateRating?: AggregateRating
  creator?: Organization
}

export interface FAQPage extends Thing {
  '@type': 'FAQPage'
  mainEntity: Question[]
}

export interface Question extends Thing {
  '@type': 'Question'
  name: string
  acceptedAnswer: Answer
}

export interface Answer extends Thing {
  '@type': 'Answer'
  text: string
}

export interface BreadcrumbList extends Thing {
  '@type': 'BreadcrumbList'
  itemListElement: ListItem[]
}

export interface ListItem extends Thing {
  '@type': 'ListItem'
  position: number
  name: string
  item?: string
}

export interface HowTo extends Thing {
  '@type': 'HowTo'
  name: string
  description: string
  step: HowToStep[]
  totalTime?: string
  tool?: string[]
  supply?: string[]
}

export interface HowToStep extends Thing {
  '@type': 'HowToStep'
  name: string
  text: string
  position?: number
  url?: string
  image?: string
}

export interface Offer extends Thing {
  '@type': 'Offer'
  price: string
  priceCurrency: string
}

export interface AggregateRating extends Thing {
  '@type': 'AggregateRating'
  ratingValue: string
  ratingCount: string
  bestRating?: string
  worstRating?: string
}

export interface Organization extends Thing {
  '@type': 'Organization'
  name: string
  url?: string
}
