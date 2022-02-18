import React from "react";
import SubContentInfo from "parts/SubContentInfo";
import AvatarNames from "parts/AvatarNames";
import LabelCategories from "parts/LabelCategories";

export default function ContentMovie({ data, refDetailsMovie }) {
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
          <AvatarNames data={actorList} label={"Casts"} />
          <AvatarNames data={directorList} label={"Directors"} />

          <LabelCategories data={companyList} label={"Companies"} />
          <LabelCategories data={genreList} label={"Genres"} />
          <LabelCategories data={data.keywordList} label={"Keywords"} />
        </div>
      </div>
    </div>
  );
}
