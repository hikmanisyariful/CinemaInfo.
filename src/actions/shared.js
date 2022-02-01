import { getDataNowplaying } from "utils/api";
import { receiveDataHero, receiveDataTrending } from "actions/homePages";
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

async function getTrendingMovies() {
  try {
    // Get Movies Trending from TMDb
    const getMoviesTrending = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=411c54b702497fa5d5fb8406212cf8b9`
    );
    const moviesTrending = getMoviesTrending.data.results;

    // Get ID Movies and Rate asynchronously with map method
    async function getIdRate(movie) {
      // Get ID Movies
      const id = await axios.get(
        `https://imdb-api.com/en/API/SearchMovie/k_yzqwduy5/${movie.title}`
      );

      // Get Rating Movies
      const rating = await axios.get(
        `https://imdb-api.com/en/API/Ratings/k_yzqwduy5/${id.data.results[0].id}`
      );

      let data = {
        id: id.data.results[0].id,
        image: id.data.results[0].image,
        title: rating.data.title,
        rate: rating.data.imDb
      };

      return data;
    }

    const IdMoviesByIMDb = moviesTrending.map(movie => getIdRate(movie));
    const results = await Promise.all(IdMoviesByIMDb);

    return results;
  } catch (error) {
    console.log(error);
  }
}

export function handleInitialData() {
  return dispatch => {
    return getTrendingMovies().then(data => {
      dispatch(receiveDataTrending(data));
    });
  };
}
