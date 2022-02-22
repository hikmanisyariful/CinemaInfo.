import React from "react";
import ButtonLookPictures from "parts/ButtonLookPictures";

export default function Pictures({ data }) {
  return (
    <div
      className="container-fluid "
      style={{ marginTop: 70, marginBottom: 50 }}
    >
      <div className="posters-wrap position-relative mt-5 me-5 row">
        <div className="background-posters position-absolute top-0 justify-content-center align-items-center row m-0">
          <div className="col-auto">
            <ButtonLookPictures data={data} />
          </div>
        </div>
        <div className="row rounded posters">
          {data.images &&
            data.images.map((image, index) => {
              if (index < 4) {
                return (
                  <div
                    className={`${index === 0 ? "col-12" : "col-4"} px-0`}
                    key={`poster-picture-${index}`}
                  >
                    <img
                      src={image.image}
                      alt={image.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "fill"
                      }}
                    />
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
}
