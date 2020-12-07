import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./data/store";


// update subscribe to call the ReactDOM.render method whenever the state changes
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
