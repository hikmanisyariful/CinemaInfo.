import axios from "axios";

export const RECEIVE_DATA_MOVIES = "RECEIVE_DATA_MOVIES";

export function receiveDataMovies(payload) {
  return {
    type: RECEIVE_DATA_MOVIES,
    payload
  };
}

export async function getMovies() {
  const getMostPopularMovies = await axios.get(
    `https://imdb-api.com/en/API/MostPopularMovies/k_hradeoac`
  );
  const getTop250Movies = await axios.get(
    `https://imdb-api.com/en/API/Top250Movies/k_hradeoac`
  );

  return {
    mostPopular: getMostPopularMovies.data.items,
    top250: getTop250Movies.data.items
  };
}
