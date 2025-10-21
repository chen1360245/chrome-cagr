/**
 * useSmartCalculator Hook
 * Manages calculator state and calculation logic
 */
'use client'

import { useState, useCallback, useMemo } from 'react'
import { SmartCAGRCalculator } from '@/lib/calculator/SmartCAGRCalculator'
import type { CalculatorInputs, CalculationResult, ModeDetection } from '@/types/calculator'

export function useSmartCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    pv: undefined,
    fv: undefined,
    n: undefined,
    r: undefined,
  })

  const [result, setResult] = useState<CalculationResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Detect calculation mode in real-time
  const modeDetection: ModeDetection = useMemo(() => {
    return SmartCAGRCalculator.detectMode(inputs)
  }, [inputs])

  // Update individual input
  const updateInput = useCallback((field: keyof CalculatorInputs, value: number | undefined) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }))
    // Clear error when user makes changes
    setError(null)
    // Clear result when inputs change
    setResult(null)
  }, [])

  // Perform calculation
  const calculate = useCallback(() => {
    setIsCalculating(true)
    setError(null)

    try {
      // Convert percentage input to decimal for calculation
      const calculationInputs: CalculatorInputs = {
        ...inputs,
        r: inputs.r !== undefined ? inputs.r / 100 : undefined,
      }

      const calculationResult = SmartCAGRCalculator.calculate(calculationInputs)
      setResult(calculationResult)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Calculation failed')
      setResult(null)
    } finally {
      setIsCalculating(false)
    }
  }, [inputs])

  // Reset calculator
  const reset = useCallback(() => {
    setInputs({
      pv: undefined,
      fv: undefined,
      n: undefined,
      r: undefined,
    })
    setResult(null)
    setError(null)
  }, [])

  // Check if ready to calculate
  const canCalculate = useMemo(() => {
    return modeDetection.isValid && modeDetection.filledCount === 3
  }, [modeDetection])

  return {
    // State
    inputs,
    result,
    isCalculating,
    error,
    modeDetection,
    canCalculate,

    // Actions
    updateInput,
    calculate,
    reset,
  }
}
