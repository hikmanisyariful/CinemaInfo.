import React from "react";
import Button from "elements/Button";

export default function LabelCategories({ data, label }) {
  return (
    <div className="row mb-5 mt-4 mt-lg-0">
      <div className="h4 mb-1 mb-lg-4">{label}</div>
      <div className="row">
        {data.map((category, index) => {
          return (
            <div
              className="col-auto bg-dark m-1 d-flex justify-content-center align-items-center text-black text-center rounded-pill position-relative"
              key={`category-${label}-${index}`}
            >
              {category}
            </div>
          );
        })}
      </div>
    </div>
  );
}
