export function About() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">About Our Free Online CAGR Calculator</h3>
        <p className="text-gray-700 leading-relaxed">
          Our Smart CAGR Calculator is a free online tool, accurate, and easy-to-use, designed to help
          investors, business analysts, and financial professionals calculate compound annual growth
          rates and make informed investment decisions. This calculator provides instant results with
          visual insights and detailed breakdowns.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-green-50 border border-green-200 rounded-lg p-5">
          <div className="text-3xl mb-2">🎯</div>
          <h4 className="font-semibold text-gray-900 mb-2">Intelligent</h4>
          <p className="text-sm text-gray-700">
            Automatically detects which variable to calculate based on your inputs. No mode
            selection needed.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
          <div className="text-3xl mb-2">📊</div>
          <h4 className="font-semibold text-gray-900 mb-2">Visual</h4>
          <p className="text-sm text-gray-700">
            Includes interactive charts, yearly breakdowns, and smart insights to help you
            understand your results.
          </p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
          <div className="text-3xl mb-2">✨</div>
          <h4 className="font-semibold text-gray-900 mb-2">Accurate</h4>
          <p className="text-sm text-gray-700">
            Uses precise mathematical formulas based on widely-accepted financial standards.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
        <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-primary">✓</span>
            <span>4-in-1 intelligent calculator (CAGR, FV, PV, Time)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">✓</span>
            <span>Real-time validation and error checking</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">✓</span>
            <span>Interactive visualizations (charts and tables)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">✓</span>
            <span>Smart insights with market benchmarks</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">✓</span>
            <span>Share results via URL or native share</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">✓</span>
            <span>Mobile-first responsive design</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">✓</span>
            <span>100% free to use, no registration required</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">✓</span>
            <span>Educational content and examples</span>
          </li>
        </ul>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded">
        <h4 className="font-semibold text-gray-900 mb-2">Accuracy & Disclaimer</h4>
        <p className="text-gray-700 text-sm leading-relaxed">
          Our CAGR calculator uses precise mathematical formulas to ensure accuracy. All calculations
          performed by this calculator are based on the standard CAGR formula:{' '}
          <code className="bg-white px-2 py-1 rounded">
            (FV/PV)<sup>(1/n)</sup> - 1
          </code>
          . However, this calculator tool is provided for educational and informational purposes only.
          Investment decisions should be made after consulting with qualified financial advisors.
          Past performance does not guarantee future results.
        </p>
      </div>

      <div className="bg-primary/10 border border-primary/30 rounded-lg p-5">
        <h4 className="font-semibold text-gray-900 mb-2">Technology</h4>
        <p className="text-gray-700 text-sm mb-3">
          Built with modern web technologies to ensure fast performance and excellent user
          experience:
        </p>
        <div className="flex flex-wrap gap-2">
          {['Next.js 14', 'TypeScript', 'React', 'Tailwind CSS', 'Recharts'].map((tech) => (
            <span
              key={tech}
              className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700 border border-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="text-center pt-4">
        <p className="text-gray-600 text-sm">
          Made with ❤️ for investors worldwide
          <br />
          <span className="text-xs text-gray-500">
            © {new Date().getFullYear()} CAGRCalculator.app | All rights reserved
          </span>
        </p>
      </div>
    </div>
  )
}
