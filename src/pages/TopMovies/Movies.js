import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PaginateTableMostPopular from "parts/PaginateTableMostPopular";
import PaginateTableTop250 from "parts/PaginateTableTop250";
// import { topMovieSeries } from "assets/DummyData/topMoviePage";

export default function Movies() {
  let params = useParams();
  let movies = useSelector(state => state.topMoviesPage);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    setIsUpdated(!isUpdated);
  }, [movies]);

  return (
    <div>
      {movies[params.category] && (
        <div>
          {params.category === "top250" ? (
            <PaginateTableTop250
              itemsPerPage={10}
              items={movies[params.category]}
              isUpdated={isUpdated}
            />
          ) : (
            <PaginateTableMostPopular
              itemsPerPage={10}
              items={movies[params.category]}
              isUpdated={isUpdated}
            />
          )}
        </div>
      )}
    </div>
  );
}
