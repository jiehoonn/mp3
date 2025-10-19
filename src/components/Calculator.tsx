import { useState } from 'react';
import '../styles/calculator.css';

type Operation = '+' | '-' | '*' | '**' | '/';

// Custom hook to handle calculator logic
function useCalculator() {
  const [firstNumber, setFirstNumber] = useState<string>('');
  const [secondNumber, setSecondNumber] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const calculate = (operation: Operation) => {
    const num1 = Number(firstNumber);
    const num2 = Number(secondNumber);
    let calculationResult: number;

    switch (operation) {
      case '+':
        calculationResult = num1 + num2;
        break;
      case '-':
        calculationResult = num1 - num2;
        break;
      case '*':
        calculationResult = num1 * num2;
        break;
      case '**': {
        let powerResult = 1;
        for (let i = 0; i < num2; i++) {
          powerResult = powerResult * num1;
        }
        calculationResult = powerResult;
        break;
      }
      case '/':
        calculationResult = num1 / num2;
        break;
    }

    setResult(calculationResult.toString());
  };

  const clear = () => {
    setFirstNumber('');
    setSecondNumber('');
    setResult('');
  };

  return {
    firstNumber,
    setFirstNumber,
    secondNumber,
    setSecondNumber,
    result,
    calculate,
    clear
  };
}

export default function Calculator() {
  const {
    firstNumber,
    setFirstNumber,
    secondNumber,
    setSecondNumber,
    result,
    calculate,
    clear
  } = useCalculator();

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
        <button onClick={() => calculate('+')}>+</button>
        <button onClick={() => calculate('-')}>-</button>
        <button onClick={() => calculate('*')}>*</button>
        <button onClick={() => calculate('**')}>**</button>
        <button onClick={() => calculate('/')}>/</button>
        <button onClick={clear}>Clear</button>
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
