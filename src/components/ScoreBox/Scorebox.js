// the React component

const ScoreBox = ({ score, winner, serving, heading, onIncrement }) => (
  <div className="col-md-6 mt-4">
    <div className={ `card text-center ${serving ? "bg-dark text-white" : ""}` }>
      <h5 className="card-header">{ heading }</h5>
      <div className="card-body">
        <p className="card-text display-1">{ score }</p>
      </div>
      <div className="card-footer">
        <button
          onClick={ onIncrement } 
          className="form-control btn btn-success"
          disabled={ winner !== 0 }
        >+</button>
      </div>
    </div>
  </div>
);

export default ScoreBox;