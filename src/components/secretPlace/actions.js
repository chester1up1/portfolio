export const GetGold = () => {
  return async (dispatch) => {
    dispatch({ type: "GET_GOLD" });
  };
};
export const TimeTik = (time) => {
  return async (dispatch) => {
    dispatch({ type: "TIME_TIK", data: time });
  };
};
export const BuyTheSecret = (time) => {
  return async (dispatch) => {
    dispatch({ type: "BUY_SECRET" });
  };
};
