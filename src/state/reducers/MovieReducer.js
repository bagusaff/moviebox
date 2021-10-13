import {
  FETCHING_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILED,
  FETCH_DETAIL_SUCCESS,
  FETCH_MORE_MOVIES,
} from "../constants";

const initialState = {
  movies: [],
  movieDetail: {},
  isLoading: false,
  errMessage: "",
  searchResults: 0,
};

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_MOVIES:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.payload.Search,
        searchResults: action.payload.totalResults,
      };
    case FETCH_MORE_MOVIES:
      return {
        ...state,
        isLoading: false,
        movies: [...state.movies, ...action.payload.Search],
        searchResults: action.payload.totalResults,
      };
    case FETCH_MOVIES_FAILED:
      return {
        ...state,
        isLoading: false,
        movies: [],
        errMessage: action.payload.Error,
      };
    case FETCH_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movieDetail: action.payload,
      };
    default:
      return state;
  }
};

export default MovieReducer;
