import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PaginateTableMostPopular from "parts/PaginateTableMostPopular";
import PaginateTableTop250 from "parts/PaginateTableTop250";
// import { topMovieSeries } from "assets/DummyData/topMoviePage";

export default function TvSeries() {
  let params = useParams();
  let tvSeries = useSelector(state => state.topTvSeriesPage[params.category]);

  return (
    <div>
      {tvSeries && (
        <div>
          {params.category === "mostPopular" ? (
            <PaginateTableMostPopular itemsPerPage={10} items={tvSeries} />
          ) : (
            <PaginateTableTop250 itemsPerPage={10} items={tvSeries} />
          )}
        </div>
      )}
    </div>
  );
}
