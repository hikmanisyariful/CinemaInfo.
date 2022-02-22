export const SAVE_TOP_MOVIES = "SAVE_TOP_MOVIES";
export const SAVE_MOST_POPULAR_MOVIES = "SAVE_MOST_POPULAR_MOVIES";
export const SAVE_TOP_TV_SERIES = "SAVE_TOP_TV_SERIES";
export const SAVE_MOST_POPULAR_TV_SERIES = "SAVE_MOST_POPULAR_TV_SERIES";

export function saveTopMovies(payload) {
  return {
    type: SAVE_TOP_MOVIES,
    payload
  };
}

export function saveMostPopularMovies(payload) {
  return {
    type: SAVE_MOST_POPULAR_MOVIES,
    payload
  };
}

export function saveTopTvSeries(payload) {
  return {
    type: SAVE_TOP_TV_SERIES,
    payload
  };
}

export function saveMostPopularTvSeries(payload) {
  return {
    type: SAVE_MOST_POPULAR_TV_SERIES,
    payload
  };
}
