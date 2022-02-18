import React from "react";
import Button from "elements/Button";
import { useDispatch } from "react-redux";
import { saveParamsMovieIdCurrent } from "actions/movieIdPages";

export default function AvatarNames({ data, label, paramsMovieId }) {
  const dispatch = useDispatch();

  const saveParams = () => {
    dispatch(saveParamsMovieIdCurrent(paramsMovieId));
  };

  return (
    <div className="row mb-5">
      <div className="h4 mb-4">{label}</div>

      <div className="row">
        {data.map((actor, index) => {
          return (
            <div
              className="col-4 mb-4 d-flex flex-column align-items-center position-relative"
              key={`actor-${actor.id}-${index}`}
            >
              <img
                src={actor.image}
                className="rounded-circle mb-2"
                alt={actor.name}
                style={{ width: 70, height: 70, objectFit: "cover" }}
              />
              <Button
                className="btn button-link stretched-link p-0 m-0"
                type="link"
                href={`/name/${actor.id}`}
                onClick={() => saveParams()}
              >
                <p
                  className="text-light text-center lh-1 mb-1"
                  style={{ fontSize: "0.875em" }}
                >
                  {actor.name}
                </p>
              </Button>
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
