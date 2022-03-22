import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams, createSearchParams } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { handleSearchMovies } from "actions/searchPage";

export default function FormSearch() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("title");

  const [searchParams, setSearchParams] = useSearchParams();
  // const categorySearch = searchParams.get("category");
  // const valueSearch = searchParams.get("value");

  const handleSearchValue = e => {
    setSearch(e.target.value);
  };

  const handleSelectValue = e => {
    setCategory(e.target.value);
  };

  const handleSubmitSearch = e => {
    e.preventDefault();
    setSearchParams(createSearchParams({ category: category, value: search }));
    dispatch(handleSearchMovies({ search, category }));
  };
  return (
    <div className="row justify-content-center mb-5">
      <form
        className="col-10 col-sm-8 col-md-6 col-lg-4"
        style={{ background: "white" }}
        onSubmit={handleSubmitSearch}
      >
        <div className="row">
          <div className="col-7 p-0">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={handleSearchValue}
            />
          </div>
          <div className="col-4 p-0">
            <select
              className="form-select"
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
