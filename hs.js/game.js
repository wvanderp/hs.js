"use strict";
import {Player} from "./player.js";

export class Game{
    constructor(){
        this.player1 = new Player();
        this.player2 = new Player();

        this.currentPlayer = this.player1;
        this.currentPlayerNum = 1;
    }

    nextTurn(){
        if(this.currentPlayerNum == 1) {
            this.currentPlayer = this.player2;
            this.currentPlayerNum = 2;
        }else{
            this.currentPlayer = this.player1;
            this.currentPlayerNum = 1;
        }

        return false;
    }
}
