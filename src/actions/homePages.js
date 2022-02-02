export const RECEIVE_DATA_HERO = "RECEIVE_DATA_HERO";
export const RECEIVE_DATA_TRENDING = "RECEIVE_DATA_TRENDING";
export const RECEIVE_DATA_NOW_PLAYING = "RECEIVE_DATA_NOW_PLAYING";
export const RECEIVE_DATA_UPCOMING = "RECEIVE_DATA_UPCOMING";

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

export function receiveDataNowPlaying(payload) {
  return {
    type: RECEIVE_DATA_NOW_PLAYING,
    payload
  };
}

export function receiveDataUpcoming(payload) {
  return {
    type: RECEIVE_DATA_UPCOMING,
    payload
  };
}
