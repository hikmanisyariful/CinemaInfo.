import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "elements/Button";
import ButtonPlayYoutube from "parts/ButtonPlayYoutube";

import { BsInfoCircle } from "react-icons/bs";

export default function Hero1({
  heroSection,
  isMovie,
  isDetails,
  refDetailsMovie
}) {
  const navigate = useNavigate();

  const handleInfoDetails = movieId => {
    navigate(`/movie/${movieId}`);
  };

  const showDetailsMovie = () => {
    window.scrollTo({
      top: refDetailsMovie.current.offsetTop - 100,
      behavior: "smooth"
    });
  };

  return (
    <div className="container-fluid p-0">
      <div className="container position-relative" style={{ zIndex: "2" }}>
        <div
          className="position-absolute d-flex flex-column justify-content-around vh-100"
          style={{ marginTop: 80 }}
        >
          {!isMovie && (
            <div className="row mw-100 mt-0 my-sm-5 py-sm-2">
              <div className="col-10">
                <span className="bg-light text-black p-2 rounded hero-font-size-1">
                  Watch now in Your Cinema
                </span>
              </div>
            </div>
          )}
          <div className="mb-5 pb-5">
            <h1 className="mt-5 pt-0 pt-sm-5 text-light">
              {heroSection.title}
            </h1>
            <div className="col-11 col-sm-8 mt-4">
              <ReadMore>{heroSection.plot}</ReadMore>
            </div>
            <div className="my-4 container-fluid">
              <div className="row">
                <div className="col-6 offset-sm-0 col-sm-4 col-lg-3 my-4 my-sm-0">
                  {heroSection.youtubeTrailer !== "" && (
                    <ButtonPlayYoutube data={heroSection} />
                  )}
                </div>
                <div className="col-6 offset-sm-0 col-sm-4 col-lg-3 my-4 my-sm-0">
                  {isDetails ? (
                    <Button
                      className="btn button-secondary"
                      onClick={showDetailsMovie}
                    >
                      Read More
                    </Button>
                  ) : (
                    <Button
                      className="btn button-secondary"
                      isBlock
                      href={`/movie/${heroSection.id}`}
                      onClick={() => handleInfoDetails(heroSection.id)}
                    >
                      <BsInfoCircle style={{ color: "white" }} />
                      <span>{"  Info Details"}</span>
                    </Button>
                  )}
                </div>
              </div>
            </div>
            <div className="mb-sm-5 pb-sm-5"></div>
          </div>
        </div>
      </div>
      <div className="position-relative">
        <div className="vw-100 vh-100">
          {heroSection.thumbnailURL && (
            <img
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
              src={heroSection.thumbnailURL}
              alt={heroSection.title}
            />
          )}
        </div>
        <div
          className="position-absolute top-0 vw-100 vh-100"
          style={{
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, #000000 100%)`,
            zIndex: "1"
          }}
        ></div>
      </div>
    </div>
  );
}

const ReadMore = ({ children }) => {
  const text = children;

  return (
    <p className="text-light hero-font-size-readmore">
      {text.slice(0, 500)} ...
    </p>
  );
};
