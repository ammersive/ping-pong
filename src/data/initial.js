const initial = {
  player1: 0,
  player2: 0,
  player1Serving: true,
  winner: 0,
  winningScore: 21,
  alternateEvery: 5,
  gameStarted: false,
  currentGame: 0, // current game id needs to be stored in app state, api will update
};

export default initial;