import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy - CAGR Calculator',
  description: 'Privacy Policy for CAGR Calculator - Learn how we collect, use, and protect your data.',
  alternates: {
    canonical: '/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
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
