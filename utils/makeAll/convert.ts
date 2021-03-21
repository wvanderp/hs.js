import * as R from 'ramda';
import fs from 'fs';
// @ts-ignore
import JSONfn from 'json-fn';

import json from './AllSets.json';
import Card from '../../src/cards/card';
import {CARDTYPES, CHARACTERCLASS, Faction, Race} from '../../src/baseEntities';

export interface jsonCard {
    attack?: number | null;
    cardClass?: string | null;
    cost?: number | null;
    dbfId: number;
    faction?: string | null;
    health?: number | null;
    id: string;
    name: string;
    rarity?: string | null;
    set: string;
    type: string;
    artist?: string | null;
    collectible?: boolean | null;
    flavor?: string | null;
    text?: string | null;
    mechanics?: (string)[] | null;
    referencedTags?: (string)[] | null;
    race?: string | null;
    elite?: boolean | null;
    targetingArrowText?: string | null;
    durability?: number | null;
    overload?: number | null;
    spellDamage?: number | null;
    battlegroundsPremiumDbfId?: number | null;
    techLevel?: number | null;
    collectionText?: string | null;
    armor?: number | null;
    puzzleType?: number | null;
    hideStats?: boolean | null;
    howToEarn?: string | null;
    howToEarnGolden?: string | null;
    classes?: (string)[] | null;
    multiClassGroup?: string | null;
    hideCost?: boolean | null;
    battlegroundsHero?: boolean | null;
    battlegroundsNormalDbfId?: number | null;
    questReward?: string | null;
}

const cards = R.map(
    (card: jsonCard) => ({
        id: card.id,
        name: card.name,
        // @ts-expect-error
        type: CARDTYPES[card.type],
        // @ts-expect-error
        characterClass: card.cardClass ? CHARACTERCLASS[card.cardClass] : null,

        manaCost: card.cost,
        health: card.health,
        maxHealth: card.health,
        attack: card.attack,
        durability: card.durability,
        // @ts-expect-error
        race: card.race ? Race[card.race] : null,
        // @ts-expect-error
        faction: Faction[card.faction],

        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onBattlecry: (): void => {},

        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onCarddraw: (): void => {},

        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onDeathrattle: () => {},

        valueOf(): string {
            return this.id;
        }
    } as Card),
    json
);

const processedCards = R.fromPairs(
    R.map((r) => (
        [
            r.id,
            {
                ...r,
                onBattlecry: `---${JSONfn.stringify(r.onBattlecry)}---`,
                onCarddraw: `---${JSONfn.stringify(r.onCarddraw)}---`,
                onDeathrattle: `---${JSONfn.stringify(r.onDeathrattle)}---`,
                valueOf: `---${JSONfn.stringify(r.valueOf)}---`
            }
        ]
    ), cards)
);

const code = JSON.stringify(processedCards, null, 4);

const cleanedCode = code
    .split('"---\\"')
    .join('')
    .split('\\"---"')
    .join('')
    .split('\\\\r\\\\n')
    .join('\r\n    ');
// console.log(cleanedCode);

fs.writeFileSync(
    './data/all.ts',
    `import Card from '../src/cards/card';

export default ${cleanedCode} as Record<string, Card>;
    `
);
