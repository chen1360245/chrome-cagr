export function WhatIsCAGR() {
  return (
    <div className="space-y-4">
      <p className="text-lg text-gray-700 leading-relaxed">
        <strong>CAGR (Compound Annual Growth Rate)</strong> is the annualized rate of growth in the
        value of an investment or financial metric over a stated period. It measures what an
        investment would yield on an annual basis, assuming the profits are reinvested at the end
        of each year.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <p className="text-gray-800">
          Unlike simple annual growth rates that short-term market fluctuations can influence, CAGR
          considers the <strong>compounding effect</strong> of returns, providing a more accurate
          measure of long-term growth.
        </p>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mt-6">Why Use CAGR?</h3>
      <ul className="space-y-2 text-gray-700">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">✓</span>
          <span>
            <strong>Smoothens volatility:</strong> CAGR effectively &quot;smoothens&quot; growth rates over
            multiple periods into a single annualized growth rate
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">✓</span>
          <span>
            <strong>Easy comparison:</strong> Compare performance of different investments over
            varying time periods
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">✓</span>
          <span>
            <strong>Compound effect:</strong> Takes into account the power of compounding, unlike
            simple averages
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">✓</span>
          <span>
            <strong>Future projections:</strong> Useful for forecasting based on historical growth
            patterns
          </span>
        </li>
      </ul>

      <div className="bg-primary/10 rounded-lg p-5 mt-6">
        <h4 className="font-semibold text-gray-900 mb-2">Key Insight</h4>
        <p className="text-gray-700">
          If you invested $10,000 and it grew to $20,000 over 5 years, the CAGR would be
          approximately 14.87% per year. This means your investment grew by an average of 14.87%
          annually over that period. Use our calculator above to find your investment&apos;s CAGR instantly.
        </p>
      </div>
    </div>
  )
}
