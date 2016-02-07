"use strict";
var assert = require('assert');
var should = require("should");

import {Deck} from "./hs.js/zones/Deck.js";
import {Hand} from "./hs.js/zones/Hand.js";

import {Player} from "./hs.js/player.js";
import {Game} from  "./hs.js/game.js";

import {CS2_172, CS2_182, CS2_147} from "./hs.js/cards/all.js";

describe('Deck', function () {
    describe('#numbers', function () {
        it('should initiate empty', function () {
            var deck = new Deck();
            deck.contents.length.should.equal(0);
        });

        it('should have 4 cards when you add 4 cards', function () {
            var deck = new Deck();

            deck.addCard(new CS2_172());
            deck.addCard(new CS2_182());
            deck.addCard(new CS2_172());
            deck.addCard(new CS2_172());

            deck.contents.length.should.equal(4);
        });
    });

    describe('#shuffling', function () {
        //everyday i'm shuffling
        it('should be different when shuffled', function () {
            var deck = new Deck();

            deck.addCard(new CS2_172());
            deck.addCard(new CS2_182());
            deck.addCard(new CS2_172());
            deck.addCard(new CS2_147());

            var oldDeck = deck;

            deck.shuffle();

            deck.print();
            console.log();
            oldDeck.print();

            deck.contents.should.notEqual(oldDeck.contents);
        });
    });
});

describe('hand', function () {
    describe('#numbers', function () {
        it('should initiate empty', function () {
            var hand = new Hand();
            hand.contents.length.should.equal(0);
        });

        it('have 4 cards when you add 4 cards', function () {
            var hand = new Hand();

            hand.addCard(new CS2_172());
            hand.addCard(new CS2_182());
            hand.addCard(new CS2_172());
            hand.addCard(new CS2_172());

            hand.contents.length.should.equal(4);
        });
    });
});

describe('player', function () {
    describe('#drawing', function () {
        it('a card should go from deck to hand', function () {
            var player = new Player();
            player.deck.addCard(new CS2_172());
            player.deck.addCard(new CS2_172());
            player.deck.addCard(new CS2_172());
            player.deck.addCard(new CS2_172());
            player.deck.addCard(new CS2_172());
            player.deck.addCard(new CS2_172());

            player.draw();

            player.hand.contents.length.should.equal(1);

        });

        it('two card should go from deck to hand', function () {
            var player = new Player();
            player.deck.addCard(new CS2_172());
            player.deck.addCard(new CS2_172());
            player.deck.addCard(new CS2_172());

            player.draw();
            player.draw();

            player.hand.contents.length.should.equal(2);

        });

        it('if more than 10 cards are drawn than the cards are milled', function () {
            var player = new Player();
            var deck = player.deck;
            var hand = player.hand;
            var removed = player.removed;


            for (var j = 0; j < 20; j++) {
                deck.addCard(new CS2_147());
            }

            for (var i = 0; i < 14; i++) {
                player.draw();
            }

            hand.contents.length.should.equal(10);
            deck.contents.length.should.equal(6);
            removed.contents.length.should.equal(4);
        });
    });
});

describe('game', function () {
    describe('#next turn', function () {
        it('should switch user when told to', function () {
            var game = new Game();

            game.nextTurn();

            game.currentPlayerNum.should.equal(2)
        });

        it('should switch twich when told to', function () {
            var game = new Game();

            game.nextTurn();
            game.nextTurn();
            game.currentPlayerNum.should.equal(1)
        })
    });
});