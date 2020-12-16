import {createStore, compose, applyMiddleware} from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
const initialState = {
  template: [],
};

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
