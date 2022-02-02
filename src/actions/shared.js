import { getDataNowplaying, getDataUpcoming } from "utils/api";
import {
  receiveDataHero,
  receiveDataTrending,
  receiveDataNowPlaying,
  receiveDataUpcoming
} from "actions/homePages";
import axios from "axios";

async function getHeroData() {
  try {
    // Get Movies Now Playing TIX ID
    const moviesNowPlaying = await getDataNowplaying();

    // Reduce Logic for get top movie of movies based on rate
    const topMovie = moviesNowPlaying.reduce((acc, curr) => {
      const topRate = acc["rating_score"] > curr["rating_score"] ? acc : curr;
      return topRate;
    });

    // GET ID Movie from IMDb
    const getMovieIMDb = await axios.get(
      `https://imdb-api.com/en/API/SearchMovie/k_m8a8f7lf/${topMovie.title}`
    );
    let idMovieIMDb = getMovieIMDb.data.results[0].id;

    // GET Data Detail Movie from IMDb
    const dataMovie = await axios.get(
      `https://imdb-api.com/en/API/Title/k_m8a8f7lf/${idMovieIMDb}/Images,Trailer,Ratings,Wikipedia,`
    );

    return dataMovie.data;
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
        `https://imdb-api.com/en/API/SearchMovie/k_m8a8f7lf/${movie.title}`
      );

      // Get Rating Movies
      const rating = await axios.get(
        `https://imdb-api.com/en/API/Ratings/k_m8a8f7lf/${id.data.results[0].id}`
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

async function getCategoriesMovies() {
  const moviesNowPlaying = await getDataNowplaying();
  const moviesUpcoming = await getDataUpcoming();

  return {
    moviesNowPlaying,
    moviesUpcoming
  };
}

export function handleInitialData() {
  return dispatch => {
    return getHeroData()
      .then(data => {
        dispatch(receiveDataHero({ label: "heroSection", data }));
        return getTrendingMovies();
      })
      .then(data => {
        dispatch(receiveDataTrending({ label: "trending", data }));
        return getCategoriesMovies();
      })
      .then(data => {
        dispatch(
          receiveDataNowPlaying({
            label: "nowPlaying",
            data: data.moviesNowPlaying
          })
        );
        dispatch(
          receiveDataUpcoming({ label: "upcoming", data: data.moviesUpcoming })
        );
      });
  };
}
