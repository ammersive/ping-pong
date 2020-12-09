import { connect } from "react-redux";

import Settings from "./Settings";
import { saveSettings } from "../../data/actions";

const mapStateToProps = state => {
  return {
    player1Name: state.player1Name,
    player2Name: state.player2Name,
    winningScore: state.winningScore,
    alternateEvery: state.alternateEvery
  };
};

const mapDispatchToProps = dispatch => {
  // 'data' is copy of state, passed up from form on point of submit
  return {
    handleSave: data => dispatch(saveSettings(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);