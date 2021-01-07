export default function languages(state, action) {
  switch (action.type) {
    case "ADDLANGUAGE":
      console.log(action.payload);
      return {
        ...state,
        template: {
          ...state.template,
          languages: [...state.template.languages, action.payload],
        },
      };

    case "DELETELANGUAGE":
      var temp = state.template.languages;
      temp = temp.filter((e) => e.language_id != action.payload.language_id);
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
        if (e._id == action.payload._id) {
          e.Name = action.payload.Name;
          e.Rate = action.payload.Rate;
        }
      });
      return {
        ...state,
        template: {
          ...state.template,
          languages: temp,
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

    default:
      return state;
  }
}
