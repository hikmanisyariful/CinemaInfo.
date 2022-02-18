import { combineReducers } from "redux";
import homePages from "./homePages";
import movieIDPage from "./movieIDPage";
import nameIdPage from "./nameIdPage";

export default combineReducers({
  homePages,
  movieIDPage,
  nameIdPage
});
