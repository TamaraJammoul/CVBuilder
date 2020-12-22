import {
  LOGIN,
  SIGNUP,
  CONTACTUS,
  ADDCERTIFICATE,
  ADDEDUCATION,
  ADDEXPERIENCE,
  ADDLANGUAGE,
  ADDMEMBERSHIP,
  ADDOTHERTRAINING,
  ADDPERSONALSKILLS,
  ADDREFERENCE,
  ADDSKILL,
  ADDWORKEXPERIENCE,
  CHANGELANGUAGE,
  DELETEREFERENCE,
  EDITREFERENCE,
} from "./types";
import axios from "axios";

export function LoginAction(payload) {
  return (dispatch) => {
    dispatch({
      type: LOGIN,
      payload,
    });
  };
}
export function SignupAction(payload) {
  return (dispatch) => {
    dispatch({
      type: SIGNUP,
      payload,
    });
  };
}
export function ContactusAction(payload) {
  return (dispatch) => {
    dispatch({
      type: CONTACTUS,
      payload,
    });
  };
}
export function AddCertificateAction(payload) {
  return (dispatch) => {
    dispatch({
      type: ADDCERTIFICATE,
      payload,
    });
  };
}
export function AddEducationAction(payload) {
  return (dispatch) => {
    dispatch({
      type: ADDEDUCATION,
      payload,
    });
  };
}
export function AddExperienceAction(payload) {
  return (dispatch) => {
    dispatch({
      type: ADDEXPERIENCE,
      payload,
    });
  };
}
export function AddLanguageAction(payload) {
  return (dispatch) => {
    dispatch({
      type: ADDLANGUAGE,
      payload,
    });
  };
}
export function AddMembershipAction(payload) {
  return (dispatch) => {
    dispatch({
      type: ADDMEMBERSHIP,
      payload,
    });
  };
}
export function AddOtherTrainingAction(payload) {
  return (dispatch) => {
    dispatch({
      type: ADDOTHERTRAINING,
      payload,
    });
  };
}
export function AddPersonalSkillsAction(payload) {
  return (dispatch) => {
    dispatch({
      type: ADDPERSONALSKILLS,
      payload,
    });
  };
}
export function AddReferenceAction(payload) {
  return (dispatch) => {
    dispatch({
      type: ADDREFERENCE,
      payload,
    });
  };
}
export function AddSkillAction(payload) {
  return (dispatch) => {
    dispatch({
      type: ADDSKILL,
      payload,
    });
  };
}
export function AddWorkExperienceAction(payload) {
  return (dispatch) => {
    dispatch({
      type: ADDWORKEXPERIENCE,
      payload,
    });
  };
}
export function ChangeLanguge(payload) {
  return (dispatch) => {
    dispatch({
      type: CHANGELANGUAGE,
      payload,
    });
  };
}
export function DeleteReferenceAction(payload) {
  console.log(payload);
  return (dispatch) => {
    dispatch({
      type: DELETEREFERENCE,
      payload,
    });
  };
}
export function EditReferenceAction(payload) {
  console.log(payload);
  return (dispatch) => {
    dispatch({
      type: EDITREFERENCE,
      payload,
    });
  };
}
