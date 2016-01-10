"use strict";

require("./baseEntities");
require("./game.js");
require("./cards/card.js");



var game = new Game();

game.player1.deck.addCard(new CS2_172());
game.player1.deck.addCard(new CS2_182());
game.player1.deck.addCard(new CS2_172());
game.player1.deck.addCard(new CS2_172());
game.player1.deck.addCard(new CS2_147());

console.log(game.player1.deck.print());