import Header from "./Header";
import ButtonReset from "./ButtonReset";

import ScoreBox1 from "./ScoreBox/ScoreBox1"; // r-r wrapper
import ScoreBox2 from "./ScoreBox/ScoreBox2"; // r-r wrapper

import Winner from "./Winner"; // imports r-r wrapper (components/Winner/index.js)

// import Table from "./Table";

const App = ({ p1score, p2score, winner, player1Serving, onIncrementP1, onIncrementP2, onReset }) => (
  <>
    {/* header */}
    <Header>PongPing</Header>

    {/* scores */}
    <div className="row mb-4">
      <ScoreBox1
          // onIncrement={ onIncrementP1 } // will eventually dispatch actions through r-r
        />
        <ScoreBox2
          // onIncrement={ onIncrementP2 } // will eventually dispatch actions through r-r
        />      
    </div>

    { /* winner message */}
    <Winner />
    
    <hr />

    { /* reset button */}
    <ButtonReset onReset={ onReset }/>

    <hr />

    {/* <Table/> */}
  </>
);

export default App;