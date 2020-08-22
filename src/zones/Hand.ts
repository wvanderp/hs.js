import Zone from './Zone';

export default class Hand extends Zone {
    constructor() {
        super();
        this.contents = [];
        this.maxSlots = 10;
    }
}
