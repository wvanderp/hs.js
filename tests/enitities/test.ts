import {describe, it} from 'mocha';
import {expect} from 'chai';
import Deck from '../../src/zones/Deck';
import Hand from '../../src/zones/Hand';

import Player from '../../src/player';
import Game from '../../src/game';

import cards from '../../data/all';

describe('Deck', function () {
    describe('#numbers', function () {
        it('should initiate empty', function () {
            const deck = new Deck();
            expect(deck.contents.length).to.equal(0);
        });

        it('should have 4 cards when you add 4 cards', function () {
            const deck = new Deck();

            deck.addCard(cards.CS2_172);
            deck.addCard(cards.CS2_182);
            deck.addCard(cards.CS2_172);
            deck.addCard(cards.CS2_172);

            const expectedContent = [
                cards.CS2_172,
                cards.CS2_182,
                cards.CS2_172,
                cards.CS2_172
            ];

            expect(deck.contents.length).to.equal(4);
            expect(deck.contents).to.deep.equal(expectedContent);
        });
    });

    describe('#shuffling', function () {
        // everyday i'm shuffling
        it('should be different when shuffled', function () {
            const deck = new Deck();

            deck.addCard(cards.CS2_172);
            deck.addCard(cards.CS2_182);
            deck.addCard(cards.CS2_172);
            deck.addCard(cards.CS2_147);

            const oldDeck = new Deck();

            oldDeck.addCard(cards.CS2_172);
            oldDeck.addCard(cards.CS2_182);
            oldDeck.addCard(cards.CS2_172);
            oldDeck.addCard(cards.CS2_147);

            deck.shuffle();

            expect(JSON.stringify(deck.contents)).to.not.equal(JSON.stringify(oldDeck.contents));
        });
    });
});

describe('hand', function () {
    describe('#numbers', function () {
        it('should initiate empty', function () {
            const hand = new Hand();
            expect(hand.contents.length).to.equal(0);
        });

        it('have 4 cards when you add 4 cards', function () {
            const hand = new Hand();

            hand.addCard(cards.CS2_172);
            hand.addCard(cards.CS2_182);
            hand.addCard(cards.CS2_172);
            hand.addCard(cards.CS2_172);

            expect(hand.contents.length).to.equal(4);
        });
    });
});

describe('player', function () {
    describe('#drawing', function () {
        it('a card should go from deck to hand', function () {
            const player = new Player();
            player.deck.addCard(cards.CS2_172);
            player.deck.addCard(cards.CS2_172);
            player.deck.addCard(cards.CS2_172);
            player.deck.addCard(cards.CS2_172);
            player.deck.addCard(cards.CS2_172);
            player.deck.addCard(cards.CS2_172);

            player.draw();

            expect(player.hand.contents.length).to.equal(1);
            expect(player.deck.contents.length).to.equal(5);
        });

        it('two card should go from deck to hand', function () {
            const player = new Player();
            player.deck.addCard(cards.CS2_172);
            player.deck.addCard(cards.CS2_172);
            player.deck.addCard(cards.CS2_172);

            player.draw();
            player.draw();

            expect(player.hand.contents.length).to.equal(2);
            expect(player.deck.contents.length).to.equal(1);
        });

        it('if more than 10 cards are drawn than the cards are milled', function () {
            const player = new Player();
            const {deck} = player;
            const {hand} = player;
            const {removed} = player;

            for (let index = 0; index < 20; index++) {
                deck.addCard(cards.CS2_147);
            }

            for (let index = 0; index < 14; index++) {
                player.draw();
            }

            expect(hand.contents.length).to.equal(10);
            expect(deck.contents.length).to.equal(6);
            expect(removed.contents.length).to.equal(4);
        });
    });
});

describe('game', function () {
    describe('#next turn', function () {
        it('should switch user when told to', function () {
            const game = new Game();

            game.nextTurn();

            expect(game.currentPlayerNum).to.equal(2);
        });

        it('should switch when told to', function () {
            const game = new Game();

            game.nextTurn();
            game.nextTurn();

            expect(game.currentPlayerNum).to.equal(1);
        });
    });
});

describe('card', function () {
    describe('#toString', function () {});
});
