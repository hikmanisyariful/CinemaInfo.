import { ADD_USER, SET_AUTHED_USER, REMOVE_AUTHED_USER } from "actions/users";

const initialState = {
  users: {
    "10001@mail.com": { email: "10001@mail.com", password: "12345678" },
    "10002@mail.com": { email: "10002@mail.com", password: "12345678" }
  },
  authedUser: null
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: {
          ...state.users,
          [action.payload.email]: action.payload
        }
      };
    case SET_AUTHED_USER:
      return {
        ...state,
        authedUser: action.email
      };
    case REMOVE_AUTHED_USER:
      return {
        ...state,
        authedUser: action.email
      };
    default:
      return state;
  }
}
