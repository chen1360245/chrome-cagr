/**
 * Smart CAGR Calculator - Core Engine
 * Based on PRD Section 5.1.1 - Smart 4-Parameter Calculator
 *
 * Supports 4 calculation modes:
 * - Mode 1: Calculate CAGR (given PV, FV, n)
 * - Mode 2: Calculate FV (given PV, r, n)
 * - Mode 3: Calculate PV (given FV, r, n)
 * - Mode 4: Calculate Time (given PV, FV, r)
 */

import type {
  CalculatorInputs,
  CalculationMode,
  CalculationResult,
  ModeDetection,
  ValidationError,
  YearlyData,
  ResultMetrics,
} from '@/types/calculator'

export class SmartCAGRCalculator {
  /**
   * Detect calculation mode based on filled inputs
   * PRD Section 5.1.1: "当填写3个字段时,自动识别计算模式"
   */
  static detectMode(inputs: CalculatorInputs): ModeDetection {
    const fields = {
      pv: inputs.pv,
      fv: inputs.fv,
      n: inputs.n,
      r: inputs.r,
    }

    const filled = Object.entries(fields).filter(([_, value]) => value !== undefined && value !== null)
    const missing = Object.entries(fields).filter(([_, value]) => value === undefined || value === null)

    const filledCount = filled.length
    const errors: ValidationError[] = []

    // Validation: Must have exactly 3 fields filled
    if (filledCount !== 3) {
      errors.push({
        field: 'general',
        message: `Please fill exactly 3 fields. Currently filled: ${filledCount}`,
      })
      return {
        mode: null,
        missingField: null,
        filledCount,
        isValid: false,
        errors,
      }
    }

    // Validate input values
    if (inputs.pv !== undefined && inputs.pv <= 0) {
      errors.push({ field: 'pv', message: 'Initial Value must be greater than 0' })
    }
    if (inputs.fv !== undefined && inputs.fv <= 0) {
      errors.push({ field: 'fv', message: 'Final Value must be greater than 0' })
    }
    if (inputs.n !== undefined && inputs.n <= 0) {
      errors.push({ field: 'n', message: 'Time Period must be greater than 0' })
    }
    // FIXED: Accept percentage format (e.g., 15 for 15%) instead of decimal (0.15)
    // User inputs percentage, we convert to decimal only during calculation
    if (inputs.r !== undefined && (inputs.r < -100 || inputs.r > 1000)) {
      errors.push({ field: 'r', message: 'CAGR must be between -100% and 1000%' })
    }

    if (errors.length > 0) {
      return {
        mode: null,
        missingField: missing[0]?.[0] || null,
        filledCount,
        isValid: false,
        errors,
      }
    }

    // Determine mode based on missing field
    const missingField = missing[0]?.[0]
    let mode: CalculationMode | null = null

    switch (missingField) {
      case 'r':
        mode = 'CAGR'
        break
      case 'fv':
        mode = 'FV'
        break
      case 'pv':
        mode = 'PV'
        break
      case 'n':
        mode = 'TIME'
        break
    }

    return {
      mode,
      missingField,
      filledCount,
      isValid: true,
      errors: [],
    }
  }

  /**
   * Mode 1: Calculate CAGR
   * Formula: CAGR = (FV / PV)^(1/n) - 1
   */
  static calculateCAGR(pv: number, fv: number, n: number): number {
    return Math.pow(fv / pv, 1 / n) - 1
  }

  /**
   * Mode 2: Calculate Future Value
   * Formula: FV = PV × (1 + r)^n
   */
  static calculateFV(pv: number, r: number, n: number): number {
    return pv * Math.pow(1 + r, n)
  }

  /**
   * Mode 3: Calculate Present Value
   * Formula: PV = FV / (1 + r)^n
   */
  static calculatePV(fv: number, r: number, n: number): number {
    return fv / Math.pow(1 + r, n)
  }

  /**
   * Mode 4: Calculate Time Period
   * Formula: n = log(FV / PV) / log(1 + r)
   */
  static calculateTime(pv: number, fv: number, r: number): number {
    if (r === 0) {
      throw new Error('CAGR cannot be 0 when calculating time period')
    }
    if (r === -1) {
      throw new Error('CAGR cannot be -100% when calculating time period')
    }
    return Math.log(fv / pv) / Math.log(1 + r)
  }

