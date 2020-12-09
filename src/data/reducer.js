import initial from "./initial";

// helper functions
const player1 = state => ({ ...state, player1: state.player1 + 1 });

const player2 = state => ({ ...state, player2: state.player2 + 1 });

const server = state => { 
  const {player1, player2, player1Serving} = state;
  // Alternate server every 5 points, or, if both players pass 20 points, every 2
  const alterInput = 5; // take input from user later
  const alternation = ((player1 >= 20) && (player2 >= 20)) ? 2 : alterInput;    
  return {
    ...state,
    player1Serving: (player1 + player2) % alternation === 0 ? !player1Serving : player1Serving
  } 
}

const winner = state => {
  const {player1, player2} = state;
  // To win, a player must (i) reach winningScore points, (ii) be at least 2 points ahead
  const winningScore = 21; // take input from user later
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

// Main reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "PLAYER_1_SCORED": return winner(server(player1(state))); // like chaining in OOP, each func updates state in succession (but R to L)
    case "PLAYER_2_SCORED": return winner(server(player2(state)));
    case "RESET": return initial;
    default: return state;
  }
};

export default reducer;