import axios from "axios";
import {
  FETCHING_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILED,
  FETCH_DETAIL_SUCCESS,
  FETCH_MORE_MOVIES,
} from "../constants";

const API_URL = process.env.REACT_APP_API_URL;

export const searchMovies = (keyword, page) => (dispatch) => {
  // Set the loading state to true while fetching data
  dispatch({ type: FETCHING_MOVIES });

  // Fetching from the API
  if (page > 1) {
    axios
      .get(API_URL + `&s=${keyword}&page=${page}`)
      .then((res) => {
        if (res.data.Response) {
          dispatch({ type: FETCH_MORE_MOVIES, payload: res.data });
        } else {
          dispatch({ type: FETCH_MOVIES_FAILED, payload: res.data });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    axios
      .get(API_URL + `&s=${keyword}`)
      .then((res) => {
        if (res.data.Response) {
          dispatch({ type: FETCH_MOVIES_SUCCESS, payload: res.data });
        } else {
          dispatch({ type: FETCH_MOVIES_FAILED, payload: res.data });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export const fetchMovieDetail = (id) => (dispatch) => {
  // Set the loading state to true while fetching data
  dispatch({ type: FETCHING_MOVIES });
  axios
    .get(API_URL + `&i=${id}`)
    .then((res) => {
      dispatch({ type: FETCH_DETAIL_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
