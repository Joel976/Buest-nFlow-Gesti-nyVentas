"use client";
import React from "react";
import { ProductCard } from "../../../components/ProductCard";

const products = [
  { name: "Producto 1", price: 20, stock: true },
  { name: "Producto 2", price: 15, stock: true },
  { name: "Producto 3", price: 25, stock: true },
  { name: "Producto 4", price: 30, stock: true },
];

export default function Catalog({ onAdd }: { onAdd: (product: { name: string; price: number }) => void }) {
  return (
    <div>
      <h2 className="font-bold mb-2 text-xl">Catálogo de productos</h2>
      {products.map((p) => (
        <ProductCard key={p.name} name={p.name} price={p.price} stock={p.stock} onAdd={() => onAdd(p)} />
      ))}
    </div>
  );
}
