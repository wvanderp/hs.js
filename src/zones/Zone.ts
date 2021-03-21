import Card from '../cards/card';

export default class Zone {
    contents: Card[];

    protected maxSlots: number;

    constructor() {
        this.contents = [];
        this.maxSlots = 0;
    }

    isFull(): boolean {
        return this.contents.length >= this.maxSlots;
    }

    addCard(card: Card): void {
        this.contents.push(card);
    }

    getCard(index: number): Card {
        if (index < this.contents.length) {
            return this.contents[index];
        }
        throw new Error('Array out of bounds');
    }

    removeCard(index: number): Card {
        if (index < this.contents.length) {
            return this.contents.splice(index, 1)[0];
        }
        throw new Error('Array out of bounds');
    }

    valueOf(): string {
        if (this.contents.length === 0) {
            return 'empty';
        }

        let out = '';
        for (let index = 0, length_ = this.contents.length; index < length_; index++) {
            out += this.contents[index].name;
        }
        return out;
    }
}
