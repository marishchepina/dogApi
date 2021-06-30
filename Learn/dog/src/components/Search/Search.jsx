import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [value, setValue] = useState("");

  function searchHandler(event) {
    event.preventDefault();

    if (value.trim()) {
      onSearch(value);
      setValue("");
    }
  }

  return (
    <form onSubmit={searchHandler}>
      <input
        type="search"
        placeholder="Порода"
        list="breeds"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <datalist id="breeds">
        <option value="Spaniel"></option>
        <option value="Bulldog"></option>
        <option value="Terrier"></option>
      </datalist>
      <button type="submit">Пошук</button>
    </form>
  );
};

export default Search;
