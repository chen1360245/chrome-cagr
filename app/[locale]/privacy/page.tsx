import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { locales, type Locale } from '@/i18n/config'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    en: 'Privacy Policy - CAGR Calculator',
    'zh-CN': '隐私政策 - CAGR计算器',
    es: 'Política de Privacidad - Calculadora CAGR',
    de: 'Datenschutzrichtlinie - CAGR Rechner',
    ja: 'プライバシーポリシー - CAGR計算機',
    ar: 'سياسة الخصوصية - حاسبة CAGR',
    fr: 'Politique de Confidentialité - Calculateur CAGR',
    'pt-BR': 'Política de Privacidade - Calculadora CAGR',
    ko: '개인정보 보호정책 - CAGR 계산기',
  }

  const descriptions = {
    en: 'Privacy Policy for CAGR Calculator - Learn how we collect, use, and protect your data.',
    'zh-CN': 'CAGR计算器隐私政策 - 了解我们如何收集、使用和保护您的数据。',
    es: 'Política de Privacidad para la Calculadora CAGR - Aprenda cómo recopilamos, usamos y protegemos sus datos.',
    de: 'Datenschutzrichtlinie für CAGR Rechner - Erfahren Sie, wie wir Ihre Daten sammeln, verwenden und schützen.',
    ja: 'CAGR計算機のプライバシーポリシー - データの収集、使用、保護方法について学びます。',
    ar: 'سياسة الخصوصية لحاسبة CAGR - تعرف على كيفية جمع بياناتك واستخدامها وحمايتها.',
    fr: 'Politique de Confidentialité pour le Calculateur CAGR - Découvrez comment nous collectons, utilisons et protégeons vos données.',
    'pt-BR': 'Política de Privacidade para a Calculadora CAGR - Saiba como coletamos, usamos e protegemos seus dados.',
    ko: 'CAGR 계산기 개인정보 보호정책 - 데이터 수집, 사용 및 보호 방법을 알아보세요.',
  }

  return {
    title: titles[locale as Locale] || titles.en,
    description: descriptions[locale as Locale] || descriptions.en,
    alternates: {
      canonical: `https://cagrcalculator.app/${locale}/privacy`,
      languages: {
        'en': 'https://cagrcalculator.app/en/privacy',
        'zh-CN': 'https://cagrcalculator.app/zh-CN/privacy',
        'es': 'https://cagrcalculator.app/es/privacy',
        'de': 'https://cagrcalculator.app/de/privacy',
        'ja': 'https://cagrcalculator.app/ja/privacy',
        'ar': 'https://cagrcalculator.app/ar/privacy',
        'fr': 'https://cagrcalculator.app/fr/privacy',
        'pt-BR': 'https://cagrcalculator.app/pt-BR/privacy',
        'ko': 'https://cagrcalculator.app/ko/privacy',
        'x-default': 'https://cagrcalculator.app/en/privacy',
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params

  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  switch (locale) {
    case 'zh-CN':
      return <PrivacyPolicyZH />
    case 'es':
      return <PrivacyPolicyES />
    case 'de':
      return <PrivacyPolicyDE />
    case 'ja':
      return <PrivacyPolicyJA />
    case 'ar':
      return <PrivacyPolicyAR />
    case 'fr':
      return <PrivacyPolicyFR />
    case 'pt-BR':
      return <PrivacyPolicyPTBR />
    case 'ko':
      return <PrivacyPolicyKO />
    default:
      return <PrivacyPolicyEN />
  }
}

function PrivacyPolicyEN() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-primary hover:text-primary/80 transition mb-6"
          >
            ← Back to Calculator
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">
            Last Updated: <strong>October 21, 2025</strong>
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 prose prose-gray max-w-none">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to CAGR Calculator (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to
              protecting your privacy and ensuring you have a positive experience on our website. This
              Privacy Policy explains how we collect, use, and safeguard your information when you use
              our free online CAGR calculator tool.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our website, you agree to the collection and use of information in accordance
              with this policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              2.1 Information You Provide
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>No Personal Information Required:</strong> Our CAGR Calculator does not require
              you to create an account or provide personal information such as your name, email
              address, or phone number to use the tool.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Calculation Inputs:</strong> When you use our calculator, you input financial
              data (e.g., initial value, final value, time period, growth rate). This data is
              processed entirely in your browser and is <strong>not stored on our servers</strong>.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              2.2 Automatically Collected Information
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Like most websites, we automatically collect certain information when you visit our site:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>
                <strong>Usage Data:</strong> Pages visited, time spent on pages, clicks, scrolls, and
                navigation patterns
              </li>
              <li>
                <strong>Device Information:</strong> Browser type and version, operating system,
                device type (desktop/mobile), screen resolution
              </li>
              <li>
                <strong>Location Data:</strong> General geographic location (country/city level) based
                on IP address
              </li>
              <li>
                <strong>Referral Information:</strong> The website that referred you to our site
                (e.g., Google search, social media)
              </li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use the collected information to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>
                <strong>Improve User Experience:</strong> Understand how users interact with our
                calculator to optimize usability and fix issues
              </li>
              <li>
                <strong>Analyze Performance:</strong> Monitor website performance, load times, and
                technical errors
              </li>
              <li>
                <strong>Generate Insights:</strong> Identify which features are most popular and which
                need improvement
              </li>
              <li>
                <strong>Detect Issues:</strong> Identify user experience problems such as confusing
                navigation or unclear error messages
              </li>
            </ul>
          </section>

          {/* Analytics and Tracking */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Analytics and Tracking Technologies
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Google Analytics 4</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use <strong>Google Analytics 4</strong> to collect and analyze website traffic and
              usage patterns. Google Analytics uses cookies to track your interactions with our site.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4 rounded">
              <p className="text-gray-800">
                <strong>Data Collected:</strong> Page views, session duration, bounce rate, traffic
                sources, device type, geographic location (country/city level)
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Google&apos;s Privacy Policy:</strong>{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://policies.google.com/privacy
              </a>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Opt-Out:</strong> You can opt out of Google Analytics tracking by installing the{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              4.2 Microsoft Clarity
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use <strong>Microsoft Clarity</strong> to understand user behavior through session
              recordings and heatmaps. Clarity helps us identify usability issues and optimize the user
              experience.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4 rounded">
              <p className="text-gray-800">
                <strong>Data Collected:</strong> Session recordings (anonymized mouse movements,
                clicks, scrolls), heatmaps, rage clicks, dead clicks
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Microsoft&apos;s Privacy Policy:</strong>{' '}
              <a
                href="https://privacy.microsoft.com/en-us/privacystatement"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://privacy.microsoft.com/privacystatement
              </a>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Important:</strong> Session recordings do not capture any text you enter into the
              calculator. Clarity automatically masks form inputs to protect your privacy.
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our
              website. Cookies are small text files stored on your device.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Types of Cookies We Use:</h3>
            <div className="space-y-4 mb-4">
              <div className="border-l-4 border-gray-300 pl-4">
                <p className="font-semibold text-gray-900">Essential Cookies</p>
                <p className="text-gray-700">
                  Required for the website to function properly (e.g., remembering your calculation
                  mode preference)
                </p>
              </div>
              <div className="border-l-4 border-gray-300 pl-4">
                <p className="font-semibold text-gray-900">Analytics Cookies</p>
                <p className="text-gray-700">
                  Help us understand how visitors use our site (Google Analytics, Microsoft Clarity)
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              Managing Cookies:
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Most web browsers allow you to control cookies through their settings. You can typically:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>View and delete cookies</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from specific sites</li>
              <li>Block all cookies</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              <strong>Note:</strong> Blocking cookies may impact your experience on our website.
            </p>
          </section>

          {/* Data Sharing */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Data Sharing and Third Parties
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We <strong>do not sell</strong> your personal information to third parties.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We share data only with the following service providers:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>
                <strong>Google Analytics:</strong> For website analytics and performance monitoring
              </li>
              <li>
                <strong>Microsoft Clarity:</strong> For user behavior analysis and UX optimization
              </li>
              <li>
                <strong>Hosting Provider (Vercel):</strong> For website hosting and content delivery
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              These third parties have access to your information only to perform specific tasks on our
              behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>
                <strong>HTTPS Encryption:</strong> All data transmitted between your browser and our
                servers is encrypted using SSL/TLS
              </li>
              <li>
                <strong>Client-Side Processing:</strong> Your calculation inputs are processed in your
                browser and never stored on our servers
              </li>
              <li>
                <strong>Regular Security Audits:</strong> We regularly review our security practices
                and update them as needed
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              However, no method of transmission over the Internet or electronic storage is 100%
              secure. While we strive to protect your information, we cannot guarantee absolute
              security.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Your Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>
                <strong>Right to Access:</strong> Request a copy of the data we have about you
              </li>
              <li>
                <strong>Right to Deletion:</strong> Request deletion of your data
              </li>
              <li>
                <strong>Right to Opt-Out:</strong> Opt out of analytics tracking (see Section 4)
              </li>
              <li>
                <strong>Right to Object:</strong> Object to our processing of your data
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              To exercise any of these rights, please contact us at the email address provided in
              Section 11.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Children&apos;s Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website is not directed to children under the age of 13. We do not knowingly collect
              personal information from children under 13. If you are a parent or guardian and believe
              your child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          {/* International Users */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. International Data Transfers
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website is hosted on servers that may be located in different countries. If you
              access our website from outside the United States, please be aware that your information
              may be transferred to, stored, and processed in the United States or other countries.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our website, you consent to the transfer of your information to countries
              outside your country of residence, which may have different data protection rules.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions or concerns about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong>{' '}
                <a href="mailto:toneychan2025@gmail.com" className="text-primary hover:underline">
                  toneychan2025@gmail.com
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Website:</strong>{' '}
                <a href="https://cagrcalculator.app" className="text-primary hover:underline">
                  https://cagrcalculator.app
                </a>
              </p>
            </div>
          </section>

          {/* Changes to Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              12. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by
              posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date at the
              top.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You are advised to review this Privacy Policy periodically for any changes. Changes to
              this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          {/* Consent */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Your Consent</h2>
            <p className="text-gray-700 leading-relaxed">
              By using our website, you consent to our Privacy Policy and agree to its terms.
            </p>
          </section>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition"
          >
            Back to CAGR Calculator
          </Link>
        </div>
      </div>
    </div>
  )
}

function PrivacyPolicyZH() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-primary hover:text-primary/80 transition mb-6"
          >
            ← 返回计算器
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">隐私政策</h1>
          <p className="text-gray-600">
            最后更新：<strong>2025年10月21日</strong>
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 prose prose-gray max-w-none">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. 简介</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              欢迎使用CAGR计算器（&ldquo;我们&rdquo;、&ldquo;我们的&rdquo;）。我们致力于保护您的隐私，并确保您在我们的网站上获得积极的体验。本隐私政策说明了当您使用我们的免费在线CAGR计算器工具时，我们如何收集、使用和保护您的信息。
            </p>
            <p className="text-gray-700 leading-relaxed">
              使用我们的网站即表示您同意按照本政策收集和使用信息。
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. 我们收集的信息
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              2.1 您提供的信息
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>无需个人信息：</strong>我们的CAGR计算器不需要您创建账户或提供个人信息（如姓名、电子邮件地址或电话号码）即可使用该工具。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>计算输入：</strong>当您使用我们的计算器时，您会输入财务数据（例如初始值、最终值、时间周期、增长率）。这些数据完全在您的浏览器中处理，<strong>不会存储在我们的服务器上</strong>。
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              2.2 自动收集的信息
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              与大多数网站一样，当您访问我们的网站时，我们会自动收集某些信息：
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>
                <strong>使用数据：</strong>访问的页面、在页面上花费的时间、点击、滚动和导航模式
              </li>
              <li>
                <strong>设备信息：</strong>浏览器类型和版本、操作系统、设备类型（桌面/移动）、屏幕分辨率
              </li>
              <li>
                <strong>位置数据：</strong>基于IP地址的一般地理位置（国家/城市级别）
              </li>
              <li>
                <strong>推荐信息：</strong>将您引荐到我们网站的网站（例如Google搜索、社交媒体）
              </li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. 我们如何使用您的信息
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">我们使用收集的信息用于：</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>
                <strong>改善用户体验：</strong>了解用户如何与我们的计算器交互，以优化可用性并修复问题
              </li>
              <li>
                <strong>分析性能：</strong>监控网站性能、加载时间和技术错误
              </li>
              <li>
                <strong>生成洞察：</strong>确定哪些功能最受欢迎以及哪些需要改进
              </li>
              <li>
                <strong>检测问题：</strong>识别用户体验问题，例如令人困惑的导航或不清楚的错误消息
              </li>
            </ul>
          </section>

          {/* Analytics and Tracking */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. 分析和跟踪技术
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Google Analytics 4</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              我们使用<strong>Google Analytics 4</strong>来收集和分析网站流量和使用模式。Google Analytics使用cookies来跟踪您与我们网站的互动。
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4 rounded">
              <p className="text-gray-800">
                <strong>收集的数据：</strong>页面浏览量、会话持续时间、跳出率、流量来源、设备类型、地理位置（国家/城市级别）
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Google隐私政策：</strong>{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://policies.google.com/privacy
              </a>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>退出：</strong>您可以通过安装{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google Analytics退出浏览器插件
              </a>
              来退出Google Analytics跟踪。
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              4.2 Microsoft Clarity
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              我们使用<strong>Microsoft Clarity</strong>通过会话录制和热图来了解用户行为。Clarity帮助我们识别可用性问题并优化用户体验。
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4 rounded">
              <p className="text-gray-800">
                <strong>收集的数据：</strong>会话录制（匿名鼠标移动、点击、滚动）、热图、愤怒点击、死点击
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Microsoft隐私政策：</strong>{' '}
              <a
                href="https://privacy.microsoft.com/zh-cn/privacystatement"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://privacy.microsoft.com/zh-cn/privacystatement
              </a>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>重要提示：</strong>会话录制不会捕获您在计算器中输入的任何文本。Clarity会自动屏蔽表单输入以保护您的隐私。
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              我们使用cookies和类似的跟踪技术来增强您在我们网站上的体验。Cookies是存储在您设备上的小型文本文件。
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">我们使用的Cookies类型：</h3>
            <div className="space-y-4 mb-4">
              <div className="border-l-4 border-gray-300 pl-4">
                <p className="font-semibold text-gray-900">必需Cookies</p>
                <p className="text-gray-700">
                  网站正常运行所需（例如记住您的计算模式偏好）
                </p>
              </div>
              <div className="border-l-4 border-gray-300 pl-4">
                <p className="font-semibold text-gray-900">分析Cookies</p>
                <p className="text-gray-700">
                  帮助我们了解访问者如何使用我们的网站（Google Analytics、Microsoft Clarity）
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              管理Cookies：
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              大多数网络浏览器允许您通过其设置控制cookies。您通常可以：
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>查看和删除cookies</li>
              <li>阻止第三方cookies</li>
              <li>阻止特定网站的cookies</li>
              <li>阻止所有cookies</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              <strong>注意：</strong>阻止cookies可能会影响您在我们网站上的体验。
            </p>
          </section>

          {/* Data Sharing */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. 数据共享和第三方
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              我们<strong>不会出售</strong>您的个人信息给第三方。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              我们仅与以下服务提供商共享数据：
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>
                <strong>Google Analytics：</strong>用于网站分析和性能监控
              </li>
              <li>
                <strong>Microsoft Clarity：</strong>用于用户行为分析和用户体验优化
              </li>
              <li>
                <strong>托管提供商（Vercel）：</strong>用于网站托管和内容交付
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              这些第三方仅在代表我们执行特定任务时才能访问您的信息，并有义务不将其披露或用于任何其他目的。
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. 数据安全</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              我们实施行业标准的安全措施来保护您的信息：
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>
                <strong>HTTPS加密：</strong>您的浏览器和我们服务器之间传输的所有数据都使用SSL/TLS加密
              </li>
              <li>
                <strong>客户端处理：</strong>您的计算输入在您的浏览器中处理，永远不会存储在我们的服务器上
              </li>
              <li>
                <strong>定期安全审计：</strong>我们定期审查我们的安全实践并根据需要进行更新
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              但是，通过互联网传输或电子存储的方法都不是100%安全的。虽然我们努力保护您的信息，但我们无法保证绝对安全。
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. 您的隐私权利</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              根据您所在的位置，您可能拥有以下权利：
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>
                <strong>访问权：</strong>请求我们拥有的关于您的数据的副本
              </li>
              <li>
                <strong>删除权：</strong>请求删除您的数据
              </li>
              <li>
                <strong>退出权：</strong>退出分析跟踪（参见第4节）
              </li>
              <li>
                <strong>反对权：</strong>反对我们处理您的数据
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              要行使这些权利中的任何一项，请通过第11节提供的电子邮件地址与我们联系。
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. 儿童隐私
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              我们的网站不针对13岁以下的儿童。我们不会故意收集13岁以下儿童的个人信息。如果您是家长或监护人，并认为您的孩子向我们提供了个人信息，请立即与我们联系。
            </p>
          </section>

          {/* International Users */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. 国际数据传输
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              我们的网站托管在可能位于不同国家的服务器上。如果您从美国以外的地方访问我们的网站，请注意您的信息可能会被传输到、存储并在美国或其他国家进行处理。
            </p>
            <p className="text-gray-700 leading-relaxed">
              使用我们的网站即表示您同意将您的信息传输到您所在国家以外的国家，这些国家可能有不同的数据保护规则。
            </p>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. 联系我们</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              如果您对本隐私政策有任何疑问或顾虑，请联系我们：
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 mb-2">
                <strong>电子邮件：</strong>{' '}
                <a href="mailto:toneychan2025@gmail.com" className="text-primary hover:underline">
                  toneychan2025@gmail.com
                </a>
              </p>
              <p className="text-gray-700">
                <strong>网站：</strong>{' '}
                <a href="https://cagrcalculator.app" className="text-primary hover:underline">
                  https://cagrcalculator.app
                </a>
              </p>
            </div>
          </section>

          {/* Changes to Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              12. 隐私政策的变更
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              我们可能会不时更新我们的隐私政策。我们将通过在此页面上发布新的隐私政策并更新顶部的&ldquo;最后更新&rdquo;日期来通知您任何更改。
            </p>
            <p className="text-gray-700 leading-relaxed">
              建议您定期查看本隐私政策以了解任何更改。本隐私政策的更改在发布到此页面时生效。
            </p>
          </section>

          {/* Consent */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. 您的同意</h2>
            <p className="text-gray-700 leading-relaxed">
              使用我们的网站即表示您同意我们的隐私政策并同意其条款。
            </p>
          </section>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition"
          >
            返回CAGR计算器
          </Link>
        </div>
      </div>
    </div>
  )
}
function PrivacyPolicyES() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition mb-6">
            ← Volver a la Calculadora
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Política de Privacidad</h1>
          <p className="text-gray-600">Última actualización: <strong>21 de octubre de 2025</strong></p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introducción</h2>
            <p className="text-gray-700 leading-relaxed">
              Bienvenido a CAGR Calculator. Estamos comprometidos con la protección de su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos su información cuando utiliza nuestra herramienta de calculadora CAGR gratuita en línea.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Información que Recopilamos</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Información que Usted Proporciona</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>No se Requiere Información Personal:</strong> Nuestra Calculadora CAGR no requiere que cree una cuenta o proporcione información personal.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Entradas de Cálculo:</strong> Los datos financieros que ingresa se procesan completamente en su navegador y <strong>no se almacenan en nuestros servidores</strong>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cómo Usamos Su Información</h2>
            <p className="text-gray-700 leading-relaxed">Utilizamos la información recopilada para mejorar la experiencia del usuario, analizar el rendimiento y detectar problemas.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Análisis y Tecnologías de Seguimiento</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Utilizamos Google Analytics 4 y Microsoft Clarity para comprender el comportamiento del usuario y optimizar la experiencia.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">Utilizamos cookies para mejorar su experiencia en nuestro sitio web.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Seguridad de Datos</h2>
            <p className="text-gray-700 leading-relaxed">Implementamos medidas de seguridad estándar de la industria, incluido el cifrado HTTPS y el procesamiento del lado del cliente.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Sus Derechos de Privacidad</h2>
            <p className="text-gray-700 leading-relaxed">Dependiendo de su ubicación, puede tener derecho a acceder, eliminar o excluirse del seguimiento de análisis.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contáctenos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Si tiene preguntas sobre esta Política de Privacidad, contáctenos:</p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> <a href="mailto:toneychan2025@gmail.com" className="text-primary hover:underline">toneychan2025@gmail.com</a>
              </p>
              <p className="text-gray-700">
                <strong>Sitio web:</strong> <a href="https://cagrcalculator.app" className="text-primary hover:underline">https://cagrcalculator.app</a>
              </p>
            </div>
          </section>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition">
            Volver a la Calculadora CAGR
          </Link>
        </div>
      </div>
    </div>
  )
}

function PrivacyPolicyDE() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition mb-6">
            ← Zurück zum Rechner
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Datenschutzrichtlinie</h1>
          <p className="text-gray-600">Letzte Aktualisierung: <strong>21. Oktober 2025</strong></p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Einführung</h2>
            <p className="text-gray-700 leading-relaxed">
              Willkommen bei CAGR Calculator. Wir sind bestrebt, Ihre Privatsphäre zu schützen. Diese Datenschutzrichtlinie erklärt, wie wir Ihre Informationen sammeln, verwenden und schützen, wenn Sie unser kostenloses Online-CAGR-Rechner-Tool verwenden.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Informationen, die Wir Sammeln</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Von Ihnen Bereitgestellte Informationen</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Keine Persönlichen Informationen Erforderlich:</strong> Unser CAGR-Rechner erfordert nicht, dass Sie ein Konto erstellen oder persönliche Informationen bereitstellen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Berechnungseingaben:</strong> Die von Ihnen eingegebenen Finanzdaten werden vollständig in Ihrem Browser verarbeitet und <strong>nicht auf unseren Servern gespeichert</strong>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Wie Wir Ihre Informationen Verwenden</h2>
            <p className="text-gray-700 leading-relaxed">Wir verwenden die gesammelten Informationen, um die Benutzererfahrung zu verbessern, die Leistung zu analysieren und Probleme zu erkennen.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Analyse und Tracking-Technologien</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Wir verwenden Google Analytics 4 und Microsoft Clarity, um das Benutzerverhalten zu verstehen und die Erfahrung zu optimieren.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Datensicherheit</h2>
            <p className="text-gray-700 leading-relaxed">Wir implementieren branchenübliche Sicherheitsmaßnahmen, einschließlich HTTPS-Verschlüsselung und clientseitiger Verarbeitung.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Ihre Datenschutzrechte</h2>
            <p className="text-gray-700 leading-relaxed">Abhängig von Ihrem Standort haben Sie möglicherweise das Recht auf Zugriff, Löschung oder Opt-out vom Analytics-Tracking.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Kontaktieren Sie Uns</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns:</p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 mb-2">
                <strong>E-Mail:</strong> <a href="mailto:toneychan2025@gmail.com" className="text-primary hover:underline">toneychan2025@gmail.com</a>
              </p>
              <p className="text-gray-700">
                <strong>Website:</strong> <a href="https://cagrcalculator.app" className="text-primary hover:underline">https://cagrcalculator.app</a>
              </p>
            </div>
          </section>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition">
            Zurück zum CAGR-Rechner
          </Link>
        </div>
      </div>
    </div>
  )
}

function PrivacyPolicyJA() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition mb-6">
            ← 計算機に戻る
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">プライバシーポリシー</h1>
          <p className="text-gray-600">最終更新日：<strong>2025年10月21日</strong></p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. はじめに</h2>
            <p className="text-gray-700 leading-relaxed">
              CAGR Calculatorへようこそ。当社はお客様のプライバシー保護に努めています。このプライバシーポリシーは、お客様が当社の無料オンラインCAGR計算ツールを使用する際に、当社がお客様の情報をどのように収集、使用、保護するかを説明します。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. 収集する情報</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 お客様が提供する情報</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>個人情報は不要：</strong>当社のCAGR計算機は、アカウントの作成や個人情報の提供を必要としません。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>計算入力：</strong>入力した財務データはお客様のブラウザで完全に処理され、<strong>当社のサーバーには保存されません</strong>。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. 情報の使用方法</h2>
            <p className="text-gray-700 leading-relaxed">収集した情報は、ユーザーエクスペリエンスの向上、パフォーマンスの分析、問題の検出に使用されます。</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. 分析およびトラッキング技術</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Google Analytics 4とMicrosoft Clarityを使用して、ユーザーの行動を理解し、エクスペリエンスを最適化します。</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookie</h2>
            <p className="text-gray-700 leading-relaxed">当社はCookieを使用して、当社のウェブサイトでのエクスペリエンスを向上させます。</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. データセキュリティ</h2>
            <p className="text-gray-700 leading-relaxed">HTTPS暗号化やクライアント側の処理など、業界標準のセキュリティ対策を実施しています。</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. プライバシー権</h2>
            <p className="text-gray-700 leading-relaxed">お客様の所在地によっては、アクセス、削除、または分析トラッキングのオプトアウトの権利がある場合があります。</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. お問い合わせ</h2>
            <p className="text-gray-700 leading-relaxed mb-4">このプライバシーポリシーに関するご質問がある場合は、お問い合わせください：</p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 mb-2">
                <strong>メール：</strong> <a href="mailto:toneychan2025@gmail.com" className="text-primary hover:underline">toneychan2025@gmail.com</a>
              </p>
              <p className="text-gray-700">
                <strong>ウェブサイト：</strong> <a href="https://cagrcalculator.app" className="text-primary hover:underline">https://cagrcalculator.app</a>
              </p>
            </div>
          </section>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition">
            CAGR計算機に戻る
          </Link>
        </div>
      </div>
    </div>
  )
}

function PrivacyPolicyAR() {
  return (
    <div className="min-h-screen bg-gray-50 py-12" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition mb-6">
            → العودة إلى الحاسبة
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">سياسة الخصوصية</h1>
          <p className="text-gray-600">آخر تحديث: <strong>21 أكتوبر 2025</strong></p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. مقدمة</h2>
            <p className="text-gray-700 leading-relaxed">
              مرحباً بك في حاسبة CAGR. نحن ملتزمون بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع معلوماتك واستخدامها وحمايتها عند استخدام أداة حاسبة CAGR المجانية عبر الإنترنت.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. المعلومات التي نجمعها</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 المعلومات التي تقدمها</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>لا حاجة لمعلومات شخصية:</strong> حاسبة CAGR الخاصة بنا لا تتطلب منك إنشاء حساب أو تقديم معلومات شخصية.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>مدخلات الحساب:</strong> البيانات المالية التي تدخلها تتم معالجتها بالكامل في متصفحك <strong>ولا يتم تخزينها على خوادمنا</strong>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. كيفية استخدام معلوماتك</h2>
            <p className="text-gray-700 leading-relaxed">نستخدم المعلومات المجمعة لتحسين تجربة المستخدم وتحليل الأداء واكتشاف المشكلات.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. التحليلات وتقنيات التتبع</h2>
            <p className="text-gray-700 leading-relaxed mb-4">نستخدم Google Analytics 4 و Microsoft Clarity لفهم سلوك المستخدم وتحسين التجربة.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. ملفات تعريف الارتباط</h2>
            <p className="text-gray-700 leading-relaxed">نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. أمن البيانات</h2>
            <p className="text-gray-700 leading-relaxed">نطبق تدابير أمنية قياسية في الصناعة، بما في ذلك تشفير HTTPS والمعالجة من جانب العميل.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. حقوق الخصوصية الخاصة بك</h2>
            <p className="text-gray-700 leading-relaxed">اعتماداً على موقعك، قد يكون لديك الحق في الوصول أو الحذف أو إلغاء الاشتراك في تتبع التحليلات.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. اتصل بنا</h2>
            <p className="text-gray-700 leading-relaxed mb-4">إذا كانت لديك أسئلة حول سياسة الخصوصية هذه، اتصل بنا:</p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 mb-2">
                <strong>البريد الإلكتروني:</strong> <a href="mailto:toneychan2025@gmail.com" className="text-primary hover:underline">toneychan2025@gmail.com</a>
              </p>
              <p className="text-gray-700">
                <strong>الموقع:</strong> <a href="https://cagrcalculator.app" className="text-primary hover:underline">https://cagrcalculator.app</a>
              </p>
            </div>
          </section>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition">
            العودة إلى حاسبة CAGR
          </Link>
        </div>
      </div>
    </div>
  )
}


function PrivacyPolicyFR() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition mb-6">
            ← Retour au Calculateur
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Politique de Confidentialité</h1>
          <p className="text-gray-600">Dernière mise à jour: <strong>23 Octobre 2025</strong></p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bienvenue sur le Calculateur CAGR. Nous nous engageons à protéger votre vie privée et à garantir que vos informations personnelles sont traitées de manière sécurisée et responsable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Informations que nous collectons</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Informations que vous fournissez</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Aucune information personnelle requise:</strong> Notre calculateur CAGR ne vous oblige pas à créer un compte ou à fournir des informations personnelles.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Entrées de calcul:</strong> Les données financières que vous saisissez sont entièrement traitées dans votre navigateur et <strong>ne sont pas stockées sur nos serveurs</strong>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Comment nous utilisons vos informations</h2>
            <p className="text-gray-700 leading-relaxed">Nous utilisons les informations collectées pour améliorer l&apos;expérience utilisateur, analyser les performances et identifier les problèmes.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Analyses et technologies de suivi</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Nous utilisons Google Analytics 4 et Microsoft Clarity pour comprendre le comportement des utilisateurs et améliorer l&apos;expérience.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">Nous utilisons des cookies pour améliorer votre expérience sur notre site.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Sécurité des données</h2>
            <p className="text-gray-700 leading-relaxed">Nous mettons en œuvre des mesures de sécurité standard de l&apos;industrie, y compris le cryptage HTTPS et le traitement côté client.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Vos droits à la vie privée</h2>
            <p className="text-gray-700 leading-relaxed">Selon votre emplacement, vous pouvez avoir le droit d&apos;accéder, de supprimer ou de refuser le suivi analytique.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contactez-nous</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Si vous avez des questions concernant cette politique de confidentialité, contactez-nous:</p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> <a href="mailto:toneychan2025@gmail.com" className="text-primary hover:underline">toneychan2025@gmail.com</a>
              </p>
              <p className="text-gray-700">
                <strong>Site web:</strong> <a href="https://cagrcalculator.app" className="text-primary hover:underline">https://cagrcalculator.app</a>
              </p>
            </div>
          </section>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition">
            Retour au Calculateur CAGR
          </Link>
        </div>
      </div>
    </div>
  )
}

function PrivacyPolicyPTBR() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition mb-6">
            ← Voltar para a Calculadora
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Política de Privacidade</h1>
          <p className="text-gray-600">Última atualização: <strong>23 de Outubro de 2025</strong></p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introdução</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bem-vindo à Calculadora CAGR. Estamos comprometidos em proteger sua privacidade e garantir que suas informações pessoais sejam tratadas de forma segura e responsável.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Informações que coletamos</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Informações que você fornece</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Nenhuma informação pessoal necessária:</strong> Nossa calculadora CAGR não exige que você crie uma conta ou forneça informações pessoais.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Entradas de cálculo:</strong> Os dados financeiros que você insere são totalmente processados em seu navegador e <strong>não são armazenados em nossos servidores</strong>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Como usamos suas informações</h2>
            <p className="text-gray-700 leading-relaxed">Usamos as informações coletadas para melhorar a experiência do usuário, analisar o desempenho e identificar problemas.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Análise e tecnologias de rastreamento</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Usamos Google Analytics 4 e Microsoft Clarity para entender o comportamento do usuário e melhorar a experiência.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">Usamos cookies para melhorar sua experiência em nosso site.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Segurança de dados</h2>
            <p className="text-gray-700 leading-relaxed">Implementamos medidas de segurança padrão do setor, incluindo criptografia HTTPS e processamento do lado do cliente.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Seus direitos de privacidade</h2>
            <p className="text-gray-700 leading-relaxed">Dependendo da sua localização, você pode ter o direito de acessar, excluir ou optar por não participar do rastreamento analítico.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Entre em contato</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Se você tiver dúvidas sobre esta política de privacidade, entre em contato conosco:</p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> <a href="mailto:toneychan2025@gmail.com" className="text-primary hover:underline">toneychan2025@gmail.com</a>
              </p>
              <p className="text-gray-700">
                <strong>Site:</strong> <a href="https://cagrcalculator.app" className="text-primary hover:underline">https://cagrcalculator.app</a>
              </p>
            </div>
          </section>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition">
            Voltar para a Calculadora CAGR
          </Link>
        </div>
      </div>
    </div>
  )
}

