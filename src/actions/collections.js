export const ADD_MOVIE = "ADD_MOVIE";
export const REMOVE_MOVIE = "REMOVE_MOVIE";
export const UPDATE_MOVIE = "UPDATE_MOVIE";

export function addMovie(movie) {
  return {
    type: ADD_MOVIE,
    movie
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
