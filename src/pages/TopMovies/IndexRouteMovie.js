import React from "react";

export default function IndexRouteMovie() {
  return (
    <div className="container mt-5" style={{ height: "390px" }}>
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ marginTop: "70px" }}
      >
        <p className="font-wallpoet text-center">
          The Most Popular Movies To Watch
        </p>
        <p className="font-wallpoet text-center">Rank Up Down of Movie</p>
        <p className="font-wallpoet text-center">
          Top 250 Movies based on top rank
        </p>
      </div>
      <div className="row justify-content-center mt-5">
        <p className="font-audiow  text-center">
          Please choose the category to see it!
        </p>
      </div>
    </div>
  );
}
