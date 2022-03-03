import React, { useState, useEffect } from "react";
import {
  useParams,
  useSearchParams,
  createSearchParams
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "elements/Button";
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
    console.log(newData);
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
    <div className="row h-100 align-items-end">
      <div className="col-auto me-5 h-100">
        <div className="row gx-1">
          <div className="col-auto">
            <Button
              className="nav-link fs-4"
              type="link"
              href={`/${currentPage}/mostPopular`}
              onClick={() => resetSortFeature()}
            >
              Most Popular
            </Button>
          </div>
          <div className="col-auto">
            <Button
              className="nav-link fs-4"
              type="link"
              href={`/${currentPage}/top250`}
              onClick={() => resetSortFeature()}
            >
              Top 250
            </Button>
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
        <div className="col-auto ms-auto text-danger top-title">Movies</div>
      )}

      {currentPage === "topSeries" && (
        <div className="col-auto ms-auto text-danger top-title">Tv Series</div>
      )}
    </div>
  );
}
