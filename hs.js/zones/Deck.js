class Deck extends Zone{
    constructor(){
        this.contents = new this.contents();
        this.maxSlots = 60;
    }

    shuffle() {
        var counter = this.contents.length, temp, index;

        // While there are elements in the this.contents
        while (counter > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * counter);

            // Decrease counter by 1
            counter--;

            // And swap the last element with it
            temp = this.contents[counter];
            this.contents[counter] = this.contents[index];
            this.contents[index] = temp;
        }
    }

    addCard(card){
        this.contents.push(card);
    }

    print(){
        for(var i = 0, len = this.contents.length; i < len; i++){
            console.log(this.contents[i].name);
        }
    }
}