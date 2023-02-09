import React, { useState } from "react";
import { FaRedo } from "react-icons/fa";

import "../../styles/filters/SearchInput.scss";

const searchClass = "search";
const inputClass = "form-control input-text";
const resetClass = "searchInput__reset";

const SearchInput = ({ setSearch }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setSearch(e.target.value);
  };

  const resetForm = () => {
    setInput("");
    setSearch("");
  };

  return (
    <div className="row">
      <div className="col-10">
        <div className={`input-group mb-3 ${searchClass}`}>
          <input
            id="search-models"
            value={input}
            onChange={handleInputChange}
            type="text"
            className={inputClass}
            placeholder="Search products"
            autoFocus
            aria-label="Search products input"
          />
        </div>
      </div>
      <div className="col-2">
        <button className="btn" onClick={resetForm}>
          <FaRedo className={resetClass} />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
