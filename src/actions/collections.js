export const ADD_MOVIE = "ADD_MOVIE";
export const REMOVE_MOVIE = "REMOVE_MOVIE";
export const UPDATE_MOVIE = "UPDATE_MOVIE";

export function addMovie(movie) {
  return {
    type: ADD_MOVIE,
    movie
  };
}

export function removeMovie(movie) {
  return {
    type: REMOVE_MOVIE,
    movie
  };
}

export function updateMovie(movie) {
  return {
    type: UPDATE_MOVIE,
    movie
  };
}
