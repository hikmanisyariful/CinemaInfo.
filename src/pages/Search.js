import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FormSearch from "parts/FormSearch";
import PaginatedMovies from "parts/PaginatedMovies";
import Footer from "parts/Footer";

// import { searchPage } from "assets/DummyData/searchPage";

export default function Search() {
  const searchPage = useSelector(state => state.searchPage);
  const [isUpdated, setIsUpdated] = useState(false);
  const [classPaginationSize, setClassPaginationSize] = useState("");
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(5);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  /* start Width set up screen */
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  /* end Width set up screen   */

  useEffect(() => {
    if (width < 768) {
      setClassPaginationSize("pagination-sm");
      setPageRangeDisplayed(2);
      setItemsPerPage(6);
    } else {
      setClassPaginationSize("");
      setPageRangeDisplayed(5);
      setItemsPerPage(12);
    }
  }, [width]);

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
        {searchPage && searchPage.movies ? (
          <PaginatedMovies
            itemsPerPage={itemsPerPage}
            items={searchPage.movies}
            isUpdated={isUpdated}
            classPaginationSize={classPaginationSize}
            pageRangeDisplayed={pageRangeDisplayed}
          />
        ) : (
          <PaginatedMovies
            itemsPerPage={itemsPerPage}
            items={searchPage.defaultMovies}
            isUpdated={isUpdated}
            classPaginationSize={classPaginationSize}
            pageRangeDisplayed={pageRangeDisplayed}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}
