"use strict";

require("./all.js");
require("./Druid.js");
require("./Hunter.js");
require("./Mage.js");
require("./Paladin.js");
require("./Priest.js");
require("./Rogue.js");
require("./Shaman.js");
require("./Warlock.js");
require("./Warrior.js");


class Card{
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


}
	
