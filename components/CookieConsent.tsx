'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    // Trigger event to notify Analytics components to load
    window.dispatchEvent(new CustomEvent('analyticsConsent', { detail: 'accepted' }))
    closeBanner()
  }

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    closeBanner()
  }

  const closeBanner = () => {
    setIsClosing(true)
    setTimeout(() => {
      setShowBanner(false)
      setIsClosing(false)
    }, 300) // Match animation duration
  }

  if (!showBanner) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/20 z-40 transition-opacity duration-300 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={closeBanner}
      />

      {/* Cookie Banner */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
          isClosing ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <div className="bg-white border-t-2 border-gray-200 shadow-2xl">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start gap-3">
                  {/* Cookie Icon */}
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🍪</span>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      We Value Your Privacy
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-2">
                      We use cookies and similar technologies to improve your experience, analyze
                      website traffic, and understand user behavior. By clicking &quot;Accept All,&quot; you
                      consent to our use of cookies.
                    </p>
                    <p className="text-gray-600 text-sm">
                      Read our{' '}
                      <Link
                        href="/privacy"
                        className="text-primary hover:underline font-medium"
                      >
                        Privacy Policy
                      </Link>{' '}
                      and{' '}
                      <Link href="/terms" className="text-primary hover:underline font-medium">
                        Terms of Service
                      </Link>{' '}
                      to learn more.
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={handleDecline}
                  className="px-6 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium text-sm whitespace-nowrap"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-medium text-sm whitespace-nowrap shadow-sm"
                >
                  Accept All
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={closeBanner}
                className="absolute top-4 right-4 md:relative md:top-0 md:right-0 text-gray-400 hover:text-gray-600 transition"
                aria-label="Close cookie banner"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Additional Info (Optional) */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <details className="text-sm text-gray-600">
                <summary className="cursor-pointer hover:text-gray-900 font-medium">
                  What cookies do we use?
                </summary>
                <div className="mt-3 space-y-2 pl-4">
                  <p>
                    <strong className="text-gray-900">Essential Cookies:</strong> Required for the
                    website to function properly (e.g., remembering your preferences)
                  </p>
                  <p>
                    <strong className="text-gray-900">Analytics Cookies:</strong> Help us
                    understand how visitors use our site (Google Analytics, Microsoft Clarity)
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    You can change your cookie preferences at any time by clearing your browser&apos;s
                    cookies and revisiting this page.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
