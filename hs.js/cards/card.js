"use strict";
import {CARDTYPES, CHARACTERCLASS, rarity, race} from "../baseEntities.js"

export class Card{
    constructor(){
        this.name = "";
        this.type = CARDTYPES.none;
        this.characterClass = CHARACTERCLASS.none;
        this.rarity = rarity.free;

        this.manacost = 0;
        this.health = 0;
        this.maxHealth = this.health;
        this.attack = 0;

        this.taunt = false;
        this.stealth = false;
        this.divineshield = false;

        this.frozen = false;
        this.silenced = false;


        this.race = ""
    }

    onBattlecry(){};
    onCarddraw(){};
    onDeathrattle(){};


};
	
