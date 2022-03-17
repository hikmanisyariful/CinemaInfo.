import { ADD_USER, SET_AUTHED_USER, REMOVE_AUTHED_USER } from "actions/users";
import { ADD_MOVIE, REMOVE_MOVIE, UPDATE_MOVIE } from "actions/collections";

const initialState = {
  users: {
    "10001@mail.com": {
      email: "10001@mail.com",
      password: "12345678",
      collections: []
    },
    "10002@mail.com": {
      email: "10002@mail.com",
      password: "12345678",
      collections: []
    }
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
    case ADD_MOVIE:
      return {
        ...state,
        users: {
          ...state.users,
          [action.movie.userId]: {
            ...state.users[action.movie.userId],
            collections: state.users[action.movie.userId].collections.concat([
              action.movie
            ])
          }
        }
      };
    default:
      return state;
  }
}
