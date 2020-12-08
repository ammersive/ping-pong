// This is going to hold the container component. 
// The container component can use the connect function to get values from the store.

import { connect } from "react-redux";

// import the React component that we want to wrap in the same directory, so path is short
import Winner from "./Winner";

const mapStateToProps = state => {
  return {
    winner: state.winner,
  };
};

// use the connect function to connect mapStateToProps
// to the React component we want to wrap
// returns a new React component
export default connect(mapStateToProps)(Winner);