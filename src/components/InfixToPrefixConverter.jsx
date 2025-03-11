import { useState } from "react";

function operatorPrecedence(op) {
    if (op === '^') return 3;
    if (op === '*' || op === '/') return 2;
    if (op === '+' || op === '-') return 1;
    return -1;
}


function convertInfixToPostfix(s) {
    let st = [];
    let res = "";
    
    for (let i = 0; i < s.length; i++) {
        if (/[a-zA-Z0-9]/.test(s[i])) {
            res += s[i];
        } else if (s[i] === '(') {
            st.push(s[i]);
        } else if (s[i] === ')') {
            while (st.length && st[st.length - 1] !== '(') {
                res += st.pop();
            }
            st.pop();
        } else {
            while (st.length && operatorPrecedence(s[i]) <= operatorPrecedence(st[st.length - 1])) {
                res += st.pop();
            }
            st.push(s[i]);
        }
    }

    while (st.length) {
        res += st.pop();
    }

    return res;
}

function infixToPrefix(infix) {
    let reversed = infix.split("").reverse().join("");
    reversed = reversed.replace(/\(/g, 'X').replace(/\)/g, '(').replace(/X/g, ')');

    let postfix = convertInfixToPostfix(reversed);
    return postfix.split("").reverse().join("");
}



const InfixToPrefixConverter = () => {
  const [infix, setInfix] = useState("");
  const [prefix, setPrefix] = useState("");

  const handleConvert = () => {
    setPrefix(infixToPrefix(infix));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-950 rounded-lg shadow-xl">
  <h2 className="text-3xl font-bold text-center text-white mb-4">Infix to Prefix Converter</h2>
  <p className="text-center text-purple-200 mb-6">Convert mathematical expressions from infix notation to prefix notation with ease.</p>
  
  <div className="mb-4">
    <label htmlFor="infix" className="block text-white text-lg mb-2">Enter Infix Expression</label>
    <input
      id="infix"
      type="text"
      value={infix}
      onChange={(e) => setInfix(e.target.value)}
      className="w-full px-4 py-2 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      placeholder="e.g. (A+B)*C"
    />
  </div>
  
  <button
    onClick={handleConvert}
    className="w-full py-3 mt-4 bg-purple-600 text-white font-bold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out"
  >
    Convert
  </button>

  {prefix && (
    <p className="mt-6 bg-white text-indigo-500 font-semibold text-lg p-4 rounded-lg shadow-md text-center">
      Prefix: {prefix}
    </p>
  )}
  <h2 className="mt-2 font-semibold">Examples:-</h2>
  <p className="mt-2">Input: a*b+c/d</p>
  <p>Output: +*ab/cd </p>
</div>

  );
};

export default InfixToPrefixConverter;
