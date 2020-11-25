import React, { useState } from 'react';
import Table from './components/Table';

export default function App() {
  const [inputNumber, setInputNumber] = useState(50);
  const [grid, setGrid] = useState([]);

  function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  }

  function onSumbit(e) {
    e.preventDefault();
    generatePrimeNumbers(inputNumber);
  }

  function generatePrimeNumbers(n) {
    const primeNumber = [];
    let i = 0;

    while (primeNumber.length < n) {
      if (isPrime(i)) {
        primeNumber.push(i);
      }
      i++;
    }

    console.log(primeNumber);
  }

  return (
    <div>
      <form onSubmit={onSumbit}>
        <input
          type='text'
          placeholder='Enter number'
          onChange={(e) => setInputNumber(parseInt(e.target.value, 10))}
        />
        <button>Click me</button>
      </form>
      {inputNumber ? <Table grid={grid} /> : null}
    </div>
  );
}
