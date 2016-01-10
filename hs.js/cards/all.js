class CS2_172 extends Card{
    constructor(){
        super();
        this.name = "Bloodfen Raptor";
        this.type = CARDTYPES.minion;
        this.characterClass = CHARACTERCLASS.all;

        this.rarity = rarity.free;

        this.manacost = 2;
        this.attack = 3;
        this.health = 2;

        this.race = race.beast;
	}
}

class CS2_182 extends Card{
    constructor(){
        super();
        this.name = "Chillwind Yeti";
        this.type = CARDTYPES.minion;
        this.characterClass = CHARACTERCLASS.all;

        this.rarity = rarity.common;

        this.manacost = 4;
        this.attack = 4;
        this.health = 5;

        this.race = race.none;
    }
}

class CS2_147 extends Card{
    constructor(){
        super();
        this.name = "Gnomish Inventor";
        this.type = CARDTYPES.minion;
        this.characterClass = CHARACTERCLASS.all;

        this.rarity = rarity.common;

        this.manacost = 4;
        this.attack = 2;
        this.health = 4;

        this.race = race.none;
    }

    battlecry(){
        //"<b>Battlecry:</b> Draw a card."
    }
}

