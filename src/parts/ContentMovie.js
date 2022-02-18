import React from "react";
import SubContentInfo from "parts/SubContentInfo";
import AvatarNames from "parts/AvatarNames";
import LabelCategories from "parts/LabelCategories";
import Button from "elements/Button";
import ButtonLookPictures from "parts/ButtonLookPictures";

export default function ContentMovie({ data, refDetailsMovie, paramsMovieId }) {
  const actorList =
    data.actorList.length > 6 ? data.actorList.slice(0, 6) : data.actorList;

  const directorList =
    data.directorList.length > 3
      ? data.directorList.slice(0, 3)
      : data.directorList;

  const companyList = data.companyList.map(company => {
    return company.name;
  });

  const genreList = data.genreList.map(genre => {
    return genre.value;
  });

  return (
    <div className="container mb-5" ref={refDetailsMovie}>
      <div className="row">
        {/* Column Left */}
        <SubContentInfo data={data} />
        {/* Column Right */}
        <div className="col-4" style={{ height: "100%" }}>
          <AvatarNames
            data={actorList}
            label={"Casts"}
            paramsMovieId={paramsMovieId}
          />
          <AvatarNames
            data={directorList}
            label={"Directors"}
            paramsMovieId={paramsMovieId}
          />

          <LabelCategories data={companyList} label={"Companies"} />
          <LabelCategories data={genreList} label={"Genres"} />
          <LabelCategories data={data.keywordList} label={"Keywords"} />

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
                <div className="col-12 px-0">
                  <img
                    src="https://imdb-api.com/images/original/MV5BNGNjMWU1OTUtZTQ4ZS00ZjMzLTgzMDQtMTM3MjQxMmQ3NzdhXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_Ratio1.8400_AL_.jpg"
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "fill"
                    }}
                  />
                </div>
                <div className="col-4 px-0">
                  <img
                    src="https://imdb-api.com/images/original/MV5BNjczMTc5YjEtNmQ4YS00MzFmLWI1ZDAtM2MxYzE4NGM1NTdhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio1.4600_AL_.jpg"
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "fill"
                    }}
                  />
                </div>
                <div className="col-4 px-0">
                  <img
                    src="https://imdb-api.com/images/original/MV5BMWRiZGQ1NDMtODQ2OS00MDlhLWJkZGYtM2ZmNjlhZThjOWRmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio1.0000_AL_.jpg"
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "fill"
                    }}
                  />
                </div>
                <div className="col-4 px-0">
                  <img
                    src="https://imdb-api.com/images/original/MV5BNjczMTc5YjEtNmQ4YS00MzFmLWI1ZDAtM2MxYzE4NGM1NTdhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio1.4600_AL_.jpg"
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "fill"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
