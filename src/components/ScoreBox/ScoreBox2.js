// R-R wrapper (alike Winner/index.js) 
// Uses the connect function to get values from the store.

import { connect } from "react-redux";

// import the component we want to wrap
import ScoreBox2 from "./ScoreBox";

// import action creator function
import { increment2 } from "../../data/actions/state";

// mapStateToProps is called every time the store state changes, and receives the entire store state
// Used here to pass updated values to props, then passed to the specific instance of the component
const mapStateToProps = (state) => { 
  return {
    score: state.player2, 
    winner: state.winner, 
    serving: !state.player1Serving,
    heading: state.player2Name,       
  };
};

//  Using mapDispatchToProps to create a function that dispatches when called, and which can be passed as a prop to the relevant component
const mapDispatchToProps = (dispatch) => { 
  return {
    // pass onIncrement an anon func that dispatches the increment2 action creator func 
    onIncrement: () => dispatch(increment2())       
  };
};

// Connect function connects mapStateToProps, mapDispatchToProps to the React component
// Returns a new React component
export default connect(mapStateToProps, mapDispatchToProps)(ScoreBox2);