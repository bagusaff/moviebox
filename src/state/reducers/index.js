import { combineReducers } from "redux";
import MovieReducer from "./MovieReducer";

const reducers = combineReducers({
  movie: MovieReducer,
});

export default reducers;
