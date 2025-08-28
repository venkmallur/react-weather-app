import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [cityInput, setCityInput] = useState("");

  const handleSearchClick = () => {
    if (cityInput.trim()) {
      onSearch(cityInput.trim());
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={cityInput}
        onChange={(e) => setCityInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter city name..."
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
}

export default SearchBar;
