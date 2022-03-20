import React from "react";
import SubContentInfo from "parts/SubContentInfo";
import AvatarNames from "parts/AvatarNames";
import LabelCategories from "parts/LabelCategories";
import Pictures from "parts/Pictures";
import Star from "elements/Star";

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
      <div className="row mb-2">
        <div className="col-auto text-success ">{suitable(data.rating)}</div>
        <div className="col-auto text-dark">{data.year}</div>
        {data.contentRating && (
          <div className="col-auto text-dark">{data.contentRating}</div>
        )}

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

      <div className="row mb-5">
        <div className="col">
          <h3 className="h3 text-light mb-5">Sinopsis</h3>
          <div className="col-11">
            <p className="text-dark">{data.plot}</p>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Column Casts */}
        <div className="col-12 col-lg-4 order-lg-1" style={{ height: "100%" }}>
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

          <Pictures data={data} />
        </div>

        {/* Column Sinopsis */}
        <SubContentInfo className="col-12 col-lg-8" data={data} />
      </div>
    </div>
  );
}

function suitable(rating) {
  const percentage = Number(rating) * 10;
  return `${percentage}% suitable`;
}
