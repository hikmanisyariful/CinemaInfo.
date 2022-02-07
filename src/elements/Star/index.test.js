import React from "react";
import { render } from "@testing-library/react";
import Star from "./index";

test("Should have props [value, hight, width, spacing]", () => {
  const height = 35,
    width = 35,
    spacing = 4;

  const { container } = render(
    <Star width={width} height={height} spacing={spacing} value={3.6} />
  );
  const startYellow = "div.stars div.star:not(.placeholder)";

  expect(container.querySelector("div.stars")).toBeInTheDocument();
  expect(container.querySelector("div.stars")).toHaveAttribute(
    "style",
    expect.stringContaining(`height: ${height}px`)
  );

  expect(container.querySelector(startYellow)).toBeInTheDocument();
  expect(container.querySelector(startYellow)).toHaveAttribute(
    "style",
    expect.stringContaining(`width: ${width}px`)
  );
  expect(container.querySelector(startYellow)).toHaveAttribute(
    "style",
    expect.stringContaining(`height: ${height}px`)
  );
  expect(container.querySelector(startYellow)).toHaveAttribute(
    "style",
    expect.stringContaining(`margin-right: ${spacing}px`)
  );
});
