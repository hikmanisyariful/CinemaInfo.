export const RECEIVE_DATA_HERO = "RECEIVE_DATA_HERO";
export const RECEIVE_DATA_TRENDING = "RECEIVE_DATA_TRENDING";
export const RECEIVE_DATA_MOVIES_PLAYING = "RECEIVE_DATA_MOVIES_PLAYING";

export function receiveDataHero(payload) {
  return {
    type: RECEIVE_DATA_HERO,
    payload
  };
}

export function receiveDataTrending(payload) {
  return {
    type: RECEIVE_DATA_TRENDING,
    payload
  };
}

export function receiveDataMoviesPlaying(payload) {
  return {
    type: RECEIVE_DATA_MOVIES_PLAYING,
    payload
  };
}
