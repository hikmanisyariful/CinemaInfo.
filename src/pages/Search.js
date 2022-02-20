import React, { useState } from "react";
import { useSelector } from "react-redux";
import FormSearch from "parts/FormSearch";
import MoviesSearch from "parts/MoviesSearch";

import { searchPage } from "assets/DummyData/searchPage";

export default function Search() {
  // const searchPage = useSelector(state => state.searchPage);

  return (
    <div className="container" style={{ marginTop: 150 }}>
      <FormSearch />
      <div className="row mt-5 justify-content-center">
        <div className="col-auto">
          <h2>Search</h2>
        </div>
      </div>
      <div className="row">
        {searchPage.movies ? (
          <MoviesSearch movies={searchPage.movies} />
        ) : (
          <MoviesSearch movies={searchPage.defaultMovies} />
        )}
      </div>
    </div>
  );
}
