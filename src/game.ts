import Player from './player';

export default class Game {
    player1: Player;

    player2: Player;

    currentPlayer: Player;

    currentPlayerNum: number;

    constructor() {
        this.player1 = new Player();
        this.player2 = new Player();

        this.currentPlayer = this.player1;
        this.currentPlayerNum = 1;
    }

    nextTurn(): boolean {
        if (this.currentPlayerNum === 1) {
            this.currentPlayer = this.player2;
            this.currentPlayerNum = 2;
        } else {
            this.currentPlayer = this.player1;
            this.currentPlayerNum = 1;
        }

        return false;
    }
}
