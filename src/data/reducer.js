import initial from "./initial";

// helper functions
const player1 = state => ({ ...state, player1: state.player1 + 1 });

const player2 = state => ({ ...state, player2: state.player2 + 1 });

const server = state => { 
  const {player1, player2, player1Serving} = state;
  // If both players pass 20 points, alternate server every 2 points i
  if ((state.player1 >= 20) && (state.player2 >= 20)) {
    return {
      ...state,
      player1Serving: (player1 + player2) % 2 === 0 ? !player1Serving : player1Serving
    }
  }
  // Alternate server every 5 points 
  return {
    ...state,
    player1Serving: (player1 + player2) % 5 === 0 ? !player1Serving : player1Serving
  } 
}

const winner = state => {
  const {player1, player2} = state;
  // To win, a player must (i) reach 21 points, (ii) be at least 2 points ahead
  if ((player1 >= 21) && (player2 <= (player1 - 2))) {
    return {
      ...state,
      winner: 1
    }
  } else if ((player2 >= 21) && (player1 <= (player2 - 2))) {
    return {
      ...state,
      winner: 2
    }
  }
  return { ...state, winner: 0 }
}

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "PLAYER_1_SCORED": return winner(server(player1(state))); // like chaining in OOP, each func updates state in succession (but R to L)
    case "PLAYER_2_SCORED": return winner(server(player2(state)));
    case "RESET": return initial;
    default: return state;
  }
};

export default reducer;