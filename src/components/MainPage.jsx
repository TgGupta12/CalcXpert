import { useState } from "react";
import InfixToPrefixConverter from "./InfixToPrefixConverter";
import InfixPostfix from "./InfixPostfix";
import BinaryConverter from "./BinaryConverter";
import CgpaToPercentage from "./CgpaToPercentage";
import CurrencyConverter from "./CurrencyConverter";
import PostfixInfix from "./PostfixInfix";
import PrefixInfix from "./PrefixInfix";
import GCDCalculator from "./GCDCalculator";
import LCMCalculator from "./LCMCalculator";
import BMICalculator from "./BMICalculator";
import EMICalculator from "./EMICalculator";
const converters = ["Infix to Prefix", "Binary Converter","Infix to Postfix","CGPA To Percentage",
  "Currency Converter","Postfix to Infix","Prefix to Infix"
];
const calculators = ["EMI Calculator", "BMI Calculator","GCD Calculator","LCM Calculator"];



const toolComponents = {
  "Infix to Prefix": InfixToPrefixConverter,
  "Infix to Postfix":InfixPostfix,
  "Binary Converter": BinaryConverter,
  "Postfix to Infix":PostfixInfix,
  "Prefix to Infix":PrefixInfix,
  "CGPA To Percentage":CgpaToPercentage,
  "Currency Converter":CurrencyConverter,
  "EMI Calculator": EMICalculator,
  "BMI Calculator": BMICalculator,
  "GCD Calculator": GCDCalculator,
  "LCM Calculator": LCMCalculator,
};

export default function MainPage() {
  const [selectedTool, setSelectedTool] = useState(null);
  
  const SelectedComponent = selectedTool ? toolComponents[selectedTool] : null;

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white p-6">
      
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          CalcXpert
        </h1>
      </div>
      
      <div className="flex flex-col md:flex-row gap-10 mt-8">
        <div className="w-full md:w-1/3 space-y-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Converters</h3>
            <ul>
              {converters.map((conv) => (
                <li
                  key={conv}
                  className="cursor-pointer text-blue-400 hover:underline py-1"
                  onClick={() => setSelectedTool(conv)}
                >
                  {conv}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Calculators</h3>
            <ul>
              {calculators.map((calc) => (
                <li
                  key={calc}
                  className="cursor-pointer text-blue-400 hover:underline py-1"
                  onClick={() => setSelectedTool(calc)}
                >
                  {calc}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full md:w-2/3 pb-10 rounded-lg shadow-lg ">
          {SelectedComponent ? <SelectedComponent /> : <h2 className="text-xl text-gray-400 text-center">Select a tool to begin</h2>}
        </div>
      </div>
    </div>
  );
}
