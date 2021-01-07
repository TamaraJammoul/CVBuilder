import {createStore, compose, applyMiddleware} from "redux";
import reducer from "./reducers";
import education from "./reducers/education";
import experience from "./reducers/experience";
import languages from "./reducers/languages";
import cv from "./reducers/cv";
import membership from "./reducers/membership";
import othertraining from "./reducers/othertraining";
import references from "./reducers/references";
import technicalskills from "./reducers/technicalskills";
import certificates from "./reducers/certificates";
import {combineReducers} from "redux";
import thunk from "redux-thunk";
const TotalReducer = combineReducers({
  education,
  reducer,
  experience,
  cv,
  certificates,
  references,
  othertraining,
  languages,
  membership,
  technicalskills,
});
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
