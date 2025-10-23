import { Locale } from '@/i18n/config'
import { FAQPage, Question } from './types'

/**
 * FAQPage Schema for CAGR Calculator
 *
 * This is the MOST IMPORTANT schema for SEO!
 * Benefits:
 * - FAQ answers appear directly in Google search results
 * - Takes up more space in search results (better visibility)
 * - Can increase click-through rate by 2-3x
 * - Shows your site as authoritative
 *
 * @param locale - Current language
 * @param faqData - FAQ questions and answers from translation files
 * @returns FAQPage JSON-LD schema
 */
export function getFAQPageSchema(
  locale: Locale,
  faqData?: Array<{ question: string; answer: string }>
): FAQPage {
  // Default English FAQ (fallback if faqData not provided)
  const defaultFAQ = [
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
        "Not necessarily. While higher CAGR indicates faster growth, it doesn't account for risk or volatility. An investment with 25% CAGR but high volatility might be riskier than one with 15% CAGR and stable growth. Always consider CAGR alongside other metrics like volatility, Sharpe ratio, and maximum drawdown.",
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
        "CAGR assumes constant growth, which rarely occurs in reality. It doesn't account for volatility, risk, or intermediate cash flows (dividends, deposits, withdrawals). It also doesn't reflect the timing of returns—you could have negative returns for 4 years and a spike in year 5, still showing a positive CAGR. Always use CAGR alongside other metrics for a complete picture.",
    },
  ]

  // Use provided FAQ data or default
  const faqs = faqData && faqData.length > 0 ? faqData : defaultFAQ

  // Convert FAQ data to Question schema
  const questions: Question[] = faqs.map((faq) => ({
    '@context': 'https://schema.org',
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@context': 'https://schema.org',
      '@type': 'Answer',
      text: faq.answer,
    },
  }))

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions,
  }
}
