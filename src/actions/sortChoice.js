import {
  updateDataMostPopularMovies,
  updateDataTop250Movies
} from "actions/topMoviesPage";
import {
  updateDataMostPopularSeries,
  updateDataTop250Series
} from "actions/topTvSeriesPage";

export function handleSortChoice(data) {
  return dispatch => {
    if (data.parentRoute === "topMovies") {
      if (data.childRoute === "mostPopular") {
        dispatch(updateDataMostPopularMovies(data.sortData));
      } else if (data.childRoute === "top250") {
        dispatch(updateDataTop250Movies(data.sortData));
      }
    } else if (data.parentRoute === "topSeries") {
      if (data.childRoute === "mostPopular") {
        dispatch(updateDataMostPopularSeries(data.sortData));
      } else if (data.childRoute === "top250") {
        dispatch(updateDataTop250Series(data.sortData));
      }
    }
  };
}
