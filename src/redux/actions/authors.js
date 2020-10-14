import {SET_AUTHORS} from "./actionType";
import axios from "axios";

export const fetchAuthors = () => {
  return async dispatch => {
    try {
      const res = await axios
        .get("https://the-index-api.herokuapp.com/api/authors/")
      const authors = res.data;
      dispatch({
        type: SET_AUTHORS,
        payload: authors
      })
    } catch (err) {
  };
}};