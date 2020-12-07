import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";

const initial = {
  player1: 0,
  player2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "PLAYER1_INCREMENT": return { 
      ...state, 
      player1: state.player1 + 1 
    };
    default: return state;
  }
};

const store = createStore(reducer, initial);

// subscribe to changes
store.subscribe(() => {
  let state = store.getState();
  // for now, just log the new count
  console.log(state.player1, state.player2);
});

// trigger a player 1 increment action
store.dispatch({ type: "PLAYER1_INCREMENT" });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
