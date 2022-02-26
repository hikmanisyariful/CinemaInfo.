import axios from "axios";

export const RECEIVE_DATA_TV_SERIES = "RECEIVE_DATA_TV_SERIES";

export function receiveDataTvSeries(payload) {
  return {
    type: RECEIVE_DATA_TV_SERIES,
    payload
  };
}

export async function getTvSeries() {
  const getMostPopularTvSeries = await axios.get(
    `https://imdb-api.com/en/API/MostPopularTVs/k_hradeoac`
  );
  const getTop250TvSeries = await axios.get(
    `https://imdb-api.com/en/API/Top250TVs/k_hradeoac`
  );

  return {
    mostPopular: getMostPopularTvSeries.data.items,
    top250: getTop250TvSeries.data.items
  };
}
