import axios from "axios";

export const SEARCH_MOVIES = "SEARCH_MOVIES";
export const SET_DEFAULT_MOVIES_SEARCH = "SET_DEFAULT_MOVIES_SEARCH";

export function searchMovies(payload) {
  return {
    type: SEARCH_MOVIES,
    payload
  };
}

export function setDefaultMoviesSearch(payload) {
  return {
    type: SET_DEFAULT_MOVIES_SEARCH,
    payload
  };
}

const formatResult = movies => {
  return {
    id: movies.id,
    image: movies.image,
    title: movies.title
  };
};

async function getSearchMovies(data) {
  let movies = [];
  switch (data.category) {
    case "title":
      const getMoviesByTitle = await axios.get(
        `https://imdb-api.com/en/API/SearchMovie/k_yzqwduy5/${data.search}`
      );
      movies = getMoviesByTitle.data.results.map(movie => {
        return formatResult(movie);
      });
      break;

    case "actor":
      const getIdNameActor = await axios.get(
        `https://imdb-api.com/en/API/SearchName/k_yzqwduy5/${data.search}`
      );
      const idName = getIdNameActor.data.results[0].id;
      const getMoviesByIdName = await axios.get(
        `https://imdb-api.com/en/API/Name/k_yzqwduy5/${idName}`
      );

      movies = getMoviesByIdName.data.knownFor.map(movie => {
        return formatResult(movie);
      });
      break;

    case "genre":
      const getMoviesByGenre = await axios.get(
        `https://imdb-api.com/API/AdvancedSearch/k_yzqwduy5?genres=${data.search}`
      );
      movies = getMoviesByGenre.data.results.map(movie => {
        return formatResult(movie);
      });
      break;

    case "keyword":
      const getMoviesByKeyword = await axios.get(
        `https://imdb-api.com/API/AdvancedSearch/k_yzqwduy5?keywords=${data.search}`
      );
      movies = getMoviesByKeyword.data.results.map(movie => {
        return formatResult(movie);
      });
      break;

    default:
      movies = [];
  }
  return movies;
}

export function handleSearchMovies(data) {
  return dispatch => {
    return getSearchMovies(data).then(data => {
      dispatch(searchMovies(data));
    });
  };
}
