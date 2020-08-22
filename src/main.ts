import Game from './game';
import CardLocator from './cardLocator';
import cards from '../data/all';

const game = new Game();

const {deck} = game.player1;
const {hand} = game.player1;

deck.addCard(cards.CS2_172);

game.player1.playCard(new CardLocator(deck, 0), game.player1.play);
