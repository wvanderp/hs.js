import {CARDTYPES, CHARACTERCLASS, Faction, Race} from '../baseEntities';

export default interface Card {
    id: string;
    name: string;
    type: CARDTYPES;
    characterClass: CHARACTERCLASS | null;

    manaCost?: number;
    health?: number;
    maxHealth?: number;
    attack?: number;
    durability?: number;

    race: Race | null;
    faction?: Faction;

    onBattlecry(): void;

    onCarddraw(): void;

    onDeathrattle(): void;

    valueOf(): string;
}
