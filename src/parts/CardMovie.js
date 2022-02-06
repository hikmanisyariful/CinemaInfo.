import React from "react";
import { SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

export default function CardMovie({ movie }) {
  return (
    <SwiperSlide className="col-2">
      <div
        className="card d-flex justify-content-center"
        style={{ background: "none" }}
      >
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ width: "100%" }}
        >
          <img
            src="https://imdb-api.com/images/original/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_Ratio0.7273_AL_.jpg"
            alt={movie.title}
            style={{
              borderRadius: "15px",
              width: "100%",
              marginBottom: "10px"
            }}
          />
          <h6 className="text-center">{movie.title}</h6>
        </div>
      </div>
    </SwiperSlide>
  );
}
