import axios from "axios";

export const RECEIVE_DATA_MOVIES = "RECEIVE_DATA_MOVIES";
export const UPDATE_DATA_MOST_POPULAR_MOVIES =
  "UPDATE_DATA_MOST_POPULAR_MOVIES";
export const UPDATE_DATA_TOP_250_MOVIES = "UPDATE_DATA_TOP_250_MOVIES";
export const IS_UPDATED_MOVIES = "IS_UPDATED_MOVIES";

export function receiveDataMovies(payload) {
  return {
    type: RECEIVE_DATA_MOVIES,
    payload
  };
}

export function updateDataMostPopularMovies(payload) {
  return {
    type: UPDATE_DATA_MOST_POPULAR_MOVIES,
    payload
  };
}

export function updateDataTop250Movies(payload) {
  return {
    type: UPDATE_DATA_TOP_250_MOVIES,
    payload
  };
}

export function isUpdatedMovies() {
  return {
    type: IS_UPDATED_MOVIES
  };
}

export async function getMovies() {
  const getMostPopularMovies = await axios.get(
    `https://imdb-api.com/en/API/MostPopularMovies/k_d22q4jgu`
  );
  const getTop250Movies = await axios.get(
    `https://imdb-api.com/en/API/Top250Movies/k_d22q4jgu`
  );

  return {
    mostPopular: getMostPopularMovies.data.items,
    top250: getTop250Movies.data.items
  };
}
