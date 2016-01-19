"use strict";

import {Game} from "./game.js";
import {CS2_172, CS2_182, CS2_147} from "./cards/all.js";
var game = new Game();

var deck = game.player1.deck;
var hand = game.player1.hand;

deck.addCard(new CS2_172());
deck.addCard(new CS2_182());
deck.addCard(new CS2_172());
deck.addCard(new CS2_172());
deck.addCard(new CS2_172());
deck.addCard(new CS2_172());
deck.addCard(new CS2_172());
deck.addCard(new CS2_172());
deck.addCard(new CS2_172());
deck.addCard(new CS2_172());
deck.addCard(new CS2_172());
deck.addCard(new CS2_172());
deck.addCard(new CS2_172());
deck.addCard(new CS2_172());
deck.addCard(new CS2_172());
deck.addCard(new CS2_147());

for(var i = 0; i < 14; i++){
    game.player1.draw();
}

console.log("\n is full");
console.log(hand.isFull());
console.log("\n cards in hand");

console.log(hand.contents.length);

console.log("\n cards in grafjard");
console.log(game.player1.removed.contents.length);

deck.shuffle();

deck.print();

game.player1.draw();

console.log("\n hand");
hand.print();
console.log("\n deck");
deck.print();



