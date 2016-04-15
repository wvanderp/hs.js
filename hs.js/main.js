"use strict";

import {Game} from "./game.js";
import {CardLocator} from "./cardLocator";
import {CS2_172, CS2_182, CS2_147} from "./cards/all.js";
var game = new Game();

var deck = game.player1.deck;
var hand = game.player1.hand;

deck.addCard(new CS2_172());

game.player1.playCard(new CardLocator(deck, 0));

