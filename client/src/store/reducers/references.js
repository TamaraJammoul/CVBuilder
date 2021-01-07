export default function references(state, action) {
  switch (action.type) {
    case "ADDREFERENCE":
      return {
        ...state,
        template: {
          ...state.template,
          references: [...state.template.references, action.payload],
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

    default:
      return state;
  }
}
