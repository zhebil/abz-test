const initialState = {
  users: [],
  positions: [],
  usersPage: 1,
  usersFetch: true,
  showModal: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USERS":
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };
    case "DELETE_POSITIONS":
      return {
        ...state,
        users: [],
        usersPage: 1,
        usersFetch: !state.usersFetch,
      };
    case "SET_PAGE":
      return {
        ...state,
        usersPage: state.usersPage + 1,
      };
    case "LOAD_POSITIONS":
      return {
        ...state,
        positions: action.payload,
      };
    case "SET_SHOW_MODAL":
      return {
        ...state,
        showModal: !state.showModal,
      };
    default:
      return state;
  }
};
export default reducer;
