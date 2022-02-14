import { RECEIVE_DATA_MOVIE_BY_ID } from "actions/movieIdPages";

export default function movieIDPage(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DATA_MOVIE_BY_ID:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    default:
      return state;
  }
}
