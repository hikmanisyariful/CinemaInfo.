export const ADD_MOVIE = "ADD_MOVIE";
export const REMOVE_MOVIE = "REMOVE_MOVIE";
export const UPDATE_MOVIE = "UPDATE_MOVIE";

export function addMovie(payload) {
  return {
    type: ADD_MOVIE,
    payload
  };
}

export function removeMovie(payload) {
  return {
    type: REMOVE_MOVIE,
    payload
  };
}

export function updateMovie(payload) {
  return {
    type: UPDATE_MOVIE,
    payload
  };
}
