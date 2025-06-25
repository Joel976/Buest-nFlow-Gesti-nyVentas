"use client";
import React, { useState } from "react";

export default function CustomerForm({ onSave }: { onSave: (clientData: { name: string; contact: string }) => void }) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [type, setType] = useState("");

  return (
    <div>
      <h2 className="font-bold mb-2 text-xl">Gestión del cliente</h2>
      <div className="border p-4 rounded space-y-2">
        <input className="border p-1 w-full" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="border p-1 w-full" placeholder="Contacto" value={contact} onChange={(e) => setContact(e.target.value)} />
        <label htmlFor="tipoCliente" className="block mb-1 font-medium">Tipo de cliente</label>
        <select id="tipoCliente" name="tipoCliente" className="border p-1 w-full">          
          <option value="" disabled>Tipo de cliente</option>
          <option value="persona">Persona</option>
          <option value="empresa">Empresa</option>
        </select>
        <button className="bg-green-500 text-white p-1 w-full mt-2" onClick={() => onSave({ name, contact })}>Guardar</button>
      </div>
    </div>
  );
}
