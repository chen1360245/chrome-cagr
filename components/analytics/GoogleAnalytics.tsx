'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'

export function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookieConsent')
    if (consent === 'accepted') {
      setShouldLoad(true)
      return
    }

    // Listen for consent event
    const handleConsent = (event: CustomEvent) => {
      if (event.detail === 'accepted') {
        setShouldLoad(true)
      }
    }

    window.addEventListener('analyticsConsent', handleConsent as EventListener)

    return () => {
      window.removeEventListener('analyticsConsent', handleConsent as EventListener)
    }
  }, [])

  // Don't render scripts if user hasn't consented
  if (!shouldLoad) {
    return null
  }

  // Only render scripts after user consent
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Configure Google Analytics
            gtag('config', '${GA_MEASUREMENT_ID}', {
              // Enable advertising features (ready for Google Ads)
              'allow_google_signals': true,
              'allow_ad_personalization_signals': true,

              // Privacy protection
              'anonymize_ip': true,
              'cookie_flags': 'SameSite=None;Secure',

              // Basic tracking
              'send_page_view': true
            });
          `,
        }}
      />
    </>
  )
}
