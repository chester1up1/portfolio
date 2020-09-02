const defaultState = {
  active: "about",
};

const nav = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_ACTIVE":
      return {
        active: action.data,
      };

    default:
      return state;
  }
};

export default nav;
