/**
 * Smart Input Component - PRD Section 7.4.1
 * Intelligent input field with auto-formatting and validation
 */
'use client'

import * as React from 'react'
import { useTranslations } from 'next-intl'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils/cn'
import { formatInputNumber, formatPercentageInput } from '@/lib/utils/formatters'
import { Check, AlertCircle } from 'lucide-react'

export interface SmartInputProps {
  label: string
  value: number | undefined
  onChange: (value: number | undefined) => void
  type: 'currency' | 'percentage' | 'number'
  placeholder?: string
  icon?: React.ReactNode
  error?: string
  disabled?: boolean
  className?: string
}

export function SmartInput({
  label,
  value,
  onChange,
  type,
  placeholder,
  icon,
  error,
  disabled,
  className,
}: SmartInputProps) {
  const t = useTranslations('page.calculator.helperText')
  const [displayValue, setDisplayValue] = React.useState<string>('')
  const [isFocused, setIsFocused] = React.useState(false)

  // Update display value when value prop changes
  React.useEffect(() => {
    if (value !== undefined && !isFocused) {
      if (type === 'currency' || type === 'number') {
        setDisplayValue(formatInputNumber(value.toString()))
      } else if (type === 'percentage') {
        setDisplayValue(value.toString())
      }
    } else if (value === undefined && !isFocused) {
      setDisplayValue('')
    }
  }, [value, type, isFocused])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value

    if (rawValue === '') {
      setDisplayValue('')
      onChange(undefined)
      return
    }

    let formatted: string
    let numericValue: number

    if (type === 'currency' || type === 'number') {
      formatted = formatInputNumber(rawValue)
      // Remove commas for numeric conversion
      numericValue = parseFloat(formatted.replace(/,/g, ''))
    } else {
      // Percentage
      formatted = formatPercentageInput(rawValue)
      numericValue = parseFloat(formatted)
    }

    setDisplayValue(formatted)

    if (!isNaN(numericValue)) {
      onChange(numericValue)
    }
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
    // Re-format on blur
    if (value !== undefined) {
      if (type === 'currency' || type === 'number') {
        setDisplayValue(formatInputNumber(value.toString()))
      } else {
        setDisplayValue(value.toString())
      }
    }
  }

  const isFilled = value !== undefined && value > 0
  const hasError = !!error

  return (
    <div className={cn('w-full', className)}>
      {/* Label */}
      <label className="block text-sm font-medium text-gray-700 mb-2">
        <span className="flex items-center gap-2">
          {icon}
          {label}
        </span>
      </label>

      {/* Input Container */}
      <div className="relative">
        {/* Prefix for currency */}
        {type === 'currency' && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-base">
            $
          </span>
        )}

        {/* Input Field */}
        <Input
          type="text"
          value={displayValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          error={hasError}
          filled={isFilled}
          className={cn(
            type === 'currency' && 'pl-8',
            type === 'percentage' && 'pr-12'
          )}
          // Mobile optimization (PRD 7.7.3)
          inputMode={type === 'percentage' ? 'decimal' : 'decimal'}
        />

        {/* Suffix for percentage */}
        {type === 'percentage' && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-base">
            %
          </span>
        )}

        {/* Status Icon */}
        {!hasError && isFilled && (
          <Check className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-success" />
        )}

        {hasError && (
          <AlertCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-error" />
        )}
      </div>

      {/* Error Message */}
      {hasError && <p className="mt-1 text-sm text-error">{error}</p>}

      {/* Helper Text */}
      {!hasError && !isFilled && (
        <p className="mt-1 text-xs text-gray-400">
          {type === 'currency' && t('currency')}
          {type === 'number' && t('number')}
          {type === 'percentage' && t('percentage')}
        </p>
      )}
    </div>
  )
}
