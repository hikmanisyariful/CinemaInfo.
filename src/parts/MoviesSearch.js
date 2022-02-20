import React from "react";
import Button from "elements/Button";

export default function MoviesSearch({ movies }) {
  return (
    <div className="container mt-5">
      <div className="row">
        {movies.map((movie, index) => {
          return (
            <div
              className="col-2 mt-5"
              key={`Search-movie-${index}-${movie.id}`}
            >
              <div
                className="card d-block justify-content-center card-movie"
                style={{ background: "none" }}
              >
                <div
                  className="d-flex flex-column justify-content-center align-items-center"
                  style={{ width: "100%" }}
                >
                  <img
                    src={movie.image}
                    alt={movie.title}
                    style={{
                      borderRadius: "15px",
                      width: "100%",
                      marginBottom: "10px"
                    }}
                  />
                  <Button
                    type="link"
                    href={`/movie/${movie.id}`}
                    className="stretched-link d-block"
                  >
                    <h6 className="text-center text-light">{movie.title}</h6>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
