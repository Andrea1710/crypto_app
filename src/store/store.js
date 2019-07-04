// Importing Redux modules, Redux Thunk middleware and redux-persits modules
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, autoRehydrate } from "redux-persist";
// Importing Reducers from index
import reducers from "../store/reducers";
// Importing Local Storage
import AsyncStorage from "@react-native-community/async-storage";

// Creating Redux Store
const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk),
    autoRehydrate()
  )
);

// Persisting the Store for Offline Functionalities
persistStore(store, { storage: AsyncStorage, whitelist: ["crypto"] });

export default store;
