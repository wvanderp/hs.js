"use strict";

import {Deck} from "./zones/Deck.js";
import {Hand} from "./zones/Hand.js";
import {Play} from "./zones/Play.js";
import {Secret} from "./zones/Secret.js";
import {Graveyard} from "./zones/Graveyard.js";
import {Removed} from "./zones/Removed.js";
import {SetAside} from "./zones/SetAside.js";


export class Player {
    constructor() {
        this.health = 30;
        this.attack = 0;
        this.armor = 0;

        this.spellDamage = 0;

        this.wapon = null;
        this.heroPower = null;

        this.deck = new Deck();
        this.hand = new Hand();
        this.field = new Play();
        this.secret = new Secret();

        this.graveyard = new Graveyard();
        this.removed = new Removed();
        this.setAside = new SetAside();
    }


    draw() {
        if (!this.hand.isFull()) {
            this.hand.addCard(this.deck.getCard(0));
        } else {
            this.removed.addCard(this.deck.getCard(0))
        }
        this.deck.removeCard(0);
    }
}