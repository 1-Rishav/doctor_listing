import React, { useState } from 'react';

const SearchBar = ({ suggestions, onSearch }) => {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setFiltered(
      value
        ? suggestions.filter((name) =>
            name.toLowerCase().includes(value.toLowerCase())
          )
        : []
    );
  };

  const handleSelect = (name) => {
    setQuery(name);
    setFiltered([]);
    onSearch(name); // Filter doctor list outside
  };

  return (
    <div className="w-full p-4 bg-blue-900 flex justify-center">
      <div className="w-full max-w-3xl relative">
      <input
  type="text"
  value={input}
  onChange={handleInputChange}
  placeholder="Search doctors..."
  data-testid="autocomplete-input"
  className="w-full p-2 border rounded"
/>

<ul>
  {suggestions.slice(0, 3).map((sug, idx) => (
    <li
      key={idx}
      onClick={() => handleSuggestionClick(sug)}
      data-testid="suggestion-item"
      className="cursor-pointer hover:bg-gray-100 p-1"
    >
      {sug}
    </li>
  ))}
</ul>
      </div>
    </div>
  );
};

export default SearchBar;
