export function CAGRvsMetrics() {
  return (
    <div className="space-y-6">
      <p className="text-lg text-gray-700">
        While CAGR is a powerful metric, it&apos;s important to understand how it compares to other
        commonly used financial metrics. Each has its strengths and limitations.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                Metric
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                Description
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                Best For
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 font-semibold text-primary">CAGR</td>
              <td className="px-4 py-3 text-gray-700">
                Smoothed annualized growth rate assuming compounding
              </td>
              <td className="px-4 py-3 text-gray-700">Long-term investment performance</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 font-semibold text-gray-900">Simple Average Return</td>
              <td className="px-4 py-3 text-gray-700">
                Arithmetic mean of annual returns (can be misleading)
              </td>
              <td className="px-4 py-3 text-gray-700">Quick rough estimates only</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 font-semibold text-gray-900">Absolute Return</td>
              <td className="px-4 py-3 text-gray-700">
                Total percentage change from start to end
              </td>
              <td className="px-4 py-3 text-gray-700">
                Short-term or single-period performance
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 font-semibold text-gray-900">IRR (Internal Rate of Return)</td>
              <td className="px-4 py-3 text-gray-700">
                Accounts for timing of cash flows in/out
              </td>
              <td className="px-4 py-3 text-gray-700">
                Investments with multiple cash flows
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 font-semibold text-gray-900">TWR (Time-Weighted Return)</td>
              <td className="px-4 py-3 text-gray-700">
                Removes impact of external cash flows
              </td>
              <td className="px-4 py-3 text-gray-700">
                Evaluating fund manager performance
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-5">
          <h4 className="font-semibold text-green-900 mb-3">✅ Advantages of CAGR</h4>
          <ul className="space-y-2 text-green-800">
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>Accounts for compounding effects</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>Easy to understand and communicate</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>Smooths out short-term volatility</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>Enables comparison across different timeframes</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>Not distorted by extreme percentage changes</span>
            </li>
          </ul>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
          <h4 className="font-semibold text-orange-900 mb-3">⚠️ Limitations of CAGR</h4>
          <ul className="space-y-2 text-orange-800">
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>Assumes constant growth (which rarely happens)</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>Doesn&apos;t account for volatility or risk</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>Doesn&apos;t consider intermediate cash flows</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>Can be misleading for very short periods</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>Past CAGR doesn&apos;t guarantee future returns</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded mt-6">
        <h4 className="font-semibold text-gray-900 mb-2">Example: CAGR vs Simple Average</h4>
        <p className="text-gray-700 mb-3">
          Consider an investment that goes: $100 → $150 → $120 → $180 over 3 years
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-white rounded p-3">
            <p className="font-semibold text-gray-900 mb-2">Simple Average Return:</p>
            <p className="text-gray-700">
              Year 1: +50% | Year 2: -20% | Year 3: +50%
              <br />
              Average = (50 - 20 + 50) / 3 = <strong>26.67%</strong>
            </p>
          </div>
          <div className="bg-white rounded p-3">
            <p className="font-semibold text-gray-900 mb-2">CAGR:</p>
            <p className="text-gray-700">
              (180 / 100)<sup>(1/3)</sup> - 1
              <br />
              CAGR = <strong>21.7%</strong>
            </p>
          </div>
        </div>
        <p className="text-gray-700 mt-3 text-sm">
          <strong>Notice:</strong> CAGR (21.7%) is more accurate because it accounts for
          compounding, while the simple average (26.67%) overestimates the true annualized growth.
        </p>
      </div>
    </div>
  )
}
