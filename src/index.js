import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import store from "./data/store";
import { Provider } from "react-redux";


const render = () => {
// let state = store.getState(); // I think everything using state is now in the wrappers

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={ store }>
        <App 
          // p1score={ state.player1 } // this and below values are now being assigned in the wrappers
          // p2score={ state.player2 }
          // player1Serving={ state.player1Serving }
          // winner={ state.winner }
          // onIncrementP1={() => store.dispatch({ type: "PLAYER_1_SCORED"})}
          // onIncrementP2={() => store.dispatch({ type: "PLAYER_2_SCORED"})}
          onReset={() => store.dispatch({ type: "RESET"})}
        />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};
render();
store.subscribe(render);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
