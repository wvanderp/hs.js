"use strict";
import {Card} from "./card.js"
import {CARDTYPES, CHARACTERCLASS, rarity, race} from "../baseEntities.js"

export class CS2_172 extends Card{
    constructor(){
        super();
        this.id = "CS2_172";
        this.name = "Bloodfen Raptor";
        this.type = CARDTYPES.minion;
        this.set = "CORE";
        this.health = 2;
        this.attack = 3;
        this.manacost = 2;
        this.artist = "Dan Brereton";
        this.race = race.beast;
        this.flavor = "\"Kill 30 raptors.\" - Hemet Nesingwary";
        this.rarity = rarity.free;
        this.collectible = true;
        this.faction = "HORDE";
        this.howToEarnGolden = "Unlocked at Hunter Level 57.";
    }

}

export class CS2_182 extends Card{
    constructor(){
        super();
        this.id = "CS2_182";
        this.name = "Chillwind Yeti";
        this.type = CARDTYPES.minion;
        this.set = "CORE";
        this.health = 5;
        this.attack = 4;
        this.manacost = 4;
        this.artist = "Mauro Cascioli";
        this.flavor = "He always dreamed of coming down from the mountains and opening a noodle shop, but he never got the nerve.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Warrior Level 55.";
    }

}

export class CS2_147 extends Card{
    constructor(){
        super();
        this.id = "CS2_147";
        this.name = "Gnomish Inventor";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Draw a card.";
        this.set = "CORE";
        this.health = 4;
        this.attack = 2;
        this.manacost = 4;
        this.artist = "Court Jones";
        this.flavor = "She's never quite sure what she's making, she just knows it's AWESOME!";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "ALLIANCE";
        this.howToEarnGolden = "Unlocked at Priest Level 57.";
    }
    //[\"BATTLECRY\"]

}