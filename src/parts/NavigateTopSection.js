import React, { useState, useEffect } from "react";
import {
  useParams,
  useSearchParams,
  createSearchParams,
  NavLink
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SelectSort from "parts/SelectSort";
import { handleSortChoice } from "actions/sortChoice";

export default function NavigateTopSection({ currentPage }) {
  const params = useParams();
  const dispatch = useDispatch();

  const [value, setValue] = useState("topRank");

  // useSearchParams route
  const [searchParams, setSearchParams] = useSearchParams();
  const sortChoice = searchParams.get("sortBy");

  const dataMovieOrSeries = useSelector(
    state => state[`${currentPage}Page`][params.category]
  );

  const resetSortFeature = () => {
    setValue("topRank");

    let newData =
      dataMovieOrSeries && dataMovieOrSeries.sort((a, b) => a.rank - b.rank);
    dispatch(
      handleSortChoice({
        childRoute: params.category,
        parentRoute: currentPage,
        sortData: newData
      })
    );
  };

  const handleChange = event => {
    setValue(event.target.value);
    setSearchParams(createSearchParams({ sortBy: event.target.value }));
  };

  useEffect(() => {
    let newData;
    if (value === "topRank") {
      newData =
        dataMovieOrSeries && dataMovieOrSeries.sort((a, b) => a.rank - b.rank);
    } else if (value === "latestYear") {
      newData =
        dataMovieOrSeries && dataMovieOrSeries.sort((a, b) => b.year - a.year);
    } else if (value === "oldestYear") {
      newData =
        dataMovieOrSeries && dataMovieOrSeries.sort((a, b) => a.year - b.year);
    } else if (value === "highestRate") {
      newData =
        dataMovieOrSeries &&
        dataMovieOrSeries.sort((a, b) => b.imDbRating - a.imDbRating);
    } else if (value === "lowestRate") {
      newData =
        dataMovieOrSeries &&
        dataMovieOrSeries.sort((a, b) => a.imDbRating - b.imDbRating);
    }

    if (newData) {
      dispatch(
        handleSortChoice({
          childRoute: params.category,
          parentRoute: currentPage,
          sortData: newData
        })
      );
    }
  }, [value]);

  return (
    <div className="row d-flex justify-content-between align-items-end">
      <div className="col-12 col-sm-auto mb-5 mb-sm-0">
        <div className="row gx-0 gx-sm-1">
          <div className="col col-sm-auto">
            <NavLink
              className="nav-link fs-4 hover-navlink"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#ced4da" : "#6c757d"
                };
              }}
              to={`/${currentPage}/mostPopular`}
              onClick={() => resetSortFeature()}
            >
              Most Popular
            </NavLink>
          </div>
          <div className="col col-sm-auto">
            <NavLink
              className="nav-link fs-4 hover-navlink"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#ced4da" : "#6c757d"
                };
              }}
              to={`/${currentPage}/top250`}
              onClick={() => resetSortFeature()}
            >
              Top 250
            </NavLink>
          </div>
        </div>
      </div>

      {params.category && (
        <SelectSort
          value={value}
          handleChange={handleChange}
          isChecked={sortChoice}
        />
      )}

      {currentPage === "topMovies" && (
        <div className="col-12 col-sm-auto text-danger text-center top-title">
          Movies
        </div>
      )}

      {currentPage === "topSeries" && (
        <div className="col-12 col-sm-auto text-danger text-center top-title">
          Tv Series
        </div>
      )}
    </div>
  );
}
