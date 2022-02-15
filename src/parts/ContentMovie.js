import React from "react";

export default function ContentMovie() {
  return (
    <div className="container ">
      <div className="row">
        {/* Column Left */}
        <div
          className="col-8"
          style={{ background: "pink", height: "1000px" }}
        ></div>
        {/* Column Right */}
        <div
          className="col-4"
          style={{ background: "green", height: "1000px" }}
        ></div>
      </div>
    </div>
  );
}
