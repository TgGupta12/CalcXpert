import { useState } from 'react';

function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [sourceCurrency, setSourceCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(null);

  const currencyOptions = [
    { code: 'USD', label: 'US Dollar (USD)' },
    { code: 'JPY', label: 'Japanese Yen (JPY)' },
    { code: 'EUR', label: 'Euro (EUR)' },
    { code: 'AUD', label: 'Australian Dollar (AUD)' },
    { code: 'INR', label: 'Indian Rupee (INR)' },
    { code: 'GBP', label: 'Pound Sterling (GBP)' }
  ];

  const handleConvert = () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount.');
      return;
    }

    // Call a real API for conversion (This is a placeholder formula for demonstration purposes)
    const exchangeRates = {
      USD: { JPY: 152.86, EUR: 0.96, AUD: 1.591, INR: 87.4, GBP: 0.798 },
      JPY: { USD: 0.00657, EUR: 0.0065, AUD: 0.01, INR: 0.58, GBP: 0.0057 },
      EUR: { USD: 1.042, JPY: 159.456, AUD: 1.65, INR: 91.132, GBP: 0.831 },
      AUD: { USD: 0.629, JPY: 96.157, EUR: 0.602, INR: 54.970, GBP: 0.502 },
      INR: { USD: 0.011, JPY: 1.743, EUR: 0.011, AUD: 0.018, GBP: 0.0093 },
      GBP: { USD: 1.254, JPY: 191.778, EUR: 1.200, AUD: 1.88, INR: 109.561 }
    };

    const rate = exchangeRates[sourceCurrency][targetCurrency];
    const result = (amount * rate).toFixed(2);
    setConvertedAmount(result);
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-950 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-center text-white mb-6">Currency Converter</h2>
      <p className="text-center text-purple-200 mb-8">
      Currency exchange is the process of converting one currency into another based on prevailing exchange rates. These rates are 
      influenced by factors such as inflation, interest rates, geopolitical events, and market speculation.
      </p>
      
      <div className="mb-6">
        <label htmlFor="amount" className="block text-white text-lg mb-2">Enter Amount</label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="e.g. 100"
        />
      </div>

      <div className="flex space-x-4 mb-6">
        {/* Source Currency */}
        <div className="w-full">
          <label htmlFor="source-currency" className="block text-white text-lg mb-2">From Currency</label>
          <select
            id="source-currency"
            value={sourceCurrency}
            onChange={(e) => setSourceCurrency(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {currencyOptions.map(option => (
              <option key={option.code} value={option.code}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Target Currency */}
        <div className="w-full">
          <label htmlFor="target-currency" className="block text-white text-lg mb-2">To Currency</label>
          <select
            id="target-currency"
            value={targetCurrency}
            onChange={(e) => setTargetCurrency(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {currencyOptions.map(option => (
              <option key={option.code} value={option.code}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleConvert}
        className="w-full py-3 mt-4 bg-purple-600 text-white font-bold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out"
      >
        Convert
      </button>

      {convertedAmount !== null && (
        <div className="mt-6 bg-white text-purple-600 font-normal p-4 rounded-lg shadow-md">
          <p>
            <strong>
              {amount} {sourceCurrency} = {convertedAmount} {targetCurrency}
            </strong>
          </p>
        </div>
      )}
    </div>
  );
}

export default CurrencyConverter;
