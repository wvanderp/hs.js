"use strict";

class Zone{
    constructor(){
		this.contents = new Array();
		this.maxSlots = 0;
    }

    isFull(){
        return this.contents.length >= this.maxSlots;
    }
}