"use strict";

import {Deck} from "./zones/Deck.js";
import {Hand} from "./zones/Hand.js";
import {Play} from "./zones/Play.js";
import {Secret} from "./zones/Secret.js";
import {Graveyard} from "./zones/Graveyard.js";
import {Removed} from "./zones/Removed.js";
import {SetAside} from "./zones/SetAside.js";


export class Player{
    constructor(){
        this.health = 30;

        this.wapon = "";
        this.heroPower = "";

        this.deck = new Deck();
        this.hand = new Hand();
        this.field = new Play();
        this.secret = new Secret();

        this.graveyard = new Graveyard();
        this.removed = new Removed();
        this.setAside = new SetAside();
    }


    draw(){
        this.hand.addCard(this.deck.contents[0]);
        this.deck.contents.splice(0,1);
    }
}