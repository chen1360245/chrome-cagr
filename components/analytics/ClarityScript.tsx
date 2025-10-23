'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'

export function ClarityScript() {
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

  // Don't render script if user hasn't consented
  if (!shouldLoad) {
    return null
  }

  // Only render Clarity script after user consent
  return (
    <Script
      id="microsoft-clarity"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};

            // Privacy protection configuration
            c[a]('set', 'maskAllText', 'true');
            c[a]('set', 'maskAllInputs', 'true');

            t=l.createElement(r);t.async=1;
            t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "ttnln3bgvt");
        `,
      }}
    />
  )
}
