class Player{
    constructor(){
        this.health = 30;

        this.wapon = "";
        this.heroPower = "";

        this.deck = new Deck();
        this.hand = new Hand();
        this.field = new Play();
        this.secret = new Secret();

        this.graveyard = new Graveyard();
        this.removed = new Removed();
        this.removed = new Removed();
        this.setAside = new SetAside();
    }
}