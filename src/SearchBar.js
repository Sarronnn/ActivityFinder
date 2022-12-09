import React, { useState } from "react";
export default function SearchBar({ action }) {
  const [searchInput, setSearchInput] = useState("");

  function submit(e) {
    e.preventDefault();
    action(searchInput);
    setSearchInput("");
  }
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        placeholder="Search for an activity "
        onChange={handleChange}
        value={searchInput}
      />
    </form>
  );
}
