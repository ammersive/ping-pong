// Action creators:
// Functions which return an action when called (in the r-r wrapper files)
// Can also clean up data before sending to reducers here, e.g. as with +winningScore

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

export const saveSettings = ({ player1Name, player2Name, winningScore, alternateEvery }) => {
  return {
    type: "SAVE_SETTINGS",
    player1Name: player1Name,
    player2Name: player2Name,
    winningScore: +winningScore, // cast to number before sending to reducer
    alternateEvery: +alternateEvery // cast to number before sending to reducer
  };
};

