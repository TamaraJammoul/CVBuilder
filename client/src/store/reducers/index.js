export default function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {template: [...state.template, action.payload]};
    default:
      return state;
  }
}
