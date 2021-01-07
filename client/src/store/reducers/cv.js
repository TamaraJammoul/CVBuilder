export default function cv(state, action) {
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

    default:
      return state;
  }
}
