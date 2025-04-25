// src/components/Header.jsx
import React, { useEffect, useState } from "react";

const Header = ({ allDoctors, onSearch }) => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (!input.trim()) return setSuggestions([]);

    const matches = allDoctors
      .filter((doc) =>
        doc.name.toLowerCase().includes(input.trim().toLowerCase())
      )
      .slice(0, 3);

    setSuggestions(matches);
  }, [input, allDoctors]);

  const handleSelect = (name) => {
    setInput(name);
    setSuggestions([]);
    onSearch(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
    setSuggestions([]);
  };

  return (
    <div className="bg-white p-4 shadow-md sticky top-0 z-10">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Search doctors by name..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          data-testid="autocomplete-input"
        />
      </form>

      {suggestions.length > 0 && (
        <ul className="bg-white border border-gray-300 rounded mt-1">
          {suggestions.map((doc, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              data-testid="suggestion-item"
              onClick={() => handleSelect(doc.name)}
            >
              {doc.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
