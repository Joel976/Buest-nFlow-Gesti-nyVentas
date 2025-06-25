"use client";
import React from "react";

export default function SalesHistory({ data }: { data: { date: string; client: string; amount: number }[] }) {
  return (
    <div>
      <h2 className="font-bold mb-2 text-xl">Historial de ventas</h2>
      <table className="w-full border">
        <thead>
          <tr>
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
    </div>
  );
}
