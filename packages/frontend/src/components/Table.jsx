import React from 'react';

export default function Table({ grid }) {
  if (!grid) return null;

  console.log(grid);
  return (
    <div>
      {grid.map((rows, i) => (
        <>
          {i === 0 ? (
            <p style={{ marginLeft: '1rem' }}>{rows}</p>
          ) : (
            <p key={i}>{rows}</p>
          )}
        </>
      ))}
    </div>
  );
}
