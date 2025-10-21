/**
 * Yearly Table Component - PRD Section 5.1.4
 * Displays yearly breakdown data in table format
 * Features: Expandable/Collapsible, Copy to clipboard
 */
'use client'

import * as React from 'react'
import { cn } from '@/lib/utils/cn'
import { formatCurrency } from '@/lib/utils/formatters'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronUp, Copy, Check } from 'lucide-react'
import type { YearlyData } from '@/types/calculator'

export interface YearlyTableProps {
  data: YearlyData[]
  initialValue: number
  className?: string
}

export function YearlyTable({ data, initialValue, className }: YearlyTableProps) {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const [copied, setCopied] = React.useState(false)

  // Show first 2 and last 2 rows when collapsed
  const displayData = isExpanded
    ? data
    : [...data.slice(0, 2), ...data.slice(-2)]

  // Find highest growth year
  const maxGrowthYear = data.reduce((max, item) =>
    item.growth > max.growth ? item : max
  )

  const handleCopy = async () => {
    const tableText = [
      'Year\tStart Value\tGrowth\tEnd Value',
      `0\t${formatCurrency(initialValue)}\t-\t${formatCurrency(initialValue)}`,
      ...data.map(
        (item) =>
          `${item.year}\t${formatCurrency(item.startValue)}\t+${formatCurrency(item.growth)}\t${formatCurrency(item.endValue)}`
      ),
    ].join('\n')

    try {
      await navigator.clipboard.writeText(tableText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className={cn('bg-white rounded-xl border border-gray-200 overflow-hidden', className)}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Yearly Breakdown</h3>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={handleCopy}
            className="text-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-1" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-1" />
                Copy
              </>
            )}
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4 mr-1" />
                Collapse
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-1" />
                Expand All
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Year
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Start Value
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Growth
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                End Value
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {/* Year 0 (Initial) */}
            <tr className="bg-blue-50/50">
              <td className="px-4 py-3 text-sm font-medium text-gray-900">0</td>
              <td className="px-4 py-3 text-sm text-right text-gray-900">
                {formatCurrency(initialValue)}
              </td>
              <td className="px-4 py-3 text-sm text-right text-gray-500">-</td>
              <td className="px-4 py-3 text-sm text-right font-medium text-gray-900">
                {formatCurrency(initialValue)}
              </td>
            </tr>

            {/* Yearly data */}
            {displayData.map((item, index) => {
              const isHighlight = item.year === maxGrowthYear.year
              const showDivider = !isExpanded && index === 2

              return (
                <React.Fragment key={item.year}>
                  {showDivider && (
                    <tr>
                      <td colSpan={4} className="px-4 py-2 text-center text-sm text-gray-500">
                        <span className="inline-flex items-center gap-2">
                          <span className="h-px flex-1 bg-gray-200" />
                          <span>... {data.length - 4} more years ...</span>
                          <span className="h-px flex-1 bg-gray-200" />
                        </span>
                      </td>
                    </tr>
                  )}
                  <tr
                    className={cn(
                      'hover:bg-gray-50 transition-colors',
                      isHighlight && 'bg-green-50'
                    )}
                  >
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                      {item.year}
                      {isHighlight && (
                        <span className="ml-2 text-xs text-success">★ Highest</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-gray-900">
                      {formatCurrency(item.startValue)}
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-success font-medium">
                      +{formatCurrency(item.growth)}
                    </td>
                    <td className="px-4 py-3 text-sm text-right font-semibold text-gray-900">
                      {formatCurrency(item.endValue)}
                    </td>
                  </tr>
                </React.Fragment>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Footer Stats */}
      {isExpanded && (
        <div className="p-4 bg-gray-50 border-t border-gray-200 grid grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-gray-500 mb-1">Total Growth</p>
            <p className="font-semibold text-success">
              +{formatCurrency(data[data.length - 1].endValue - initialValue)}
            </p>
          </div>
          <div>
            <p className="text-gray-500 mb-1">Average Growth/Year</p>
            <p className="font-semibold text-primary">
              {formatCurrency((data[data.length - 1].endValue - initialValue) / data.length)}
            </p>
          </div>
          <div>
            <p className="text-gray-500 mb-1">Highest Growth Year</p>
            <p className="font-semibold text-gray-900">
              Year {maxGrowthYear.year} (+{formatCurrency(maxGrowthYear.growth)})
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
