import React from "react";
import GuessInput from "./guessinput";
import GuessButton from "./guessButton";
import About from "./about";

class Gameboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNum: 0,
      guessinput: "",
      min: 0,
      max: 100,
      message: ""
    };
    this.guessInputChange = this.guessInputChange.bind(this);
    this.handleGuessClick = this.handleGuessClick.bind(this);
    this.generateRandomNum = this.generateRandomNum.bind(this)
  }
  componentDidMount() {
    this.setState({ randomNum: this.generateRandomNum() });
  }
  generateRandomNum() {
    return Math.random() * (this.state.max - this.state.min) + this.state.min;
  }
  guessCheck() {
    let message = this.state.message;
    let guessinput = parseInt(this.state.guessinput);
    let randomNum = parseInt(this.state.randomNum);

    if (guessinput > randomNum) {
      this.setState({message: "Too High!"});
    } else {
      this.setState({message: "Too Low!"})
    }
    if (guessinput <= 0 || guessinput > 100 || guessinput === NaN) {
      this.setState({message: "Not A Valid Guess!"}) 
    }
    if (guessinput === randomNum) {
      this.setState({message: "You guessed it!"})
    }

  }
handleGuessClick(){
    this.guessCheck()
}
  guessInputChange(event) {
    this.setState({ guessinput: event.target.value });
  }
  render() {
    console.log(this.state.guessinput);
    return (
      <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-6 mx-auto text-center">
              <div className="guessGame">
        <h1>Guessing Game</h1>
        <input type="number" onChange={this.guessInputChange} className="guessInput" />
        <button onClick={this.handleGuessClick} >Submit</button>
        <div className="message">{this.state.message}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Gameboard;
