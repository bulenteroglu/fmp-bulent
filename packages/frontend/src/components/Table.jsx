import React from 'react';

export default function Table({ cols, rows }) {
  if (!cols) return null;

  function handleTableData(data) {
    let product = [];
    let multiply = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i]) {
        multiply = data.map((cur) => data[i] * cur);
      }
      product.push([...multiply]);
    }
    return product;
  }

  function displayTable(data) {
    return handleTableData(data);
  }

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {cols.length > 0 &&
            cols.map((data, i) => {
              return <th key={i}>{data}</th>;
            })}
        </tr>
      </thead>
      <tbody>
        {cols.length > 0 &&
          cols.map((col, i) => {
            return (
              <tr key={i}>
                <th key={i}>{col}</th>
                {displayTable(cols)[i].map((product, i) => {
                  return <td key={i}>{product}</td>;
                })}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
