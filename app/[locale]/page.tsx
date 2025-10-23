/**
 * Home Page - Smart CAGR Calculator
 * Main single-page application (PRD Section 7.7.1)
 */
'use client'

import { Suspense } from 'react'
import { useTranslations } from 'next-intl'
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

function CalculatorContent() {
  const t = useTranslations('page')
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
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {t('hero.description')}
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-gray-100">
            {/* Input Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <SmartInput
                label={t('calculator.initialValue')}
                type="currency"
                value={inputs.pv}
                onChange={(value) => updateInput('pv', value)}
                placeholder={t('calculator.placeholders.initialValue')}
                icon={<DollarSign className="w-4 h-4 text-primary" />}
              />

              <SmartInput
                label={t('calculator.finalValue')}
                type="currency"
                value={inputs.fv}
                onChange={(value) => updateInput('fv', value)}
                placeholder={t('calculator.placeholders.finalValue')}
                icon={<Target className="w-4 h-4 text-accent-blue" />}
              />

              <SmartInput
                label={t('calculator.timePeriod')}
                type="number"
                value={inputs.n}
                onChange={(value) => updateInput('n', value)}
                placeholder={t('calculator.placeholders.timePeriod')}
                icon={<Clock className="w-4 h-4 text-accent-orange" />}
              />

              <SmartInput
                label={t('calculator.cagrRate')}
                type="percentage"
                value={inputs.r}
                onChange={(value) => updateInput('r', value)}
                placeholder={t('calculator.placeholders.cagrRate')}
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
                    {t('calculator.calculating')}
                  </>
                ) : (
                  <>{t('calculator.calculateNow')}</>
                )}
              </Button>

              <Button
                size="mobile"
                variant="secondary"
                onClick={reset}
                className="sm:flex-none sm:w-auto"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                {t('calculator.clearAll')}
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
              {t('sections.learnTitle')}
            </h2>
            <p className="text-center text-gray-600 mb-8">
              {t('sections.learnSubtitle')}
            </p>
          </div>

          {/* What is CAGR - Default Expanded */}
          <CollapsibleSection
            id="what-is-cagr"
            title={t('sections.whatIsCAGR')}
            icon={<BookOpen className="w-6 h-6" />}
            defaultExpanded={true}
          >
            <WhatIsCAGR />
          </CollapsibleSection>

          {/* How to Calculate CAGR - Formula Explained */}
          <CollapsibleSection
            id="formula"
            title={t('sections.formula')}
            icon={<CalculatorIcon className="w-6 h-6" />}
            defaultExpanded={false}
          >
            <FormulaExplained />
          </CollapsibleSection>

          {/* CAGR Calculator Use Cases & Examples */}
          <CollapsibleSection
            id="use-cases"
            title={t('sections.useCases')}
            icon={<Lightbulb className="w-6 h-6" />}
            defaultExpanded={false}
          >
            <UseCases />
          </CollapsibleSection>

          {/* CAGR vs Other Metrics */}
          <CollapsibleSection
            id="cagr-vs-metrics"
            title={t('sections.cagrVsMetrics')}
            icon={<BarChart className="w-6 h-6" />}
            defaultExpanded={false}
          >
            <CAGRvsMetrics />
          </CollapsibleSection>

          {/* How to Use This CAGR Calculator */}
          <CollapsibleSection
            id="how-to-use"
            title={t('sections.howToUse')}
            icon={<HelpCircle className="w-6 h-6" />}
            defaultExpanded={false}
          >
            <HowToUse />
          </CollapsibleSection>

          {/* CAGR Calculator FAQ */}
          <CollapsibleSection
            id="faq"
            title={t('sections.faq')}
            icon={<HelpCircle className="w-6 h-6" />}
            defaultExpanded={false}
          >
            <FAQ />
          </CollapsibleSection>

          {/* About Our Free Online CAGR Calculator */}
          <CollapsibleSection
            id="about"
            title={t('sections.about')}
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

export default function HomePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin text-6xl mb-4">⏳</div>
          <p className="text-gray-600">Loading calculator...</p>
        </div>
      </div>
    }>
      <CalculatorContent />
    </Suspense>
  )
}
