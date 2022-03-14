import React, { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";

export default function Options({ isDelete }) {
  const [value, setValue] = useState("");

  const handleChange = value => {
    setValue(value);
  };

  const handleDelete = event => {
    alert("DELETE");
  };

  return (
    <div
      className="position-absolute top-0 end-0 mt-2 me-2 d-flex"
      style={{ zIndex: 4 }}
    >
      {isDelete && (
        <div className="options-delete position-relative me-2 d-flex justify-content-center align-items-center">
          <BsFillTrashFill className="stretched-link" onClick={handleDelete} />
        </div>
      )}

      <form className="options-shelf-changer">
        <select
          value={value}
          onChange={event => handleChange(event.target.value)}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">read</option>
          <option value="none">none</option>
        </select>
      </form>
    </div>
  );
}
