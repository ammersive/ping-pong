import initial from "./initial";

// Helper functions

// Take values set in the SAVE_SETTINGS action and update the state with these new values
// Second arg in curlies are properties of the action
const saveSettings = (state, { player1Name, player2Name, winningScore, alternateEvery }) => {
  // trim trailing whitespace from player names
  player1Name = player1Name.trimLeft().trimRight();  
  player2Name = player2Name.trimLeft().trimRight();  

  return {
    ...state, 
    player1Name: player1Name,
    player2Name: player2Name,
    winningScore: winningScore,
    alternateEvery: alternateEvery,
    gameStarted: true // gameStarted is in global state, and does not need to be set by the user, and didn't come from Settings component. But submitting the form dispatches an action that fires this reducer, so we can just change gameStarted to true here 
  }; // Following this, the above are now part of state, so we don't pass them in as actions below
};

const player1 = state => ({ ...state, player1: state.player1 + 1 });

const player2 = state => ({ ...state, player2: state.player2 + 1 });

// Alternate server every {alternateEvery} points, or, if both players pass 20 points, every 2  
const server = (state) => { 
  const {player1, player2, player1Serving, alternateEvery } = state; // As above, alternateEvery is part of state now,^ so we access it through destructuring state   
  const alternation = ((player1 >= 20) && (player2 >= 20)) ? 2 : alternateEvery;    
  return {
    ...state,
    player1Serving: (player1 + player2) % alternation === 0 ? !player1Serving : player1Serving
  } 
}

// To win, a player must (i) reach {winningScore} points, (ii) be at least 2 points ahead  
const winner = (state) => {
  const {player1, player2, winningScore} = state; // Same, winningScore is accessed from state 
  if ((player1 >= winningScore) && (player2 <= (player1 - 2))) {
    return {
      ...state,
      winner: 1
    }
  } else if ((player2 >= winningScore) && (player1 <= (player2 - 2))) {
    return {
      ...state,
      winner: 2
    }
  }
  return { ...state, winner: 0 }
}

// Main reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE_SETTINGS": return saveSettings(state, action); // Not part of scoring logic, so not chained as below
    case "PLAYER_1_SCORED": return winner(server(player1(state))); // like chaining in OOP, each func updates state in succession (but R to L)
    case "PLAYER_2_SCORED": return winner(server(player2(state)));
    case "RESET": return initial;
    default: return state;
  }
};

export default reducer;


// const scoreTable = (state, { value }) => {
//   return {
//       ...state,
//       scoreList: [...state.scoreList, {
//           var: value,
//           var: value,
//           var: value,
//       }],
//   };
// };