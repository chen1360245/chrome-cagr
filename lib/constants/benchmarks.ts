/**
 * Market Benchmarks - PRD Section 5.1.5
 * Historical average returns for comparison
 */

export const MARKET_BENCHMARKS = {
  'S&P 500': {
    cagr: 10.5,
    description: 'US stock market average (historical)',
    period: 'Long-term (50+ years)',
  },
  'Nasdaq': {
    cagr: 12.3,
    description: 'Technology-heavy index',
    period: 'Long-term',
  },
  'Bonds': {
    cagr: 5.0,
    description: 'Investment-grade bonds',
    period: 'Long-term',
  },
  'Gold': {
    cagr: 7.2,
    description: 'Gold commodity',
    period: 'Long-term',
  },
  'Real Estate': {
    cagr: 8.5,
    description: 'US real estate (REITs)',
    period: 'Long-term',
  },
  'Inflation': {
    cagr: 3.0,
    description: 'US inflation average',
    period: 'Long-term',
  },
}

export type BenchmarkName = keyof typeof MARKET_BENCHMARKS

export function getBenchmark(name: BenchmarkName) {
  return MARKET_BENCHMARKS[name]
}

export function compareToBenchmark(cagr: number, benchmarkName: BenchmarkName) {
  const benchmark = MARKET_BENCHMARKS[benchmarkName]
  const difference = cagr - benchmark.cagr
  const multiplier = cagr / benchmark.cagr

  return {
    benchmark,
    difference,
    multiplier,
    isBeating: difference > 0,
  }
}
