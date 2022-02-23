import React from "react";
import Button from "elements/Button";

export default function NavigateTopSection() {
  return (
    <div className="row h-100 align-items-end">
      <div className="col-auto me-5 h-100">
        <div className="row gx-1">
          <div className="col-auto">
            <Button
              className="nav-link fs-4"
              type="link"
              href="/topMovies/mostPopular"
            >
              Most Popular
            </Button>
          </div>
          <div className="col-auto">
            <Button
              className="nav-link fs-4"
              type="link"
              href="/topMovies/top250"
            >
              Top 250
            </Button>
          </div>
        </div>
      </div>
      <div className="col-auto pb-1">
        <div className="row bg-light rounded">
          <div className="col-auto text-black pt-2">Sort by :</div>
          <div className="col-auto">
            <select
              className="form-select rounded"
              aria-label="Default select example"
            >
              <option value="1">Top Rank</option>
              <option value="2">Lowest Rank</option>
              <option value="3">Latest Year</option>
              <option value="3">Oldest Year</option>
            </select>
          </div>
        </div>
      </div>
      <div className="col-auto ms-auto text-danger top-title">Movies</div>
    </div>
  );
}
