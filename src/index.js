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
    case "PLAYER2_INCREMENT": return { 
      ...state, 
      player2: state.player2 + 1 
    };
    default: return state;
  }
};

const store = createStore(reducer, initial);

// subscribe to changes
store.subscribe(() => {
  let state = store.getState();
  // log the states
  console.log(state.player1, state.player2);
});

// trigger a player 1 increment action
// store.dispatch({ type: "PLAYER1_INCREMENT" });

// we update subscribe to call the ReactDOM.render method whenever the state changes
const render = () => {
  let state = store.getState();

  // passing in a state.value as a value prop
  ReactDOM.render(
    <React.StrictMode>
      <App 
        p1score={ state.player1 }
        p2score={ state.player2 }
        onIncrement1={() => store.dispatch({ type: "PLAYER1_INCREMENT"})}
        onIncrement2={() => store.dispatch({ type: "PLAYER2_INCREMENT"})}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

store.subscribe(render); // render when state changes
render(); // render when page loads using initial state



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
