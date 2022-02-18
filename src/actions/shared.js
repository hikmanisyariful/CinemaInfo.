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
      `https://imdb-api.com/en/API/SearchMovie/k_hradeoac/${topMovie.title}`
    );
    let idMovieIMDb = getMovieIMDb.data.results[0].id;

    // GET Data Detail Movie from IMDb
    const dataMovie = await axios.get(
      `https://imdb-api.com/en/API/Title/k_hradeoac/${idMovieIMDb}/Images,Trailer,Ratings,Wikipedia,`
    );

    // GET Data URL Youtube Trailer
    const youtubeTrailer = await axios.get(
      `https://imdb-api.com/en/API/YouTubeTrailer/k_hradeoac/${idMovieIMDb}`
    );

    const data = {
      id: dataMovie.data.id,
      title: dataMovie.data.title,
      plot: dataMovie.data.plot,
      thumbnailURL: dataMovie.data.trailer.thumbnailUrl,
      linkEmbed: dataMovie.data.trailer.linkEmbed,
      duration: dataMovie.data.runtimeStr,
      year: dataMovie.data.year,
      casts: dataMovie.data.stars,
      genres: dataMovie.data.genres,
      rating: dataMovie.data.imDbRating,
      youtubeTrailer: youtubeTrailer.data.videoUrl
    };

    return data;
  } catch (error) {
    console.log("===========", error);
  }
}

// Get ID Movies and Rate asynchronously with map method
async function getIdRate(movie) {
  // Get ID Movies
  const id = await axios.get(
    `https://imdb-api.com/en/API/SearchMovie/k_hradeoac/${movie.title}`
  );

  // Get Rating Movies
  const rating = await axios.get(
    `https://imdb-api.com/en/API/Ratings/k_hradeoac/${id.data.results[0].id}`
  );

  let data = {
    id: id.data.results[0].id,
    image: id.data.results[0].image,
    title: rating.data.title,
    rate: rating.data.imDb
  };

  return data;
}

function sortDataMovies(movies) {
  const data = movies.reduce((acc, curr) => {
    if (curr && curr.status === "fulfilled") {
      if (curr.value.title !== null) {
        acc.push(curr.value);
      }
    }
    return acc;
  }, []);
  return data;
}

async function getTrendingMovies() {
  try {
    // Get Movies Trending from TMDb
    const getMoviesTrending = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=411c54b702497fa5d5fb8406212cf8b9`
    );
    const moviesTrending = getMoviesTrending.data.results;

    const IdMoviesByIMDb = moviesTrending.map(movie => getIdRate(movie));
    const results = await Promise.allSettled(IdMoviesByIMDb);
    const data = sortDataMovies(results);

    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getNowPlayingMovies() {
  // Get Now Playing movies
  const moviesNowPlayingTixId = await getDataNowplaying();
  const moviesNowPlayingLoop = moviesNowPlayingTixId.map(movie =>
    getIdRate(movie)
  );
  const moviesNowPlaying = await Promise.allSettled(moviesNowPlayingLoop);
  const data = sortDataMovies(moviesNowPlaying);

  return data;
}

async function getUpcomingMovies() {
  // Get Upcoming movies
  const moviesUpcomingTixId = await getDataUpcoming();
  const moviesUpcomingLoop = moviesUpcomingTixId.map(movie => getIdRate(movie));
  const moviesUpcoming = await Promise.allSettled(moviesUpcomingLoop);
  const data = sortDataMovies(moviesUpcoming);

  return data;
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
        return getNowPlayingMovies();
      })
      .then(data => {
        dispatch(
          receiveDataNowPlaying({
            label: "nowPlaying",
            data: data
          })
        );
        return getUpcomingMovies();
      })
      .then(data => {
        dispatch(
          receiveDataUpcoming({
            label: "upcoming",
            data: data
          })
        );
      });
  };
}
