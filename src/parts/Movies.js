import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { Navigation, FreeMode } from "swiper";

import { homePages } from "assets/DummyData/homePages";

export default function Movies() {
  const { trending } = homePages;

  return (
    <div className="container">
      <h3 style={{ marginBottom: "50px" }}>Trending</h3>
      <Swiper
        className="row"
        slidesPerView={6}
        spaceBetween={30}
        slidesPerGroup={6}
        loopFillGroupWithBlank={true}
        navigation={true}
        freeMode={true}
        grabCursor={true}
        modules={[Navigation, FreeMode]}
      >
        {trending.map((movie, index) => {
          return (
            <SwiperSlide
              className="col-2"
              key={`trending-${movie.id}-${index}`}
            >
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
        })}
      </Swiper>
    </div>
  );
}