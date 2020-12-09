// R-R wrapper
// Uses the connect function to get values from the store.
import { connect } from "react-redux";

// import the component we want to wrap
import Settings from "./Settings";
// import action creator function
import { saveSettings } from "../../data/actions";

// mapStateToProps is called every time the store state changes, and receives the entire store state
// Used here to pass updated values to props, then passed to the specific instance of the component
const mapStateToProps = state => {
  return {
    player1Name: state.player1Name,
    player2Name: state.player2Name,
    winningScore: state.winningScore,
    alternateEvery: state.alternateEvery
  };
};

// Using mapDispatchToProps to create a function that dispatches when called, and which can be passed as a prop to the relevant component
const mapDispatchToProps = dispatch => {
  // pass handleSave an anon func that dispatches the saveSettings action creator func 
  // 'data' is copy of state, passed up from form on point of submit
  return {
    handleSave: data => dispatch(saveSettings(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);