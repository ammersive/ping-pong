// R-R wrapper (alike Winner/index.js) 
// Uses the connect function to get values from the store.

import { connect } from "react-redux";

// import the component we want to wrap
import ScoreBox2 from "./ScoreBox";

// mapStateToProps is called every time the store state changes
// It receives the entire store state
// Use it here to pass updated values to props passed to the specific instance of the component (currently in App.js)
const mapStateToProps = (state) => {
  return {
    score: state.player2, 
    winner: state.winner, 
    serving: !state.player1Serving, 
    heading: "Player 2",
  };
};

// Connect function connects mapStateToProps to the React component
// Returns a new React component
export default connect(mapStateToProps)(ScoreBox2);