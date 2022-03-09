import { SEARCH_MOVIES, SET_DEFAULT_MOVIES_SEARCH } from "actions/searchPage";
import { homePages } from "assets/DummyData/homePages";

export default function searchPage(
  state = { defaultMovies: homePages.nowPlaying },
  action
) {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    case SET_DEFAULT_MOVIES_SEARCH:
      return {
        ...state,
        defaultMovies: action.payload
      };
    default:
      return state;
  }
}
