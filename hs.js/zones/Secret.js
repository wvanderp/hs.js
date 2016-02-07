"use strict";

import {Zone} from "./Zone.js";

export class Secret extends Zone {
    constructor() {
        super();
        this.contents = [];//array
        this.maxSlots = 5;
    }
}