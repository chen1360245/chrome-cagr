/**
 * Formatting utilities for numbers, currency, and percentages (JavaScript Version)
 * Based on PRD Section 5.1.1 - "输入框支持千分位格式(如:10,000)"
 */

/**
 * Format number with thousand separators
 * @example formatNumber(10000) => "10,000"
 */
function formatNumber(value, decimals = 2) {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/**
 * Format currency (USD)
 * @example formatCurrency(10000) => "$10,000.00"
 */
function formatCurrency(value, decimals = 2) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/**
 * Format percentage
 * @example formatPercentage(0.15) => "15.00%"
 */
function formatPercentage(value, decimals = 2) {
  return `${(value * 100).toFixed(decimals)}%`;
}

/**
 * Parse formatted number string back to number
 * @example parseFormattedNumber("10,000") => 10000
 */
function parseFormattedNumber(value) {
  const cleaned = value.replace(/[^0-9.-]/g, '');
  return parseFloat(cleaned) || 0;
}

/**
 * Format number for input display (with thousand separators)
 * @example formatInputNumber("10000") => "10,000"
 */
function formatInputNumber(value) {
  // Remove non-numeric characters except decimal point
  const cleaned = value.replace(/[^0-9.]/g, '');

  // Split into integer and decimal parts
  const [integer, decimal] = cleaned.split('.');

  // Add thousand separators to integer part
  const formattedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Recombine with decimal if present
  return decimal !== undefined ? `${formattedInteger}.${decimal}` : formattedInteger;
}

/**
 * Validate and format percentage input
 * @example formatPercentageInput("15") => "15"
 */
function formatPercentageInput(value) {
  // Remove non-numeric characters except decimal point and minus
  const cleaned = value.replace(/[^0-9.-]/g, '');

  // Limit to reasonable percentage range
  const num = parseFloat(cleaned);
  if (cleaned === '-' || cleaned === '.' || cleaned === '-.') return cleaned;
  if (isNaN(num)) return '';
  if (num < -100) return '-100';
  if (num > 1000) return '1000';

  return cleaned;
}

/**
 * Format compact number (e.g., 1.5M, 2.3K)
 * @example formatCompact(1500000) => "1.5M"
 */
function formatCompact(value) {
  if (value >= 1000000000) return `${(value / 1000000000).toFixed(1)}B`;
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
  return value.toFixed(0);
}
