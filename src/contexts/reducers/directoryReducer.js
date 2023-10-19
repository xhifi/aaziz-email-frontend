const directoryReducer = (state, action) => {
  switch (action.type) {
    case "PROPAGATE_CONTACTS":
      return {
        ...state,
        contacts: [...action.payload],
      };
    case "TOGGLE_LOADING":
      return {
        ...state,
        loading: !state.loading,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      throw new Error("No such action type exists");
  }
};

export default directoryReducer;
