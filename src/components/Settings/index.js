import { connect } from "react-redux";

import Settings from "./Settings";

const mapStateToProps = state => {
  return {
    player1Name: state.player1Name,
    player2Name: state.player2Name,
    winningScore: state.winningScore,
    alternateEvery: state.alternateEvery
  };
};

export default connect(mapStateToProps)(Settings);