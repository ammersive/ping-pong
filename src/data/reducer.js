import initial from "./initial";

// reducer helper functions
const player1 = state => ({ ...state, player1: state.player1 + 1 });
const player2 = state => ({ ...state, player2: state.player2 + 1 });
const server = state => ({ 
  ...state,
  player1Serving: (state.player1 + state.player2) % 5 === 0 ? !state.player1Serving : state.player1Serving
});
const winner = state => { 
  if (state.player1 >= 21) {
    return {
      ...state,
      winner: 1
    }
  } else if (state.player2 >= 21) {
    return {
      ...state,
      winner: 2
    }
  }
  return { ...state, winner: 0 }
}

const reducer = (state, action) => {
  switch (action.type) {
    case "PLAYER_1_SCORED": return winner(server(player1(state))); // like chaining in OOP, each func updates state in succession (but R to L)
    case "PLAYER_2_SCORED": return winner(server(player2(state)));
    case "RESET": return initial;
    default: return state;
  }
};

export default reducer;