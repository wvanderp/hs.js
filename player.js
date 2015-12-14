class Player{
    constructor(){
        this.health = 30;

        this.wapon = "";

        this.deck = new Zone();
        this.hand = new Zone();
        this.field = new Zone();
    }
}