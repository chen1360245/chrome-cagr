/**
 * Result Panel Component - PRD Section 5.1.2
 * Displays calculation results with dual metrics display
 */
'use client'

import * as React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils/cn'
import { formatCurrency, formatPercentage } from '@/lib/utils/formatters'
import type { CalculationResult } from '@/types/calculator'
import { Target, TrendingUp, DollarSign, Clock, FileText, Calculator } from 'lucide-react'

export interface ResultPanelProps {
  result: CalculationResult
  className?: string
}

const MODE_CONFIG = {
  CAGR: {
    icon: TrendingUp,
    label: 'Growth Rate (CAGR)',
    color: 'text-primary',
    bgGradient: 'from-primary/20 to-primary/5',
  },
  FV: {
    icon: Target,
    label: 'Final Value',
    color: 'text-accent-blue',
    bgGradient: 'from-accent-blue/20 to-accent-blue/5',
  },
  PV: {
    icon: DollarSign,
    label: 'Initial Investment',
    color: 'text-accent-purple',
    bgGradient: 'from-accent-purple/20 to-accent-purple/5',
  },
  TIME: {
    icon: Clock,
    label: 'Time Period',
    color: 'text-accent-orange',
    bgGradient: 'from-accent-orange/20 to-accent-orange/5',
  },
}

export function ResultPanel({ result, className }: ResultPanelProps) {
  const config = MODE_CONFIG[result.mode]
  const Icon = config.icon

  const formatResult = () => {
    switch (result.mode) {
      case 'CAGR':
        return formatPercentage(result.result)
      case 'FV':
      case 'PV':
        return formatCurrency(result.result)
      case 'TIME':
        return `${result.result.toFixed(1)} years`
      default:
        return result.result.toString()
    }
  }

  return (
    <Card className={cn('border-2 border-primary shadow-lg', className)}>
      {/* Header */}
      <CardHeader className={cn('bg-gradient-to-br', config.bgGradient)}>
        <div className="flex items-center gap-3">
          <div className="p-3 bg-white rounded-lg shadow-sm">
            <Icon className={cn('w-6 h-6', config.color)} />
          </div>
          <div>
            <p className="text-sm text-gray-600 font-medium">Your Result</p>
            <CardTitle className="text-xl">{config.label}</CardTitle>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6 pt-6">
        {/* Main Result */}
        <div className="text-center p-6 bg-gradient-result rounded-xl">
          <p className="text-sm text-gray-600 mb-2">Result</p>
          <p className={cn('text-4xl md:text-5xl font-bold', config.color)}>{formatResult()}</p>
        </div>

        {/* Dual Metrics Display (PRD 5.1.2 - Learning from ClearTax) */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <p className="text-xs text-gray-500 mb-1">CAGR</p>
            <p className="text-xl font-bold text-primary">{formatPercentage(result.inputs.r)}</p>
            <p className="text-xs text-gray-500 mt-1">Per Year</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <p className="text-xs text-gray-500 mb-1">Total Growth</p>
            <p className="text-xl font-bold text-success">
              {result.metrics.totalGrowth >= 0 ? '+' : ''}
              {result.metrics.totalGrowth.toFixed(2)}%
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Over {result.inputs.n} {result.inputs.n > 1 ? 'Years' : 'Year'}
            </p>
          </div>
        </div>

        {/* Absolute Return */}
        <div className="bg-gradient-to-r from-primary/10 to-transparent rounded-lg p-4 border border-primary/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Absolute Return</p>
              <p className="text-2xl font-bold text-gray-900">
                {result.metrics.absoluteReturn >= 0 ? '+' : ''}
                {formatCurrency(result.metrics.absoluteReturn)}
              </p>
              <p className="text-xs text-gray-500 mt-1">Investment gain in dollars</p>
            </div>
            <DollarSign className="w-10 h-10 text-primary opacity-30" />
          </div>
        </div>

        {/* Natural Language Explanation (PRD 5.1.2) */}
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <div className="flex items-start gap-3">
            <FileText className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-blue-900 mb-1">In Simple Terms:</p>
              <p className="text-sm text-blue-800">{result.explanation}</p>
            </div>
          </div>
        </div>

        {/* Formula Display (PRD 5.1.2) */}
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <div className="flex items-start gap-3">
            <Calculator className="w-5 h-5 text-gray-600 mt-0.5" />
            <div className="flex-1">
              <p className="text-xs text-gray-500 mb-2">Formula Used:</p>
              <code className="text-sm font-mono text-gray-900 block bg-white px-3 py-2 rounded border border-gray-200">
                {result.formula}
              </code>
            </div>
          </div>
        </div>

        {/* Rule of 72 - Doubling Time */}
        {result.mode !== 'TIME' && isFinite(result.metrics.doublingTime) && (
          <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Clock className="w-4 h-4 text-yellow-700" />
              </div>
              <div>
                <p className="text-sm font-medium text-yellow-900 mb-1">Rule of 72</p>
                <p className="text-sm text-yellow-800">
                  Your money will double in approximately{' '}
                  <span className="font-semibold">{result.metrics.doublingTime.toFixed(1)} years</span>{' '}
                  at this growth rate.
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
