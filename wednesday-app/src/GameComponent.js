import { Component } from "react";
import Game from "./Game";

class GameComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: new Game(),
            guess: -1
        };
        this.playButtonClicked = this.playButtonClicked.bind(this);
        this.guessChanged = this.guessChanged.bind(this);
    }

    guessChanged(e) {
        this.setState({ guess: e.target.value });
    }

    playButtonClicked() {
        let { guess, game } = this.state;
        game.play(guess);
        this.setState({ game });
    }

    render() {
        let  { attempts, message, gameOver } = this.state.game;
        return (<div>
            <h1>Welcome to the guessing game. Enter a number between 1 and 100</h1>
            <input type="number" placeholder="Enter your guess" onChange={this.guessChanged}/>
            <button disabled={gameOver ? true: false}  onClick={this.playButtonClicked}>Play</button>
            <hr/>
            <h1>{message}</h1>
            {
                attempts > 0 ? <h2>Attempts: {attempts}</h2> : <span/>
            }
            
        </div>);
    }
}

export default GameComponent;