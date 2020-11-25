import React from 'react';

export default function Table({ cols, rows }) {
  if (!cols) return null;

  return (
    <table>
      <tr>
        <th>x</th>
        {cols.map((col, i) => (
          <th key={i}>{col}</th>
        ))}
      </tr>
      {rows.map((row, i) => (
        <tr key={i}>
          <td>{row}</td>
        </tr>
      ))}
    </table>
  );
}
