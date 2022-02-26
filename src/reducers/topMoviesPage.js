import { RECEIVE_DATA_MOVIES } from "actions/topMoviesPage";

export default function topMoviesPage(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DATA_MOVIES:
      return {
        ...state,
        mostPopular: action.payload.mostPopular,
        top250: action.payload.top250
      };
    default:
      return state;
  }
}
