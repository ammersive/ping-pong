// Action creators:
// Functions which return an action when called (in the r-r wrapper files)
// Can also clean up data before sending to reducers here, e.g. as with +winningScore

export const increment = (player) => {
  if (player === 1) {
    return {type: "PLAYER_1_SCORED"};
  } else {
    console.log(player);
    return {type: "PLAYER_2_SCORED"}; 
  };
};  

export const reset = () => {
  return {
    type: "RESET",
  };
};

// Going via API now, so being passed prop names from API
export const saveSettings = ({ player_1, player_2, winning_score, change_serve, gameStarted, id }) => {  
  return {
    type: "SAVE_SETTINGS",
    player1Name: player_1.name,
    player2Name: player_2.name,
    winningScore: +winning_score, // cast to number before sending to reducer
    alternateEvery: +change_serve, // cast to number before sending to reducer
    gameStarted: gameStarted,
    currentGame: id // added this new action prop to the reducer, so state stores game id give by API
  };
};

