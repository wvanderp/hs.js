import Zone from "./Zone";

export default class Secret extends Zone {
    constructor() {
        super();
        this.contents = [];
        this.maxSlots = 5;
    }
}
