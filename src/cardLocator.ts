import Card from './cards/card';
import Zone from './zones/Zone';

export default class CardLocator {
    card: Card;

    private zone: Zone;

    private index: number;

    constructor(zone: Zone, index: number) {
        this.zone = zone;
        this.index = index;

        this.card = zone.getCard(index);
    }

    removeCard(): void {
        this.zone.removeCard(this.index);
    }

    valueOf(): string {
        return `zone:\n
        ${this.zone.valueOf}\n
        index: ${this.index}
        `;
    }
}