function PrivacyPolicyKO() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition mb-6">
            ← 계산기로 돌아가기
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">개인정보 보호정책</h1>
          <p className="text-gray-600">최종 업데이트: <strong>2025년 10월 23일</strong></p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. 소개</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              CAGR 계산기에 오신 것을 환영합니다. 우리는 귀하의 개인정보를 보호하고 귀하의 개인 정보가 안전하고 책임감 있게 처리되도록 최선을 다하고 있습니다.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. 수집하는 정보</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 귀하가 제공하는 정보</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>개인 정보 불필요:</strong> CAGR 계산기는 계정을 만들거나 개인 정보를 제공할 필요가 없습니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>계산 입력:</strong> 입력한 재무 데이터는 브라우저에서 완전히 처리되며 <strong>서버에 저장되지 않습니다</strong>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. 정보 사용 방법</h2>
            <p className="text-gray-700 leading-relaxed">수집된 정보는 사용자 경험 개선, 성능 분석 및 문제 식별에 사용됩니다.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. 분석 및 추적 기술</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Google Analytics 4와 Microsoft Clarity를 사용하여 사용자 행동을 이해하고 경험을 개선합니다.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. 쿠키</h2>
            <p className="text-gray-700 leading-relaxed">사이트에서 사용자 경험을 개선하기 위해 쿠키를 사용합니다.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. 데이터 보안</h2>
            <p className="text-gray-700 leading-relaxed">HTTPS 암호화 및 클라이언트 측 처리를 포함한 업계 표준 보안 조치를 구현합니다.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. 귀하의 개인정보 보호 권리</h2>
            <p className="text-gray-700 leading-relaxed">위치에 따라 분석 추적에 대한 액세스, 삭제 또는 거부 권리가 있을 수 있습니다.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. 문의하기</h2>
            <p className="text-gray-700 leading-relaxed mb-4">이 개인정보 보호정책에 대한 질문이 있으시면 문의하십시오:</p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 mb-2">
                <strong>이메일:</strong> <a href="mailto:toneychan2025@gmail.com" className="text-primary hover:underline">toneychan2025@gmail.com</a>
              </p>
              <p className="text-gray-700">
                <strong>웹사이트:</strong> <a href="https://cagrcalculator.app" className="text-primary hover:underline">https://cagrcalculator.app</a>
              </p>
            </div>
          </section>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition">
            CAGR 계산기로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  )
}
