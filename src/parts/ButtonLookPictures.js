import React, { useState } from "react";
import Button from "elements/Button";
import Posters from "parts/ModalPosters";
import { BsImages } from "react-icons/bs";

export default function ButtonLookPictures({ data }) {
  const [show, setShow] = useState(false);

  const onShow = () => {
    setShow(true);
  };

  const onHide = () => {
    setShow(false);
  };

  return (
    <>
      {data.images && (
        <Button
          className="btn button-secondary"
          isBlock
          href={`/movie/${data.id}`}
          onClick={() => onShow()}
        >
          <div className="fill-wrap">
            <BsImages style={{ color: "white" }} />
            Look Pictures
          </div>
        </Button>
      )}

      {show && <Posters onHide={onHide} show={show} data={data} />}
    </>
  );
}
