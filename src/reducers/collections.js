import { ADD_MOVIE, REMOVE_MOVIE, UPDATE_MOVIE } from "actions/collections";

const initialStateCollection = {
  liked: [],
  favorite: [],
  wantToWatch: [],
  watched: []
};

export default function collections(state = initialStateCollection, action) {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        [action.collectionType]: state[action.collectionType].concat([
          action.movie
        ])
      };
    case REMOVE_MOVIE:
      return {
        ...state,
        [action.collectionType]: state[action.collectionType].filter(
          movieId => movieId !== action.movie.id
        )
      };
    case UPDATE_MOVIE:
      return {
        ...state,
        [action.prevCollectionType]: state[action.prevCollectionType].filter(
          movieId => movieId !== action.movie.id
        ),
        [action.nextCollectionType]: state[action.nextCollectionType].concat([
          action.movie
        ])
      };
    default:
      return state;
  }
}
