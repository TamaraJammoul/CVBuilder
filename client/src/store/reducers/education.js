export default function education(state, action) {
  switch (action.type) {
    case "ADDEDUCATION":
      return {
        ...state,
        template: {
          ...state.template,
          educations: [...state.template.educations, action.payload],
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

    default:
      return state;
  }
}
