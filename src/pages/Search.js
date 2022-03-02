import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FormSearch from "parts/FormSearch";
import PaginatedMovies from "parts/PaginatedMovies";
import Footer from "parts/Footer";

// import { searchPage } from "assets/DummyData/searchPage";

export default function Search() {
  const searchPage = useSelector(state => state.searchPage);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setIsUpdated(!isUpdated);
  }, [searchPage]);

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
          <PaginatedMovies
            itemsPerPage={12}
            items={searchPage.movies}
            isUpdated={isUpdated}
          />
        ) : (
          <PaginatedMovies
            itemsPerPage={12}
            items={searchPage.defaultMovies}
            isUpdated={isUpdated}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}
