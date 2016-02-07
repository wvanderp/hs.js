"use strict";

import {Zone} from "./Zone.js";

export class Hand extends Zone {
    constructor() {
        super();
        this.contents = [];//array
        this.maxSlots = 10;
    }
}