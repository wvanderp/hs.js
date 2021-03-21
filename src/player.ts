import Deck from './zones/Deck';
import Hand from './zones/Hand';
import Play from './zones/Play';
import Secret from './zones/Secret';
import Graveyard from './zones/Graveyard';
import Removed from './zones/Removed';
import SetAside from './zones/SetAside';

import CardLocator from './cardLocator';
import {CARDTYPES} from './baseEntities';
import Weapon from './Enitities/Weapons/Weapon';
import HeroPower from './Enitities/HeroPower/HeroPower';
import Zone from './zones/Zone';

export default class Player {
    health: number;

    attack: number;

    armor: number;

    spellDamage: number;

    weapon: Weapon | null;

    heroPower: HeroPower | null;

    deck: Deck;

    hand: Hand;

    play: Play;

    secret: Secret;

    graveyard: Graveyard;

    removed: Removed;

    setAside: SetAside;

    constructor() {
        this.health = 30;
        this.attack = 0;
        this.armor = 0;

        this.spellDamage = 0;

        this.weapon = null;
        this.heroPower = null;

        this.deck = new Deck();
        this.hand = new Hand();
        this.play = new Play();
        this.secret = new Secret();

        this.graveyard = new Graveyard();
        this.removed = new Removed();
        this.setAside = new SetAside();
    }

    draw(): void {
        if (!this.hand.isFull()) {
            this.hand.addCard(this.deck.getCard(0));
        } else {
            this.removed.addCard(this.deck.getCard(0));
        }
        this.deck.removeCard(0);
    }

    playCard(locator: CardLocator, target: Zone): void {
        switch (locator.card.type) {
            case CARDTYPES.GAME_MODE_BUTTON:
                break;
            case CARDTYPES.HERO_POWER:
                break;
            case CARDTYPES.HERO:
                break;
            case CARDTYPES.MINION:
                target.addCard(locator.card);
                locator.removeCard();
                break;
            case CARDTYPES.MOVE_MINION_HOVER_TARGET:
                break;
            case CARDTYPES.SPELL:
                break;
            case CARDTYPES.WEAPON:
                this.weapon = locator.card;
                break;
            default: break;
        }
    }
}
