import React, { useState, useEffect } from 'react';
import Table from './components/Table';

export default function App() {
  const [inputNumber, setInputNumber] = useState(50);
  const [primeNumbers, setPrimeNumbers] = useState(null);

  function onSumbit(e) {
    e.preventDefault();
    generatePrimeNumbers(inputNumber);
  }

  function generatePrimeNumbers(n) {
    let primes = [];
    let count = 0;

    for (let i = 2; count < n; i++) {
      if (isPrime(i)) {
        count++;
        primes.push(i);
      }
    }

    setPrimeNumbers(primes);
  }

  function isPrime(num) {
    if (num < 2) {
      return false;
    }

    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  return (
    <div>
      <form onSubmit={onSumbit}>
        <input
          type='text'
          placeholder='Enter number'
          onChange={(e) => setInputNumber(parseInt(e.target.value, 10))}
        />
        <button>multiply them prime numbers...</button>
      </form>
      <Table rows={primeNumbers} cols={primeNumbers} n={inputNumber} />
    </div>
  );
}
