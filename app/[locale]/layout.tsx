import { Inter } from 'next/font/google'
import Script from 'next/script'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { CookieConsent } from '@/components/CookieConsent'
import { Logo } from '@/components/Logo'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { locales, type Locale } from '@/i18n/config'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

// 生成动态metadata（支持多语言）
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    metadataBase: new URL('https://cagrcalculator.app'),
    title: t('title'),
    description: t('description'),
    keywords: t('keywords').split(','),
    authors: [{ name: 'CAGR Calculator Team' }],
    icons: {
      icon: '/logo-favicon.svg',
      apple: '/logo-variant-1.svg',
    },
    alternates: {
      canonical: `https://cagrcalculator.app/${locale}`,
      languages: {
        'en': 'https://cagrcalculator.app/en',
        'zh-CN': 'https://cagrcalculator.app/zh-CN',
        'es': 'https://cagrcalculator.app/es',
        'de': 'https://cagrcalculator.app/de',
        'ja': 'https://cagrcalculator.app/ja',
        'ar': 'https://cagrcalculator.app/ar',
        'x-default': 'https://cagrcalculator.app/en', // 默认语言,告诉搜索引擎当没有匹配语言时使用英文
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://cagrcalculator.app/${locale}`,
      siteName: 'CAGR Calculator',
      locale: locale,
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'CAGR Calculator',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/og-image.png'],
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
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
      yandex: '',
      bing: '',
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  // Await params to get the locale
  const { locale } = await params

  // Validate that the incoming locale is valid
  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  // Get translations and messages
  const t = await getTranslations({ locale, namespace: 'layout' })
  const messages = await getMessages({ locale })

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
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

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}

        <NextIntlClientProvider messages={messages} locale={locale}>
          <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <Logo variant="full" width={180} height={40} className="cursor-pointer" />
                  </div>
                  <div className="flex items-center gap-4">
                    <nav className="hidden md:flex space-x-6">
                      <a href="#what-is-cagr" className="text-gray-600 hover:text-primary transition">
                        {t('nav.whatIsCAGR')}
                      </a>
                      <a href="#how-to-use" className="text-gray-600 hover:text-primary transition">
                        {t('nav.howToUse')}
                      </a>
                      <a href="#faq" className="text-gray-600 hover:text-primary transition">
                        {t('nav.faq')}
                      </a>
                    </nav>
                    <LanguageSwitcher />
                  </div>
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
                    <h3 className="text-white font-semibold mb-4">{t('footer.about')}</h3>
                    <p className="text-sm">
                      {t('footer.aboutText')}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="#what-is-cagr" className="hover:text-primary transition">
                          {t('footer.whatIsCAGR')}
                        </a>
                      </li>
                      <li>
                        <a href="#formula" className="hover:text-primary transition">
                          {t('footer.formula')}
                        </a>
                      </li>
                      <li>
                        <a href="#use-cases" className="hover:text-primary transition">
                          {t('footer.useCases')}
                        </a>
                      </li>
                      <li>
                        <a href="#how-to-use" className="hover:text-primary transition">
                          {t('footer.howToUse')}
                        </a>
                      </li>
                      <li>
                        <a href="#faq" className="hover:text-primary transition">
                          {t('footer.faq')}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-4">{t('footer.legal')}</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href={`/${locale}/privacy`} className="hover:text-primary transition">
                          {t('footer.privacyPolicy')}
                        </a>
                      </li>
                      <li>
                        <a href={`/${locale}/terms`} className="hover:text-primary transition">
                          {t('footer.termsOfService')}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
                  <p>{t('footer.copyright')}</p>
                </div>
              </div>
            </footer>
          </div>

          {/* Cookie Consent Banner */}
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
