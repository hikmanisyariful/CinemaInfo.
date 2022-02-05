import React from "react";
import CardMovie from "./CardMovie";
import { homePages } from "assets/DummyData/homePages";

export default function Movies() {
  const { trending } = homePages;

  return (
    <div className="container">
      <div className="row">
        {trending.map((movie, index) => {
          return <CardMovie movie={movie} key={`trending-${movie.id}`} />;
        })}
      </div>
    </div>
  );
}
