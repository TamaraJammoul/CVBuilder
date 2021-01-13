import {createStore, compose, applyMiddleware} from "redux";
import reducer from "./reducers";

import {combineReducers} from "redux";
import thunk from "redux-thunk";

const initialState = {
  template: {
    certificates: [],
    educations: [],
    experiences: [],
    languages: [],
    memberships: [],
    othertraining: [],
    technicalskills: [],
    references: [],
    skills: [],
    courses: [],
    careerobjective: "",
    careerObjectives_id: "",
    personalInformation_id: "",
  },
  MyTemplates: [],
  firstName: "",
  lastName: "",
  email: "",
  id: "",
  token: "",
  cvID: "",
  toast: false,
  toastMessageEN: "",
  toastMessageAR: "",
  toastType: "success",
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
