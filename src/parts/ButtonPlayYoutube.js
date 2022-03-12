import React, { useState } from "react";
import Button from "elements/Button";
import { FaPlay } from "react-icons/fa";
import YoutubeTrailer from "parts/ModalYoutubeTrailer";

export default function ButtonPlayYoutube({ data }) {
  const [show, setShow] = useState(false);

  const onShow = () => {
    setShow(true);
  };

  const onHide = () => {
    setShow(false);
  };

  return (
    <>
      <Button
        className="btn button-primary"
        hasShadow
        onClick={() => onShow()}
        data-bs-toggle="modal"
        data-bs-target="#youtubeTrailer"
        // style={{ marginRight: 20 }}
      >
        <FaPlay /> <span>{" Play Trailer"}</span>
      </Button>

      {show && <YoutubeTrailer onHide={onHide} show={show} data={data} />}
    </>
  );
}
