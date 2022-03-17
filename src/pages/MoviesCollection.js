import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MoviesCollection() {
  const params = useParams();
  const collections = useSelector(state => state.collections);
  const authedUser = useSelector(state => state.users.authedUser);

  const moviesEachType =
    params.typeCollection === "all"
      ? collections.filter(movie => movie.userId === authedUser)
      : collections
          .filter(movie => movie.userId === authedUser)
          .filter(movie => movie.collectionType === params.typeCollection);

  return (
    <div>
      <h1>Movies Collection {params.typeCollection}</h1>
      <div>{JSON.stringify(moviesEachType)}</div>
    </div>
  );
}
