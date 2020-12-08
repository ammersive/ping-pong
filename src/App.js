import Header from "./components/Header";
import ScoreBox from "./components/ScoreBox";
import Winner from "./components/Winner";
import ButtonReset from "./components/ButtonReset";

const App = ({ p1score, p2score, player1Serving, winner, onIncrementP1, onIncrementP2, onReset }) => (
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
    <Winner winner={ winner }/>
    
    <hr />

    { /* reset button */}
    <ButtonReset onReset={ onReset }/>
  </>
);

export default App;