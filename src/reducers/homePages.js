import {
  RECEIVE_DATA_HERO,
  RECEIVE_DATA_TRENDING,
  RECEIVE_DATA_MOVIES_PLAYING
} from "actions/homePages";

export default function homePages(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DATA_HERO:
      return {
        ...state,
        ...action.payload
      };
    case RECEIVE_DATA_TRENDING:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
