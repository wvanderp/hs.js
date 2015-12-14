class Card{
    constructor(){
        this.name = "";
        this.type = CARDTYPES.none;
        this.characterClass = CHARACTERCLASS.none;

        this.manacost = 0;
        this.health = 0;
        this.maxHealth = 0;
        this.attack = 0;

        this.taunt = false;
        this.stealth = false;
        this.divineshield = false;
    }

    onBattlecry(){};
    onCarddraw(){};
    onDeathrattle(){};


}
	
