import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { handleGetDataMovie } from "actions/movieIdPages";

// import { movieIDPage } from "assets/DummyData/movieIdPage";

// import Hero from "parts/Hero";
import Hero from "parts/Hero";
import ContentMovie from "parts/ContentMovie";
import Footer from "parts/Footer";
import Button from "elements/Button";

export default function MovieId() {
  const refDetailsMovie = useRef();
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const movieIDPage = useSelector(state => state.movieIDPage);

  useEffect(() => {
    dispatch(handleGetDataMovie(params.movieId));
  }, [params, dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  const renderMovieId = (movies, movieIdParams) => {
    const idMovieCurrent = Object.keys(movies).filter(
      id => id === movieIdParams
    );
    const dataMovie = movieIDPage[idMovieCurrent];

    if (dataMovie) {
      return (
        <div>
          <Hero
            heroSection={dataMovie}
            isMovie
            isDetails
            refDetailsMovie={refDetailsMovie}
          />

          <ContentMovie
            data={dataMovie}
            refDetailsMovie={refDetailsMovie}
            paramsMovieId={params.movieId}
          />

          <div className="row justify-content-center mx-0 mt-5 mt-lg-0">
            <div className="col-auto">
              <Button
                className="btn button-primary bg-warning px-5"
                hasShadow
                href="/"
                onClick={() => handleBack()}
              >
                Back
              </Button>
            </div>
          </div>

          <Footer />
        </div>
      );
    } else {
      return <div style={{ marginTop: 100 }}>Loading</div>;
    }
  };

  return <div>{renderMovieId(movieIDPage, params.movieId)}</div>;
}
