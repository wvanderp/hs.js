"use strict";

import {Deck} from "./zones/Deck.js";
import {Hand} from "./zones/Hand.js";
import {Play} from "./zones/Play.js";
import {Secret} from "./zones/Secret.js";
import {Graveyard} from "./zones/Graveyard.js";
import {Removed} from "./zones/Removed.js";
import {SetAside} from "./zones/SetAside.js";

import {CardLocator} from "./cardLocator";
import {CARDTYPES} from "./baseEntities"


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
        this.play = new Play();
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

    playCard(locator, target) {
        if (arguments.length == 0) {
            throw "playCard: not enough options in function call";
        }
        //console.log("amount of arguments: "+arguments.length);
        //console.log("typeof target: "+ typeof target);
        //console.log("typeof card: "+ typeof card);

        if (arguments.length == 1 && typeof target == "undefined" && typeof locator != "undefined") {
            console.log("1 argument");
            if (!(locator instanceof CardLocator)) {
                throw "playCard: unexpeted" + (typeof locator) + "expected CardLocator";
            }

            switch (locator.card.type) {
                case CARDTYPES.minion:
                    playMinion(locator);
                    break;
                case CARDTYPES.spell:
                    playSpell(locator);
                    break;
                case CARDTYPES.weapon:
                    playWeapon(locator);
            }
            return
        }

        if (arguments.length == 2 && typeof target != "undefined" && typeof locator != "undefined") {
            console.log("2 argument");
            if (!(locator instanceof CardLocator)) {
                throw "playCard: unexpeted" + (typeof locator) + "expected CardLocator";
            }

            if (!(target instanceof CardLocator)) {
                throw "playCard: unexpeted" + (typeof locator) + "expected CardLocator";
            }
            let card = locator.card;
            switch (card.type) {
                case CARDTYPES.minion:
                    playMinion(locator, target);
                    break;
                case CARDTYPES.spell:
                    playSpell(locator, target);
                    break;
                case CARDTYPES.weapon:
                    playWeapon(locator, target);
            }
        }
        /////////the real execute functions
        ///////////////////////////////////
        function playMinion(locator, target) {
            if (arguments.length == 1 && typeof target == "undefined" && typeof locator != "undefined") {
                console.log("1 argument");
                locatorTest(locator);

                let card = locator.card;
                play.addCard(card);
                locator.removeCard();
                return
            }

            if (arguments.length == 2 && typeof target != "undefined" && typeof locator != "undefined") {
                console.log("2 argument");
                locatorTest(locator);

                return
            }

            console.log("none of the above")
        }

        function playSpell(locator, target) {
            if (arguments.length == 1 && typeof target == "undefined" && typeof locator != "undefined") {
                console.log("1 argument");
                locatorTest(locator);

                let card = locator.card;


                return
            }

            if (arguments.length == 2 && typeof target != "undefined" && typeof locator != "undefined") {
                console.log("2 argument");
                locatorTest(locator);

                return
            }

            console.log("none of the above")
        }

        function playWeapon(locator, target) {
            if (arguments.length == 1 && typeof target == "undefined" && typeof locator != "undefined") {
                console.log("1 argument");
                locatorTest(locator);
                let card = locator.card;

                return
            }

            if (arguments.length == 2 && typeof target != "undefined" && typeof locator != "undefined") {
                console.log("2 argument");
                locatorTest(locator);

                return
            }


            console.log("none of the above")
        }

        function locatorTest(locator){
            if (!(locator instanceof CardLocator)) {
                throw "playCard: unexpeted" + (typeof locator) + "expected CardLocator";
            }
        }
    }
}