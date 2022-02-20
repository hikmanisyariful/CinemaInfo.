import { SEARCH_MOVIES, SET_DEFAULT_MOVIES_SEARCH } from "actions/searchPage";

export default function searchPage(state = {}, action) {
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
