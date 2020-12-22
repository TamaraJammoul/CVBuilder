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
          languages: [...state.template.languages, action.payload],
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
    case "ADDOTHERTRAINING":
      return {
        ...state,
        template: {
          ...state.template,
          othertraining: [...state.template.othertraining, action.payload],
        },
      };
    case "ADDPERSONALSKILLS":
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
    case "ADDWORKEXPERIENCE":
      return {
        ...state,
        template: {
          ...state.template,
          workexperience: [...state.template.workexperience, action.payload],
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

      console.log(temp, action.payload);
      return {
        ...state,
        template: {
          ...state.template,
          references: temp,
        },
      };
    default:
      return state;
  }
}
