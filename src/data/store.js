import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import initial from "./initial";
import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initial,
  composeEnhancers(applyMiddleware(thunk))
); // mixes together the Redux Dev Tools and the thunk package so that they can all be passed in as one argument to createStore.

export default store;