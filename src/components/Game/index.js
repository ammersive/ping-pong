// R-R wrapper
// Uses the connect function to get values from the store.

import { connect } from "react-redux";

// import the component we want to wrap
import Game from "./Game";

// mapStateToProps is called every time the store state changes, and receives the entire store state
// Used here to pass updated values to props, then passed to the specific instance of the component
const mapStateToProps = (state) => { 
  return {
    state      
  };
};

// Connect function connects mapStateToProps, mapDispatchToProps to the React component
// Returns a new React component
export default connect(mapStateToProps)(Game);