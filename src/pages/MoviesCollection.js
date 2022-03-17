import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import PaginateCollection from "parts/PaginateCollection";

export default function MoviesCollection() {
  const params = useParams();
  let type = params.typeCollection;
  const authedUser = useSelector(state => state.users.authedUser);
  const collections = useSelector(state => state.collections);
  const [isUpdated, setIsUpdated] = useState(false);
  const [moviesEachType, setMoviesEachType] = useState([]);

  useEffect(() => {
    setIsUpdated(!isUpdated);
    let moviesType =
      type === "all"
        ? collections.filter(movie => movie.userId === authedUser)
        : collections
            .filter(movie => movie.userId === authedUser)
            .filter(movie => movie.collectionType === type);

    setMoviesEachType(moviesType);
  }, [type, collections]);

  // let moviesEachType =
  //   params.typeCollection === "all"
  //     ? collections.filter(movie => movie.userId === authedUser)
  //     : collections
  //         .filter(movie => movie.userId === authedUser)
  //         .filter(movie => movie.collectionType === params.typeCollection);

  return (
    <div>
      <div className="row d-flex justify-content-between align-items-end">
        <div className="col-auto">
          <h1>{params.typeCollection}</h1>
        </div>

        <div className="col-auto">Search</div>
      </div>
      <PaginateCollection
        itemsPerPage={8}
        items={moviesEachType}
        isUpdated={isUpdated}
      />
    </div>
  );
}
