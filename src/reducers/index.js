const initialState = {
  users: [],
  positions: [],
  token: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USERS":
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };
    case "LOAD_POSITIONS":
      return {
        ...state,
        positions: action.payload
      }
    default:
      return state;
  }
};
export default reducer;
