import Header from "./Header";
import Button from "./Button"; // imports r-r wrapper (components/Button/index.js)
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
      <ScoreBox1/>
      <ScoreBox2/>      
    </div>

    { /* winner message */}
    <Winner />
    
    <hr />

    { /* reset button */}
    <Button/>
  </>
);

export default App;