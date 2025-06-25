import React from 'react';

export const SearchBar: React.FC<{ placeholder: string; onSearch: (term: string) => void }> = ({ placeholder, onSearch }) => (
  <input
    type="text"
    placeholder={placeholder}
    className="border rounded p-1 w-full mb-2"
    onChange={(e) => onSearch(e.target.value)}
  />
);
