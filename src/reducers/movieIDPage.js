import {
  RECEIVE_DATA_MOVIE_BY_ID,
  SAVE_PARAMS_MOVIE_ID_CURRENT
} from "actions/movieIdPages";

export default function movieIDPage(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DATA_MOVIE_BY_ID:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case SAVE_PARAMS_MOVIE_ID_CURRENT:
      return {
        ...state,
        currentMovieId: [action.payload]
      };
    default:
      return state;
  }
}
