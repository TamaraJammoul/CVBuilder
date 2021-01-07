export default function auth(state, action) {
  switch (action.type) {
    case "AUTH":
      return {
        ...state,
        email: localStorage.getItem("Email"),
        token: localStorage.getItem("token"),
        LastName: localStorage.getItem("LastName"),
        FirstName: localStorage.getItem("FirstName"),
      };

    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
        firstName: action.payload.user.FirstName,
        lastName: action.payload.user.LastName,
        email: action.payload.user.Email,
        id: action.payload.user._id,
      };
    case "SIGNUP":
      return {
        ...state,
        token: action.payload.token,
        firstName: action.payload.data.FirstName,
        lastName: action.payload.data.LastName,
        email: action.payload.data.Email,
        id: action.payload.data._id,
      };

    default:
      return state;
  }
}
