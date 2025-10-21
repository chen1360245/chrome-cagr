import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { CookieConsent } from '@/components/CookieConsent'
import { Logo } from '@/components/Logo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://cagrcalculator.app'),
  title: 'CAGR Calculator - Free Online Compound Annual Growth Rate Calculator',
  description:
    'Free online CAGR calculator - Calculate compound annual growth rate, final value, initial value, or time period. Learn how to calculate CAGR with formulas, examples, and step-by-step guide. Mobile-friendly and accurate.',
  keywords: [
    'CAGR calculator',
    'compound annual growth rate',
    'calculate cagr',
    'cagr calculator online',
    'how to calculate cagr',
    'cagr formula',
    'cagr formula calculator',
    'investment calculator',
    'growth rate calculator',
    'cagr calculation',
    'reverse cagr calculator',
    'calculate final value from cagr',
    'cagr return calculator',
    'free cagr calculator',
    'investment returns',
    'ROI calculator',
  ],
  authors: [{ name: 'CAGR Calculator Team' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CAGR Calculator - Free Online Compound Annual Growth Rate Calculator',
    description:
      'Free online CAGR calculator - Calculate compound annual growth rate, final value, initial value, or time period. Learn how to calculate CAGR with formulas and examples.',
    url: 'https://cagrcalculator.app',
    siteName: 'CAGR Calculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CAGR Calculator - Free Online Tool',
    description: 'Free online CAGR calculator - Calculate compound annual growth rate, final value, initial value, or time period with formulas and examples.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags */}
        <link rel="icon" type="image/svg+xml" href="/logo-favicon.svg" />
        <link rel="apple-touch-icon" href="/logo-variant-1.svg" />

        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "ttnln3bgvt");
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}

        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <Logo variant="full" width={180} height={40} className="cursor-pointer" />
                </div>
                <nav className="hidden md:flex space-x-6">
                  <a href="#what-is-cagr" className="text-gray-600 hover:text-primary transition">
                    What is CAGR?
                  </a>
                  <a href="#how-to-use" className="text-gray-600 hover:text-primary transition">
                    How to Use
                  </a>
                  <a href="#faq" className="text-gray-600 hover:text-primary transition">
                    FAQ
                  </a>
                </nav>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-white font-semibold mb-4">About</h3>
                  <p className="text-sm">
                    The world&apos;s first intelligent 4-parameter CAGR calculator. Calculate growth
                    rate, final value, initial investment, or time period instantly.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#what-is-cagr" className="hover:text-primary transition">
                        What is CAGR?
                      </a>
                    </li>
                    <li>
                      <a href="#formula" className="hover:text-primary transition">
                        Formula
                      </a>
                    </li>
                    <li>
                      <a href="#use-cases" className="hover:text-primary transition">
                        Use Cases
                      </a>
                    </li>
                    <li>
                      <a href="#how-to-use" className="hover:text-primary transition">
                        How to Use
                      </a>
                    </li>
                    <li>
                      <a href="#faq" className="hover:text-primary transition">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-4">Legal</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="/privacy" className="hover:text-primary transition">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="/terms" className="hover:text-primary transition">
                        Terms of Service
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
                <p>&copy; 2025 CAGRCalculator.app. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>

        {/* Cookie Consent Banner */}
        <CookieConsent />
      </body>
    </html>
  )
}
