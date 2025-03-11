import { useState } from 'react';

function BinaryConverter() {
  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState('');
  const [hexadecimal, setHexadecimal] = useState('');
  const [octal, setOctal] = useState('');

  const handleConvert = () => {
    if (!/^[01]+$/.test(binary)) {
      alert('Please enter a valid binary number.');
      return;
    }

    // Binary to Decimal
    setDecimal(parseInt(binary, 2));

    // Binary to Hexadecimal
    setHexadecimal(parseInt(binary, 2).toString(16).toUpperCase());

    // Binary to Octal
    setOctal(parseInt(binary, 2).toString(8));
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-950 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-center text-white mb-6">Binary Converter</h2>
      <p className="text-center text-purple-200 mb-8">
      What is binary number System?So,it is an number System with a radix 2.As most modern computer systems use the binary logic for their operation. A computer cannot operate on the decimal number system.A binary number system uses 
      only two digits namely 0 and 1.So,we can convert these to decimal,hexadecimal and octal number system.
        </p>
      
      <div className="mb-6">
        <label htmlFor="binary" className="block text-white text-lg mb-2">Enter Binary Number</label>
        <input
          id="binary"
          type="text"
          value={binary}
          onChange={(e) => setBinary(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="e.g. 1010"
        />
      </div>

      <button
        onClick={handleConvert}
        className="w-full py-3 mt-4 bg-purple-600 text-white font-bold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out"
      >
        Convert
      </button>

      {/* Conversion Results */}
      <div className="mt-6 space-y-4">
        {/* Binary to Decimal */}
        {decimal && (
          <div className="bg-white text-purple-500 font-normal p-4 rounded-lg shadow-md">
            <p><strong>Binary to Decimal:</strong> {decimal}</p>
          </div>
        )}

        {/* Binary to Hexadecimal */}
        {hexadecimal && (
          <div className="bg-white text-purple-500 font-normal p-4 rounded-lg shadow-md">
            <p><strong>Binary to Hexadecimal:</strong> {hexadecimal}</p>
          </div>
        )}

        {/* Binary to Octal */}
        {octal && (
          <div className="bg-white text-purple-500 font-normal p-4 rounded-lg shadow-md">
            <p><strong>Binary to Octal:</strong> {octal}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BinaryConverter;
