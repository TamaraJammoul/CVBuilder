import {
  LOGIN,
  SIGNUP,
  CONTACTUS,
  ADDCERTIFICATE,
  EDITCERTIFICATE,
  DELETECERTIFICATE,
  ADDEDUCATION,
  ADDEXPERIENCE,
  ADDLANGUAGE,
  ADDMEMBERSHIP,
  ADDOTHERTRAINING,
  ADDPERSONALSKILL,
  ADDREFERENCE,
  ADDSKILL,
  CHANGELANGUAGE,
  DELETEREFERENCE,
  EDITREFERENCE,
  EDITEDUCATION,
  DELETEEDUCATION,
  DELETEOTHERTRAINING,
  EDITOTHERTRAINING,
  DELETECAREEROBJECTIVE,
  EDITCAREEROBJECTIVE,
  DELETELANGUAGE,
  EDITLANGUAGE,
  EDITMEMBERSHIP,
  DELETEMEMBERSHIP,
  DELETEEXPERIENCE,
  EDITEXPERIENCE,
  EDITPERSONALSKILL,
  DELETEPERSONALSKILL,
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
      type: ADDPERSONALSKILL,
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
export function DeleteCertificateAction(payload) {
  console.log(payload);
  return (dispatch) => {
    dispatch({
      type: DELETECERTIFICATE,
      payload,
    });
  };
}
export function EditCertificateAction(payload) {
  console.log(payload);
  return (dispatch) => {
    dispatch({
      type: EDITCERTIFICATE,
      payload,
    });
  };
}
export function DeleteEducationAction(payload) {
  console.log(payload);
  return (dispatch) => {
    dispatch({
      type: DELETEEDUCATION,
      payload,
    });
  };
}
export function EditEducationAction(payload) {
  console.log(payload);
  return (dispatch) => {
    dispatch({
      type: EDITEDUCATION,
      payload,
    });
  };
}
export function DeleteOtherTrainingAction(payload) {
  console.log(payload);
  return (dispatch) => {
    dispatch({
      type: DELETEOTHERTRAINING,
      payload,
    });
  };
}
export function EditOtherTrainingAction(payload) {
  console.log(payload);
  return (dispatch) => {
    dispatch({
      type: EDITOTHERTRAINING,
      payload,
    });
  };
}
export function DeleteCareerObjectiveAction(payload) {
  console.log(payload);
  return (dispatch) => {
    dispatch({
      type: DELETECAREEROBJECTIVE,
      payload,
    });
  };
}
export function EditCareerObjectiveAction(payload) {
  console.log(payload);
  return (dispatch) => {
    dispatch({
      type: EDITCAREEROBJECTIVE,
      payload,
    });
  };
}
export function DeleteLanguageAction(payload) {
  console.log(payload);
  return (dispatch) => {
    dispatch({
      type: DELETELANGUAGE,
      payload,
    });
  };
}
export function EditLanguageAction(payload) {
  console.log(payload);
  return (dispatch) => {
    dispatch({
      type: EDITLANGUAGE,
      payload,
    });
  };
}
export function DeleteMembershipAction(payload) {
  console.log(payload);
  return (dispatch) => {
    dispatch({
      type: DELETEMEMBERSHIP,
      payload,
    });
  };
}
export function EditMembershipAction(payload) {
  console.log(payload);
  return (dispatch) => {
    dispatch({
      type: EDITMEMBERSHIP,
      payload,
    });
  };
}

export function DeleteExperienceAction(payload) {
  console.log(payload);
  return (dispatch) => {
    dispatch({
      type: DELETEEXPERIENCE,
      payload,
    });
  };
}
export function EditExperienceAction(payload) {
  console.log(payload);
  return (dispatch) => {
    dispatch({
      type: EDITEXPERIENCE,
      payload,
    });
  };
}
export function DeletePersonalSkillAction(payload) {
  console.log(payload);
  return (dispatch) => {
    dispatch({
      type: DELETEPERSONALSKILL,
      payload,
    });
  };
}
export function EditPersonalSkillAction(payload) {
  console.log(payload);
  return (dispatch) => {
    dispatch({
      type: EDITPERSONALSKILL,
      payload,
    });
  };
}
