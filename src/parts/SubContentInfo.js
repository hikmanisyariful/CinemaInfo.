import React, { useState } from "react";
import ShowMore from "react-show-more-list";

import Star from "elements/Star";
import { CgProfile } from "react-icons/cg";
import { MdOutlineNotInterested } from "react-icons/md";

export default function SubContentInfo({ data, className }) {
  return (
    <div className={className} style={{ height: "100%" }}>
      {/* <div className="row mb-5">
        <div className="col">
          <h3 className="h3 text-light mb-5">Sinopsis</h3>
          <div className="col-11">
            <p className="text-dark">{data.plot}</p>
          </div>
        </div>
      </div> */}
      <div className="row">
        <div className="col">
          <h3 className="h3 text-light mb-5">Reviews</h3>
          {data.reviews && data.reviews.length > 1 ? (
            <ShowMoreReviews reviews={data.reviews} />
          ) : (
            <div className="row mt-5">
              <div className="col justify-content-center align-items-center">
                <MdOutlineNotInterested style={{ width: 100, height: 100 }} />
                <p className="text-light fs-4">Nothing Reviews!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span
        onClick={toggleReadMore}
        className="read-or-hide text-info"
        style={{ cursor: "pointer" }}
      >
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

const ShowMoreReviews = ({ reviews }) => {
  return (
    <ShowMore items={reviews} by={3}>
      {({ current, onMore }) => (
        <>
          <div className="row">
            {current.map((review, index) => (
              <div
                className="col-12 mb-5"
                key={`avatar-${review.username}-${index}`}
              >
                <div className="row">
                  <div className="col-8">
                    <div className="row">
                      <div className="col-2 d-flex justify-content-center">
                        <CgProfile
                          className="text-dark"
                          style={{ width: 70, height: 70 }}
                        />
                      </div>
                      <div className="col-10">
                        <div className="text-light">{review.username}</div>
                        <div className="text-dark mb-2 fw-lighter">
                          {review.date}
                        </div>
                        <Star
                          value={Number(review.rate) / 2}
                          width={16}
                          height={16}
                          spacing={4}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-11">
                    <div className="text-light">{review.title}</div>
                    <div className="text-dark fw-lighter">
                      {/* {review.content} */}
                      <ReadMore>{review.content}</ReadMore>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {current.length !== reviews.length && (
            <div className="row justify-content-center">
              <div className="col-auto">
                <button
                  type="button"
                  className="btn btn-link text-light"
                  disabled={!onMore}
                  onClick={() => {
                    if (!!onMore) onMore();
                  }}
                >
                  Load More
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </ShowMore>
  );
};
