/**
 * Smart Insights Component - PRD Section 5.1.5
 * AI-powered investment insights and recommendations
 */
'use client'

import * as React from 'react'
import { cn } from '@/lib/utils/cn'
import { formatPercentage, formatCurrency } from '@/lib/utils/formatters'
import { compareToBenchmark, type BenchmarkName } from '@/lib/constants/benchmarks'
import type { CalculationResult } from '@/types/calculator'
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Info,
  Lightbulb,
  Clock,
} from 'lucide-react'

export interface SmartInsightsProps {
  result: CalculationResult
  className?: string
}

export function SmartInsights({ result, className }: SmartInsightsProps) {
  const cagr = result.inputs.r
  const { pv, fv, n } = result.inputs

  // 1. Result reasonableness analysis
  const getReasonableness = () => {
    if (cagr > 0.25) {
      return {
        type: 'warning' as const,
        icon: AlertTriangle,
        title: 'Exceptional Returns!',
        message: `${formatPercentage(cagr)} is 2.5x above market average. This is extraordinary performance. Consider: Was this a lucky period? Can you sustain this rate?`,
        color: 'text-warning',
        bg: 'bg-warning/10',
        border: 'border-warning/20',
      }
    } else if (cagr > 0.15) {
      return {
        type: 'success' as const,
        icon: CheckCircle,
        title: 'Excellent Returns!',
        message: `${formatPercentage(cagr)} is significantly above market average. You're doing great!`,
        color: 'text-success',
        bg: 'bg-success/10',
        border: 'border-success/20',
      }
    } else if (cagr > 0.08) {
      return {
        type: 'info' as const,
        icon: TrendingUp,
        title: 'Good Returns',
        message: `${formatPercentage(cagr)} is a solid performance, close to market averages.`,
        color: 'text-primary',
        bg: 'bg-primary/10',
        border: 'border-primary/20',
      }
    } else if (cagr > 0) {
      return {
        type: 'info' as const,
        icon: Info,
        title: 'Modest Returns',
        message: `${formatPercentage(cagr)} is below market average. Consider diversifying or reviewing your strategy.`,
        color: 'text-info',
        bg: 'bg-info/10',
        border: 'border-info/20',
      }
    } else {
      return {
        type: 'warning' as const,
        icon: TrendingDown,
        title: 'Negative Returns',
        message: `Your investment has lost value at ${formatPercentage(Math.abs(cagr))} annually. Review your strategy immediately.`,
        color: 'text-error',
        bg: 'bg-error/10',
        border: 'border-error/20',
      }
    }
  }

  // 2. Benchmark comparison
  const sp500Comparison = compareToBenchmark(cagr * 100, 'S&P 500')

  // 3. Time warning (for Mode 4)
  const getTimeWarning = () => {
    if (result.mode === 'TIME' && n > 30) {
      return {
        show: true,
        message: `${n.toFixed(1)} years is a very long timeline!`,
        suggestions: [
          `Increase initial investment: ${formatCurrency(pv)} → ${formatCurrency(pv * 2)} saves ${(n - result.calculateTime(pv * 2, fv, cagr)).toFixed(1)} years`,
          `Aim for higher returns: ${formatPercentage(cagr)} → ${formatPercentage(cagr * 1.2)} saves ${(n - result.calculateTime(pv, fv, cagr * 1.2)).toFixed(1)} years`,
          `Adjust target: ${formatCurrency(fv)} → ${formatCurrency(fv * 0.75)} is more achievable`,
        ],
      }
    }
    return { show: false }
  }

  const reasonableness = getReasonableness()
  const timeWarning = getTimeWarning()
  const Icon = reasonableness.icon

  return (
    <div className={cn('space-y-4', className)}>
      {/* 1. Reasonableness Analysis */}
      <div
        className={cn(
          'rounded-lg border p-4',
          reasonableness.bg,
          reasonableness.border
        )}
      >
        <div className="flex items-start gap-3">
          <Icon className={cn('w-5 h-5 mt-0.5', reasonableness.color)} />
          <div className="flex-1">
            <h4 className={cn('font-semibold mb-1', reasonableness.color)}>
              {reasonableness.title}
            </h4>
            <p className="text-sm text-gray-700">{reasonableness.message}</p>
          </div>
        </div>
      </div>

      {/* 2. Benchmark Comparison */}
      <div className="rounded-lg border border-gray-200 p-4 bg-white">
        <div className="flex items-start gap-3">
          <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 mb-2">Market Benchmark</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Your CAGR:</span>
                <span className="font-semibold text-gray-900">{formatPercentage(cagr)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">S&P 500 Average:</span>
                <span className="font-semibold text-gray-700">
                  {formatPercentage(sp500Comparison.benchmark.cagr / 100)}
                </span>
              </div>
              <div className="pt-2 border-t border-gray-200">
                {sp500Comparison.isBeating ? (
                  <p className="text-success font-medium">
                    ✅ You're beating the S&P 500 by{' '}
                    {formatPercentage(sp500Comparison.difference / 100)}!
                  </p>
                ) : (
                  <p className="text-gray-600">
                    ℹ️ Below S&P 500 average by{' '}
                    {formatPercentage(Math.abs(sp500Comparison.difference) / 100)}.
                    Consider diversifying.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Doubling Time (if applicable) */}
      {isFinite(result.metrics.doublingTime) && (
        <div className="rounded-lg border border-primary/20 p-4 bg-primary/5">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-primary mt-0.5" />
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 mb-1">Doubling Time</h4>
              <p className="text-sm text-gray-700">
                At {formatPercentage(cagr)} annual growth, your money will double in exactly{' '}
                <span className="font-semibold text-primary">
                  {result.metrics.doublingTime.toFixed(1)} years
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 4. Time Warning (Mode 4 only) */}
      {timeWarning.show && (
        <div className="rounded-lg border border-warning/20 p-4 bg-warning/5">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-warning mt-0.5" />
            <div className="flex-1">
              <h4 className="font-semibold text-warning mb-2">{timeWarning.message}</h4>
              <p className="text-sm text-gray-700 mb-3">Better strategies:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {timeWarning.suggestions?.map((suggestion, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-warning">•</span>
                    <span>{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )

  // Helper function for TIME mode calculations
  function calculateTime(pv: number, fv: number, r: number): number {
    return Math.log(fv / pv) / Math.log(1 + r)
  }
}
