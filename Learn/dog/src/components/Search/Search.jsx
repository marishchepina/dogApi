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
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit">Пошук</button>
    </form>
  );
};

export default Search;
