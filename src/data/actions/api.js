import axios from "../../axios";
import { saveSettings } from "./state";

export const postNewGame = ({ player1Name, player2Name, winningScore, alternateEvery }) => {
  return (dispatch) => {
    axios.post("/games", {
      player_1 : player1Name,
      player_2: player2Name,
      winning_score: winningScore,
      change_serve: alternateEvery 
    }).then(({ data }) => {
      dispatch(saveSettings(data.data));
    });
  };
};