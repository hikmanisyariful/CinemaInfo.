import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PaginateTableMostPopular from "parts/PaginateTableMostPopular";
import PaginateTableTop250 from "parts/PaginateTableTop250";
// import { topMovieSeries } from "assets/DummyData/topMoviePage";

export default function Movies() {
  let params = useParams();
  let movies = useSelector(state => state.topMoviesPage[params.category]);
  // let defaultMovies = useSelector(state => state.topMoviesPage.mostPopular);

  return (
    <div>
      {movies && (
        <div>
          {params.category === "top250" ? (
            <PaginateTableTop250 itemsPerPage={10} items={movies} />
          ) : (
            <PaginateTableMostPopular itemsPerPage={10} items={movies} />
          )}
        </div>
      )}
    </div>
  );
}
