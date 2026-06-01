/**
 * Smart CAGR Calculator - Core Engine (JavaScript Version)
 * Based on PRD Section 5.1.1 - Smart 4-Parameter Calculator
 *
 * Supports 4 calculation modes:
 * - Mode 1: Calculate CAGR (given PV, FV, n)
 * - Mode 2: Calculate FV (given PV, r, n)
 * - Mode 3: Calculate PV (given FV, r, n)
 * - Mode 4: Calculate Time (given PV, FV, r)
 */

class SmartCAGRCalculator {
  static assertFinite(name, value) {
    if (!Number.isFinite(value)) {
      throw new Error(`${name} must be a finite number`);
    }
  }

  static assertPositive(name, value) {
    this.assertFinite(name, value);
    if (value <= 0) {
      throw new Error(`${name} must be greater than 0`);
    }
  }

  static assertRate(r) {
    this.assertFinite('CAGR', r);
    if (r <= -1 || r > 10) {
      throw new Error('CAGR must be greater than -100% and no more than 1000%');
    }
  }

  static assertFiniteResult(name, value) {
    if (!Number.isFinite(value)) {
      throw new Error(`${name} is outside the supported numeric range`);
    }
    return value;
  }

  static assertPositiveResult(name, value) {
    this.assertFiniteResult(name, value);
    if (value <= 0) {
      throw new Error(`${name} is outside the supported numeric range`);
    }
    return value;
  }

  /**
   * Detect calculation mode based on filled inputs
   * PRD Section 5.1.1: "当填写3个字段时,自动识别计算模式"
   */
  static detectMode(inputs) {
    const fields = {
      pv: inputs.pv,
      fv: inputs.fv,
      n: inputs.n,
      r: inputs.r,
    };

    const filled = Object.entries(fields).filter(([, value]) => value !== undefined && value !== null);
    const missing = Object.entries(fields).filter(([, value]) => value === undefined || value === null);

    const filledCount = filled.length;
    const errors = [];

    // Validation: Must have exactly 3 fields filled
    if (filledCount !== 3) {
      errors.push({
        field: 'general',
        message: `Please fill exactly 3 fields. Currently filled: ${filledCount}`,
      });
      return {
        mode: null,
        missingField: null,
        filledCount,
        isValid: false,
        errors,
      };
    }

    // Core inputs use decimal rates: 0.15 means 15%.
    if (inputs.pv !== undefined && (!Number.isFinite(inputs.pv) || inputs.pv <= 0)) {
      errors.push({ field: 'pv', message: 'Initial Value must be greater than 0' });
    }
    if (inputs.fv !== undefined && (!Number.isFinite(inputs.fv) || inputs.fv <= 0)) {
      errors.push({ field: 'fv', message: 'Final Value must be greater than 0' });
    }
    if (inputs.n !== undefined && (!Number.isFinite(inputs.n) || inputs.n <= 0)) {
      errors.push({ field: 'n', message: 'Time Period must be greater than 0' });
    }
    if (inputs.r !== undefined && (!Number.isFinite(inputs.r) || inputs.r <= -1 || inputs.r > 10)) {
      errors.push({ field: 'r', message: 'CAGR must be greater than -100% and no more than 1000%' });
    }

    if (errors.length > 0) {
      return {
        mode: null,
        missingField: missing[0]?.[0] || null,
        filledCount,
        isValid: false,
        errors,
      };
    }

    // Determine mode based on missing field
    const missingField = missing[0]?.[0];
    let mode = null;

    switch (missingField) {
      case 'r':
        mode = 'CAGR';
        break;
      case 'fv':
        mode = 'FV';
        break;
      case 'pv':
        mode = 'PV';
        break;
      case 'n':
        mode = 'TIME';
        break;
    }

    return {
      mode,
      missingField,
      filledCount,
      isValid: true,
      errors: [],
    };
  }

  /**
   * Mode 1: Calculate CAGR
   * Formula: CAGR = (FV / PV)^(1/n) - 1
   */
  static calculateCAGR(pv, fv, n) {
    this.assertPositive('Initial Value', pv);
    this.assertPositive('Final Value', fv);
    this.assertPositive('Time Period', n);
    return this.assertFiniteResult('CAGR', Math.pow(fv / pv, 1 / n) - 1);
  }

  /**
   * Mode 2: Calculate Future Value
   * Formula: FV = PV × (1 + r)^n
   */
  static calculateFV(pv, r, n) {
    this.assertPositive('Initial Value', pv);
    this.assertRate(r);
    this.assertPositive('Time Period', n);
    return this.assertPositiveResult('Final Value', pv * Math.pow(1 + r, n));
  }

