import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addMovie } from "actions/collections";

import { BsPlusLg } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ModalAdd({ movie }) {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("liked");
  const dispatch = useDispatch();
  const collections = useSelector(state => state.collections);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isExist =
      collections.length > 0
        ? collections.find(item => item.id === movie.id)
        : undefined;

    if (!isExist) {
      const movieObj = Object.assign(movie, { collectionType: value });
      dispatch(addMovie(movieObj));
    } else {
      alert("Movie has been added to collection!");
    }

    setShow(false);
  };

  return (
    <div
      className="position-absolute top-0 end-0 mt-2 me-2"
      style={{ zIndex: 4 }}
    >
      <div className="modal-add position-relative d-flex justify-content-center align-items-center">
        <BsPlusLg className="stretched-link" onClick={handleShow} />
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-light fs-5 fw-bolder">
            Add to Collection
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-12">
              <p className="text-dark">
                Title:{" "}
                <span className="fw-bolder text-warning">{movie.title}</span>
              </p>
            </div>
            <div className="col-12">
              <select
                className="form-select"
                aria-label="Default select example"
                value={value}
                onChange={handleChange}
              >
                <option disabled>Add to :</option>
                <option value="liked">Liked</option>
                <option value="favorite">Favorite</option>
                <option value="wantToWatch">Want to Watch</option>
                <option value="watched">Watched</option>
              </select>
            </div>
            <div className="col-12 my-4 d-flex justify-content-end align-items-center">
              <Button
                className="me-2"
                variant="secondary"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button type="submit" variant="primary" onClick={handleSubmit}>
                Add to collection
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
