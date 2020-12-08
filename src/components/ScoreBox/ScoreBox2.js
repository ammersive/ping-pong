// mapStateToProps with ScoreBox 1 info, like index

// Container component, using the connect function to get values from the store.

import { connect } from "react-redux";

// import the React component that we want to wrap in the same directory
import ScoreBox2 from "./ScoreBox";

const mapStateToProps = (state) => {
  return {
    score: state.player2, 
    winner: state.winner, 
    serving: !state.player1Serving,   
    onIncrement: state.onIncrementP2
  };
};

// use the connect function to connect mapStateToProps
// to the React component we want to wrap
// returns a new React component
export default connect(mapStateToProps)(ScoreBox2);