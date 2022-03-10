import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Button, Offcanvas } from "react-bootstrap";
import IconText from "parts/IconText";

export default function OffCanvasRight({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div {...props}>
      <Button onClick={handleShow} className="bg-transparent border-0">
        <FaBars className="fs-4 text-light" />
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <IconText />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
