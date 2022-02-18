import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "elements/Button";
import ButtonPlayYoutube from "parts/ButtonPlayYoutube";
import ButtonLookPictures from "parts/ButtonLookPictures";

import { BsInfoCircle } from "react-icons/bs";

export default function Hero({
  heroSection,
  isMovie,
  isDetails,
  refDetailsMovie
}) {
  const navigate = useNavigate();

  const handleInfoDetails = movieId => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div className="hero-container">
      <div className="container">
        <div className="container hero-info">
          {isMovie ? (
            <div style={{ marginBottom: 50 }}></div>
          ) : (
            <div className="col-6">
              <h3
                className="h3 text-info fw-bolder bg-light"
                style={{ marginBottom: 40, padding: 5, borderRadius: "5px" }}
              >
                Now Playing in Cinema
              </h3>
            </div>
          )}

          <h1 className="info my-5">{heroSection.title}</h1>
          {/* <p className="text-light info">{heroSection.plot}</p> */}
          <ReadMore isDetails={isDetails} refDetailsMovie={refDetailsMovie}>
            {heroSection.plot}
          </ReadMore>
          <div className="button-wrapper">
            {heroSection.youtubeTrailer !== "" && (
              <ButtonPlayYoutube data={heroSection} />
            )}

            {isDetails ? (
              <ButtonLookPictures data={heroSection} />
            ) : (
              <Button
                className="btn button-secondary"
                isBlock
                href={`/movie/${heroSection.id}`}
                onClick={() => handleInfoDetails("tt6467266")}
              >
                <div className="fill-wrap">
                  <BsInfoCircle style={{ color: "white" }} />
                  Info Details
                </div>
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="hero-background">
        {heroSection.thumbnailURL && (
          <img src={heroSection.thumbnailURL} alt={heroSection.title} />
        )}
        <div className="background-cover"></div>
      </div>
    </div>
  );
}

const ReadMore = ({ children, isDetails, refDetailsMovie }) => {
  const text = children;
  const showDetailsMovie = () => {
    window.scrollTo({
      top: refDetailsMovie.current.offsetTop - 100,
      behavior: "smooth"
    });
  };

  return (
    <p className="text text-light info">
      {text.slice(0, 500)}
      {isDetails ? (
        <Button className="btn button-link" isSmall onClick={showDetailsMovie}>
          {"  "}
          <span
            className="read-or-hide text-warning mx-20 fs-6 fw-bold"
            style={{ cursor: "pointer" }}
          >
            ...read more
          </span>
        </Button>
      ) : (
        <span> ....</span>
      )}
    </p>
  );
};
