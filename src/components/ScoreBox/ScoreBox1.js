// mapStateToProps with ScoreBox 1 info, like index

// Container component, using the connect function to get values from the store.

import { connect } from "react-redux";

// import the React component that we want to wrap in the same directory
import ScoreBox1 from "./ScoreBox";

const mapStateToProps = (state, { onIncrementP1 }) => { // pass in props as 2nd arg
  return {
    score: state.player1, 
    winner: state.winner, 
    serving: state.player1Serving,
    heading: "Player 1",   
    onIncrement: onIncrementP1
  };
};

// use the connect function to connect mapStateToProps
// to the React component we want to wrap
// returns a new React component
export default connect(mapStateToProps)(ScoreBox1);