import Zone from './Zone';

export default class Removed extends Zone {
    constructor() {
        super();
        this.contents = [];
        this.maxSlots = 0;
    }
}
