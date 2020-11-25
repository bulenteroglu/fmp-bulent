import React, { useState, useEffect } from 'react';
import Table from './components/Table';

export default function App() {
  const [inputNumber, setInputNumber] = useState(50);
  const [primeNumbers, setPrimeNumbers] = useState(null);

  // function isPrime(num) {
  //   for (let i = 2, s = Math.sqrt(num); i <= s; i++)
  //     if (num % i === 0) return false;
  //   return num > 1;
  // }

  function onSumbit(e) {
    e.preventDefault();
    generatePrimeNumbers(inputNumber);
  }

  function generatePrimeNumbers(n) {
    let primeList = {};
    let counter = 0;

    for (let i = 0; i <= n; i++) {
      primeList[i] = true;
    }

    primeList[0] = false;
    primeList[1] = false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (primeList[i] == true) {
        counter = 0;
        for (let j = i * i; j <= n; j = i * i + counter * i) {
          primeList[j] = false;
          counter++;
        }
      }
    }

    let primeValues = [];
    for (let i = 0; i <= n; i++) {
      if (primeList[i]) {
        primeValues.push(i);
      }
    }

    setPrimeNumbers(primeValues);
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
      <Table rows={primeNumbers} cols={primeNumbers} />
    </div>
  );
}
