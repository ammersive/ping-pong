import { Component } from "react";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1Name: props.player1Name,
      player2Name: props.player2Name,
      winningScore: props.winningScore,
      alternateEvery: props.alternateEvery
    };
    this.handleP1Name = this.handleP1Name.bind(this);
    this.handleP2Name = this.handleP2Name.bind(this);
    this.handleWScore = this.handleWScore.bind(this);
    this.handleAlternate = this.handleAlternate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleP1Name(e) {
    this.setState({ player1Name: e.currentTarget.value });
  }
  handleP2Name(e) {
    this.setState({ player2Name: e.currentTarget.value });
  }
  handleWScore(e) {
    this.setState({ winningScore: e.currentTarget.value });
  }
  handleAlternate(e) {
    this.setState({ alternateEvery: e.currentTarget.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    // pass copy of local state to handleSave, so we can pass this data up to index.js wrapper 
    this.props.handleSave({ ...this.state });
  }

  render() {
    let { player1Name, player2Name } = this.props;
    let { winningScore, alternateEvery } = this.state;

    return (
      <form onSubmit={ this.handleSubmit }>
        <div className="form-group">
          <label htmlFor="player1Name">Player 1 Name</label>
          <input
            className="form-control"
            onChange={ this.handleP1Name }
            value={ player1Name }
            name="player1Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="player2Name">Player 2 Name</label>
          <input
            className="form-control"
            onChange={ this.handleP2Name }
            value={ player2Name }
            name="player2Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="winningScore">Winning Score</label>
          <input
            className="form-control"
            onChange={ this.handleWScore }
            value={ winningScore }
            name="winningScore"
          />
        </div>
        <div className="form-group">
          <label htmlFor="alternateEvery">Alternate Every</label>
          <input
            className="form-control"
            onChange={ this.handleAlternate }
            value={ alternateEvery }
            name="alternateEvery"
          />
        </div>
        <button className="btn btn-primary">Start Game</button>
      </form>
    );
  }
}

export default Settings;