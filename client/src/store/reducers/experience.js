export default function experience(state, action) {
  switch (action.type) {
    case "ADDEXPERIENCE":
      return {
        ...state,
        template: {
          ...state.template,
          experiences: [...state.template.experiences, action.payload],
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

    default:
      return state;
  }
}
