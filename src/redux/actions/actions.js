export const SetActive = (i) => {
  return async (dispatch) => {
    dispatch({ type: "SET_ACTIVE", data: i });
  };
};
