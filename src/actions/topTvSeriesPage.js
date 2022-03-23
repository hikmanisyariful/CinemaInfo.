import axios from "axios";

export const RECEIVE_DATA_TV_SERIES = "RECEIVE_DATA_TV_SERIES";
export const UPDATE_DATA_MOST_POPULAR_SERIES =
  "UPDATE_DATA_MOST_POPULAR_SERIES";
export const UPDATE_DATA_TOP_250_SERIES = "UPDATE_DATA_TOP_250_SERIES";

export function receiveDataTvSeries(payload) {
  return {
    type: RECEIVE_DATA_TV_SERIES,
    payload
  };
}

export function updateDataMostPopularSeries(payload) {
  return {
    type: UPDATE_DATA_MOST_POPULAR_SERIES,
    payload
  };
}

export function updateDataTop250Series(payload) {
  return {
    type: UPDATE_DATA_TOP_250_SERIES,
    payload
  };
}

export async function getTvSeries() {
  const getMostPopularTvSeries = await axios.get(
    `https://imdb-api.com/en/API/MostPopularTVs/k_kksvvsqn`
  );
  const getTop250TvSeries = await axios.get(
    `https://imdb-api.com/en/API/Top250TVs/k_kksvvsqn`
  );

  return {
    mostPopular: getMostPopularTvSeries.data.items,
    top250: getTop250TvSeries.data.items
  };
}
