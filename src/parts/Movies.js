import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { Navigation, FreeMode } from "swiper";

import Star from "elements/Star";
import Button from "elements/Button";

// import { homePages } from "assets/DummyData/homePages";

export default function Movies({ movies, label }) {
  // const { trending } = homePages;

  return (
    <div className="container" style={{ marginBottom: "50px" }}>
      <h3 style={{ marginBottom: "50px" }}>{label}</h3>
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
        {movies.map((movie, index) => {
          return (
            <SwiperSlide
              className="col-2"
              key={`trending-${movie.id}-${index}`}
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

                  {movie.rate ? (
                    <>
                      <Star
                        value={Number(movie.rate / 2)}
                        width={17}
                        height={17}
                        spacing={4}
                      />
                      <p className="text-dark">{movie.rate}</p>
                    </>
                  ) : (
                    <p className="text-dark">No rating</p>
                  )}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
