"use strict";

export class Zone{
    constructor(){
		this.contents = [];//array
		this.maxSlots = 0;
    }

    isFull(){
        return this.contents.length >= this.maxSlots;
    }

    addCard(card){
        this.contents.push(card);
    }

    print(){
        if (this.contents.length == 0){
            console.log("empty");
            return;
        }
        for(var i = 0, len = this.contents.length; i < len; i++){
            console.log(this.contents[i].name);
        }
    }
}