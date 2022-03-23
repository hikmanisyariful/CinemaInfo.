import React from "react";
import { useParams } from "react-router-dom";

export default function SelectSort({ value, handleChange, isChecked }) {
  const params = useParams();

  return (
    <div className="col-auto offset-2 offset-sm-0 mt-5 mt-lg-0 pb-3 order-last">
      <div className="row bg-light rounded">
        <div className="col-auto text-black pt-2">Sort by :</div>
        <div className="col-auto">
          <select
            className="form-select rounded"
            aria-label="Default select example"
            value={value}
            onChange={e => handleChange(e)}
            type="submit"
            checked={isChecked === value}
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
