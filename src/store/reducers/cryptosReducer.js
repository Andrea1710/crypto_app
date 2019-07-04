// Importing Action Types
import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL
} from "../actions/actionTypes";
// Importing Rehydrate module from redux-persist to use the App Offline
import { REHYDRATE } from "redux-persist/constants";

// Initial State stored in Redux Store
const initialState = {
  isFetching: false,
  data: [],
  hasError: false,
  errorMessage: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_COIN_DATA:
      return {
        ...state,
        isFetching: true,
        data: null,
        hasError: false,
        errorMessage: null
      };

    case REHYDRATE:
      return {
        ...state,
        ...(action.payload.crypto || [])
      };

    case FETCHING_COIN_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: null
      };

    case FETCHING_COIN_DATA_FAIL:
      return {
        ...state,
        isFetching: false,
        data: null,
        hasError: true,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};
