export function HowToUse() {
  return (
    <div className="space-y-6">
      <p className="text-lg text-gray-700">
        Our Smart CAGR Calculator can solve for any of the 4 variables. Simply enter any 3 values,
        and the calculator will automatically detect which mode to use and calculate the missing
        value.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Mode 1 */}
        <div className="border border-primary/30 rounded-lg p-5 bg-primary/5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              1
            </div>
            <h4 className="text-lg font-semibold text-gray-900">Calculate CAGR (Growth Rate)</h4>
          </div>
          <p className="text-gray-700 mb-3">
            Find out what growth rate your investment achieved.
          </p>
          <div className="bg-white rounded p-3 text-sm">
            <p className="font-semibold mb-2">Enter:</p>
            <ul className="space-y-1 text-gray-700">
              <li>• Initial Value: $10,000</li>
              <li>• Final Value: $20,000</li>
              <li>• Time Period: 5 years</li>
            </ul>
            <p className="font-semibold mt-2 text-primary">Result: 14.87% CAGR</p>
          </div>
        </div>

        {/* Mode 2 */}
        <div className="border border-blue-300 rounded-lg p-5 bg-blue-50">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-accent-blue text-white flex items-center justify-center font-bold">
              2
            </div>
            <h4 className="text-lg font-semibold text-gray-900">Calculate Final Value</h4>
          </div>
          <p className="text-gray-700 mb-3">
            Project how much your investment will grow to.
          </p>
          <div className="bg-white rounded p-3 text-sm">
            <p className="font-semibold mb-2">Enter:</p>
            <ul className="space-y-1 text-gray-700">
              <li>• Initial Value: $10,000</li>
              <li>• CAGR Rate: 15%</li>
              <li>• Time Period: 10 years</li>
            </ul>
            <p className="font-semibold mt-2 text-accent-blue">Result: $40,455.58</p>
          </div>
        </div>

        {/* Mode 3 */}
        <div className="border border-purple-300 rounded-lg p-5 bg-purple-50">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-accent-purple text-white flex items-center justify-center font-bold">
              3
            </div>
            <h4 className="text-lg font-semibold text-gray-900">Calculate Initial Value</h4>
          </div>
          <p className="text-gray-700 mb-3">
            Find out how much you need to invest to reach your goal.
          </p>
          <div className="bg-white rounded p-3 text-sm">
            <p className="font-semibold mb-2">Enter:</p>
            <ul className="space-y-1 text-gray-700">
              <li>• Final Value: $500,000</li>
              <li>• CAGR Rate: 15%</li>
              <li>• Time Period: 10 years</li>
            </ul>
            <p className="font-semibold mt-2 text-accent-purple">Result: $123,589.71</p>
          </div>
        </div>

        {/* Mode 4 */}
        <div className="border border-orange-300 rounded-lg p-5 bg-orange-50">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-accent-orange text-white flex items-center justify-center font-bold">
              4
            </div>
            <h4 className="text-lg font-semibold text-gray-900">Calculate Time Period</h4>
          </div>
          <p className="text-gray-700 mb-3">
            Determine how long it will take to reach your target.
          </p>
          <div className="bg-white rounded p-3 text-sm">
            <p className="font-semibold mb-2">Enter:</p>
            <ul className="space-y-1 text-gray-700">
              <li>• Initial Value: $100</li>
              <li>• Final Value: $200</li>
              <li>• CAGR Rate: 50%</li>
            </ul>
            <p className="font-semibold mt-2 text-accent-orange">Result: 1.7 years</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded mt-6">
        <h4 className="font-semibold text-gray-900 mb-3">Input Validation Rules</h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✓</span>
            <span>
              <strong>Exactly 3 fields required:</strong> The calculator will automatically detect
              which variable to calculate
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✓</span>
            <span>
              <strong>CAGR Rate format:</strong> Enter as percentage (e.g., 15 for 15%)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✓</span>
            <span>
              <strong>Positive values only:</strong> Initial and Final values must be greater than
              0
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✓</span>
            <span>
              <strong>Time period:</strong> Must be greater than 0 years (can be decimal, e.g., 2.5
              years)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✓</span>
            <span>
              <strong>CAGR range:</strong> Between -100% and 1000% for practical calculations
            </span>
          </li>
        </ul>
      </div>

      <div className="bg-primary/10 rounded-lg p-5">
        <h4 className="font-semibold text-gray-900 mb-3">Interpreting Your Results</h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>
              <strong>CAGR (%):</strong> Your annualized growth rate - higher is better (but
              consider risk)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>
              <strong>Total Growth (%):</strong> The overall percentage increase from start to end
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>
              <strong>Absolute Return ($):</strong> The actual dollar amount gained or lost
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>
              <strong>Doubling Time:</strong> How long it takes for your money to double at this
              growth rate
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span>•</span>
            <span>
              <strong>Benchmark Comparison:</strong> How your result compares to market averages
              (S&P 500, bonds, etc.)
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
