import { createStore, compose, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import combinedReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};

const store = createStore(
  combinedReducer,
  initialState,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;