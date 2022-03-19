import React, { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { VscRunAll } from "react-icons/vsc";
import { FcLike } from "react-icons/fc";
import { AiFillStar } from "react-icons/ai";
import { ImPlay } from "react-icons/im";
import { MdMovie } from "react-icons/md";

import { updateMovie, removeMovie } from "actions/collections";

export default function Options({ movie }) {
  const [value, setValue] = useState(movie.collectionType);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = e => {
    setValue(e.target.value);
    const movieObjUpdate = Object.assign(movie, {
      collectionType: e.target.value
    });
    dispatch(updateMovie(movieObjUpdate));
  };

  const handleDelete = e => {
    e.preventDefault();
    dispatch(removeMovie(movie));
    setShow(false);
  };

  const IconTypeRender = type => {
    if (type === "all") {
      return (
        <VscRunAll className="text-light" style={{ width: 40, height: 40 }} />
      );
    } else if (type === "liked") {
      return (
        <FcLike className="text-danger" style={{ width: 40, height: 40 }} />
      );
    } else if (type === "favorite") {
      return (
        <AiFillStar
          className="text-warning"
          style={{ width: 40, height: 40 }}
        />
      );
    } else if (type === "wantToWatch") {
      return <ImPlay className="text-info" style={{ width: 40, height: 40 }} />;
    } else if (type === "watched") {
      return (
        <MdMovie className="text-success" style={{ width: 40, height: 40 }} />
      );
    }
  };

  return (
    <div
      className="position-absolute top-0 end-0 mt-2 me-2 d-flex"
      style={{ zIndex: 4 }}
    >
      <div className="options-delete position-relative me-2 d-flex justify-content-center align-items-center">
        <BsFillTrashFill className="stretched-link" onClick={handleShow} />
      </div>

      <form className="options-shelf-changer">
        <select value={value} onChange={handleChange}>
          <option disabled>Move to...</option>
          <option value="liked">Liked</option>
          <option value="favorite">Favorite</option>
          <option value="wantToWatch">Want to Watch</option>
          <option value="watched">Watched</option>
        </select>
      </form>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-light fs-5 fw-normal">
            Are you sure to remove the movie from collection
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row m-1">
            <div className="col-4">
              <img
                className="w-100 h-100"
                src={movie.image}
                alt={movie.title}
              />
            </div>
            <div className="col-8">
              <p className="text-dark">
                Title: <span className="text-light">{movie.title}</span>
              </p>
              <p className="text-dark">
                Rating: <span className="text-light">{movie.rate}</span>
              </p>
              <p className="text-dark">
                Category:{" "}
                <span className="text-warning">{movie.collectionType}</span>
              </p>
              <div className="d-flex justify-content-end">
                {IconTypeRender(movie.collectionType)}
              </div>
            </div>

            <div className="col-12 my-4 d-flex justify-content-end align-items-center">
              <Button
                className="me-2"
                variant="secondary"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button type="submit" variant="primary" onClick={handleDelete}>
                Remove from collection
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
