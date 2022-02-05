import React from "react";

export default function CardMovie({ movie }) {
  return (
    <div className="card grid-card">
      <img
        src="https://imdb-api.com/images/original/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_Ratio0.7273_AL_.jpg"
        alt={movie.title}
      />
    </div>
  );
}
