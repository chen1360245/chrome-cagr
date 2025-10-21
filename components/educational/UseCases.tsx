import { TrendingUp, Wallet, Building2, PieChart as PieChartIcon, LineChart as LineChartIcon } from 'lucide-react'

export function UseCases() {
  const useCases = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Investment Portfolio Growth',
      description:
        'Measure how your investment portfolio has performed over multiple years. For example, if your portfolio grew from $100,000 to $300,000 over 10 years, the CAGR of 11.6% shows your average annual growth rate.',
      example: 'Example: $100K → $300K in 10 years = 11.6% CAGR',
      color: 'bg-green-50 border-green-200 text-green-900',
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: 'Investment Doubling Time',
      description:
        'Calculate how long it will take for your investment to double at a certain growth rate. If you invest $10,000 and want it to grow to $20,000, knowing your expected CAGR helps you estimate the timeframe.',
      example: 'Example: $10K → $20K at 14.87% CAGR = 5 years',
      color: 'bg-blue-50 border-blue-200 text-blue-900',
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'Company Revenue Analysis',
      description:
        'Analyze a company\'s revenue growth over multiple years to understand its long-term performance. This helps stakeholders make informed decisions about the company\'s financial health.',
      example: 'Example: Revenue $5M → $12M in 7 years = 13.2% CAGR',
      color: 'bg-purple-50 border-purple-200 text-purple-900',
    },
    {
      icon: <PieChartIcon className="w-6 h-6" />,
      title: 'Mutual Fund Comparison',
      description:
        'When selecting mutual funds, CAGR allows investors to compare the historical performance of different schemes over the same time period, providing an apples-to-apples comparison.',
      example: 'Example: Compare Fund A (12% CAGR) vs Fund B (9% CAGR)',
      color: 'bg-orange-50 border-orange-200 text-orange-900',
    },
    {
      icon: <LineChartIcon className="w-6 h-6" />,
      title: 'Growth Forecasting',
      description:
        'Use historical CAGR to project future growth. If a business has maintained a 15% CAGR over the past 5 years, you can use this rate to forecast potential future performance.',
      example: 'Example: Current value $50K at 15% CAGR = $100K in ~5 years',
      color: 'bg-pink-50 border-pink-200 text-pink-900',
    },
  ]

  return (
    <div className="space-y-6">
      <p className="text-lg text-gray-700">
        CAGR is widely used across finance and business for various purposes. Our CAGR calculator helps you solve
        all these scenarios instantly. Here are the most common use cases:
      </p>

      <div className="grid grid-cols-1 gap-5">
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className={`border rounded-lg p-5 ${useCase.color} transition-transform hover:scale-[1.02]`}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">{useCase.icon}</div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold mb-2">{useCase.title}</h4>
                <p className="mb-3 leading-relaxed">{useCase.description}</p>
                <div className="bg-white/60 rounded px-3 py-2 text-sm font-mono">
                  {useCase.example}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mt-6">
        <h4 className="font-semibold text-gray-900 mb-2">When to Use CAGR Calculator</h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">✓</span>
            <span>When you want to understand long-term investment performance</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">✓</span>
            <span>When comparing different investments over the same time period</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">✓</span>
            <span>When smoothing out year-over-year volatility</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">✓</span>
            <span>When forecasting future growth based on historical trends</span>
          </li>
        </ul>
        <p className="text-gray-700 mt-3">
          Use our free online calculator above to perform any of these calculations instantly.
        </p>
      </div>
    </div>
  )
}
