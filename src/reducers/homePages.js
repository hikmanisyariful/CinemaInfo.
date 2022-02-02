import {
  RECEIVE_DATA_HERO,
  RECEIVE_DATA_TRENDING,
  RECEIVE_DATA_NOW_PLAYING,
  RECEIVE_DATA_UPCOMING
} from "actions/homePages";

export default function homePages(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DATA_HERO:
      return {
        ...state,
        [action.payload.label]: action.payload.data
      };
    case RECEIVE_DATA_TRENDING:
      return {
        ...state,
        [action.payload.label]: action.payload.data
      };
    case RECEIVE_DATA_NOW_PLAYING:
      return {
        ...state,
        [action.payload.label]: action.payload.data
      };
    case RECEIVE_DATA_UPCOMING:
      return {
        ...state,
        [action.payload.label]: action.payload.data
      };
    default:
      return state;
  }
}
