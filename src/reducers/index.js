import { combineReducers } from "redux";
import homePages from "./homePages";
import movieIDPage from "./movieIDPage";
import nameIdPage from "./nameIdPage";
import searchPage from "./searchPage";
import topMoviesPage from "./topMoviesPage";
import topTvSeriesPage from "./topTvSeriesPage";

export default combineReducers({
  homePages,
  movieIDPage,
  nameIdPage,
  searchPage,
  topMoviesPage,
  topTvSeriesPage
});
