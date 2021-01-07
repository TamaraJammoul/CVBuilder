export default function membership(state, action) {
  switch (action.type) {
    case "ADDMEMBERSHIP":
      return {
        ...state,
        template: {
          ...state.template,
          memberships: [...state.template.memberships, action.payload],
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

    default:
      return state;
  }
}
