"use strict";

import {Zone} from "./Zone.js";

export class Play extends Zone{
    constructor(){
        super();
        this.contents = [];//array
        this.maxSlots = 7;
    }
}