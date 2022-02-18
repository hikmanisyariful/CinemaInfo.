import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "elements/Button";
import Footer from "parts/Footer";
import { handleGetDataName } from "actions/nameIdPages";

import { nameIdPage } from "assets/DummyData/nameIdPage";

export default function NameId() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const nameIdPage = useSelector(state => state.nameIdPage);
  const currentMovieId = useSelector(state => state.movieIDPage.currentMovieId);

  useEffect(() => {
    // dispatch(handleGetDataName(params.nameId));
  }, [dispatch, params]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToMovieId = () => {
    navigate(`/movie/${currentMovieId}`);
  };

  const getWords = summary => {
    const str1 = summary.split(" is ");
    const str2 = str1[1].split(",");
    const str3 = str2[0];
    return str3;
  };

  const renderNameId = (names, nameId) => {
    const idNameCurrent = Object.keys(names).filter(id => id === nameId);
    const dataName = names[idNameCurrent];

    if (dataName) {
      return (
        <div>
          <div className="container" style={{ marginTop: 150 }}>
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-8">
                    <span className="text-black fs-3 bg-white p-1 me-1 bg-opacity-75 fw-bolder rounded">
                      {dataName.name},{" "}
                    </span>
                    <span className="text-warning fs-3">
                      {getWords(dataName.summary)}, {dataName.awards}
                    </span>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-1"></div>
                  <div className="col-3">
                    <img
                      className="rounded ps-5 ms-3"
                      src={dataName.image}
                      alt={dataName.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />
                  </div>
                  <div className="col-7 ms-5">
                    <h2>Summary</h2>
                    <div className="p pe-5 mt-4 lh-lg fs-5 text-danger">
                      <span className="bg-light bg-opacity-25 p-1 fw-light">
                        {dataName.summary}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-1"></div>
                  <div className="col-3 mt-5">
                    <h2 className="text-warning">Known For</h2>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-2"></div>
                  <div className="col">
                    {dataName.knownFor.map((film, index) => {
                      return (
                        <div
                          className="row mb-4"
                          key={`known-for-${index}-${film.id}`}
                        >
                          <div className="col-1">
                            <p className="fs-5 pt-1">{film.year}</p>
                          </div>
                          <div className="col-auto border-start border-dark ps-4 ms-3">
                            <p className="fs-5 mb-0">{film.title}</p>
                            <p className="text-dark fs-5 mb-1">
                              Role : {film.role}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="row mt-5 justify-content-center">
                  <div className="col-auto mt-3">
                    <Button
                      className="btn button-primary bg-warning"
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