  /**
   * Mode 3: Calculate Present Value
   * Formula: PV = FV / (1 + r)^n
   */
  static calculatePV(fv, r, n) {
    this.assertPositive('Final Value', fv);
    this.assertRate(r);
    this.assertPositive('Time Period', n);
    return this.assertPositiveResult('Initial Value', fv / Math.pow(1 + r, n));
  }

  /**
   * Mode 4: Calculate Time Period
   * Formula: n = log(FV / PV) / log(1 + r)
   */
  static calculateTime(pv, fv, r) {
    this.assertPositive('Initial Value', pv);
    this.assertPositive('Final Value', fv);
    this.assertRate(r);
    if (r === 0) {
      throw new Error('CAGR cannot be 0 when calculating time period');
    }
    const n = Math.log(fv / pv) / Math.log(1 + r);
    if (!Number.isFinite(n) || n <= 0) {
      throw new Error('The target value and CAGR do not produce a positive time period');
    }
    return n;
  }

  /**
   * Calculate result metrics
   */
  static calculateMetrics(pv, fv, r, n) {
    this.assertPositive('Initial Value', pv);
    this.assertPositive('Final Value', fv);
    this.assertRate(r);

    const cagr = r * 100; // Convert to percentage
    const totalGrowth = this.assertFiniteResult('Total Growth', ((fv - pv) / pv) * 100);
    const absoluteReturn = this.assertFiniteResult('Absolute Return', fv - pv);
    // Use accurate logarithmic formula instead of Rule of 72 approximation
    // doublingTime = log(2) / log(1 + r)
    const doublingTime = r > 0 ? Math.log(2) / Math.log(1 + r) : Infinity;

    return {
      cagr,
      totalGrowth,
      absoluteReturn,
      doublingTime,
    };
  }

  /**
   * Main calculation function
   * Automatically detects mode and performs calculation
   */
  static calculate(inputs) {
    const detection = this.detectMode(inputs);

    if (!detection.isValid || !detection.mode) {
      throw new Error(detection.errors[0]?.message || 'Invalid inputs');
    }

    let result;
    let completedInputs;
    let formula;
    let explanation;

    switch (detection.mode) {
      case 'CAGR': {
        const { pv, fv, n } = inputs;
        if (!pv || !fv || !n) throw new Error('Missing required inputs for CAGR calculation');

        const r = this.calculateCAGR(pv, fv, n);
        result = r;
        completedInputs = { pv, fv, n, r };
        formula = 'CAGR = (FV / PV)^(1/n) - 1';
        explanation = `Your investment of $${pv.toLocaleString()} grew to $${fv.toLocaleString()} over ${n} years, achieving a CAGR of ${(r * 100).toFixed(2)}% annually.`;
        break;
      }

      case 'FV': {
        const { pv, r, n } = inputs;
        if (!pv || r === undefined || !n) throw new Error('Missing required inputs for FV calculation');

        const fv = this.calculateFV(pv, r, n);
        result = fv;
        completedInputs = { pv, fv, n, r };
        formula = 'FV = PV × (1 + r)^n';
        explanation = `Your $${pv.toLocaleString()} investment growing at ${(r * 100).toFixed(2)}% annually will reach $${fv.toLocaleString()} in ${n} years.`;
        break;
      }

      case 'PV': {
        const { fv, r, n } = inputs;
        if (!fv || r === undefined || !n) throw new Error('Missing required inputs for PV calculation');

        const pv = this.calculatePV(fv, r, n);
        result = pv;
        completedInputs = { pv, fv, n, r };
        formula = 'PV = FV / (1 + r)^n';
        explanation = `To reach $${fv.toLocaleString()} in ${n} years at ${(r * 100).toFixed(2)}% growth rate, you need to invest $${pv.toLocaleString()} today.`;
        break;
      }

      case 'TIME': {
        const { pv, fv, r } = inputs;
        if (!pv || !fv || r === undefined) throw new Error('Missing required inputs for TIME calculation');

        const n = this.calculateTime(pv, fv, r);
        result = n;
        completedInputs = { pv, fv, n, r };
        formula = 'n = log(FV / PV) / log(1 + r)';
        explanation = `Growing $${pv.toLocaleString()} to $${fv.toLocaleString()} at ${(r * 100).toFixed(2)}% annual growth will take ${n.toFixed(1)} years.`;
        break;
      }

      default:
        throw new Error('Unknown calculation mode');
    }

    const { pv, fv, n, r } = completedInputs;
    const metrics = this.calculateMetrics(pv, fv, r, n);

    return {
      mode: detection.mode,
      result,
      inputs: completedInputs,
      formula,
      explanation,
      metrics,
    };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SmartCAGRCalculator;
}
