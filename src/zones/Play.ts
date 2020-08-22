import Zone from './Zone';

export default class Play extends Zone {
    constructor() {
        super();
        this.contents = [];
        this.maxSlots = 7;
    }
}
