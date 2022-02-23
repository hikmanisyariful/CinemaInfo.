import React from "react";

export default function TopTvSeries() {
  return (
    <div className="pages-test">
      <h2>TOP TV SERIES PAGE</h2>
      <table className="table table-hover mt-5 fixed_header">
        <thead>
          <tr>
            <th
              scope="col"
              className="col-2 text-center fs-5 fw-normal"
              id="rank"
            >
              Rank
            </th>
            <th
              scope="col"
              className="col-3 text-center fs-5 fw-normal"
              id="poster"
            >
              Poster
            </th>
            <th
              scope="col"
              className="col-4 text-center fs-5 fw-normal"
              id="desc"
            >
              Description
            </th>
            <th
              scope="col"
              className="col-3 text-center fs-5 fw-normal"
              id="info"
            >
              Info
            </th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
