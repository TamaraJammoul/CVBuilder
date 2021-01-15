export default function reducer(state, action) {
  switch (action.type) {
    case "ADDCV":
      return {
        ...state,
        cvID: action.payload.cv_id,
        template: {
          ...state.template,
          careerObjectives_id: action.payload.careerObjectives_id,
        },
      };
    case "DELETECV":
      var temp = state.MyTemplates;
      temp = temp.filter((e) => e != action.payload);
      return {
        ...state,
        MyTemplates: {
          ...state.MyTemplates,
          temp,
        },
      };
    case "CVNAME":
      return {
        ...state,
        cvName: action.payload,
      };
    case "CVTEMPLATE":
      return {
        ...state,
        cvTemplate: action.payload,
      };
    case "CVLANGIAGE":
      return {
        ...state,
        cvLanguage: action.payload,
      };
    case "AUTH":
      return {
        ...state,
        email: localStorage.getItem("Email"),
        token: localStorage.getItem("token"),
        LastName: localStorage.getItem("LastName"),
        FirstName: localStorage.getItem("FirstName"),
      };
    case "ADDCERTIFICATE":
      return {
        ...state,
        template: {
          ...state.template,
          certificates: [...state.template.certificates, action.payload],
        },
      };
    case "ORDERCERTIFICATE":
      return {
        ...state,
        template: {
          ...state.template,
          certificates: action.payload.certificates,
        },
      };
    case "ADDEDUCATION":
      return {
        ...state,
        template: {
          ...state.template,
          educations: [...state.template.educations, action.payload],
        },
      };
    case "ORDEREDUCATION":
      return {
        ...state,
        template: {
          ...state.template,
          educations: action.payload.educations,
        },
      };
    case "ADDEXPERIENCE":
      return {
        ...state,
        template: {
          ...state.template,
          experiences: [...state.template.experiences, action.payload],
        },
      };
    case "ORDEREXPERIENCE":
      return {
        ...state,
        template: {
          ...state.template,
          experiences: action.payload.experiences,
        },
      };
    case "ADDCOURSES":
      return {
        ...state,
        template: {
          ...state.template,
          courses: [...state.template.courses, action.payload],
        },
      };
    case "ORDERCOURSES":
      return {
        ...state,
        template: {
          ...state.template,
          courses: action.payload.courses,
        },
      };
    case "ADDLANGUAGE":
      console.log(action.payload);
      return {
        ...state,
        template: {
          ...state.template,
          languages: [...state.template.languages, action.payload],
        },
      };
    case "ORDERLANGUAGE":
      console.log(action.payload);
      return {
        ...state,
        template: {
          ...state.template,
          languages: action.payload.languages,
        },
      };
    case "ADDMEMBERSHIP":
      return {
        ...state,
        template: {
          ...state.template,
          memberships: [...state.template.memberships, action.payload],
        },
      };
    case "ORDERMEMBERSHIP":
      return {
        ...state,
        template: {
          ...state.template,
          memberships: action.payload.memberships,
        },
      };
    case "ADDOTHERTRAINING":
      return {
        ...state,
        template: {
          ...state.template,
          othertraining: [...state.template.othertraining, action.payload],
        },
      };
    case "ORDEROTHERTRAINING":
      return {
        ...state,
        template: {
          ...state.template,
          othertraining: action.payload.othertraining,
        },
      };
    case "ADDTECHNICALSKILL":
      console.log(action.payload);
      return {
        ...state,
        template: {
          ...state.template,
          technicalskills: [...state.template.technicalskills, action.payload],
        },
      };
    case "ORDERTECHNICALSKILL":
      console.log(action.payload);
      return {
        ...state,
        template: {
          ...state.template,
          technicalskills: action.payload.technicalskills,
        },
      };
    case "ADDREFERENCE":
      return {
        ...state,
        template: {
          ...state.template,
          references: [...state.template.references, action.payload],
        },
      };
    case "ORDERREFERENCE":
      return {
        ...state,
        template: {
          ...state.template,
          references: action.payload.references,
        },
      };
    case "ADDSKILL":
      return {
        ...state,
        template: {
          ...state.template,
          skills: [...state.template.skills, action.payload],
        },
      };
    case "DELETEREFERENCE":
      var temp = state.template.references;
      temp = temp.filter((e) => e._id != action.payload.eference_id);
      return {
        ...state,
        template: {
          ...state.template,
          references: temp,
        },
      };
    case "DELETECOURSES":
      var temp = state.template.courses;
      temp = temp.filter((e) => e._id != action.payload.courses_id);
      return {
        ...state,
        template: {
          ...state.template,
          courses: temp,
        },
      };
    case "EDITREFERENCE":
      var temp = state.template.references;
      temp.map((e, i) => {
        if (e._id == action.payload._id) {
          e.Name = action.payload.Name;
        }
      });
      return {
        ...state,
        template: {
          ...state.template,
          references: temp,
        },
      };
    case "EDITCOURSES":
      var temp = state.template.courses;
      temp.map((e, i) => {
        if (e._id == action.payload._id) {
          e.Name = action.payload.Name;
        }
      });
      return {
        ...state,
        template: {
          ...state.template,
          courses: temp,
        },
      };
    case "COPYREFERENCE":
      return {
        ...state,
        template: {
          ...state.template,
          references: [...state.template.references, action.payload],
        },
      };
    case "COPYCOURSES":
      return {
        ...state,
        template: {
          ...state.template,
          coursess: [...state.template.courses, action.payload],
        },
      };
    case "DELETECERTIFICATE":
      var temp = state.template.certificates;
      console.log(action.payload);
      temp = temp.filter((e) => e._id != action.payload.certificate_id);
      console.log("lj", temp);
      return {
        ...state,
        template: {
          ...state.template,
          certificates: temp,
        },
      };
    case "EDITCERTIFICATE":
      var temp = state.template.certificates;
      temp.map((e, i) => {
        if (e.name == action.payload.oldName) {
          e.name = action.payload.newName;
          e.description = action.payload.newDescription;
          e.date = action.payload.newDate;
        }
      });
      return {
        ...state,
        template: {
          ...state.template,
          certificates: temp,
        },
      };
    case "COPYCERTIFICATE":
      return {
        ...state,
        template: {
          ...state.template,
          certificates: [...state.template.certificates, action.payload],
        },
      };
    case "DELETEEDUCATION":
      var temp = state.template.educations;
      temp = temp.filter((e) => e._id != action.payload.education_id);
      console.log("iiiiiiiiii", temp);
      return {
        ...state,
        template: {
          ...state.template,
          educations: temp,
        },
      };
    case "EDITEDUCATION":
      var temp = state.template.educations;
      console.log(action.payload);
      temp.map((e, i) => {
        if (e._id == action.payload._id) {
          e.Faculty = action.payload.Faculty;
          e.UniversityName = action.payload.UniversityName;
          e.city = action.payload.newCity;
          e.startDate = action.payload.newStartDate;
          e.endDate = action.payload.newEndDate;
          e.DegreeFrom100 = action.payload.DegreeFrom100;
          e.DegreeFrom5 = action.payload.DegreeFrom5;
          e.Grade = action.payload.Grade;
        }
      });
      console.log(temp);
      return {
        ...state,
        template: {
          ...state.template,
          educations: temp,
        },
      };
    case "COPYEDUCATION":
      return {
        ...state,
        template: {
          ...state.template,
          educations: [...state.template.educations, action.payload],
        },
      };

    case "DELETEOTHERTRAINING":
      var temp = state.template.othertraining;
      temp = temp.filter((e) => e.name != action.payload);
      console.log("iiiiiiiiii", temp);
      return {
        ...state,
        template: {
          ...state.template,
          othertraining: temp,
        },
      };
    case "EDITOTHERTRAINING":
      var temp = state.template.othertraining;
      temp.map((e, i) => {
        if (e._id == action.payload._id) {
          e.Name = action.Name;
        }
      });
      return {
        ...state,
        template: {
          ...state.template,
          othertraining: temp,
        },
      };
    case "COPYOTHERTRAINING":
      return {
        ...state,
        template: {
          ...state.template,
          othertraining: [...state.template.othertraining, action.payload],
        },
      };

    case "EDITCAREEROBJECTIVE":
      return {
        ...state,
        template: {
          ...state.template,
          careerobjective: action.payload,
        },
      };

    case "DELETECAREEROBJECTIVE":
      return {
        ...state,
        template: {
          ...state.template,
          careerobjective: "",
        },
      };
    case "DELETELANGUAGE":
      var temp = state.template.languages;
      temp = temp.filter((e) => e.language_id != action.payload.language_id);
      console.log("iiiiiiiiii", temp);
      return {
        ...state,
        template: {
          ...state.template,
          languages: temp,
        },
      };
    case "EDITLANGUAGE":
      var temp = state.template.languages;
      temp.map((e, i) => {
        if (e._id == action.payload._id) {
          e.Name = action.payload.Name;
          e.Rate = action.payload.Rate;
        }
      });
      return {
        ...state,
        template: {
          ...state.template,
          languages: temp,
        },
      };
    case "COPYLANGUAGE":
      return {
        ...state,
        template: {
          ...state.template,
          languages: [...state.template.languages, action.payload],
        },
      };

    case "DELETEMEMBERSHIP":
      var temp = state.template.memberships;
      temp = temp.filter((e) => e._id != action.payload.membership_id);
      console.log("iiiiiiiiii", temp);
      return {
        ...state,
        template: {
          ...state.template,
          memberships: temp,
        },
      };
    case "EDITMEMBERSHIP":
      console.log(action.payload);
      var temp = state.template.memberships;
      temp.map((e, i) => {
        if (e._id == action.payload._id) {
          e.Name = action.payload.Name;
        }
      });
      console.log(temp);
      return {
        ...state,
        template: {
          ...state.template,
          memberships: temp,
        },
      };
    case "COPYMEMBERSHIP":
      return {
        ...state,
        template: {
          ...state.template,
          memberships: [...state.template.memberships, action.payload],
        },
      };

    case "DELETEEXPERIENCE":
      var temp = state.template.experiences;
      temp = temp.filter((e) => e._id != action.payload.experience_id);
      console.log("iiiiiiiiii", temp);
      return {
        ...state,
        template: {
          ...state.template,
          experiences: temp,
        },
      };
    case "EDITEXPERIENCE":
      var temp = state.template.experiences;
      console.log(action.payload, "ooooooo");
      temp.map((e, i) => {
        if (e._id == action.payload._id) {
          e.Name = action.payload.Name;
          e.Description = action.payload.Description;
          e.experienceName = action.payload.newExperienceName;
          e.Start = action.payload.Start;
          e.End = action.payload.End;
          e.Project = action.payload.Project;
        }
      });
      console.log(temp);
      return {
        ...state,
        template: {
          ...state.template,
          experiences: temp,
        },
      };
    case "COPYEXPERIENCE":
      return {
        ...state,
        template: {
          ...state.template,
          experiences: [...state.template.experiences, action.payload],
        },
      };
    case "DELETETECHNICALSKILL":
      var temp = state.template.technicalskills;
      temp = temp.filter((e) => e._id != action.payload.technicalSkill_id);
      console.log("iiiiiiiiii", temp);
      return {
        ...state,
        template: {
          ...state.template,
          technicalskills: temp,
        },
      };
    case "EDITTECHNICALSKILL":
      var temp = state.template.technicalskills;
      temp.map((e, i) => {
        if (e._id == action.payload._id) {
          e.Name = action.payload.Name;
          e.RateFrom5 = action.payload.Rate;
        }
      });
      console.log(temp);
      return {
        ...state,
        template: {
          ...state.template,
          technicalskills: temp,
        },
      };
    case "COPYTECHNICALSKILL":
      return {
        ...state,
        template: {
          ...state.template,
          technicalskills: [...state.template.technicalskills, action.payload],
        },
      };
    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
        firstName: action.payload.user.FirstName,
        lastName: action.payload.user.LastName,
        email: action.payload.user.Email,
        id: action.payload.user._id,
      };
    case "SIGNUP":
      return {
        ...state,
        token: action.payload.token,
        firstName: action.payload.data.FirstName,
        lastName: action.payload.data.LastName,
        email: action.payload.data.Email,
        id: action.payload.data._id,
      };
    case "ERROR":
      return {
        ...state,
        toast: true,
        toastMessageEN: "sorry something went wrong",
        toastMessageAR: "عذراً حدث خطأ ما أعد المحاولة",
        toastType: "error",
      };
    default:
      return state;
  }
}
