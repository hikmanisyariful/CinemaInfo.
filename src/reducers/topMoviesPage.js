import {
  RECEIVE_DATA_MOVIES,
  UPDATE_DATA_MOST_POPULAR_MOVIES,
  UPDATE_DATA_TOP_250_MOVIES
} from "actions/topMoviesPage";

export default function topMoviesPage(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DATA_MOVIES:
      return {
        ...state,
        mostPopular: action.payload.mostPopular,
        top250: action.payload.top250
      };
    case UPDATE_DATA_MOST_POPULAR_MOVIES:
      return {
        ...state,
        mostPopular: action.payload
      };
    case UPDATE_DATA_TOP_250_MOVIES:
      return {
        ...state,
        top250: action.payload
      };
    default:
      return state;
  }
}
