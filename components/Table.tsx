import React from 'react';

export const Table: React.FC<{ data: { date: string; client: string; amount: number }[] }> = ({ data }) => (
  <table className="w-full border">
    <thead>
      <tr className="bg-gray-100">
        <th className="border p-1">Fecha</th>
        <th className="border p-1">Cliente</th>
        <th className="border p-1">Monto</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row, idx) => (
        <tr key={idx}>
          <td className="border p-1">{row.date}</td>
          <td className="border p-1">{row.client}</td>
          <td className="border p-1">${row.amount.toFixed(2)}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
