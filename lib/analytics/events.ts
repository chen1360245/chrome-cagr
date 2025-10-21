// Google Analytics Event Tracking Utilities

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

/**
 * Track when a user completes a calculation
 * @param mode - The calculation mode (CAGR, FV, PV, or Time)
 * @param inputs - The input parameters used
 */
export const trackCalculation = (mode: string, inputs: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'calculation_complete', {
      calculation_mode: mode,
      event_category: 'calculator',
      event_label: `Mode: ${mode}`,
    })
  }
}

/**
 * Track when a user shares results
 * @param method - The share method used ('native' or 'clipboard')
 */
export const trackShare = (method: 'native' | 'clipboard') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'share', {
      method: method,
      content_type: 'calculation_result',
      event_category: 'engagement',
    })
  }
}

/**
 * Track when a user expands an educational section
 * @param sectionId - The ID of the expanded section
 */
export const trackSectionExpand = (sectionId: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'section_expand', {
      section_id: sectionId,
      event_category: 'engagement',
      event_label: sectionId,
    })
  }
}

/**
 * Track when a user collapses an educational section
 * @param sectionId - The ID of the collapsed section
 */
export const trackSectionCollapse = (sectionId: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'section_collapse', {
      section_id: sectionId,
      event_category: 'engagement',
      event_label: sectionId,
    })
  }
}

/**
 * Track custom page views (for Next.js route changes)
 * @param url - The URL path of the page
 */
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

/**
 * Track when a user clicks on an external link
 * @param url - The external URL
 * @param label - Optional label for the link
 */
export const trackExternalLink = (url: string, label?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'external_link',
      event_label: label || url,
      value: url,
    })
  }
}

/**
 * Track form validation errors
 * @param fieldName - The name of the field with error
 * @param errorMessage - The error message
 */
export const trackValidationError = (fieldName: string, errorMessage: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'validation_error', {
      event_category: 'form',
      event_label: fieldName,
      value: errorMessage,
    })
  }
}
