import React from "react";
import { useNavigate } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import Star from "elements/Star";
import Button from "elements/Button";

export default function TableTop250({ currentItems }) {
  const navigate = useNavigate();
  const handleInfoDetails = movieId => {
    navigate(`/movie/${movieId}`);
  };
  return (
    <div className="overflow-auto">
      <table className="table table-hover mt-5 fixed_header">
        <thead>
          <tr>
            <th className="text-center fs-5 fw-normal" id="rank">
              Rank
            </th>
            <th className="text-center fs-5 fw-normal" id="poster">
              Poster
            </th>
            <th className="text-center fs-5 fw-normal" id="desc">
              Description
            </th>
            <th className="text-center fs-5 fw-normal" id="info">
              Info
            </th>
          </tr>
        </thead>
        <tbody id="overflowTBody">
          {currentItems &&
            currentItems.map((movie, index) => {
              return (
                <tr key={`TopMovie-${index}-${movie.id}`}>
                  <th className="text-center col-2">
                    <div className="row w-100 justify-content-center align-items-center my-4">
                      <p className="rank m-0">{movie.rank}</p>
                    </div>
                  </th>
                  <th className="col-3">
                    <div className="row w-100 justify-content-center align-items-center rounded my-4 mx-0">
                      <div
                        style={{
                          width: "210px",
                          height: "272px",
                          objectFit: "cover"
                        }}
                      >
                        <img
                          className="rounded w-100 h-100"
                          src={movie.image}
                          alt={movie.title}
                        />
                      </div>
                    </div>
                  </th>
                  <th className="col-4">
                    <div className="row w-100 my-4 me-2">
                      <p className="h5">{movie.title}</p>
                      <p className="fs-6 fw-lighter text-dark">
                        Year: {movie.year}
                      </p>
                      <div className="row rate-stars">
                        <div className="col-auto fw-lighter text-info">
                          {movie.imDbRating}
                        </div>
                        <div className="col-auto">
                          <Star
                            value={Number(movie.imDbRating) / 2}
                            width={17}
                            height={17}
                            spacing={4}
                          />
                        </div>
                      </div>
                      <div className="row gy-0 mt-2">
                        <p className="fw-lighter my-0">Crews :</p>
                        <p className="text-dark fw-lighter">{movie.crew}</p>
                      </div>
                    </div>
                  </th>
                  <th className="col-3">
                    <div className="row justify-content-center align-items-center my-4">
                      <Button
                        className="btn button-secondary"
                        isBlock
                        onClick={() => handleInfoDetails(movie.id)}
                      >
                        <div className="fill-wrap">
                          <BsInfoCircle style={{ color: "white" }} />
                          Info Details
                        </div>
                      </Button>
                    </div>
                  </th>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
