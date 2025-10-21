/**
 * Line Chart Component - PRD Section 5.1.3
 * Displays growth curve over time
 * Used in Mode 2 (FV) - Primary chart
 */
'use client'

import * as React from 'react'
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
  ReferenceDot,
} from 'recharts'
import { formatCurrency } from '@/lib/utils/formatters'
import type { YearlyData } from '@/types/calculator'

export interface LineChartProps {
  data: YearlyData[]
  initialValue: number
  className?: string
}

export function LineChart({ data, initialValue, className }: LineChartProps) {
  // Add Year 0 (initial value) to data
  const chartData = [
    { year: 0, value: initialValue, isStart: true },
    ...data.map((item) => ({
      year: item.year,
      value: item.endValue,
      isStart: false,
      isEnd: item.year === data.length,
    })),
  ]

  // Custom tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="text-sm font-semibold text-gray-900 mb-1">
            Year {data.year}
            {data.isStart && ' (Start)'}
            {data.isEnd && ' (End)'}
          </p>
          <p className="text-sm text-gray-600">
            Value: <span className="font-semibold text-primary">{formatCurrency(data.value)}</span>
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00D395" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#00D395" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis
            dataKey="year"
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
            tick={{ fill: '#6B7280' }}
            label={{ value: 'Years', position: 'insideBottom', offset: -5, fill: '#6B7280' }}
          />
          <YAxis
            stroke="#6B7280"
            style={{ fontSize: '12px' }}
            tick={{ fill: '#6B7280' }}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#00D395"
            strokeWidth={3}
            fill="url(#colorValue)"
          />
          {/* Mark start point */}
          <ReferenceDot
            x={0}
            y={initialValue}
            r={6}
            fill="#4F46E5"
            stroke="#fff"
            strokeWidth={2}
          />
          {/* Mark end point */}
          <ReferenceDot
            x={data.length}
            y={data[data.length - 1]?.endValue}
            r={6}
            fill="#00D395"
            stroke="#fff"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
