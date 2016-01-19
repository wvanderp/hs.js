import {Card} from "./card.js";
import {CARDTYPES, CHARACTERCLASS, rarity, race} from "../baseEntities.js"

export class CS2_017 extends Card{
    constructor(){
        super();
        this.name = "Shapeshift";
        this.type = CARDTYPES.heroPower;
        this.characterClass = CHARACTERCLASS.druid;

        this.rarity = rarity.free;

        this.manacost = 2;

        this.race = race.none;
    }

    onSpawn(){

    }
}