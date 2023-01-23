import React from "react";
import "./SearchInput.css";

const SearchInput = ({id, setId}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setId(event.target[0].value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="Label" htmlFor="id">
        Id:{" "}
      </label>
      <input className="Input" type="text" />
      <button className="Button" type="submit">
        Buscar
      </button>
    </form>
  );
};

export default SearchInput;
