export default function othertraining(state, action) {
  switch (action.type) {
    case "ADDOTHERTRAINING":
      return {
        ...state,
        template: {
          ...state.template,
          othertraining: [...state.template.othertraining, action.payload],
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

    default:
      return state;
  }
}
