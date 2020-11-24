import React, { useState } from 'react';
import Table from './components/Table';

export default function App() {
  const [inputNumber, setInputNumber] = useState(50);

  function onSumbit(e) {
    e.preventDefault();
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
      <Table n={inputNumber} />
    </div>
  );
}
