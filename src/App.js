import ScoreBox from "./components/ScoreBox";

const App = ({ p1score, p2score, player1Serving, winner, onIncrementP1, onIncrementP2, onReset }) => (
  <>
    {/* header */}
    <header className="jumbotron mt-4 mb-0">
      <h1>PongPing</h1>
    </header>

    {/* scores */}
    <div className="row mb-4">
      <ScoreBox 
        score={ p1score }
        serverStyling={`card text-center ${player1Serving? "bg-dark text-white" : ""}`}
        heading={ "Player 1" }
        onIncrement={ onIncrementP1 }
        winner={ winner }
      />
      <ScoreBox 
        score={ p2score }
        serverStyling={`card text-center ${player1Serving? "" : "bg-dark text-white"}`}
        heading={ "Player 2" }
        onIncrement={ onIncrementP2 }
        winner={ winner }
      />
    </div>

    { /* winner message */}
    { winner ? 
      <h2 className="alert alert-success">Player { winner } wins!</h2> 
      : null
    }
    
    <hr />

    { /* reset button */}
    <button
      onClick={ onReset } 
      className="btn btn-danger"
    >
      Reset
    </button>
  </>
);

export default App;