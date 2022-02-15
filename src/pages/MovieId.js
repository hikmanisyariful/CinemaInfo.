import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { handleGetDataMovie } from "actions/movieIdPages";

import { movieIDPage } from "assets/DummyData/movieIdPage";

import Hero from "parts/Hero";
import ContentMovie from "parts/ContentMovie";

export default function MovieId() {
  const params = useParams();
  const dispatch = useDispatch();
  // const movieIDPage = useSelector(state => state.movieIDPage);

  useEffect(() => {
    dispatch(handleGetDataMovie(params.movieId));
  }, [params, dispatch]);

  const renderMovieId = (movies, movieIdParams) => {
    const idMovieCurrent = Object.keys(movies).filter(
      movie => movie === movieIdParams
    );
    const dataMovie = movieIDPage[idMovieCurrent];

    if (dataMovie) {
      return (
        <div>
          <Hero heroSection={dataMovie} isMovie isDetails />
          <ContentMovie data={dataMovie} />
        </div>
      );
    } else {
      return <div style={{ marginTop: 100 }}>Loading</div>;
    }
  };

  return <div>{renderMovieId(movieIDPage, params.movieId)}</div>;
}
