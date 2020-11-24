import React, { useState } from 'react';
import Table from './components/Table';

export default function App() {
  const [inputNumber, setInputNumber] = useState(50);

  function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  }

  function onSumbit(e) {
    e.preventDefault();
    for (let i = 0; i < inputNumber; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
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
      {inputNumber ? <Table n={inputNumber} /> : null}
    </div>
  );
}
