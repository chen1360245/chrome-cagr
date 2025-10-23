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
    en: 'Terms of Service - CAGR Calculator',
    'zh-CN': '服务条款 - CAGR计算器',
  }

  const descriptions = {
    en: 'Terms of Service for CAGR Calculator - Read our terms and conditions for using our free online calculator.',
    'zh-CN': 'CAGR计算器服务条款 - 阅读使用我们免费在线计算器的条款和条件。',
  }

  return {
    title: titles[locale as Locale] || titles.en,
    description: descriptions[locale as Locale] || descriptions.en,
    alternates: {
      canonical: `/${locale}/terms`,
      languages: {
        'en': '/en/terms',
        'zh-CN': '/zh-CN/terms',
        'x-default': '/en/terms',
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function TermsOfServicePage({ params }: Props) {
  const { locale } = await params

  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  if (locale === 'zh-CN') {
    return <TermsOfServiceZH />
  }

  return <TermsOfServiceEN />
}

function TermsOfServiceEN() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600">
            Last Updated: <strong>October 21, 2025</strong>
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 prose prose-gray max-w-none">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to CAGR Calculator (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). These Terms of Service
              (&quot;Terms&quot;) govern your access to and use of our website, located at{' '}
              <a href="https://cagrcalculator.app" className="text-primary hover:underline">
                https://cagrcalculator.app
              </a>{' '}
              (the &quot;Website&quot;), and the free online CAGR calculator tool provided therein (the
              &quot;Service&quot;).
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing or using our Website and Service, you agree to be bound by these Terms. If
              you do not agree to these Terms, please do not use our Website or Service.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
              <p className="text-gray-800">
                <strong>Important:</strong> Please read these Terms carefully before using our
                Service. By using our Service, you acknowledge that you have read, understood, and
                agree to be bound by these Terms.
              </p>
            </div>
          </section>

          {/* Description of Service */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Description of Service
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              CAGR Calculator is a free online tool that provides:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>
                <strong>4-Parameter CAGR Calculation:</strong> Calculate Compound Annual Growth Rate,
                Final Value, Present Value, or Time Period
              </li>
              <li>
                <strong>Visualization Tools:</strong> Charts, graphs, and yearly breakdowns of your
                investment growth
              </li>
              <li>
                <strong>Smart Insights:</strong> Automated analysis and comparisons with market
                benchmarks
              </li>
              <li>
                <strong>Educational Content:</strong> Information about CAGR, formulas, use cases, and
                FAQs
              </li>
              <li>
                <strong>Share Functionality:</strong> Share your calculation results via URL
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Our Service is provided <strong>free of charge</strong> and <strong>as-is</strong>{' '}
              without any warranties or guarantees.
            </p>
          </section>

          {/* User Eligibility */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Eligibility</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By using our Service, you represent and warrant that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>You are at least 13 years of age</li>
              <li>
                You have the legal capacity to enter into these Terms (if you are a minor, you have
                parental or guardian consent)
              </li>
              <li>
                You will use the Service in compliance with all applicable laws and regulations
              </li>
              <li>You will not use the Service for any illegal or unauthorized purpose</li>
            </ul>
          </section>

          {/* Acceptable Use */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Acceptable Use Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree <strong>NOT</strong> to use our Service for any of the following purposes:
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Prohibited Activities:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>
                <strong>Illegal Activities:</strong> Use the Service for any illegal purpose or in
                violation of any local, state, national, or international law
              </li>
              <li>
                <strong>Abuse or Harassment:</strong> Harass, abuse, or harm another person or entity
              </li>
              <li>
                <strong>Automated Access:</strong> Use robots, spiders, scrapers, or other automated
                means to access the Service without our prior written permission
              </li>
              <li>
                <strong>Reverse Engineering:</strong> Attempt to reverse engineer, decompile, or
                disassemble any part of the Service
              </li>
              <li>
                <strong>Interference:</strong> Interfere with or disrupt the Service or servers or
                networks connected to the Service
              </li>
              <li>
                <strong>Malicious Code:</strong> Introduce viruses, malware, or other harmful code
              </li>
              <li>
                <strong>Impersonation:</strong> Impersonate any person or entity or falsely state or
                misrepresent your affiliation with a person or entity
              </li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Intellectual Property Rights
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Our Content</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Service and its original content, features, functionality, design, code, graphics,
              and user interface are and will remain the exclusive property of CAGR Calculator and its
              licensors.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Service is protected by copyright, trademark, and other laws of both the United
              States and foreign countries. Our trademarks and trade dress may not be used in
              connection with any product or service without our prior written consent.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">5.2 Your Data</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You retain all rights to the financial data you input into our calculator (e.g., initial
              value, final value, time period, growth rate). We do not claim ownership of your
              calculation inputs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              However, please note that your calculation inputs are processed entirely in your browser
              and are <strong>not stored on our servers</strong>.
            </p>
          </section>

          {/* Disclaimer of Warranties */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Disclaimer of Warranties
            </h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 rounded">
              <p className="text-gray-800 font-semibold mb-2">IMPORTANT DISCLAIMER:</p>
              <p className="text-gray-700">
                The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without any
                warranties of any kind, either express or implied.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              We specifically disclaim all warranties, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>
                <strong>Accuracy:</strong> We do not warrant that the calculations provided by our
                Service are accurate, reliable, or error-free
              </li>
              <li>
                <strong>Availability:</strong> We do not warrant that the Service will be
                uninterrupted, timely, secure, or error-free
              </li>
              <li>
                <strong>Results:</strong> We do not warrant that the results obtained from using the
                Service will be accurate or reliable
              </li>
              <li>
                <strong>Fitness for Purpose:</strong> We do not warrant that the Service is fit for
                any particular purpose
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              <strong>Investment Disclaimer:</strong> Our calculator is provided for educational and
              informational purposes only. It should <strong>NOT</strong> be used as the sole basis
              for making investment decisions. Always consult with a qualified financial advisor before
              making any investment decisions.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Limitation of Liability
            </h2>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-4 rounded">
              <p className="text-gray-800">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL CAGR CALCULATOR, ITS
                DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY
                INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">This includes, without limitation:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Loss of profits or revenue</li>
              <li>Loss of data or business opportunities</li>
              <li>Investment losses based on calculations from our Service</li>
              <li>Cost of substitute goods or services</li>
              <li>Any other indirect, incidental, or consequential damages</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              This limitation applies whether the alleged liability is based on contract, tort,
              negligence, strict liability, or any other basis, even if we have been advised of the
              possibility of such damage.
            </p>
          </section>

          {/* Indemnification */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to indemnify, defend, and hold harmless CAGR Calculator, its officers,
              directors, employees, agents, licensors, and suppliers from and against all claims,
              losses, expenses, damages, and costs, including reasonable attorneys&apos; fees, arising out
              of or relating to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Your use or misuse of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>
                Any investment decisions you make based on calculations from our Service
              </li>
            </ul>
          </section>

          {/* Third-Party Links */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Third-Party Links and Services
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Service may contain links to third-party websites or services that are not owned or
              controlled by CAGR Calculator.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We have no control over, and assume no responsibility for, the content, privacy policies,
              or practices of any third-party websites or services. You acknowledge and agree that we
              shall not be responsible or liable, directly or indirectly, for any damage or loss caused
              or alleged to be caused by or in connection with the use of any such content, goods, or
              services available on or through any such websites or services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We strongly advise you to read the terms and conditions and privacy policies of any
              third-party websites or services that you visit.
            </p>
          </section>

          {/* Changes to Service */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Changes to the Service
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>
                Modify or discontinue, temporarily or permanently, the Service (or any part thereof)
                with or without notice
              </li>
              <li>Change the features, functionality, or design of the Service at any time</li>
              <li>
                Limit or restrict access to the Service for maintenance, updates, or other reasons
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We shall not be liable to you or any third party for any modification, suspension, or
              discontinuance of the Service.
            </p>
          </section>

          {/* Termination */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may terminate or suspend your access to our Service immediately, without prior notice
              or liability, for any reason whatsoever, including without limitation if you breach these
              Terms.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Upon termination, your right to use the Service will immediately cease.
            </p>
            <p className="text-gray-700 leading-relaxed">
              All provisions of these Terms which by their nature should survive termination shall
              survive termination, including, without limitation, ownership provisions, warranty
              disclaimers, indemnity, and limitations of liability.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              12. Governing Law and Jurisdiction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the United
              States, without regard to its conflict of law provisions.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Any dispute arising out of or relating to these Terms or the Service shall be resolved
              through binding arbitration in accordance with the rules of the American Arbitration
              Association, or in a court of competent jurisdiction if arbitration is not available or
              appropriate.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You agree to submit to the personal jurisdiction of such courts for the purpose of
              litigating all such claims or disputes.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any
              time. If a revision is material, we will try to provide at least 30 days&apos; notice prior
              to any new terms taking effect.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              What constitutes a material change will be determined at our sole discretion. By
              continuing to access or use our Service after those revisions become effective, you agree
              to be bound by the revised terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              It is your responsibility to review these Terms periodically for changes. The &quot;Last
              Updated&quot; date at the top of this page indicates when these Terms were last revised.
            </p>
          </section>

          {/* Severability */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Severability</h2>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these Terms is held to be unenforceable or invalid, such provision
              will be changed and interpreted to accomplish the objectives of such provision to the
              greatest extent possible under applicable law, and the remaining provisions will continue
              in full force and effect.
            </p>
          </section>

          {/* Waiver */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Waiver</h2>
            <p className="text-gray-700 leading-relaxed">
              Our failure to enforce any right or provision of these Terms will not be considered a
              waiver of those rights. The waiver of any such right or provision will be effective only
              if in writing and signed by a duly authorized representative of CAGR Calculator.
            </p>
          </section>

          {/* Entire Agreement */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Entire Agreement</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms, together with our Privacy Policy, constitute the entire agreement between
              you and CAGR Calculator regarding our Service, and supersede and replace any prior
              agreements we might have had between us regarding the Service.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">17. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms, please contact us:
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

          {/* Acknowledgment */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">18. Acknowledgment</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-gray-800">
                BY USING OUR SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND
                AGREE TO BE BOUND BY THEM.
              </p>
            </div>
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

function TermsOfServiceZH() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">服务条款</h1>
          <p className="text-gray-600">
            最后更新：<strong>2025年10月21日</strong>
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 prose prose-gray max-w-none">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. 同意条款</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              欢迎使用CAGR计算器（&ldquo;我们&rdquo;、&ldquo;我们的&rdquo;）。本服务条款（&ldquo;条款&rdquo;）管辖您对我们网站的访问和使用，网站位于{' '}
              <a href="https://cagrcalculator.app" className="text-primary hover:underline">
                https://cagrcalculator.app
              </a>{' '}
              （&ldquo;网站&rdquo;），以及其中提供的免费在线CAGR计算器工具（&ldquo;服务&rdquo;）。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              通过访问或使用我们的网站和服务，您同意受这些条款的约束。如果您不同意这些条款，请不要使用我们的网站或服务。
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
              <p className="text-gray-800">
                <strong>重要提示：</strong>在使用我们的服务之前，请仔细阅读这些条款。使用我们的服务即表示您确认已阅读、理解并同意受这些条款的约束。
              </p>
            </div>
          </section>

          {/* Description of Service */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. 服务描述
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              CAGR计算器是一个免费的在线工具，提供：
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>
                <strong>4参数CAGR计算：</strong>计算复合年增长率、最终值、现值或时间周期
              </li>
              <li>
                <strong>可视化工具：</strong>您投资增长的图表、图形和年度明细
              </li>
              <li>
                <strong>智能洞察：</strong>自动分析和与市场基准的比较
              </li>
              <li>
                <strong>教育内容：</strong>关于CAGR的信息、公式、使用案例和常见问题
              </li>
              <li>
                <strong>分享功能：</strong>通过URL分享您的计算结果
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              我们的服务是<strong>免费提供</strong>的，并且是<strong>按现状</strong>提供的，不提供任何保证或担保。
            </p>
          </section>

          {/* User Eligibility */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. 用户资格</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              使用我们的服务，您声明并保证：
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>您至少13岁</li>
              <li>
                您具有签订这些条款的法律能力（如果您是未成年人，您已获得父母或监护人的同意）
              </li>
              <li>
                您将遵守所有适用的法律法规使用本服务
              </li>
              <li>您不会将本服务用于任何非法或未经授权的目的</li>
            </ul>
          </section>

          {/* Acceptable Use */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. 可接受使用政策</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              您同意<strong>不得</strong>将我们的服务用于以下任何目的：
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">禁止的活动：</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>
                <strong>非法活动：</strong>将服务用于任何非法目的或违反任何地方、州、国家或国际法律
              </li>
              <li>
                <strong>滥用或骚扰：</strong>骚扰、虐待或伤害他人或实体
              </li>
              <li>
                <strong>自动化访问：</strong>未经我们事先书面许可使用机器人、爬虫、抓取工具或其他自动化方式访问服务
              </li>
              <li>
                <strong>逆向工程：</strong>尝试对服务的任何部分进行逆向工程、反编译或反汇编
              </li>
              <li>
                <strong>干扰：</strong>干扰或破坏服务或与服务连接的服务器或网络
              </li>
              <li>
                <strong>恶意代码：</strong>引入病毒、恶意软件或其他有害代码
              </li>
              <li>
                <strong>冒充：</strong>冒充任何人或实体，或虚假陈述或歪曲您与某人或实体的关系
              </li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. 知识产权
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 我们的内容</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              本服务及其原创内容、功能、特性、设计、代码、图形和用户界面是并将继续是CAGR计算器及其许可方的专有财产。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              本服务受美国和外国的版权、商标和其他法律保护。未经我们事先书面同意，我们的商标和商业外观不得与任何产品或服务结合使用。
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">5.2 您的数据</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              您保留输入到我们计算器中的财务数据（例如初始值、最终值、时间周期、增长率）的所有权利。我们不主张对您的计算输入的所有权。
            </p>
            <p className="text-gray-700 leading-relaxed">
              但是，请注意，您的计算输入完全在您的浏览器中处理，<strong>不会存储在我们的服务器上</strong>。
            </p>
          </section>

          {/* Disclaimer of Warranties */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. 免责声明
            </h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 rounded">
              <p className="text-gray-800 font-semibold mb-2">重要免责声明：</p>
              <p className="text-gray-700">
                本服务按&ldquo;现状&rdquo;和&ldquo;可用&rdquo;基础提供，不提供任何明示或暗示的保证。
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              我们特别声明不提供所有保证，包括但不限于：
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>
                <strong>准确性：</strong>我们不保证我们服务提供的计算准确、可靠或无错误
              </li>
              <li>
                <strong>可用性：</strong>我们不保证服务将不间断、及时、安全或无错误
              </li>
              <li>
                <strong>结果：</strong>我们不保证使用服务获得的结果将准确或可靠
              </li>
              <li>
                <strong>适用性：</strong>我们不保证服务适合任何特定目的
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              <strong>投资免责声明：</strong>我们的计算器仅用于教育和信息目的。它<strong>不应</strong>作为做出投资决策的唯一依据。在做出任何投资决策之前，请务必咨询合格的财务顾问。
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. 责任限制
            </h2>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-4 rounded">
              <p className="text-gray-800">
                在法律允许的最大范围内，CAGR计算器、其董事、员工、合作伙伴、代理、供应商或关联公司在任何情况下均不对任何间接、偶然、特殊、后果性或惩罚性损害承担责任。
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">这包括但不限于：</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>利润或收入损失</li>
              <li>数据或商业机会损失</li>
              <li>基于我们服务计算的投资损失</li>
              <li>替代商品或服务的成本</li>
              <li>任何其他间接、偶然或后果性损害</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              无论所称责任是基于合同、侵权、过失、严格责任还是任何其他基础，即使我们已被告知可能发生此类损害，此限制均适用。
            </p>
          </section>

          {/* Indemnification */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. 赔偿</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              您同意赔偿、辩护并使CAGR计算器、其高级职员、董事、员工、代理、许可方和供应商免受因以下原因引起或与之相关的所有索赔、损失、费用、损害和成本（包括合理的律师费）：
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>您对服务的使用或滥用</li>
              <li>您违反这些条款</li>
              <li>您侵犯任何第三方权利</li>
              <li>
                您基于我们服务计算做出的任何投资决策
              </li>
            </ul>
          </section>

          {/* Third-Party Links */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. 第三方链接和服务
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              我们的服务可能包含指向非CAGR计算器拥有或控制的第三方网站或服务的链接。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              我们无法控制任何第三方网站或服务的内容、隐私政策或做法，也不对此承担任何责任。您承认并同意，我们不对因使用或通过任何此类网站或服务提供的任何此类内容、商品或服务而造成或声称造成的任何损害或损失直接或间接负责。
            </p>
            <p className="text-gray-700 leading-relaxed">
              我们强烈建议您阅读您访问的任何第三方网站或服务的条款和条件及隐私政策。
            </p>
          </section>

          {/* Changes to Service */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. 服务变更
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              我们保留以下权利：
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>
                在有或没有通知的情况下，临时或永久修改或停止服务（或其任何部分）
              </li>
              <li>随时更改服务的功能、特性或设计</li>
              <li>
                因维护、更新或其他原因限制或限制对服务的访问
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              对于服务的任何修改、暂停或停止，我们不对您或任何第三方承担责任。
            </p>
          </section>

          {/* Termination */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. 终止</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              我们可能会立即终止或暂停您对我们服务的访问，无需事先通知或承担责任，无论出于何种原因，包括但不限于您违反这些条款。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              终止后，您使用服务的权利将立即停止。
            </p>
            <p className="text-gray-700 leading-relaxed">
              这些条款中按其性质应在终止后继续有效的所有条款应在终止后继续有效，包括但不限于所有权条款、保证免责声明、赔偿和责任限制。
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              12. 管辖法律和司法管辖权
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              这些条款应根据美国法律进行管辖和解释，不考虑其法律冲突条款。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              因这些条款或服务引起或与之相关的任何争议应根据美国仲裁协会的规则通过具有约束力的仲裁解决，或者如果仲裁不可用或不适当，则在有管辖权的法院解决。
            </p>
            <p className="text-gray-700 leading-relaxed">
              您同意接受此类法院的属人管辖权，以诉讼所有此类索赔或争议。
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. 条款变更</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              我们保留随时自行决定修改或替换这些条款的权利。如果修订是实质性的，我们将尝试在任何新条款生效前至少提前30天通知。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              什么构成实质性变更将由我们自行决定。在这些修订生效后继续访问或使用我们的服务即表示您同意受修订后的条款约束。
            </p>
            <p className="text-gray-700 leading-relaxed">
              您有责任定期查看这些条款的变更。本页面顶部的&ldquo;最后更新&rdquo;日期表明这些条款最后一次修订的时间。
            </p>
          </section>

          {/* Severability */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. 可分割性</h2>
            <p className="text-gray-700 leading-relaxed">
              如果这些条款的任何条款被认为不可执行或无效，则该条款将被更改和解释，以在适用法律下尽可能实现该条款的目标，其余条款将继续完全有效。
            </p>
          </section>

          {/* Waiver */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. 弃权</h2>
            <p className="text-gray-700 leading-relaxed">
              我们未能执行这些条款的任何权利或条款不会被视为对这些权利的弃权。任何此类权利或条款的弃权只有在书面形式并由CAGR计算器的正式授权代表签署后才有效。
            </p>
          </section>

          {/* Entire Agreement */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. 完整协议</h2>
            <p className="text-gray-700 leading-relaxed">
              这些条款连同我们的隐私政策构成您与CAGR计算器之间关于我们服务的完整协议，并取代和替换我们之间可能就服务达成的任何先前协议。
            </p>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">17. 联系信息</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              如果您对这些条款有任何疑问，请联系我们：
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

          {/* Acknowledgment */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">18. 确认</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-gray-800">
                使用我们的服务即表示您确认已阅读本服务条款并同意受其约束。
              </p>
            </div>
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
