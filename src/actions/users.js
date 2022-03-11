export const ADD_USER = "REGISTER_USER";
export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const REMOVE_AUTHED_USER = "REMOVE_AUTHED_USER";

export function addUser(payload) {
  return {
    type: ADD_USER,
    payload
  };
}

export function setAuthedUser(email) {
  return {
    type: SET_AUTHED_USER,
    email
  };
}

export function removeAuthedUser(email) {
  return {
    type: REMOVE_AUTHED_USER,
    email
  };
}
