import { RECEIVE_DATA_NAME_BY_ID } from "actions/nameIdPages";

export default function nameIdPage(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DATA_NAME_BY_ID:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    default:
      return state;
  }
}
