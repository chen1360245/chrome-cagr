/**
 * Bar Chart Component - PRD Section 5.1.3
 * Displays yearly growth data as bar chart
 * Used in Mode 1 (CAGR) and Mode 3 (PV)
 */
'use client'

import * as React from 'react'
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts'
import { formatCurrency } from '@/lib/utils/formatters'
import type { YearlyData } from '@/types/calculator'

export interface BarChartProps {
  data: YearlyData[]
  className?: string
}

export function BarChart({ data, className }: BarChartProps) {
  // Transform data for Recharts
  const chartData = data.map((item) => ({
    year: `Y${item.year}`,
    value: item.endValue,
    growth: item.growth,
  }))

  // Custom tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="text-sm font-semibold text-gray-900 mb-1">{data.year}</p>
          <p className="text-sm text-gray-600">
            Value: <span className="font-semibold text-primary">{formatCurrency(data.value)}</span>
          </p>
          <p className="text-sm text-gray-600">
            Growth: <span className="font-semibold text-success">+{formatCurrency(data.growth)}</span>
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height={300}>
        <RechartsBarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis
            dataKey="year"
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
            tick={{ fill: '#6B7280' }}
          />
          <YAxis
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
            tick={{ fill: '#6B7280' }}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0, 211, 149, 0.1)' }} />
          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={`rgba(0, 211, 149, ${0.4 + (index / chartData.length) * 0.6})`}
              />
            ))}
          </Bar>
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  )
}
