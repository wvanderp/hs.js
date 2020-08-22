import Zone from './Zone';

export default class SetAside extends Zone {
    constructor() {
        super();
        this.contents = [];
        this.maxSlots = 0;
    }
}
