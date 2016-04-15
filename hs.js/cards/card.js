"use strict";
import {CARDTYPES, CHARACTERCLASS, rarity, race} from "../baseEntities.js"

export class Card {
    constructor() {
        this.name = "";
        this.type = CARDTYPES.none;
        this.characterClass = CHARACTERCLASS.none;
        this.rarity = rarity.free;
        this.collectible = null;
        this.howToEarnGolden = "";
        this.howToEarn = "";


        this.manacost = 0;
        this.health = 0;
        this.maxHealth = this.health;
        this.attack = 0;
        this.durability = 0;

        this.text = "";
        this.set = "";
        this.artist = "";
        this.flavor = "";
        this.targetingArrowText = "";
        this.textInPlay = "";

        this.taunt = false;
        this.stealth = false;
        this.divineshield = false;


        //state
        this.frozen = false;
        this.silenced = false;


        this.race = null;
        this.faction = null;
    }

    onBattlecry() {
    };

    onCarddraw() {
    };

    onDeathrattle() {
    };

    valueOf(){
        var out = "";
        out += "id: " + this.id + "\n";
        out += "name: " + this.name + "\n";

        if (typeof this.attack != "undefined"){
            out += "attack: " + this.attack + "\n";
        }

        if (typeof this.health != "undefined"){
            out += "health: " + this.health + "\n";
        }

        if (typeof this.text != "undefined"){
            out += "text: " + this.text + "\n";
        }

        return out;
    }
}
	
