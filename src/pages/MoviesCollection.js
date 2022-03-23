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
  const [search, setSearch] = useState("");

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setIsUpdated(!isUpdated);
    let moviesType =
      type === "all"
        ? collections.filter(movie => movie.userId === authedUser)
        : collections
            .filter(movie => movie.userId === authedUser)
            .filter(movie => movie.collectionType === type);

    let moviesIsShow =
      search !== ""
        ? moviesType.filter(item =>
            item.title.toLowerCase().startsWith(search.toLowerCase())
          )
        : moviesType;

    setMoviesEachType(moviesIsShow);
  }, [type, collections, search]);

  return (
    <div>
      <div className="row d-flex justify-content-between align-items-end ">
        <div className="col-auto activated-sidebar">
          <h1 className="font-audiow">{params.typeCollection}</h1>
        </div>

        <div className="col-12 col-md-5 col-lg-4 mb-2">
          <form className="w-100">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={handleSearch}
            />
          </form>
        </div>
      </div>
      <PaginateCollection
        itemsPerPage={12}
        items={moviesEachType}
        isUpdated={isUpdated}
      />
    </div>
  );
}
