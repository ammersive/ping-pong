import Header from "./Header";
import ButtonReset from "./ButtonReset";

// import ScoreBox from "./ScoreBox";

import ScoreBox1 from "./ScoreBox/ScoreBox1";
import ScoreBox2 from "./ScoreBox/ScoreBox2";

import Winner from "./Winner"; // this imports index.js

const App = ({ p1score, p2score, winner, player1Serving, onIncrementP1, onIncrementP2, onReset }) => (
  <>
    {/* header */}
    <Header>PongPing</Header>

    {/* scores */}
    <div className="row mb-4">
      <ScoreBox1
          heading={ "Player 1" }
        />
        <ScoreBox2
          heading={ "Player 2" }
        />
      {/* <ScoreBox 
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
      /> */}
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