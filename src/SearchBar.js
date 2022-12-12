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
    <form className="search-box" style={{ width: "100%" }} onSubmit={submit}>
      <input
        className="search-bar"
        type="text"
        placeholder="Search for an activity "
        onChange={handleChange}
        value={searchInput}
      />
    </form>
  );
}
