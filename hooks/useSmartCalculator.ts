/**
 * useSmartCalculator Hook
 * Manages calculator state and calculation logic
 */
'use client'

import { useState, useCallback, useMemo, useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import { SmartCAGRCalculator } from '@/lib/calculator/SmartCAGRCalculator'
import type { CalculatorInputs, CalculationResult, ModeDetection } from '@/types/calculator'

export function useSmartCalculator() {
  const searchParams = useSearchParams()
  const hasAutoCalculated = useRef(false)

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

  // Load URL parameters on mount and auto-calculate
  useEffect(() => {
    if (hasAutoCalculated.current) return

    const pv = searchParams.get('pv')
    const fv = searchParams.get('fv')
    const n = searchParams.get('n')
    const r = searchParams.get('r')

    // Check if we have URL parameters
    const hasParams = pv || fv || n || r

    if (hasParams) {
      const urlInputs: CalculatorInputs = {
        pv: pv ? parseFloat(pv) : undefined,
        fv: fv ? parseFloat(fv) : undefined,
        n: n ? parseFloat(n) : undefined,
        r: r ? parseFloat(r) * 100 : undefined, // Convert decimal to percentage for display
      }

      // Set inputs from URL
      setInputs(urlInputs)

      // Count how many valid inputs we have
      const filledCount = Object.values(urlInputs).filter(
        (v) => v !== undefined && !isNaN(v)
      ).length

      // Auto-calculate if we have 3 or more parameters
      if (filledCount >= 3) {
        // Small delay to allow state to update
        setTimeout(() => {
          try {
            const calculationInputs: CalculatorInputs = {
              ...urlInputs,
              r: urlInputs.r !== undefined ? urlInputs.r / 100 : undefined,
            }
            const calculationResult = SmartCAGRCalculator.calculate(calculationInputs)
            setResult(calculationResult)
            hasAutoCalculated.current = true
          } catch (err) {
            setError(err instanceof Error ? err.message : 'Calculation failed')
          }
        }, 100)
      }
    }
  }, [searchParams])

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
