const assert = require('node:assert/strict');
const SmartCAGRCalculator = require('../lib/calculator');

assert.ok(Math.abs(SmartCAGRCalculator.calculateCAGR(100, 500, 10) - 0.174618943) < 1e-8);
assert.ok(Math.abs(SmartCAGRCalculator.calculateFV(100, 0.15, 10) - 404.555774) < 1e-6);
assert.ok(Math.abs(SmartCAGRCalculator.calculatePV(500, 0.15, 10) - 123.592353) < 1e-6);
assert.ok(Math.abs(SmartCAGRCalculator.calculateTime(100, 500, 0.15) - 11.515566) < 1e-6);

assert.ok(Math.abs(SmartCAGRCalculator.calculateFV(100, -0.1, 2) - 81) < 1e-8);
assert.ok(Math.abs(SmartCAGRCalculator.calculateTime(100, 81, -0.1) - 2) < 1e-8);
assert.equal(SmartCAGRCalculator.calculateMetrics(100, 81, -0.1, 2).doublingTime, Infinity);

assert.equal(SmartCAGRCalculator.detectMode({ pv: 100, n: 10, r: 0.15 }).mode, 'FV');
assert.equal(SmartCAGRCalculator.detectMode({ pv: 100, n: 10, r: -1 }).isValid, false);

assert.throws(() => SmartCAGRCalculator.calculateFV(100, -1, 10), /greater than -100%/);
assert.throws(() => SmartCAGRCalculator.calculateTime(100, 200, -0.1), /positive time period/);
assert.throws(() => SmartCAGRCalculator.calculateTime(100, 50, 0.1), /positive time period/);

console.log('calculator tests passed');
