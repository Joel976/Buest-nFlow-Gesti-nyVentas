"use client";  // 👈 Esto es obligatorio cuando uses hooks como useState

import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { SearchBar } from './SearchBar';
import { Table } from './Table';

const products = [
  { name: 'Producto 1', price: 20, stock: true },
  { name: 'Producto 2', price: 15, stock: true },
  { name: 'Producto 3', price: 25, stock: true },
  { name: 'Producto 4', price: 30, stock: true },
];

export default function Dashboard() {
  const [order, setOrder] = useState<{ name: string; price: number }[]>([]);
  const addToOrder = (product: { name: string; price: number }) => setOrder([...order, product]);
  const subtotal = order.reduce((acc, p) => acc + p.price, 0);
  const tax = subtotal * 0.21;
  const total = subtotal + tax;

  return (
    <div className="grid grid-cols-2 gap-8 p-4">

      {/* Catálogo */}
      <div>
        <h2 className="font-bold mb-2 text-xl">Catálogo de productos</h2>
        {products.map((p) => (
          <ProductCard key={p.name} name={p.name} price={p.price} stock={p.stock} onAdd={() => addToOrder(p)} />
        ))}
      </div>

      {/* Pedido y pago */}
      <div>
        <h2 className="font-bold mb-2 text-xl">Pedido y pago</h2>
        <ul className="mb-2">
          {order.map((item, i) => (
            <li key={i} className="flex justify-between border-b py-1">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Impuesto: ${tax.toFixed(2)}</p>
        <p className="font-bold">Total: ${total.toFixed(2)}</p>
      </div>

      {/* Gestión del cliente */}
      <div className="col-span-1">
        <h2 className="font-bold mb-2 text-xl">Gestión del cliente</h2>
        <form className="flex flex-col space-y-2 border p-4 rounded">
          <input className="border p-1" placeholder="Nombre" />
          <input className="border p-1" placeholder="Contacto" />
          <label htmlFor="tipoCliente" className="block mb-1 font-medium">Tipo de cliente</label>
            <select id="tipoCliente" name="tipoCliente" className="border p-1 w-full">
            <option value="" disabled>Selecciona un tipo</option>
            <option value="persona">Persona</option>
            <option value="empresa">Empresa</option>
            </select>

          <button className="bg-green-500 text-white p-1 rounded mt-2">Guardar</button>
        </form>
      </div>

      {/* Historial de ventas */}
      <div className="col-span-1">
        <h2 className="font-bold mb-2 text-xl">Historial de ventas</h2>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-1">Fecha</th>
              <th className="border p-1">Cliente</th>
              <th className="border p-1">Monto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-1">23/04/2024</td>
              <td className="border p-1">Juan Perez</td>
              <td className="border p-1">$100.00</td>
            </tr>
            <tr>
              <td className="border p-1">22/04/2024</td>
              <td className="border p-1">Empresa XYZ</td>
              <td className="border p-1">$200.00</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
