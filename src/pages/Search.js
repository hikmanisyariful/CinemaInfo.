import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

import Button from "elements/Button";

export default function Search() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("title");

  const handleSearchValue = e => {
    setSearch(e.target.value);
  };

  const handleSelectValue = e => {
    setCategory(e.target.value);
  };

  const handleClickSearch = e => {
    e.preventDefault();
    console.log(search, category);
  };

  return (
    <div className="container" style={{ marginTop: 150 }}>
      <div className="row justify-content-center">
        <form
          className="col-4"
          style={{ background: "white" }}
          onSubmit={handleClickSearch}
        >
          <div className="row">
            <div className="col-7 p-0">
              <input
                className="col-4 form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={handleSearchValue}
              />
            </div>
            <div className="col-4 p-0">
              <select
                className="col-4 form-select"
                aria-label="Default select example"
                value={category}
                onChange={handleSelectValue}
              >
                <option value="title">Title</option>
                <option value="actor">Actor</option>
                <option value="genre">Genre</option>
                <option value="keyword">Keyword</option>
              </select>
            </div>
            <div className="col-1 p-0">
              <button className="btn border button-hover" type="submit">
                <FiSearch />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
