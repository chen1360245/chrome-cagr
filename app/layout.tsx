import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Smart CAGR Calculator - Calculate Any Investment Parameter Instantly',
  description:
    "The world's first intelligent 4-parameter CAGR calculator. Input any 3 values (initial amount, final value, time period, growth rate) and instantly calculate the 4th. Free, accurate, and mobile-friendly.",
  keywords: [
    'CAGR calculator',
    'compound annual growth rate',
    'investment calculator',
    'growth rate calculator',
    'ROI calculator',
    'investment returns',
  ],
  authors: [{ name: 'CAGR Calculator Team' }],
  openGraph: {
    title: 'Smart CAGR Calculator - Investment Growth Calculator',
    description:
      'Calculate CAGR, final value, initial investment, or time period. The most comprehensive CAGR calculator available.',
    url: 'https://cagrcalculator.app',
    siteName: 'CAGR Calculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart CAGR Calculator',
    description: 'The most intelligent CAGR calculator - Calculate any investment parameter',
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://cagrcalculator.app" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <h1 className="text-xl font-bold text-gray-900">
                    <span className="text-primary">Smart</span> CAGR Calculator
                  </h1>
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
                    The world's first intelligent 4-parameter CAGR calculator. Calculate growth
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
                      <a href="#examples" className="hover:text-primary transition">
                        Examples
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
      </body>
    </html>
  )
}
