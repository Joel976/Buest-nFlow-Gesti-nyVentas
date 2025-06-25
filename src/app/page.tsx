"use client";
import React, { useState } from "react";
import Catalog from "./catalog/Catalog";
import CustomerForm from "./customer/CustomerForm";
import OrderSummary from "./order/OrderSummary";
import SalesHistory from "./sales/SalesHistory";

export default function Home() {
  const [order, setOrder] = useState<{ name: string; price: number }[]>([]);
  const [client, setClient] = useState<{ name: string; contact: string } | null>(null);
  const [salesHistory, setSalesHistory] = useState<any[]>([]);

  const addToOrder = (product: { name: string; price: number }) => setOrder((prev) => [...prev, product]);
  const saveClient = (c: { name: string; contact: string }) => setClient(c);

  const confirmSale = () => {
    if (order.length === 0) return;
    setSalesHistory((prev) => [
      ...prev,
      { date: new Date().toLocaleDateString(), client: client?.name || "Sin cliente", amount: order.reduce((a, p) => a + p.price, 0) }
    ]);
    setOrder([]);
    setClient(null);
  }

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <Catalog onAdd={addToOrder} />
      <OrderSummary order={order} client={client} onConfirm={confirmSale} />
      <CustomerForm onSave={saveClient} />
      <SalesHistory data={salesHistory} />
    </div>
  );
}
