
const ScoreBox = ({ score, serverStyling, heading, onIncrement }) => (
  <div className="col-md-6 mt-4">
    <div className={ serverStyling }>
      <h5 className="card-header">{ heading }</h5>
      <div className="card-body">
        <p className="card-text display-1">{ score }</p>
      </div>
      <div className="card-footer">
        <button
          onClick={ onIncrement } 
          className="form-control btn btn-success"
        >+</button>
      </div>
    </div>
  </div>
);

export default ScoreBox;
// const Paragraph = ({ children }) => (
//   <p>{ children }</p>
// );