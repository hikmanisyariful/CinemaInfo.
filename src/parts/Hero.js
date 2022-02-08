import React from "react";
import Button from "elements/Button";
import { FaPlay } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";

export default function Hero({ heroSection }) {
  return (
    <div className="hero-container">
      <div className="container">
        <div className="container hero-info">
          <h2 className="h2 text-dark" style={{ marginBottom: "100px" }}>
            Now Playing in Cinema
          </h2>
          <h1 className="info">{heroSection.title}</h1>
          <p className="text-light info">{heroSection.plot}</p>
          <div className="button-wrapper">
            <Button className="btn button-primary" hasShadow isBlock>
              <div className="fill-wrap">
                <FaPlay />
                Play Trailer
              </div>
            </Button>
            <Button className="btn button-secondary" hasShadow isBlock>
              <div className="fill-wrap">
                <BsInfoCircle style={{ color: "white" }} />
                Info Details
              </div>
            </Button>
          </div>
        </div>
      </div>

      <div className="hero-background">
        <img src={heroSection.thumbnailURL} alt={heroSection.title} />
        <div className="background-cover"></div>
      </div>
    </div>
  );
}
