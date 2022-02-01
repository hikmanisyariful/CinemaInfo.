import { getDataNowplaying } from "utils/api";
import { receiveDataHero } from "actions/homePages";
import axios from "axios";

async function getHeroData() {
  try {
    // Get Movies Now Playing TIX ID
    const moviesNowPlaying = await getDataNowplaying();

    // GET ID Movie from IMDb
    const getMovieIMDb = await axios.get(
      `https://imdb-api.com/en/API/SearchMovie/k_1y2hx2b3/${moviesNowPlaying.title}`
    );
    let idMovieIMDb = getMovieIMDb.data.results[0].id;

    // GET Data Detail Movie from IMDb
    const dataMovie = await axios.get(
      `https://imdb-api.com/en/API/Title/k_1y2hx2b3/${idMovieIMDb}/Images,Trailer,Ratings,Wikipedia,`
    );

    return dataMovie.data.results;
  } catch (error) {
    console.log("===========", error);
  }
}

export function handleInitialData() {
  return dispatch => {
    return getHeroData().then(dataHero => {
      dispatch(receiveDataHero(dataHero));
    });
  };
}
