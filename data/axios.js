import axios from "axios";

export default axios.create({
  baseURL: "https://filmsonfreeview.herokuapp.com/api/films",
  headers: {
    Accept: "application/json",
  },
});
