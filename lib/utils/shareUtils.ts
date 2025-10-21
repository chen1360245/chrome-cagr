/**
 * Share Utilities
 * Helper functions for URL encoding and sharing functionality
 * Updated: 2025-10-22 - Fixed share functionality for production
 */

import type { CalculationResult } from '@/types/calculator'

/**
 * Build shareable URL with calculation parameters
 * Only includes the 3 input parameters (excludes the calculated result)
 */
export function buildShareUrl(result: CalculationResult): string {
  const params = new URLSearchParams()

  // Determine which parameter is the calculated result based on mode
  const calculatedParam = {
    'CAGR': 'r',   // CAGR mode calculates rate
    'FV': 'fv',    // FV mode calculates final value
    'PV': 'pv',    // PV mode calculates present value
    'TIME': 'n',   // TIME mode calculates time period
  }[result.mode]

  // Add only the input parameters (exclude the calculated result)
  if (result.inputs.pv !== undefined && calculatedParam !== 'pv') {
    params.set('pv', result.inputs.pv.toString())
  }
  if (result.inputs.fv !== undefined && calculatedParam !== 'fv') {
    params.set('fv', result.inputs.fv.toString())
  }
  if (result.inputs.n !== undefined && calculatedParam !== 'n') {
    params.set('n', result.inputs.n.toString())
  }
  if (result.inputs.r !== undefined && calculatedParam !== 'r') {
    params.set('r', result.inputs.r.toString())
  }

  // Build full URL (no need to include mode, it will be auto-detected)
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
  return `${baseUrl}?${params.toString()}`
}

/**
 * Parse URL parameters and return calculator inputs
 */
export function parseShareUrl(searchParams: URLSearchParams) {
  return {
    pv: searchParams.get('pv') ? parseFloat(searchParams.get('pv')!) : undefined,
    fv: searchParams.get('fv') ? parseFloat(searchParams.get('fv')!) : undefined,
    n: searchParams.get('n') ? parseFloat(searchParams.get('n')!) : undefined,
    r: searchParams.get('r') ? parseFloat(searchParams.get('r')!) : undefined,
  }
}

/**
 * Generate share text based on calculation result
 */
export function generateShareText(result: CalculationResult): string {
  const { mode, metrics } = result

  switch (mode) {
    case 'CAGR':
      return `I calculated a ${metrics.cagr.toFixed(2)}% CAGR! Check it out:`
    case 'FV':
      return `My investment could grow to $${result.result.toFixed(2)}! Calculate yours:`
    case 'PV':
      return `I need to invest $${result.result.toFixed(2)} to reach my goal. Try it:`
    case 'TIME':
      return `It will take ${result.result.toFixed(1)} years to reach my goal. Calculate yours:`
    default:
      return 'Check out this CAGR calculator result!'
  }
}

/**
 * Check if Web Share API is supported
 * DISABLED: Web Share API is unreliable on both localhost and production
 * Always use clipboard copying for better UX consistency
 */
export function isWebShareSupported(): boolean {
  // Web Share API disabled - use clipboard copying instead
  // Reason: Inconsistent behavior across browsers and environments
  // Shows error "我们无法为你显示所有共享方法" on many systems
  return false
}

/**
 * Copy text to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text)
      return true
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'fixed'
      textArea.style.left = '-999999px'
      textArea.style.top = '-999999px'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      const successful = document.execCommand('copy')
      document.body.removeChild(textArea)
      return successful
    }
  } catch (err) {
    console.error('Failed to copy to clipboard:', err)
    return false
  }
}
