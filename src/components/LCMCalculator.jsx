import { useState } from "react";

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function LCMCalculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const a = parseInt(num1, 10);
    const b = parseInt(num2, 10);
    if (!isNaN(a) && !isNaN(b)) {
      setResult(lcm(a, b));
    } else {
      setResult("Invalid input");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-950 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-center text-white mb-4">LCM Calculator</h2>
      <p className="text-center text-purple-200 font-semibold mb-6">
        The Least Common Multiple (LCM) of two numbers is the smallest number that is a multiple of both.
      </p>
      <div className="mb-4">
        <label className="block text-white text-lg mb-2">Enter First Number</label>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white text-lg mb-2">Enter Second Number</label>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
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
          LCM: {result}
        </p>
      )}
    </div>
  );
}

export default LCMCalculator;
