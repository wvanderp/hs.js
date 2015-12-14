class Player{
    constructor(){
        this.health = 30;

        this.wapon = "";

        this.deck = new Deck();
        this.hand = new Hand();
        this.field = new Play();
    }
}