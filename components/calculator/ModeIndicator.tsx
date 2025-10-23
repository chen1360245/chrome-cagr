/**
 * Mode Indicator Component - PRD Section 5.1.1
 * Displays detected calculation mode and formula
 */
'use client'

import * as React from 'react'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils/cn'
import { Lightbulb, Target, DollarSign, Clock, TrendingUp } from 'lucide-react'
import type { CalculationMode } from '@/types/calculator'

export interface ModeIndicatorProps {
  mode: CalculationMode | null
  filledCount: number
  className?: string
}

const MODE_FORMULAS = {
  CAGR: 'CAGR = (FV / PV)^(1/n) - 1',
  FV: 'FV = PV × (1 + r)^n',
  PV: 'PV = FV / (1 + r)^n',
  TIME: 'n = log(FV / PV) / log(1 + r)',
} as const

const MODE_ICONS = {
  CAGR: TrendingUp,
  FV: Target,
  PV: DollarSign,
  TIME: Clock,
} as const

const MODE_COLORS = {
  CAGR: { text: 'text-primary', bg: 'bg-primary/10' },
  FV: { text: 'text-accent-blue', bg: 'bg-accent-blue/10' },
  PV: { text: 'text-accent-purple', bg: 'bg-accent-purple/10' },
  TIME: { text: 'text-accent-orange', bg: 'bg-accent-orange/10' },
} as const

export function ModeIndicator({ mode, filledCount, className }: ModeIndicatorProps) {
  const t = useTranslations('page.modeIndicator')

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
        <p>{t('fillAnyThree')}</p>
      </div>
    )
  }

  if (filledCount < 3) {
    const count = 3 - filledCount
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
          {t('fillMore', { count })}
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
          {t('exactlyThree')}. {t('currentlyFilled', { count: filledCount })}
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
        <p>{t('unableToDetect')}</p>
      </div>
    )
  }

  const Icon = MODE_ICONS[mode]
  const colors = MODE_COLORS[mode]
  const formula = MODE_FORMULAS[mode]
  const label = t(`modes.${mode}`)

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
        <div className={cn('p-2 rounded-lg', colors.bg)}>
          <Icon className={cn('w-5 h-5', colors.text)} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Lightbulb className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs font-medium text-gray-500 uppercase">{t('modeDetected')}</span>
          </div>
          <h3 className={cn('text-base font-semibold mb-2', colors.text)}>{label}</h3>
          <div className="bg-gray-50 rounded px-3 py-2 border border-gray-200">
            <p className="text-xs text-gray-500 mb-1">{t('formula')}</p>
            <code className="text-sm font-mono text-gray-900">{formula}</code>
          </div>
        </div>
      </div>
    </div>
  )
}
