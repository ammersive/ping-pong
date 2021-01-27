import axios from "../../axios";
import { saveSettings } from "./state";
import { increment } from "./state";

// Creating a new game. (Reducer is passed game id from API to store in state)
export const postNewGame = ({ player1Name, player2Name, winningScore, alternateEvery }) => {
  return (dispatch) => {
    axios.post("/games", {
      player_1: player1Name,
      player_2: player2Name,
      winning_score: winningScore,
      change_serve: alternateEvery 
    }).then(({ data }) => {
      dispatch(saveSettings(data.data));
    });
  };
};

// Update points when a player scores
export const patchScore = player => (dispatch, getState) => {
  // use getState function to get the state object, then read the currentGame property 
  const id = getState().currentGame;  
  axios.patch(`/games/${id}/score`, {
    player: player
  }).then(({ data }) => {
    dispatch(increment(player));
  });
};
// Could also use the data that comes back from the API to set the winner and server properties in app state
// As well as dispatch, can also access the current app state within API action creators: accept getState as the second argument. It's always passed in, but you don't always need it

