import React from "react";
import ButtonLookPictures from "parts/ButtonLookPictures";

export default function Pictures({ data }) {
  return (
    <div
      className="container position-relative posters-wrap"
      style={{ width: "100%", height: 200 }}
    >
      <div className="row p-0 m-0 w-100 h-100">
        {data.images &&
          data.images.map((image, index) => {
            if (index < 4) {
              return (
                <div
                  className={`${index === 0 ? "col-12" : "col-4"} px-0 h-50`}
                  key={`poster-picture-${index}`}
                >
                  <img
                    src={image.image}
                    alt={image.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      overflow: "hidden"
                    }}
                  />
                </div>
              );
            }
          })}
      </div>
      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center background-posters">
        <div className="col-auto">
          <ButtonLookPictures data={data} />
        </div>
      </div>
      {/* <div className="background-posters position-absolute top-0 justify-content-center align-items-center row m-0">
          <div className="col-auto">
            <ButtonLookPictures data={data} />
          </div>
        </div> */}
      {/* <div className="row rounded w-100">
        {data.images &&
          data.images.map((image, index) => {
            if (index < 4) {
              return (
                <div
                  className={`${index === 0 ? "col-12" : "col-4"} px-0 h-50`}
                  key={`poster-picture-${index}`}
                >
                  <img
                    src={image.image}
                    alt={image.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "fill",
                      overflow: "hidden"
                    }}
                  />
                </div>
              );
            }
          })}
      </div> */}
    </div>
  );
}
