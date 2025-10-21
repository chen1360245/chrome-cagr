/**
 * Mode Indicator Component - PRD Section 5.1.1
 * Displays detected calculation mode and formula
 */
'use client'

import * as React from 'react'
import { cn } from '@/lib/utils/cn'
import { Lightbulb, Target, DollarSign, Clock, TrendingUp } from 'lucide-react'
import type { CalculationMode } from '@/types/calculator'

export interface ModeIndicatorProps {
  mode: CalculationMode | null
  filledCount: number
  className?: string
}

const MODE_CONFIG = {
  CAGR: {
    icon: TrendingUp,
    label: 'Calculate Growth Rate (CAGR)',
    formula: 'CAGR = (FV / PV)^(1/n) - 1',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  FV: {
    icon: Target,
    label: 'Calculate Final Value',
    formula: 'FV = PV × (1 + r)^n',
    color: 'text-accent-blue',
    bgColor: 'bg-accent-blue/10',
  },
  PV: {
    icon: DollarSign,
    label: 'Calculate Initial Investment',
    formula: 'PV = FV / (1 + r)^n',
    color: 'text-accent-purple',
    bgColor: 'bg-accent-purple/10',
  },
  TIME: {
    icon: Clock,
    label: 'Calculate Time Period',
    formula: 'n = log(FV / PV) / log(1 + r)',
    color: 'text-accent-orange',
    bgColor: 'bg-accent-orange/10',
  },
}

export function ModeIndicator({ mode, filledCount, className }: ModeIndicatorProps) {
  if (filledCount === 0) {
    return (
      <div
        className={cn(
          'rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-4',
          'text-center text-sm text-gray-500',
          className
        )}
      >
        <Lightbulb className="w-5 h-5 mx-auto mb-2 text-gray-400" />
        <p>Fill any 3 fields to start calculating</p>
      </div>
    )
  }

  if (filledCount < 3) {
    return (
      <div
        className={cn(
          'rounded-lg border-2 border-dashed border-warning bg-warning/10 p-4',
          'text-center text-sm text-warning',
          className
        )}
      >
        <Lightbulb className="w-5 h-5 mx-auto mb-2" />
        <p>
          Fill <span className="font-semibold">{3 - filledCount} more field{3 - filledCount > 1 ? 's' : ''}</span> to calculate
        </p>
      </div>
    )
  }

  if (filledCount > 3) {
    return (
      <div
        className={cn(
          'rounded-lg border-2 border-error bg-error/10 p-4',
          'text-center text-sm text-error',
          className
        )}
      >
        <Lightbulb className="w-5 h-5 mx-auto mb-2" />
        <p>
          Please fill <span className="font-semibold">exactly 3 fields</span>. Currently filled: {filledCount}
        </p>
      </div>
    )
  }

  if (!mode) {
    return (
      <div
        className={cn(
          'rounded-lg border-2 border-error bg-error/10 p-4',
          'text-center text-sm text-error',
          className
        )}
      >
        <Lightbulb className="w-5 h-5 mx-auto mb-2" />
        <p>Unable to detect calculation mode. Please check your inputs.</p>
      </div>
    )
  }

  const config = MODE_CONFIG[mode]
  const Icon = config.icon

  return (
    <div
      className={cn(
        'rounded-lg border-2 p-4',
        'transition-all duration-300 ease-in-out',
        'border-primary bg-primary/5',
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div className={cn('p-2 rounded-lg', config.bgColor)}>
          <Icon className={cn('w-5 h-5', config.color)} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Lightbulb className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs font-medium text-gray-500 uppercase">Mode Detected</span>
          </div>
          <h3 className={cn('text-base font-semibold mb-2', config.color)}>{config.label}</h3>
          <div className="bg-gray-50 rounded px-3 py-2 border border-gray-200">
            <p className="text-xs text-gray-500 mb-1">Formula:</p>
            <code className="text-sm font-mono text-gray-900">{config.formula}</code>
          </div>
        </div>
      </div>
    </div>
  )
}
