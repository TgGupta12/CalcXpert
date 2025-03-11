import { useState } from "react";

function isOperator(c) {
  return c === '+' || c === '-' || c === '*' || c === '/' || c === '^';
}

function postfixToInfix(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let c = s[i];

    if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')) {
      stack.push(c);
    } else if (isOperator(c)) {
      let op2 = stack.pop();
      let op1 = stack.pop();
      let expr = `(${op1}${c}${op2})`;
      stack.push(expr);
    }
  }
  return stack.length > 0 ? stack[0] : "";
}

function PostfixInfix() {
  const [postfix, setPostfix] = useState("");
  const [infix, setInfix] = useState("");

  const handleConvert = () => {
    setInfix(postfixToInfix(postfix));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-950 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-center text-white mb-4">
        Postfix to Infix Converter
      </h2>
      <p className="text-center text-purple-200 font-semibold mb-6">
        A postfix expression (Reverse Polish Notation) is an expression where the operator follows its operands.
        This converter transforms postfix expressions back into infix notation, where operators appear between operands.
      </p>

      <div className="mb-4">
        <label htmlFor="postfix" className="block text-white text-lg mb-2">
          Enter Postfix Expression
        </label>
        <input
          id="postfix"
          type="text"
          value={postfix}
          onChange={(e) => setPostfix(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="e.g. ab+c*"
        />
      </div>

      <button
        onClick={handleConvert}
        className="w-full py-3 mt-4 bg-purple-600 text-white font-bold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out"
      >
        Convert
      </button>

      {infix && (
        <p className="mt-6 bg-white text-indigo-500 font-semibold text-lg p-4 rounded-lg shadow-md text-center">
          Infix: {infix}
        </p>
      )}
      <h2 className="mt-2 font-semibold">Examples:-</h2>
      <p className="mt-2">Input: abcd^e-fgh*+^*+i-</p>
      <p>Output: ((a+((b*(c^(d-e)))^((f+(g*h)))))-i)</p>
    </div>
  );
}

export default PostfixInfix;
