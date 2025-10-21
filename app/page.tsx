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
import { CollapsibleSection } from '@/components/educational/CollapsibleSection'
import { WhatIsCAGR } from '@/components/educational/WhatIsCAGR'
import { FormulaExplained } from '@/components/educational/FormulaExplained'
import { UseCases } from '@/components/educational/UseCases'
import { CAGRvsMetrics } from '@/components/educational/CAGRvsMetrics'
import { FAQ } from '@/components/educational/FAQ'
import { HowToUse } from '@/components/educational/HowToUse'
import { About } from '@/components/educational/About'
import { BookOpen, Calculator as CalculatorIcon, Lightbulb, BarChart, HelpCircle, Info } from 'lucide-react'

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

      {/* Educational Content Sections - PRD Phase 3 Week 7 */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Section Divider */}
          <div className="border-t-2 border-gray-200 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">
              📚 Learn About CAGR
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Everything you need to know to make informed investment decisions
            </p>
          </div>

          {/* What is CAGR - Default Expanded */}
          <CollapsibleSection
            id="what-is-cagr"
            title="What is CAGR?"
            icon={<BookOpen className="w-6 h-6" />}
            defaultExpanded={true}
          >
            <WhatIsCAGR />
          </CollapsibleSection>

          {/* How to Calculate CAGR - Formula Explained */}
          <CollapsibleSection
            id="formula"
            title="How to Calculate CAGR - Formula Explained"
            icon={<CalculatorIcon className="w-6 h-6" />}
            defaultExpanded={false}
          >
            <FormulaExplained />
          </CollapsibleSection>

          {/* CAGR Calculator Use Cases & Examples */}
          <CollapsibleSection
            id="use-cases"
            title="CAGR Calculator Use Cases & Examples"
            icon={<Lightbulb className="w-6 h-6" />}
            defaultExpanded={false}
          >
            <UseCases />
          </CollapsibleSection>

          {/* CAGR vs Other Metrics */}
          <CollapsibleSection
            id="cagr-vs-metrics"
            title="CAGR vs Other Metrics"
            icon={<BarChart className="w-6 h-6" />}
            defaultExpanded={false}
          >
            <CAGRvsMetrics />
          </CollapsibleSection>

          {/* How to Use This CAGR Calculator */}
          <CollapsibleSection
            id="how-to-use"
            title="How to Use This CAGR Calculator"
            icon={<HelpCircle className="w-6 h-6" />}
            defaultExpanded={false}
          >
            <HowToUse />
          </CollapsibleSection>

          {/* CAGR Calculator FAQ */}
          <CollapsibleSection
            id="faq"
            title="CAGR Calculator FAQ"
            icon={<HelpCircle className="w-6 h-6" />}
            defaultExpanded={false}
          >
            <FAQ />
          </CollapsibleSection>

          {/* About Our Free Online CAGR Calculator */}
          <CollapsibleSection
            id="about"
            title="About Our Free Online CAGR Calculator"
            icon={<Info className="w-6 h-6" />}
            defaultExpanded={false}
          >
            <About />
          </CollapsibleSection>
        </div>
      </section>
    </div>
  )
}
