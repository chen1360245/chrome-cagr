/**
 * Timeline Component - PRD Section 5.1.3
 * Displays investment milestones over time
 * Used in Mode 4 (TIME) - Shows 0%, 25%, 50%, 75%, 100% progress points
 */
'use client'

import * as React from 'react'
import { cn } from '@/lib/utils/cn'
import { formatCurrency } from '@/lib/utils/formatters'
import { Check } from 'lucide-react'

export interface TimelineProps {
  totalYears: number
  initialValue: number
  finalValue: number
  growthRate: number
  className?: string
}

export function Timeline({
  totalYears,
  initialValue,
  finalValue,
  growthRate,
  className,
}: TimelineProps) {
  // Calculate milestone values at 0%, 25%, 50%, 75%, 100%
  const milestones = [
    { percentage: 0, year: 0, value: initialValue, label: 'Start' },
    {
      percentage: 25,
      year: totalYears * 0.25,
      value: initialValue * Math.pow(1 + growthRate, totalYears * 0.25),
      label: '25% Progress',
    },
    {
      percentage: 50,
      year: totalYears * 0.5,
      value: initialValue * Math.pow(1 + growthRate, totalYears * 0.5),
      label: 'Halfway',
    },
    {
      percentage: 75,
      year: totalYears * 0.75,
      value: initialValue * Math.pow(1 + growthRate, totalYears * 0.75),
      label: '75% Progress',
    },
    { percentage: 100, year: totalYears, value: finalValue, label: 'Goal Reached' },
  ]

  return (
    <div className={cn('py-6', className)}>
      {/* Timeline Container */}
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute left-0 top-5 w-full h-1 bg-gray-200 rounded-full">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent-blue rounded-full transition-all duration-1000"
            style={{ width: '100%' }}
          />
        </div>

        {/* Milestones */}
        <div className="relative flex justify-between items-start">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex flex-col items-center" style={{ width: '20%' }}>
              {/* Dot */}
              <div className="relative z-10 flex items-center justify-center">
                {index === milestones.length - 1 ? (
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                ) : (
                  <div
                    className={cn(
                      'w-8 h-8 rounded-full border-4 border-white shadow-md',
                      index === 0 ? 'bg-accent-blue' : 'bg-primary'
                    )}
                  />
                )}
              </div>

              {/* Label and Details */}
              <div className="mt-4 text-center">
                <p className="text-xs font-semibold text-gray-900 mb-1">{milestone.label}</p>
                <p className="text-xs text-gray-500">Year {milestone.year.toFixed(1)}</p>
                <p className="text-sm font-semibold text-primary mt-1">
                  {formatCurrency(milestone.value, 0)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="mt-8 p-4 bg-gradient-to-r from-primary/10 to-accent-blue/10 rounded-lg border border-primary/20">
        <div className="flex items-center justify-between text-sm">
          <div>
            <p className="text-gray-600">Total Duration</p>
            <p className="font-semibold text-gray-900">{totalYears.toFixed(1)} years</p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">Growth Rate</p>
            <p className="font-semibold text-primary">{(growthRate * 100).toFixed(2)}%</p>
          </div>
          <div className="text-right">
            <p className="text-gray-600">Total Growth</p>
            <p className="font-semibold text-success">
              {(((finalValue - initialValue) / initialValue) * 100).toFixed(2)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
