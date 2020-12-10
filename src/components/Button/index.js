// R-R wrapper 
// Uses the connect function to get values from the store.

import { connect } from "react-redux";

// import the component we want to wrap
import Button from "./Button";

// import action creator function
import { reset } from "../../data/actions/state";

//  Using mapDispatchToProps to create a function that dispatches when called, and which can be passed as props to the relevant component
const mapDispatchToProps = (dispatch) => { 
  return {
    // pass onReset an anon func that dispatches the reset action creator func 
    onReset: () => dispatch(reset())       
  };
};

// Connect function connects mapDispatchToProps to the React component. null because there is no mapStateToProps which would otherwise be the first argument
// Returns a new React component
export default connect(null, mapDispatchToProps)(Button);