import { useState } from "react";

function calculateEMI(principal, annualInterestRate, months) {
  // Convert annual interest rate to monthly and to a decimal
  const monthlyRate = annualInterestRate / 12 / 100;
  // Calculate EMI using the formula
  return (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
         (Math.pow(1 + monthlyRate, months) - 1);
}

function EMICalculator() {
  const [principal, setPrincipal] = useState("");
  const [annualInterestRate, setAnnualInterestRate] = useState("");
  const [months, setMonths] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const p = parseFloat(principal);
    const r = parseFloat(annualInterestRate);
    const n = parseInt(months, 10);
    if (!isNaN(p) && !isNaN(r) && !isNaN(n) && n > 0) {
      const emi = calculateEMI(p, r, n);
      setResult(emi.toFixed(2));
    } else {
      setResult("Invalid input");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-950 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-center text-white mb-4">EMI Calculator</h2>
      <p className="text-center text-purple-200 font-semibold mb-6">
        Calculate your Equated Monthly Installment (EMI) based on the loan amount, interest rate, and tenure.
      </p>
      <div className="mb-4">
        <label className="block text-white text-lg mb-2">Loan Amount (Principal)</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white text-lg mb-2">Annual Interest Rate (%)</label>
        <input
          type="number"
          value={annualInterestRate}
          onChange={(e) => setAnnualInterestRate(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white text-lg mb-2">Loan Tenure (Months)</label>
        <input
          type="number"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <button
        onClick={handleCalculate}
        className="w-full py-3 mt-4 bg-purple-600 text-white font-bold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out"
      >
        Calculate
      </button>
      {result !== null && (
        <p className="mt-6 bg-white text-indigo-500 font-semibold text-lg p-4 rounded-lg shadow-md text-center">
          EMI: {result}
        </p>
      )}
    </div>
  );
}

export default EMICalculator;
