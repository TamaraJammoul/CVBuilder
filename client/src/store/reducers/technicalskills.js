export default function technicalskills(state, action) {
  switch (action.type) {
    case "ADDTECHNICALSKILL":
      console.log(action.payload);
      return {
        ...state,
        template: {
          ...state.template,
          technicalskills: [...state.template.technicalskills, action.payload],
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
      var temp;
      state.template.technicalskills.map((e, i) => {
        if (e.skill == action.payload.name) {
          temp = e;
        }
      });
      console.log(temp);
      return {
        ...state,
        template: {
          ...state.template,
          technicalskills: [...state.template.technicalskills, temp],
        },
      };

    default:
      return state;
  }
}
