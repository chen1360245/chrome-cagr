export function FormulaExplained() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">The CAGR Formula</h3>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
          <code className="text-2xl font-mono text-gray-900">
            CAGR = (FV / PV)<sup>(1/n)</sup> - 1
          </code>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-900">Where:</h4>
        <dl className="space-y-3">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <dt className="font-semibold text-primary mb-1">FV (Final Value)</dt>
            <dd className="text-gray-700">The ending value of the investment</dd>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <dt className="font-semibold text-primary mb-1">PV (Present Value)</dt>
            <dd className="text-gray-700">The beginning value or initial investment amount</dd>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <dt className="font-semibold text-primary mb-1">n (Number of Years)</dt>
            <dd className="text-gray-700">The investment time period in years</dd>
          </div>
        </dl>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded">
        <h4 className="font-semibold text-gray-900 mb-2">Step-by-Step Calculation</h4>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Divide the final value (FV) by the initial value (PV)</li>
          <li>Raise the result to the power of 1 divided by the number of years (n)</li>
          <li>Subtract 1 from the result</li>
          <li>Multiply by 100 to convert to percentage</li>
        </ol>
      </div>

      <div className="bg-primary/10 rounded-lg p-5">
        <h4 className="font-semibold text-gray-900 mb-3">Example Calculation</h4>
        <div className="space-y-2 text-gray-700">
          <p>
            <strong>Given:</strong> PV = $10,000, FV = $20,000, n = 5 years
          </p>
          <p>
            <strong>Step 1:</strong> 20,000 / 10,000 = 2
          </p>
          <p>
            <strong>Step 2:</strong> 2<sup>(1/5)</sup> = 2<sup>0.2</sup> = 1.1487
          </p>
          <p>
            <strong>Step 3:</strong> 1.1487 - 1 = 0.1487
          </p>
          <p>
            <strong>Result:</strong> 0.1487 × 100 = <strong className="text-primary">14.87%</strong>
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-3">
          Our CAGR Calculator Solves for Any Variable
        </h4>
        <p className="text-gray-700 mb-3">
          Our smart CAGR calculator is intelligent - you can input any 3 of the 4 variables, and the calculator will
          automatically calculate the missing one. This flexibility makes our calculator perfect for various investment scenarios:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <li className="bg-white border border-gray-200 rounded-lg p-3">
            <strong className="text-primary">Calculate CAGR:</strong> Given PV, FV, and n
          </li>
          <li className="bg-white border border-gray-200 rounded-lg p-3">
            <strong className="text-accent-blue">Calculate FV:</strong> Given PV, CAGR, and n
          </li>
          <li className="bg-white border border-gray-200 rounded-lg p-3">
            <strong className="text-accent-purple">Calculate PV:</strong> Given FV, CAGR, and n
          </li>
          <li className="bg-white border border-gray-200 rounded-lg p-3">
            <strong className="text-accent-orange">Calculate Time:</strong> Given PV, FV, and CAGR
          </li>
        </ul>
      </div>
    </div>
  )
}
