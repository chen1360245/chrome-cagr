/**
 * Calculator Types - Based on PRD Section 5.1.1
 */

export type CalculationMode = 'CAGR' | 'FV' | 'PV' | 'TIME'

export interface CalculatorInputs {
  pv?: number // Present Value (Initial Investment)
  fv?: number // Future Value (Final Amount)
  n?: number // Time Period (Years)
  r?: number // CAGR Rate (as decimal, e.g., 0.15 for 15%)
}

export interface CalculationResult {
  mode: CalculationMode
  result: number
  inputs: Required<CalculatorInputs>
  formula: string
  explanation: string
  yearlyBreakdown: YearlyData[]
  metrics: ResultMetrics
}

export interface YearlyData {
  year: number
  startValue: number
  growth: number
  endValue: number
}

export interface ResultMetrics {
  cagr: number // Annual growth rate as percentage
  totalGrowth: number // Total growth percentage
  absoluteReturn: number // Dollar amount gained/lost
  doublingTime: number // Years to double (Rule of 72)
}

export interface ValidationError {
  field: string
  message: string
}

export interface ModeDetection {
  mode: CalculationMode | null
  missingField: string | null
  filledCount: number
  isValid: boolean
  errors: ValidationError[]
}
