import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FiSearch } from "react-icons/fi";
import { handleSearchMovies } from "actions/searchPage";

export default function FormSearch() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("title");

  const handleSearchValue = e => {
    setSearch(e.target.value);
  };

  const handleSelectValue = e => {
    setCategory(e.target.value);
  };

  const handleSubmitSearch = e => {
    e.preventDefault();
    console.log(search, category);
    dispatch(handleSearchMovies({ search, category }));
  };
  return (
    <div className="row justify-content-center">
      <form
        className="col-4"
        style={{ background: "white" }}
        onSubmit={handleSubmitSearch}
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
  );
}
