import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import FormSearch from "parts/FormSearch";
import PaginatedMovies from "parts/PaginatedMovies";
import Footer from "parts/Footer";

import { searchPage } from "assets/DummyData/searchPage";

export default function Search() {
  // const searchPage = useSelector(state => state.searchPage);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container" style={{ marginTop: 150 }}>
      <FormSearch />
      <div className="row mt-5 justify-content-center">
        <div className="col-auto">
          <h2>Search</h2>
        </div>
      </div>
      <div className="row">
        <PaginatedMovies itemsPerPage={12} items={searchPage.movies} />
      </div>
      <Footer />
    </div>
  );
}
