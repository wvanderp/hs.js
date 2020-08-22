import Zone from './Zone';

export default class Graveyard extends Zone {
    constructor() {
        super();
        this.contents = [];
        this.maxSlots = 0;
    }
}
