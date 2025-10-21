'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'What is the difference between CAGR and average return?',
    answer:
      'CAGR is a geometric mean that accounts for compounding, while average return is an arithmetic mean. CAGR is more accurate for measuring investment performance over time because it reflects the actual growth rate if returns were compounded annually.',
  },
  {
    question: 'Can CAGR be negative?',
    answer:
      'Yes, CAGR can be negative if the final value is less than the initial value. A negative CAGR indicates that the investment has lost value over the time period. For example, if $10,000 becomes $8,000 over 5 years, the CAGR would be approximately -4.4%.',
  },
  {
    question: 'Is higher CAGR always better?',
    answer:
      'Not necessarily. While higher CAGR indicates faster growth, it doesn\'t account for risk or volatility. An investment with 25% CAGR but high volatility might be riskier than one with 15% CAGR and stable growth. Always consider CAGR alongside other metrics like volatility, Sharpe ratio, and maximum drawdown.',
  },
  {
    question: 'How accurate is CAGR for short periods?',
    answer:
      'CAGR can be misleading for very short periods (less than 1 year) because it annualizes the returns, which can exaggerate or distort the actual performance. For periods shorter than a year, absolute return is often more appropriate.',
  },
  {
    question: 'When should I use CAGR vs absolute return?',
    answer:
      'Use CAGR when comparing investments over different time periods or when you want to understand annualized growth rates (typically 3+ years). Use absolute return for shorter periods, single-period performance, or when the time period is less relevant to your analysis.',
  },
  {
    question: 'Does CAGR account for volatility?',
    answer:
      'No, CAGR does not account for volatility. It only shows the smoothed growth rate from start to end, ignoring the ups and downs along the way. Two investments can have the same CAGR but vastly different volatility profiles. Consider using additional metrics like standard deviation or Sharpe ratio to assess risk.',
  },
  {
    question: 'Can I use CAGR for monthly data?',
    answer:
      'Yes, but you need to adjust the time period accordingly. If you have monthly data over 3 years, use n = 36 months instead of 3 years. The formula remains the same: (FV/PV)^(1/n) - 1, but remember to annualize the result by multiplying by 12 if you want a yearly rate.',
  },
  {
    question: "What's a good CAGR for stocks, bonds, and real estate?",
    answer:
      'Historically: S&P 500 stocks ~10-11% CAGR, Corporate bonds ~5-6% CAGR, Real estate ~8-9% CAGR, and Gold ~7% CAGR. However, past performance doesn\'t guarantee future returns. A "good" CAGR depends on your risk tolerance, investment goals, and the broader economic context.',
  },
  {
    question: 'How do I calculate CAGR in Excel?',
    answer:
      'In Excel, use this formula: =(FV/PV)^(1/n)-1 or =POWER(FV/PV, 1/n)-1. You can also use the RATE function: =RATE(n, 0, -PV, FV). For example, for $10,000 growing to $20,000 over 5 years: =POWER(20000/10000, 1/5)-1 returns 0.1487 or 14.87%. However, our free online calculator is much faster and eliminates the risk of formula errors.',
  },
  {
    question: 'What are the main limitations of CAGR?',
    answer:
      'CAGR assumes constant growth, which rarely occurs in reality. It doesn\'t account for volatility, risk, or intermediate cash flows (dividends, deposits, withdrawals). It also doesn\'t reflect the timing of returns—you could have negative returns for 4 years and a spike in year 5, still showing a positive CAGR. Always use CAGR alongside other metrics for a complete picture.',
  },
]

export function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0) // First question expanded by default

  const toggleQuestion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      <p className="text-lg text-gray-700 mb-6">
        Here are answers to the most common questions about CAGR and our free online CAGR calculator:
      </p>

      <div className="space-y-3">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:border-primary/50 transition-colors"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              aria-expanded={expandedIndex === index}
            >
              <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
              {expandedIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
              )}
            </button>

            <div
              className={`transition-all duration-300 ease-in-out ${
                expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="px-5 py-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primary/10 border border-primary/30 rounded-lg p-5 mt-6">
        <h4 className="font-semibold text-gray-900 mb-2">Still have questions?</h4>
        <p className="text-gray-700">
          This calculator is designed to be as accurate and helpful as possible. All calculations
          are based on widely-accepted financial formulas. If you have additional questions about
          CAGR or need help interpreting your results, consider consulting with a financial advisor.
        </p>
      </div>
    </div>
  )
}
