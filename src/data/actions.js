// Action creators:
// Functions which return an action when called (in wrapper files)
// Can also clean up data before sending to reducers here

export const increment1 = () => {
  return {
    type: "PLAYER_1_SCORED"
  };
};

export const increment2 = () => {
  return {
    type: "PLAYER_2_SCORED"
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};

