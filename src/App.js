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
      />

      <ScoreBox 
        score={ p2score }
        serverStyling={`card text-center ${player1Serving? "" : "bg-dark text-white"}`}
        heading={ "Player 2" }
        onIncrement={ onIncrementP2 }
      />

      {/* not so sure if ScoreBox component is ideal, if there's more logic handling differeing across players. Let's see what tomorrow brings...
      
      <div className="col-md-6 mt-4">
        <div className={`card text-center ${player1Serving? "bg-dark text-white" : ""}`}>
          <h5 className="card-header">Player 1</h5>
          <div className="card-body">
            <p className="card-text display-1">{ p1score }</p>
          </div>
          <div className="card-footer">
            <button
              onClick={ onIncrementP1 } 
              className="form-control btn btn-success"
            >+</button>
          </div>
        </div>
      </div>

      <div className="col-md-6 mt-4">
        <div className={`card text-center ${player1Serving? "" : "bg-dark text-white"}`}>
          <h5 className="card-header">Player 2</h5>
          <div className="card-body">
            <p className="card-text display-1">{ p2score }</p>
          </div>
          <div className="card-footer">
            <button
              onClick={ onIncrementP2 } 
              className="form-control btn btn-success"
            >+</button>
          </div>
        </div>
      </div> */}
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