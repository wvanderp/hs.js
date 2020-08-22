import Zone from './Zone';

export default class Deck extends Zone {
    constructor() {
        super();
        this.contents = [];
        this.maxSlots = 60;
    }

    shuffle() : void {
        let counter = this.contents.length;
        let temporary;
        let index;

        // While there are elements in the this.contents
        while (counter > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * counter);

            // Decrease counter by 1
            counter--;

            // And swap the last element with it
            temporary = this.contents[counter];
            this.contents[counter] = this.contents[index];
            this.contents[index] = temporary;
        }
    }
}
