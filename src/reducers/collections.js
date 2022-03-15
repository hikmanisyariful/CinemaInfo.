import { ADD_MOVIE, REMOVE_MOVIE, UPDATE_MOVIE } from "actions/collections";

export default function collections(state = [], action) {
  switch (action.type) {
    case ADD_MOVIE:
      let newCollections = state.concat([action.movie]);
      return newCollections;
    case REMOVE_MOVIE:
      let renewCollections = state.filter(
        movie => movie.id !== action.movie.id
      );
      return renewCollections;
    case UPDATE_MOVIE:
      let prevMovie = state.find(movie => movie.id === action.movie.id);
      let updateMovie = Object.assign(prevMovie, action.movie);
      let moviesSelection = state.filter(movie => movie.id !== action.movie.id);
      let updateCollection = moviesSelection.concat([updateMovie]);
      return updateCollection;

    default:
      return state;
  }
}
