import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "elements/Button";
import Footer from "parts/Footer";
import { handleGetDataName } from "actions/nameIdPages";

// import { nameIdPage } from "assets/DummyData/nameIdPage";

export default function NameId() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nameIdPage = useSelector(state => state.nameIdPage);

  useEffect(() => {
    dispatch(handleGetDataName(params.nameId));
  }, [dispatch, params]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToMovieId = () => {
    navigate(-1);
  };

  const renderNameId = (names, nameId) => {
    const idNameCurrent = Object.keys(names).filter(id => id === nameId);
    const dataName = names[idNameCurrent];

    if (dataName) {
      return (
        <div>
          <div className="container" style={{ marginTop: 150 }}>
            <div className="row">
              <div className="col offset-lg-1">
                {/* ROW 1 */}
                <div className="row">
                  <div className="col-11 col-md-10 col-lg-8">
                    <span className="text-black font-size-fs-3 bg-white p-1 me-1 bg-opacity-75 fw-bolder rounded">
                      {dataName.name},{" "}
                    </span>
                    <span className="text-warning font-size-fs-3">
                      is {dataName.role}
                      {dataName.awards !== ""
                        ? `, with ${dataName.awards}`
                        : "."}
                    </span>
                  </div>
                </div>
                {/* ROW 2 */}
                <div className="row mt-3 mt-md-5">
                  {/* Image */}
                  <div className="col-6 offset-3 col-md-3 offset-md-0 p-3 p-md-0 mb-5 mb-md-0">
                    <img
                      className="rounded ps-0 ps-md-1 ps-lg-5 ms-0 ms-md-3"
                      src={dataName.image}
                      alt={dataName.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />
                  </div>
                  {/* summary */}
                  <div className="col-12 col-md-8 ms-1 ms-md-5">
                    <h2 className="font-size-fs-3">Summary</h2>
                    <div className="p pe-2 pe-md-5 mt-4 lh-lg text-danger font-size-fs-5">
                      {dataName.summary === "" ? (
                        <span className="bg-light bg-opacity-25 p-1 fw-light">
                          Nothing summary!
                        </span>
                      ) : (
                        <span className="bg-light bg-opacity-25 p-1 fw-light">
                          {dataName.summary}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* ROW-3 */}
                <div className="row mt-3 mt-md-5">
                  <div className="col-6 col-lg-3 mt-5">
                    <h2 className="text-warning font-size-fs-3">Known For</h2>
                  </div>
                </div>

                {/* ROW-4 */}
                <div className="row mt-3 mt-md-5">
                  <div className="col offset-1">
                    {dataName.knownFor.map((film, index) => {
                      return (
                        <div
                          className="row mb-4"
                          key={`known-for-${index}-${film.id}`}
                        >
                          <div className="col-12 col-md-1">
                            <p className="font-size-fs-5 pt-1">{film.year}</p>
                          </div>
                          <div className="col-auto col-md-auto border-start border-dark ps-4 ms-3">
                            <Button
                              type="link"
                              className="btn button-link d-flex justify-content-start font-size-fs-5 ps-0"
                              href={`/movie/${film.id}`}
                            >
                              {film.title}
                            </Button>

                            <p className="text-dark font-size-fs-5 mb-1">
                              Role : {film.role}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* ROW-6 */}
                <div className="row mt-5 justify-content-center">
                  <div className="col-auto mt-3">
                    <Button
                      className="btn button-primary bg-warning px-5"
                      onClick={() => handleBackToMovieId()}
                    >
                      Back
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
    }
  };

  return <div>{renderNameId(nameIdPage, params.nameId)}</div>;
}
