import React, { useState } from "react";
import Star from "elements/Star";
import { CgProfile } from "react-icons/cg";

export default function ContentMovie({ data }) {
  return (
    <div className="container ">
      <div className="row">
        {/* Column Left */}
        <div className="col-8" style={{ height: "1000px" }}>
          <div className="row mb-2">
            <div className="col-auto text-success ">
              {suitable(data.rating)}
            </div>
            <div className="col-auto text-dark">{data.year}</div>
            <div className="col-auto text-dark">
              {ageRate(data.contentRating)}
            </div>
            <div className="col-auto text-dark">{data.duration}</div>
          </div>
          <div className="row mb-5">
            <div className="col">
              <Star
                value={Number(data.rating / 2)}
                width={20}
                height={20}
                spacing={4}
              />
            </div>
          </div>
          <div className="row mb-3"></div>
          <div className="row">
            <div className="col">
              <h3 className="h3 text-light mb-5">Reviews</h3>
              <div className="row">
                {data.reviews.map((review, index) => {
                  return (
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
                              <div className="text-light">
                                {review.username}
                              </div>
                              <div className="text-dark mb-2 fw-lighter">
                                {review.date}
                              </div>
                              <Star
                                value={Number(review.rate / 2)}
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
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* Column Right */}
        <div
          className="col-4"
          style={{ background: "green", height: "1000px" }}
        ></div>
      </div>
    </div>
  );
}

function suitable(rating) {
  const percentage = Number(rating) * 10;
  return `${percentage}% suitable`;
}

function ageRate(contentRating) {
  const getAge = contentRating.split("-");
  if (getAge.length > 1) {
    return `${getAge[1]}+`;
  } else {
    return `SU`;
  }
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
      <span onClick={toggleReadMore} className="read-or-hide text-light">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};
