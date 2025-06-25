"use client";
import React from "react";

export default function OrderSummary({ order, client, onConfirm }: { order: { name: string; price: number }[], client: { name: string; contact: string } | null, onConfirm: () => void }) {
  const subtotal = order.reduce((acc, p) => acc + p.price, 0);
  const tax = subtotal * 0.21;
  const total = subtotal + tax;

  return (
    <div>
      <h2 className="font-bold mb-2 text-xl">Pedido y pago</h2>
      <ul>
        {order.map((item, idx) => (
          <li key={idx} className="flex justify-between"><span>{item.name}</span><span>${item.price.toFixed(2)}</span></li>
        ))}
      </ul>
      <p>Cliente: {client ? client.name : "No asignado"}</p>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Impuesto: ${tax.toFixed(2)}</p>
      <p className="font-bold">Total: ${total.toFixed(2)}</p>
      <button className="bg-blue-500 text-white p-1 mt-2 w-full" onClick={onConfirm}>Confirmar pedido</button>
    </div>
  );
}
