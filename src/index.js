import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";

const initial = {
  player1: 0,
  player2: 0,
  player1Serving: true,
  winner: 0
};

// reducer helper functions
const player1 = state => ({ ...state, player1: state.player1 + 1 });
const player2 = state => ({ ...state, player2: state.player2 + 1 });
const server = state => ({ 
  ...state,
  player1Serving: (state.player1 + state.player2) % 5 === 0 ? !state.player1Serving : state.player1Serving
});
const winner = state => { 
  if (state.player1 >= 21) {
    return {
      ...state,
      winner: 1
    }
  } else if (state.player2 >= 21) {
    return {
      ...state,
      winner: 2
    }
  }
  return { ...state, winner: 0 }
}

const reducer = (state, action) => {
  switch (action.type) {
    case "PLAYER_1_SCORED": return winner(server(player1(state))); // like chaining in OOP, each func updates state in succession (but R to L)
    case "PLAYER_2_SCORED": return winner(server(player2(state)));
    case "RESET": return initial;
    default: return state;
  }
};

const store = createStore(
  reducer,
  initial,
  window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// store.subscribe(() => {
//   let state = store.getState();
//   console.log(state.player1, state.player2); // see what's going on earlier in build
// });

// trigger a player 1 increment action // another earlier check
// store.dispatch({ type: "PLAYER1_INCREMENT" });

// we update subscribe to call the ReactDOM.render method whenever the state changes
const render = () => {
  let state = store.getState();  
  
  ReactDOM.render(
    <React.StrictMode>
      <App 
        p1score={ state.player1 }
        p2score={ state.player2 }
        player1Serving={ state.player1Serving }
        winner={ state.winner }
        onIncrementP1={() => store.dispatch({ type: "PLAYER_1_SCORED"})}
        onIncrementP2={() => store.dispatch({ type: "PLAYER_2_SCORED"})}
        onReset={() => store.dispatch({ type: "RESET"})}
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
