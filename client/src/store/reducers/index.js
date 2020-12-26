export default function reducer(state, action) {
  switch (action.type) {
    case "ADDCERTIFICATE":
      return {
        ...state,
        template: {
          ...state.template,
          certificates: [...state.template.certificates, action.payload],
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
    case "ADDEXPERIENCE":
      return {
        ...state,
        template: {
          ...state.template,
          experiences: [...state.template.experiences, action.payload],
        },
      };
    case "ADDLANGUAGE":
      return {
        ...state,
        template: {
          ...state.template,
          languages: [
            ...state.template.languages,
            {name: action.payload.language, rate: action.payload.rate},
          ],
        },
      };
    case "ADDMEMBERSHIP":
      return {
        ...state,
        template: {
          ...state.template,
          memberships: [...state.template.memberships, {name: action.payload}],
        },
      };
    case "ADDOTHERTRAINING":
      return {
        ...state,
        template: {
          ...state.template,
          othertraining: [
            ...state.template.othertraining,
            {name: action.payload},
          ],
        },
      };
    case "ADDPERSONALSKILL":
      console.log(action.payload);
      return {
        ...state,
        template: {
          ...state.template,
          personalskills: [...state.template.personalskills, action.payload],
        },
      };
    case "ADDREFERENCE":
      return {
        ...state,
        template: {
          ...state.template,
          references: [...state.template.references, {name: action.payload}],
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
      temp = temp.filter((e) => e != action.payload);
      return {
        ...state,
        template: {
          ...state.template,
          references: temp,
        },
      };
    case "EDITREFERENCE":
      var temp = state.template.references;
      temp.map((e, i) => {
        if (e.name == action.payload.oldName) {
          e.name = action.payload.newName;
        }
      });
      return {
        ...state,
        template: {
          ...state.template,
          references: temp,
        },
      };
    case "COPYREFERENCE":
      var temp;
      state.template.references.map((e, i) => {
        if (e.name == action.payload.name) {
          temp = e;
        }
      });
      console.log(temp);
      return {
        ...state,
        template: {
          ...state.template,
          references: [...state.template.references, temp],
        },
      };
    case "DELETECERTIFICATE":
      var temp = state.template.certificates;
      temp = temp.filter((e) => e.name != action.payload);
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
      var temp;
      state.template.certificates.map((e, i) => {
        if (e.name == action.payload.name) {
          temp = e;
        }
      });
      console.log(temp);
      return {
        ...state,
        template: {
          ...state.template,
          certificates: [...state.template.certificates, temp],
        },
      };
    case "DELETEEDUCATION":
      var temp = state.template.educations;
      temp = temp.filter((e) => e.field != action.payload);
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
      temp.map((e, i) => {
        if (e.field == action.payload.oldField) {
          e.field = action.payload.newField;

          e.universityName = action.payload.newUniversityName;
          e.city = action.payload.newCity;
          e.startDate = action.payload.newStartDate;
          e.endDate = action.payload.newEndDate;
          e.rate100 = action.payload.newRate100;
          e.rate5 = action.payload.newRate5;
          e.estimate = action.payload.newEstimate;
        }
      });
      return {
        ...state,
        template: {
          ...state.template,
          educations: temp,
        },
      };
    case "COPYEDUCATION":
      var temp;
      state.template.educations.map((e, i) => {
        if (e.field == action.payload.name) {
          temp = e;
        }
      });
      console.log(temp);
      return {
        ...state,
        template: {
          ...state.template,
          educations: [...state.template.educations, temp],
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
        if (e.name == action.payload.oldName) {
          e.name = action.payload.newName;
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
      var temp;
      state.template.othertraining.map((e, i) => {
        if (e.name == action.payload.name) {
          temp = e;
        }
      });
      console.log(temp);
      return {
        ...state,
        template: {
          ...state.template,
          othertraining: [...state.template.othertraining, temp],
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
      temp = temp.filter((e) => e.name != action.payload);
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
        if (e.name == action.payload.oldName) {
          e.name = action.payload.newName;
          e.rate = action.payload.newRate;
        }
      });
      return {
        ...state,
        template: {
          ...state.template,
          languages: [...state.template.languages, temp],
        },
      };
    case "COPYLANGUAGE":
      var temp;
      state.template.languages.map((e, i) => {
        if (e.name == action.payload.name) {
          temp = e;
        }
      });
      console.log(temp);
      return {
        ...state,
        template: {
          ...state.template,
          languages: [...state.template.languages, temp],
        },
      };

    case "DELETEMEMBERSHIP":
      var temp = state.template.memberships;
      temp = temp.filter((e) => e.name != action.payload);
      console.log("iiiiiiiiii", temp);
      return {
        ...state,
        template: {
          ...state.template,
          memberships: temp,
        },
      };
    case "EDITMEMBERSHIP":
      var temp = state.template.memberships;
      temp.map((e, i) => {
        if (e.name == action.payload.oldName) {
          e.name = action.payload.newName;
        }
      });
      return {
        ...state,
        template: {
          ...state.template,
          othertraining: temp,
        },
      };
    case "COPYMEMBERSHIP":
      var temp;
      state.template.memberships.map((e, i) => {
        if (e.name == action.payload.name) {
          temp = e;
        }
      });
      console.log(temp);
      return {
        ...state,
        template: {
          ...state.template,
          memberships: [...state.template.memberships, temp],
        },
      };

    case "DELETEEXPERIENCE":
      var temp = state.template.experiences;
      temp = temp.filter((e) => e.experienceName != action.payload);
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
      temp.map((e, i) => {
        if (e.experienceName == action.payload.oldName) {
          e.experienceName = action.payload.newName;
          e.description = action.payload.newDescription;
          e.experienceName = action.payload.newExperienceName;
          e.startDate = action.payload.newStartDate;
          e.endDate = action.payload.newEndDate;
          e.project = action.payload.newProject;
        }
      });
      return {
        ...state,
        template: {
          ...state.template,
          experiences: temp,
        },
      };
    case "COPYEXPERIENCE":
      var temp;
      state.template.experiences.map((e, i) => {
        if (e.experienceName == action.payload.name) {
          temp = e;
        }
      });
      console.log(temp);
      return {
        ...state,
        template: {
          ...state.template,
          experiences: [...state.template.experiences, temp],
        },
      };
    case "DELETEPERSONALSKILL":
      var temp = state.template.personalskills;
      temp = temp.filter((e) => e.skill != action.payload);
      console.log("iiiiiiiiii", temp);
      return {
        ...state,
        template: {
          ...state.template,
          personalskills: temp,
        },
      };
    case "EDITPERSONALSKILL":
      var temp = state.template.personalskills;
      temp.map((e, i) => {
        if (e.skill == action.payload.oldName) {
          e.skill = action.payload.newName;
          e.rate = action.payload.newRate;
        }
      });
      return {
        ...state,
        template: {
          ...state.template,
          othertraining: temp,
        },
      };
    case "COPYPERSONALSKILL":
      var temp;
      state.template.personalskills.map((e, i) => {
        if (e.skill == action.payload.name) {
          temp = e;
        }
      });
      console.log(temp);
      return {
        ...state,
        template: {
          ...state.template,
          personalskills: [...state.template.personalskills, temp],
        },
      };

    default:
      return state;
  }
}
