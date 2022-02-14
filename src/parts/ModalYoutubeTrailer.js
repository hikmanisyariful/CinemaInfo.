import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import ReactPlayer from "react-player";

export default function YoutubeTrailer({ show, onHide, data }) {
  return (
    <Modal
      show={show}
      onHide={() => onHide()}
      fullscreen
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          {data.title} Trailer
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ position: "relative" }}>
        <ReactPlayer
          loop
          playing={true}
          controls={false}
          url={data.youtubeTrailer}
          width="100%"
          height="100%"
        />
        <div
          style={{
            top: 0,
            zIndex: 2,
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: "0.1"
          }}
        ></div>
      </Modal.Body>
    </Modal>
  );
}
