import { React, useState } from "react";
import { FaRedo } from "react-icons/fa";

import "../../styles/filters/SearchInput.scss";

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
        <div className="input-group mb-3 search">
          <input
            id="search-models"
            value={input}
            onChange={handleInputChange}
            type="text"
            className="form-control input-text"
            placeholder="Search products"
          />
        </div>
      </div>
      <div className="col-2">
        <button className="btn" onClick={resetForm}>
          <FaRedo className="searchInput__reset" />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
