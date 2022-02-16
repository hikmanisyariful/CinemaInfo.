import React from "react";

export default function AvatarNames({ data, label }) {
  return (
    <div className="row mb-5">
      <div className="h4 mb-4">{label}</div>

      <div className="row">
        {data.map((actor, index) => {
          return (
            <div
              className="col-4 mb-4 d-flex flex-column  align-items-center"
              key={`actor-${actor.id}-${index}`}
            >
              <img
                src={actor.image}
                className="rounded-circle mb-2"
                alt={actor.name}
                style={{ width: 70, height: 70, objectFit: "cover" }}
              />
              <p
                className="text-light text-center mb-2 lh-1"
                style={{ fontSize: "0.875em" }}
              >
                {actor.name}
              </p>
              {actor.asCharacter && (
                <p
                  className="text-dark text-center lh-1"
                  style={{ fontSize: "0.875em" }}
                >
                  {actor.asCharacter}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
