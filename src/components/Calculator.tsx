import { useState } from 'react';
import '../styles/calculator.css';

export default function Calculator() {
  const [firstNumber, setFirstNumber] = useState<string>('');
  const [secondNumber, setSecondNumber] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const addition = () => {
    const sum = Number(firstNumber) + Number(secondNumber);
    setResult(sum.toString());
  };

  const subtract = () => {
    const difference = Number(firstNumber) - Number(secondNumber);
    setResult(difference.toString());
  };

  const multiply = () => {
    const product = Number(firstNumber) * Number(secondNumber);
    setResult(product.toString());
  };

  const power = () => {
    const base = Number(firstNumber);
    const exponent = Number(secondNumber);
    let powerResult = 1;
    for (let i = 0; i < exponent; i++) {
      powerResult = powerResult * base;
    }
    setResult(powerResult.toString());
  };

  const divide = () => {
    const quotient = Number(firstNumber) / Number(secondNumber);
    setResult(quotient.toString());
  };

  const clearCalculator = () => {
    setFirstNumber('');
    setSecondNumber('');
    setResult('');
  };

  return (
    <div className="calculator">
      <div className="calculator-input">
        <h3>JavaScript Calculator</h3>
        <label htmlFor="first-number">First Number</label>
        <input
          type="text"
          id="first-number"
          value={firstNumber}
          onChange={(e) => setFirstNumber(e.target.value)}
        />
        <label htmlFor="second-number">Second Number</label>
        <input
          type="text"
          id="second-number"
          value={secondNumber}
          onChange={(e) => setSecondNumber(e.target.value)}
        />
        <button onClick={addition}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={power}>**</button>
        <button onClick={divide}>/</button>
        <button onClick={clearCalculator}>Clear</button>
      </div>
      <div className="calculator-output">
        <h4
          id="result"
          style={{ color: Number(result) < 0 ? 'red' : 'var(--text-primary)' }}
        >
          {result}
        </h4>
      </div>
    </div>
  );
}
