import React from 'react';

interface ProductCardProps {
  name: string;
  price: number;
  stock: boolean;
  onAdd: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ name, price, stock, onAdd }) => (
  <div className="flex items-center justify-between border p-2 mb-2">
    <div>
      <p className="font-bold">{name}</p>
      <p className="text-sm">{stock ? 'En stock' : 'Sin stock'}</p>
    </div>
    <div>
      <p>${price.toFixed(2)}</p>
      <button className="ml-2 bg-blue-500 text-white px-2 py-1 rounded" onClick={onAdd}>
        Agregar al pedido
      </button>
    </div>
  </div>
);
