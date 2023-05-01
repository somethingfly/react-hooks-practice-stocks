import React from "react";

// See notes in App.js for why this has been changed to checkboxes.

function SearchBar({ formatData, onFormat }) {
  
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="checkbox"
          name="sortPrice"
          checked={formatData.sortPrice}
          onChange={onFormat}
        />
        Price
      </label>
      <label>
        <input
          type="checkbox"
          name="sortAlphabetically"
          checked={formatData.sortAlphabetically}
          onChange={onFormat}
        />
        Alphabetically
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select 
          name="filter"
          value={formatData.filter}
          onChange={onFormat}
        >
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;

/*
import React from "react";

function SearchBar() {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={null}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={null}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={null}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
*/