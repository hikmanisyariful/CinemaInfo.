import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

export default function Star({ className, value, height, width, spacing }) {
  // Function to find out remain of modulus
  const decimals = Number(value) % 1;

  // render star
  const star = [];
  let leftPos = 0;

  // Find out full star
  for (let index = 0; index < 5 && index < value - decimals; index++) {
    leftPos = leftPos + width;
    star.push(
      <div
        className="star"
        key={`star-${index}`}
        style={{
          left: index * width,
          height: height,
          width: width,
          marginRight: spacing
        }}
      ></div>
    );
  }

  // Find out decimal star
  if (decimals > 0 && value <= 5) {
    star.push(
      <div
        className="star"
        key={`starWithDecimal`}
        style={{
          left: leftPos,
          height: height,
          // width: decimals * width - spacing
          width: decimals * width - 3
        }}
      ></div>
    );
  }

  const starPlaceholder = [];
  for (let index = 0; index < 5; index++) {
    starPlaceholder.push(
      <div
        className="star placeholder"
        key={`starPlaceholder-${index}`}
        style={{
          left: index * width,
          height: height,
          width: width,
          marginRight: spacing
        }}
      ></div>
    );
  }

  return (
    <>
      <div
        className={["stars", className].join(" ")}
        style={{ height: height }}
      >
        {starPlaceholder}
        {star}
      </div>
    </>
  );
}

Star.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
  spacing: PropTypes.number
};
