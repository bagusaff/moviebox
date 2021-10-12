import {
  FETCHING_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILED,
} from "../constants";

const initialState = {
  movies: [],
  movieDetail: {},
  isLoading: false,
  errMessage: "",
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
        movies: action.payload,
      };
    case FETCH_MOVIES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMessage: action.payload,
      };
    default:
      return state;
  }
};

export default MovieReducer;
