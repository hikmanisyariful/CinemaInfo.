import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Posters({ show, onHide, data }) {
  return (
    <Modal
      show={show}
      onHide={() => onHide()}
      fullscreen
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          {data.title} Pictures
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Swiper
          pagination={{
            type: "fraction"
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          style={{ width: "100%", height: "100%" }}
        >
          {data.images.map((poster, index) => {
            return (
              <SwiperSlide
                key={`poster-${index}`}
                style={{
                  width: "90%",
                  height: "90%",
                  position: "relative"
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "scale-down"
                  }}
                  src={poster.image}
                  alt={poster.title}
                />
                <div
                  style={{
                    position: "absolute",
                    zIndex: "5",
                    top: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    padding: "0px 100px 20px 100px",

                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, #000000 100%)"
                  }}
                >
                  <h5 className="text-center text-dark">{poster.title}</h5>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Modal.Body>
    </Modal>
  );
}
