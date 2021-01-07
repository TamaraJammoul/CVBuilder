export default function certificates(state, action) {
  switch (action.type) {
    case "ADDCERTIFICATE":
      return {
        ...state,
        template: {
          ...state.template,
          certificates: [...state.template.certificates, action.payload],
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

    default:
      return state;
  }
}
