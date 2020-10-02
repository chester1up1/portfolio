const defaultState = {
  time: 5,
  gold: 0,
};

const secret = (state = defaultState, action) => {
  switch (action.type) {
    case "TIME_TIK":
      return {
        ...state,
        time: action.data,
      };
    case "GET_GOLD":
      return {
        time: 0,
        gold: state.gold !== 100 ? state.gold + 50 : 100,
      };
    case "BUY_SECRET":
      return {
        ...state,
        gold: 0,
      };
    default:
      return state;
  }
};

export default secret;
