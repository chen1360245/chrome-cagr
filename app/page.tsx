/**
 * Home Page - Smart CAGR Calculator
 * Main single-page application (PRD Section 7.7.1)
 */
'use client'

import { useSmartCalculator } from '@/hooks/useSmartCalculator'
import { SmartInput } from '@/components/calculator/SmartInput'
import { ModeIndicator } from '@/components/calculator/ModeIndicator'
import { ResultPanelEnhanced } from '@/components/calculator/ResultPanelEnhanced'
import { Button } from '@/components/ui/button'
import { DollarSign, Target, Clock, TrendingUp, RotateCcw } from 'lucide-react'

export default function HomePage() {
  const {
    inputs,
    result,
    isCalculating,
    error,
    modeDetection,
    canCalculate,
    updateInput,
    calculate,
    reset,
  } = useSmartCalculator()

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            🧠 Smart CAGR Calculator
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Input any 3 values, get the 4th instantly
          </p>
          <p className="text-sm text-gray-500 mt-2">
            The world's first intelligent 4-parameter CAGR calculator
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-gray-100">
            {/* Input Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <SmartInput
                label="Initial Value"
                type="currency"
                value={inputs.pv}
                onChange={(value) => updateInput('pv', value)}
                placeholder="10,000"
                icon={<DollarSign className="w-4 h-4 text-primary" />}
              />

              <SmartInput
                label="Final Value"
                type="currency"
                value={inputs.fv}
                onChange={(value) => updateInput('fv', value)}
                placeholder="40,000"
                icon={<Target className="w-4 h-4 text-accent-blue" />}
              />

              <SmartInput
                label="Time Period (Years)"
                type="number"
                value={inputs.n}
                onChange={(value) => updateInput('n', value)}
                placeholder="10"
                icon={<Clock className="w-4 h-4 text-accent-orange" />}
              />

              <SmartInput
                label="CAGR Rate (%)"
                type="percentage"
                value={inputs.r}
                onChange={(value) => updateInput('r', value)}
                placeholder="15"
                icon={<TrendingUp className="w-4 h-4 text-accent-purple" />}
              />
            </div>

            {/* Mode Indicator */}
            <ModeIndicator
              mode={modeDetection.mode}
              filledCount={modeDetection.filledCount}
              className="mb-6"
            />

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-error/10 border border-error rounded-lg text-error text-sm">
                {error}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="mobile"
                onClick={calculate}
                disabled={!canCalculate || isCalculating}
                className="flex-1"
              >
                {isCalculating ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Calculating...
                  </>
                ) : (
                  <>⚡ Calculate Now</>
                )}
              </Button>

              <Button
                size="mobile"
                variant="secondary"
                onClick={reset}
                className="sm:flex-none sm:w-auto"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Clear All
              </Button>
            </div>
          </div>

          {/* Result Panel */}
          {result && (
            <div className="mt-8 animate-fadeInUp">
              <ResultPanelEnhanced result={result} />
            </div>
          )}
        </div>
      </section>

      {/* Educational Sections (Placeholder - PRD Section 5.3) */}
      <section id="what-is-cagr" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is CAGR?</h2>
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
            <p className="text-gray-700 leading-relaxed mb-4">
              CAGR (Compound Annual Growth Rate) is the rate of return that would be required for an
              investment to grow from its beginning balance to its ending balance, assuming the
              profits were reinvested at the end of each year.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Unlike simple average returns, CAGR accounts for the compounding effect, making it a
              more accurate measure of investment performance over time.
            </p>
          </div>
        </div>
      </section>

      <section id="how-to-use" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use</h2>
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li className="leading-relaxed">
                <span className="font-semibold">Choose any 3 parameters:</span> Enter values for
                Initial Value, Final Value, Time Period, or CAGR Rate
              </li>
              <li className="leading-relaxed">
                <span className="font-semibold">System auto-detects:</span> The calculator
                automatically identifies which parameter you want to calculate
              </li>
              <li className="leading-relaxed">
                <span className="font-semibold">Click Calculate:</span> Get instant results with
                detailed insights and visualizations
              </li>
              <li className="leading-relaxed">
                <span className="font-semibold">Analyze results:</span> Review growth metrics,
                yearly breakdown, and smart recommendations
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section id="faq" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <summary className="font-semibold text-gray-900 cursor-pointer">
                What's a good CAGR?
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                A "good" CAGR depends on the asset class and market conditions. Historically, the
                S&P 500 has averaged about 10-11% annually. A CAGR above 15% is considered
                excellent, while 20%+ is exceptional.
              </p>
            </details>

            <details className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <summary className="font-semibold text-gray-900 cursor-pointer">
                How is CAGR different from average return?
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                CAGR accounts for compounding and provides a smoothed annual growth rate, while
                simple average return doesn't consider the sequence and compounding of returns.
                CAGR is more accurate for long-term investments.
              </p>
            </details>

            <details className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <summary className="font-semibold text-gray-900 cursor-pointer">
                Can I calculate negative CAGR?
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Yes! If your final value is less than your initial value, you'll get a negative
                CAGR, indicating a loss. The calculator supports CAGR values from -100% to +1000%.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
