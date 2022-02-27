import {
  RECEIVE_DATA_TV_SERIES,
  UPDATE_DATA_MOST_POPULAR_SERIES,
  UPDATE_DATA_TOP_250_SERIES
} from "actions/topTvSeriesPage";

export default function topSeriesPage(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DATA_TV_SERIES:
      return {
        ...state,
        mostPopular: action.payload.mostPopular,
        top250: action.payload.top250
      };
    case UPDATE_DATA_MOST_POPULAR_SERIES:
      return {
        ...state,
        mostPopular: action.payload
      };
    case UPDATE_DATA_TOP_250_SERIES:
      return {
        ...state,
        top250: action.payload
      };
    default:
      return state;
  }
}
