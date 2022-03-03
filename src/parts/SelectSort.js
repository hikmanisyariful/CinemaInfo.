import React from "react";
import { useParams } from "react-router-dom";

export default function SelectSort({ value, handleChange }) {
  const params = useParams();

  return (
    <div className="col-auto pb-1">
      <div className="row bg-light rounded">
        <div className="col-auto text-black pt-2">Sort by :</div>
        <div className="col-auto">
          <select
            className="form-select rounded"
            aria-label="Default select example"
            value={value}
            onChange={e => handleChange(e)}
            type="submit"
          >
            <option value="topRank">Top Rank</option>
            <option value="latestYear">Latest Year</option>
            <option value="oldestYear">Oldest Year</option>
            {params.category === "mostPopular" && (
              <option value="highestRate">Highest Rate</option>
            )}
            <option value="lowestRate">Lowest Rate</option>
          </select>
        </div>
        {/* <div className="col-auto">{value}</div> */}
      </div>
    </div>
  );
}
