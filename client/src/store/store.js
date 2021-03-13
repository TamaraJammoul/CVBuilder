import {createStore, compose, applyMiddleware} from "redux";
import reducer from "./reducers";

import thunk from "redux-thunk";

const initialState = {
  sections: {
    careerobjective: 1,
    certificates: 1,
    courses: 1,
    education: 1,
    experience: 1,
    language: 1,
    membership: 1,
    othertraining: 1,
    referenc: 1,
    technicalskill: 1,
    skills: 1,
    twolan: 1,
    achievement: 1,
    certificateslen: 1,
    courseslen: 1,
    educationlen: 1,
    experiencelen: 1,
    languagelen: 1,
    membershiplen: 1,
    othertraininglen: 1,
    referenclen: 1,
    technicalskilllen: 1,
    color: 1,
    achievementlen: 1,
  },
  template: {
    certificates: [],
    educations: [],
    experiences: [],
    languages: [],
    memberships: [],
    othertraining: [],
    technicalskills: [],
    achievements: [],
    references: [],
    skills: [],
    courses: [],
    personalInformation: {},
    careerobjective: {},
    careerObjectives_id: "60494ddf18c26cf506022010",
    personalInformation_id: "60494ddf18c26cf506022011",
  },
  MyTemplates: [],
  firstName: "",
  lastName: "",
  email: "user3@gmail.com",
  id: "",
  token: "",
  cvID: "60494ddf18c26cf506022012",
  toast: false,
  toastMessageEN: "",
  toastMessageAR: "",
  toastType: "success",
  cvName: "",
  cvTemplate: "cv1",
  cvLanguage: "",
};

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk)
    ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