  /**
   * Generate yearly breakdown data
   */
  static generateYearlyBreakdown(pv: number, r: number, n: number): YearlyData[] {
    const data: YearlyData[] = []
    let currentValue = pv

    for (let year = 1; year <= n; year++) {
      const growth = currentValue * r
      const endValue = currentValue + growth

      data.push({
        year,
        startValue: currentValue,
        growth,
        endValue,
      })

      currentValue = endValue
    }

    return data
  }

  /**
   * Calculate result metrics
   */
  static calculateMetrics(pv: number, fv: number, r: number, n: number): ResultMetrics {
    const cagr = r * 100 // Convert to percentage
    const totalGrowth = ((fv - pv) / pv) * 100
    const absoluteReturn = fv - pv
    // Use accurate logarithmic formula instead of Rule of 72 approximation
    // doublingTime = log(2) / log(1 + r)
    const doublingTime = r !== 0 ? Math.log(2) / Math.log(1 + r) : Infinity

    return {
      cagr,
      totalGrowth,
      absoluteReturn,
      doublingTime,
    }
  }

  /**
   * Main calculation function
   * Automatically detects mode and performs calculation
   */
  static calculate(inputs: CalculatorInputs): CalculationResult {
    const detection = this.detectMode(inputs)

    if (!detection.isValid || !detection.mode) {
      throw new Error(detection.errors[0]?.message || 'Invalid inputs')
    }

    let result: number
    let completedInputs: Required<CalculatorInputs>
    let formula: string
    let explanation: string

    switch (detection.mode) {
      case 'CAGR': {
        const { pv, fv, n } = inputs
        if (!pv || !fv || !n) throw new Error('Missing required inputs for CAGR calculation')

        const r = this.calculateCAGR(pv, fv, n)
        result = r
        completedInputs = { pv, fv, n, r }
        formula = 'CAGR = (FV / PV)^(1/n) - 1'
        explanation = `Your investment of $${pv.toLocaleString()} grew to $${fv.toLocaleString()} over ${n} years, achieving a CAGR of ${(r * 100).toFixed(2)}% annually.`
        break
      }

      case 'FV': {
        const { pv, r, n } = inputs
        if (!pv || r === undefined || !n) throw new Error('Missing required inputs for FV calculation')

        const fv = this.calculateFV(pv, r, n)
        result = fv
        completedInputs = { pv, fv, n, r }
        formula = 'FV = PV × (1 + r)^n'
        explanation = `Your $${pv.toLocaleString()} investment growing at ${(r * 100).toFixed(2)}% annually will reach $${fv.toLocaleString()} in ${n} years.`
        break
      }

      case 'PV': {
        const { fv, r, n } = inputs
        if (!fv || r === undefined || !n) throw new Error('Missing required inputs for PV calculation')

        const pv = this.calculatePV(fv, r, n)
        result = pv
        completedInputs = { pv, fv, n, r }
        formula = 'PV = FV / (1 + r)^n'
        explanation = `To reach $${fv.toLocaleString()} in ${n} years at ${(r * 100).toFixed(2)}% growth rate, you need to invest $${pv.toLocaleString()} today.`
        break
      }

      case 'TIME': {
        const { pv, fv, r } = inputs
        if (!pv || !fv || r === undefined) throw new Error('Missing required inputs for TIME calculation')

        const n = this.calculateTime(pv, fv, r)
        result = n
        completedInputs = { pv, fv, n, r }
        formula = 'n = log(FV / PV) / log(1 + r)'
        explanation = `Growing $${pv.toLocaleString()} to $${fv.toLocaleString()} at ${(r * 100).toFixed(2)}% annual growth will take ${n.toFixed(1)} years.`
        break
      }

      default:
        throw new Error('Unknown calculation mode')
    }

    const { pv, fv, n, r } = completedInputs
    const yearlyBreakdown = this.generateYearlyBreakdown(pv, r, n)
    const metrics = this.calculateMetrics(pv, fv, r, n)

    return {
      mode: detection.mode,
      result,
      inputs: completedInputs,
      formula,
      explanation,
      yearlyBreakdown,
      metrics,
    }
  }
}
