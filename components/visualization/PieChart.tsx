/**
 * Pie Chart Component - PRD Section 5.1.3
 * Displays principal vs profit breakdown
 * Used in Mode 2 (FV) - Secondary chart
 */
'use client'

import * as React from 'react'
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts'
import { formatCurrency } from '@/lib/utils/formatters'

export interface PieChartProps {
  principal: number
  profit: number
  className?: string
}

export function PieChart({ principal, profit, className }: PieChartProps) {
  const total = principal + profit
  const data = [
    {
      name: 'Principal',
      value: principal,
      percentage: (principal / total) * 100,
      color: '#4F46E5', // Accent Blue
    },
    {
      name: 'Profit',
      value: profit,
      percentage: (profit / total) * 100,
      color: '#00D395', // Primary Green
    },
  ]

  // Custom tooltip
  const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ name: string; value: number; payload: { percentage: number } }> }) => {
    if (active && payload && payload.length) {
      const data = payload[0]
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="text-sm font-semibold text-gray-900 mb-1">{data.name}</p>
          <p className="text-sm text-gray-600">
            Amount: <span className="font-semibold">{formatCurrency(data.value)}</span>
          </p>
          <p className="text-sm text-gray-600">
            Percentage: <span className="font-semibold">{data.payload.percentage.toFixed(1)}%</span>
          </p>
        </div>
      )
    }
    return null
  }

  // Custom label
  const renderLabel = (entry: { percentage: number }) => {
    return `${entry.percentage.toFixed(1)}%`
  }

  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height={300}>
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderLabel}
            outerRadius={100}
            innerRadius={60}
            fill="#8884d8"
            dataKey="value"
            paddingAngle={2}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="bottom"
            height={36}
            formatter={(value, entry) => {
              const item = entry.payload
              return (
                <span className="text-sm text-gray-700">
                  {value}: <span className="font-semibold">{item?.value !== undefined ? formatCurrency(item.value) : 'N/A'}</span>
                </span>
              )
            }}
          />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  )
}
