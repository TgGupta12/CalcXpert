import { useState } from "react";

function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  return bmi.toFixed(2);
}

function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (!isNaN(w) && !isNaN(h) && w > 0 && h > 0) {
      setResult(calculateBMI(w, h));
    } else {
      setResult("Invalid input");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-950 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-center text-white mb-4">BMI Calculator</h2>
      <p className="text-center text-purple-200 font-semibold mb-6">
        Body Mass Index (BMI) helps to assess if you`&apos`re in a healthy weight range based on your height and weight.
      </p>
      <div className="mb-4">
        <label className="block text-white text-lg mb-2">Enter Weight (in kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white text-lg mb-2">Enter Height (in meters)</label>
        <input
          type="number"
          step="0.01"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>
      <button
        onClick={handleCalculate}
        className="w-full py-3 mt-4 bg-purple-600 text-white font-bold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out"
      >
        Calculate BMI
      </button>
      {result !== null && (
        <p className="mt-6 bg-white text-purple-600 font-normal text-lg p-4 rounded-lg shadow-md text-center">
          BMI: {result}
        </p>
      )}
    </div>
  );
}

export default BMICalculator;
