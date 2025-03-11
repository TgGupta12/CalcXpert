import { useState } from "react";

function prec(c) {
    
    if (c === '^')
        return 3;
    else if (c === '/' || c === '*')
        return 2;
    else if (c === '+' || c === '-')
        return 1;
    else
        return -1;
}

function infixToPostfix(s) {
    let st = [];
    let result = "";

    for (let i = 0; i < s.length; i++) {
        let c = s[i];

        if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9'))
            result += c;

        
        else if (c === '(')
            st.push('(');

        else if (c === ')') {
            while (st[st.length - 1] !== '(') {
                result += st.pop();
            }
            st.pop();
        }
        else {
            while (st.length && (prec(c) < prec(st[st.length - 1]) ||
                                 prec(c) === prec(st[st.length - 1]))) {
                result += st.pop();
            }
            st.push(c);
        }
    }
    while (st.length) {
        result += st.pop();
    }

    return result;
}




function InfixPostfix() {


  const [infix, setInfix] = useState("");
  const [postfix, setPostfix] = useState("");

  const handleConvert = () => {
    setPostfix(infixToPostfix(infix));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-950 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-center text-white mb-4">
        Infix to Postfix Converter
      </h2>
      <p className="text-center text-purple-200 font-semibold mb-6">
      An infix expression is expression which is used by us in day today life An infix expression is a single letter, or an operator, proceeded by one infix string and followed by another infix string. e.g. A,A + B,(A + B) + (C – D).So,in which we have operators between operands.And postfix expression (also called Reverse Polish Notation) is a single letter or an operator, preceded by two postfix strings. Every postfix string longer than a single variable contains first and second operands followed by an operator.e.g. A,A B +,A B + C D –
      </p>

      <div className="mb-4">
        <label htmlFor="infix" className="block text-white text-lg mb-2">
          Enter Infix Expression
        </label>
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

      {postfix && (
        <p className="mt-6 bg-white text-indigo-500 font-semibold text-lg p-4 rounded-lg shadow-md text-center">
          Postfix: {postfix}
        </p>
      )}
      <h2 className="mt-2 font-semibold">Examples:-</h2>
      <p className="mt-2">Input: a+b*(c^d-e)^(f+g*h)-i</p>
      <p>Output: abcd^e-fgh*+^*+i-</p>
    </div>
  );
}

export default InfixPostfix;
