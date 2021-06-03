class Game {
    constructor() {
        this.target = Math.round(Math.random() * 100);
        this.attempts = 0;
        this.message = '';
        this.gameOver = false;
    }
    play(guess) {
        this.attempts += 1;
        let {target} = this;
        if(guess > target) {
            this.message = "Aim lower";
        } else if(guess < target) {
            this.message = "Aim higher";
        } else {
            this.message = "You've got it!!!";
            this.gameOver = true;
        }
    }
}
export default Game;