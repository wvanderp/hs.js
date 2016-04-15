export class CardLocator{
    constructor(zone, index){
        this.zone = zone;
        this.index = index;

        this.card = zone.getCard(index);
    }

    removeCard(){
        this.zone.removeCard(this.index);
    }

    valueOf(){
        var out = "";
        out += "zone:\n";
        out += this.zone.valueOf+"\n";

        out += "index: " + this.index;
        return out;
    }
}