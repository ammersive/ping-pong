import Header from "./Header";
import ScoreBox from "./ScoreBox";
// import Winner from "./Winner";
// import ButtonReset from "./ButtonReset";

import Winner from "./Winner"; // this imports index.js
import ButtonReset from "./ButtonReset";

const App = ({ p1score, p2score, winner, player1Serving, onIncrementP1, onIncrementP2, onReset }) => (
  <>
    {/* header */}
    <Header>PongPing</Header>

    {/* scores */}
    <div className="row mb-4">
      <ScoreBox 
        score={ p1score }
        serving={ player1Serving }
        heading={ "Player 1" }
        onIncrement={ onIncrementP1 }
        winner={ winner }
      />
      <ScoreBox 
        score={ p2score }
        serving={ !player1Serving }
        heading={ "Player 2" }
        onIncrement={ onIncrementP2 }
        winner={ winner }
      />
    </div>

    { /* winner message */}
    {/* <Winner winner={ winner }/> */}
    <Winner />
    
    <hr />

    { /* reset button */}
    <ButtonReset onReset={ onReset }/>
  </>
);

export default App;