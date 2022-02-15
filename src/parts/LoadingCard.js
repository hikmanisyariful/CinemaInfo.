import React from "react";

export default function LoadingCard() {
  const amountCards = [1, 2, 3, 4, 5, 6];
  return (
    <div className="container">
      <h3
        className="text-light placeholder-glow"
        style={{ marginBottom: "50px" }}
      >
        <span className="placeholder col-3 placeholder-lg"></span>
      </h3>
      <div className="row">
        {amountCards.map((number, index) => {
          return (
            <div className="col-2" key={`number-index-placeholder`}>
              <div
                className="card rounded"
                aria-hidden="true"
                style={{ background: "none" }}
              >
                <div
                  className="placeholder-glow d-flex flex-column align-items-center justify-content-around"
                  style={{ height: 260 }}
                >
                  <span
                    className="placeholder col-12 bg-dark"
                    style={{ height: 200 }}
                  ></span>
                  <span className="placeholder col-9 bg-light"></span>
                  <span className="placeholder col-4 bg-warning"></span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
