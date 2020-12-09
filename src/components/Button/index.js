// R-R wrapper 
// Uses the connect function to get values from the store.

import { connect } from "react-redux";

// import the component we want to wrap
import Button from "./Button";

//  Using mapDispatchToProps to create a function that dispatches when called, and which can be passed as props to the relevant component
const mapDispatchToProps = (dispatch) => { 
  return {
    onReset: () => dispatch({ type: "RESET"})       
  };
};

// Connect function connects mapDispatchToProps to the React component. null because there is no mapStateToProps which would otherwise be the first argument
// Returns a new React component
export default connect(null, mapDispatchToProps)(Button);