import React, { useState } from "react";
import Button from "elements/Button";
import Posters from "parts/ModalPosters";

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
          className="btn button-link stretched-link"
          isBlock
          href={`/movie/${data.id}`}
          onClick={() => onShow()}
        >
          <div className="row">
            <p>Click here!</p>
            <p>to look pictures</p>
          </div>
        </Button>
      )}

      {show && <Posters onHide={onHide} show={show} data={data} />}
    </>
  );
}
