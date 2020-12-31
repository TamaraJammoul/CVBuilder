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
  COPYEDUCATION,
  COPYLANGUAGE,
  COPYREFERENCE,
  COPYOTHERTRAINING,
  COPYCERTIFICATE,
  COPYPERSONALSKILL,
  COPYMEMBERSHIP,
  COPYEXPERIENCE,
  ADDCV,
  DELETECV,
} from "./types";
import axios from "axios";

export function LoginAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/auth/logIn`, {
        Email: payload.Email,
        Password: payload.password,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: LOGIN,
          payload,
        });
      });
  };
}
export function SignupAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/auth/signUp`, {
        Email: payload.email,
        FirstName: payload.firstName,
        LastName: payload.lastName,
        Password: payload.password,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: SIGNUP,
          payload,
        });
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
export function AddCVAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/CV/addCV`, {
        Email: payload.email,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: ADDCV,
          payload,
        });
      });
  };
}
export function DeleteCVAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/CV/deleteCV`, {
        Email: payload.email,
        id: payload.id,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: DELETECV,
          payload,
        });
      });
  };
}
export function AddCertificateAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/certificate/addCertificate`, {
        Name: payload.name,
        year: payload.date,
        Description: payload.description,
        Order: payload.order,
        _id: payload.id,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: ADDCERTIFICATE,
          payload,
        });
      });
  };
}
export function CopyCertificateAction(payload) {
  return (dispatch) => {
    dispatch({
      type: COPYCERTIFICATE,
      payload,
    });
  };
}
export function AddEducationAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/education/addEducation`, {
        UniversityName: payload.universityName,
        Faculty: payload.faculty,
        YearStart: payload.startYear,
        YearEnd: payload.endYear,
        DegreeFrom100: payload.rate100,
        DegreeFrom5: payload.rate5,
        Order: 1,
        Degree: payload.estimate,
        _id: payload.id,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: ADDEDUCATION,
          payload,
        });
      });
  };
}
export function CopyEducationAction(payload) {
  return (dispatch) => {
    dispatch({
      type: COPYEDUCATION,
      payload,
    });
  };
}
export function AddExperienceAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/experience/addExperience`, {
        Start: payload.startYear,
        End: payload.endYear,
        Name: payload.experienceName,
        Project: payload.project,
        Description: payload.description,
        Order: 1,
        _id: payload.cvId,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: ADDEXPERIENCE,
          payload,
        });
      });
  };
}
export function CopyExperienceAction(payload) {
  return (dispatch) => {
    dispatch({
      type: COPYEXPERIENCE,
      payload,
    });
  };
}
export function AddLanguageAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/language/addLanguage`, {
        Name: payload.name,
        Order: 1,
        Rate: 7,
        _id: payload.id,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: ADDLANGUAGE,
          payload,
        });
      });
  };
}
export function CopyLanguageAction(payload) {
  return (dispatch) => {
    dispatch({
      type: COPYLANGUAGE,
      payload,
    });
  };
}
export function AddMembershipAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/membershop/addMembership`, {
        Name: payload.name,
        Order: 1,
        _id: payload.id,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: ADDMEMBERSHIP,
          payload,
        });
      });
  };
}
export function CopyMembershipAction(payload) {
  return (dispatch) => {
    dispatch({
      type: COPYMEMBERSHIP,
      payload,
    });
  };
}
export function AddOtherTrainingAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/otherTraining/addOtherTraining`, {
        Name: payload.name,
        Order: 1,
        _id: payload.id,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: ADDOTHERTRAINING,
          payload,
        });
      });
  };
}
export function CopyOtherTrainingAction(payload) {
  return (dispatch) => {
    dispatch({
      type: COPYOTHERTRAINING,
      payload,
    });
  };
}
export function AddPersonalSkillsAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/personalSkills/addPersonalSkills`, {
        Name: payload.name,
        Order: 1,
        _id: payload.id,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: ADDPERSONALSKILL,
          payload,
        });
      });
  };
}
export function CopyPersonalSkillsAction(payload) {
  return (dispatch) => {
    dispatch({
      type: COPYPERSONALSKILL,
      payload,
    });
  };
}
export function AddReferenceAction(payload) {
  return async (dispatch) => {
    await axios
      .post(`http://localhost:5000/api/referance/addReferance`, {
        Name: payload,
        Order: 1,
        _id: "5feb8f0d76236c09f83b7221",
      })
      .then((res) => {
        console.log(res);
        if (res.status == 200)
          dispatch({
            type: ADDREFERENCE,
            payload,
          });
      });
  };
}
export function CopyReferenceAction(payload) {
  return (dispatch) => {
    dispatch({
      type: COPYREFERENCE,
      payload,
    });
  };
}
export function AddSkillAction(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/skills/addSkill`, {
        Name: payload.name,
        Order: 1,
        _id: payload.id,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: ADDSKILL,
          payload,
        });
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
  return async (dispatch) => {
    console.log(payload);
    await axios
      .post(`http://localhost:5000/api/referance/deleteReferance`, {
        referance_id: payload.name,
        _id: "5feb8f0d76236c09f83b7221",
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: DELETEREFERENCE,
          payload,
        });
      });
  };
}
export function EditReferenceAction(payload) {
  console.log(payload);
  return async (dispatch) => {
    console.log(payload);
    await axios
      .post(`http://localhost:5000/api/referance/updateReferance`, {
        Name: payload.newName,
        Order: 1,
        _id: "5feb8f0d76236c09f83b7221",
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: EDITREFERENCE,
          payload,
        });
      });
  };
}
export function DeleteCertificateAction(payload) {
  console.log(payload);
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/api/certificate/deleteCertificate`, {
        certificate_id: payload.id,
        _id: payload.id,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: DELETECERTIFICATE,
          payload,
        });
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
    axios
      .post(`http://localhost:5000/api/education/deleteEducation`, {
        education_id: payload.id,
        _id: payload.cvId,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: DELETEEDUCATION,
          payload,
        });
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
    axios
      .post(`http://localhost:5000/api/otherTrining/deleteOtherTraining`, {
        otherTraining_id: payload.otherTraining_id,
        _id: payload.id,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: DELETEOTHERTRAINING,
          payload,
        });
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
    axios
      .post(`http://localhost:5000/api/language/deleteLanguage`, {
        language_id: payload.language_id,
        _id: payload.id,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: DELETELANGUAGE,
          payload,
        });
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
    axios
      .post(`http://localhost:5000/api/membershop/deleteMembership`, {
        membership_id: payload.membership_id,
        _id: payload.id,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: DELETEMEMBERSHIP,
          payload,
        });
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
    axios
      .post(`http://localhost:5000/api/experience/deleteExperience`, {
        experience_id: payload.experience_id,
        _id: payload.id,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: DELETEEXPERIENCE,
          payload,
        });
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
    axios
      .post(`http://localhost:5000/api/personalSkills/deletePersonalSkills`, {
        Name: payload.name,
        Order: 1,
        _id: payload.id,
      })
      .then((res) => {
        console.log(res);
        dispatch({
          type: DELETEPERSONALSKILL,
          payload,
        });
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
