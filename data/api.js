// import our axios config file
import axios from "./axios";

import { setFilms } from './actions';

export const getFilms = () => dispatch => {
  axios.get("/").then(({ data }) => {
    // for now, just log the response data
    const films = data

    // dispatch the setTitles action, passing along the articles List
    dispatch(setFilms(films));
  });
};
