import axios from "axios";

export const RECEIVE_DATA_MOVIE_BY_ID = "RECEIVE_DATA_MOVIE_BY_ID";

export function receiveDataMovieById(payload) {
  return {
    type: RECEIVE_DATA_MOVIE_BY_ID,
    payload
  };
}

const formatData = (data, youtube, reviews, directors) => {
  const dataMovie = {
    id: data.id,
    title: data.title,
    youtubeTrailer: youtube.videoUrl,
    plot: data.plot,
    year: data.year,
    rating: data.ratings.imDb,
    contentRating: data.contentRating,
    duration: data.runtimeStr,
    wikipediaUrl: data.wikipedia.url,
    thumbnailURL: data.trailer.thumbnailUrl,
    images: data.images.items,
    directorList: directors,
    actorList: data.actorList,
    genreList: data.genreList,
    companyList: data.companyList,
    keywordList: data.keywordList,
    reviews: reviews
  };

  return dataMovie;
};

async function getDataNameById(nameId) {
  const getDataName = await axios.get(
    `https://imdb-api.com/en/API/Name/k_zj0gxvlc/${nameId}`
  );
  const data = getDataName.data;

  return {
    id: data.id,
    name: data.name,
    image: data.image
  };
}

async function getDataMovie(movieId) {
  const getFullData = await axios.get(
    `https://imdb-api.com/en/API/Title/k_zj0gxvlc/${movieId}/Images,Trailer,Ratings,Wikipedia,`
  );
  const fullDataMovie = getFullData.data;

  const getYoutubeData = await axios.get(
    `https://imdb-api.com/en/API/YouTubeTrailer/k_zj0gxvlc/${movieId}`
  );
  const youtubeData = getYoutubeData.data;

  const getDirectorList = fullDataMovie.directorList.map(director =>
    getDataNameById(director.id)
  );
  const directorListPromise = await Promise.allSettled(getDirectorList);
  const directorList = directorListPromise.map(director => {
    return director.value;
  });

  const getReviews = await axios.get(
    `https://imdb-api.com/en/API/Reviews/k_zj0gxvlc/${movieId}`
  );
  const reviewsData = getReviews.data.items;

  const dataManipulation = formatData(
    fullDataMovie,
    youtubeData,
    reviewsData,
    directorList
  );

  return dataManipulation;
}

export function handleGetDataMovie(movieId) {
  // console.log("DI ACTION", movieId);
  return dispatch => {
    return getDataMovie(movieId).then(data => {
      dispatch(receiveDataMovieById(data));
    });
  };
}
