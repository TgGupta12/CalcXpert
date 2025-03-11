import { useState } from 'react';

function CgpaToPercentage() {
  const [cgpa, setCgpa] = useState('');
  const [percentage, setPercentage] = useState(null);

  const handleConvert = () => {
    if (!cgpa || isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
      alert('Please enter a valid CGPA between 0 and 10.');
      return;
    }

    // CGPA to Percentage Conversion Formula (Example: CGPA * 9.5)
    const calculatedPercentage = (parseFloat(cgpa) * 9.5).toFixed(2);
    setPercentage(calculatedPercentage);
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-950 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-center text-white mb-6">CGPA to Percentage Calculator</h2>
      <p className="text-center text-purple-200 mb-8">The CGPA to Percentage conversion formula is very basic. It multiplies the CGPA by a scale (typically 9.5 for a 10-point scale) to obtain the percentage.</p>
      
      <div className="mb-6">
        <label htmlFor="cgpa" className="block text-white text-lg mb-2">Enter Your CGPA</label>
        <input
          id="cgpa"
          type="number"
          step="0.01"
          value={cgpa}
          onChange={(e) => setCgpa(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="e.g. 8.5"
        />
      </div>

      <button
        onClick={handleConvert}
        className="w-full py-3 mt-4 bg-purple-600 text-white font-bold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out"
      >
        Convert to Percentage
      </button>

      {percentage !== null && (
        <div className="mt-6 bg-white text-purple-800 font-normal p-4 rounded-lg shadow-md">
          <p><strong>Percentage:</strong> {percentage} %</p>
        </div>
      )}
      <h2 className="mt-2 font-semibold">Examples:-</h2>
      <p className="mt-2">Input: 8.98</p>
      <p>Output:85.31 % </p>
    </div>
  );
}

export default CgpaToPercentage;
