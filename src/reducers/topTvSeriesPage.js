import { RECEIVE_DATA_TV_SERIES } from "actions/topTvSeriesPage";

export default function topTvSeriesPage(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DATA_TV_SERIES:
      return {
        ...state,
        mostPopular: action.payload.mostPopular,
        top250: action.payload.top250
      };
    default:
      return state;
  }
}
