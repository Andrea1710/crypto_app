// Importing Axios for http Requests to APIs
import axios from "axios";
// Importing Action types
import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL
} from "./actionTypes";
// Importing base URL from API
import { baseUrl } from "../../utils/constants";

export default (fetchCoinData = () => {
  return dispatch => {
    dispatch({ type: FETCHING_COIN_DATA });

    return axios
      .get(`${baseUrl}api/v1/ticker/24hr`)
      .then(res => {
        dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err.data });
      });
  };
});
