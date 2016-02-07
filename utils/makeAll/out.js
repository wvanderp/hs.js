import {Card} from "../../hs.js/cards/card.js"
import {CARDTYPES, CHARACTERCLASS, rarity, race} from "../../hs.js/baseEntities.js"

export class AT_115e extends Card {
    constructor() {
        super();
        this.name = "Fencing Practice";
        this.type = CARDTYPES.enchantment;
        this.text = "Your Hero Power costs (2) less.";
        this.set = "TGT";
    }

}

export class EX1_158t extends Card {
    constructor() {
        super();
        this.name = "Treant";
        this.type = CARDTYPES.minion;
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 2;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.druid;
    }

}

export class BRMA06_1H extends Card {
    constructor() {
        super();
        this.name = "Majordomo Executus";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class LOE_009t extends Card {
    constructor() {
        super();
        this.name = "Scarab";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "LOE";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Jaemin Kim";
    }

    //[\"TAUNT\"]

}

export class BRMA05_3He extends Card {
    constructor() {
        super();
        this.name = "Living Bomb";
        this.type = CARDTYPES.enchantment;
        this.text = "On Geddon's turn, deal 10 damage to all of your stuff.";
        this.set = "BRM";
    }

}

export class BRMA09_2_TB extends Card {
    constructor() {
        super();
        this.name = "Open the Gates";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon three 1/1 Whelps.";
        this.set = "TB";
        this.manacost = 2;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}

}

export class GVG_092t extends Card {
    constructor() {
        super();
        this.name = "Chicken";
        this.type = CARDTYPES.minion;
        this.set = "GVG";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
        this.race = race.beast;
    }

}

export class GVG_035 extends Card {
    constructor() {
        super();
        this.name = "Malorne";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Shuffle this minion into your deck.";
        this.set = "GVG";
        this.health = 7;
        this.attack = 9;
        this.manacost = 7;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Oliver Chipping";
        this.race = race.beast;
        this.flavor = "When Malorne isn't mauling hordes of demons, he enjoys attending parties, though he prefers to go stag.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"DEATHRATTLE\"]

}

export class EX1_178be extends Card {
    constructor() {
        super();
        this.name = "Uprooted";
        this.type = CARDTYPES.enchantment;
        this.text = "+5 Attack.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.druid;
    }

}

export class LOE_008 extends Card {
    constructor() {
        super();
        this.name = "Eye of Hakkar";
        this.type = CARDTYPES.spell;
        this.text = "Take a secret from your opponent's deck and put it into the battlefield.";
        this.set = "LOE";
        this.manacost = 1;
        this.flavor = "-";
    }

    //{\"REQ_MINION_TARGET\":0}

}

export class BRMC_87 extends Card {
    constructor() {
        super();
        this.name = "Moira Bronzebeard";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Summon Emperor Thaurissan.";
        this.set = "TB";
        this.health = 3;
        this.attack = 4;
        this.manacost = 3;
        this.rarity = rarity.legendary;
    }

    //[\"DEATHRATTLE\"]

}

export class CS2_152 extends Card {
    constructor() {
        super();
        this.name = "Squire";
        this.type = CARDTYPES.minion;
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 2;
        this.manacost = 1;
        this.rarity = rarity.common;
        this.faction = "ALLIANCE";
    }

}

export class TB_PickYourFate_7_Ench_2nd extends Card {
    constructor() {
        super();
        this.name = "Fate 7 Ench 2nd";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
    }

}

export class AT_132_WARRIOR extends Card {
    constructor() {
        super();
        this.name = "Tank Up!";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nGain 4 Armor.";
        this.set = "TGT";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.warrior;
    }

}

export class TB_MechWar_Boss2 extends Card {
    constructor() {
        super();
        this.name = "Boom Bot";
        this.type = CARDTYPES.hero;
        this.set = "TB";
        this.health = 30;
        this.rarity = rarity.free;
    }

}

export class AT_124 extends Card {
    constructor() {
        super();
        this.name = "Bolf Ramshield";
        this.type = CARDTYPES.minion;
        this.text = "Whenever your hero takes damage, this minion takes it instead.";
        this.set = "TGT";
        this.health = 9;
        this.attack = 3;
        this.manacost = 6;
        this.artist = "Wayne Reynolds";
        this.flavor = "Bolf keeps coming in 2nd at the Grand Tournament.  It might be his year this year, if Lebron doesn't enter.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

}

export class AT_066 extends Card {
    constructor() {
        super();
        this.name = "Orgrimmar Aspirant";
        this.type = CARDTYPES.minion;
        this.text = "<b>Inspire:</b> Give your weapon +1 Attack.";
        this.set = "TGT";
        this.health = 3;
        this.attack = 3;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Hideaki Takamura";
        this.flavor = "\"Four out of three orcs struggle with math.\" - Angry Zurge";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"INSPIRE\"]

}

export class LOEA04_30a extends Card {
    constructor() {
        super();
        this.name = "Take the Shortcut";
        this.type = CARDTYPES.spell;
        this.text = "Get 1 turn closer to the Exit! Encounter a 7/7 War Golem.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class PART_006a extends Card {
    constructor() {
        super();
        this.name = "Switched";
        this.type = CARDTYPES.enchantment;
        this.text = "Attack and Health have been swapped by Reversing Switch.";
        this.set = "GVG";
    }

}

export class CS2_232 extends Card {
    constructor() {
        super();
        this.name = "Ironbark Protector";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "CORE";
        this.health = 8;
        this.attack = 8;
        this.manacost = 8;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Dave Allsop";
        this.flavor = "I <i>dare</i> you to attack Darnassus.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 49.";
        this.howToEarn = "Unlocked at Level 10.";
    }

    //[\"TAUNT\"]

}

export class BRMA13_1 extends Card {
    constructor() {
        super();
        this.name = "Lord Victor Nefarius";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class EX1_284 extends Card {
    constructor() {
        super();
        this.name = "Azure Drake";
        this.type = CARDTYPES.minion;
        this.text = "<b>Spell Damage +1</b>. <b>Battlecry:</b> Draw a card.";
        this.set = "EXPERT1";
        this.health = 4;
        this.attack = 4;
        this.manacost = 5;
        this.artist = "Ben Zhang";
        this.race = race.dragon;
        this.flavor = "They initially planned to be the Beryl or Cerulean drakes, but those felt a tad too pretentious.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\",\"SPELLPOWER\"]

}

export class EX1_049 extends Card {
    constructor() {
        super();
        this.name = "Youthful Brewmaster";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Return a friendly minion from the battlefield to your hand.";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 3;
        this.manacost = 2;
        this.artist = "Wei Wang";
        this.flavor = "His youthful enthusiasm doesnâ€™t always equal excellence in his brews.   Donâ€™t drink the Mogu Stout!";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "ALLIANCE";
        this.targetingArrowText = "Return a minion to your hand.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_NONSELF_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0,\"REQ_FRIENDLY_TARGET\":0}

}

export class EX1_093e extends Card {
    constructor() {
        super();
        this.name = "Hand of Argus";
        this.type = CARDTYPES.enchantment;
        this.text = "+1/+1 and <b>Taunt</b>.";
        this.set = "EXPERT1";
    }

}

export class EX1_371 extends Card {
    constructor() {
        super();
        this.name = "Hand of Protection";
        this.type = CARDTYPES.spell;
        this.text = "Give a minion <b>Divine Shield</b>.";
        this.set = "CORE";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Clint Langley";
        this.flavor = "This spell has been renamed so many times, even paladins donâ€™t know what it should be called anymore.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 23.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class BRMA14_9 extends Card {
    constructor() {
        super();
        this.name = "Magmatron";
        this.type = CARDTYPES.minion;
        this.text = "Whenever a player plays a card, Magmatron deals 2 damage to them.";
        this.set = "BRM";
        this.health = 7;
        this.attack = 7;
        this.manacost = 5;
        this.race = race.mechanical;
        this.rarity = rarity.legendary;
    }

    //[\"AURA\"]

}

export class CS2_147 extends Card {
    constructor() {
        super();
        this.name = "Gnomish Inventor";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Draw a card.";
        this.set = "CORE";
        this.health = 4;
        this.attack = 2;
        this.manacost = 4;
        this.artist = "Court Jones";
        this.flavor = "She's never quite sure what she's making, she just knows it's AWESOME!";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "ALLIANCE";
        this.howToEarnGolden = "Unlocked at Priest Level 57.";
    }

    //[\"BATTLECRY\"]

}

export class CS2_049 extends Card {
    constructor() {
        super();
        this.name = "Totemic Call";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon a random Totem.";
        this.set = "CORE";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.shaman;
        this.rarity = rarity.free;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1,\"REQ_ENTIRE_ENTOURAGE_NOT_IN_PLAY\":0}
    //[\"CS2_050\",\"CS2_051\",\"CS2_052\",\"NEW1_009\"]

}

export class AT_016 extends Card {
    constructor() {
        super();
        this.name = "Confuse";
        this.type = CARDTYPES.spell;
        this.text = "Swap the Attack and Health of all minions.";
        this.set = "TGT";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Sean O'Danield";
        this.flavor = "This minion is really powerful!";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class BRMA17_3H extends Card {
    constructor() {
        super();
        this.name = "Onyxia";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class XXX_023 extends Card {
    constructor() {
        super();
        this.name = "Destroy All Heroes";
        this.type = CARDTYPES.spell;
        this.text = "Destroy all heroes.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

}

export class BRM_034 extends Card {
    constructor() {
        super();
        this.name = "Blackwing Corruptor";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry</b>: If you're holding a Dragon, deal 3 damage.";
        this.set = "BRM";
        this.health = 4;
        this.attack = 5;
        this.manacost = 5;
        this.artist = "Greg Staples";
        this.flavor = "He got his name when he gave Blackwing some comic books and rock & roll records.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating Maloriak in the Hidden Laboratory.";
        this.howToEarn = "Unlocked in Hidden Laboratory, in the Blackrock Mountain adventure.";
        this.targetingArrowText = "Deal 3 damage.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_TARGET_IF_AVAILABLE_AND_DRAGON_IN_HAND\":0}

}

export class BRM_027pH extends Card {
    constructor() {
        super();
        this.name = "DIE, INSECTS!";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDeal $8 damage to a random enemy. TWICE.";
        this.set = "BRM";
        this.manacost = 2;
    }

}

export class LOEA16_27H extends Card {
    constructor() {
        super();
        this.name = "The Steel Sentinel";
        this.type = CARDTYPES.minion;
        this.text = "This minion can only take 1 damage at a time.";
        this.set = "LOE";
        this.health = 10;
        this.attack = 10;
        this.manacost = 10;
    }

}

export class PART_004 extends Card {
    constructor() {
        super();
        this.name = "Finicky Cloakfield";
        this.type = CARDTYPES.spell;
        this.text = "Give a friendly minion <b>Stealth</b> until your next turn.";
        this.set = "GVG";
        this.manacost = 1;
        this.artist = "Nutchapol Thitinunthakorn";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0,\"REQ_FRIENDLY_TARGET\":0}

}

export class BRM_015 extends Card {
    constructor() {
        super();
        this.name = "Revenge";
        this.type = CARDTYPES.spell;
        this.text = "Deal $1 damage to all minions. If you have 12 or less Health, deal $3 damage instead.";
        this.set = "BRM";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Ben Olson";
        this.flavor = "This is better than Arcane Explosion, so I guess warriors are finally getting revenge on mages for Mortal Strike being worse than Fireball.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating Razorgore in Blackwing Lair.";
        this.howToEarn = "Unlocked in Blackwing Lair, in the Blackrock Mountain adventure.";
    }

}

export class NEW1_003 extends Card {
    constructor() {
        super();
        this.name = "Sacrificial Pact";
        this.type = CARDTYPES.spell;
        this.text = "Destroy a Demon. Restore #5 Health to your hero.";
        this.set = "CORE";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Jim Nelson";
        this.flavor = "This is the reason that Demons never really become friends with Warlocks.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 15.";
        this.howToEarn = "Unlocked at Level 8.";
    }

    //{\"REQ_TARGET_WITH_RACE\":15,\"REQ_TARGET_TO_PLAY\":0}

}

export class CRED_24 extends Card {
    constructor() {
        super();
        this.name = "Dean Ayala";
        this.type = CARDTYPES.minion;
        this.text = "You can't lose stars while this is in your deck.";
        this.set = "CREDITS";
        this.health = 5;
        this.attack = 7;
        this.manacost = 7;
        this.rarity = rarity.legendary;
    }

}

export class EX1_258 extends Card {
    constructor() {
        super();
        this.name = "Unbound Elemental";
        this.type = CARDTYPES.minion;
        this.text = "Whenever you play a card with <b>Overload</b>, gain +1/+1.";
        this.set = "EXPERT1";
        this.health = 4;
        this.attack = 2;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Matt Gaser";
        this.flavor = "Unlike bound elementals, Unbound ones really enjoy a night on the town.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class GVG_069 extends Card {
    constructor() {
        super();
        this.name = "Antique Healbot";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Restore 8 Health to your hero.";
        this.set = "GVG";
        this.health = 3;
        this.attack = 3;
        this.manacost = 5;
        this.artist = "Jesper Ejsing";
        this.race = race.mechanical;
        this.flavor = "They don't make 'em like they used to! (Because of explosions, mostly.)";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class AT_101 extends Card {
    constructor() {
        super();
        this.name = "Pit Fighter";
        this.type = CARDTYPES.minion;
        this.set = "TGT";
        this.health = 6;
        this.attack = 5;
        this.manacost = 5;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "What did the pits ever do to you?";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class LOE_107 extends Card {
    constructor() {
        super();
        this.name = "Eerie Statue";
        this.type = CARDTYPES.minion;
        this.text = "Canâ€™t attack unless itâ€™s the only minion in the battlefield.";
        this.set = "LOE";
        this.health = 7;
        this.attack = 7;
        this.manacost = 4;
        this.artist = "Jim Nelson";
        this.flavor = "Don't blink!  Don't turn your back, don't look away, and DON'T BLINK.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in the Hall of Explorers, in the League of Explorers adventure.";
    }

}

export class NAX8_05 extends Card {
    constructor() {
        super();
        this.name = "Unrelenting Rider";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Summon a Spectral Rider for your opponent.";
        this.set = "NAXX";
        this.health = 6;
        this.attack = 5;
        this.manacost = 6;
    }

    //[\"DEATHRATTLE\"]

}

export class NAX2_05H extends Card {
    constructor() {
        super();
        this.name = "Worshipper";
        this.type = CARDTYPES.minion;
        this.text = "Your hero has +3 Attack on your turn.";
        this.set = "NAXX";
        this.health = 4;
        this.attack = 2;
        this.manacost = 3;
    }

    //[\"AURA\",\"InvisibleDeathrattle\"]

}

export class TB_RMC_001 extends Card {
    constructor() {
        super();
        this.name = "TB_EnchRandomManaCost";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
    }

}

export class XXX_001 extends Card {
    constructor() {
        super();
        this.name = "Damage 1";
        this.type = CARDTYPES.spell;
        this.text = "Deal 1 damage.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

    //[\"ImmuneToSpellpower\"]
    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class EX1_178b extends Card {
    constructor() {
        super();
        this.name = "Uproot";
        this.type = CARDTYPES.spell;
        this.text = "+5 Attack.";
        this.set = "EXPERT1";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
    }

}

export class EX1_409 extends Card {
    constructor() {
        super();
        this.name = "Upgrade!";
        this.type = CARDTYPES.spell;
        this.text = "If you have a weapon, give it +1/+1. Otherwise equip a 1/3 weapon.";
        this.set = "EXPERT1";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Matt Cavotta";
        this.flavor = "Easily worth 50 DKP.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class AT_031 extends Card {
    constructor() {
        super();
        this.name = "Cutpurse";
        this.type = CARDTYPES.minion;
        this.text = "Whenever this minion attacks a hero, add the Coin to your hand.";
        this.set = "TGT";
        this.health = 2;
        this.attack = 2;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "He has a giant collection of purses now.  One for every outfit!";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class AT_114 extends Card {
    constructor() {
        super();
        this.name = "Evil Heckler";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "TGT";
        this.health = 4;
        this.attack = 5;
        this.manacost = 4;
        this.artist = "Dan Scott";
        this.flavor = "To be honest, heckling is not the most effective form of evil.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"TAUNT\"]

}

export class EX1_350 extends Card {
    constructor() {
        super();
        this.name = "Prophet Velen";
        this.type = CARDTYPES.minion;
        this.text = "Double the damage and healing of your spells and Hero Power.";
        this.set = "EXPERT1";
        this.health = 7;
        this.attack = 7;
        this.manacost = 7;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Wei Wang";
        this.flavor = "He's been exiled from his home, and all his brothers turned evil, but otherwise he doesn't have a lot to complain about.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

}

export class TB_BlingBrawl_Blade1e extends Card {
    constructor() {
        super();
        this.name = "Blingtron's Blade";
        this.type = CARDTYPES.enchantment;
        this.text = "When this breaks, randomly summon a new weapon.";
        this.set = "TB";
        this.rarity = rarity.unknown;
    }

}

export class EX1_029 extends Card {
    constructor() {
        super();
        this.name = "Leper Gnome";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Deal 2 damage to the enemy hero.";
        this.set = "EXPERT1";
        this.health = 1;
        this.attack = 2;
        this.manacost = 1;
        this.artist = "Glenn Rane";
        this.flavor = "He really just wants to be your friend, but the constant rejection is starting to really get to him.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"DEATHRATTLE\"]

}

export class FP1_028 extends Card {
    constructor() {
        super();
        this.name = "Undertaker";
        this.type = CARDTYPES.minion;
        this.text = "Whenever you summon a minion with <b>Deathrattle</b>, gain +1 Attack.";
        this.set = "NAXX";
        this.health = 2;
        this.attack = 1;
        this.manacost = 1;
        this.artist = "Jonboy Meyers";
        this.flavor = "In a world where you can run to a spirit healer and resurrect yourself, Undertakers do pretty light business.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating Patchwerk in the Construct Quarter.";
        this.howToEarn = "Unlocked in The Construct Quarter, in the Naxxramas adventure.";
    }

}

export class BRMA10_4H extends Card {
    constructor() {
        super();
        this.name = "Corrupted Egg";
        this.type = CARDTYPES.minion;
        this.text = "When this minion has 5 or more Health, it hatches.";
        this.set = "BRM";
        this.health = 3;
        this.attack = 0;
        this.manacost = 1;
    }

    //[\"InvisibleDeathrattle\"]

}

export class LOEA09_4 extends Card {
    constructor() {
        super();
        this.name = "Rare Spear";
        this.type = CARDTYPES.weapon;
        this.text = "Whenever your opponent plays a Rare card, gain +1/+1.";
        this.set = "LOE";
        this.attack = 1;
        this.manacost = 1;
        this.durability = "2";
    }

}

export class LOEA07_03h extends Card {
    constructor() {
        super();
        this.name = "Flee the Mine!";
        this.type = CARDTYPES.hero_power;
        this.text = "Escape the Troggs!";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class LOEA16_27 extends Card {
    constructor() {
        super();
        this.name = "The Steel Sentinel";
        this.type = CARDTYPES.minion;
        this.text = "This minion can only take 1 damage at a time.";
        this.set = "LOE";
        this.health = 5;
        this.attack = 5;
        this.manacost = 5;
    }

}

export class BRMA11_1H extends Card {
    constructor() {
        super();
        this.name = "Vaelastrasz the Corrupt";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class BRMA12_10 extends Card {
    constructor() {
        super();
        this.name = "Mutation";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDiscard a random card.";
        this.set = "BRM";
        this.manacost = 1;
    }

}

export class CRED_07 extends Card {
    constructor() {
        super();
        this.name = "Zwick";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Complain about bacon prices.";
        this.set = "CREDITS";
        this.health = 2;
        this.attack = 2;
        this.manacost = 2;
        this.rarity = rarity.legendary;
    }

}

export class TB_Face_Ench1 extends Card {
    constructor() {
        super();
        this.name = "Safe";
        this.type = CARDTYPES.enchantment;
        this.text = "This minion is safe from attacks and cannot have taunt.";
        this.set = "TB";
        this.rarity = rarity.unknown;
    }

}

export class CRED_23 extends Card {
    constructor() {
        super();
        this.name = "Christopher Yim";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Your emotes are now spoken in \"Radio Voice.\"";
        this.set = "CREDITS";
        this.health = 5;
        this.attack = 6;
        this.manacost = 4;
        this.rarity = rarity.legendary;
    }

}

export class EX1_315 extends Card {
    constructor() {
        super();
        this.name = "Summoning Portal";
        this.type = CARDTYPES.minion;
        this.text = "Your minions cost (2) less, but not less than (1).";
        this.set = "EXPERT1";
        this.health = 4;
        this.attack = 0;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Tyler Walpole";
        this.flavor = "NOT LESS THAN 1!  Don't get any ideas!";
        this.rarity = rarity.common;
        this.collectible = true;
        this.textInPlay = "Summoning";
    }

    //[\"AURA\"]

}

export class BRMC_97 extends Card {
    constructor() {
        super();
        this.name = "Vaelastrasz";
        this.type = CARDTYPES.minion;
        this.text = "Your cards cost (3) less.";
        this.set = "TB";
        this.health = 7;
        this.attack = 7;
        this.manacost = 6;
        this.race = race.dragon;
        this.rarity = rarity.legendary;
    }

}

export class AT_017 extends Card {
    constructor() {
        super();
        this.name = "Twilight Guardian";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> If you're holding a Dragon, gain +1 Attack and <b>Taunt</b>.";
        this.set = "TGT";
        this.health = 6;
        this.attack = 2;
        this.manacost = 4;
        this.artist = "Slawomir Maniak";
        this.race = race.dragon;
        this.flavor = "A result of magical experiments carried out by the Black Dragonflight, it's not his fault that he's a vicious killer.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class XXX_005 extends Card {
    constructor() {
        super();
        this.name = "Destroy";
        this.type = CARDTYPES.spell;
        this.text = "Destroy a minion or hero.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class HERO_07 extends Card {
    constructor() {
        super();
        this.name = "Gul'dan";
        this.type = CARDTYPES.hero;
        this.set = "CORE";
        this.health = 30;
        this.characterClass = CHARACTERCLASS.warlock;
        this.rarity = rarity.free;
        this.collectible = true;
    }

}

export class CRED_15 extends Card {
    constructor() {
        super();
        this.name = "Andy Brock";
        this.type = CARDTYPES.minion;
        this.text = "Can't be <b>Silenced. Divine Shield, Stealth.</b>";
        this.set = "CREDITS";
        this.health = 3;
        this.attack = 1;
        this.manacost = 1;
        this.rarity = rarity.legendary;
    }

}

export class EX1_392 extends Card {
    constructor() {
        super();
        this.name = "Battle Rage";
        this.type = CARDTYPES.spell;
        this.text = "Draw a card for each damaged friendly character.";
        this.set = "EXPERT1";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "\"You won't like me when I'm angry.\"";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0}

}

export class NAX2_05 extends Card {
    constructor() {
        super();
        this.name = "Worshipper";
        this.type = CARDTYPES.minion;
        this.text = "Your hero has +1 Attack on your turn.";
        this.set = "NAXX";
        this.health = 4;
        this.attack = 1;
        this.manacost = 3;
    }

    //[\"AURA\",\"InvisibleDeathrattle\"]

}

export class LOEA09_2e extends Card {
    constructor() {
        super();
        this.name = "Enraged";
        this.type = CARDTYPES.enchantment;
        this.text = "+2 Attack";
        this.set = "LOE";
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class NAX9_06 extends Card {
    constructor() {
        super();
        this.name = "Unholy Shadow";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDraw 2 cards.";
        this.set = "NAXX";
        this.manacost = 5;
    }

}

export class CS2_072 extends Card {
    constructor() {
        super();
        this.name = "Backstab";
        this.type = CARDTYPES.spell;
        this.text = "Deal $2 damage to an undamaged minion.";
        this.set = "CORE";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Michael Sutfin";
        this.flavor = "It's funny how often yelling \"Look over there!\" gets your opponent to turn around.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 36.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_UNDAMAGED_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class NEW1_024 extends Card {
    constructor() {
        super();
        this.name = "Captain Greenskin";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Give your weapon +1/+1.";
        this.set = "EXPERT1";
        this.health = 4;
        this.attack = 5;
        this.manacost = 5;
        this.artist = "Dan Scott";
        this.race = race.pirate;
        this.flavor = "He was <i>this close</i> to piloting a massive juggernaut into Stormwind Harbor. If it weren't for those pesky kids!";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class CS2_042 extends Card {
    constructor() {
        super();
        this.name = "Fire Elemental";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Deal 3 damage.";
        this.set = "CORE";
        this.health = 5;
        this.attack = 6;
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Ralph Horsley";
        this.flavor = "He can never take a bath. Ewww.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 49.";
        this.howToEarn = "Unlocked at Level 10.";
        this.targetingArrowText = "Deal 3 damage.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class NAX7_03 extends Card {
    constructor() {
        super();
        this.name = "Unbalancing Strike";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDeal 3 damage.";
        this.set = "NAXX";
        this.manacost = 2;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class AT_113 extends Card {
    constructor() {
        super();
        this.name = "Recruiter";
        this.type = CARDTYPES.minion;
        this.text = "<b>Inspire:</b> Add a 2/2 Squire to your hand.";
        this.set = "TGT";
        this.health = 4;
        this.attack = 5;
        this.manacost = 5;
        this.artist = "Jim Nelson";
        this.flavor = "Join the Argent Crusade!  We have attractive tabards and you get to carry really nice swords!";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //[\"INSPIRE\"]

}

export class TBST_005 extends Card {
    constructor() {
        super();
        this.name = "OLDPvP Rogue";
        this.type = CARDTYPES.minion;
        this.text = "<b>Stealth</b>\nRegain <b>Stealth</b> when PvP Rogue kills a minion.";
        this.set = "TB";
        this.health = 6;
        this.attack = 3;
        this.manacost = 3;
    }

    //[\"STEALTH\"]

}

export class AT_036 extends Card {
    constructor() {
        super();
        this.name = "Anub'arak";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Return this to your hand and summon a 4/4 Nerubian.";
        this.set = "TGT";
        this.health = 4;
        this.attack = 8;
        this.manacost = 9;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Eric Braddock";
        this.flavor = "Was actually a pretty nice guy before, you know, the whole Lich King thing.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"DEATHRATTLE\"]

}

export class AT_010 extends Card {
    constructor() {
        super();
        this.name = "Ram Wrangler";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> If you have a Beast, summon a\nrandom Beast.";
        this.set = "TGT";
        this.health = 3;
        this.attack = 3;
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Brandon Kitkouski";
        this.flavor = "Not getting trampled is really the trick here.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class DREAM_01 extends Card {
    constructor() {
        super();
        this.name = "Laughing Sister";
        this.type = CARDTYPES.minion;
        this.text = "Can't be targeted by spells or Hero Powers.";
        this.set = "EXPERT1";
        this.health = 5;
        this.attack = 3;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.dream;
        this.textInPlay = "Quick";
    }

}

export class AT_088 extends Card {
    constructor() {
        super();
        this.name = "Mogor's Champion";
        this.type = CARDTYPES.minion;
        this.text = "50% chance to attack the wrong enemy.";
        this.set = "TGT";
        this.health = 5;
        this.attack = 8;
        this.manacost = 6;
        this.artist = "Steve Prescott";
        this.flavor = "This champion has learned from the best.  Except for his target selection.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"FORGETFUL\"]

}

export class CRED_19 extends Card {
    constructor() {
        super();
        this.name = "Beomki Hong";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt.</b> Friendly minions canâ€™t be <b>Frozen.</b>";
        this.set = "CREDITS";
        this.health = 3;
        this.attack = 6;
        this.manacost = 4;
        this.rarity = rarity.legendary;
    }

}

export class GVG_032a extends Card {
    constructor() {
        super();
        this.name = "Gift of Mana";
        this.type = CARDTYPES.spell;
        this.text = "Give each player a Mana Crystal.";
        this.set = "GVG";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
    }

}

export class AT_045ee extends Card {
    constructor() {
        super();
        this.name = "Mistcaller Deck Ench";
        this.type = CARDTYPES.enchantment;
        this.set = "TGT";
    }

}

export class XXX_029 extends Card {
    constructor() {
        super();
        this.name = "Opponent Concede";
        this.type = CARDTYPES.spell;
        this.text = "Force your opponent to concede.";
        this.set = "CHEAT";
        this.manacost = 0;
    }

}

export class AT_008 extends Card {
    constructor() {
        super();
        this.name = "Coldarra Drake";
        this.type = CARDTYPES.minion;
        this.text = "You can use your Hero Power any number of times.";
        this.set = "TGT";
        this.health = 6;
        this.attack = 6;
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Christopher Moeller";
        this.race = race.dragon;
        this.flavor = "The Grand Tournament has a \"No dragons allowed\" policy, but it's rarely enforced.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //[\"AURA\"]

}

export class CS2_142 extends Card {
    constructor() {
        super();
        this.name = "Kobold Geomancer";
        this.type = CARDTYPES.minion;
        this.text = "<b>Spell Damage +1</b>";
        this.set = "CORE";
        this.health = 2;
        this.attack = 2;
        this.manacost = 2;
        this.artist = "Gabor Szikszai";
        this.flavor = "In the old days, Kobolds were the finest candle merchants in the land. Then they got pushed too far...";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "HORDE";
        this.howToEarnGolden = "Unlocked at Warlock Level 59.";
    }

    //[\"SPELLPOWER\"]

}

export class LOEA04_29b extends Card {
    constructor() {
        super();
        this.name = "Investigate the Runes";
        this.type = CARDTYPES.spell;
        this.text = "Draw 2 cards.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class GVG_110t extends Card {
    constructor() {
        super();
        this.name = "Boom Bot";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle</b>: Deal 1-4 damage to a random enemy.";
        this.set = "GVG";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
        this.race = race.mechanical;
    }

    //[\"DEATHRATTLE\"]

}

export class AT_081e extends Card {
    constructor() {
        super();
        this.name = "Purified";
        this.type = CARDTYPES.enchantment;
        this.text = "Attack changed to 1.";
        this.set = "TGT";
        this.characterClass = CHARACTERCLASS.paladin;
    }

}

export class EX1_573ae extends Card {
    constructor() {
        super();
        this.name = "Demigod's Favor";
        this.type = CARDTYPES.enchantment;
        this.text = "+2/+2.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.druid;
    }

}

export class TU4c_008e extends Card {
    constructor() {
        super();
        this.name = "Might of Mukla";
        this.type = CARDTYPES.enchantment;
        this.text = "King Mukla has +8 Attack this turn.";
        this.set = "MISSIONS";
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class NEW1_011 extends Card {
    constructor() {
        super();
        this.name = "Kor'kron Elite";
        this.type = CARDTYPES.minion;
        this.text = "<b>Charge</b>";
        this.set = "CORE";
        this.health = 3;
        this.attack = 4;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "The Kor'kron are the elite forces of Garrosh Hellscream. Let's just say you don't want to run into these guys while wearing a blue tabard.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 44.";
        this.howToEarn = "Unlocked at Level 4.";
    }

    //[\"CHARGE\"]

}

export class CS2_181e extends Card {
    constructor() {
        super();
        this.name = "Full Strength";
        this.type = CARDTYPES.enchantment;
        this.text = "This minion has +2 Attack.";
        this.set = "EXPERT1";
    }

}

export class EX1_274e extends Card {
    constructor() {
        super();
        this.name = "Raw Power!";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased stats.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.mage;
    }

}

export class LOE_113 extends Card {
    constructor() {
        super();
        this.name = "Everyfin is Awesome";
        this.type = CARDTYPES.spell;
        this.text = "Give your minions +2/+2.\nCosts (1) less for each Murloc you control.";
        this.set = "LOE";
        this.manacost = 7;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Andrius Matijoshius";
        this.flavor = "Everyfin is cool when you're part of a murloc team!";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in The Ruined City, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in The Ruined City, in the League of Explorers adventure.";
    }

}

export class NEW1_026 extends Card {
    constructor() {
        super();
        this.name = "Violet Teacher";
        this.type = CARDTYPES.minion;
        this.text = "Whenever you cast a spell, summon a 1/1 Violet Apprentice.";
        this.set = "EXPERT1";
        this.health = 5;
        this.attack = 3;
        this.manacost = 4;
        this.artist = "James Ryman";
        this.flavor = "If you don't pay attention, you may be turned into a pig.  And then you get your name on the board.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class AT_096e extends Card {
    constructor() {
        super();
        this.name = "Wound Up";
        this.type = CARDTYPES.enchantment;
        this.text = "+1/+1.";
        this.set = "TGT";
    }

}

export class ds1_whelptoken extends Card {
    constructor() {
        super();
        this.name = "Whelp";
        this.type = CARDTYPES.minion;
        this.set = "EXPERT1";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
        this.race = race.dragon;
    }

}

export class LOEA16_21 extends Card {
    constructor() {
        super();
        this.name = "Chieftain Scarvash";
        this.type = CARDTYPES.minion;
        this.text = "Enemy cards cost (1) more.";
        this.set = "LOE";
        this.health = 5;
        this.attack = 5;
        this.manacost = 5;
    }

    //[\"AURA\"]

}

export class GVG_115 extends Card {
    constructor() {
        super();
        this.name = "Toshley";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry and Deathrattle:</b> Add a <b>Spare Part</b> card to your hand.";
        this.set = "GVG";
        this.health = 7;
        this.attack = 5;
        this.manacost = 6;
        this.artist = "Zoltan & Gabor";
        this.flavor = "Something about power converters.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"BATTLECRY\",\"DEATHRATTLE\"]
    //[\"PART_003\",\"PART_006\",\"PART_007\",\"PART_001\",\"PART_004\",\"PART_005\",\"PART_002\"]

}

export class LOE_030e extends Card {
    constructor() {
        super();
        this.name = "Hollow";
        this.type = CARDTYPES.enchantment;
        this.text = "Stats copied.";
        this.set = "LOE";
    }

}

export class XXX_045 extends Card {
    constructor() {
        super();
        this.name = "Steal Card";
        this.type = CARDTYPES.spell;
        this.text = "Steal a random card from your opponent.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

}

export class GVG_039 extends Card {
    constructor() {
        super();
        this.name = "Vitality Totem";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, restore 4 Health to your hero.";
        this.set = "GVG";
        this.health = 3;
        this.attack = 0;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Guangjian Huang";
        this.race = race.totem;
        this.flavor = "You can usually find these at the totemist's market on Saturdays.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class AT_069e extends Card {
    constructor() {
        super();
        this.name = "Training Complete";
        this.type = CARDTYPES.enchantment;
        this.text = "<b>Taunt</b>";
        this.set = "TGT";
        this.characterClass = CHARACTERCLASS.warrior;
    }

}

export class NEW1_036e extends Card {
    constructor() {
        super();
        this.name = "Commanding Shout";
        this.type = CARDTYPES.enchantment;
        this.text = "Can't be reduced below 1 Health this turn.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.warrior;
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class CS2_124 extends Card {
    constructor() {
        super();
        this.name = "Wolfrider";
        this.type = CARDTYPES.minion;
        this.text = "<b>Charge</b>";
        this.set = "CORE";
        this.health = 1;
        this.attack = 3;
        this.manacost = 3;
        this.artist = "Dany Orizio";
        this.flavor = "Orcish raiders ride wolves because they are well adapted to harsh environments, and because they are soft and cuddly.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.faction = "HORDE";
        this.howToEarnGolden = "Unlocked at Warrior Level 59.";
    }

    //[\"CHARGE\"]

}

export class FP1_028e extends Card {
    constructor() {
        super();
        this.name = "Darkness Calls";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased stats.";
        this.set = "NAXX";
    }

}

export class LOEA02_10 extends Card {
    constructor() {
        super();
        this.name = "Wish for Companionship";
        this.type = CARDTYPES.spell;
        this.text = "<b>Discover</b> a Companion.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class EX1_025t extends Card {
    constructor() {
        super();
        this.name = "Mechanical Dragonling";
        this.type = CARDTYPES.minion;
        this.set = "CORE";
        this.health = 1;
        this.attack = 2;
        this.manacost = 1;
        this.race = race.mechanical;
        this.rarity = rarity.common;
    }

}

export class CS1_113e extends Card {
    constructor() {
        super();
        this.name = "Mind Control";
        this.type = CARDTYPES.enchantment;
        this.text = "This minion has switched controllers.";
        this.set = "CORE";
        this.characterClass = CHARACTERCLASS.priest;
        this.rarity = rarity.common;
    }

}

export class NAX12_02 extends Card {
    constructor() {
        super();
        this.name = "Decimate";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nChange the Health of all minions to 1.";
        this.set = "NAXX";
        this.manacost = 2;
    }

    //{\"REQ_MINIMUM_ENEMY_MINIONS\":1}

}

export class CS2_119 extends Card {
    constructor() {
        super();
        this.name = "Oasis Snapjaw";
        this.type = CARDTYPES.minion;
        this.set = "CORE";
        this.health = 7;
        this.attack = 2;
        this.manacost = 4;
        this.artist = "Ittoku";
        this.race = race.beast;
        this.flavor = "His dreams of flying and breathing fire like his idol will never be realized.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Druid Level 51.";
    }

}

export class EX1_334 extends Card {
    constructor() {
        super();
        this.name = "Shadow Madness";
        this.type = CARDTYPES.spell;
        this.text = "Gain control of an enemy minion with 3 or less Attack until end of turn.";
        this.set = "EXPERT1";
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Mark Gibbons";
        this.flavor = "You can rationalize it all you want, it's still a mean thing to do.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0,\"REQ_ENEMY_TARGET\":0,\"REQ_TARGET_MAX_ATTACK\":3,\"REQ_NUM_MINION_SLOTS\":1}

}

export class BRM_027p extends Card {
    constructor() {
        super();
        this.name = "DIE, INSECT!";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDeal $8 damage to a random enemy.";
        this.set = "BRM";
        this.manacost = 2;
    }

}

export class LOEA16_26 extends Card {
    constructor() {
        super();
        this.name = "Skelesaurus Hex";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, give each player a random card. It costs (0).";
        this.set = "LOE";
        this.health = 5;
        this.attack = 5;
        this.manacost = 5;
    }

}

export class GVG_022a extends Card {
    constructor() {
        super();
        this.name = "Tinker's Sharpsword Oil";
        this.type = CARDTYPES.enchantment;
        this.text = "+3 Attack.";
        this.set = "GVG";
    }

}

export class GVG_049 extends Card {
    constructor() {
        super();
        this.name = "Gahz'rilla";
        this.type = CARDTYPES.minion;
        this.text = "Whenever this minion takes damage, double its Attack.";
        this.set = "GVG";
        this.health = 9;
        this.attack = 6;
        this.manacost = 7;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Raymond Swanland";
        this.race = race.beast;
        this.flavor = "The Sen'jin High football team is The Gahz'rillas.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

}

export class LOEA05_02a extends Card {
    constructor() {
        super();
        this.name = "Trogg Hate Minions!";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Passive Hero Power</b>\n Enemy minions cost (2) more. Swap at the start of your turn.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class TU4f_006o extends Card {
    constructor() {
        super();
        this.name = "Transcendence";
        this.type = CARDTYPES.enchantment;
        this.text = "Until you kill Cho's minions, he can't be attacked.";
        this.set = "MISSIONS";
    }

}

export class EX1_362 extends Card {
    constructor() {
        super();
        this.name = "Argent Protector";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Give a friendly minion <b>Divine Shield</b>.";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 2;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Doug Alexander";
        this.flavor = "\"I'm not saying you can dodge fireballs.  I'm saying with this shield, you won't have to.\"";
        this.rarity = rarity.common;
        this.collectible = true;
        this.targetingArrowText = "Give <b>Divine Shield</b>.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_FRIENDLY_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0,\"REQ_NONSELF_TARGET\":0}

}

export class BRMC_96 extends Card {
    constructor() {
        super();
        this.name = "High Justice Grimstone";
        this.type = CARDTYPES.minion;
        this.text = "At the start of your turn, summon a <b>Legendary</b> minion.";
        this.set = "TB";
        this.health = 5;
        this.attack = 4;
        this.manacost = 3;
        this.rarity = rarity.legendary;
    }

}

export class GVG_091 extends Card {
    constructor() {
        super();
        this.name = "Arcane Nullifier X-21";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>\nCan't be targeted by spells or Hero Powers.";
        this.set = "GVG";
        this.health = 5;
        this.attack = 2;
        this.manacost = 4;
        this.artist = "Zero Yue";
        this.race = race.mechanical;
        this.flavor = "There was some hard talk between gnome magi and engineers about inventing this mech.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"TAUNT\"]

}

export class GVG_123 extends Card {
    constructor() {
        super();
        this.name = "Soot Spewer";
        this.type = CARDTYPES.minion;
        this.text = "<b>Spell Damage +1</b>";
        this.set = "GVG";
        this.health = 3;
        this.attack = 3;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Phil Saunders";
        this.race = race.mechanical;
        this.flavor = "The inventor of the goblin shredder is involved in several patent disputes with the inventor of the soot spewer.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.targetingArrowText = "Give <b>Spell Damage +2</b>.";
    }

    //[\"SPELLPOWER\"]

}

export class CS2_092e extends Card {
    constructor() {
        super();
        this.name = "Blessing of Kings";
        this.type = CARDTYPES.enchantment;
        this.text = "+4/+4.";
        this.set = "CORE";
        this.characterClass = CHARACTERCLASS.paladin;
    }

}

export class AT_120 extends Card {
    constructor() {
        super();
        this.name = "Frost Giant";
        this.type = CARDTYPES.minion;
        this.text = "Costs (1) less for each time you used your Hero Power this game.";
        this.set = "TGT";
        this.health = 8;
        this.attack = 8;
        this.manacost = 10;
        this.artist = "Greg Staples";
        this.flavor = "Don't ask him about the beard.  JUST DON'T.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class EX1_tk28 extends Card {
    constructor() {
        super();
        this.name = "Squirrel";
        this.type = CARDTYPES.minion;
        this.set = "EXPERT1";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
        this.race = race.beast;
        this.rarity = rarity.common;
    }

}

export class EX1_043e extends Card {
    constructor() {
        super();
        this.name = "Hour of Twilight";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Health.";
        this.set = "EXPERT1";
    }

}

export class CS2_237 extends Card {
    constructor() {
        super();
        this.name = "Starving Buzzard";
        this.type = CARDTYPES.minion;
        this.text = "Whenever you summon a Beast, draw a card.";
        this.set = "CORE";
        this.health = 2;
        this.attack = 3;
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Bernie Kang";
        this.race = race.beast;
        this.flavor = "If you feed him, he loses his whole <i>identity</i>.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 47.";
        this.howToEarn = "Unlocked at Level 4.";
        this.textInPlay = "Soaring";
    }

}

export class BRMA09_6 extends Card {
    constructor() {
        super();
        this.name = "The True Warchief";
        this.type = CARDTYPES.spell;
        this.text = "Destroy a Legendary minion.";
        this.set = "BRM";
        this.manacost = 1;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0,\"REQ_LEGENDARY_TARGET\":0}

}

export class XXX_097 extends Card {
    constructor() {
        super();
        this.name = "AI Buddy - Destroy Minions";
        this.type = CARDTYPES.minion;
        this.text = "Spawn into play to destroy all minions.";
        this.set = "CHEAT";
        this.health = 1;
        this.attack = 1;
        this.manacost = 0;
    }

}

export class LOEA16_1 extends Card {
    constructor() {
        super();
        this.name = "Rafaam";
        this.type = CARDTYPES.hero;
        this.set = "LOE";
        this.health = 30;
    }

    //[\"LOEA16_18\",\"LOEA16_23\",\"LOEA16_19\",\"LOEA16_22\",\"LOEA16_21\",\"LOEA16_24\",\"LOEA16_25\",\"LOEA16_26\",\"LOEA16_27\"]

}

export class LOEA09_8 extends Card {
    constructor() {
        super();
        this.name = "Slithering Guard";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "LOE";
        this.health = 6;
        this.attack = 3;
        this.manacost = 5;
    }

    //[\"TAUNT\"]

}

export class TU4f_006 extends Card {
    constructor() {
        super();
        this.name = "Transcendence";
        this.type = CARDTYPES.spell;
        this.text = "Until you kill Cho's minions, he can't be attacked.";
        this.set = "MISSIONS";
        this.manacost = 1;
        this.rarity = rarity.common;
    }

}

export class TP_Bling_HP2 extends Card {
    constructor() {
        super();
        this.name = "Cash In";
        this.type = CARDTYPES.hero_power;
        this.text = "Destroy your weapon, gaining a random one.";
        this.set = "TB";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.rogue;
        this.rarity = rarity.unknown;
    }

}

export class NAX8_05t extends Card {
    constructor() {
        super();
        this.name = "Spectral Rider";
        this.type = CARDTYPES.minion;
        this.text = "At the start of your turn, deal 1 damage to your hero.";
        this.set = "NAXX";
        this.health = 6;
        this.attack = 0;
        this.manacost = 5;
    }

}

export class EX1_407 extends Card {
    constructor() {
        super();
        this.name = "Brawl";
        this.type = CARDTYPES.spell;
        this.text = "Destroy all minions except one. <i>(chosen randomly)</i>";
        this.set = "EXPERT1";
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Wayne Reynolds";
        this.flavor = "Do you know the first rule of Brawl Club?";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //{\"REQ_MINIMUM_TOTAL_MINIONS\":2}

}

export class HERO_03 extends Card {
    constructor() {
        super();
        this.name = "Valeera Sanguinar";
        this.type = CARDTYPES.hero;
        this.set = "CORE";
        this.health = 30;
        this.characterClass = CHARACTERCLASS.rogue;
        this.rarity = rarity.free;
        this.collectible = true;
    }

}

export class NAX9_03H extends Card {
    constructor() {
        super();
        this.name = "Thane Korth'azz";
        this.type = CARDTYPES.minion;
        this.text = "Your hero is <b>Immune</b>.";
        this.set = "NAXX";
        this.health = 7;
        this.attack = 2;
        this.manacost = 3;
    }

}

export class BRMA05_3 extends Card {
    constructor() {
        super();
        this.name = "Living Bomb";
        this.type = CARDTYPES.spell;
        this.text = "Choose an enemy minion. If it lives until your next turn, deal $5 damage to all enemies.";
        this.set = "BRM";
        this.manacost = 4;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0,\"REQ_ENEMY_TARGET\":0}

}

export class AT_032e extends Card {
    constructor() {
        super();
        this.name = "Shady Deals";
        this.type = CARDTYPES.enchantment;
        this.text = "+1/+1.";
        this.set = "TGT";
        this.characterClass = CHARACTERCLASS.rogue;
    }

}

export class LOEA08_01 extends Card {
    constructor() {
        super();
        this.name = "Archaedas";
        this.type = CARDTYPES.hero;
        this.set = "LOE";
        this.health = 30;
    }

}

export class GVG_087 extends Card {
    constructor() {
        super();
        this.name = "Steamwheedle Sniper";
        this.type = CARDTYPES.minion;
        this.text = "Your Hero Power can target minions.";
        this.set = "GVG";
        this.health = 3;
        this.attack = 2;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Jun Kang";
        this.flavor = "Goblins seldom have the patience for sniping. Most prefer lobbing explosives.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class EX1_616 extends Card {
    constructor() {
        super();
        this.name = "Mana Wraith";
        this.type = CARDTYPES.minion;
        this.text = "ALL minions cost (1) more.";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 2;
        this.manacost = 2;
        this.artist = "Luca Zontini";
        this.flavor = "They come out at night to eat leftover mana crystals. \"Mmmmmm,\" they say.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"AURA\"]

}

export class NEW1_004 extends Card {
    constructor() {
        super();
        this.name = "Vanish";
        this.type = CARDTYPES.spell;
        this.text = "Return all minions to their owner's hand.";
        this.set = "CORE";
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Sean Oâ€™Daniels";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 23.";
        this.howToEarn = "Unlocked at Level 8.";
    }

}

export class CRED_05 extends Card {
    constructor() {
        super();
        this.name = "Kyle Harrison";
        this.type = CARDTYPES.minion;
        this.text = "<i>3 for a 5/4? That's a good deal!</i>";
        this.set = "CREDITS";
        this.health = 4;
        this.attack = 5;
        this.manacost = 3;
        this.rarity = rarity.legendary;
    }

}

export class XXX_012 extends Card {
    constructor() {
        super();
        this.name = "Bounce";
        this.type = CARDTYPES.spell;
        this.text = "Return a minion to its owner's hand.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class NAX8_04 extends Card {
    constructor() {
        super();
        this.name = "Unrelenting Warrior";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Summon a Spectral Warrior for your opponent.";
        this.set = "NAXX";
        this.health = 4;
        this.attack = 3;
        this.manacost = 3;
    }

    //[\"DEATHRATTLE\"]

}

export class AT_034 extends Card {
    constructor() {
        super();
        this.name = "Poisoned Blade";
        this.type = CARDTYPES.weapon;
        this.text = "Your Hero Power gives this weapon +1 Attack instead of replacing it.";
        this.set = "TGT";
        this.attack = 1;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Nutthapon Petchthai";
        this.flavor = "How much more poisoned can a blade get?  The answer is a lot.  A lot more poisoned.";
        this.rarity = rarity.epic;
        this.collectible = true;
        this.durability = "3";
    }

}

export class TB_PickYourFate_8rand extends Card {
    constructor() {
        super();
        this.name = "Fate: Armor";
        this.type = CARDTYPES.spell;
        this.text = "Each player gains 2 Armor on the start of their turn.";
        this.set = "TB";
        this.manacost = 0;
    }

}

export class FP1_014 extends Card {
    constructor() {
        super();
        this.name = "Stalagg";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> If Feugen also died this game, summon Thaddius.";
        this.set = "NAXX";
        this.health = 4;
        this.attack = 7;
        this.manacost = 5;
        this.artist = "Dany Orizio";
        this.flavor = "Stalagg want to write own flavor text.  \"STALAGG AWESOME!\"";
        this.rarity = rarity.legendary;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after completing the Construct Quarter.";
        this.howToEarn = "Unlocked in The Construct Quarter, in the Naxxramas adventure.";
    }

    //[\"DEATHRATTLE\"]

}

export class EX1_tk31 extends Card {
    constructor() {
        super();
        this.name = "Mind Controlling";
        this.type = CARDTYPES.enchantment;
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.priest;
        this.rarity = rarity.common;
    }

}

export class DS1_175 extends Card {
    constructor() {
        super();
        this.name = "Timber Wolf";
        this.type = CARDTYPES.minion;
        this.text = "Your other Beasts have +1 Attack.";
        this.set = "CORE";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Malcolm Davis";
        this.race = race.beast;
        this.flavor = "Other beasts totally dig hanging out with timber wolves.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 23.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //[\"AURA\"]

}

export class AT_050t extends Card {
    constructor() {
        super();
        this.name = "Lightning Jolt";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDeal $2 damage.";
        this.set = "TGT";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.shaman;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class GAME_003e extends Card {
    constructor() {
        super();
        this.name = "Coin's Vengence";
        this.type = CARDTYPES.enchantment;
        this.text = "Going second makes your first minion stronger.";
        this.set = "CORE";
    }

}

export class EX1_245 extends Card {
    constructor() {
        super();
        this.name = "Earth Shock";
        this.type = CARDTYPES.spell;
        this.text = "<b>Silence</b> a minion, then deal $1 damage to it.";
        this.set = "EXPERT1";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Kevin Chin";
        this.flavor = "Earth Shock? Shouldn't it be \"Azeroth Shock\"?";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"SILENCE\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class AT_012 extends Card {
    constructor() {
        super();
        this.name = "Spawn of Shadows";
        this.type = CARDTYPES.minion;
        this.text = "<b>Inspire:</b> Deal 4 damage to each hero.";
        this.set = "TGT";
        this.health = 4;
        this.attack = 5;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Dave Allsop";
        this.flavor = "What did you expect to happen?  He's a Spawn.  Of Shadows.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"INSPIRE\"]

}

export class EX1_312 extends Card {
    constructor() {
        super();
        this.name = "Twisting Nether";
        this.type = CARDTYPES.spell;
        this.text = "Destroy all minions.";
        this.set = "EXPERT1";
        this.manacost = 8;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Dave Allsop";
        this.flavor = "The Twisting Nether is a formless place of magic and illusion and destroyed minions.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class CRED_29 extends Card {
    constructor() {
        super();
        this.name = "Jason MacAllister";
        this.type = CARDTYPES.minion;
        this.text = "<i>He's a real stand-up guy.</i>";
        this.set = "CREDITS";
        this.health = 5;
        this.attack = 6;
        this.manacost = 5;
        this.rarity = rarity.legendary;
    }

}

export class AT_119 extends Card {
    constructor() {
        super();
        this.name = "Kvaldir Raider";
        this.type = CARDTYPES.minion;
        this.text = "<b>Inspire:</b> Gain +2/+2.";
        this.set = "TGT";
        this.health = 4;
        this.attack = 4;
        this.manacost = 5;
        this.artist = "Trent Kaniuga";
        this.flavor = "Coming soon... to a tuskarr village near you!";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"INSPIRE\"]

}

export class PART_007e extends Card {
    constructor() {
        super();
        this.name = "Whirling Blades";
        this.type = CARDTYPES.enchantment;
        this.text = "+1 Attack.";
        this.set = "GVG";
    }

}

export class TBST_001 extends Card {
    constructor() {
        super();
        this.name = "OLDN3wb Tank";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "TB";
        this.health = 2;
        this.attack = 2;
        this.manacost = 1;
    }

    //[\"TAUNT\"]

}

export class EX1_316e extends Card {
    constructor() {
        super();
        this.name = "Power Overwhelming";
        this.type = CARDTYPES.enchantment;
        this.text = "This minion has +4/+4, but will die a horrible death at the end of the turn.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.warlock;
    }

}

export class CS2_097 extends Card {
    constructor() {
        super();
        this.name = "Truesilver Champion";
        this.type = CARDTYPES.weapon;
        this.text = "Whenever your hero attacks, restore 2 Health to it.";
        this.set = "CORE";
        this.attack = 4;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Ryan Sook";
        this.flavor = "It Slices, it Dices. You can cut a tin can with it. (But you wouldn't want to.)";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 40.";
        this.howToEarn = "Unlocked at Level 2.";
        this.durability = "2";
    }

}

export class NEW1_037e extends Card {
    constructor() {
        super();
        this.name = "Equipped";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Attack.";
        this.set = "EXPERT1";
    }

}

export class BRMA16_1 extends Card {
    constructor() {
        super();
        this.name = "Atramedes";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class NAX10_01 extends Card {
    constructor() {
        super();
        this.name = "Patchwerk";
        this.type = CARDTYPES.hero;
        this.set = "NAXX";
        this.health = 30;
    }

}

export class EX1_360e extends Card {
    constructor() {
        super();
        this.name = "Humility";
        this.type = CARDTYPES.enchantment;
        this.text = "Attack has been changed to 1.";
        this.set = "CORE";
        this.characterClass = CHARACTERCLASS.paladin;
    }

}

export class GVG_067 extends Card {
    constructor() {
        super();
        this.name = "Stonesplinter Trogg";
        this.type = CARDTYPES.minion;
        this.text = "Whenever your opponent casts a spell, gain +1 Attack.";
        this.set = "GVG";
        this.health = 3;
        this.attack = 2;
        this.manacost = 2;
        this.artist = "Peet Cooper";
        this.flavor = "The only thing worse than smelling troggs is listening to their poetry.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class BRMC_98e extends Card {
    constructor() {
        super();
        this.name = "Dragonlust";
        this.type = CARDTYPES.enchantment;
        this.text = "+3 Attack.";
        this.set = "TB";
    }

}

export class NAX12_02H_2_TB extends Card {
    constructor() {
        super();
        this.name = "Decimate";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nChange the Health of enemy minions to 1.";
        this.set = "TB";
        this.manacost = 2;
    }

    //{\"REQ_MINIMUM_ENEMY_MINIONS\":1}

}

export class XXX_011 extends Card {
    constructor() {
        super();
        this.name = "Summon a random Secret";
        this.type = CARDTYPES.spell;
        this.text = "Summon a secret from your deck.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

}

export class GVG_002 extends Card {
    constructor() {
        super();
        this.name = "Snowchugger";
        this.type = CARDTYPES.minion;
        this.text = "<b>Freeze</b> any character damaged by this minion.";
        this.set = "GVG";
        this.health = 3;
        this.attack = 2;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Gabor Szikszai";
        this.race = race.mechanical;
        this.flavor = "Do the slow chant when he waddles by: \"Chug! Chug! Chug!\"";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"FREEZE\"]

}

export class LOEA16_16H extends Card {
    constructor() {
        super();
        this.name = "Rummage";
        this.type = CARDTYPES.hero_power;
        this.text = "Find an artifact.";
        this.set = "LOE";
        this.manacost = 2;
    }

    //[\"LOEA16_10\",\"LOEA16_11\",\"LOEA16_14\",\"LOEA16_15\",\"LOEA16_6\",\"LOEA16_7\",\"LOEA16_9\",\"LOEA16_12\",\"LOEA16_13\",\"LOEA16_8\"]

}

export class TB_PickYourFate_4_Ench extends Card {
    constructor() {
        super();
        this.name = "Pick Your Fate 4 Ench";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
    }

}

export class AT_132_DRUIDe extends Card {
    constructor() {
        super();
        this.name = "Dire Claws";
        this.type = CARDTYPES.enchantment;
        this.text = "+2 Attack this turn.";
        this.set = "TGT";
        this.characterClass = CHARACTERCLASS.druid;
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class FP1_011 extends Card {
    constructor() {
        super();
        this.name = "Webspinner";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Add a random Beast card to your hand.";
        this.set = "NAXX";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Dan Brereton";
        this.race = race.beast;
        this.flavor = "Spider cocoons are like little piÃ±atas!";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after completing the Hunter Class Challenge in Naxxramas.";
        this.howToEarn = "Unlocked in The Plague Quarter, in the Naxxramas adventure.";
    }

    //[\"DEATHRATTLE\"]

}

export class LOEA10_5 extends Card {
    constructor() {
        super();
        this.name = "Mrgl Mrgl Nyah Nyah";
        this.type = CARDTYPES.spell;
        this.text = "Summon 3 Murlocs that died this game.";
        this.set = "LOE";
        this.manacost = 5;
        this.rarity = rarity.common;
    }

}

export class GVG_111t extends Card {
    constructor() {
        super();
        this.name = "V-07-TR-0N";
        this.type = CARDTYPES.minion;
        this.text = "<b>Charge</b>\n<b>Mega-Windfury</b> <i>(Can attack four times a turn.)</i>";
        this.set = "GVG";
        this.health = 8;
        this.attack = 4;
        this.manacost = 8;
        this.artist = "Chris Seaman";
        this.race = race.mechanical;
        this.rarity = rarity.legendary;
    }

    //[\"CHARGE\"]

}

export class XXX_098 extends Card {
    constructor() {
        super();
        this.name = "AI Buddy - No Deck/Hand";
        this.type = CARDTYPES.minion;
        this.text = "Spawn into play to destroy the AI's Hand and Deck.";
        this.set = "CHEAT";
        this.health = 1;
        this.attack = 1;
        this.manacost = 0;
    }

}

export class AT_036t extends Card {
    constructor() {
        super();
        this.name = "Nerubian";
        this.type = CARDTYPES.minion;
        this.set = "TGT";
        this.health = 4;
        this.attack = 4;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.rogue;
    }

}

export class BRMA10_6 extends Card {
    constructor() {
        super();
        this.name = "Razorgore's Claws";
        this.type = CARDTYPES.weapon;
        this.text = "Whenever a Corrupted Egg dies, gain +1 Attack.";
        this.set = "BRM";
        this.attack = 1;
        this.manacost = 1;
        this.durability = "5";
    }

}

export class TB_010e extends Card {
    constructor() {
        super();
        this.name = "Choose One of Three";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
    }

}

export class LOEA09_5H extends Card {
    constructor() {
        super();
        this.name = "Hungry Naga";
        this.type = CARDTYPES.minion;
        this.set = "LOE";
        this.health = 3;
        this.attack = 3;
        this.manacost = 3;
    }

}

export class NAX10_01H extends Card {
    constructor() {
        super();
        this.name = "Patchwerk";
        this.type = CARDTYPES.hero;
        this.set = "NAXX";
        this.health = 45;
    }

}

export class GVG_027 extends Card {
    constructor() {
        super();
        this.name = "Iron Sensei";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, give another friendly Mech +2/+2.";
        this.set = "GVG";
        this.health = 2;
        this.attack = 2;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Brian Despain";
        this.race = race.mechanical;
        this.flavor = "Mechs like learning from him because he really speaks their language.\n0110100001101001";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class EX1_116t extends Card {
    constructor() {
        super();
        this.name = "Whelp";
        this.type = CARDTYPES.minion;
        this.set = "EXPERT1";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
        this.race = race.dragon;
    }

}

export class AT_131 extends Card {
    constructor() {
        super();
        this.name = "Eydis Darkbane";
        this.type = CARDTYPES.minion;
        this.text = "Whenever <b>you</b> target this minion with a spell, deal 3 damage to a random enemy.";
        this.set = "TGT";
        this.health = 4;
        this.attack = 3;
        this.manacost = 3;
        this.artist = "Ben Thompson";
        this.flavor = "HATES being called \"the wonder twins\".";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

}

export class AT_082 extends Card {
    constructor() {
        super();
        this.name = "Lowly Squire";
        this.type = CARDTYPES.minion;
        this.text = "<b>Inspire:</b> Gain +1 Attack.";
        this.set = "TGT";
        this.health = 2;
        this.attack = 1;
        this.manacost = 1;
        this.artist = "Ron Spears";
        this.flavor = "But not the lowliest!";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"INSPIRE\"]

}

export class LOEA04_06 extends Card {
    constructor() {
        super();
        this.name = "Pit of Spikes";
        this.type = CARDTYPES.spell;
        this.text = "<b>Choose Your Path!</b>";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class NAX12_02e extends Card {
    constructor() {
        super();
        this.name = "Decimate";
        this.type = CARDTYPES.enchantment;
        this.text = "Health changed to 1.";
        this.set = "NAXX";
    }

}

export class AT_132 extends Card {
    constructor() {
        super();
        this.name = "Justicar Trueheart";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Replace your starting Hero Power with a better one.";
        this.set = "TGT";
        this.health = 3;
        this.attack = 6;
        this.manacost = 6;
        this.artist = "Jomaro Kindred";
        this.flavor = "It's like putting racing stripes and a giant spoiler on your hero power.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class LOE_006 extends Card {
    constructor() {
        super();
        this.name = "Museum Curator";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry: Discover</b> a <b>Deathrattle</b> card.";
        this.set = "LOE";
        this.health = 2;
        this.attack = 1;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Steve Prescott";
        this.flavor = "He is forever cursing the kids who climb on the rails and the evil archeologists who animate the exhibits.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in the Hall of Explorers, in the League of Explorers adventure.";
    }

    //[\"BATTLECRY\"]

}

export class CS2_179 extends Card {
    constructor() {
        super();
        this.name = "Sen'jin Shieldmasta";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "CORE";
        this.health = 5;
        this.attack = 3;
        this.manacost = 4;
        this.artist = "Brian Despain";
        this.flavor = "Sen'jin Villiage is nice, if you like trolls and dust.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.faction = "HORDE";
        this.howToEarnGolden = "Unlocked at Rogue Level 59.";
    }

    //[\"TAUNT\"]

}

export class BRMA09_4 extends Card {
    constructor() {
        super();
        this.name = "Blackwing";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon a 3/1 Dragonkin. Get a new Hero Power.";
        this.set = "BRM";
        this.manacost = 1;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}
    //[\"BRMA09_2\",\"BRMA09_3\",\"BRMA09_5\"]

}

export class CS2_172 extends Card {
    constructor() {
        super();
        this.name = "Bloodfen Raptor";
        this.type = CARDTYPES.minion;
        this.set = "CORE";
        this.health = 2;
        this.attack = 3;
        this.manacost = 2;
        this.artist = "Dan Brereton";
        this.race = race.beast;
        this.flavor = "\"Kill 30 raptors.\" - Hemet Nesingwary";
        this.rarity = rarity.free;
        this.collectible = true;
        this.faction = "HORDE";
        this.howToEarnGolden = "Unlocked at Hunter Level 57.";
    }

}

export class NAX12_03e extends Card {
    constructor() {
        super();
        this.name = "Extra Teeth";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Attack.";
        this.set = "NAXX";
    }

}

export class AT_065e extends Card {
    constructor() {
        super();
        this.name = "King's Defender";
        this.type = CARDTYPES.enchantment;
        this.text = "+1 Durability.";
        this.set = "TGT";
    }

}

export class FP1_014t extends Card {
    constructor() {
        super();
        this.name = "Thaddius";
        this.type = CARDTYPES.minion;
        this.set = "NAXX";
        this.health = 11;
        this.attack = 11;
        this.manacost = 10;
        this.rarity = rarity.legendary;
    }

}

export class LOEA01_01 extends Card {
    constructor() {
        super();
        this.name = "Sun Raider Phaerix";
        this.type = CARDTYPES.hero;
        this.set = "LOE";
        this.health = 30;
    }

}

export class EX1_173 extends Card {
    constructor() {
        super();
        this.name = "Starfire";
        this.type = CARDTYPES.spell;
        this.text = "Deal $5 damage.\nDraw a card.";
        this.set = "CORE";
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "Balance is important to druids.  This card is perfectly balanced.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 45.";
        this.howToEarn = "Unlocked at Level 2.";
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class BRMA17_3 extends Card {
    constructor() {
        super();
        this.name = "Onyxia";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 15;
    }

}

export class EX1_391 extends Card {
    constructor() {
        super();
        this.name = "Slam";
        this.type = CARDTYPES.spell;
        this.text = "Deal $2 damage to a minion. If it survives, draw a card.";
        this.set = "EXPERT1";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "E.M. Gist";
        this.flavor = "\"Dun da dun, dun da dun\": if you've heard an ogre sing this, it's too late.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class GAME_005e extends Card {
    constructor() {
        super();
        this.name = "The Coin";
        this.type = CARDTYPES.enchantment;
        this.set = "CORE";
    }

}

export class BRMA08_2 extends Card {
    constructor() {
        super();
        this.name = "Intense Gaze";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Passive Hero Power</b>\nAll cards cost (1). Players are capped at 1 Mana Crystal.";
        this.set = "BRM";
        this.manacost = 0;
    }

}

export class GVG_032b extends Card {
    constructor() {
        super();
        this.name = "Gift of Cards";
        this.type = CARDTYPES.spell;
        this.text = "Each player draws a card.";
        this.set = "GVG";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
    }

}

export class EX1_507 extends Card {
    constructor() {
        super();
        this.name = "Murloc Warleader";
        this.type = CARDTYPES.minion;
        this.text = "ALL other Murlocs have +2/+1.";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 3;
        this.manacost = 3;
        this.artist = "Tim McBurnie";
        this.race = race.murloc;
        this.flavor = "Do Murlocs ever get tired of making the same old sound?  Nope!  Mrglglrglglglglglglgl!";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //[\"AURA\"]

}

export class GVG_019e extends Card {
    constructor() {
        super();
        this.name = "Demonheart";
        this.type = CARDTYPES.enchantment;
        this.text = "+5/+5.";
        this.set = "GVG";
        this.characterClass = CHARACTERCLASS.warlock;
    }

}

export class AT_123 extends Card {
    constructor() {
        super();
        this.name = "Chillmaw";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>\n<b>Deathrattle:</b> If you're holding a Dragon, deal 3 damage to all minions.";
        this.set = "TGT";
        this.health = 6;
        this.attack = 6;
        this.manacost = 7;
        this.artist = "Raymond Swanland";
        this.race = race.dragon;
        this.flavor = "Chillmaw keeps trying to ruin the Grand Tournament, and she would've done it too, if it weren't for those dang kids!";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"DEATHRATTLE\",\"TAUNT\"]

}

export class EX1_160a extends Card {
    constructor() {
        super();
        this.name = "Summon a Panther";
        this.type = CARDTYPES.spell;
        this.text = "Summon a 3/2 Panther.";
        this.set = "EXPERT1";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}

}

export class EX1_102 extends Card {
    constructor() {
        super();
        this.name = "Demolisher";
        this.type = CARDTYPES.minion;
        this.text = "At the start of your turn, deal 2 damage to a random enemy.";
        this.set = "EXPERT1";
        this.health = 4;
        this.attack = 1;
        this.manacost = 3;
        this.artist = "Raymond Swanland";
        this.race = race.mechanical;
        this.flavor = "Laying siege isn't fun for anyone.  It's not even all that effective, now that everyone has a flying mount.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class CS2_007 extends Card {
    constructor() {
        super();
        this.name = "Healing Touch";
        this.type = CARDTYPES.spell;
        this.text = "Restore #8 Health.";
        this.set = "CORE";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Cyril Van Der Haegen";
        this.flavor = "8 Health, no waiting.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 15.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class CRED_38 extends Card {
    constructor() {
        super();
        this.name = "Robin Fredericksen";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> If you have no other Erics on the battlefield, rename this card to \"Eric\".";
        this.set = "CREDITS";
        this.health = 4;
        this.attack = 4;
        this.manacost = 4;
        this.rarity = rarity.legendary;
    }

}

export class AT_130 extends Card {
    constructor() {
        super();
        this.name = "Sea Reaver";
        this.type = CARDTYPES.minion;
        this.text = "When you draw this, deal 1 damage to your minions.";
        this.set = "TGT";
        this.health = 7;
        this.attack = 6;
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "James Ryman";
        this.flavor = "A little better than Sea Minus Reaver.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class LOE_092 extends Card {
    constructor() {
        super();
        this.name = "Arch-Thief Rafaam";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry: Discover</b> a powerful Artifact.";
        this.set = "LOE";
        this.health = 8;
        this.attack = 7;
        this.manacost = 9;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "He's very good at retrieving artifacts.  From other people's museums.";
        this.rarity = rarity.legendary;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in the Hall of Explorers, in the League of Explorers adventure.";
    }

    //[\"BATTLECRY\"]

}

export class LOE_002t extends Card {
    constructor() {
        super();
        this.name = "Roaring Torch";
        this.type = CARDTYPES.spell;
        this.text = "Deal $6 damage.";
        this.set = "LOE";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Richard Wright";
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class GVG_104a extends Card {
    constructor() {
        super();
        this.name = "HERE, TAKE BUFF.";
        this.type = CARDTYPES.enchantment;
        this.text = "+2/+2.";
        this.set = "GVG";
    }

}

export class NAX11_04 extends Card {
    constructor() {
        super();
        this.name = "Mutating Injection";
        this.type = CARDTYPES.spell;
        this.text = "Give a minion +4/+4 and <b>Taunt</b>.";
        this.set = "NAXX";
        this.manacost = 3;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class CS2_063e extends Card {
    constructor() {
        super();
        this.name = "Corruption";
        this.type = CARDTYPES.enchantment;
        this.text = "At the start of the corrupting player's turn, destroy this minion.";
        this.set = "CORE";
        this.characterClass = CHARACTERCLASS.warlock;
    }

}

export class EX1_116 extends Card {
    constructor() {
        super();
        this.name = "Leeroy Jenkins";
        this.type = CARDTYPES.minion;
        this.text = "<b>Charge</b>. <b>Battlecry:</b> Summon two 1/1 Whelps for your opponent.";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 6;
        this.manacost = 5;
        this.artist = "Gabe from Penny Arcade";
        this.flavor = "At least he has Angry Chicken.";
        this.rarity = rarity.legendary;
        this.collectible = true;
        this.faction = "ALLIANCE";
    }

    //[\"BATTLECRY\",\"CHARGE\"]

}

export class PART_002 extends Card {
    constructor() {
        super();
        this.name = "Time Rewinder";
        this.type = CARDTYPES.spell;
        this.text = "Return a friendly minion to your hand.";
        this.set = "GVG";
        this.manacost = 1;
        this.artist = "Nutthapon Petthai";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0,\"REQ_FRIENDLY_TARGET\":0}

}

export class BRMC_98 extends Card {
    constructor() {
        super();
        this.name = "Razorgore";
        this.type = CARDTYPES.minion;
        this.text = "At the start of your turn, give your minions +3 Attack.";
        this.set = "TB";
        this.health = 12;
        this.attack = 4;
        this.manacost = 6;
        this.race = race.dragon;
        this.rarity = rarity.legendary;
    }

}

export class LOE_024t extends Card {
    constructor() {
        super();
        this.name = "Rolling Boulder";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, destroy the minion to the left.";
        this.set = "LOE";
        this.health = 4;
        this.attack = 0;
        this.manacost = 4;
        this.artist = "Richard Wright";
    }

}

export class TB_PickYourFate_Confused extends Card {
    constructor() {
        super();
        this.name = "Fate";
        this.type = CARDTYPES.enchantment;
        this.text = "Attack and Health swap at end of each turn.";
        this.set = "TB";
    }

}

export class BRMA13_1H extends Card {
    constructor() {
        super();
        this.name = "Lord Victor Nefarius";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class NEW1_016 extends Card {
    constructor() {
        super();
        this.name = "Captain's Parrot";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Put a random Pirate from your deck into your hand.";
        this.set = "REWARD";
        this.health = 1;
        this.attack = 1;
        this.manacost = 2;
        this.artist = "Daren Bader";
        this.race = race.beast;
        this.flavor = "Pirates and Parrots go together like Virmen and Carrots.";
        this.rarity = rarity.epic;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked when you have all the Golden Pirates from the Classic Set.";
        this.howToEarn = "Unlocked when you have all the Pirates from the Classic Set.";
    }

    //[\"BATTLECRY\"]

}

export class NAX7_02 extends Card {
    constructor() {
        super();
        this.name = "Understudy";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "NAXX";
        this.health = 7;
        this.attack = 0;
        this.manacost = 2;
    }

    //[\"TAUNT\"]

}

export class TB_009 extends Card {
    constructor() {
        super();
        this.name = "Create 15 Secrets";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
    }

    //[\"FP1_020\",\"EX1_287\",\"FP1_018\",\"EX1_610\",\"EX1_132\",\"EX1_611\",\"EX1_289\",\"EX1_295\",\"EX1_294\",\"EX1_533\",\"EX1_130\",\"EX1_136\",\"EX1_379\",\"EX1_554\",\"EX1_609\",\"tt_010\",\"EX1_594\"]

}

export class LOEA16_12 extends Card {
    constructor() {
        super();
        this.name = "Medivh's Locket";
        this.type = CARDTYPES.spell;
        this.text = "Replace your hand with Unstable Portals.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class AT_117e extends Card {
    constructor() {
        super();
        this.name = "Ceremony";
        this.type = CARDTYPES.enchantment;
        this.text = "+2/+2.";
        this.set = "TGT";
    }

}

export class BRMA11_2 extends Card {
    constructor() {
        super();
        this.name = "Essence of the Red";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nEach player draws 2 cards.";
        this.set = "BRM";
        this.manacost = 0;
    }

}

export class EX1_570 extends Card {
    constructor() {
        super();
        this.name = "Bite";
        this.type = CARDTYPES.spell;
        this.text = "Give your hero +4 Attack this turn and 4 Armor.";
        this.set = "EXPERT1";
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Tom Baxa";
        this.flavor = "Chew your food!";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class AT_117 extends Card {
    constructor() {
        super();
        this.name = "Master of Ceremonies";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> If you have a minion with <b>Spell Damage</b>, gain +2/+2.";
        this.set = "TGT";
        this.health = 2;
        this.attack = 4;
        this.manacost = 3;
        this.artist = "Jesper Ejsing";
        this.flavor = "Goes by \"MC ElfyElf\".";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class GVG_117 extends Card {
    constructor() {
        super();
        this.name = "Gazlowe";
        this.type = CARDTYPES.minion;
        this.text = "Whenever you cast a 1-mana spell, add a random Mech to your hand.";
        this.set = "GVG";
        this.health = 6;
        this.attack = 3;
        this.manacost = 6;
        this.artist = "Luke Mancini";
        this.flavor = "Gazlowe was voted \"Most Likely to Explode\" in high school.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

}

export class XXX_053 extends Card {
    constructor() {
        super();
        this.name = "Armor 100";
        this.type = CARDTYPES.spell;
        this.text = "Give target Hero +100 Armor";
        this.set = "CHEAT";
        this.manacost = 0;
    }

    //{\"REQ_TARGET_TO_PLAY\":0,\"REQ_HERO_TARGET\":0}

}

export class EX1_365 extends Card {
    constructor() {
        super();
        this.name = "Holy Wrath";
        this.type = CARDTYPES.spell;
        this.text = "Draw a card and deal damage equal to its cost.";
        this.set = "EXPERT1";
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Justin Sweet";
        this.flavor = "C'mon Molten Giant!!";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class CS2_103e2 extends Card {
    constructor() {
        super();
        this.name = "Charge";
        this.type = CARDTYPES.enchantment;
        this.text = "+2 Attack and <b>Charge</b>.";
        this.set = "CORE";
        this.characterClass = CHARACTERCLASS.warrior;
    }

}

export class EX1_tk33 extends Card {
    constructor() {
        super();
        this.name = "INFERNO!";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon a 6/6 Infernal.";
        this.set = "EXPERT1";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.warlock;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}

}

export class EX1_534 extends Card {
    constructor() {
        super();
        this.name = "Savannah Highmane";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Summon two 2/2 Hyenas.";
        this.set = "EXPERT1";
        this.health = 5;
        this.attack = 6;
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Milivoj Ceran";
        this.race = race.beast;
        this.flavor = "In the jungle, the mighty jungle, the lion gets slowly consumed by hyenas.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.textInPlay = "Master";
    }

    //[\"DEATHRATTLE\"]

}

export class LOEA06_04h extends Card {
    constructor() {
        super();
        this.name = "Shattering Spree";
        this.type = CARDTYPES.spell;
        this.text = "Destroy all Statues. For each destroyed, deal $3 damage.";
        this.set = "LOE";
        this.manacost = 2;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class BRMA07_2H extends Card {
    constructor() {
        super();
        this.name = "ME SMASH";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDestroy a random enemy minion.";
        this.set = "BRM";
        this.manacost = 0;
    }

}

export class GVG_075 extends Card {
    constructor() {
        super();
        this.name = "Ship's Cannon";
        this.type = CARDTYPES.minion;
        this.text = "After you summon a Pirate, deal 2 damage to a random enemy.";
        this.set = "GVG";
        this.health = 3;
        this.attack = 2;
        this.manacost = 2;
        this.artist = "Warren Mahy";
        this.flavor = "If you hear someone yell, \"Cannonball!\" you're about to get wet. Or crushed.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class BRMA06_2 extends Card {
    constructor() {
        super();
        this.name = "The Majordomo";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon a 1/3 Flamewaker Acolyte.";
        this.set = "BRM";
        this.manacost = 2;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}

}

export class TB_001 extends Card {
    constructor() {
        super();
        this.name = "Boss HP Swapper";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
    }

    //[\"BRMA14_10\",\"BRMA14_10H\",\"BRMA09_4\",\"BRMA09_4H\",\"BRMA17_5\",\"BRMA17_5H\",\"NAX15_04\",\"NAX15_04H\",\"NAX12_02\",\"NAX12_02H\",\"BRM_027p\",\"BRM_027pH\",\"BRMA09_5\",\"BRMA09_5H\",\"BRMA16_2\",\"BRMA16_2H\",\"NAX5_02\",\"NAX5_02H\",\"BRMA11_2\",\"BRMA11_2H\",\"BRMA17_8\",\"BRMA17_8H\",\"NAX15_02\",\"NAX15_02H\",\"NAX14_02\",\"NAX8_02\",\"NAX8_02H\",\"NAX10_03\",\"NAX10_03H\",\"BRMA05_2\",\"BRMA05_2H\",\"BRMA02_2\",\"BRMA02_2H\",\"BRMA04_2\",\"BRMA07_2\",\"BRMA07_2H\",\"NAX6_02\",\"NAX6_02H\",\"BRMA09_2\",\"BRMA09_2H\",\"BRMA01_2\",\"BRMA01_2H\",\"NAX11_02\",\"NAX11_02H\",\"NAX13_02\",\"NAX2_03\",\"NAX2_03H\",\"NAX1_04\",\"NAX1h_04\",\"BRMA06_2\",\"BRMA06_2H\",\"BRMA10_3\",\"BRMA10_3H\",\"NAX7_03\",\"NAX7_03H\",\"NAX9_06\",\"NAX3_02\",\"NAX3_02H\",\"BRMA13_4\",\"BRMA13_4H\"]

}

export class TU4a_004 extends Card {
    constructor() {
        super();
        this.name = "Hogger SMASH!";
        this.type = CARDTYPES.spell;
        this.text = "Deal 4 damage.";
        this.set = "MISSIONS";
        this.manacost = 3;
        this.rarity = rarity.common;
    }

    //{\"REQ_TARGET_TO_PLAY\":0,\"REQ_HERO_TARGET\":0,\"REQ_ENEMY_TARGET\":0}

}

export class TB_PickYourFate_5 extends Card {
    constructor() {
        super();
        this.name = "Fate: Spells";
        this.type = CARDTYPES.spell;
        this.text = "Spells cost (1) less.";
        this.set = "TB";
        this.manacost = 0;
    }

}

export class LOEA02_06 extends Card {
    constructor() {
        super();
        this.name = "Wish for More Wishes";
        this.type = CARDTYPES.spell;
        this.text = "Gain 2 Wishes.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class EX1_158e extends Card {
    constructor() {
        super();
        this.name = "Soul of the Forest";
        this.type = CARDTYPES.enchantment;
        this.text = "Deathrattle: Summon a 2/2 Treant.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.druid;
    }

}

export class LOE_002 extends Card {
    constructor() {
        super();
        this.name = "Forgotten Torch";
        this.type = CARDTYPES.spell;
        this.text = "Deal $3 damage. Shuffle a 'Roaring Torch' into your deck that deals 6 damage.";
        this.set = "LOE";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Richard Wright";
        this.flavor = "Why does a forgotten torch turn into a roaring torch with no provocation?  It's one of life's many mysteries.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after starting the League of Explorers adventure.";
        this.howToEarn = "Unlocked by starting the League of Explorers adventure.";
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class BRMA07_1 extends Card {
    constructor() {
        super();
        this.name = "Highlord Omokk";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class NAX11_01 extends Card {
    constructor() {
        super();
        this.name = "Grobbulus";
        this.type = CARDTYPES.hero;
        this.set = "NAXX";
        this.health = 30;
    }

}

export class LOEA07_11 extends Card {
    constructor() {
        super();
        this.name = "Debris";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt.</b>";
        this.set = "LOE";
        this.health = 3;
        this.attack = 0;
        this.manacost = 1;
    }

    //[\"TAUNT\"]

}

export class BRM_011t extends Card {
    constructor() {
        super();
        this.name = "Lava Shock";
        this.type = CARDTYPES.enchantment;
        this.text = "Cards you play this turn don't cause <b>Overload</b>.";
        this.set = "BRM";
        this.characterClass = CHARACTERCLASS.shaman;
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class TB_DecreasingCardCostDebug extends Card {
    constructor() {
        super();
        this.name = "TBDecreasingCardCostDebug";
        this.type = CARDTYPES.spell;
        this.set = "TB";
        this.manacost = 0;
    }

}

export class BRMA01_2H extends Card {
    constructor() {
        super();
        this.name = "Pile On!";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nPut two minions from your deck and one from your opponent's into the battlefield.";
        this.set = "BRM";
        this.manacost = 0;
    }

}

export class TB_006e extends Card {
    constructor() {
        super();
        this.name = "Big Banana";
        this.type = CARDTYPES.enchantment;
        this.text = "Has +2/+2.";
        this.set = "TB";
    }

}

export class BRMA02_2_2c_TB extends Card {
    constructor() {
        super();
        this.name = "Jeering Crowd";
        this.type = CARDTYPES.spell;
        this.text = "Summon a 1/1 Spectator with <b>Taunt</b>.";
        this.set = "TB";
        this.manacost = 0;
    }

}

export class CS2_122 extends Card {
    constructor() {
        super();
        this.name = "Raid Leader";
        this.type = CARDTYPES.minion;
        this.text = "Your other minions have +1 Attack.";
        this.set = "CORE";
        this.health = 2;
        this.attack = 2;
        this.manacost = 3;
        this.artist = "Phill Gonzales";
        this.flavor = "\"That's a 50 DKP minus!\"";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Warrior Level 57.";
    }

    //[\"AURA\"]

}

export class EX1_531 extends Card {
    constructor() {
        super();
        this.name = "Scavenging Hyena";
        this.type = CARDTYPES.minion;
        this.text = "Whenever a friendly Beast dies, gain +2/+1.";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 2;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Jim Nelson";
        this.race = race.beast;
        this.flavor = "Hyenas prefer the bones of kodos or windserpents, but they'll eat pretty much anything.  Even Brussels sprouts.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.textInPlay = "Scavenging";
    }

}

export class EX1_613 extends Card {
    constructor() {
        super();
        this.name = "Edwin VanCleef";
        this.type = CARDTYPES.minion;
        this.text = "<b>Combo:</b> Gain +2/+2 for each card played earlier this turn.";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 2;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Efrem Palacios";
        this.flavor = "He led the Stonemasons in the reconstruction of Stormwind, and when the nobles refused to pay, he founded the Defias Brotherhood to, well, <i>deconstruct</i> Stormwind.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"COMBO\"]

}

export class NAX12_04e extends Card {
    constructor() {
        super();
        this.name = "Enrage";
        this.type = CARDTYPES.enchantment;
        this.text = "+6 Attack this turn.";
        this.set = "NAXX";
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class EX1_160be extends Card {
    constructor() {
        super();
        this.name = "Leader of the Pack";
        this.type = CARDTYPES.enchantment;
        this.text = "+1/+1";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.druid;
    }

}

export class NAX14_03 extends Card {
    constructor() {
        super();
        this.name = "Frozen Champion";
        this.type = CARDTYPES.minion;
        this.text = "Permanently Frozen.  Adjacent minions are Immune to Frost Breath.";
        this.set = "NAXX";
        this.health = 10;
        this.attack = 2;
        this.manacost = 5;
    }

    //[\"AURA\"]

}

export class EX1_619 extends Card {
    constructor() {
        super();
        this.name = "Equality";
        this.type = CARDTYPES.spell;
        this.text = "Change the Health of ALL minions to 1.";
        this.set = "EXPERT1";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Michal Ivan";
        this.flavor = "We are all special unique snowflakes... with 1 Health.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class LOEA07_14 extends Card {
    constructor() {
        super();
        this.name = "Lumbering Golem";
        this.type = CARDTYPES.minion;
        this.set = "LOE";
        this.health = 6;
        this.attack = 6;
        this.manacost = 6;
    }

}

export class AT_059 extends Card {
    constructor() {
        super();
        this.name = "Brave Archer";
        this.type = CARDTYPES.minion;
        this.text = "<b>Inspire:</b> If your hand is empty, deal 2 damage to the enemy hero.";
        this.set = "TGT";
        this.health = 1;
        this.attack = 2;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Eva Widermann";
        this.flavor = "This is a \"bearly\" concealed reference.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"INSPIRE\"]

}

export class NAX12_02H extends Card {
    constructor() {
        super();
        this.name = "Decimate";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nChange the Health of enemy minions to 1.";
        this.set = "NAXX";
        this.manacost = 0;
    }

    //{\"REQ_MINIMUM_ENEMY_MINIONS\":1}

}

export class PRO_001at extends Card {
    constructor() {
        super();
        this.name = "Murloc";
        this.type = CARDTYPES.minion;
        this.set = "PROMO";
        this.health = 1;
        this.attack = 1;
        this.manacost = 0;
        this.race = race.murloc;
    }

}

export class AT_037a extends Card {
    constructor() {
        super();
        this.name = "Living Roots";
        this.type = CARDTYPES.spell;
        this.text = "Deal $2 damage.";
        this.set = "TGT";
        this.manacost = 0;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class NEW1_040t extends Card {
    constructor() {
        super();
        this.name = "Gnoll";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 2;
        this.manacost = 2;
    }

    //[\"TAUNT\"]

}

export class AT_024e extends Card {
    constructor() {
        super();
        this.name = "Dark Fusion";
        this.type = CARDTYPES.enchantment;
        this.text = "+3/+3.";
        this.set = "TGT";
    }

}

export class CRED_32 extends Card {
    constructor() {
        super();
        this.name = "Jerry Mascho";
        this.type = CARDTYPES.minion;
        this.text = "At the start of your turn, deal 1 damage. If this card is golden, deal 1 damage at the end of your turn instead. THIS IS A HAN SOLO JOKE.";
        this.set = "CREDITS";
        this.health = 2;
        this.attack = 3;
        this.manacost = 2;
        this.rarity = rarity.legendary;
    }

}

export class AT_083 extends Card {
    constructor() {
        super();
        this.name = "Dragonhawk Rider";
        this.type = CARDTYPES.minion;
        this.text = "<b>Inspire:</b> Gain <b>Windfury</b>\nthis turn.";
        this.set = "TGT";
        this.health = 3;
        this.attack = 3;
        this.manacost = 3;
        this.artist = "Anton Zemskov";
        this.flavor = "Check it out.  You can do barrel rolls on this thing.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"INSPIRE\"]

}

export class EX1_131t extends Card {
    constructor() {
        super();
        this.name = "Defias Bandit";
        this.type = CARDTYPES.minion;
        this.set = "EXPERT1";
        this.health = 1;
        this.attack = 2;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.rogue;
    }

}

export class EX1_178a extends Card {
    constructor() {
        super();
        this.name = "Rooted";
        this.type = CARDTYPES.spell;
        this.text = "+5 Health and <b>Taunt</b>.";
        this.set = "EXPERT1";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
    }

}

export class CS2_131 extends Card {
    constructor() {
        super();
        this.name = "Stormwind Knight";
        this.type = CARDTYPES.minion;
        this.text = "<b>Charge</b>";
        this.set = "CORE";
        this.health = 5;
        this.attack = 2;
        this.manacost = 4;
        this.artist = "Ladronn";
        this.flavor = "They're still embarassed about \"The Deathwing Incident\".";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "ALLIANCE";
        this.howToEarnGolden = "Unlocked at Paladin Level 55.";
    }

    //[\"CHARGE\"]

}

export class EX1_055o extends Card {
    constructor() {
        super();
        this.name = "Empowered";
        this.type = CARDTYPES.enchantment;
        this.text = "Mana Addict has increased Attack.";
        this.set = "EXPERT1";
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class NAX15_02 extends Card {
    constructor() {
        super();
        this.name = "Frost Blast";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDeal 2 damage to the enemy hero and <b>Freeze</b> it.";
        this.set = "NAXX";
        this.manacost = 0;
    }

    //[\"FREEZE\"]

}

export class LOEA16_21H extends Card {
    constructor() {
        super();
        this.name = "Chieftain Scarvash";
        this.type = CARDTYPES.minion;
        this.text = "Enemy cards cost (2) more.";
        this.set = "LOE";
        this.health = 10;
        this.attack = 10;
        this.manacost = 10;
    }

    //[\"AURA\"]

}

export class FP1_020 extends Card {
    constructor() {
        super();
        this.name = "Avenge";
        this.type = CARDTYPES.spell;
        this.text = "<b>Secret:</b> When one of your minions dies, give a random friendly minion +3/+2.";
        this.set = "NAXX";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Zoltan & Gabor";
        this.flavor = "Several paladins have joined together to deliver justice under the name \"Justice Force\".  Their lawyer talked them out of calling themselves the Justice League.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after completing the Paladin Class Challenge in Naxxramas.";
        this.howToEarn = "Unlocked in Frostwyrm Lair, in the Naxxramas adventure.";
    }

    //[\"SECRET\"]

}

export class BRM_018e extends Card {
    constructor() {
        super();
        this.name = "Unchained!";
        this.type = CARDTYPES.enchantment;
        this.text = "Your next Dragon costs (2) less.";
        this.set = "BRM";
        this.characterClass = CHARACTERCLASS.paladin;
    }

}

export class CS2_104e extends Card {
    constructor() {
        super();
        this.name = "Rampage";
        this.type = CARDTYPES.enchantment;
        this.text = "+3/+3.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.warrior;
    }

}

export class HERO_08a extends Card {
    constructor() {
        super();
        this.name = "Medivh";
        this.type = CARDTYPES.hero;
        this.set = "HERO_SKINS";
        this.health = 30;
        this.characterClass = CHARACTERCLASS.mage;
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class AT_037 extends Card {
    constructor() {
        super();
        this.name = "Living Roots";
        this.type = CARDTYPES.spell;
        this.text = "<b>Choose One</b> - Deal $2 damage; or Summon two 1/1 Saplings.";
        this.set = "TGT";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Dan Brereton";
        this.flavor = "2 out of 2 saplings recommend that you summon the saplings.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class EX1_301 extends Card {
    constructor() {
        super();
        this.name = "Felguard";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>. <b>Battlecry:</b> Destroy one of your Mana Crystals.";
        this.set = "EXPERT1";
        this.health = 5;
        this.attack = 3;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "John Polidora";
        this.race = race.demon;
        this.flavor = "Yes, he'll fight for you.  BUT HE'S NOT GOING TO LIKE IT.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\",\"TAUNT\"]

}

export class CS2_120 extends Card {
    constructor() {
        super();
        this.name = "River Crocolisk";
        this.type = CARDTYPES.minion;
        this.set = "CORE";
        this.health = 3;
        this.attack = 2;
        this.manacost = 2;
        this.artist = "Daren Bader";
        this.race = race.beast;
        this.flavor = "Edward \"Lefty\" Smith tried to make luggage out of a river crocolisk once.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Druid Level 55.";
    }

}

export class CRED_36 extends Card {
    constructor() {
        super();
        this.name = "Mike Donais";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Replace all minions in the battlefield, in both hands, and in both decks with random minions.";
        this.set = "CREDITS";
        this.health = 8;
        this.attack = 4;
        this.manacost = 6;
        this.rarity = rarity.legendary;
    }

}

export class LOE_089t3 extends Card {
    constructor() {
        super();
        this.name = "Grumbly Runt";
        this.type = CARDTYPES.minion;
        this.set = "LOE";
        this.health = 2;
        this.attack = 2;
        this.manacost = 2;
        this.artist = "Matt Dixon";
    }

}

export class CS2_222 extends Card {
    constructor() {
        super();
        this.name = "Stormwind Champion";
        this.type = CARDTYPES.minion;
        this.text = "Your other minions have +1/+1.";
        this.set = "CORE";
        this.health = 6;
        this.attack = 6;
        this.manacost = 7;
        this.artist = "Doug Alexander";
        this.flavor = "When Deathwing assaulted the capital, this soldier was the only member of his squad to survive. Now he's all bitter and stuff.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "ALLIANCE";
        this.howToEarnGolden = "Unlocked at Paladin Level 59.";
        this.textInPlay = "For the Alliance!";
    }

    //[\"AURA\"]

}

export class LOE_038 extends Card {
    constructor() {
        super();
        this.name = "Naga Sea Witch";
        this.type = CARDTYPES.minion;
        this.text = "Your cards cost (5).";
        this.set = "LOE";
        this.health = 5;
        this.attack = 5;
        this.manacost = 5;
        this.artist = "Ben Zhang";
        this.flavor = "If she had studied harder, she would have been a C+ witch.";
        this.rarity = rarity.epic;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in The Ruined City, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in The Ruined City, in the League of Explorers adventure.";
    }

    //[\"AURA\"]

}

export class BRMA15_4 extends Card {
    constructor() {
        super();
        this.name = "Aberration";
        this.type = CARDTYPES.minion;
        this.text = "<b>Charge</b>";
        this.set = "BRM";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
    }

    //[\"CHARGE\"]

}

export class CS2_025 extends Card {
    constructor() {
        super();
        this.name = "Arcane Explosion";
        this.type = CARDTYPES.spell;
        this.text = "Deal $1 damage to all enemy minions.";
        this.set = "CORE";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Howard Lyon";
        this.flavor = "This spell is much better than Arcane Implosion.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 28.";
        this.howToEarn = "Unlocked at Level 1.";
    }

}

export class GVG_007 extends Card {
    constructor() {
        super();
        this.name = "Flame Leviathan";
        this.type = CARDTYPES.minion;
        this.text = "When you draw this, deal 2 damage to all characters.";
        this.set = "GVG";
        this.health = 7;
        this.attack = 7;
        this.manacost = 7;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Aleksi Briclot";
        this.race = race.mechanical;
        this.flavor = "Mimiron likes to take the Flame Leviathan out on some sweet joyrides.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

}

export class TB_PickYourFate_8 extends Card {
    constructor() {
        super();
        this.name = "Spell Bonus";
        this.type = CARDTYPES.spell;
        this.text = "Whenever you play a spell, gain 3 armor.";
        this.set = "TB";
        this.manacost = 0;
    }

}

export class CRED_34 extends Card {
    constructor() {
        super();
        this.name = "Max Ma";
        this.type = CARDTYPES.minion;
        this.text = "Can only be played on a mobile device.";
        this.set = "CREDITS";
        this.health = 3;
        this.attack = 6;
        this.manacost = 3;
        this.rarity = rarity.legendary;
    }

}

export class LOEA04_23 extends Card {
    constructor() {
        super();
        this.name = "Giant Insect";
        this.type = CARDTYPES.minion;
        this.set = "LOE";
        this.health = 3;
        this.attack = 10;
        this.manacost = 7;
    }

}

export class EX1_tk29 extends Card {
    constructor() {
        super();
        this.name = "Devilsaur";
        this.type = CARDTYPES.minion;
        this.set = "EXPERT1";
        this.health = 5;
        this.attack = 5;
        this.manacost = 5;
        this.race = race.beast;
        this.rarity = rarity.common;
    }

}

export class BRMA14_2H extends Card {
    constructor() {
        super();
        this.name = "Activate Arcanotron";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nActivate Arcanotron!";
        this.set = "BRM";
        this.manacost = 0;
    }

}

export class BRMA03_3 extends Card {
    constructor() {
        super();
        this.name = "Moira Bronzebeard";
        this.type = CARDTYPES.minion;
        this.text = "Thaurissan's Hero Power can't be used.\nNever attacks minions unless they have <b>Taunt</b>.";
        this.set = "BRM";
        this.health = 3;
        this.attack = 1;
        this.manacost = 2;
    }

    //[\"AURA\",\"InvisibleDeathrattle\"]

}

export class XXX_004 extends Card {
    constructor() {
        super();
        this.name = "Restore 5";
        this.type = CARDTYPES.spell;
        this.text = "Restore 5 Health to a character.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class DS1_055 extends Card {
    constructor() {
        super();
        this.name = "Darkscale Healer";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Restore 2 Health to all friendly characters.";
        this.set = "CORE";
        this.health = 5;
        this.attack = 4;
        this.manacost = 5;
        this.artist = "Jesper Ejsing";
        this.flavor = "Healing is just something she does in her free time.  It's more of a hobby really.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Priest Level 55.";
    }

    //[\"BATTLECRY\"]

}

export class EX1_573b extends Card {
    constructor() {
        super();
        this.name = "Shan'do's Lesson";
        this.type = CARDTYPES.spell;
        this.text = "Summon two 2/2 Treants with <b>Taunt</b>.";
        this.set = "EXPERT1";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
    }

}

export class LOE_116 extends Card {
    constructor() {
        super();
        this.name = "Reliquary Seeker";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> If you have 6 other minions, gain +4/+4.";
        this.set = "LOE";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Wayne Reynolds";
        this.flavor = "The Reliquary considers itself the equal of the League of Explorers.  The League of Explorers doesn't.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in Uldaman, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in Uldaman, in the League of Explorers adventure.";
    }

    //[\"BATTLECRY\"]

}

export class LOEA09_9 extends Card {
    constructor() {
        super();
        this.name = "Naga Repellent";
        this.type = CARDTYPES.spell;
        this.text = "Destroy all Hungry Naga.";
        this.set = "LOE";
        this.manacost = 1;
    }

}

export class BRM_027h extends Card {
    constructor() {
        super();
        this.name = "Ragnaros the Firelord";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 8;
    }

}

export class BRMC_99 extends Card {
    constructor() {
        super();
        this.name = "Garr";
        this.type = CARDTYPES.minion;
        this.text = "Whenever this minion takes damage, summon a 2/3 Elemental with <b>Taunt</b>.";
        this.set = "TB";
        this.health = 8;
        this.attack = 4;
        this.manacost = 5;
        this.rarity = rarity.legendary;
    }

}

export class LOEA07_02 extends Card {
    constructor() {
        super();
        this.name = "Mine Shaft";
        this.type = CARDTYPES.hero;
        this.set = "LOE";
        this.health = 80;
    }

}

export class EX1_554 extends Card {
    constructor() {
        super();
        this.name = "Snake Trap";
        this.type = CARDTYPES.spell;
        this.text = "<b>Secret:</b> When one of your minions is attacked, summon three 1/1 Snakes.";
        this.set = "EXPERT1";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Bernie Kang";
        this.flavor = "Why did it have to be snakes?";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //[\"SECRET\"]

}

export class DS1h_292 extends Card {
    constructor() {
        super();
        this.name = "Steady Shot";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDeal $2 damage to the enemy hero.";
        this.set = "CORE";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.hunter;
        this.rarity = rarity.free;
    }

    //{\"REQ_STEADY_SHOT\":0,\"REQ_MINION_OR_ENEMY_HERO\":0}

}

export class DS1_185 extends Card {
    constructor() {
        super();
        this.name = "Arcane Shot";
        this.type = CARDTYPES.spell;
        this.text = "Deal $2 damage.";
        this.set = "CORE";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Luca Zontini";
        this.flavor = "Magi conjured arcane arrows to sell to hunters, until hunters learned just enough magic to do it themselves.  The resulting loss of jobs sent Stormwind into a minor recession.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 32.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class NAX15_03t extends Card {
    constructor() {
        super();
        this.name = "Guardian of Icecrown";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "NAXX";
        this.health = 5;
        this.attack = 5;
        this.manacost = 4;
    }

    //[\"TAUNT\"]

}

export class CS2_046 extends Card {
    constructor() {
        super();
        this.name = "Bloodlust";
        this.type = CARDTYPES.spell;
        this.text = "Give your minions +3 Attack this turn.";
        this.set = "CORE";
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Luca Zontini";
        this.flavor = "blaarghghLLGHRHARAAHAHHH!!";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 40.";
        this.howToEarn = "Unlocked at Level 2.";
    }

}

export class NAX14_01 extends Card {
    constructor() {
        super();
        this.name = "Sapphiron";
        this.type = CARDTYPES.hero;
        this.set = "NAXX";
        this.health = 30;
    }

}

export class LOE_073 extends Card {
    constructor() {
        super();
        this.name = "Fossilized Devilsaur";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> If you control a Beast, gain <b>Taunt</b>.";
        this.set = "LOE";
        this.health = 8;
        this.attack = 8;
        this.manacost = 8;
        this.artist = "Trent Kaniuga";
        this.flavor = "This was the only job he could get after the dinosaur theme park debacle.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in the Hall of Explorers, in the League of Explorers adventure.";
    }

    //[\"BATTLECRY\"]

}

export class LOEA12_2 extends Card {
    constructor() {
        super();
        this.name = "Pearl of the Tides";
        this.type = CARDTYPES.hero_power;
        this.text = "At the end of your turn, replace all minions with new ones that cost (1) more.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class EX1_105 extends Card {
    constructor() {
        super();
        this.name = "Mountain Giant";
        this.type = CARDTYPES.minion;
        this.text = "Costs (1) less for each other card in your hand.";
        this.set = "EXPERT1";
        this.health = 8;
        this.attack = 8;
        this.manacost = 12;
        this.artist = "Samwise";
        this.flavor = "His mother said that he was just big boned.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class EX1_170 extends Card {
    constructor() {
        super();
        this.name = "Emperor Cobra";
        this.type = CARDTYPES.minion;
        this.text = "Destroy any minion damaged by this minion.";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 2;
        this.manacost = 3;
        this.artist = "Lars Grant-West";
        this.race = race.beast;
        this.flavor = "The Sholazar Basin is home to a lot of really horrible things. If you're going to visit, wear bug spray.  And plate armor.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.textInPlay = "Fanged";
    }

    //[\"POISONOUS\"]

}

export class GVG_101e extends Card {
    constructor() {
        super();
        this.name = "Pure";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Stats.";
        this.set = "GVG";
        this.characterClass = CHARACTERCLASS.paladin;
    }

}

export class BRM_019 extends Card {
    constructor() {
        super();
        this.name = "Grim Patron";
        this.type = CARDTYPES.minion;
        this.text = "Whenever this minion survives damage, summon another Grim Patron.";
        this.set = "BRM";
        this.health = 3;
        this.attack = 3;
        this.manacost = 5;
        this.artist = "Bobby Chiu";
        this.flavor = "If you love getting your face punched, come to the Grim Guzzler!";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating The Grim Guzzler in Blackrock Depths.";
        this.howToEarn = "Unlocked in Blackrock Depths, in the Blackrock Mountain adventure.";
    }

}

export class EX1_046 extends Card {
    constructor() {
        super();
        this.name = "Dark Iron Dwarf";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Give a minion +2 Attack this turn.";
        this.set = "EXPERT1";
        this.health = 4;
        this.attack = 4;
        this.manacost = 4;
        this.artist = "Scott Hampton";
        this.flavor = "Guardians of Dark Iron Ore.  Perhaps the most annoying ore, given where you have to forge it.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "ALLIANCE";
        this.targetingArrowText = "Give +2 Attack.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class EX1_544 extends Card {
    constructor() {
        super();
        this.name = "Flare";
        this.type = CARDTYPES.spell;
        this.text = "All minions lose <b>Stealth</b>. Destroy all enemy <b>Secrets</b>. Draw a card.";
        this.set = "EXPERT1";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Tyler Walpole";
        this.flavor = "Not only does it reveal your enemies, but it's also great for parties!";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class BRMC_89 extends Card {
    constructor() {
        super();
        this.name = "Whirling Ash";
        this.type = CARDTYPES.minion;
        this.text = "<b>Windfury</b>";
        this.set = "TB";
        this.health = 5;
        this.attack = 4;
        this.manacost = 2;
    }

    //[\"WINDFURY\"]

}

export class LOEA16_9 extends Card {
    constructor() {
        super();
        this.name = "Lothar's Left Greave";
        this.type = CARDTYPES.spell;
        this.text = "Deal 3 damage to all enemies.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class GVG_021 extends Card {
    constructor() {
        super();
        this.name = "Mal'Ganis";
        this.type = CARDTYPES.minion;
        this.text = "Your other Demons have +2/+2.\nYour hero is <b>Immune</b>.";
        this.set = "GVG";
        this.health = 7;
        this.attack = 9;
        this.manacost = 9;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Wayne Reynolds";
        this.race = race.demon;
        this.flavor = "Mal'Ganis doesn't like being betrayed, so if you discard him, watch out.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"AURA\"]

}

export class CS2_005 extends Card {
    constructor() {
        super();
        this.name = "Claw";
        this.type = CARDTYPES.spell;
        this.text = "Give your hero +2 Attack this turn and 2 Armor.";
        this.set = "CORE";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Dany Orizio";
        this.flavor = "The claw decides who will stay and who will go.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 32.";
        this.howToEarn = "Unlocked at Level 1.";
    }

}

export class GVG_031 extends Card {
    constructor() {
        super();
        this.name = "Recycle";
        this.type = CARDTYPES.spell;
        this.text = "Shuffle an enemy minion into your opponent's deck.";
        this.set = "GVG";
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Efrem Palacios";
        this.flavor = "Druidic recycling involves putting plastics in one bin and enemy minions in another bin.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0,\"REQ_ENEMY_TARGET\":0}

}

export class NAX14_02 extends Card {
    constructor() {
        super();
        this.name = "Frost Breath";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDestroy all enemy minions that aren't <b>Frozen</b>.";
        this.set = "NAXX";
        this.manacost = 0;
    }

}

export class AT_116 extends Card {
    constructor() {
        super();
        this.name = "Wyrmrest Agent";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> If you're holding a Dragon, gain +1 Attack and <b>Taunt</b>.";
        this.set = "TGT";
        this.health = 4;
        this.attack = 1;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Jeff Easley";
        this.flavor = "Keeping tabs on the Grand Tournament is priority #1 for the five mighty Dragonflights!";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class LOEA07_20 extends Card {
    constructor() {
        super();
        this.name = "Boom!";
        this.type = CARDTYPES.spell;
        this.text = "Deal 3 damage to all enemy minions.";
        this.set = "LOE";
        this.manacost = 1;
    }

}

export class EX1_604 extends Card {
    constructor() {
        super();
        this.name = "Frothing Berserker";
        this.type = CARDTYPES.minion;
        this.text = "Whenever a minion takes damage, gain +1 Attack.";
        this.set = "EXPERT1";
        this.health = 4;
        this.attack = 2;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Simon Bisley";
        this.flavor = "He used to work as an accountant before he tried his hand at Berserkering.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.textInPlay = "Berserk";
    }

}

export class BRMA05_1H extends Card {
    constructor() {
        super();
        this.name = "Baron Geddon";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 50;
    }

}

export class GVG_100e extends Card {
    constructor() {
        super();
        this.name = "Brow Furrow";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased stats.";
        this.set = "GVG";
        this.characterClass = CHARACTERCLASS.warlock;
    }

}

export class CS2_052 extends Card {
    constructor() {
        super();
        this.name = "Wrath of Air Totem";
        this.type = CARDTYPES.minion;
        this.text = "<b>Spell Damage +1</b>";
        this.set = "CORE";
        this.health = 2;
        this.attack = 0;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.shaman;
        this.race = race.totem;
        this.rarity = rarity.free;
    }

    //[\"SPELLPOWER\"]

}

export class EX1_607 extends Card {
    constructor() {
        super();
        this.name = "Inner Rage";
        this.type = CARDTYPES.spell;
        this.text = "Deal $1 damage to a minion and give it +2 Attack.";
        this.set = "EXPERT1";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Slawomir Maniak";
        this.flavor = "They're only smiling on the outside.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class AT_021e extends Card {
    constructor() {
        super();
        this.name = "Felrage";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased stats.";
        this.set = "TGT";
        this.characterClass = CHARACTERCLASS.warlock;
    }

}

export class EX1_097 extends Card {
    constructor() {
        super();
        this.name = "Abomination";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>. <b>Deathrattle:</b> Deal 2 damage to ALL characters.";
        this.set = "EXPERT1";
        this.health = 4;
        this.attack = 4;
        this.manacost = 5;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "Abominations enjoy Fresh Meat and long walks on the beach.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"DEATHRATTLE\",\"TAUNT\"]

}

export class LOE_115b extends Card {
    constructor() {
        super();
        this.name = "Raven Idol";
        this.type = CARDTYPES.spell;
        this.text = "<b>Discover</b> a spell.";
        this.set = "LOE";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "A.J. Nazzaro";
        this.rarity = rarity.common;
    }

}

export class LOEA16_20 extends Card {
    constructor() {
        super();
        this.name = "Blessing of the Sun";
        this.type = CARDTYPES.spell;
        this.text = "Give a minion <b>Immune</b> this turn.";
        this.set = "LOE";
        this.manacost = 1;
    }

    //{\"REQ_TARGET_TO_PLAY\":0,\"REQ_FRIENDLY_TARGET\":0}

}

export class CRED_30 extends Card {
    constructor() {
        super();
        this.name = "JC Park";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Add a new platform for Hearthstone.";
        this.set = "CREDITS";
        this.health = 4;
        this.attack = 2;
        this.manacost = 7;
        this.rarity = rarity.legendary;
    }

}

export class FP1_019t extends Card {
    constructor() {
        super();
        this.name = "Treant";
        this.type = CARDTYPES.minion;
        this.set = "NAXX";
        this.health = 2;
        this.attack = 2;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.druid;
    }

}

export class EX1_411 extends Card {
    constructor() {
        super();
        this.name = "Gorehowl";
        this.type = CARDTYPES.weapon;
        this.text = "Attacking a minion costs 1 Attack instead of 1 Durability.";
        this.set = "EXPERT1";
        this.attack = 7;
        this.manacost = 7;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Zoltan & Gabor";
        this.flavor = "Grommash Hellscream's famous axe.  Somehow this ended up in Prince Malchezaar's possession.  Quite the mystery!";
        this.rarity = rarity.epic;
        this.collectible = true;
        this.durability = "1";
    }

}

export class NAX4_04H extends Card {
    constructor() {
        super();
        this.name = "Raise Dead";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Passive Hero Power</b>\nWhenever an enemy dies, raise a 5/5 Skeleton.";
        this.set = "NAXX";
        this.manacost = 0;
    }

}

export class GVG_055 extends Card {
    constructor() {
        super();
        this.name = "Screwjank Clunker";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry</b>: Give a friendly Mech +2/+2.";
        this.set = "GVG";
        this.health = 5;
        this.attack = 2;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Jesper Ejsing";
        this.race = race.mechanical;
        this.flavor = "If it breaks, just kick it a couple of times while yelling \"Durn thing!\"";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.targetingArrowText = "Give +2/+2.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_TARGET_WITH_RACE\":17,\"REQ_FRIENDLY_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class LOEA02_03 extends Card {
    constructor() {
        super();
        this.name = "Wish for Power";
        this.type = CARDTYPES.spell;
        this.text = "<b>Discover</b> a spell.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class LOE_026 extends Card {
    constructor() {
        super();
        this.name = "Anyfin Can Happen";
        this.type = CARDTYPES.spell;
        this.text = "Summon 7 Murlocs that died this game.";
        this.set = "LOE";
        this.manacost = 10;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Ryan Metcalf";
        this.flavor = "Theme song by Ellie Goldfin and Blagghghlrlrl Harris.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in The Ruined City, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in The Ruined City, in the League of Explorers adventure.";
    }

}

export class TBA01_1 extends Card {
    constructor() {
        super();
        this.name = "Ragnaros the Firelord";
        this.type = CARDTYPES.hero;
        this.set = "TB";
        this.health = 60;
    }

}

export class AT_032 extends Card {
    constructor() {
        super();
        this.name = "Shady Dealer";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> If you have a Pirate, gain +1/+1.";
        this.set = "TGT";
        this.health = 3;
        this.attack = 4;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Tooth";
        this.flavor = "I have great deal for you... for 4 damage to your face!";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class NAX4_03H extends Card {
    constructor() {
        super();
        this.name = "Skeleton";
        this.type = CARDTYPES.minion;
        this.set = "NAXX";
        this.health = 5;
        this.attack = 5;
        this.manacost = 5;
    }

}

export class TB_Pilot1 extends Card {
    constructor() {
        super();
        this.name = "Mystery Pilot";
        this.type = CARDTYPES.enchantment;
        this.text = "Who could it be?!";
        this.set = "TB";
    }

}

export class EX1_584 extends Card {
    constructor() {
        super();
        this.name = "Ancient Mage";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Give adjacent minions <b>Spell Damage +1</b>.";
        this.set = "EXPERT1";
        this.health = 5;
        this.attack = 2;
        this.manacost = 4;
        this.artist = "Howard Lyon";
        this.flavor = "Sometimes he forgets and just wanders into someone else's game.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class GVG_120 extends Card {
    constructor() {
        super();
        this.name = "Hemet Nesingwary";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Destroy a Beast.";
        this.set = "GVG";
        this.health = 3;
        this.attack = 6;
        this.manacost = 5;
        this.artist = "Ralph Horsley";
        this.flavor = "It's hard to make a living as a hunter in a world where beasts instantly reappear minutes after you kill them.";
        this.rarity = rarity.legendary;
        this.collectible = true;
        this.targetingArrowText = "Destroy a Beast.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_TARGET_WITH_RACE\":20,\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class NAXM_002 extends Card {
    constructor() {
        super();
        this.name = "Skeletal Smith";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Destroy your opponent's weapon.";
        this.set = "NAXX";
        this.health = 3;
        this.attack = 4;
        this.manacost = 3;
    }

    //[\"DEATHRATTLE\"]

}

export class FP1_023 extends Card {
    constructor() {
        super();
        this.name = "Dark Cultist";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Give a random friendly minion +3 Health.";
        this.set = "NAXX";
        this.health = 4;
        this.attack = 3;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Phroilan Gardner";
        this.flavor = "The Cult of the Damned has found it's best not to mention their name when recruiting new cultists.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after completing the Priest Class Challenge in Naxxramas.";
        this.howToEarn = "Unlocked in The Construct Quarter, in the Naxxramas adventure.";
    }

    //[\"DEATHRATTLE\"]

}

export class BRMC_100e extends Card {
    constructor() {
        super();
        this.name = "Living Bomb";
        this.type = CARDTYPES.enchantment;
        this.text = "On Ragnaros' turn, deal 5 damage to this side of the board.";
        this.set = "TB";
    }

}

export class EX1_366e extends Card {
    constructor() {
        super();
        this.name = "Justice Served";
        this.type = CARDTYPES.enchantment;
        this.text = "Has +1/+1.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.paladin;
    }

}

export class XXX_057 extends Card {
    constructor() {
        super();
        this.name = "Destroy Target Secrets";
        this.type = CARDTYPES.spell;
        this.text = "Choose a hero. Destroy all <b>Secrets</b> controlled by that hero.";
        this.set = "CHEAT";
        this.manacost = 0;
    }

    //{\"REQ_TARGET_TO_PLAY\":0,\"REQ_HERO_TARGET\":0}

}

export class LOEA16_20H extends Card {
    constructor() {
        super();
        this.name = "Blessing of the Sun";
        this.type = CARDTYPES.enchantment;
        this.text = "<b>Immune</b>.";
        this.set = "LOE";
    }

}

export class LOE_039 extends Card {
    constructor() {
        super();
        this.name = "Gorillabot A-3";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> If you control another Mech, <b>Discover</b> a Mech.";
        this.set = "LOE";
        this.health = 4;
        this.attack = 3;
        this.manacost = 4;
        this.artist = "Skan Srisuwan";
        this.race = race.mechanical;
        this.flavor = "A-1 and A-2 went nuts, when they should have gone bolts.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in The Ruined City, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in The Ruined City, in the League of Explorers adventure.";
    }

    //[\"BATTLECRY\"]

}

export class GVG_051 extends Card {
    constructor() {
        super();
        this.name = "Warbot";
        this.type = CARDTYPES.minion;
        this.text = "<b>Enrage:</b> +1 Attack.";
        this.set = "GVG";
        this.health = 3;
        this.attack = 1;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Tyler Walpole";
        this.race = race.mechanical;
        this.flavor = "Mass production of warbots was halted when it was discovered that they were accidentally being produced at \"sample size.\"";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"ENRAGED\"]

}

export class CS2_008 extends Card {
    constructor() {
        super();
        this.name = "Moonfire";
        this.type = CARDTYPES.spell;
        this.text = "Deal $1 damage.";
        this.set = "CORE";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Richard Wright";
        this.flavor = "\"Cast Moonfire, and never stop.\" - How to Be a Druid, Chapter 5, Section 3";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 40.";
        this.howToEarn = "Unlocked at Level 6.";
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class NEW1_020 extends Card {
    constructor() {
        super();
        this.name = "Wild Pyromancer";
        this.type = CARDTYPES.minion;
        this.text = "After you cast a spell, deal 1 damage to ALL minions.";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 3;
        this.manacost = 2;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "BOOM BABY BOOM!  BAD IS GOOD!  DOWN WITH GOVERNMENT!";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class BRMA09_5 extends Card {
    constructor() {
        super();
        this.name = "Dismount";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon Gyth. Get a new Hero Power.";
        this.set = "BRM";
        this.manacost = 4;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}
    //[\"BRMA09_2\",\"BRMA09_3\",\"BRMA09_4\"]

}

export class CS2_056 extends Card {
    constructor() {
        super();
        this.name = "Life Tap";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDraw a card and take $2 damage.";
        this.set = "CORE";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.warlock;
        this.rarity = rarity.free;
    }

}

export class CS2_089 extends Card {
    constructor() {
        super();
        this.name = "Holy Light";
        this.type = CARDTYPES.spell;
        this.text = "Restore #6 Health.";
        this.set = "CORE";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Zoltan & Gabor";
        this.flavor = "If you are often bathed in Holy Light, you should consider wearing sunscreen.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 15.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class XXX_050 extends Card {
    constructor() {
        super();
        this.name = "Destroy a Mana Crystal";
        this.type = CARDTYPES.spell;
        this.text = "Pick a player and destroy one of his Mana Crystals.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

    //{\"REQ_TARGET_TO_PLAY\":0,\"REQ_HERO_TARGET\":0}

}

export class NAX11_02H extends Card {
    constructor() {
        super();
        this.name = "Poison Cloud";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDeal 2 damage to all enemies. If any die, summon a slime.";
        this.set = "NAXX";
        this.manacost = 0;
    }

}

export class NEW1_025 extends Card {
    constructor() {
        super();
        this.name = "Bloodsail Corsair";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Remove 1 Durability from your opponent's weapon.";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 1;
        this.manacost = 1;
        this.artist = "Randy Gallegos";
        this.race = race.pirate;
        this.flavor = "Every pirate uses the same four digits to access Automated Gold Dispensers.  It's called the \"Pirate's Code\".";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class BRMA02_1 extends Card {
    constructor() {
        super();
        this.name = "High Justice Grimstone";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class GVG_086 extends Card {
    constructor() {
        super();
        this.name = "Siege Engine";
        this.type = CARDTYPES.minion;
        this.text = "Whenever you gain Armor, give this minion +1 Attack.";
        this.set = "GVG";
        this.health = 5;
        this.attack = 5;
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Zero Yue";
        this.race = race.mechanical;
        this.flavor = "Wintergrasp Keep's only weakness!";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class GVG_077 extends Card {
    constructor() {
        super();
        this.name = "Anima Golem";
        this.type = CARDTYPES.minion;
        this.text = "At the end of each turn, destroy this minion if it's your only one.";
        this.set = "GVG";
        this.health = 9;
        this.attack = 9;
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Josh Harris";
        this.race = race.mechanical;
        this.flavor = "The Dark Animus is evil and mysterious and huge and unable to write sentences that utilize proper grammar.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class BRM_033 extends Card {
    constructor() {
        super();
        this.name = "Blackwing Technician";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> If you're holding a Dragon, gain +1/+1. ";
        this.set = "BRM";
        this.health = 4;
        this.attack = 2;
        this.manacost = 3;
        this.artist = "Matt Dixon";
        this.flavor = "This is who you go to when your Blackwing needs a tune up. Don't go to a cut rate Blackwing tune up shop!";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating Baron Geddon in Molten Core.";
        this.howToEarn = "Unlocked in Molten Core, in the Blackrock Mountain adventure.";
    }

    //[\"BATTLECRY\"]

}

export class CS2_087 extends Card {
    constructor() {
        super();
        this.name = "Blessing of Might";
        this.type = CARDTYPES.spell;
        this.text = "Give a minion +3 Attack.";
        this.set = "CORE";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Zoltan Boros";
        this.flavor = "\"As in, you MIGHT want to get out of my way.\" - Toad Mackle, recently buffed.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 45.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class GVG_094 extends Card {
    constructor() {
        super();
        this.name = "Jeeves";
        this.type = CARDTYPES.minion;
        this.text = "At the end of each player's turn, that player draws until they have 3 cards.";
        this.set = "GVG";
        this.health = 4;
        this.attack = 1;
        this.manacost = 4;
        this.artist = "Matt Dixon";
        this.race = race.mechanical;
        this.flavor = "This robot is a lean, mean, butlerin' machine.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class AT_050 extends Card {
    constructor() {
        super();
        this.name = "Charged Hammer";
        this.type = CARDTYPES.weapon;
        this.text = "<b>Deathrattle:</b> Your Hero Power becomes 'Deal 2 damage.'";
        this.set = "TGT";
        this.attack = 2;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Peet Cooper";
        this.flavor = "You can only pick it up if you are worthy.";
        this.rarity = rarity.epic;
        this.collectible = true;
        this.durability = "4";
    }

    //[\"DEATHRATTLE\"]

}

export class EX1_161 extends Card {
    constructor() {
        super();
        this.name = "Naturalize";
        this.type = CARDTYPES.spell;
        this.text = "Destroy a minion. Your opponent draws 2 cards.";
        this.set = "EXPERT1";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Leo Che";
        this.flavor = "Another one bites the dust.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class LOEA09_7 extends Card {
    constructor() {
        super();
        this.name = "Cauldron";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>\n<b>Deathrattle:</b> Save Sir Finley and stop the Naga onslaught!";
        this.set = "LOE";
        this.health = 5;
        this.attack = 0;
        this.manacost = 0;
    }

    //[\"DEATHRATTLE\",\"TAUNT\"]

}

export class XXX_051 extends Card {
    constructor() {
        super();
        this.name = "Make Immune";
        this.type = CARDTYPES.spell;
        this.text = "Permanently make a character <b>Immune</b>.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class CS1_129 extends Card {
    constructor() {
        super();
        this.name = "Inner Fire";
        this.type = CARDTYPES.spell;
        this.text = "Change a minion's Attack to be equal to its Health.";
        this.set = "EXPERT1";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Steve Prescott";
        this.flavor = "Good idea: Buffing your minions.  Bad idea: Starting a conversation in the Barrens.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class NAX12_03 extends Card {
    constructor() {
        super();
        this.name = "Jaws";
        this.type = CARDTYPES.weapon;
        this.text = "Whenever a minion with <b>Deathrattle</b> dies, gain +2 Attack.";
        this.set = "NAXX";
        this.attack = 1;
        this.manacost = 1;
        this.durability = "5";
    }

}

export class LOEA04_01h extends Card {
    constructor() {
        super();
        this.name = "Heroic Escape";
        this.type = CARDTYPES.hero;
        this.set = "LOE";
        this.health = 100;
    }

}

export class GVG_010 extends Card {
    constructor() {
        super();
        this.name = "Velen's Chosen";
        this.type = CARDTYPES.spell;
        this.text = "Give a minion +2/+4 and <b>Spell Damage +1</b>.";
        this.set = "GVG";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "Velen wrote a \"Lovely Card\" for Tyrande with a picture of the Deeprun Tram that said \"I Choo-Choo-Choose you!\"";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class EX1_044e extends Card {
    constructor() {
        super();
        this.name = "Level Up!";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Attack and Health.";
        this.set = "EXPERT1";
    }

}

export class CRED_37 extends Card {
    constructor() {
        super();
        this.name = "Ricardo Robaina";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Summon three 1/1 Chinchillas.";
        this.set = "CREDITS";
        this.health = 4;
        this.attack = 3;
        this.manacost = 4;
        this.rarity = rarity.legendary;
    }

}

export class XXX_013 extends Card {
    constructor() {
        super();
        this.name = "Discard";
        this.type = CARDTYPES.spell;
        this.text = "Choose a hero.  That hero's controller discards his hand.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

    //{\"REQ_TARGET_TO_PLAY\":0,\"REQ_HERO_TARGET\":0}

}

export class LOEA16_25H extends Card {
    constructor() {
        super();
        this.name = "Lady Naz'jar";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, replace all other minions with new ones of the same Cost.";
        this.set = "LOE";
        this.health = 10;
        this.attack = 10;
        this.manacost = 10;
    }

}

export class BRMA14_10H_TB extends Card {
    constructor() {
        super();
        this.name = "Activate!";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nActivate a random Tron.";
        this.set = "TB";
        this.manacost = 2;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}
    //[\"BRMA14_3\",\"BRMA14_5\",\"BRMA14_7\",\"BRMA14_9\"]

}

export class GVG_109 extends Card {
    constructor() {
        super();
        this.name = "Mini-Mage";
        this.type = CARDTYPES.minion;
        this.text = "<b>Stealth</b>\n<b>Spell Damage +1</b>";
        this.set = "GVG";
        this.health = 1;
        this.attack = 4;
        this.manacost = 4;
        this.artist = "Ben Olson";
        this.flavor = "He is sometimes found hiding in the treasure chest in the Gurubashi Arena.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //[\"STEALTH\",\"SPELLPOWER\"]

}

export class BRMA17_2H extends Card {
    constructor() {
        super();
        this.name = "Nefarian";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class NAX15_03n extends Card {
    constructor() {
        super();
        this.name = "Guardian of Icecrown";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "NAXX";
        this.health = 3;
        this.attack = 3;
        this.manacost = 4;
    }

    //[\"TAUNT\"]

}

export class TB_PickYourFate_3_Ench extends Card {
    constructor() {
        super();
        this.name = "Pick Your Fate 3 Ench";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
    }

}

export class NAX13_05H extends Card {
    constructor() {
        super();
        this.name = "Stalagg";
        this.type = CARDTYPES.minion;
        this.set = "NAXX";
        this.health = 4;
        this.attack = 7;
        this.manacost = 5;
        this.rarity = rarity.legendary;
    }

}

export class GVG_063a extends Card {
    constructor() {
        super();
        this.name = "Retribution";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Attack";
        this.set = "GVG";
    }

}

export class AT_093 extends Card {
    constructor() {
        super();
        this.name = "Frigid Snobold";
        this.type = CARDTYPES.minion;
        this.text = "<b>Spell Damage +1</b>";
        this.set = "TGT";
        this.health = 6;
        this.attack = 2;
        this.manacost = 4;
        this.artist = "Matt Dixon";
        this.flavor = "Ironically, the natural enemy of the snobold is THE CANDLE.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"SPELLPOWER\"]

}

export class TU4e_007 extends Card {
    constructor() {
        super();
        this.name = "Dual Warglaives";
        this.type = CARDTYPES.weapon;
        this.set = "MISSIONS";
        this.attack = 4;
        this.manacost = 6;
        this.rarity = rarity.common;
        this.durability = "2";
    }

}

export class EX1_166b extends Card {
    constructor() {
        super();
        this.name = "Dispel";
        this.type = CARDTYPES.spell;
        this.text = "<b>Silence</b> a minion.";
        this.set = "EXPERT1";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
    }

    //[\"SILENCE\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class NEW1_033o extends Card {
    constructor() {
        super();
        this.name = "Eye In The Sky";
        this.type = CARDTYPES.enchantment;
        this.text = "Leokk is granting this minion +1 Attack.";
        this.set = "CORE";
        this.characterClass = CHARACTERCLASS.hunter;
    }

}

export class BRMA13_2 extends Card {
    constructor() {
        super();
        this.name = "True Form";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nLet the games begin!";
        this.set = "BRM";
        this.manacost = 1;
    }

    //[\"BRMA13_6\",\"BRMA13_8\",\"BRMA13_7\",\"BRMA13_5\"]

}

export class TU4c_004 extends Card {
    constructor() {
        super();
        this.name = "Stomp";
        this.type = CARDTYPES.spell;
        this.text = "Deal 2 damage to all enemies.";
        this.set = "MISSIONS";
        this.manacost = 2;
        this.rarity = rarity.common;
    }

}

export class EX1_158 extends Card {
    constructor() {
        super();
        this.name = "Soul of the Forest";
        this.type = CARDTYPES.spell;
        this.text = "Give your minions \"<b>Deathrattle:</b> Summon a 2/2 Treant.\"";
        this.set = "EXPERT1";
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Markus Erdt";
        this.flavor = "\"Reforestation\" is suddenly a terrifying word.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class NAX2_01 extends Card {
    constructor() {
        super();
        this.name = "Grand Widow Faerlina";
        this.type = CARDTYPES.hero;
        this.set = "NAXX";
        this.health = 30;
    }

}

export class GVG_038 extends Card {
    constructor() {
        super();
        this.name = "Crackle";
        this.type = CARDTYPES.spell;
        this.text = "Deal $3-$6 damage. <b>Overload:</b> (1)";
        this.set = "GVG";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Warren Mahy";
        this.flavor = "Snap! This card! Pop!";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"OVERLOAD\"]
    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class EX1_091 extends Card {
    constructor() {
        super();
        this.name = "Cabal Shadow Priest";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Take control of an enemy minion that has 2 or less Attack.";
        this.set = "EXPERT1";
        this.health = 5;
        this.attack = 4;
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Chippy";
        this.flavor = "You never know who may be secretly working for the Cabal....";
        this.rarity = rarity.epic;
        this.collectible = true;
        this.targetingArrowText = "Steal a minion that has 2 or less Attack.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0,\"REQ_MINION_CAP_IF_TARGET_AVAILABLE\":2,\"REQ_TARGET_MAX_ATTACK\":2,\"REQ_ENEMY_TARGET\":0}

}

export class LOEA16_15 extends Card {
    constructor() {
        super();
        this.name = "Ysera's Tear";
        this.type = CARDTYPES.spell;
        this.text = "Gain 4 Mana Crystals this turn only.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class EX1_332 extends Card {
    constructor() {
        super();
        this.name = "Silence";
        this.type = CARDTYPES.spell;
        this.text = "<b>Silence</b> a minion.";
        this.set = "EXPERT1";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Zoltan & Gabor";
        this.flavor = "Reserved for enemy spellcasters, evil liches from beyond the grave, and karaoke nights at the Grim Guzzler.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"SILENCE\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class LOEA16_5t extends Card {
    constructor() {
        super();
        this.name = "Mummy Zombie";
        this.type = CARDTYPES.minion;
        this.set = "LOE";
        this.health = 3;
        this.attack = 3;
        this.manacost = 3;
    }

}

export class NEW1_036 extends Card {
    constructor() {
        super();
        this.name = "Commanding Shout";
        this.type = CARDTYPES.spell;
        this.text = "Your minions can't be reduced below 1 Health this turn. Draw a card.";
        this.set = "EXPERT1";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Wayne Reynolds";
        this.flavor = "\"Shout! Shout! Let it all out!\" - Advice to warriors-in-training";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class EX1_354 extends Card {
    constructor() {
        super();
        this.name = "Lay on Hands";
        this.type = CARDTYPES.spell;
        this.text = "Restore #8 Health. Draw 3 cards.";
        this.set = "EXPERT1";
        this.manacost = 8;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Raymond Swanland";
        this.flavor = "A grammatically awkward life saver.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class TB_BlingBrawl_Hero1p extends Card {
    constructor() {
        super();
        this.name = "Sharpen";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nIncrease your weapon's attack by 1";
        this.set = "TB";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.rogue;
        this.rarity = rarity.free;
    }

}

export class BRMA04_1 extends Card {
    constructor() {
        super();
        this.name = "Garr";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class GVG_005 extends Card {
    constructor() {
        super();
        this.name = "Echo of Medivh";
        this.type = CARDTYPES.spell;
        this.text = "Put a copy of each friendly minion into your hand.";
        this.set = "GVG";
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Alex Garner";
        this.flavor = "Medivh's echo haunts Karazhan, eternally cheating at chess and <i>Hearthstone</i>.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class LOEA09_3b extends Card {
    constructor() {
        super();
        this.name = "Getting Hungry";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon a 1/1 Hungry Naga.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class TU4a_005 extends Card {
    constructor() {
        super();
        this.name = "Massive Gnoll";
        this.type = CARDTYPES.minion;
        this.set = "MISSIONS";
        this.health = 2;
        this.attack = 5;
        this.manacost = 4;
        this.rarity = rarity.common;
    }

}

export class FP1_004 extends Card {
    constructor() {
        super();
        this.name = "Mad Scientist";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Put a <b>Secret</b> from your deck into the battlefield.";
        this.set = "NAXX";
        this.health = 2;
        this.attack = 2;
        this.manacost = 2;
        this.artist = "James Ryman";
        this.flavor = "His mother wanted him to be a mage or a warlock, but noooooooo, he had to go and be a scientist like his father.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating Grobbulus in the Construct Quarter.";
        this.howToEarn = "Unlocked in The Construct Quarter, in the Naxxramas adventure.";
    }

    //[\"DEATHRATTLE\"]

}

export class AT_132_MAGE extends Card {
    constructor() {
        super();
        this.name = "Fireblast Rank 2";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDeal $2 damage.";
        this.set = "TGT";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.mage;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class EX1_596e extends Card {
    constructor() {
        super();
        this.name = "Demonfire";
        this.type = CARDTYPES.enchantment;
        this.text = "This Demon has +2/+2.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.warlock;
        this.rarity = rarity.common;
    }

}

export class AT_035 extends Card {
    constructor() {
        super();
        this.name = "Beneath the Grounds";
        this.type = CARDTYPES.spell;
        this.text = "Shuffle 3 Ambushes into your opponent's deck. When drawn, you summon a 4/4 Nerubian.";
        this.set = "TGT";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Daren Bader";
        this.flavor = "Can you hold these eggs for just a second?  I promise they're not full of giant enraged undead spider things.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class LOEA10_2H extends Card {
    constructor() {
        super();
        this.name = "Mrglmrgl MRGL!";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDraw 2 cards.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class EX1_020 extends Card {
    constructor() {
        super();
        this.name = "Scarlet Crusader";
        this.type = CARDTYPES.minion;
        this.text = "<b>Divine Shield</b>";
        this.set = "EXPERT1";
        this.health = 1;
        this.attack = 3;
        this.manacost = 3;
        this.artist = "Gonzalo Ordonez";
        this.flavor = "Never wash your whites with a Scarlet Crusader.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "ALLIANCE";
    }

    //[\"DIVINE_SHIELD\"]

}

export class CRED_26 extends Card {
    constructor() {
        super();
        this.name = "Eric Del Priore";
        this.type = CARDTYPES.minion;
        this.text = "Has <b>Taunt</b> if it's 3 AM.";
        this.set = "CREDITS";
        this.health = 6;
        this.attack = 1;
        this.manacost = 3;
        this.rarity = rarity.legendary;
    }

}

export class TB_013 extends Card {
    constructor() {
        super();
        this.name = "Player Choice Enchant";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
    }

}

export class LOEA14_2H extends Card {
    constructor() {
        super();
        this.name = "Platemail Armor";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Passive Hero Power</b>\nYour Hero and your minions can only take 1 damage at a time.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class GVG_048e extends Card {
    constructor() {
        super();
        this.name = "Metal Teeth";
        this.type = CARDTYPES.enchantment;
        this.text = "+2 Attack.";
        this.set = "GVG";
        this.characterClass = CHARACTERCLASS.hunter;
    }

}

export class AT_047 extends Card {
    constructor() {
        super();
        this.name = "Draenei Totemcarver";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Gain +1/+1 for each friendly Totem.";
        this.set = "TGT";
        this.health = 4;
        this.attack = 4;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "RK Post";
        this.flavor = "It's nice to find a real craftsman in this day and age of mass-produced totems.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class NAX8_03t extends Card {
    constructor() {
        super();
        this.name = "Spectral Trainee";
        this.type = CARDTYPES.minion;
        this.text = "At the start of your turn, deal 1 damage to your hero.";
        this.set = "NAXX";
        this.health = 2;
        this.attack = 0;
        this.manacost = 1;
    }

}

export class CS2_162 extends Card {
    constructor() {
        super();
        this.name = "Lord of the Arena";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "CORE";
        this.health = 5;
        this.attack = 6;
        this.manacost = 6;
        this.artist = "E.M. Gist";
        this.flavor = "He used to be a 2100+ rated arena player, but that was years ago and nobody can get him to shut up about it.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "ALLIANCE";
        this.howToEarnGolden = "Unlocked at Priest Level 59.";
    }

    //[\"TAUNT\"]

}

export class BRM_004e extends Card {
    constructor() {
        super();
        this.name = "Twilight Endurance";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Health.";
        this.set = "BRM";
    }

}

export class EX1_586 extends Card {
    constructor() {
        super();
        this.name = "Sea Giant";
        this.type = CARDTYPES.minion;
        this.text = "Costs (1) less for each other minion on the battlefield.";
        this.set = "EXPERT1";
        this.health = 8;
        this.attack = 8;
        this.manacost = 10;
        this.artist = "Svetlin Velinov";
        this.flavor = "See?  Giant.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class GVG_062 extends Card {
    constructor() {
        super();
        this.name = "Cobalt Guardian";
        this.type = CARDTYPES.minion;
        this.text = "Whenever you summon a Mech, gain <b>Divine Shield</b>.";
        this.set = "GVG";
        this.health = 3;
        this.attack = 6;
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Jim Nelson";
        this.race = race.mechanical;
        this.flavor = "Guardians used to be built out of Adamantium, but production got moved to Gadgetzan and Cobalt was cheap.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class BRMA12_4H extends Card {
    constructor() {
        super();
        this.name = "Brood Affliction: Green";
        this.type = CARDTYPES.spell;
        this.text = "While this is in your hand, restore 6 health to your opponent at the start of your turn.";
        this.set = "BRM";
        this.manacost = 3;
    }

}

export class XXX_052 extends Card {
    constructor() {
        super();
        this.name = "Grant Mega-Windfury";
        this.type = CARDTYPES.spell;
        this.text = "Give a minion <b>Mega-Windfury</b>.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class EX1_258e extends Card {
    constructor() {
        super();
        this.name = "Overloading";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased stats.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.shaman;
    }

}

export class NAX7_04H extends Card {
    constructor() {
        super();
        this.name = "Massive Runeblade";
        this.type = CARDTYPES.weapon;
        this.text = "Deals double damage to heroes.";
        this.set = "NAXX";
        this.attack = 10;
        this.manacost = 3;
        this.durability = "2";
    }

}

export class LOEA07_01 extends Card {
    constructor() {
        super();
        this.name = "Mine Cart";
        this.type = CARDTYPES.hero;
        this.set = "LOE";
        this.health = 30;
    }

}

export class NAX6_03t extends Card {
    constructor() {
        super();
        this.name = "Spore";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Give all enemy minions +8 Attack.";
        this.set = "NAXX";
        this.health = 1;
        this.attack = 0;
        this.manacost = 0;
    }

    //[\"DEATHRATTLE\"]

}

export class EX1_398t extends Card {
    constructor() {
        super();
        this.name = "Battle Axe";
        this.type = CARDTYPES.weapon;
        this.set = "EXPERT1";
        this.attack = 2;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.warrior;
        this.durability = "2";
    }

}

export class BRMA09_5t extends Card {
    constructor() {
        super();
        this.name = "Gyth";
        this.type = CARDTYPES.minion;
        this.set = "BRM";
        this.health = 4;
        this.attack = 8;
        this.manacost = 3;
        this.race = race.dragon;
        this.rarity = rarity.legendary;
    }

}

export class BRMA12_2H extends Card {
    constructor() {
        super();
        this.name = "Brood Affliction";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nAt the end of your turn, add a Brood Affliction card to your opponent's hand.";
        this.set = "BRM";
        this.manacost = 0;
    }

    //[\"BRMA12_3H\",\"BRMA12_4H\",\"BRMA12_5H\",\"BRMA12_6H\",\"BRMA12_7H\"]

}

export class GVG_068 extends Card {
    constructor() {
        super();
        this.name = "Burly Rockjaw Trogg";
        this.type = CARDTYPES.minion;
        this.text = "Whenever your opponent casts a spell, gain +2 Attack.";
        this.set = "GVG";
        this.health = 5;
        this.attack = 3;
        this.manacost = 4;
        this.artist = "Aleksi Briclot";
        this.flavor = "He's burly because he does CrossFit.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class NEW1_021 extends Card {
    constructor() {
        super();
        this.name = "Doomsayer";
        this.type = CARDTYPES.minion;
        this.text = "At the start of your turn, destroy ALL minions.";
        this.set = "EXPERT1";
        this.health = 7;
        this.attack = 0;
        this.manacost = 2;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "He's almost been right so many times. He was <i>sure</i> it was coming during the Cataclysm.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class LOE_079 extends Card {
    constructor() {
        super();
        this.name = "Elise Starseeker";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Shuffle the 'Map to the Golden Monkey'   into your deck.";
        this.set = "LOE";
        this.health = 5;
        this.attack = 3;
        this.manacost = 4;
        this.artist = "Luke Mancini";
        this.flavor = "A large part of her job entails not mixing up the Map to the Golden Monkey with the Map to Monkey Island.";
        this.rarity = rarity.legendary;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in the Hall of Explorers, in the League of Explorers adventure.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_FRIENDLY_TARGET\":0}

}

export class CS2_141 extends Card {
    constructor() {
        super();
        this.name = "Ironforge Rifleman";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Deal 1 damage.";
        this.set = "CORE";
        this.health = 2;
        this.attack = 2;
        this.manacost = 3;
        this.artist = "Tooth";
        this.flavor = "\"Ready! Aim! Drink!\"";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "ALLIANCE";
        this.howToEarnGolden = "Unlocked at Mage Level 55.";
        this.targetingArrowText = "Deal 1 damage.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_NONSELF_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class CS2_023 extends Card {
    constructor() {
        super();
        this.name = "Arcane Intellect";
        this.type = CARDTYPES.spell;
        this.text = "Draw 2 cards.";
        this.set = "CORE";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Dave Berggren";
        this.flavor = "Playing this card makes you SMARTER.  And let's face it: we could all stand to be a little smarter.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 15.";
        this.howToEarn = "Unlocked at Level 1.";
    }

}

export class NAX12_01H extends Card {
    constructor() {
        super();
        this.name = "Gluth";
        this.type = CARDTYPES.hero;
        this.set = "NAXX";
        this.health = 45;
    }

}

export class GVG_069a extends Card {
    constructor() {
        super();
        this.name = "Repairs!";
        this.type = CARDTYPES.enchantment;
        this.text = "+4 Health.";
        this.set = "GVG";
        this.characterClass = CHARACTERCLASS.priest;
    }

}

export class EX1_096 extends Card {
    constructor() {
        super();
        this.name = "Loot Hoarder";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Draw a card.";
        this.set = "EXPERT1";
        this.health = 1;
        this.attack = 2;
        this.manacost = 2;
        this.artist = "Jim Nelson";
        this.flavor = "Always roll need.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"DEATHRATTLE\"]

}

export class EX1_165t2 extends Card {
    constructor() {
        super();
        this.name = "Druid of the Claw";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "EXPERT1";
        this.health = 6;
        this.attack = 4;
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.druid;
        this.race = race.beast;
        this.rarity = rarity.common;
    }

    //[\"TAUNT\"]

}

export class EX1_560 extends Card {
    constructor() {
        super();
        this.name = "Nozdormu";
        this.type = CARDTYPES.minion;
        this.text = "Players only have 15 seconds to take their turns.";
        this.set = "EXPERT1";
        this.health = 8;
        this.attack = 8;
        this.manacost = 9;
        this.artist = "James Ryman";
        this.race = race.dragon;
        this.flavor = "Time to write some flavor text.";
        this.rarity = rarity.legendary;
        this.collectible = true;
        this.textInPlay = "Aspect of Time";
    }

}

export class CS2_034 extends Card {
    constructor() {
        super();
        this.name = "Fireblast";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDeal $1 damage.";
        this.set = "CORE";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.mage;
        this.rarity = rarity.free;
        this.targetingArrowText = "Deal 1 damage.";
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class EX1_556 extends Card {
    constructor() {
        super();
        this.name = "Harvest Golem";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Summon a 2/1 Damaged Golem.";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 2;
        this.manacost = 3;
        this.artist = "Brian Despain";
        this.race = race.mechanical;
        this.flavor = "\"Overheat threshold exceeded. System failure. Wheat clog in port two. Shutting down.\"";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"DEATHRATTLE\"]

}

export class LOEA09_3 extends Card {
    constructor() {
        super();
        this.name = "Getting Hungry";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon a Hungry Naga.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class BRMC_85 extends Card {
    constructor() {
        super();
        this.name = "Lucifron";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Cast Corruption on all other minions.";
        this.set = "TB";
        this.health = 7;
        this.attack = 4;
        this.manacost = 4;
        this.rarity = rarity.legendary;
    }

    //[\"BATTLECRY\"]

}

export class BRM_018 extends Card {
    constructor() {
        super();
        this.name = "Dragon Consort";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> The next Dragon you play costs (2) less.";
        this.set = "BRM";
        this.health = 5;
        this.attack = 5;
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Raymond Swanland";
        this.race = race.dragon;
        this.flavor = "Everybody wants someone to snuggle with. Even giant armored scaly draconic beasts of destruction.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating General Drakkisath in Blackrock Spire.";
        this.howToEarn = "Unlocked in Blackrock Spire, in the Blackrock Mountain adventure.";
    }

    //[\"BATTLECRY\"]

}

export class GVG_012 extends Card {
    constructor() {
        super();
        this.name = "Light of the Naaru";
        this.type = CARDTYPES.spell;
        this.text = "Restore #3 Health. If the target is still damaged, summon a Lightwarden.";
        this.set = "GVG";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Jesper Ejsing";
        this.flavor = "\"Light it up!\" - Command given to both Lightwardens and Goblins holding Flamecannons.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class Mekka1 extends Card {
    constructor() {
        super();
        this.name = "Homing Chicken";
        this.type = CARDTYPES.minion;
        this.text = "At the start of your turn, destroy this minion and draw 3 cards.";
        this.set = "PROMO";
        this.health = 1;
        this.attack = 0;
        this.manacost = 1;
        this.race = race.mechanical;
        this.rarity = rarity.common;
        this.faction = "ALLIANCE";
        this.textInPlay = "Pecking";
    }

}

export class TB_PickYourFate_3 extends Card {
    constructor() {
        super();
        this.name = "Dire Fate: Windfury";
        this.type = CARDTYPES.spell;
        this.text = "All minions have <b>Windfury</b>.";
        this.set = "TB";
        this.manacost = 0;
    }

}

export class EX1_596 extends Card {
    constructor() {
        super();
        this.name = "Demonfire";
        this.type = CARDTYPES.spell;
        this.text = "Deal $2 damage to a minion. If itâ€™s a friendly Demon, give it +2/+2 instead.";
        this.set = "EXPERT1";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Ben Wootten";
        this.flavor = "Demonfire is like regular fire except for IT NEVER STOPS BURNING HELLLPPP";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class GVG_111 extends Card {
    constructor() {
        super();
        this.name = "Mimiron's Head";
        this.type = CARDTYPES.minion;
        this.text = "At the start of your turn, if you have at least 3 Mechs, destroy them all and form V-07-TR-0N.";
        this.set = "GVG";
        this.health = 5;
        this.attack = 4;
        this.manacost = 5;
        this.artist = "Trent Kaniuga";
        this.race = race.mechanical;
        this.flavor = "Do not push the big red button!";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

}

export class CS2_062 extends Card {
    constructor() {
        super();
        this.name = "Hellfire";
        this.type = CARDTYPES.spell;
        this.text = "Deal $3 damage to ALL characters.";
        this.set = "CORE";
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Chippy";
        this.flavor = "It's spells like these that make it hard for Warlocks to get decent help.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 49.";
        this.howToEarn = "Unlocked at Level 1.";
    }

}

export class EX1_238 extends Card {
    constructor() {
        super();
        this.name = "Lightning Bolt";
        this.type = CARDTYPES.spell;
        this.text = "Deal $3 damage. <b>Overload:</b> (1)";
        this.set = "EXPERT1";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Daarken";
        this.flavor = "Lightning Bolt! Lightning Bolt! Lightning Bolt!";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"OVERLOAD\"]
    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class CS2_171 extends Card {
    constructor() {
        super();
        this.name = "Stonetusk Boar";
        this.type = CARDTYPES.minion;
        this.text = "<b>Charge</b>";
        this.set = "CORE";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
        this.artist = "Howard Lyon";
        this.race = race.beast;
        this.flavor = "This card is boaring.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Hunter Level 53.";
    }

    //[\"CHARGE\"]

}

export class BRM_022t extends Card {
    constructor() {
        super();
        this.name = "Black Whelp";
        this.type = CARDTYPES.minion;
        this.set = "BRM";
        this.health = 1;
        this.attack = 2;
        this.manacost = 1;
        this.artist = "Jaemin Kim";
        this.race = race.dragon;
        this.rarity = rarity.common;
    }

}

export class BRMA08_2H extends Card {
    constructor() {
        super();
        this.name = "Intense Gaze";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Passive Hero Power</b>\nAll cards cost (1). You are capped at 2 Mana Crystals, and opponent at 1.";
        this.set = "BRM";
        this.manacost = 0;
    }

}

export class LOEA16_22 extends Card {
    constructor() {
        super();
        this.name = "Archaedas";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, turn a random enemy minion into a 0/2 Statue.";
        this.set = "LOE";
        this.health = 5;
        this.attack = 5;
        this.manacost = 5;
    }

}

export class TU4c_006 extends Card {
    constructor() {
        super();
        this.name = "Bananas";
        this.type = CARDTYPES.spell;
        this.text = "Give a friendly minion +1/+1. <i>(+1 Attack/+1 Health)</i>";
        this.set = "MISSIONS";
        this.manacost = 1;
        this.rarity = rarity.common;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0,\"REQ_FRIENDLY_TARGET\":0}

}

export class EX1_390 extends Card {
    constructor() {
        super();
        this.name = "Tauren Warrior";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>. <b>Enrage:</b> +3 Attack";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 2;
        this.manacost = 3;
        this.artist = "Paul Warzecha";
        this.flavor = "Tauren Warrior: Champion of Mulgore, Slayer of Quilboar, Rider of Thunderbluff Elevators.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"ENRAGED\",\"TAUNT\"]

}

export class BRMA13_3H extends Card {
    constructor() {
        super();
        this.name = "Nefarian";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

    //[\"BRMA13_8\",\"BRMA13_7\",\"BRMA13_6\",\"BRMA13_5\"]

}

export class LOEA04_23h extends Card {
    constructor() {
        super();
        this.name = "Giant Insect";
        this.type = CARDTYPES.minion;
        this.set = "LOE";
        this.health = 6;
        this.attack = 10;
        this.manacost = 7;
    }

}

export class BRMA09_1H extends Card {
    constructor() {
        super();
        this.name = "Rend Blackhand";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class TU4c_008 extends Card {
    constructor() {
        super();
        this.name = "Will of Mukla";
        this.type = CARDTYPES.spell;
        this.text = "Restore 8 Health.";
        this.set = "MISSIONS";
        this.manacost = 3;
        this.rarity = rarity.common;
    }

}

export class TB_007e extends Card {
    constructor() {
        super();
        this.name = "Deviate Switch";
        this.type = CARDTYPES.enchantment;
        this.text = "Attack and Health have been swapped by Deviate Banana.";
        this.set = "TB";
    }

}

export class FP1_013 extends Card {
    constructor() {
        super();
        this.name = "Kel'Thuzad";
        this.type = CARDTYPES.minion;
        this.text = "At the end of each turn, summon all friendly minions that died this turn.";
        this.set = "NAXX";
        this.health = 8;
        this.attack = 6;
        this.manacost = 8;
        this.artist = "Chris Robinson";
        this.flavor = "Kel'Thuzad could not resist the call of the Lich King. Even when it's just a robo-call extolling the Lich King's virtues.";
        this.rarity = rarity.legendary;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating every boss in Naxxramas!";
        this.howToEarn = "Unlocked in Frostwyrm Lair, in the Naxxramas adventure.";
    }

}

export class TB_PickYourFate_2 extends Card {
    constructor() {
        super();
        this.name = "Fate: Bananas";
        this.type = CARDTYPES.spell;
        this.text = "When a minion dies, its owner gets a (1) mana Banana.";
        this.set = "TB";
        this.manacost = 0;
    }

}

export class XXX_022 extends Card {
    constructor() {
        super();
        this.name = "Free Cards";
        this.type = CARDTYPES.spell;
        this.text = "Your cards cost (0) for the rest of the game.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

}

export class CS2_103 extends Card {
    constructor() {
        super();
        this.name = "Charge";
        this.type = CARDTYPES.spell;
        this.text = "Give a friendly minion +2 Attack and <b>Charge</b>.";
        this.set = "CORE";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "\"Guys! Guys! Slow down!\" - some kind of non-warrior minion";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 23.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0,\"REQ_FRIENDLY_TARGET\":0}

}

export class AT_042t extends Card {
    constructor() {
        super();
        this.name = "Sabertooth Lion";
        this.type = CARDTYPES.minion;
        this.text = "<b>Charge</b>";
        this.set = "TGT";
        this.health = 1;
        this.attack = 2;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.druid;
        this.race = race.beast;
        this.rarity = rarity.common;
    }

    //[\"CHARGE\"]

}

export class GVG_030 extends Card {
    constructor() {
        super();
        this.name = "Anodized Robo Cub";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>. <b>Choose One -</b>\n+1 Attack; or +1 Health.";
        this.set = "GVG";
        this.health = 2;
        this.attack = 2;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Eva Widermann";
        this.race = race.mechanical;
        this.flavor = "It's adorable! AND OH MY GOODNESS WHY IS IT EATING MY FACE";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"TAUNT\"]

}

export class BRMA10_3H extends Card {
    constructor() {
        super();
        this.name = "The Rookery";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nGive all Corrupted Eggs +1 Health, then summon one.";
        this.set = "BRM";
        this.manacost = 0;
    }

}

export class CS2_077 extends Card {
    constructor() {
        super();
        this.name = "Sprint";
        this.type = CARDTYPES.spell;
        this.text = "Draw 4 cards.";
        this.set = "CORE";
        this.manacost = 7;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "James Zhang";
        this.flavor = "Rogues are not good joggers.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 49.";
        this.howToEarn = "Unlocked at Level 10.";
    }

}

export class Mekka4t extends Card {
    constructor() {
        super();
        this.name = "Chicken";
        this.type = CARDTYPES.minion;
        this.text = "<i>Hey Chicken!</i>";
        this.set = "PROMO";
        this.health = 1;
        this.attack = 1;
        this.manacost = 0;
        this.race = race.beast;
    }

}

export class TU4a_006 extends Card {
    constructor() {
        super();
        this.name = "Jaina Proudmoore";
        this.type = CARDTYPES.hero;
        this.set = "MISSIONS";
        this.health = 27;
        this.characterClass = CHARACTERCLASS.mage;
        this.rarity = rarity.common;
    }

}

export class GVG_015 extends Card {
    constructor() {
        super();
        this.name = "Darkbomb";
        this.type = CARDTYPES.spell;
        this.text = "Deal $3 damage.";
        this.set = "GVG";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Jeff Haynie";
        this.flavor = "If you're looking to make an \"Emo\" deck, this card is perfect!";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class LOEA16_19H extends Card {
    constructor() {
        super();
        this.name = "Sun Raider Phaerix";
        this.type = CARDTYPES.minion;
        this.text = "Your other minions are <b>Immune</b>.";
        this.set = "LOE";
        this.health = 10;
        this.attack = 10;
        this.manacost = 10;
    }

}

export class TB_CoOpBossSpell_6 extends Card {
    constructor() {
        super();
        this.name = "Kill the Lorewalker";
        this.type = CARDTYPES.spell;
        this.text = "Destroy Lorewalker Cho.";
        this.set = "TB";
        this.manacost = 0;
    }

}

export class TB_PickYourFate_7 extends Card {
    constructor() {
        super();
        this.name = "Fate: Coin";
        this.type = CARDTYPES.spell;
        this.text = "When a minion dies, its owner gets a Coin.";
        this.set = "TB";
        this.manacost = 0;
    }

}

export class LOEA04_28a extends Card {
    constructor() {
        super();
        this.name = "Drink Deeply";
        this.type = CARDTYPES.spell;
        this.text = "Draw a card.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class CS2_231 extends Card {
    constructor() {
        super();
        this.name = "Wisp";
        this.type = CARDTYPES.minion;
        this.set = "EXPERT1";
        this.health = 1;
        this.attack = 1;
        this.manacost = 0;
        this.artist = "Malcolm Davis";
        this.flavor = "If you hit an Eredar Lord with enough Wisps, it will explode.   But why?";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class NAX10_03H extends Card {
    constructor() {
        super();
        this.name = "Hateful Strike";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDestroy a minion.";
        this.set = "NAXX";
        this.manacost = 4;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class TU4d_001 extends Card {
    constructor() {
        super();
        this.name = "Hemet Nesingwary";
        this.type = CARDTYPES.hero;
        this.set = "MISSIONS";
        this.health = 20;
        this.characterClass = CHARACTERCLASS.hunter;
        this.rarity = rarity.common;
    }

}

export class EX1_320 extends Card {
    constructor() {
        super();
        this.name = "Bane of Doom";
        this.type = CARDTYPES.spell;
        this.text = "Deal $2 damage to a character. If that kills it, summon a random Demon.";
        this.set = "EXPERT1";
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Raymond Swanland";
        this.flavor = "My advice to you is to avoid Doom, if possible.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}
    //[\"EX1_306\",\"CS2_065\",\"EX1_319\",\"EX1_301\",\"CS2_059\",\"CS2_064\"]

}

export class EX1_335 extends Card {
    constructor() {
        super();
        this.name = "Lightspawn";
        this.type = CARDTYPES.minion;
        this.text = "This minion's Attack is always equal to its Health.";
        this.set = "EXPERT1";
        this.health = 5;
        this.attack = 0;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Daarken";
        this.flavor = "Spawn of the Light? Or Pawn of the Lights?";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class LOEA12_1 extends Card {
    constructor() {
        super();
        this.name = "Lady Naz'jar";
        this.type = CARDTYPES.hero;
        this.set = "LOE";
        this.health = 30;
    }

}

export class LOEA06_03e extends Card {
    constructor() {
        super();
        this.name = "Animated";
        this.type = CARDTYPES.enchantment;
        this.text = "+1/+1 and <b>Taunt</b>.";
        this.set = "LOE";
    }

}

export class XXX_095 extends Card {
    constructor() {
        super();
        this.name = "AI Buddy - All Charge!";
        this.type = CARDTYPES.minion;
        this.text = "Spawn into play to give all minions <b>Charge</b>.";
        this.set = "CHEAT";
        this.health = 1;
        this.attack = 1;
        this.manacost = 0;
    }

}

export class LOEA09_10 extends Card {
    constructor() {
        super();
        this.name = "Hungry Naga";
        this.type = CARDTYPES.minion;
        this.set = "LOE";
        this.health = 1;
        this.attack = 2;
        this.manacost = 2;
    }

}

export class CS2_022e extends Card {
    constructor() {
        super();
        this.name = "Polymorph";
        this.type = CARDTYPES.enchantment;
        this.text = "This minion has been transformed into a 1/1 Sheep.";
        this.set = "CORE";
        this.characterClass = CHARACTERCLASS.mage;
        this.rarity = rarity.common;
    }

    //[\"MORPH\"]

}

export class EX1_623 extends Card {
    constructor() {
        super();
        this.name = "Temple Enforcer";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Give a friendly minion +3 Health.";
        this.set = "EXPERT1";
        this.health = 6;
        this.attack = 6;
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Daren Bader";
        this.flavor = "He also moonlights Thursday nights as a bouncer at the Pig and Whistle Tavern.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.targetingArrowText = "Give +3 Health.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_FRIENDLY_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class EX1_032 extends Card {
    constructor() {
        super();
        this.name = "Sunwalker";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>\n<b>Divine Shield</b>";
        this.set = "EXPERT1";
        this.health = 5;
        this.attack = 4;
        this.manacost = 6;
        this.artist = "Andrea Uderzo";
        this.flavor = "She doesnâ€™t ACTUALLY walk on the Sun.  It's just a name.  Donâ€™t worry!";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.faction = "ALLIANCE";
    }

    //[\"DIVINE_SHIELD\",\"TAUNT\"]

}

export class CRED_20 extends Card {
    constructor() {
        super();
        this.name = "Brian Birmingham";
        this.type = CARDTYPES.minion;
        this.text = "<b>Choose One</b> - Restore a Mech to full Health; or Give a Designer <b>Windfury.</b>";
        this.set = "CREDITS";
        this.health = 2;
        this.attack = 4;
        this.manacost = 3;
        this.rarity = rarity.legendary;
    }

}

export class NAX6_02 extends Card {
    constructor() {
        super();
        this.name = "Necrotic Aura";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDeal 3 damage to the enemy hero.";
        this.set = "NAXX";
        this.manacost = 2;
    }

}

export class hexfrog extends Card {
    constructor() {
        super();
        this.name = "Frog";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "CORE";
        this.health = 1;
        this.attack = 0;
        this.manacost = 0;
        this.race = race.beast;
        this.rarity = rarity.common;
    }

    //[\"TAUNT\"]

}

export class EX1_134 extends Card {
    constructor() {
        super();
        this.name = "SI:7 Agent";
        this.type = CARDTYPES.minion;
        this.text = "<b>Combo:</b> Deal 2 damage.";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 3;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Chris Moeller";
        this.flavor = "The agents of SI:7 are responsible for Stormwind's covert activities.  Their duties include espionage, assassination, and throwing surprise birthday parties for the royal family.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.targetingArrowText = "Deal 2 damage.";
    }

    //[\"COMBO\"]
    //{\"REQ_TARGET_FOR_COMBO\":0}

}

export class TB_PickYourFate_10_Ench extends Card {
    constructor() {
        super();
        this.name = "Fate";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
    }

}

export class TB_CoOp_Mechazod_V2 extends Card {
    constructor() {
        super();
        this.name = "Gearmaster Mechazod";
        this.type = CARDTYPES.minion;
        this.text = "<b>Boss</b>\nMechazod wins if he defeats either of you!";
        this.set = "TB";
        this.health = 95;
        this.attack = 2;
        this.manacost = 10;
        this.rarity = rarity.legendary;
    }

    //[\"TAUNT\"]

}

export class CS2_125 extends Card {
    constructor() {
        super();
        this.name = "Ironfur Grizzly";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "CORE";
        this.health = 3;
        this.attack = 3;
        this.manacost = 3;
        this.artist = "Lars Grant-West";
        this.race = race.beast;
        this.flavor = "\"Bear Carcass 1/10\"";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Hunter Level 59.";
    }

    //[\"TAUNT\"]

}

export class LOE_089t2 extends Card {
    constructor() {
        super();
        this.name = "Wily Runt";
        this.type = CARDTYPES.minion;
        this.set = "LOE";
        this.health = 2;
        this.attack = 2;
        this.manacost = 2;
        this.artist = "Matt Dixon";
    }

}

export class NAX6_02H extends Card {
    constructor() {
        super();
        this.name = "Necrotic Aura";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDeal 3 damage to the enemy hero.";
        this.set = "NAXX";
        this.manacost = 0;
    }

}

export class LOEA06_02t extends Card {
    constructor() {
        super();
        this.name = "Earthen Statue";
        this.type = CARDTYPES.minion;
        this.set = "LOE";
        this.health = 2;
        this.attack = 0;
        this.manacost = 1;
    }

}

export class GVG_014a extends Card {
    constructor() {
        super();
        this.name = "Shadowed";
        this.type = CARDTYPES.enchantment;
        this.text = "Health was swapped.";
        this.set = "GVG";
        this.characterClass = CHARACTERCLASS.priest;
    }

}

export class LOEA04_28b extends Card {
    constructor() {
        super();
        this.name = "Wade Through";
        this.type = CARDTYPES.spell;
        this.text = "Gain a Mana Crystal";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class AT_060 extends Card {
    constructor() {
        super();
        this.name = "Bear Trap";
        this.type = CARDTYPES.spell;
        this.text = "<b>Secret:</b> After your hero is attacked, summon a 3/3 Bear with <b>Taunt</b>.";
        this.set = "TGT";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Richard Wright";
        this.flavor = "You'll never guess what's in that conveniently bear-sized, bear-smelling box. ";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"SECRET\"]

}

export class EX1_539 extends Card {
    constructor() {
        super();
        this.name = "Kill Command";
        this.type = CARDTYPES.spell;
        this.text = "Deal $3 damage. If you have a Beast, deal $5 damage instead.";
        this.set = "CORE";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Gabe from Penny Arcade";
        this.flavor = "\"Kill!\", he commanded.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 49.";
        this.howToEarn = "Unlocked at Level 10.";
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class EX1_366 extends Card {
    constructor() {
        super();
        this.name = "Sword of Justice";
        this.type = CARDTYPES.weapon;
        this.text = "After you summon a minion, give it +1/+1 and this loses 1 Durability.";
        this.set = "EXPERT1";
        this.attack = 1;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Efrem Palacios";
        this.flavor = "I dub you Sir Loin of Beef!";
        this.rarity = rarity.epic;
        this.collectible = true;
        this.durability = "5";
    }

}

export class GVG_074 extends Card {
    constructor() {
        super();
        this.name = "Kezan Mystic";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Take control of a random enemy <b>Secret</b>.";
        this.set = "GVG";
        this.health = 3;
        this.attack = 4;
        this.manacost = 4;
        this.artist = "Jakub Kasper";
        this.flavor = "They pretend to be wise and enlightened, but they mostly just hate to be left out of a secret.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class EX1_610 extends Card {
    constructor() {
        super();
        this.name = "Explosive Trap";
        this.type = CARDTYPES.spell;
        this.text = "<b>Secret:</b> When your hero is attacked, deal $2 damage to all enemies.";
        this.set = "EXPERT1";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Brandon Kitkouski";
        this.flavor = "It traps your food AND cooks it for you!";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"SECRET\"]

}

export class BRMA10_4 extends Card {
    constructor() {
        super();
        this.name = "Corrupted Egg";
        this.type = CARDTYPES.minion;
        this.text = "When this minion has 4 or more Health, it hatches.";
        this.set = "BRM";
        this.health = 1;
        this.attack = 0;
        this.manacost = 1;
    }

    //[\"InvisibleDeathrattle\"]

}

export class BRMA14_4 extends Card {
    constructor() {
        super();
        this.name = "Activate Toxitron";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nActivate Toxitron!";
        this.set = "BRM";
        this.manacost = 4;
    }

}

export class EX1_603 extends Card {
    constructor() {
        super();
        this.name = "Cruel Taskmaster";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Deal 1 damage to a minion and give it +2 Attack.";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 2;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Phroilan Gardner";
        this.flavor = "\"I'm going to need you to come in on Sunday.\" - Cruel Taskmaster";
        this.rarity = rarity.common;
        this.collectible = true;
        this.targetingArrowText = "Deal 1 damage and grant +2 Attack.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0,\"REQ_NONSELF_TARGET\":0}

}

export class BRMA12_4 extends Card {
    constructor() {
        super();
        this.name = "Brood Affliction: Green";
        this.type = CARDTYPES.spell;
        this.text = "While this is in your hand, restore 2 health to your opponent at the start of your turn.";
        this.set = "BRM";
        this.manacost = 1;
    }

}

export class NAX9_04 extends Card {
    constructor() {
        super();
        this.name = "Sir Zeliek";
        this.type = CARDTYPES.minion;
        this.text = "Your hero is <b>Immune</b>.";
        this.set = "NAXX";
        this.health = 7;
        this.attack = 1;
        this.manacost = 3;
    }

}

export class EX1_349 extends Card {
    constructor() {
        super();
        this.name = "Divine Favor";
        this.type = CARDTYPES.spell;
        this.text = "Draw cards until you have as many in hand as your opponent.";
        this.set = "EXPERT1";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Lucas Graciano";
        this.flavor = "This is not just a favor, but a divine one, like helping someone move a couch with a fold out bed!";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class TB_PickYourFate_11b extends Card {
    constructor() {
        super();
        this.name = "Murloc Bonus";
        this.type = CARDTYPES.spell;
        this.text = "You get a 1/1 Murloc at the end of your turn.";
        this.set = "TB";
        this.manacost = 0;
    }

}

export class LOEA04_02 extends Card {
    constructor() {
        super();
        this.name = "Escape!";
        this.type = CARDTYPES.hero_power;
        this.text = "Encounter new obstacles!";
        this.set = "LOE";
        this.manacost = 0;
        this.rarity = rarity.free;
    }

}

export class TB_GiftExchange_Treasure_Spell extends Card {
    constructor() {
        super();
        this.name = "Stolen Winter's Veil Gift";
        this.type = CARDTYPES.spell;
        this.text = "<b>Discover</b> a random Treasure. Its cost is reduced.";
        this.set = "TB";
        this.manacost = 1;
    }

}

export class LOEA09_12 extends Card {
    constructor() {
        super();
        this.name = "Hungry Naga";
        this.type = CARDTYPES.minion;
        this.set = "LOE";
        this.health = 1;
        this.attack = 2;
        this.manacost = 4;
    }

}

export class EX1_128e extends Card {
    constructor() {
        super();
        this.name = "Concealed";
        this.type = CARDTYPES.enchantment;
        this.text = "Stealthed until your next turn.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.rogue;
    }

}

export class TU4e_002t extends Card {
    constructor() {
        super();
        this.name = "Flame of Azzinoth";
        this.type = CARDTYPES.minion;
        this.set = "MISSIONS";
        this.health = 1;
        this.attack = 2;
        this.manacost = 1;
        this.rarity = rarity.common;
    }

}

export class FP1_005 extends Card {
    constructor() {
        super();
        this.name = "Shade of Naxxramas";
        this.type = CARDTYPES.minion;
        this.text = "<b>Stealth.</b> At the start of your turn, gain +1/+1.";
        this.set = "NAXX";
        this.health = 2;
        this.attack = 2;
        this.manacost = 3;
        this.artist = "Ittoku Seta";
        this.flavor = "The Shades of Naxxramas <i>hate</i> the living. They even have a slur they use to refer them: <i>Livers</i>.";
        this.rarity = rarity.epic;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating Kel'Thuzad in the Frostwyrm Lair.";
        this.howToEarn = "Unlocked in Frostwyrm Lair, in the Naxxramas adventure.";
    }

    //[\"STEALTH\"]

}

export class BRMA14_5H extends Card {
    constructor() {
        super();
        this.name = "Toxitron";
        this.type = CARDTYPES.minion;
        this.text = "At the start of your turn, deal 1 damage to all other minions.";
        this.set = "BRM";
        this.health = 4;
        this.attack = 4;
        this.manacost = 1;
        this.race = race.mechanical;
        this.rarity = rarity.legendary;
    }

}

export class EX1_624 extends Card {
    constructor() {
        super();
        this.name = "Holy Fire";
        this.type = CARDTYPES.spell;
        this.text = "Deal $5 damage. Restore #5 Health to your hero.";
        this.set = "EXPERT1";
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Miguel Coimbra";
        this.flavor = "Often followed by Holy Smokes!";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class EX1_059e extends Card {
    constructor() {
        super();
        this.name = "Experiments!";
        this.type = CARDTYPES.enchantment;
        this.text = "Attack and Health have been swapped by Crazed Alchemist.";
        this.set = "EXPERT1";
    }

}

export class EX1_008 extends Card {
    constructor() {
        super();
        this.name = "Argent Squire";
        this.type = CARDTYPES.minion;
        this.text = "<b>Divine Shield</b>";
        this.set = "EXPERT1";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
        this.artist = "Zoltan & Gabor";
        this.flavor = "\"I solemnly swear to uphold the Light, purge the world of darkness, and to eat only burritos.\" - The Argent Dawn Oath";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "ALLIANCE";
    }

    //[\"DIVINE_SHIELD\"]

}

export class AT_132_SHAMANa extends Card {
    constructor() {
        super();
        this.name = "Healing Totem";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, restore 1 Health to all friendly minions.";
        this.set = "TGT";
        this.health = 2;
        this.attack = 0;
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.shaman;
    }

}

export class CS2_009e extends Card {
    constructor() {
        super();
        this.name = "Mark of the Wild";
        this.type = CARDTYPES.enchantment;
        this.text = "This minion has +2/+2 and <b>Taunt</b>.";
        this.set = "CORE";
        this.characterClass = CHARACTERCLASS.druid;
    }

}

export class BRMA17_5_TB extends Card {
    constructor() {
        super();
        this.name = "Bone Minions";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon two 2/1 Bone Constructs.";
        this.set = "TB";
        this.manacost = 2;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}

}

export class GVG_027e extends Card {
    constructor() {
        super();
        this.name = "Ironed Out";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased stats.";
        this.set = "GVG";
        this.characterClass = CHARACTERCLASS.rogue;
    }

}

export class BRMA06_2H_TB extends Card {
    constructor() {
        super();
        this.name = "The Majordomo";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon a 3/3 Flamewaker Acolyte.";
        this.set = "TB";
        this.manacost = 2;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}

}

export class CRED_03 extends Card {
    constructor() {
        super();
        this.name = "Bob Fitch";
        this.type = CARDTYPES.minion;
        this.text = "<b>Super Taunt</b> <i>(EVERY character must attack this minion.)</i>";
        this.set = "CREDITS";
        this.health = 4;
        this.attack = 2;
        this.manacost = 3;
        this.rarity = rarity.legendary;
    }

}

export class AT_053 extends Card {
    constructor() {
        super();
        this.name = "Ancestral Knowledge";
        this.type = CARDTYPES.spell;
        this.text = "Draw 2 cards. <b>Overload: (2)</b>";
        this.set = "TGT";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Zoltan & Gabor";
        this.flavor = "MOMMMMMYYYYYYYYY!!!";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"OVERLOAD\"]

}

export class BRM_025 extends Card {
    constructor() {
        super();
        this.name = "Volcanic Drake";
        this.type = CARDTYPES.minion;
        this.text = "Costs (1) less for each minion that died this turn.";
        this.set = "BRM";
        this.health = 4;
        this.attack = 6;
        this.manacost = 6;
        this.artist = "Lucas Graciano";
        this.race = race.dragon;
        this.flavor = "Volcanic Drakes breathe lava instead of fire. The antacid vendor at Thorium Point does a brisk business with them.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating Omnotron Defense System in the Hidden Laboratory.";
        this.howToEarn = "Unlocked in Hidden Laboratory, in the Blackrock Mountain adventure.";
    }

}

export class LOE_020 extends Card {
    constructor() {
        super();
        this.name = "Desert Camel";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Put a 1-Cost minion from each deck into the battlefield.";
        this.set = "LOE";
        this.health = 4;
        this.attack = 2;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Matt Dixon";
        this.race = race.beast;
        this.flavor = "Dang.  This card is sweet.  Almost as sweet as Dessert Camel.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in the Hall of Explorers, in the League of Explorers adventure.";
    }

    //[\"BATTLECRY\"]

}

export class GVG_021e extends Card {
    constructor() {
        super();
        this.name = "Grasp of Mal'Ganis";
        this.type = CARDTYPES.enchantment;
        this.text = "Mal'Ganis is granting +2/+2.";
        this.set = "GVG";
        this.characterClass = CHARACTERCLASS.warlock;
    }

}

export class EX1_402 extends Card {
    constructor() {
        super();
        this.name = "Armorsmith";
        this.type = CARDTYPES.minion;
        this.text = "Whenever a friendly minion takes damage, gain 1 Armor.";
        this.set = "EXPERT1";
        this.health = 4;
        this.attack = 1;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Greg Hildebrandt";
        this.flavor = "She accepts guild funds for repairs!";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.textInPlay = "Smithing";
    }

}

export class LOEA09_2eH extends Card {
    constructor() {
        super();
        this.name = "Enraged";
        this.type = CARDTYPES.enchantment;
        this.text = "+5 Attack";
        this.set = "LOE";
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class CS2_017 extends Card {
    constructor() {
        super();
        this.name = "Shapeshift";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\n+1 Attack this turn.\n+1 Armor.";
        this.set = "CORE";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.druid;
        this.rarity = rarity.free;
    }

}

export class CRED_01 extends Card {
    constructor() {
        super();
        this.name = "Jason Chayes";
        this.type = CARDTYPES.minion;
        this.text = "<b>Enrage:</b> Just kidding! He never Enrages.";
        this.set = "CREDITS";
        this.health = 6;
        this.attack = 7;
        this.manacost = 6;
        this.rarity = rarity.legendary;
    }

}

export class CS2_026 extends Card {
    constructor() {
        super();
        this.name = "Frost Nova";
        this.type = CARDTYPES.spell;
        this.text = "<b>Freeze</b> all enemy minions.";
        this.set = "CORE";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Josh Tallman";
        this.flavor = "Hey man, that's cold.  Literally and metaphorically.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 23.";
        this.howToEarn = "Unlocked at Level 6.";
    }

    //[\"FREEZE\"]

}

export class EX1_561 extends Card {
    constructor() {
        super();
        this.name = "Alexstrasza";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Set a hero's remaining Health to 15.";
        this.set = "EXPERT1";
        this.health = 8;
        this.attack = 8;
        this.manacost = 9;
        this.artist = "Raymond Swanland";
        this.race = race.dragon;
        this.flavor = "Alexstrasza the Life-Binder brings life and hope to everyone.  Except Deathwing.  And Malygos.  And Nekros.";
        this.rarity = rarity.legendary;
        this.collectible = true;
        this.targetingArrowText = "Set Health to 15.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_TARGET_IF_AVAILABLE\":0,\"REQ_HERO_TARGET\":0}

}

export class BRMA16_1H extends Card {
    constructor() {
        super();
        this.name = "Atramedes";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class LOEA04_13bth extends Card {
    constructor() {
        super();
        this.name = "Orsis Guard";
        this.type = CARDTYPES.minion;
        this.text = "<b>Divine Shield</b>";
        this.set = "LOE";
        this.health = 8;
        this.attack = 8;
        this.manacost = 4;
    }

    //[\"DIVINE_SHIELD\"]

}

export class BRMA07_3 extends Card {
    constructor() {
        super();
        this.name = "TIME FOR SMASH";
        this.type = CARDTYPES.spell;
        this.text = "Deal $5 damage to a random enemy. Gain 5 Armor.";
        this.set = "BRM";
        this.manacost = 4;
    }

}

export class BRM_002 extends Card {
    constructor() {
        super();
        this.name = "Flamewaker";
        this.type = CARDTYPES.minion;
        this.text = "After you cast a spell, deal 2 damage randomly split among all enemies.";
        this.set = "BRM";
        this.health = 4;
        this.attack = 2;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "Flamewakers HATE being confused for Flamewalkers. They just wake up fire, they donâ€™t walk on it. Walking on fire is CRAZY.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating Vaelastrasz in Blackwing Lair.";
        this.howToEarn = "Unlocked in Blackwing Lair, in the Blackrock Mountain adventure.";
    }

}

export class NAX9_07e extends Card {
    constructor() {
        super();
        this.name = "Mark of the Horsemen";
        this.type = CARDTYPES.enchantment;
        this.text = "+1/+1.";
        this.set = "NAXX";
    }

}

export class EX1_178ae extends Card {
    constructor() {
        super();
        this.name = "Rooted";
        this.type = CARDTYPES.enchantment;
        this.text = "+5 Health and <b>Taunt</b>.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.druid;
    }

}

export class NAX11_03 extends Card {
    constructor() {
        super();
        this.name = "Fallout Slime";
        this.type = CARDTYPES.minion;
        this.set = "NAXX";
        this.health = 2;
        this.attack = 2;
        this.manacost = 1;
    }

}

export class BRMA12_1H extends Card {
    constructor() {
        super();
        this.name = "Chromaggus";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 60;
    }

}

export class BRMC_95 extends Card {
    constructor() {
        super();
        this.name = "Golemagg";
        this.type = CARDTYPES.minion;
        this.text = "Costs (1) less for each damage your hero has taken.";
        this.set = "TB";
        this.health = 20;
        this.attack = 20;
        this.manacost = 50;
        this.rarity = rarity.legendary;
    }

}

export class LOEA04_01eh extends Card {
    constructor() {
        super();
        this.name = "Temple Escape Enchant";
        this.type = CARDTYPES.enchantment;
        this.set = "LOE";
    }

}

export class AT_132_WARLOCK extends Card {
    constructor() {
        super();
        this.name = "Soul Tap";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDraw a card.";
        this.set = "TGT";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.warlock;
    }

}

export class GVG_096 extends Card {
    constructor() {
        super();
        this.name = "Piloted Shredder";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Summon a random 2-Cost minion.";
        this.set = "GVG";
        this.health = 3;
        this.attack = 4;
        this.manacost = 4;
        this.artist = "Dan Scott";
        this.race = race.mechanical;
        this.flavor = "Once upon a time, only goblins piloted shredders. These days, everyone from Doomsayer to Lorewalker Cho seems to ride one.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"DEATHRATTLE\"]

}

export class NAX9_03 extends Card {
    constructor() {
        super();
        this.name = "Thane Korth'azz";
        this.type = CARDTYPES.minion;
        this.text = "Your hero is <b>Immune</b>.";
        this.set = "NAXX";
        this.health = 7;
        this.attack = 1;
        this.manacost = 3;
    }

}

export class NAX15_05 extends Card {
    constructor() {
        super();
        this.name = "Mr. Bigglesworth";
        this.type = CARDTYPES.minion;
        this.text = "<i>This is Kel'Thuzad's kitty.</i>";
        this.set = "NAXX";
        this.health = 1;
        this.attack = 1;
        this.manacost = 0;
        this.race = race.beast;
        this.rarity = rarity.legendary;
    }

    //[\"InvisibleDeathrattle\"]

}

export class GAME_006 extends Card {
    constructor() {
        super();
        this.name = "NOOOOOOOOOOOO";
        this.type = CARDTYPES.spell;
        this.text = "Somehow, the card you USED to have has been deleted.  Here, have this one instead!";
        this.set = "CORE";
        this.manacost = 2;
        this.flavor = "Even your flavor text has been deleted. Dang.";
    }

}

export class CS2_038 extends Card {
    constructor() {
        super();
        this.name = "Ancestral Spirit";
        this.type = CARDTYPES.spell;
        this.text = "Give a minion \"<b>Deathrattle:</b> Resummon this minion.\"";
        this.set = "EXPERT1";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Zoltan & Gabor";
        this.flavor = "It was just a flesh wound.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class GVG_100 extends Card {
    constructor() {
        super();
        this.name = "Floating Watcher";
        this.type = CARDTYPES.minion;
        this.text = "Whenever your hero takes damage on your turn, gain +2/+2.";
        this.set = "GVG";
        this.health = 4;
        this.attack = 4;
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Todd Lockwood";
        this.race = race.demon;
        this.flavor = "\"Evil Eye Watcher of Doom\" was the original name, but marketing felt it was a bit too aggressive.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class EX1_323h extends Card {
    constructor() {
        super();
        this.name = "Lord Jaraxxus";
        this.type = CARDTYPES.hero;
        this.set = "EXPERT1";
        this.health = 15;
        this.characterClass = CHARACTERCLASS.warlock;
        this.race = race.demon;
        this.rarity = rarity.legendary;
    }

}

export class BRMA06_4H extends Card {
    constructor() {
        super();
        this.name = "Flamewaker Acolyte";
        this.type = CARDTYPES.minion;
        this.set = "BRM";
        this.health = 3;
        this.attack = 3;
        this.manacost = 2;
    }

}

export class EX1_103 extends Card {
    constructor() {
        super();
        this.name = "Coldlight Seer";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Give ALL other Murlocs +2 Health.";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 2;
        this.manacost = 3;
        this.artist = "Arthur Gimaldinov";
        this.race = race.murloc;
        this.flavor = "The Coldlight murlocs reside in the darkest pits of the Abyssal Depths.  So no, there's no getting away from murlocs.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class BRMA12_5 extends Card {
    constructor() {
        super();
        this.name = "Brood Affliction: Blue";
        this.type = CARDTYPES.spell;
        this.text = "While this is in your hand, Chromaggus' spells cost (1) less.";
        this.set = "BRM";
        this.manacost = 1;
    }

}

export class TB_013_PickOnCurve2 extends Card {
    constructor() {
        super();
        this.name = "Player Choice Enchant On Curve2";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
    }

}

export class TB_PickYourFate_2nd extends Card {
    constructor() {
        super();
        this.name = "Pick Your Fate Randon 2nd";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
    }

    //[\"TB_PickYourFate_1\",\"TB_PickYourFate_4\",\"TB_PickYourFate_7_2nd\",\"TB_PickYourFate_3\",\"TB_PickYourFate_6_2nd\",\"TB_PickYourFate_11rand\"]

}

export class AT_127 extends Card {
    constructor() {
        super();
        this.name = "Nexus-Champion Saraad";
        this.type = CARDTYPES.minion;
        this.text = "<b>Inspire:</b> Add a random spell to your hand.";
        this.set = "TGT";
        this.health = 5;
        this.attack = 4;
        this.manacost = 5;
        this.artist = "Marcleo Vignali";
        this.flavor = "The ethereals have their own jousting tournament, and Saraad is the reigning champion.  Also he won the ethereal hot dog eating contest.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"INSPIRE\"]

}

export class EX1_313 extends Card {
    constructor() {
        super();
        this.name = "Pit Lord";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Deal 5 damage to your hero.";
        this.set = "EXPERT1";
        this.health = 6;
        this.attack = 5;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Glenn Rane";
        this.race = race.demon;
        this.flavor = "Mannoroth, Magtheridon, and Brutallus may be dead, but it turns out there are a LOT of pit lords.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class GVG_107 extends Card {
    constructor() {
        super();
        this.name = "Enhance-o Mechano";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Give your other minions <b>Windfury</b>, <b>Taunt</b>, or <b>Divine Shield</b>.\n<i>(at random)</i>";
        this.set = "GVG";
        this.health = 2;
        this.attack = 3;
        this.manacost = 4;
        this.artist = "Zoltan Boros";
        this.race = race.mechanical;
        this.flavor = "His enhancements are gluten free!";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class NAX1h_01 extends Card {
    constructor() {
        super();
        this.name = "Anub'Rekhan";
        this.type = CARDTYPES.hero;
        this.set = "NAXX";
        this.health = 45;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}

}

export class LOEA16_14 extends Card {
    constructor() {
        super();
        this.name = "Khadgar's Pipe";
        this.type = CARDTYPES.spell;
        this.text = "Put a random spell into each player's hand.  Yours costs (0).";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class BRMA14_11 extends Card {
    constructor() {
        super();
        this.name = "Recharge";
        this.type = CARDTYPES.spell;
        this.text = "Fill all empty Mana Crystals.";
        this.set = "BRM";
        this.manacost = 0;
    }

}

export class NEW1_018 extends Card {
    constructor() {
        super();
        this.name = "Bloodsail Raider";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Gain Attack equal to the Attack of your weapon.";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 2;
        this.manacost = 2;
        this.artist = "Jim Nelson";
        this.race = race.pirate;
        this.flavor = "\"I only plunder on days that end in 'y'.\"";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class XXX_096 extends Card {
    constructor() {
        super();
        this.name = "AI Buddy - Damage Own Hero 5";
        this.type = CARDTYPES.minion;
        this.text = "Spawn into play to smack your own hero for 5.";
        this.set = "CHEAT";
        this.health = 1;
        this.attack = 1;
        this.manacost = 0;
    }

}

export class LOE_021 extends Card {
    constructor() {
        super();
        this.name = "Dart Trap";
        this.type = CARDTYPES.spell;
        this.text = "<b>Secret:</b> When an opposing Hero Power is used, deal 5 damage to a random enemy.";
        this.set = "LOE";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Zoltan Boros";
        this.flavor = "Five years of tap-dancing lessons are FINALLY going to pay off!";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in The Ruined City, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in The Ruined City, in the League of Explorers adventure.";
    }

    //[\"SECRET\"]

}

export class TB_MechWar_Boss1_HeroPower extends Card {
    constructor() {
        super();
        this.name = "Hello! Hello! Hello!";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nGive your lowest attack minion <b>Divine Shield</b> and <b>Taunt</b>.";
        this.set = "TB";
        this.manacost = 2;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_FRIENDLY_TARGET\":0}

}

export class CS2_094 extends Card {
    constructor() {
        super();
        this.name = "Hammer of Wrath";
        this.type = CARDTYPES.spell;
        this.text = "Deal $3 damage.\nDraw a card.";
        this.set = "CORE";
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Efrem Palacios";
        this.flavor = "A good paladin has many tools.  Hammer of Wrath, Pliers of Vengeance, Hacksaw of Justice, etc.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 32.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class TB_EndlessMinions01 extends Card {
    constructor() {
        super();
        this.name = "Endless Enchantment";
        this.type = CARDTYPES.enchantment;
        this.text = "+2/+2.";
        this.set = "TB";
    }

}

export class GVG_104 extends Card {
    constructor() {
        super();
        this.name = "Hobgoblin";
        this.type = CARDTYPES.minion;
        this.text = "Whenever you play a 1-Attack minion, give it +2/+2.";
        this.set = "GVG";
        this.health = 3;
        this.attack = 2;
        this.manacost = 3;
        this.artist = "Laurel D. Austin";
        this.flavor = "Hobgoblins are meeting next week to discuss union benefits.  First on the list: dental plan.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class CS2_226 extends Card {
    constructor() {
        super();
        this.name = "Frostwolf Warlord";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Gain +1/+1 for each other friendly minion on the battlefield.";
        this.set = "CORE";
        this.health = 4;
        this.attack = 4;
        this.manacost = 5;
        this.artist = "James Ryman";
        this.flavor = "The Frostwolves are locked in combat with the Stormpike Expedition over control of Alterac Valley.  Every attempt at peace-talks has ended with Captain Galvangar killing the mediator.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "HORDE";
        this.howToEarnGolden = "Unlocked at Shaman Level 53.";
    }

    //[\"BATTLECRY\"]

}

export class GVG_059 extends Card {
    constructor() {
        super();
        this.name = "Coghammer";
        this.type = CARDTYPES.weapon;
        this.text = "<b>Battlecry:</b> Give a random friendly minion <b>Divine Shield</b> and <b>Taunt</b>.";
        this.set = "GVG";
        this.attack = 2;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Dany Orizio";
        this.flavor = "So you ripped this out of a machine, carved some runes on it, stuck it on a handle, and now it's a weapon of great divine power? Seems legit.";
        this.rarity = rarity.epic;
        this.collectible = true;
        this.durability = "3";
    }

    //[\"BATTLECRY\"]

}

export class CS2_117 extends Card {
    constructor() {
        super();
        this.name = "Earthen Ring Farseer";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Restore 3 Health.";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 3;
        this.manacost = 3;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "He can see really far, and he doesn't use a telescope like those filthy pirates.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.targetingArrowText = "Restore 3 Health.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class NAX8_02 extends Card {
    constructor() {
        super();
        this.name = "Harvest";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDraw a card.";
        this.set = "NAXX";
        this.manacost = 2;
    }

}

export class FP1_009 extends Card {
    constructor() {
        super();
        this.name = "Deathlord";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt. Deathrattle:</b> Your opponent puts a minion from their deck into the battlefield.";
        this.set = "NAXX";
        this.health = 8;
        this.attack = 2;
        this.manacost = 3;
        this.artist = "Ben Olson";
        this.flavor = "\"Rise from your grave!\" - Kel'Thuzad";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating The Four Horsemen in the Military Quarter.";
        this.howToEarn = "Unlocked in The Military Quarter, in the Naxxramas adventure.";
    }

    //[\"DEATHRATTLE\",\"TAUNT\"]

}

export class AT_030 extends Card {
    constructor() {
        super();
        this.name = "Undercity Valiant";
        this.type = CARDTYPES.minion;
        this.text = "<b>Combo:</b> Deal 1 damage.";
        this.set = "TGT";
        this.health = 2;
        this.attack = 3;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Zoltan Boros ";
        this.flavor = "Almost went to play for Stormwind before signing with Undercity.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.targetingArrowText = "Deal 1 damage.";
    }

    //[\"COMBO\"]
    //{\"REQ_TARGET_FOR_COMBO\":0}

}

export class LOEA15_3H extends Card {
    constructor() {
        super();
        this.name = "Boneraptor";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b>Take control of your opponent's weapon.";
        this.set = "LOE";
        this.health = 2;
        this.attack = 2;
        this.manacost = 3;
    }

}

export class LOEA04_06a extends Card {
    constructor() {
        super();
        this.name = "Swing Across";
        this.type = CARDTYPES.spell;
        this.text = "Take 10 damage or no damage, at random.";
        this.set = "LOE";
        this.manacost = 0;
    }

    //[\"ImmuneToSpellpower\"]

}

export class XXX_048 extends Card {
    constructor() {
        super();
        this.name = "-1 Durability";
        this.type = CARDTYPES.spell;
        this.text = "Give a player's weapon -1 Durability.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

    //{\"REQ_TARGET_TO_PLAY\":0,\"REQ_HERO_TARGET\":0}

}

export class NAXM_001 extends Card {
    constructor() {
        super();
        this.name = "Necroknight";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Destroy the minions next to this one as well.";
        this.set = "NAXX";
        this.health = 6;
        this.attack = 5;
        this.manacost = 4;
    }

    //[\"DEATHRATTLE\"]

}

export class EX1_323w extends Card {
    constructor() {
        super();
        this.name = "Blood Fury";
        this.type = CARDTYPES.weapon;
        this.set = "EXPERT1";
        this.attack = 3;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.warlock;
        this.durability = "8";
    }

}

export class EX1_082 extends Card {
    constructor() {
        super();
        this.name = "Mad Bomber";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Deal 3 damage randomly split between all other characters.";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 3;
        this.manacost = 2;
        this.artist = "Mike Sass";
        this.flavor = "He's not really all that crazy, he is just not as careful with explosives as he should be.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "ALLIANCE";
    }

    //[\"BATTLECRY\"]

}

export class PART_003 extends Card {
    constructor() {
        super();
        this.name = "Rusty Horn";
        this.type = CARDTYPES.spell;
        this.text = "Give a minion <b>Taunt</b>.";
        this.set = "GVG";
        this.manacost = 1;
        this.artist = "Peerasak Senalai";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class LOEA16_5 extends Card {
    constructor() {
        super();
        this.name = "Mirror of Doom";
        this.type = CARDTYPES.spell;
        this.text = "Fill your board with 3/3 Mummy Zombies.";
        this.set = "LOE";
        this.manacost = 10;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}

}

export class NAX14_01H extends Card {
    constructor() {
        super();
        this.name = "Sapphiron";
        this.type = CARDTYPES.hero;
        this.set = "NAXX";
        this.health = 45;
    }

}

export class EX1_316 extends Card {
    constructor() {
        super();
        this.name = "Power Overwhelming";
        this.type = CARDTYPES.spell;
        this.text = "Give a friendly minion +4/+4 until end of turn. Then, it dies. Horribly.";
        this.set = "EXPERT1";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Tom Baxa";
        this.flavor = "We cannot even describe how horrible the death is.  It's CRAZY bad!  Maybe worse than that.  Just don't do it.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0,\"REQ_FRIENDLY_TARGET\":0}

}

export class AT_115 extends Card {
    constructor() {
        super();
        this.name = "Fencing Coach";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> The next time you use your Hero Power, it costs (2) less.";
        this.set = "TGT";
        this.health = 2;
        this.attack = 2;
        this.manacost = 3;
        this.artist = "Howard Lyon";
        this.flavor = "Good fencers make good neighbors, right?";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]
    //{\"REQ_MINION_TARGET\":0}

}

export class EX1_383 extends Card {
    constructor() {
        super();
        this.name = "Tirion Fordring";
        this.type = CARDTYPES.minion;
        this.text = "<b>Divine Shield</b>. <b>Taunt</b>. <b>Deathrattle:</b> Equip a 5/3 Ashbringer.";
        this.set = "EXPERT1";
        this.health = 6;
        this.attack = 6;
        this.manacost = 8;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Brom";
        this.flavor = "If you haven't heard the Tirion Fordring theme song, it's because it doesn't exist.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"DEATHRATTLE\",\"DIVINE_SHIELD\",\"TAUNT\"]

}

export class EX1_080o extends Card {
    constructor() {
        super();
        this.name = "Keeping Secrets";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased stats.";
        this.set = "EXPERT1";
    }

}

export class AT_074 extends Card {
    constructor() {
        super();
        this.name = "Seal of Champions";
        this.type = CARDTYPES.spell;
        this.text = "Give a minion\n+3 Attack and <b>Divine Shield</b>.";
        this.set = "TGT";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Jonboy Meyers";
        this.flavor = "\"Arf! Arf! Arf!\" - Seal of Champions";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class BRMA14_9H extends Card {
    constructor() {
        super();
        this.name = "Magmatron";
        this.type = CARDTYPES.minion;
        this.text = "Whenever a player plays a card, Magmatron deals 2 damage to them.";
        this.set = "BRM";
        this.health = 8;
        this.attack = 8;
        this.manacost = 5;
        this.race = race.mechanical;
        this.rarity = rarity.legendary;
    }

}

export class LOEA06_03h extends Card {
    constructor() {
        super();
        this.name = "Animate Earthen";
        this.type = CARDTYPES.spell;
        this.text = "Give your minions +3/+3 and <b>Taunt</b>.";
        this.set = "LOE";
        this.manacost = 2;
    }

}

export class LOEA01_11 extends Card {
    constructor() {
        super();
        this.name = "Rod of the Sun";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Surrender this to your opponent.";
        this.set = "LOE";
        this.health = 5;
        this.attack = 0;
        this.manacost = 0;
    }

    //[\"DEATHRATTLE\"]

}

export class BRMA09_4Ht extends Card {
    constructor() {
        super();
        this.name = "Dragonkin";
        this.type = CARDTYPES.minion;
        this.set = "BRM";
        this.health = 4;
        this.attack = 5;
        this.manacost = 1;
        this.race = race.dragon;
    }

}

export class TB_PickYourFate_11 extends Card {
    constructor() {
        super();
        this.name = "Murlocs";
        this.type = CARDTYPES.spell;
        this.text = "Each player gets a 1/1 Murloc at the end of their turn.";
        this.set = "TB";
        this.manacost = 0;
    }

}

export class EX1_614t extends Card {
    constructor() {
        super();
        this.name = "Flame of Azzinoth";
        this.type = CARDTYPES.minion;
        this.set = "EXPERT1";
        this.health = 1;
        this.attack = 2;
        this.manacost = 1;
    }

}

export class LOE_073e extends Card {
    constructor() {
        super();
        this.name = "Fossilized";
        this.type = CARDTYPES.enchantment;
        this.text = "Has <b>Taunt</b>.";
        this.set = "LOE";
    }

}

export class EX1_016 extends Card {
    constructor() {
        super();
        this.name = "Sylvanas Windrunner";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Take control of a random enemy minion.";
        this.set = "EXPERT1";
        this.health = 5;
        this.attack = 5;
        this.manacost = 6;
        this.artist = "Glenn Rane";
        this.flavor = "Sylvanas was turned into the Banshee Queen by Arthas, but he probably should have just killed her because it just pissed her off.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"DEATHRATTLE\"]

}

export class EX1_341 extends Card {
    constructor() {
        super();
        this.name = "Lightwell";
        this.type = CARDTYPES.minion;
        this.text = "At the start of your turn, restore 3 Health to a damaged friendly character.";
        this.set = "EXPERT1";
        this.health = 5;
        this.attack = 0;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Blizzard Entertainment";
        this.flavor = "It isn't clear if people ignore the Lightwell, or if it is just invisible.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class CS2_046e extends Card {
    constructor() {
        super();
        this.name = "Bloodlust";
        this.type = CARDTYPES.enchantment;
        this.text = "+3 Attack this turn.";
        this.set = "CORE";
        this.characterClass = CHARACTERCLASS.shaman;
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class TU4a_003 extends Card {
    constructor() {
        super();
        this.name = "Gnoll";
        this.type = CARDTYPES.minion;
        this.set = "MISSIONS";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
        this.rarity = rarity.common;
    }

}

export class GVG_041b extends Card {
    constructor() {
        super();
        this.name = "Dark Wispers";
        this.type = CARDTYPES.spell;
        this.text = "Summon 5 Wisps.";
        this.set = "GVG";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_NUM_MINION_SLOTS\":1}

}

export class NAX11_04e extends Card {
    constructor() {
        super();
        this.name = "Mutating Injection";
        this.type = CARDTYPES.enchantment;
        this.text = "+4/+4 and <b>Taunt</b>.";
        this.set = "NAXX";
    }

}

export class LOEA16_25 extends Card {
    constructor() {
        super();
        this.name = "Lady Naz'jar";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, replace all other minions with new ones of the same Cost.";
        this.set = "LOE";
        this.health = 5;
        this.attack = 5;
        this.manacost = 5;
    }

}

export class EX1_160b extends Card {
    constructor() {
        super();
        this.name = "Leader of the Pack";
        this.type = CARDTYPES.spell;
        this.text = "Give your minions +1/+1.";
        this.set = "EXPERT1";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
    }

}

export class LOE_110t extends Card {
    constructor() {
        super();
        this.name = "Ancient Curse";
        this.type = CARDTYPES.spell;
        this.text = "When you draw this, take 7 damage and draw a card.";
        this.set = "LOE";
        this.manacost = 0;
        this.artist = "Slawomir Maniak";
    }

    //[\"ImmuneToSpellpower\"]

}

export class NAX7_01 extends Card {
    constructor() {
        super();
        this.name = "Instructor Razuvious";
        this.type = CARDTYPES.hero;
        this.set = "NAXX";
        this.health = 40;
    }

}

export class BRM_013 extends Card {
    constructor() {
        super();
        this.name = "Quick Shot";
        this.type = CARDTYPES.spell;
        this.text = "Deal $3 damage.\nIf your hand is empty, draw a card.";
        this.set = "BRM";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Jonboy Meyers";
        this.flavor = "Han shot first.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after completing the Hunter Class Challenge in Blackrock Mountain.";
        this.howToEarn = "Unlocked in Blackrock Depths, in the Blackrock Mountain adventure.";
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class BRMA09_5Ht extends Card {
    constructor() {
        super();
        this.name = "Gyth";
        this.type = CARDTYPES.minion;
        this.set = "BRM";
        this.health = 8;
        this.attack = 8;
        this.manacost = 3;
        this.race = race.dragon;
        this.rarity = rarity.legendary;
    }

}

export class AT_027e extends Card {
    constructor() {
        super();
        this.name = "Master Summoner";
        this.type = CARDTYPES.enchantment;
        this.text = "Costs (0).";
        this.set = "TGT";
        this.characterClass = CHARACTERCLASS.warlock;
    }

}

export class CRED_17 extends Card {
    constructor() {
        super();
        this.name = "Rob Pardo";
        this.type = CARDTYPES.minion;
        this.text = "You can't start a game without this minion in your deck.";
        this.set = "CREDITS";
        this.health = 9;
        this.attack = 9;
        this.manacost = 9;
        this.rarity = rarity.legendary;
    }

}

export class FP1_018 extends Card {
    constructor() {
        super();
        this.name = "Duplicate";
        this.type = CARDTYPES.spell;
        this.text = "<b>Secret:</b> When a friendly minion dies, put 2 copies of it into your hand.";
        this.set = "NAXX";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Alex Garner";
        this.flavor = "The one time when duping cards won't get your account banned!";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after completing the Mage Class Challenge in Naxxramas.";
        this.howToEarn = "Unlocked in The Plague Quarter, in the Naxxramas adventure.";
    }

    //[\"SECRET\"]

}

export class GVG_058 extends Card {
    constructor() {
        super();
        this.name = "Shielded Minibot";
        this.type = CARDTYPES.minion;
        this.text = "<b>Divine Shield</b>";
        this.set = "GVG";
        this.health = 2;
        this.attack = 2;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Raymond Swanland";
        this.race = race.mechanical;
        this.flavor = "He chooses to believe what he is programmed to believe!";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"DIVINE_SHIELD\"]

}

export class GVG_018 extends Card {
    constructor() {
        super();
        this.name = "Mistress of Pain";
        this.type = CARDTYPES.minion;
        this.text = "Whenever this minion deals damage, restore that much Health to your hero.";
        this.set = "GVG";
        this.health = 4;
        this.attack = 1;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Carl Critchlow";
        this.race = race.demon;
        this.flavor = "Her sister is the Mistress of Pane who sells windows and shower doors.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class CS2_009 extends Card {
    constructor() {
        super();
        this.name = "Mark of the Wild";
        this.type = CARDTYPES.spell;
        this.text = "Give a minion <b>Taunt</b> and +2/+2.<i> (+2 Attack/+2 Health)</i>";
        this.set = "CORE";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Brad Vancata";
        this.flavor = "Not to be confused with Jim of the Wild.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 28.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class AT_128 extends Card {
    constructor() {
        super();
        this.name = "The Skeleton Knight";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Reveal a minion in each deck. If yours costs more, return this to your hand.";
        this.set = "TGT";
        this.health = 4;
        this.attack = 7;
        this.manacost = 6;
        this.artist = "Mike Sass";
        this.flavor = "Apparently it really was just a flesh wound.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"DEATHRATTLE\"]

}

export class CS2_033 extends Card {
    constructor() {
        super();
        this.name = "Water Elemental";
        this.type = CARDTYPES.minion;
        this.text = "<b>Freeze</b> any character damaged by this minion.";
        this.set = "CORE";
        this.health = 6;
        this.attack = 3;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "John Avon";
        this.flavor = "Don't summon a water elemental at a party.  It'll dampen the mood.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 49.";
        this.howToEarn = "Unlocked at Level 8.";
        this.textInPlay = "Frostbolt";
    }

    //[\"FREEZE\"]

}

export class TBA01_4 extends Card {
    constructor() {
        super();
        this.name = "Nefarian";
        this.type = CARDTYPES.hero;
        this.set = "TB";
        this.health = 30;
    }

}

export class BRM_001e extends Card {
    constructor() {
        super();
        this.name = "Melt";
        this.type = CARDTYPES.enchantment;
        this.text = "Attack changed to 0 this turn.";
        this.set = "BRM";
        this.characterClass = CHARACTERCLASS.priest;
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class EX1_160t extends Card {
    constructor() {
        super();
        this.name = "Panther";
        this.type = CARDTYPES.minion;
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 3;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.druid;
        this.race = race.beast;
        this.rarity = rarity.common;
    }

}

export class CRED_33 extends Card {
    constructor() {
        super();
        this.name = "Jomaro Kindred";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> TAKE any cards from your opponent's hand that they don't want.";
        this.set = "CREDITS";
        this.health = 6;
        this.attack = 7;
        this.manacost = 6;
        this.rarity = rarity.legendary;
    }

}

export class BRMA15_2He extends Card {
    constructor() {
        super();
        this.name = "Potion of Might";
        this.type = CARDTYPES.enchantment;
        this.text = "+2/+2.";
        this.set = "BRM";
    }

}

export class CS2_037 extends Card {
    constructor() {
        super();
        this.name = "Frost Shock";
        this.type = CARDTYPES.spell;
        this.text = "Deal $1 damage to an enemy character and <b>Freeze</b> it.";
        this.set = "CORE";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "FROST SHOCK!";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 32.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //[\"FREEZE\"]
    //{\"REQ_TARGET_TO_PLAY\":0,\"REQ_ENEMY_TARGET\":0}

}

export class NEW1_017 extends Card {
    constructor() {
        super();
        this.name = "Hungry Crab";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Destroy a Murloc and gain +2/+2.";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 1;
        this.manacost = 1;
        this.artist = "Jaemin Kim";
        this.race = race.beast;
        this.flavor = "Murloc.  It's what's for dinner.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]
    //{\"REQ_TARGET_WITH_RACE\":14,\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class EX1_tk9 extends Card {
    constructor() {
        super();
        this.name = "Treant";
        this.type = CARDTYPES.minion;
        this.text = "<b>Charge</b>.  At the end of the turn, destroy this minion.";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 2;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.druid;
        this.rarity = rarity.common;
    }

    //[\"CHARGE\"]

}

export class EX1_564 extends Card {
    constructor() {
        super();
        this.name = "Faceless Manipulator";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Choose a minion and become a copy of it.";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 3;
        this.manacost = 5;
        this.artist = "Raymond Swanland";
        this.flavor = "The Faceless Ones are servants of Yogg-Saron, and they feed on fear. Right now they are feeding on your fear of accidentally disenchanting all your good cards.";
        this.rarity = rarity.epic;
        this.collectible = true;
        this.targetingArrowText = "Become a copy of a minion.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0,\"REQ_NONSELF_TARGET\":0}

}

export class CS2_168 extends Card {
    constructor() {
        super();
        this.name = "Murloc Raider";
        this.type = CARDTYPES.minion;
        this.set = "CORE";
        this.health = 1;
        this.attack = 2;
        this.manacost = 1;
        this.artist = "Dan Scott";
        this.race = race.murloc;
        this.flavor = "Mrrraggglhlhghghlgh, mrgaaag blarrghlgaahahl mrgggg glhalhah a bghhll graggmgmg Garrosh mglhlhlh mrghlhlhl!!";
        this.rarity = rarity.free;
        this.collectible = true;
        this.faction = "ALLIANCE";
        this.howToEarnGolden = "Unlocked at Priest Level 51.";
    }

}

export class NAX2_03 extends Card {
    constructor() {
        super();
        this.name = "Rain of Fire";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nFire a missile for each card in your opponent's hand.";
        this.set = "NAXX";
        this.manacost = 2;
    }

    //[\"ImmuneToSpellpower\"]

}

export class GVG_086e extends Card {
    constructor() {
        super();
        this.name = "Armor Plated";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Attack.";
        this.set = "GVG";
        this.characterClass = CHARACTERCLASS.warrior;
    }

}

export class CS2_146 extends Card {
    constructor() {
        super();
        this.name = "Southsea Deckhand";
        this.type = CARDTYPES.minion;
        this.text = "Has <b>Charge</b> while you have a weapon equipped.";
        this.set = "EXPERT1";
        this.health = 1;
        this.attack = 2;
        this.manacost = 1;
        this.artist = "Dan Brereton";
        this.race = race.pirate;
        this.flavor = "Pirates are into this new fad called \"Planking\".";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "ALLIANCE";
    }

}

export class CS2_087e extends Card {
    constructor() {
        super();
        this.name = "Blessing of Might";
        this.type = CARDTYPES.enchantment;
        this.text = "+3 Attack.";
        this.set = "CORE";
        this.characterClass = CHARACTERCLASS.paladin;
    }

}

export class EX1_248 extends Card {
    constructor() {
        super();
        this.name = "Feral Spirit";
        this.type = CARDTYPES.spell;
        this.text = "Summon two 2/3 Spirit Wolves with <b>Taunt</b>. <b>Overload:</b> (2)";
        this.set = "EXPERT1";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Clint Langley";
        this.flavor = "Spirit wolves are like regular wolves with pom-poms.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"OVERLOAD\"]
    //{\"REQ_NUM_MINION_SLOTS\":1}

}

export class LOE_007t extends Card {
    constructor() {
        super();
        this.name = "Cursed!";
        this.type = CARDTYPES.spell;
        this.text = "While this is in your hand, take 2 damage at the start of your turn.";
        this.set = "LOE";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Jim Nelson";
    }

    //[\"ImmuneToSpellpower\"]

}

export class CS1_069 extends Card {
    constructor() {
        super();
        this.name = "Fen Creeper";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "EXPERT1";
        this.health = 6;
        this.attack = 3;
        this.manacost = 5;
        this.artist = "Monica Langlois";
        this.flavor = "He used to be called Bog Beast, but it confused people because he wasn't an actual beast.   Boom, New Name!";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "ALLIANCE";
    }

    //[\"TAUNT\"]

}

export class AT_033 extends Card {
    constructor() {
        super();
        this.name = "Burgle";
        this.type = CARDTYPES.spell;
        this.text = "Add 2 random class cards to your hand <i>(from your opponent's class)</i>.";
        this.set = "TGT";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Matt Dixon";
        this.flavor = "Yoink!";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class BRM_006 extends Card {
    constructor() {
        super();
        this.name = "Imp Gang Boss";
        this.type = CARDTYPES.minion;
        this.text = "Whenever this minion takes damage, summon a 1/1 Imp.";
        this.set = "BRM";
        this.health = 4;
        this.attack = 2;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Steve Prescott";
        this.race = race.demon;
        this.flavor = "His imp gang likes to sneak into Stormwind to spraypaint \"Ragnaros Rulez\" on the Mage Tower.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating Majordomo Executus in Molten Core.";
        this.howToEarn = "Unlocked in Molten Core, in the Blackrock Mountain adventure.";
    }

}

export class GVG_032 extends Card {
    constructor() {
        super();
        this.name = "Grove Tender";
        this.type = CARDTYPES.minion;
        this.text = "<b>Choose One -</b> Give each player a Mana Crystal; or Each player draws a card.";
        this.set = "GVG";
        this.health = 4;
        this.attack = 2;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Chris Rahn";
        this.flavor = "Likes: Hiking and the great outdoors. Dislikes: Goblin shredders and sandals. (Canâ€™t find any that fit!).";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class NAX3_02H extends Card {
    constructor() {
        super();
        this.name = "Web Wrap";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nReturn 2 random enemy minions to your opponent's hand.";
        this.set = "NAXX";
        this.manacost = 0;
    }

}

export class NEW1_037 extends Card {
    constructor() {
        super();
        this.name = "Master Swordsmith";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, give another random friendly minion +1 Attack.";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 1;
        this.manacost = 2;
        this.artist = "E.M. Gist";
        this.flavor = "He's currently trying to craft a \"flail-axe\", but all the other swordsmiths say it can't be done.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class PART_004e extends Card {
    constructor() {
        super();
        this.name = "Cloaked";
        this.type = CARDTYPES.enchantment;
        this.text = "Stealthed until your next turn.";
        this.set = "GVG";
    }

}

export class BRM_005 extends Card {
    constructor() {
        super();
        this.name = "Demonwrath";
        this.type = CARDTYPES.spell;
        this.text = "Deal $2 damage to all non-Demon minions.";
        this.set = "BRM";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Raymond Swanland";
        this.flavor = "Demons are not angry most of the time. You have to play this card in order to really bring it out of them.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after completing the Warlock Class Challenge in Blackrock Mountain.";
        this.howToEarn = "Unlocked in Blackwing Lair, in the Blackrock Mountain adventure.";
    }

}

export class AT_133e extends Card {
    constructor() {
        super();
        this.name = "Victory!";
        this.type = CARDTYPES.enchantment;
        this.text = "+1/+1.";
        this.set = "TGT";
    }

}

export class NAX7_03H extends Card {
    constructor() {
        super();
        this.name = "Unbalancing Strike";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDeal 4 damage.";
        this.set = "NAXX";
        this.manacost = 1;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class NAX13_03e extends Card {
    constructor() {
        super();
        this.name = "Supercharged";
        this.type = CARDTYPES.enchantment;
        this.text = "+2 Health.";
        this.set = "NAXX";
    }

}

export class LOEA04_06b extends Card {
    constructor() {
        super();
        this.name = "Walk Across Gingerly";
        this.type = CARDTYPES.spell;
        this.text = "Take 5 damage.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class BRMA12_3H extends Card {
    constructor() {
        super();
        this.name = "Brood Affliction: Red";
        this.type = CARDTYPES.spell;
        this.text = "While this is in your hand, take 3 damage at the start of your turn.";
        this.set = "BRM";
        this.manacost = 3;
    }

    //[\"ImmuneToSpellpower\"]

}

export class EX1_162o extends Card {
    constructor() {
        super();
        this.name = "Strength of the Pack";
        this.type = CARDTYPES.enchantment;
        this.text = "Dire Wolf Alpha is granting +1 Attack to this minion.";
        this.set = "EXPERT1";
    }

}

export class CS2_073 extends Card {
    constructor() {
        super();
        this.name = "Cold Blood";
        this.type = CARDTYPES.spell;
        this.text = "Give a minion +2 Attack. <b>Combo:</b> +4 Attack instead.";
        this.set = "EXPERT1";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "\"I'm cold blooded, check it and see!\"";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"COMBO\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class TB_PickYourFate_7_EnchMinion extends Card {
    constructor() {
        super();
        this.name = "Fate";
        this.type = CARDTYPES.enchantment;
        this.text = "<b>Deathrattle</b>: Your owner gets a coin.";
        this.set = "TB";
    }

}

export class CS2_061 extends Card {
    constructor() {
        super();
        this.name = "Drain Life";
        this.type = CARDTYPES.spell;
        this.text = "Deal $2 damage. Restore #2 Health to your hero.";
        this.set = "CORE";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "\"I've just sucked one year of your life away.\"";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 45.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class BRMA10_1 extends Card {
    constructor() {
        super();
        this.name = "Razorgore the Untamed";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class GVG_102 extends Card {
    constructor() {
        super();
        this.name = "Tinkertown Technician";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> If you have a Mech, gain +1/+1 and add a <b>Spare Part</b> to your hand.";
        this.set = "GVG";
        this.health = 3;
        this.attack = 3;
        this.manacost = 3;
        this.artist = "Gabor Szikszai";
        this.flavor = "Won't you take me to... Tinkertown?";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]
    //[\"PART_007\",\"PART_006\",\"PART_003\",\"PART_001\",\"PART_004\",\"PART_002\",\"PART_005\"]

}

export class BRMC_100 extends Card {
    constructor() {
        super();
        this.name = "Living Bomb";
        this.type = CARDTYPES.spell;
        this.text = "Choose an enemy minion. If it lives until your next turn, deal 5 damage to all enemies.";
        this.set = "TB";
        this.manacost = 3;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0,\"REQ_ENEMY_TARGET\":0}

}

export class GVG_078 extends Card {
    constructor() {
        super();
        this.name = "Mechanical Yeti";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Give each player a <b>Spare Part.</b>";
        this.set = "GVG";
        this.health = 5;
        this.attack = 4;
        this.manacost = 4;
        this.artist = "Chris Seaman";
        this.race = race.mechanical;
        this.flavor = "The yetis of Chillwind Point are a source of both inspiration and savage beatings.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"DEATHRATTLE\"]
    //[\"PART_001\",\"PART_003\",\"PART_006\",\"PART_007\",\"PART_004\",\"PART_005\",\"PART_002\"]

}

export class DS1_233 extends Card {
    constructor() {
        super();
        this.name = "Mind Blast";
        this.type = CARDTYPES.spell;
        this.text = "Deal $5 damage to the enemy hero.";
        this.set = "CORE";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Dave Allsop";
        this.flavor = "This spell blasts you directly in the MIND.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 15.";
        this.howToEarn = "Unlocked at Level 1.";
    }

}

export class NAX13_02e extends Card {
    constructor() {
        super();
        this.name = "Polarity";
        this.type = CARDTYPES.enchantment;
        this.text = "Attack and Health swapped.";
        this.set = "NAXX";
    }

}

export class GVG_053 extends Card {
    constructor() {
        super();
        this.name = "Shieldmaiden";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Gain 5 Armor.";
        this.set = "GVG";
        this.health = 5;
        this.attack = 5;
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "She has three shieldbearers in her party to supply her with back ups when she gets low on durability.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class AT_092 extends Card {
    constructor() {
        super();
        this.name = "Ice Rager";
        this.type = CARDTYPES.minion;
        this.set = "TGT";
        this.health = 2;
        this.attack = 5;
        this.manacost = 3;
        this.artist = "Anton Zemskov";
        this.flavor = "He's a lot cooler than Magma Rager.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class LOEA02_01 extends Card {
    constructor() {
        super();
        this.name = "Zinaar";
        this.type = CARDTYPES.hero;
        this.set = "LOE";
        this.health = 30;
    }

}

export class CS2_083b extends Card {
    constructor() {
        super();
        this.name = "Dagger Mastery";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nEquip a 1/2 Dagger.";
        this.set = "CORE";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.rogue;
        this.rarity = rarity.free;
    }

}

export class TBST_003 extends Card {
    constructor() {
        super();
        this.name = "OLDN3wb Healer";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, heal 2 damage from adjacent minions.";
        this.set = "TB";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
    }

}

export class LOE_027 extends Card {
    constructor() {
        super();
        this.name = "Sacred Trial";
        this.type = CARDTYPES.spell;
        this.text = "<b>Secret:</b> When your opponent has at least 3 minions and plays another, destroy it.";
        this.set = "LOE";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Zoltan Boros";
        this.flavor = "You have chosen poorly.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in the Temple of Orsis, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in the Temple of Orsis, in the League of Explorers adventure.";
    }

    //[\"SECRET\"]

}

export class BRMA12_9 extends Card {
    constructor() {
        super();
        this.name = "Chromatic Dragonkin";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class NEW1_019 extends Card {
    constructor() {
        super();
        this.name = "Knife Juggler";
        this.type = CARDTYPES.minion;
        this.text = "After you summon a minion, deal 1 damage to a random enemy.";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 3;
        this.manacost = 2;
        this.artist = "Matt Cavotta";
        this.flavor = "Ambitious Knife Jugglers sometimes graduate to Bomb Jugglers.    They never last long enough to make it onto a card though.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class EX1_155b extends Card {
    constructor() {
        super();
        this.name = "Mark of Nature";
        this.type = CARDTYPES.spell;
        this.text = "+4 Health and <b>Taunt</b>.";
        this.set = "EXPERT1";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class CS2_105 extends Card {
    constructor() {
        super();
        this.name = "Heroic Strike";
        this.type = CARDTYPES.spell;
        this.text = "Give your hero +4 Attack this turn.";
        this.set = "CORE";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Jonboy Meyers";
        this.flavor = "Really, if you're a hero, this is <i>every</i> strike.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 15.";
        this.howToEarn = "Unlocked at Level 1.";
    }

}

export class EX1_345 extends Card {
    constructor() {
        super();
        this.name = "Mindgames";
        this.type = CARDTYPES.spell;
        this.text = "Put a copy of a random minion from your opponent's deck into the battlefield.";
        this.set = "EXPERT1";
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Zoltan & Gabor";
        this.flavor = "Sometimes it feels like this is all a game.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}

}

export class NAX8_02H extends Card {
    constructor() {
        super();
        this.name = "Harvest";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDraw a card. Gain a Mana Crystal.";
        this.set = "NAXX";
        this.manacost = 1;
    }

}

export class EX1_611 extends Card {
    constructor() {
        super();
        this.name = "Freezing Trap";
        this.type = CARDTYPES.spell;
        this.text = "<b>Secret:</b> When an enemy minion attacks, return it to its owner's hand and it costs (2) more.";
        this.set = "EXPERT1";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Matt Gaser";
        this.flavor = "\"Dang, that's cold.\" - appropriate response to Freezing Trap, or a mean joke.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"SECRET\"]

}

export class FP1_022 extends Card {
    constructor() {
        super();
        this.name = "Voidcaller";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Put a random Demon from your hand into the battlefield.";
        this.set = "NAXX";
        this.health = 4;
        this.attack = 3;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Robb Shoberg";
        this.race = race.demon;
        this.flavor = "\"Void!  Here, void!  Here, buddy!\"";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after completing the Warlock Class Challenge in Naxxramas.";
        this.howToEarn = "Unlocked in The Military Quarter, in the Naxxramas adventure.";
    }

    //[\"DEATHRATTLE\"]

}

export class AT_097 extends Card {
    constructor() {
        super();
        this.name = "Tournament Attendee";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "TGT";
        this.health = 1;
        this.attack = 2;
        this.manacost = 1;
        this.artist = "Adam Byrne";
        this.flavor = "He was so excited to get season tickets to this year's Grand Tournament.  He normally doesn't get them at first and has to buy them from Ogre scalpers.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"TAUNT\"]

}

export class LOEA07_24 extends Card {
    constructor() {
        super();
        this.name = "Spiked Decoy";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>\nCan't attack.";
        this.set = "LOE";
        this.health = 6;
        this.attack = 3;
        this.manacost = 1;
        this.race = race.mechanical;
    }

    //[\"TAUNT\"]

}

export class LOEA09_11 extends Card {
    constructor() {
        super();
        this.name = "Hungry Naga";
        this.type = CARDTYPES.minion;
        this.set = "LOE";
        this.health = 1;
        this.attack = 1;
        this.manacost = 3;
    }

}

export class LOE_061 extends Card {
    constructor() {
        super();
        this.name = "Anubisath Sentinel";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Give a random friendly minion +3/+3.";
        this.set = "LOE";
        this.health = 4;
        this.attack = 4;
        this.manacost = 5;
        this.artist = "Paul Mafayon";
        this.flavor = "He's actually a 1/1 who picked up the hammer from the last guy.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in the Temple of Orsis, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in the Temple of Orsis, in the League of Explorers adventure.";
    }

    //[\"DEATHRATTLE\"]

}

export class HERO_01 extends Card {
    constructor() {
        super();
        this.name = "Garrosh Hellscream";
        this.type = CARDTYPES.hero;
        this.set = "CORE";
        this.health = 30;
        this.characterClass = CHARACTERCLASS.warrior;
        this.rarity = rarity.free;
        this.collectible = true;
    }

}

export class TB_PickYourFate_5_Ench extends Card {
    constructor() {
        super();
        this.name = "Pick Your Fate 5 Ench";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
    }

}

export class EX1_538t extends Card {
    constructor() {
        super();
        this.name = "Hound";
        this.type = CARDTYPES.minion;
        this.text = "<b>Charge</b>";
        this.set = "EXPERT1";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.hunter;
        this.race = race.beast;
    }

    //[\"CHARGE\"]

}

export class GAME_001 extends Card {
    constructor() {
        super();
        this.name = "Luck of the Coin";
        this.type = CARDTYPES.enchantment;
        this.text = "Going second grants you increased Health.";
        this.set = "CORE";
    }

}

export class LOEA09_5 extends Card {
    constructor() {
        super();
        this.name = "Hungry Naga";
        this.type = CARDTYPES.minion;
        this.set = "LOE";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
    }

}

export class XXX_042 extends Card {
    constructor() {
        super();
        this.name = "Hand to Deck";
        this.type = CARDTYPES.spell;
        this.text = "Shuffle a player's hand into his deck.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

    //{\"REQ_TARGET_TO_PLAY\":0,\"REQ_HERO_TARGET\":0}

}

export class FP1_017 extends Card {
    constructor() {
        super();
        this.name = "Nerub'ar Weblord";
        this.type = CARDTYPES.minion;
        this.text = "Minions with <b>Battlecry</b> cost (2) more.";
        this.set = "NAXX";
        this.health = 4;
        this.attack = 1;
        this.manacost = 2;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "Weblords spend all day making giant trampoline parks.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating Grand Widow Faerlina in the Arachnid Quarter.";
        this.howToEarn = "Unlocked in The Arachnid Quarter, in the Naxxramas adventure.";
    }

    //[\"AURA\"]

}

export class EX1_411e extends Card {
    constructor() {
        super();
        this.name = "Bloodrage";
        this.type = CARDTYPES.enchantment;
        this.text = "No durability loss.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.warrior;
    }

}

export class TB_CoOpBossSpell_1 extends Card {
    constructor() {
        super();
        this.name = "Prioritize";
        this.type = CARDTYPES.spell;
        this.text = "Deal Attack damage to biggest minion.";
        this.set = "TB";
        this.manacost = 0;
    }

}

export class LOEA16_19 extends Card {
    constructor() {
        super();
        this.name = "Sun Raider Phaerix";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, add a Blessing of the Sun to your hand.";
        this.set = "LOE";
        this.health = 5;
        this.attack = 5;
        this.manacost = 5;
    }

}

export class BRMA16_4 extends Card {
    constructor() {
        super();
        this.name = "Reverberating Gong";
        this.type = CARDTYPES.spell;
        this.text = "Destroy your opponent's weapon.";
        this.set = "BRM";
        this.manacost = 1;
    }

    //{\"REQ_ENEMY_WEAPON_EQUIPPED\":0}

}

export class LOEA15_2 extends Card {
    constructor() {
        super();
        this.name = "Unstable Portal";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nAdd a random minion to your hand. It costs (3) less.";
        this.set = "LOE";
        this.manacost = 2;
    }

}

export class LOE_012 extends Card {
    constructor() {
        super();
        this.name = "Tomb Pillager";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Add a Coin to your hand.";
        this.set = "LOE";
        this.health = 4;
        this.attack = 5;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Dave Allsop";
        this.flavor = "After the guild broke up, he could no longer raid the tombs.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in the Hall of Explorers, in the League of Explorers adventure.";
    }

    //[\"DEATHRATTLE\"]

}

export class AT_048 extends Card {
    constructor() {
        super();
        this.name = "Healing Wave";
        this.type = CARDTYPES.spell;
        this.text = "Restore #7 Health. Reveal a minion in each deck. If yours costs more, Restore #14 instead.";
        this.set = "TGT";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Luca Zontini";
        this.flavor = "Favored by shaman who study the art of restoration and healing, this spell would feel smug, if it had feelings.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class LOEA07_28 extends Card {
    constructor() {
        super();
        this.name = "Repairs";
        this.type = CARDTYPES.spell;
        this.text = "Restore 10 Health.";
        this.set = "LOE";
        this.manacost = 1;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class XXX_015 extends Card {
    constructor() {
        super();
        this.name = "Crash";
        this.type = CARDTYPES.spell;
        this.text = "Crash the game.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

}

export class CS2_188o extends Card {
    constructor() {
        super();
        this.name = "'Inspired'";
        this.type = CARDTYPES.enchantment;
        this.text = "This minion has +2 Attack this turn.";
        this.set = "EXPERT1";
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class AT_068e extends Card {
    constructor() {
        super();
        this.name = "Bolstered";
        this.type = CARDTYPES.enchantment;
        this.text = "+2/+2.";
        this.set = "TGT";
        this.characterClass = CHARACTERCLASS.warrior;
    }

}

export class AT_102 extends Card {
    constructor() {
        super();
        this.name = "Captured Jormungar";
        this.type = CARDTYPES.minion;
        this.set = "TGT";
        this.health = 9;
        this.attack = 5;
        this.manacost = 7;
        this.artist = "Gonzalo Ordonez";
        this.race = race.beast;
        this.flavor = "You can keep him, but you have to promise to feed him and clean out his tank every day!";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class EX1_298 extends Card {
    constructor() {
        super();
        this.name = "Ragnaros the Firelord";
        this.type = CARDTYPES.minion;
        this.text = "Can't attack. At the end of your turn, deal 8 damage to a random enemy.";
        this.set = "EXPERT1";
        this.health = 8;
        this.attack = 8;
        this.manacost = 8;
        this.artist = "Greg Staples";
        this.flavor = "Ragnaros was summoned by the Dark Iron dwarves, who were eventually enslaved by the Firelord.  Summoning Ragnaros often doesnâ€™t work out the way you want it to.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

}

export class LOEA08_01h extends Card {
    constructor() {
        super();
        this.name = "Heroic Archaedas";
        this.type = CARDTYPES.hero;
        this.set = "LOE";
        this.health = 30;
    }

}

export class EX1_611e extends Card {
    constructor() {
        super();
        this.name = "Trapped";
        this.type = CARDTYPES.enchantment;
        this.text = "Will be <b>Frozen</b> again at the start of the next turn.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.hunter;
    }

}

export class EX1_251 extends Card {
    constructor() {
        super();
        this.name = "Forked Lightning";
        this.type = CARDTYPES.spell;
        this.text = "Deal $2 damage to 2 random enemy minions. <b>Overload:</b> (2)";
        this.set = "EXPERT1";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Ralph Horsley";
        this.flavor = "If you combine it with Spooned Lightning and Knived Lightning, you have the full dining set.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"OVERLOAD\"]
    //{\"REQ_MINIMUM_ENEMY_MINIONS\":2}

}

export class CS1h_001 extends Card {
    constructor() {
        super();
        this.name = "Lesser Heal";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nRestore #2 Health.";
        this.set = "CORE";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.priest;
        this.rarity = rarity.free;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class CRED_10 extends Card {
    constructor() {
        super();
        this.name = "Michael Schweitzer";
        this.type = CARDTYPES.minion;
        this.text = "<b>C-C-C-COMBO:</b> Destroy a minion.";
        this.set = "CREDITS";
        this.health = 2;
        this.attack = 2;
        this.manacost = 2;
        this.rarity = rarity.legendary;
    }

}

export class CS2_112 extends Card {
    constructor() {
        super();
        this.name = "Arcanite Reaper";
        this.type = CARDTYPES.weapon;
        this.set = "CORE";
        this.attack = 5;
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Stefan Kopinski";
        this.flavor = "Noâ€¦ actually you should fear the Reaper.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 51.";
        this.howToEarn = "Unlocked at Level 10.";
        this.durability = "2";
    }

}

export class BRMA03_1 extends Card {
    constructor() {
        super();
        this.name = "Emperor Thaurissan";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class NEW1_005 extends Card {
    constructor() {
        super();
        this.name = "Kidnapper";
        this.type = CARDTYPES.minion;
        this.text = "<b>Combo:</b> Return a minion to its owner's hand.";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 5;
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Dave Allsop";
        this.flavor = "He just wants people to see his vacation photos.";
        this.rarity = rarity.epic;
        this.collectible = true;
        this.targetingArrowText = "Return a minion to hand.";
    }

    //[\"COMBO\"]
    //{\"REQ_TARGET_FOR_COMBO\":0,\"REQ_MINION_TARGET\":0}

}

export class BRMA07_2_2_TB extends Card {
    constructor() {
        super();
        this.name = "ME SMASH";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDestroy a random enemy minion.";
        this.set = "TB";
        this.manacost = 2;
    }

    //{\"REQ_MINIMUM_ENEMY_MINIONS\":1}

}

export class AT_086 extends Card {
    constructor() {
        super();
        this.name = "Saboteur";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Your opponent's Hero Power costs (5) more next turn.";
        this.set = "TGT";
        this.health = 3;
        this.attack = 4;
        this.manacost = 3;
        this.artist = "Greg Staples";
        this.flavor = "Listen all y'all it's a saboteur!";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class BRMA01_3 extends Card {
    constructor() {
        super();
        this.name = "Dark Iron Bouncer";
        this.type = CARDTYPES.minion;
        this.text = "Always wins Brawls.";
        this.set = "BRM";
        this.health = 8;
        this.attack = 4;
        this.manacost = 6;
    }

}

export class NAX13_03 extends Card {
    constructor() {
        super();
        this.name = "Supercharge";
        this.type = CARDTYPES.spell;
        this.text = "Give your minions +2 Health.";
        this.set = "NAXX";
        this.manacost = 2;
    }

}

export class BRMC_84 extends Card {
    constructor() {
        super();
        this.name = "Dragonkin Spellcaster";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Summon two 2/2 Whelps.";
        this.set = "TB";
        this.health = 6;
        this.attack = 4;
        this.manacost = 5;
        this.race = race.dragon;
    }

    //[\"BATTLECRY\"]

}

export class GVG_061 extends Card {
    constructor() {
        super();
        this.name = "Muster for Battle";
        this.type = CARDTYPES.spell;
        this.text = "Summon three 1/1 Silver Hand Recruits. Equip a 1/4 Weapon.";
        this.set = "GVG";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Mike Hayes";
        this.flavor = "\"I'm bringing the guacamole!\" â€“ One of the most successful (yet rare) Silver Hand rallying cries";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class GVG_119 extends Card {
    constructor() {
        super();
        this.name = "Blingtron 3000";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Equip a random weapon for each player.";
        this.set = "GVG";
        this.health = 4;
        this.attack = 3;
        this.manacost = 5;
        this.artist = "Jomaro Kindred";
        this.race = race.mechanical;
        this.flavor = "PREPARE PARTY SERVOS FOR IMMEDIATE DEPLOYMENT.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class LOEA06_02 extends Card {
    constructor() {
        super();
        this.name = "Stonesculpting";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\n Summon a 0/2 Statue for both players.";
        this.set = "LOE";
        this.manacost = 1;
    }

}

export class LOEA09_3aH extends Card {
    constructor() {
        super();
        this.name = "Famished";
        this.type = CARDTYPES.enchantment;
        this.text = "Quite Hungry.";
        this.set = "LOE";
    }

}

export class EX1_023 extends Card {
    constructor() {
        super();
        this.name = "Silvermoon Guardian";
        this.type = CARDTYPES.minion;
        this.text = "<b>Divine Shield</b>";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 3;
        this.manacost = 4;
        this.artist = "Phroilan Gardner";
        this.flavor = "The first time they tried to guard Silvermoon against the scourge, it didnâ€™t go so wellâ€¦";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "HORDE";
    }

    //[\"DIVINE_SHIELD\"]

}

export class AT_006 extends Card {
    constructor() {
        super();
        this.name = "Dalaran Aspirant";
        this.type = CARDTYPES.minion;
        this.text = "<b>Inspire:</b> Gain <b>Spell Damage +1</b>.";
        this.set = "TGT";
        this.health = 5;
        this.attack = 3;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Dan Scott";
        this.flavor = "Is he aspiring or inspiring?  Make up your mind!";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"INSPIRE\"]

}

export class BRMA06_2H extends Card {
    constructor() {
        super();
        this.name = "The Majordomo";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon a 3/3 Flamewaker Acolyte.";
        this.set = "BRM";
        this.manacost = 2;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}

}

export class NAX9_02 extends Card {
    constructor() {
        super();
        this.name = "Lady Blaumeux";
        this.type = CARDTYPES.minion;
        this.text = "Your hero is <b>Immune</b>.";
        this.set = "NAXX";
        this.health = 7;
        this.attack = 1;
        this.manacost = 3;
    }

}

export class AT_013e extends Card {
    constructor() {
        super();
        this.name = "Power Word: Glory";
        this.type = CARDTYPES.enchantment;
        this.text = "When this attacks, restore 4 Health to the hero of the player who buffed it.";
        this.set = "TGT";
    }

}

export class GVG_013 extends Card {
    constructor() {
        super();
        this.name = "Cogmaster";
        this.type = CARDTYPES.minion;
        this.text = "Has +2 Attack while you have a Mech.";
        this.set = "GVG";
        this.health = 2;
        this.attack = 1;
        this.manacost = 1;
        this.artist = "Trent Kaniuga";
        this.flavor = "After a while, you don't see the cogs and sprockets. All you see is a robot, a spider tank, a deathray...";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"AURA\"]

}

export class CS2_106 extends Card {
    constructor() {
        super();
        this.name = "Fiery War Axe";
        this.type = CARDTYPES.weapon;
        this.set = "CORE";
        this.attack = 3;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Lucas Graciano";
        this.flavor = "During times of tranquility and harmony, this weapon was called by its less popular name, Chilly Peace Axe.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 49.";
        this.howToEarn = "Unlocked at Level 1.";
        this.durability = "2";
    }

}

export class TB_012 extends Card {
    constructor() {
        super();
        this.name = "Choose a New Card!";
        this.type = CARDTYPES.spell;
        this.text = "Look at 3 random cards. Choose one and shuffle it into your deck.";
        this.set = "TB";
        this.manacost = 0;
    }

}

export class EX1_246e extends Card {
    constructor() {
        super();
        this.name = "Hexxed";
        this.type = CARDTYPES.enchantment;
        this.text = "This minion has been transformed!";
        this.set = "CORE";
        this.characterClass = CHARACTERCLASS.shaman;
    }

    //[\"MORPH\"]

}

export class TB_Mini_1e extends Card {
    constructor() {
        super();
        this.name = "Miniature";
        this.type = CARDTYPES.enchantment;
        this.text = "Mini-sized, set to 1/1";
        this.set = "TB";
    }

}

export class EX1_584e extends Card {
    constructor() {
        super();
        this.name = "Teachings of the Kirin Tor";
        this.type = CARDTYPES.enchantment;
        this.text = "<b>Spell Damage +1</b>.";
        this.set = "EXPERT1";
    }

}

export class CS2_201 extends Card {
    constructor() {
        super();
        this.name = "Core Hound";
        this.type = CARDTYPES.minion;
        this.set = "CORE";
        this.health = 5;
        this.attack = 9;
        this.manacost = 7;
        this.artist = "E.M. Gist";
        this.race = race.beast;
        this.flavor = "You donâ€™t tame a Core Hound. You just train it to eat someone else before it eats you.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Hunter Level 51.";
    }

}

export class XXX_009 extends Card {
    constructor() {
        super();
        this.name = "Enchant";
        this.type = CARDTYPES.spell;
        this.text = "Enchant a minion with an empty enchant.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class BRMA09_3t extends Card {
    constructor() {
        super();
        this.name = "Old Horde Orc";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "BRM";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
    }

    //[\"TAUNT\"]

}

export class TB_MechWar_Minion1 extends Card {
    constructor() {
        super();
        this.name = "Mech Fan";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "TB";
        this.health = 1;
        this.attack = 1;
        this.manacost = 2;
    }

    //[\"TAUNT\"]

}

export class AT_016e extends Card {
    constructor() {
        super();
        this.name = "Confused";
        this.type = CARDTYPES.enchantment;
        this.text = "Swapped Attack and Health.";
        this.set = "TGT";
        this.characterClass = CHARACTERCLASS.priest;
    }

}

export class GVG_028 extends Card {
    constructor() {
        super();
        this.name = "Trade Prince Gallywix";
        this.type = CARDTYPES.minion;
        this.text = "Whenever your opponent casts a spell, gain a copy of it and give them a Coin.";
        this.set = "GVG";
        this.health = 8;
        this.attack = 5;
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Wei Wang";
        this.flavor = "Gallywix believes in supply and demand. He supplies the beatings and demands you pay up!";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

}

export class LOEA07_12 extends Card {
    constructor() {
        super();
        this.name = "Earthen Pursuer";
        this.type = CARDTYPES.minion;
        this.set = "LOE";
        this.health = 6;
        this.attack = 4;
        this.manacost = 5;
    }

}

export class AT_040 extends Card {
    constructor() {
        super();
        this.name = "Wildwalker";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Give a friendly Beast +3 Health.";
        this.set = "TGT";
        this.health = 4;
        this.attack = 4;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "James Ryman";
        this.flavor = "She was born to be something.  She is just not quite sure what yet...";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_WITH_RACE\":20,\"REQ_FRIENDLY_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class EX1_549 extends Card {
    constructor() {
        super();
        this.name = "Bestial Wrath";
        this.type = CARDTYPES.spell;
        this.text = "Give a friendly Beast +2 Attack and <b>Immune</b> this turn.";
        this.set = "EXPERT1";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "The seething wrath is just beneath the surface.  Beneath that is wild abandon, followed by slight annoyance.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //{\"REQ_TARGET_WITH_RACE\":20,\"REQ_TARGET_TO_PLAY\":0,\"REQ_FRIENDLY_TARGET\":0}

}

export class PART_007 extends Card {
    constructor() {
        super();
        this.name = "Whirling Blades";
        this.type = CARDTYPES.spell;
        this.text = "Give a minion +1 Attack.";
        this.set = "GVG";
        this.manacost = 1;
        this.artist = "Nutchapol Thitinunthakorn";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class AT_116e extends Card {
    constructor() {
        super();
        this.name = "Bring it on!";
        this.type = CARDTYPES.enchantment;
        this.text = "+1 Attack and <b>Taunt</b>.";
        this.set = "TGT";
        this.characterClass = CHARACTERCLASS.priest;
    }

}

export class GVG_101 extends Card {
    constructor() {
        super();
        this.name = "Scarlet Purifier";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry</b>: Deal 2 damage to all minions with <b>Deathrattle</b>.";
        this.set = "GVG";
        this.health = 3;
        this.attack = 4;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Anton Zemskov";
        this.flavor = "The Scarlet Crusade is doing market research to find out if the \"Mauve Crusade\" would be better received.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class EX1_309 extends Card {
    constructor() {
        super();
        this.name = "Siphon Soul";
        this.type = CARDTYPES.spell;
        this.text = "Destroy a minion. Restore #3 Health to your hero.";
        this.set = "EXPERT1";
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Tyler Walpole";
        this.flavor = "You probably should avoid siphoning your own soul.  You might create some kind of weird infinite loop.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class EX1_379 extends Card {
    constructor() {
        super();
        this.name = "Repentance";
        this.type = CARDTYPES.spell;
        this.text = "<b>Secret:</b> When your opponent plays a minion, reduce its Health to 1.";
        this.set = "EXPERT1";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Gonzalo Ordonez";
        this.flavor = "Repentance often comes in the moment before obliteration. Curious.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"SECRET\"]

}

export class NAX5_01 extends Card {
    constructor() {
        super();
        this.name = "Heigan the Unclean";
        this.type = CARDTYPES.hero;
        this.set = "NAXX";
        this.health = 30;
        this.characterClass = CHARACTERCLASS.warlock;
    }

}

export class BRMA01_2 extends Card {
    constructor() {
        super();
        this.name = "Pile On!";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nPut a minion from each deck into the battlefield.";
        this.set = "BRM";
        this.manacost = 0;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}

}

export class NEW1_022 extends Card {
    constructor() {
        super();
        this.name = "Dread Corsair";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt.</b> Costs (1) less per Attack of your weapon.";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 3;
        this.manacost = 4;
        this.artist = "Trent Kaniuga";
        this.race = race.pirate;
        this.flavor = "\"Yarrrr\" is a pirate word that means \"Greetings, milord.\"";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"TAUNT\"]

}

export class EX1_533 extends Card {
    constructor() {
        super();
        this.name = "Misdirection";
        this.type = CARDTYPES.spell;
        this.text = "<b>Secret:</b> When a character attacks your hero, instead he attacks another random character.";
        this.set = "EXPERT1";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Daren Bader";
        this.flavor = "Sometimes it's as simple as putting on a fake mustache and pointing at someone else.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"SECRET\"]

}

export class BRMA06_1 extends Card {
    constructor() {
        super();
        this.name = "Majordomo Executus";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class BRMA14_1 extends Card {
    constructor() {
        super();
        this.name = "Omnotron Defense System";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class BRMA12_6H extends Card {
    constructor() {
        super();
        this.name = "Brood Affliction: Black";
        this.type = CARDTYPES.spell;
        this.text = "While this is in your hand, whenever Chromaggus draws a card, he gets another copy of it.";
        this.set = "BRM";
        this.manacost = 3;
    }

}

export class NAX15_04 extends Card {
    constructor() {
        super();
        this.name = "Chains";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nTake control of a random enemy minion until end of turn.";
        this.set = "NAXX";
        this.manacost = 8;
    }

}

export class NEW1_024o extends Card {
    constructor() {
        super();
        this.name = "Greenskin's Command";
        this.type = CARDTYPES.enchantment;
        this.text = "+1/+1.";
        this.set = "EXPERT1";
    }

}

export class AT_099t extends Card {
    constructor() {
        super();
        this.name = "War Kodo";
        this.type = CARDTYPES.minion;
        this.set = "TGT";
        this.health = 5;
        this.attack = 3;
        this.manacost = 5;
        this.race = race.beast;
    }

}

export class BRMA17_4 extends Card {
    constructor() {
        super();
        this.name = "LAVA!";
        this.type = CARDTYPES.spell;
        this.text = "Deal $2 damage to all minions.";
        this.set = "BRM";
        this.manacost = 2;
    }

}

export class CS2_074 extends Card {
    constructor() {
        super();
        this.name = "Deadly Poison";
        this.type = CARDTYPES.spell;
        this.text = "Give your weapon +2 Attack.";
        this.set = "CORE";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Trevor Jacobs";
        this.flavor = "Rogues guard the secrets to poison-making carefully, lest magi start incorporating poison into their spells.  Poisonbolt? Rain of Poison?  Poison Elemental?  Nobody wants that.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 43.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //{\"REQ_WEAPON_EQUIPPED\":0}

}

export class BRMA17_6H extends Card {
    constructor() {
        super();
        this.name = "Bone Construct";
        this.type = CARDTYPES.minion;
        this.set = "BRM";
        this.health = 2;
        this.attack = 4;
        this.manacost = 1;
    }

}

export class XXX_060 extends Card {
    constructor() {
        super();
        this.name = "Damage All";
        this.type = CARDTYPES.spell;
        this.text = "Set the Health of a character to 0.";
        this.set = "CHEAT";
        this.manacost = 0;
    }

    //[\"ImmuneToSpellpower\"]
    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class CS2_034_H1_AT_132 extends Card {
    constructor() {
        super();
        this.name = "Fireblast Rank 2";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDeal $2 damage.";
        this.set = "HERO_SKINS";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.mage;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class EX1_408 extends Card {
    constructor() {
        super();
        this.name = "Mortal Strike";
        this.type = CARDTYPES.spell;
        this.text = "Deal $4 damage. If you have 12 or less Health, deal $6 instead.";
        this.set = "EXPERT1";
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Zoltan & Gabor";
        this.flavor = "\"If you only use one ability, use Mortal Strike.\" - The Warrior Code, Line 6";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class GVG_010b extends Card {
    constructor() {
        super();
        this.name = "Velen's Chosen";
        this.type = CARDTYPES.enchantment;
        this.text = "+2/+4 and <b>Spell Damage +1</b>.";
        this.set = "GVG";
    }

}

export class CS2_233 extends Card {
    constructor() {
        super();
        this.name = "Blade Flurry";
        this.type = CARDTYPES.spell;
        this.text = "Destroy your weapon and deal its damage to all enemies.";
        this.set = "EXPERT1";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Hideaki Takamura";
        this.flavor = "\"Look, it's not just about waving daggers around really fast.  It's a lot more complicated than that.\" - Shan, Rogue Trainer";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //{\"REQ_WEAPON_EQUIPPED\":0}

}

export class EX1_294 extends Card {
    constructor() {
        super();
        this.name = "Mirror Entity";
        this.type = CARDTYPES.spell;
        this.text = "<b>Secret:</b> When your opponent plays a minion, summon a copy of it.";
        this.set = "EXPERT1";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Raven Mimura";
        this.flavor = "\"You go first.\" - Krush'gor the Behemoth, to his pet boar.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"SECRET\"]

}

export class CS2_155 extends Card {
    constructor() {
        super();
        this.name = "Archmage";
        this.type = CARDTYPES.minion;
        this.text = "<b>Spell Damage +1</b>";
        this.set = "CORE";
        this.health = 7;
        this.attack = 4;
        this.manacost = 6;
        this.artist = "Steve Ellis";
        this.flavor = "You earn the title of Archmage when you can destroy anyone who calls you on it.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "ALLIANCE";
        this.howToEarnGolden = "Unlocked at Mage Level 57.";
    }

    //[\"SPELLPOWER\"]

}

export class FP1_020e extends Card {
    constructor() {
        super();
        this.name = "Vengeance";
        this.type = CARDTYPES.enchantment;
        this.text = "+3/+2.";
        this.set = "NAXX";
        this.characterClass = CHARACTERCLASS.paladin;
    }

}

export class BRMA10_3 extends Card {
    constructor() {
        super();
        this.name = "The Rookery";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nGive all Corrupted Eggs +1 Health, then summon one.";
        this.set = "BRM";
        this.manacost = 1;
    }

}

export class GVG_099 extends Card {
    constructor() {
        super();
        this.name = "Bomb Lobber";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Deal 4 damage to a random enemy minion.";
        this.set = "GVG";
        this.health = 3;
        this.attack = 3;
        this.manacost = 5;
        this.artist = "Luca Zontini";
        this.flavor = "He lobbies Orgrimmar daily on behalf of bombs.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class AT_089 extends Card {
    constructor() {
        super();
        this.name = "Boneguard Lieutenant";
        this.type = CARDTYPES.minion;
        this.text = "<b>Inspire:</b> Gain +1 Health.";
        this.set = "TGT";
        this.health = 2;
        this.attack = 3;
        this.manacost = 2;
        this.artist = "Slawomir Maniak";
        this.flavor = "Underneath all that impressive armor, he's just skin and bones.  Okay, maybe just bones.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"INSPIRE\"]

}

export class EX1_543 extends Card {
    constructor() {
        super();
        this.name = "King Krush";
        this.type = CARDTYPES.minion;
        this.text = "<b>Charge</b>";
        this.set = "EXPERT1";
        this.health = 8;
        this.attack = 8;
        this.manacost = 9;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Alex Horley Orlandelli";
        this.race = race.beast;
        this.flavor = "The best defense against King Krush is to have someone you donâ€™t like standing in front of you.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"CHARGE\"]

}

export class LOE_051 extends Card {
    constructor() {
        super();
        this.name = "Jungle Moonkin";
        this.type = CARDTYPES.minion;
        this.text = "Both players have\n<b>Spell Damage +2</b>.";
        this.set = "LOE";
        this.health = 4;
        this.attack = 4;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Mike Sass";
        this.race = race.beast;
        this.flavor = "The REAL angry chicken!";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in The Ruined City, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in The Ruined City, in the League of Explorers adventure.";
    }

}

export class FP1_003 extends Card {
    constructor() {
        super();
        this.name = "Echoing Ooze";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Summon an exact copy of this minion at the end of the turn.";
        this.set = "NAXX";
        this.health = 2;
        this.attack = 1;
        this.manacost = 2;
        this.artist = "Eric Browning";
        this.flavor = "OOZE... Ooze... Ooze... (ooze...)";
        this.rarity = rarity.epic;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating Sapphiron in the Frostwyrm Lair.";
        this.howToEarn = "Unlocked in Frostwyrm Lair, in the Naxxramas adventure.";
    }

    //[\"BATTLECRY\"]

}

export class NAX1_01 extends Card {
    constructor() {
        super();
        this.name = "Anub'Rekhan";
        this.type = CARDTYPES.hero;
        this.set = "NAXX";
        this.health = 30;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}

}

export class NAX15_01H extends Card {
    constructor() {
        super();
        this.name = "Kel'Thuzad";
        this.type = CARDTYPES.hero;
        this.set = "NAXX";
        this.health = 45;
    }

}

export class EX1_363 extends Card {
    constructor() {
        super();
        this.name = "Blessing of Wisdom";
        this.type = CARDTYPES.spell;
        this.text = "Choose a minion. Whenever it attacks, draw a card.";
        this.set = "EXPERT1";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Chippy";
        this.flavor = "Apparently with wisdom comes the knowledge that you should probably be attacking every turn.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class LOEA16_7 extends Card {
    constructor() {
        super();
        this.name = "Benediction Splinter";
        this.type = CARDTYPES.spell;
        this.text = "Restore #10 Health to ALL characters.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class GVG_048 extends Card {
    constructor() {
        super();
        this.name = "Metaltooth Leaper";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry</b>: Give your other Mechs +2 Attack.";
        this.set = "GVG";
        this.health = 3;
        this.attack = 3;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Hideaki Takamura";
        this.race = race.mechanical;
        this.flavor = "Don't leave them out in the rain. In Un'Goro Crater there is a whole colony of rust-tooth leapers.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class EX1_131 extends Card {
    constructor() {
        super();
        this.name = "Defias Ringleader";
        this.type = CARDTYPES.minion;
        this.text = "<b>Combo:</b> Summon a 2/1 Defias Bandit.";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 2;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Dany Orizio";
        this.flavor = "He stole the deed to town years ago, so technically the town <i>is</i> his. He just calls people Scrub to be mean.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"COMBO\"]

}

export class GVG_116 extends Card {
    constructor() {
        super();
        this.name = "Mekgineer Thermaplugg";
        this.type = CARDTYPES.minion;
        this.text = "Whenever an enemy minion dies, summon a Leper Gnome.";
        this.set = "GVG";
        this.health = 7;
        this.attack = 9;
        this.manacost = 9;
        this.artist = "Trent Kaniuga";
        this.race = race.mechanical;
        this.flavor = "He was obsessed with explosives until he discovered knitting. Now he yells, â€œSWEATERS! MORE SWEATERS!â€";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

}

export class LOEA16_8 extends Card {
    constructor() {
        super();
        this.name = "Putress' Vial";
        this.type = CARDTYPES.spell;
        this.text = "Destroy a random enemy minion.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class XXX_054 extends Card {
    constructor() {
        super();
        this.name = "Weapon Buff";
        this.type = CARDTYPES.spell;
        this.text = "Give your Weapon +100/+100";
        this.set = "CHEAT";
        this.manacost = 0;
    }

}

export class BRMA01_1H extends Card {
    constructor() {
        super();
        this.name = "Coren Direbrew";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class EX1_606 extends Card {
    constructor() {
        super();
        this.name = "Shield Block";
        this.type = CARDTYPES.spell;
        this.text = "Gain 5 Armor.\nDraw a card.";
        this.set = "CORE";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Michael Komarck";
        this.flavor = "Shields were invented because Face Block is USELESS.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 28.";
        this.howToEarn = "Unlocked at Level 8.";
    }

}

export class BRMA09_3H extends Card {
    constructor() {
        super();
        this.name = "Old Horde";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon two 2/2 Orcs with <b>Taunt</b>. Get a new Hero Power.";
        this.set = "BRM";
        this.manacost = 2;
    }

    //[\"BRMA09_2H\",\"BRMA09_4H\",\"BRMA09_5H\"]

}

export class EX1_594 extends Card {
    constructor() {
        super();
        this.name = "Vaporize";
        this.type = CARDTYPES.spell;
        this.text = "<b>Secret:</b> When a minion attacks your hero, destroy it.";
        this.set = "EXPERT1";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Raymond Swanland";
        this.flavor = "Rumor has it that Deathwing brought about the Cataclysm after losing a game to this card.  We may never know the truth.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"SECRET\"]

}

export class EX1_finkle extends Card {
    constructor() {
        super();
        this.name = "Finkle Einhorn";
        this.type = CARDTYPES.minion;
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 3;
        this.manacost = 2;
        this.rarity = rarity.legendary;
    }

}

export class TB_CoOpBossSpell_5 extends Card {
    constructor() {
        super();
        this.name = "Double Zap";
        this.type = CARDTYPES.spell;
        this.text = "Deal Attack damage to both players.";
        this.set = "TB";
        this.manacost = 0;
    }

}

export class GVG_016 extends Card {
    constructor() {
        super();
        this.name = "Fel Reaver";
        this.type = CARDTYPES.minion;
        this.text = "Whenever your opponent plays a card, remove the top 3 cards of your deck.";
        this.set = "GVG";
        this.health = 8;
        this.attack = 8;
        this.manacost = 5;
        this.artist = "Zoltan & Gabor";
        this.race = race.mechanical;
        this.flavor = "So reaver. Much fel. Wow.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class EX1_055 extends Card {
    constructor() {
        super();
        this.name = "Mana Addict";
        this.type = CARDTYPES.minion;
        this.text = "Whenever you cast a spell, gain +2 Attack this turn.";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 1;
        this.manacost = 2;
        this.artist = "Hideaki Takamura";
        this.flavor = "Sheâ€™s trying to kick the habit, but still takes some mana whenever she has a stressful day.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.faction = "ALLIANCE";
        this.textInPlay = "Addicted";
    }

}

export class EX1_017 extends Card {
    constructor() {
        super();
        this.name = "Jungle Panther";
        this.type = CARDTYPES.minion;
        this.text = "<b>Stealth</b>";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 4;
        this.manacost = 3;
        this.artist = "Jaemin Kim";
        this.race = race.beast;
        this.flavor = "Stranglethorn is a beautiful place to visit, but you wouldn't want to live there.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "HORDE";
    }

    //[\"STEALTH\"]

}

export class EX1_137 extends Card {
    constructor() {
        super();
        this.name = "Headcrack";
        this.type = CARDTYPES.spell;
        this.text = "Deal $2 damage to the enemy hero. <b>Combo:</b> Return this to your hand next turn.";
        this.set = "EXPERT1";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "James Zhang";
        this.flavor = "When all else fails, nothing beats a swift whack upside the head.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"COMBO\"]

}

export class EX1_014t extends Card {
    constructor() {
        super();
        this.name = "Bananas";
        this.type = CARDTYPES.spell;
        this.text = "Give a minion +1/+1.";
        this.set = "EXPERT1";
        this.manacost = 1;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class EX1_162 extends Card {
    constructor() {
        super();
        this.name = "Dire Wolf Alpha";
        this.type = CARDTYPES.minion;
        this.text = "Adjacent minions have +1 Attack.";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 2;
        this.manacost = 2;
        this.artist = "John Dickenson";
        this.race = race.beast;
        this.flavor = "We are pretty excited about the upcoming release of Dire Wolf Beta, just repost this sign for a chance at a key.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.textInPlay = "Alpha Dog";
    }

    //[\"ADJACENT_BUFF\",\"AURA\"]

}

export class EX1_575 extends Card {
    constructor() {
        super();
        this.name = "Mana Tide Totem";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, draw a card.";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 0;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Scott Altmann";
        this.race = race.totem;
        this.flavor = "It is said that some shaman can say \"Floatin' totem\" 10 times, fast.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class BRM_029 extends Card {
    constructor() {
        super();
        this.name = "Rend Blackhand";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> If you're holding a Dragon, destroy a <b>Legendary</b> minion.";
        this.set = "BRM";
        this.health = 4;
        this.attack = 8;
        this.manacost = 7;
        this.artist = "Alex Horley";
        this.flavor = "Rend believes he is the True Warchief of the Horde and he keeps editing the wikipedia page for \"Warchief of the Horde\" to include his picture.";
        this.rarity = rarity.legendary;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after completing Blackrock Spire.";
        this.howToEarn = "Unlocked in Blackrock Spire, in the Blackrock Mountain adventure.";
        this.targetingArrowText = "Destroy a Legend.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_LEGENDARY_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE_AND_DRAGON_IN_HAND\":0}

}

export class GVG_030b extends Card {
    constructor() {
        super();
        this.name = "Tank Mode";
        this.type = CARDTYPES.spell;
        this.text = "+1 Health.";
        this.set = "GVG";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
    }

}

export class AT_090e extends Card {
    constructor() {
        super();
        this.name = "Might of the Monkey";
        this.type = CARDTYPES.enchantment;
        this.text = "+1/+1.";
        this.set = "TGT";
    }

}

export class EX1_011 extends Card {
    constructor() {
        super();
        this.name = "Voodoo Doctor";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Restore 2 Health.";
        this.set = "CORE";
        this.health = 1;
        this.attack = 2;
        this.manacost = 1;
        this.artist = "Karl Richardson";
        this.flavor = "Voodoo is an oft-misunderstood art. But it <i>is</i> art.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.faction = "HORDE";
        this.howToEarnGolden = "Unlocked at Rogue Level 55.";
        this.targetingArrowText = "Restore 2 Health.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class AT_024 extends Card {
    constructor() {
        super();
        this.name = "Demonfuse";
        this.type = CARDTYPES.spell;
        this.text = "Give a Demon +3/+3. Give your opponent a Mana Crystal.";
        this.set = "TGT";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Kevin Chen";
        this.flavor = "Very dangerous when attached to a demonbomb.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_WITH_RACE\":15,\"REQ_TARGET_TO_PLAY\":0}

}

export class PART_001 extends Card {
    constructor() {
        super();
        this.name = "Armor Plating";
        this.type = CARDTYPES.spell;
        this.text = "Give a minion +1 Health.";
        this.set = "GVG";
        this.manacost = 1;
        this.artist = "Nutchapol Thitinunthakorn";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class TU4e_002 extends Card {
    constructor() {
        super();
        this.name = "Flames of Azzinoth";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon two 2/1 minions.";
        this.set = "MISSIONS";
        this.manacost = 2;
    }

    //{\"REQ_NUM_MINION_SLOTS\":2}

}

export class BRM_010 extends Card {
    constructor() {
        super();
        this.name = "Druid of the Flame";
        this.type = CARDTYPES.minion;
        this.text = "<b>Choose One</b> - Transform into a 5/2 minion; or a 2/5 minion.";
        this.set = "BRM";
        this.health = 2;
        this.attack = 2;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Stanley Lau";
        this.flavor = "Druids who fought too long in Northrend were easily seduced by Ragnaros; a mug of hot chocolate was generally all it took.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating Garr in Molten Core.";
        this.howToEarn = "Unlocked in Molten Core, in the Blackrock Mountain adventure.";
    }

}

export class FP1_016 extends Card {
    constructor() {
        super();
        this.name = "Wailing Soul";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry: Silence</b> your other minions.";
        this.set = "NAXX";
        this.health = 5;
        this.attack = 3;
        this.manacost = 4;
        this.artist = "Glenn Rane";
        this.flavor = "This soul just <i>wails</i> on you. Dang, soul, let up already.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating Thaddius in the Construct Quarter.";
        this.howToEarn = "Unlocked in The Construct Quarter, in the Naxxramas adventure.";
    }

    //[\"BATTLECRY\"]

}

export class LOEA16_13 extends Card {
    constructor() {
        super();
        this.name = "Eye of Orsis";
        this.type = CARDTYPES.spell;
        this.text = "<b>Discover</b> a minion and gain 3 copies of it.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class GVG_050 extends Card {
    constructor() {
        super();
        this.name = "Bouncing Blade";
        this.type = CARDTYPES.spell;
        this.text = "Deal $1 damage to a random minion. Repeat until a minion dies.";
        this.set = "GVG";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Andrew Hou";
        this.flavor = "Only goblins would think this was a good idea. Even they are starting to have their doubts.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //{\"REQ_MINIMUM_TOTAL_MINIONS\":1}

}

export class BRMA13_7 extends Card {
    constructor() {
        super();
        this.name = "Whirling Ash";
        this.type = CARDTYPES.minion;
        this.text = "<b>Windfury</b>";
        this.set = "BRM";
        this.health = 5;
        this.attack = 4;
        this.manacost = 0;
    }

    //[\"WINDFURY\"]

}

export class LOE_007 extends Card {
    constructor() {
        super();
        this.name = "Curse of Rafaam";
        this.type = CARDTYPES.spell;
        this.text = "Give your opponent a 'Cursed!' card.\nWhile they hold it, they take 2 damage on their turn.";
        this.set = "LOE";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "This is what happens when Rafaam stubs his toe unexpectedly.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in the Hall of Explorers, in the League of Explorers adventure.";
    }

}

export class AT_023 extends Card {
    constructor() {
        super();
        this.name = "Void Crusher";
        this.type = CARDTYPES.minion;
        this.text = "<b>Inspire:</b> Destroy a random minion for each player.";
        this.set = "TGT";
        this.health = 4;
        this.attack = 5;
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Skan Srisuwan";
        this.race = race.demon;
        this.flavor = "We like to call him \"Wesley\".";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"INSPIRE\"]

}

export class TBST_002 extends Card {
    constructor() {
        super();
        this.name = "OLDN3wb Mage";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, deal 1 damage to random enemy minion.";
        this.set = "TB";
        this.health = 1;
        this.attack = 2;
        this.manacost = 1;
    }

}

export class EX1_278 extends Card {
    constructor() {
        super();
        this.name = "Shiv";
        this.type = CARDTYPES.spell;
        this.text = "Deal $1 damage. Draw a card.";
        this.set = "CORE";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Alex Garner";
        this.flavor = "Rogues are experts at SHIV-al-ry.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 45.";
        this.howToEarn = "Unlocked at Level 6.";
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class FP1_024 extends Card {
    constructor() {
        super();
        this.name = "Unstable Ghoul";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>. <b>Deathrattle:</b> Deal 1 damage to all minions.";
        this.set = "NAXX";
        this.health = 3;
        this.attack = 1;
        this.manacost = 2;
        this.artist = "Mike Nicholson";
        this.flavor = "Filling your Ghouls with Rocket Fuel is all the rage at Necromancer school.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating Heigan the Unclean in the Plague Quarter.";
        this.howToEarn = "Unlocked in The Plague Quarter, in the Naxxramas adventure.";
    }

    //[\"DEATHRATTLE\",\"TAUNT\"]

}

export class TB_PickYourFate_8_EnchRand extends Card {
    constructor() {
        super();
        this.name = "Fate 8 Rand 2 armor each turn";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
    }

}

export class EX1_044 extends Card {
    constructor() {
        super();
        this.name = "Questing Adventurer";
        this.type = CARDTYPES.minion;
        this.text = "Whenever you play a card, gain +1/+1.";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 2;
        this.manacost = 3;
        this.artist = "Attila Adorjany";
        this.flavor = "\"Does anyone have some extra Boar Pelts?\"";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.faction = "ALLIANCE";
        this.textInPlay = "Questing";
    }

}

export class EX1_538 extends Card {
    constructor() {
        super();
        this.name = "Unleash the Hounds";
        this.type = CARDTYPES.spell;
        this.text = "For each enemy minion, summon a 1/1 Hound with <b>Charge</b>.";
        this.set = "EXPERT1";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Linggar Bramanty";
        this.flavor = "You must read the name of this card out loud each time you play it.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1,\"REQ_MINIMUM_ENEMY_MINIONS\":1}

}

export class EX1_345t extends Card {
    constructor() {
        super();
        this.name = "Shadow of Nothing";
        this.type = CARDTYPES.minion;
        this.text = "Mindgames whiffed! Your opponent had no minions!";
        this.set = "EXPERT1";
        this.health = 1;
        this.attack = 0;
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.priest;
        this.rarity = rarity.epic;
    }

}

export class CS2_084e extends Card {
    constructor() {
        super();
        this.name = "Hunter's Mark";
        this.type = CARDTYPES.enchantment;
        this.text = "This minion has 1 Health.";
        this.set = "CORE";
        this.characterClass = CHARACTERCLASS.hunter;
    }

}

export class NAX5_03 extends Card {
    constructor() {
        super();
        this.name = "Mindpocalypse";
        this.type = CARDTYPES.spell;
        this.text = "Both players draw 2 cards and gain a Mana Crystal.";
        this.set = "NAXX";
        this.manacost = 2;
    }

}

export class BRMA05_2 extends Card {
    constructor() {
        super();
        this.name = "Ignite Mana";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDeal 5 damage to the enemy hero if they have any unspent Mana.";
        this.set = "BRM";
        this.manacost = 0;
    }

}

export class GVG_121 extends Card {
    constructor() {
        super();
        this.name = "Clockwork Giant";
        this.type = CARDTYPES.minion;
        this.text = "Costs (1) less for each card in your opponent's hand.";
        this.set = "GVG";
        this.health = 8;
        this.attack = 8;
        this.manacost = 12;
        this.artist = "Dan Scott";
        this.race = race.mechanical;
        this.flavor = "He and Mountain Giant don't get along.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class LOE_003 extends Card {
    constructor() {
        super();
        this.name = "Ethereal Conjurer";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry: Discover</b> a spell.";
        this.set = "LOE";
        this.health = 3;
        this.attack = 6;
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Ben Zhang";
        this.flavor = "Despite the name, he's a solid conjurer.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in Uldaman, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in Uldaman, in the League of Explorers adventure.";
    }

    //[\"BATTLECRY\"]

}

export class EX1_164 extends Card {
    constructor() {
        super();
        this.name = "Nourish";
        this.type = CARDTYPES.spell;
        this.text = "<b>Choose One</b> - Gain 2 Mana Crystals; or Draw 3 cards.";
        this.set = "EXPERT1";
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Terese Nielsen";
        this.flavor = "Druids take nourishment from many things: the power of nature, the songbird's chirp, a chocolate cake.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class GVG_017 extends Card {
    constructor() {
        super();
        this.name = "Call Pet";
        this.type = CARDTYPES.spell;
        this.text = "Draw a card.\nIf it's a Beast, it costs (4) less.";
        this.set = "GVG";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "E.M. Gist";
        this.flavor = "Real hunters tame hungry crabs.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class NAX9_07 extends Card {
    constructor() {
        super();
        this.name = "Mark of the Horsemen";
        this.type = CARDTYPES.spell;
        this.text = "Give your minions and your weapon +1/+1.";
        this.set = "NAXX";
        this.manacost = 5;
    }

}

export class BRMC_90 extends Card {
    constructor() {
        super();
        this.name = "Living Lava";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "TB";
        this.health = 6;
        this.attack = 6;
        this.manacost = 2;
    }

    //[\"TAUNT\"]

}

export class TB_BlingBrawl_Hero1 extends Card {
    constructor() {
        super();
        this.name = "Valeera Sanguinar";
        this.type = CARDTYPES.hero;
        this.set = "TB";
        this.health = 30;
        this.characterClass = CHARACTERCLASS.rogue;
        this.rarity = rarity.free;
    }

    //{\"REQ_WEAPON_EQUIPPED\":0}

}

export class NEW1_009 extends Card {
    constructor() {
        super();
        this.name = "Healing Totem";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, restore 1 Health to all friendly minions.";
        this.set = "CORE";
        this.health = 2;
        this.attack = 0;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.shaman;
        this.race = race.totem;
        this.rarity = rarity.free;
    }

}

export class BRM_022 extends Card {
    constructor() {
        super();
        this.name = "Dragon Egg";
        this.type = CARDTYPES.minion;
        this.text = "Whenever this minion takes damage, summon a 2/1 Whelp.";
        this.set = "BRM";
        this.health = 2;
        this.attack = 0;
        this.manacost = 1;
        this.artist = "Jaemin Kim";
        this.flavor = "Think of them as bullets for your dragon gun.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating Rend Blackhand in Blackrock Spire.";
        this.howToEarn = "Unlocked in Blackrock Spire, in the Blackrock Mountain adventure.";
    }

}

export class BRMA12_8 extends Card {
    constructor() {
        super();
        this.name = "Chromatic Mutation";
        this.type = CARDTYPES.spell;
        this.text = "Transform a minion into a 2/2 Chromatic Dragonkin.";
        this.set = "BRM";
        this.manacost = 2;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class TB_PickYourFate_1_Ench extends Card {
    constructor() {
        super();
        this.name = "Pick Your Fate 1 Ench";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
    }

}

export class EX1_565 extends Card {
    constructor() {
        super();
        this.name = "Flametongue Totem";
        this.type = CARDTYPES.minion;
        this.text = "Adjacent minions have +2 Attack.";
        this.set = "CORE";
        this.health = 3;
        this.attack = 0;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Jonathan Ryder";
        this.race = race.totem;
        this.flavor = "Totemsmiths like to use the rarest woods for their totems.  There are even rumors of totems made of Ironbark Protectors.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 43.";
        this.howToEarn = "Unlocked at Level 4.";
        this.textInPlay = "Flametongue";
    }

    //[\"ADJACENT_BUFF\",\"AURA\"]

}

export class LOEA04_24h extends Card {
    constructor() {
        super();
        this.name = "Anubisath Temple Guard";
        this.type = CARDTYPES.minion;
        this.set = "LOE";
        this.health = 15;
        this.attack = 6;
        this.manacost = 8;
    }

}

export class BRMA17_2 extends Card {
    constructor() {
        super();
        this.name = "Nefarian";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class BRMA17_5 extends Card {
    constructor() {
        super();
        this.name = "Bone Minions";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon two 2/1 Bone Constructs.";
        this.set = "BRM";
        this.manacost = 2;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}

}

export class BRMC_92 extends Card {
    constructor() {
        super();
        this.name = "Coren Direbrew";
        this.type = CARDTYPES.minion;
        this.text = "Always wins Brawls.\n <b>Battlecry:</b> Add a Brawl to your hand.";
        this.set = "TB";
        this.health = 8;
        this.attack = 4;
        this.manacost = 4;
        this.rarity = rarity.legendary;
    }

    //[\"BATTLECRY\"]

}

export class LOEA09_1H extends Card {
    constructor() {
        super();
        this.name = "Heroic Slitherspear";
        this.type = CARDTYPES.hero;
        this.set = "LOE";
        this.health = 30;
    }

}

export class NAX3_03 extends Card {
    constructor() {
        super();
        this.name = "Necrotic Poison";
        this.type = CARDTYPES.spell;
        this.text = "Destroy a minion.";
        this.set = "NAXX";
        this.manacost = 2;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class EX1_165 extends Card {
    constructor() {
        super();
        this.name = "Druid of the Claw";
        this.type = CARDTYPES.minion;
        this.text = "<b>Choose One -</b> <b>Charge</b>; or +2 Health and <b>Taunt</b>.";
        this.set = "EXPERT1";
        this.health = 4;
        this.attack = 4;
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Luca Zontini";
        this.flavor = "Cat or Bear?  Cat or Bear?!  I just cannot CHOOSE!";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class AT_005t extends Card {
    constructor() {
        super();
        this.name = "Boar";
        this.type = CARDTYPES.minion;
        this.text = "<b>Charge</b>";
        this.set = "TGT";
        this.health = 2;
        this.attack = 4;
        this.manacost = 3;
        this.race = race.beast;
    }

    //[\"CHARGE\"]

}

export class BRMA15_2 extends Card {
    constructor() {
        super();
        this.name = "The Alchemist";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Passive Hero Power</b>\nWhenever a minion is summoned, swap its Attack and Health.";
        this.set = "BRM";
        this.manacost = 0;
    }

}

export class EX1_274 extends Card {
    constructor() {
        super();
        this.name = "Ethereal Arcanist";
        this.type = CARDTYPES.minion;
        this.text = "If you control a <b>Secret</b> at the end of your turn, gain +2/+2.";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 3;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Michael Komarck";
        this.flavor = "The ethereals are wrapped in cloth to give form to their non-corporeal bodies. Also because it's nice and soft.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class NAX9_05H extends Card {
    constructor() {
        super();
        this.name = "Runeblade";
        this.type = CARDTYPES.weapon;
        this.text = "Has +6 Attack if the other Horsemen are dead.";
        this.set = "NAXX";
        this.attack = 2;
        this.manacost = 3;
        this.durability = "3";
    }

}

export class AT_018 extends Card {
    constructor() {
        super();
        this.name = "Confessor Paletress";
        this.type = CARDTYPES.minion;
        this.text = "<b>Inspire:</b> Summon a random <b>Legendary</b> minion.";
        this.set = "TGT";
        this.health = 4;
        this.attack = 5;
        this.manacost = 7;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Chris Rahn";
        this.flavor = "She sees into your past and makes you face your fears.  Most common fear:  Getting Majordomo out of Sneed's Old Shredder.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"INSPIRE\"]

}

export class EX1_612o extends Card {
    constructor() {
        super();
        this.name = "Power of the Kirin Tor";
        this.type = CARDTYPES.enchantment;
        this.text = "Your next Secret costs (0).";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.mage;
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class LOE_011 extends Card {
    constructor() {
        super();
        this.name = "Reno Jackson";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> If your deck contains no more than 1 of any card, fully heal your hero.";
        this.set = "LOE";
        this.health = 6;
        this.attack = 4;
        this.manacost = 6;
        this.artist = "Tyson Murphy";
        this.flavor = "Reno is a four-time winner of the 'Best Accessorized Explorer' award.";
        this.rarity = rarity.legendary;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in the Temple of Orsis, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in the Temple of Orsis, in the League of Explorers adventure.";
    }

    //[\"BATTLECRY\"]

}

export class LOEA04_28 extends Card {
    constructor() {
        super();
        this.name = "A Glowing Pool";
        this.type = CARDTYPES.spell;
        this.text = "<b>Drink?</b>";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class CRED_13 extends Card {
    constructor() {
        super();
        this.name = "Brian Schwab";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, give a random minion +1 Attack.";
        this.set = "CREDITS";
        this.health = 10;
        this.attack = 10;
        this.manacost = 10;
        this.rarity = rarity.legendary;
    }

}

export class EX1_110t extends Card {
    constructor() {
        super();
        this.name = "Baine Bloodhoof";
        this.type = CARDTYPES.minion;
        this.set = "EXPERT1";
        this.health = 5;
        this.attack = 4;
        this.manacost = 4;
        this.rarity = rarity.legendary;
    }

}

export class AT_082e extends Card {
    constructor() {
        super();
        this.name = "Training";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Attack.";
        this.set = "TGT";
    }

}

export class BRMC_86 extends Card {
    constructor() {
        super();
        this.name = "Atramedes";
        this.type = CARDTYPES.minion;
        this.text = "Whenever your opponent plays a card, gain +2 Attack.";
        this.set = "TB";
        this.health = 8;
        this.attack = 2;
        this.manacost = 4;
        this.race = race.dragon;
        this.rarity = rarity.legendary;
    }

}

export class EX1_084e extends Card {
    constructor() {
        super();
        this.name = "Charge";
        this.type = CARDTYPES.enchantment;
        this.text = "Warsong Commander is granting this minion +1 Attack.";
        this.set = "CORE";
        this.characterClass = CHARACTERCLASS.warrior;
    }

}

export class GVG_098 extends Card {
    constructor() {
        super();
        this.name = "Gnomeregan Infantry";
        this.type = CARDTYPES.minion;
        this.text = "<b>Charge</b>\n<b>Taunt</b>";
        this.set = "GVG";
        this.health = 4;
        this.attack = 1;
        this.manacost = 3;
        this.artist = "Zoltan & Gabor";
        this.flavor = "The gnomes are valiant and ready to return to their irradiated, poorly ventilated homeland!";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"CHARGE\",\"TAUNT\"]

}

export class GVG_076 extends Card {
    constructor() {
        super();
        this.name = "Explosive Sheep";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Deal 2 damage to all minions.";
        this.set = "GVG";
        this.health = 1;
        this.attack = 1;
        this.manacost = 2;
        this.artist = "Ralph Horsley";
        this.race = race.mechanical;
        this.flavor = "How is this supposed to work?  Your enemies think, \"<i>Hey!</i> Cute sheep!\" and run over to cuddle it?";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"DEATHRATTLE\"]

}

export class CS2_227 extends Card {
    constructor() {
        super();
        this.name = "Venture Co. Mercenary";
        this.type = CARDTYPES.minion;
        this.text = "Your minions cost (3) more.";
        this.set = "EXPERT1";
        this.health = 6;
        this.attack = 7;
        this.manacost = 5;
        this.artist = "John Polidora";
        this.flavor = "No Job is too big.  No fee is too big.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "HORDE";
    }

    //[\"AURA\"]

}

export class CS2_102_H1_AT_132 extends Card {
    constructor() {
        super();
        this.name = "Tank Up!";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nGain 4 Armor.";
        this.set = "HERO_SKINS";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.warrior;
    }

}

export class AT_056 extends Card {
    constructor() {
        super();
        this.name = "Powershot";
        this.type = CARDTYPES.spell;
        this.text = "Deal $2 damage to a minion and the minions next to it.";
        this.set = "TGT";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Jonboy Meyers";
        this.flavor = "pow POW pow";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class AT_106 extends Card {
    constructor() {
        super();
        this.name = "Light's Champion";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> <b>Silence</b> a Demon.";
        this.set = "TGT";
        this.health = 3;
        this.attack = 4;
        this.manacost = 3;
        this.artist = "Andrea Uderzo";
        this.flavor = "When there's something strange (say, a gibbering demon) in your neighborhood, who are you going to call?";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.targetingArrowText = "<b>Silence</b> a Demon.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_WITH_RACE\":15,\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class NEW1_007b extends Card {
    constructor() {
        super();
        this.name = "Starfall";
        this.type = CARDTYPES.spell;
        this.text = "Deal $5 damage to a minion.";
        this.set = "EXPERT1";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class CS2_101 extends Card {
    constructor() {
        super();
        this.name = "Reinforce";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon a 1/1 Silver Hand Recruit.";
        this.set = "CORE";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.paladin;
        this.rarity = rarity.free;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}

}

export class BRMA15_1H extends Card {
    constructor() {
        super();
        this.name = "Maloriak";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class CS2_169 extends Card {
    constructor() {
        super();
        this.name = "Young Dragonhawk";
        this.type = CARDTYPES.minion;
        this.text = "<b>Windfury</b>";
        this.set = "EXPERT1";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
        this.artist = "Greg Hildebrandt";
        this.race = race.beast;
        this.flavor = "They were the inspiration for the championship Taurenball team: The Dragonhawks.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "HORDE";
    }

    //[\"WINDFURY\"]

}

export class EX1_304 extends Card {
    constructor() {
        super();
        this.name = "Void Terror";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Destroy the minions on either side of this minion and gain their Attack and Health.";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 3;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Alexander Alexandrov";
        this.race = race.demon;
        this.flavor = "If you put this into your deck, you WILL lose the trust of your other minions.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class LOE_105e extends Card {
    constructor() {
        super();
        this.name = "Explorer's Hat";
        this.type = CARDTYPES.enchantment;
        this.text = "+1/+1. <b>Deathrattle:</b> Add an Explorer's Hat to your hand.";
        this.set = "LOE";
        this.characterClass = CHARACTERCLASS.hunter;
    }

}

export class AT_078 extends Card {
    constructor() {
        super();
        this.name = "Enter the Coliseum";
        this.type = CARDTYPES.spell;
        this.text = "Destroy all minions except each player's highest Attack minion.";
        this.set = "TGT";
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Mauricio Herrera";
        this.flavor = "You have to get past the vendors first.  So many are lost to shopping...";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class Mekka4 extends Card {
    constructor() {
        super();
        this.name = "Poultryizer";
        this.type = CARDTYPES.minion;
        this.text = "At the start of your turn, transform a random minion into a 1/1 Chicken.";
        this.set = "PROMO";
        this.health = 3;
        this.attack = 0;
        this.manacost = 1;
        this.race = race.mechanical;
        this.rarity = rarity.common;
        this.faction = "ALLIANCE";
    }

}

export class EX1_154b extends Card {
    constructor() {
        super();
        this.name = "Wrath";
        this.type = CARDTYPES.spell;
        this.text = "Deal $1 damage to a minion. Draw a card.";
        this.set = "EXPERT1";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class FP1_025 extends Card {
    constructor() {
        super();
        this.name = "Reincarnate";
        this.type = CARDTYPES.spell;
        this.text = "Destroy a minion, then return it to life with full Health.";
        this.set = "NAXX";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Dan Scott";
        this.flavor = "It's like birth, except you're an adult and you were just dead a second ago.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after completing the Shaman Class Challenge in Naxxramas.";
        this.howToEarn = "Unlocked in The Military Quarter, in the Naxxramas adventure.";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class EX1_339 extends Card {
    constructor() {
        super();
        this.name = "Thoughtsteal";
        this.type = CARDTYPES.spell;
        this.text = "Copy 2 cards from your opponent's deck and put them into your hand.";
        this.set = "EXPERT1";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Alex Garner";
        this.flavor = "\"What do you get when you cast Thoughtsteal on an Orc?  Nothing!\" - Tauren joke";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class BRMA02_2t extends Card {
    constructor() {
        super();
        this.name = "Dark Iron Spectator";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "BRM";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
    }

    //[\"TAUNT\"]

}

export class CS2_013 extends Card {
    constructor() {
        super();
        this.name = "Wild Growth";
        this.type = CARDTYPES.spell;
        this.text = "Gain an empty Mana Crystal.";
        this.set = "CORE";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "James Ryman";
        this.flavor = "Grow your own mana crystals with this Mana Crystal Growth Kit, only 39.99!";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 23.";
        this.howToEarn = "Unlocked at Level 1.";
    }

}

export class AT_077e extends Card {
    constructor() {
        super();
        this.name = "Extra Poke";
        this.type = CARDTYPES.enchantment;
        this.text = "+1 Durability.";
        this.set = "TGT";
    }

}

export class TB_PickYourFate_9 extends Card {
    constructor() {
        super();
        this.name = "Deathrattle Bonus";
        this.type = CARDTYPES.spell;
        this.text = "Your <b>Deathrattle</b> minions have +1/+1.";
        this.set = "TB";
        this.manacost = 0;
    }

}

export class CS2_059o extends Card {
    constructor() {
        super();
        this.name = "Blood Pact";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Health.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.warlock;
    }

}

export class EX1_613e extends Card {
    constructor() {
        super();
        this.name = "VanCleef's Vengeance";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased stats.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.rogue;
    }

}

export class AT_079 extends Card {
    constructor() {
        super();
        this.name = "Mysterious Challenger";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Put one of each <b>Secret</b> from your deck into the battlefield.";
        this.set = "TGT";
        this.health = 6;
        this.attack = 6;
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Zoltan Boros";
        this.flavor = "He may sound surly and antisocial, but he's actually just really shy.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class EX1_110 extends Card {
    constructor() {
        super();
        this.name = "Cairne Bloodhoof";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Summon a 4/5 Baine Bloodhoof.";
        this.set = "EXPERT1";
        this.health = 5;
        this.attack = 4;
        this.manacost = 6;
        this.artist = "Wayne Reynolds";
        this.flavor = "Cairne was killed by Garrosh, so... don't put this guy in a Warrior deck.  It's pretty insensitive.";
        this.rarity = rarity.legendary;
        this.collectible = true;
        this.faction = "ALLIANCE";
    }

    //[\"DEATHRATTLE\"]

}

export class EX1_295 extends Card {
    constructor() {
        super();
        this.name = "Ice Block";
        this.type = CARDTYPES.spell;
        this.text = "<b>Secret:</b> When your hero takes fatal damage, prevent it and become <b>Immune</b> this turn.";
        this.set = "EXPERT1";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Carl Frank";
        this.flavor = "Ice is nice, and will suffice!";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //[\"SECRET\"]

}

export class EX1_112 extends Card {
    constructor() {
        super();
        this.name = "Gelbin Mekkatorque";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Summon an AWESOME invention.";
        this.set = "PROMO";
        this.health = 6;
        this.attack = 6;
        this.manacost = 6;
        this.artist = "Ludo Lullabi";
        this.flavor = "He's the leader of the gnomes, and an incredible inventor.  He's getting better, too; He turns things into chickens WAY less than he used to.";
        this.rarity = rarity.legendary;
        this.collectible = true;
        this.faction = "ALLIANCE";
        this.howToEarnGolden = "This was rewarded to players who helped test the Store during the Beta.";
    }

    //[\"BATTLECRY\"]
    //[\"Mekka1\",\"Mekka2\",\"Mekka3\",\"Mekka4\"]

}

export class EX1_398 extends Card {
    constructor() {
        super();
        this.name = "Arathi Weaponsmith";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Equip a 2/2 weapon.";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 3;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Samwise";
        this.flavor = "50% off fist weapons, limited time only!";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class BRMA17_6 extends Card {
    constructor() {
        super();
        this.name = "Bone Construct";
        this.type = CARDTYPES.minion;
        this.set = "BRM";
        this.health = 1;
        this.attack = 2;
        this.manacost = 1;
    }

}

export class GVG_112 extends Card {
    constructor() {
        super();
        this.name = "Mogor the Ogre";
        this.type = CARDTYPES.minion;
        this.text = "All minions have a 50% chance to attack the wrong enemy.";
        this.set = "GVG";
        this.health = 6;
        this.attack = 7;
        this.manacost = 6;
        this.artist = "Michal Ivan";
        this.flavor = "Mogor helped reopen the Dark Portal once. You know you're in trouble when you have to rely on an ogre.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

}

export class CRED_40 extends Card {
    constructor() {
        super();
        this.name = "Ryan Masterson";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Cast copies of Backstab, Cold Blood, and Eviscerate. <i>(targets chosen randomly).</i>";
        this.set = "CREDITS";
        this.health = 2;
        this.attack = 7;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.rogue;
        this.rarity = rarity.legendary;
    }

}

export class GVG_043 extends Card {
    constructor() {
        super();
        this.name = "Glaivezooka";
        this.type = CARDTYPES.weapon;
        this.text = "<b>Battlecry:</b> Give a random friendly minion +1 Attack.";
        this.set = "GVG";
        this.attack = 2;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Gino Whitehall";
        this.flavor = "For the times when a regular bazooka just isn't enough.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.durability = "2";
    }

    //[\"BATTLECRY\"]

}

export class BRMA04_1H extends Card {
    constructor() {
        super();
        this.name = "Garr";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 45;
    }

}

export class LOEA04_31b extends Card {
    constructor() {
        super();
        this.name = "No Way!";
        this.type = CARDTYPES.spell;
        this.text = "Do nothing.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class LOEA04_29a extends Card {
    constructor() {
        super();
        this.name = "Touch It";
        this.type = CARDTYPES.spell;
        this.text = "Restore 10 Health to your hero.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class EX1_625 extends Card {
    constructor() {
        super();
        this.name = "Shadowform";
        this.type = CARDTYPES.spell;
        this.text = "Your Hero Power becomes 'Deal 2 damage'. If already in Shadowform: 3 damage.";
        this.set = "EXPERT1";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "If a bright light shines on a priest in Shadowformâ€¦ do they cast a shadow?";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class NAX13_01 extends Card {
    constructor() {
        super();
        this.name = "Thaddius";
        this.type = CARDTYPES.hero;
        this.set = "NAXX";
        this.health = 30;
    }

}

export class EX1_050 extends Card {
    constructor() {
        super();
        this.name = "Coldlight Oracle";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Each player draws 2 cards.";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 2;
        this.manacost = 3;
        this.artist = "Steve Prescott";
        this.race = race.murloc;
        this.flavor = "They can see the future.   In that future both players draw more cards.   Spoooky.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class AT_086e extends Card {
    constructor() {
        super();
        this.name = "Villainy";
        this.type = CARDTYPES.enchantment;
        this.text = "Your Hero Power costs (5) more this turn.";
        this.set = "TGT";
    }

}

export class EX1_130 extends Card {
    constructor() {
        super();
        this.name = "Noble Sacrifice";
        this.type = CARDTYPES.spell;
        this.text = "<b>Secret:</b> When an enemy attacks, summon a 2/1 Defender as the new target.";
        this.set = "EXPERT1";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Zoltan & Gabor";
        this.flavor = "We will always remember you, \"Defender!\"";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"SECRET\"]

}

export class NEW1_034 extends Card {
    constructor() {
        super();
        this.name = "Huffer";
        this.type = CARDTYPES.minion;
        this.text = "<b>Charge</b>";
        this.set = "CORE";
        this.health = 2;
        this.attack = 4;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.hunter;
        this.race = race.beast;
        this.rarity = rarity.common;
    }

    //[\"CHARGE\"]

}

export class TB_014 extends Card {
    constructor() {
        super();
        this.name = "Choose a New Card!";
        this.type = CARDTYPES.spell;
        this.text = "Look at 3 random cards. Choose one and put it into your hand.";
        this.set = "TB";
        this.manacost = 0;
    }

}

export class EX1_557 extends Card {
    constructor() {
        super();
        this.name = "Nat Pagle";
        this.type = CARDTYPES.minion;
        this.text = "At the start of your turn, you have a 50% chance to draw an extra card.";
        this.set = "EXPERT1";
        this.health = 4;
        this.attack = 0;
        this.manacost = 2;
        this.artist = "Steve Prescott";
        this.flavor = "Nat Pagle, Azeroth's premier fisherman!  He invented the Auto-Angler 3000, the Extendo-Pole 3000, and the Lure-o-matic 2099 (still in testing).";
        this.rarity = rarity.legendary;
        this.collectible = true;
        this.textInPlay = "Fishing";
    }

}

export class DREAM_02 extends Card {
    constructor() {
        super();
        this.name = "Ysera Awakens";
        this.type = CARDTYPES.spell;
        this.text = "Deal $5 damage to all characters except Ysera.";
        this.set = "EXPERT1";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.dream;
    }

}

export class NEW1_010 extends Card {
    constructor() {
        super();
        this.name = "Al'Akir the Windlord";
        this.type = CARDTYPES.minion;
        this.text = "<b>Windfury, Charge, Divine Shield, Taunt</b>";
        this.set = "EXPERT1";
        this.health = 5;
        this.attack = 3;
        this.manacost = 8;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Raymond Swanland";
        this.flavor = "He is the weakest of the four Elemental Lords.  And the other three don't let him forget it.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"CHARGE\",\"DIVINE_SHIELD\",\"TAUNT\",\"WINDFURY\"]

}

export class AT_039e extends Card {
    constructor() {
        super();
        this.name = "Savage";
        this.type = CARDTYPES.enchantment;
        this.text = "+2 Attack this turn.";
        this.set = "TGT";
        this.characterClass = CHARACTERCLASS.druid;
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class AT_096 extends Card {
    constructor() {
        super();
        this.name = "Clockwork Knight";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Give a friendly Mech +1/+1.";
        this.set = "TGT";
        this.health = 5;
        this.attack = 5;
        this.manacost = 5;
        this.artist = "Skan Srisuwan";
        this.race = race.mechanical;
        this.flavor = "It takes a lot to wind him up.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.targetingArrowText = "Give +1/+1.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_WITH_RACE\":17,\"REQ_FRIENDLY_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class BRMA04_3H extends Card {
    constructor() {
        super();
        this.name = "Firesworn";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Deal 3 damage to the enemy hero for each Firesworn that died this turn.";
        this.set = "BRM";
        this.health = 5;
        this.attack = 0;
        this.manacost = 0;
    }

    //[\"DEATHRATTLE\"]

}

export class FP1_021 extends Card {
    constructor() {
        super();
        this.name = "Death's Bite";
        this.type = CARDTYPES.weapon;
        this.text = "<b>Deathrattle:</b> Deal 1 damage to all minions.";
        this.set = "NAXX";
        this.attack = 4;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Jim Nelson";
        this.flavor = "\"Take a bite outta Death.\" - McScruff the Deathlord";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after completing the Warrior Class Challenge in Naxxramas.";
        this.howToEarn = "Unlocked in The Construct Quarter, in the Naxxramas adventure.";
        this.durability = "2";
    }

    //[\"DEATHRATTLE\"]

}

export class GVG_110 extends Card {
    constructor() {
        super();
        this.name = "Dr. Boom";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry</b>: Summon two 1/1 Boom Bots. <i>WARNING: Bots may explode.</i>";
        this.set = "GVG";
        this.health = 7;
        this.attack = 7;
        this.manacost = 7;
        this.artist = "Alex Garner";
        this.flavor = "MARVEL AT HIS MIGHT!";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class EX1_355 extends Card {
    constructor() {
        super();
        this.name = "Blessed Champion";
        this.type = CARDTYPES.spell;
        this.text = "Double a minion's Attack.";
        this.set = "EXPERT1";
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Tyler Walpole";
        this.flavor = "This card causes double the trouble AND double the fun.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class AT_133 extends Card {
    constructor() {
        super();
        this.name = "Gadgetzan Jouster";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Reveal a minion in each deck. If yours costs more, gain +1/+1.";
        this.set = "TGT";
        this.health = 2;
        this.attack = 1;
        this.manacost = 1;
        this.artist = "Skan Srisuwan";
        this.flavor = "It's not HER fault you didn't put a spinning saw blade on your horse.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class LOEA10_1H extends Card {
    constructor() {
        super();
        this.name = "Heroic Giantfin";
        this.type = CARDTYPES.hero;
        this.set = "LOE";
        this.health = 30;
    }

}

export class NEW1_018e extends Card {
    constructor() {
        super();
        this.name = "Treasure Crazed";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Attack.";
        this.set = "EXPERT1";
    }

}

export class EX1_302 extends Card {
    constructor() {
        super();
        this.name = "Mortal Coil";
        this.type = CARDTYPES.spell;
        this.text = "Deal $1 damage to a minion. If that kills it, draw a card.";
        this.set = "CORE";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Matt Gaser";
        this.flavor = "If your spells look like horrifying skulls, let's be honest, you should get to draw some cards.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 43.";
        this.howToEarn = "Unlocked at Level 4.";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class LOE_022 extends Card {
    constructor() {
        super();
        this.name = "Fierce Monkey";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "LOE";
        this.health = 4;
        this.attack = 3;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Peter Stapleton";
        this.race = race.beast;
        this.flavor = "Fierce monkey.  That funky monkey.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in Uldaman, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in Uldaman, in the League of Explorers adventure.";
    }

    //[\"TAUNT\"]

}

export class TB_PickYourFate extends Card {
    constructor() {
        super();
        this.name = "Pick Your Fate Build Around";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
    }

    //[\"TB_PickYourFate_9\",\"TB_PickYourFate_10\",\"TB_PickYourFate_11b\",\"TB_PickYourFate_8\"]

}

export class BRMA14_6H extends Card {
    constructor() {
        super();
        this.name = "Activate Electron";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nActivate Electron!";
        this.set = "BRM";
        this.manacost = 4;
    }

}

export class CS2_200 extends Card {
    constructor() {
        super();
        this.name = "Boulderfist Ogre";
        this.type = CARDTYPES.minion;
        this.set = "CORE";
        this.health = 7;
        this.attack = 6;
        this.manacost = 6;
        this.artist = "Brian Despain";
        this.flavor = "\"ME HAVE GOOD STATS FOR THE COST\"";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Warlock Level 51.";
    }

}

export class AT_081 extends Card {
    constructor() {
        super();
        this.name = "Eadric the Pure";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Change all enemy minions'\nAttack to 1.";
        this.set = "TGT";
        this.health = 7;
        this.attack = 3;
        this.manacost = 7;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = " James Ryman";
        this.flavor = "Nobody rocks a monocle like Eadric.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class BRM_010b extends Card {
    constructor() {
        super();
        this.name = "Fire Hawk Form";
        this.type = CARDTYPES.spell;
        this.text = "Transform into a 2/5 minion.";
        this.set = "BRM";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
        this.race = race.beast;
        this.rarity = rarity.common;
    }

}

export class AT_061 extends Card {
    constructor() {
        super();
        this.name = "Lock and Load";
        this.type = CARDTYPES.spell;
        this.text = "Each time you cast a spell this turn, add a random Hunter card to your hand.";
        this.set = "TGT";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Matt Dixon";
        this.flavor = "Rexxar narrowed his eyes, grabbed his machine gun, and said: \"It's go time.  Lock and load.\"\nThis card pays homage to that special moment.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class BRMA05_1 extends Card {
    constructor() {
        super();
        this.name = "Baron Geddon";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class EX1_393 extends Card {
    constructor() {
        super();
        this.name = "Amani Berserker";
        this.type = CARDTYPES.minion;
        this.text = "<b>Enrage:</b> +3 Attack";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 2;
        this.manacost = 2;
        this.artist = "Chippy";
        this.flavor = "If an Amani berserker asks \"Joo lookin' at me?!\", the correct response is \"Nah, mon\".";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"ENRAGED\"]

}

export class LOE_077 extends Card {
    constructor() {
        super();
        this.name = "Brann Bronzebeard";
        this.type = CARDTYPES.minion;
        this.text = "Your <b>Battlecries</b> trigger twice.";
        this.set = "LOE";
        this.health = 4;
        this.attack = 2;
        this.manacost = 3;
        this.artist = "Sam Nielson";
        this.flavor = "Contains 75% more fiber than his brother Magni!";
        this.rarity = rarity.legendary;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in Uldaman, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in Uldaman, in the League of Explorers adventure.";
        this.targetingArrowText = "Trigger a <b>Deathrattle</b>.";
    }

    //[\"AURA\"]

}

export class AT_112 extends Card {
    constructor() {
        super();
        this.name = "Master Jouster";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Reveal a minion in each deck. If yours costs more, gain <b>Taunt</b> and <b>Divine Shield</b>.";
        this.set = "TGT";
        this.health = 6;
        this.attack = 5;
        this.manacost = 6;
        this.artist = "Penny Arcade";
        this.flavor = "Needs just a few more ratings points to become Grandmaster Jouster.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class EX1_537 extends Card {
    constructor() {
        super();
        this.name = "Explosive Shot";
        this.type = CARDTYPES.spell;
        this.text = "Deal $5 damage to a minion and $2 damage to adjacent ones.";
        this.set = "EXPERT1";
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Tom Baxa";
        this.flavor = "Pull the pin, count to 5, then shoot.  Then duck.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class GVG_001 extends Card {
    constructor() {
        super();
        this.name = "Flamecannon";
        this.type = CARDTYPES.spell;
        this.text = "Deal $4 damage to a random enemy minion.";
        this.set = "GVG";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Mauricio Herrera";
        this.flavor = "Calling something a flamecannon really doesn't do much to distinguish it from other goblin devices.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //{\"REQ_MINIMUM_ENEMY_MINIONS\":1}

}

export class GVG_057 extends Card {
    constructor() {
        super();
        this.name = "Seal of Light";
        this.type = CARDTYPES.spell;
        this.text = "Restore #4 Health to your hero and gain +2 Attack this turn.";
        this.set = "GVG";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Jason Chan";
        this.flavor = "The walrus of Light restores EIGHT Health.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"ImmuneToSpellpower\"]

}

export class CS2_022 extends Card {
    constructor() {
        super();
        this.name = "Polymorph";
        this.type = CARDTYPES.spell;
        this.text = "Transform a minion into a 1/1 Sheep.";
        this.set = "CORE";
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Vance Kovacs";
        this.flavor = "There was going to be a pun in this flavor text, but it just came out baa-d.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 47.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class LOEA04_24 extends Card {
    constructor() {
        super();
        this.name = "Anubisath Temple Guard";
        this.type = CARDTYPES.minion;
        this.set = "LOE";
        this.health = 10;
        this.attack = 5;
        this.manacost = 8;
    }

}

export class LOEA12_1H extends Card {
    constructor() {
        super();
        this.name = "Heroic Naz'jar";
        this.type = CARDTYPES.hero;
        this.set = "LOE";
        this.health = 30;
    }

}

export class AT_071 extends Card {
    constructor() {
        super();
        this.name = "Alexstrasza's Champion";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> If you're holding a Dragon, gain +1 Attack and <b>Charge</b>.";
        this.set = "TGT";
        this.health = 3;
        this.attack = 2;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Evgeniy Zagumennyy";
        this.flavor = "\"Put more spikes on her.  No, more spikes.  What part of 'more spikes' do you not understand?  MORE SPIKES!\" - Alexstrasza";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class EX1_021 extends Card {
    constructor() {
        super();
        this.name = "Thrallmar Farseer";
        this.type = CARDTYPES.minion;
        this.text = "<b>Windfury</b>";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 2;
        this.manacost = 3;
        this.artist = "Efrem Palacios";
        this.flavor = "He's stationed in the Hellfire Peninsula, but he's hoping for a reassignment closer to Orgrimmar, or really anywhere the ground is less on fire.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "HORDE";
    }

    //[\"WINDFURY\"]

}

export class LOEA_01 extends Card {
    constructor() {
        super();
        this.name = "Looming Presence";
        this.type = CARDTYPES.spell;
        this.text = "Draw 2 cards. Gain 4 Armor.";
        this.set = "LOE";
        this.manacost = 3;
    }

}

export class CS2_197 extends Card {
    constructor() {
        super();
        this.name = "Ogre Magi";
        this.type = CARDTYPES.minion;
        this.text = "<b>Spell Damage +1</b>";
        this.set = "CORE";
        this.health = 4;
        this.attack = 4;
        this.manacost = 4;
        this.artist = "James Ryman";
        this.flavor = "Training Ogres in the art of spellcasting is a questionable decision.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Warlock Level 55.";
    }

    //[\"SPELLPOWER\"]

}

export class EX1_010 extends Card {
    constructor() {
        super();
        this.name = "Worgen Infiltrator";
        this.type = CARDTYPES.minion;
        this.text = "<b>Stealth</b>";
        this.set = "EXPERT1";
        this.health = 1;
        this.attack = 2;
        this.manacost = 1;
        this.artist = "Raymond Swanland";
        this.flavor = "If you want to stop a worgen from infiltrating, just yell, \"No! Bad boy!\"";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "ALLIANCE";
    }

    //[\"STEALTH\"]

}

export class TU4f_003 extends Card {
    constructor() {
        super();
        this.name = "Shado-Pan Monk";
        this.type = CARDTYPES.minion;
        this.set = "MISSIONS";
        this.health = 2;
        this.attack = 2;
        this.manacost = 2;
        this.rarity = rarity.common;
    }

}

export class AT_094 extends Card {
    constructor() {
        super();
        this.name = "Flame Juggler";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Deal 1 damage to a random enemy.";
        this.set = "TGT";
        this.health = 3;
        this.attack = 2;
        this.manacost = 2;
        this.artist = "James Zhang";
        this.flavor = "At first he liked juggling chain saws, but then he thought, \"Flames are better!  Because FIRE!\"";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class BRMA08_3 extends Card {
    constructor() {
        super();
        this.name = "Drakkisath's Command";
        this.type = CARDTYPES.spell;
        this.text = "Destroy a minion. Gain 10 Armor.";
        this.set = "BRM";
        this.manacost = 1;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class LOEA09_7e extends Card {
    constructor() {
        super();
        this.name = "Cauldron";
        this.type = CARDTYPES.enchantment;
        this.set = "LOE";
    }

}

export class GVG_066 extends Card {
    constructor() {
        super();
        this.name = "Dunemaul Shaman";
        this.type = CARDTYPES.minion;
        this.text = "<b>Windfury, Overload: (1)</b>\n50% chance to attack the wrong enemy.";
        this.set = "GVG";
        this.health = 4;
        this.attack = 5;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "JosÃ© LadrÃ¶nn";
        this.flavor = "He just closes his eyes and goes for it. Raarararrrarar!";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"FORGETFUL\",\"OVERLOAD\",\"WINDFURY\"]

}

export class LOEA05_02 extends Card {
    constructor() {
        super();
        this.name = "Trogg Hate Minions!";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Passive Hero Power</b>\n Enemy minions cost (2) more. Swap at the start of your turn.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class BRMA16_3e extends Card {
    constructor() {
        super();
        this.name = "Sonic Breath";
        this.type = CARDTYPES.enchantment;
        this.text = "+3 Attack.";
        this.set = "BRM";
    }

}

export class EX1_577 extends Card {
    constructor() {
        super();
        this.name = "The Beast";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Summon a 3/3 Finkle Einhorn for your opponent.";
        this.set = "EXPERT1";
        this.health = 7;
        this.attack = 9;
        this.manacost = 6;
        this.artist = "Glenn Rane";
        this.race = race.beast;
        this.flavor = "He lives in Blackrock Mountain.  He eats Gnomes.  That's pretty much it.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"DEATHRATTLE\"]

}

export class FP1_031 extends Card {
    constructor() {
        super();
        this.name = "Baron Rivendare";
        this.type = CARDTYPES.minion;
        this.text = "Your minions trigger their <b>Deathrattles</b> twice.";
        this.set = "NAXX";
        this.health = 7;
        this.attack = 1;
        this.manacost = 4;
        this.artist = "Ralph Horsley";
        this.flavor = "There used to be five Horsemen but one of them left because a job opened up in the deadmines and the benefits were better.";
        this.rarity = rarity.legendary;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after completing the Military Quarter.";
        this.howToEarn = "Unlocked in The Military Quarter, in the Naxxramas adventure.";
    }

    //[\"AURA\"]

}

export class LOEA07_29 extends Card {
    constructor() {
        super();
        this.name = "Throw Rocks";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\n Deal 3 damage to a random enemy minion.";
        this.set = "LOE";
        this.manacost = 1;
    }

}

export class GVG_076a extends Card {
    constructor() {
        super();
        this.name = "Pistons";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Attack.";
        this.set = "GVG";
    }

}

export class AT_041 extends Card {
    constructor() {
        super();
        this.name = "Knight of the Wild";
        this.type = CARDTYPES.minion;
        this.text = "Whenever you summon a Beast, reduce the Cost of this card by (1).";
        this.set = "TGT";
        this.health = 6;
        this.attack = 6;
        this.manacost = 7;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Ralph Horsley";
        this.flavor = "He gets a discount on the tournament entry fee because he is his own horse.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class EX1_160 extends Card {
    constructor() {
        super();
        this.name = "Power of the Wild";
        this.type = CARDTYPES.spell;
        this.text = "<b>Choose One</b> - Give your minions +1/+1; or Summon a 3/2 Panther.";
        this.set = "EXPERT1";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Steve Tappin";
        this.flavor = "Never look a panther in the eye.  Or is it 'Always look a panther in the eye'?  Well, it's one of those.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class EX1_578 extends Card {
    constructor() {
        super();
        this.name = "Savagery";
        this.type = CARDTYPES.spell;
        this.text = "Deal damage equal to your hero's Attack to a minion.";
        this.set = "EXPERT1";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Dave Rapoza";
        this.flavor = "It is true that some druids are savage, but others still enjoy a quiet moment and a spot of tea.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class NEW1_040 extends Card {
    constructor() {
        super();
        this.name = "Hogger";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, summon a 2/2 Gnoll with <b>Taunt</b>.";
        this.set = "EXPERT1";
        this.health = 4;
        this.attack = 4;
        this.manacost = 6;
        this.artist = "Laurel D. Austin";
        this.flavor = "Hogger is super powerful. If you kill him, it's because he <i>let</i> you.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

}

export class TU4e_004 extends Card {
    constructor() {
        super();
        this.name = "Warglaive of Azzinoth";
        this.type = CARDTYPES.weapon;
        this.set = "MISSIONS";
        this.attack = 2;
        this.manacost = 2;
        this.rarity = rarity.common;
        this.durability = "2";
    }

}

export class GVG_073 extends Card {
    constructor() {
        super();
        this.name = "Cobra Shot";
        this.type = CARDTYPES.spell;
        this.text = "Deal $3 damage to a minion and the enemy hero.";
        this.set = "GVG";
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Howard Lyon";
        this.flavor = "\"Cobra Shot\" hurts way, way, way more than \"Cobra Cuddle.\"";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class AT_075e extends Card {
    constructor() {
        super();
        this.name = "Might of the Hostler";
        this.type = CARDTYPES.enchantment;
        this.text = "Warhorse Trainer is granting this minion +1 Attack.";
        this.set = "TGT";
        this.characterClass = CHARACTERCLASS.paladin;
    }

}

export class EX1_155 extends Card {
    constructor() {
        super();
        this.name = "Mark of Nature";
        this.type = CARDTYPES.spell;
        this.text = "<b>Choose One</b> - Give a minion +4 Attack; or +4 Health and <b>Taunt</b>.";
        this.set = "EXPERT1";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Clint Langley";
        this.flavor = "Druids call it the \"Mark of Nature.\"  Everyone else calls it \"needing a bath.\"";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class TB_MechWar_CommonCards extends Card {
    constructor() {
        super();
        this.name = "TBMechWarCommonCards";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
    }

    //[\"GVG_069\",\"GVG_079\",\"GVG_034\",\"GVG_048\",\"GVG_049\",\"GVG_088\"]

}

export class BRM_004 extends Card {
    constructor() {
        super();
        this.name = "Twilight Whelp";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> If you're holding a Dragon, gain +2 Health.";
        this.set = "BRM";
        this.health = 1;
        this.attack = 2;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Sam Nielson";
        this.race = race.dragon;
        this.flavor = "The twilight whelps are basically magic-vampires. Despite this, they are not a reference to any popular series of novels.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after completing the Priest Class Challenge in Blackrock Mountain.";
        this.howToEarn = "Unlocked in Blackrock Spire, in the Blackrock Mountain adventure.";
    }

    //[\"BATTLECRY\"]

}

export class AT_105 extends Card {
    constructor() {
        super();
        this.name = "Injured Kvaldir";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Deal 3 damage to this minion.";
        this.set = "TGT";
        this.health = 4;
        this.attack = 2;
        this.manacost = 1;
        this.artist = "Zoltan Boros";
        this.flavor = "Don't worry.  With a little skin cream he's going to clear right up.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class GVG_083 extends Card {
    constructor() {
        super();
        this.name = "Upgraded Repair Bot";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Give a friendly Mech +4 Health.";
        this.set = "GVG";
        this.health = 5;
        this.attack = 5;
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Nutchapol Thitinunthakorn";
        this.race = race.mechanical;
        this.flavor = "It's the same as the previous generation but they slapped the word \"upgraded\" on it to sell it for double.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.targetingArrowText = "Give a Mech +4 Health.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_WITH_RACE\":17,\"REQ_FRIENDLY_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class BRM_012 extends Card {
    constructor() {
        super();
        this.name = "Fireguard Destroyer";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Gain 1-4 Attack. <b>Overload:</b> (1)";
        this.set = "BRM";
        this.health = 6;
        this.attack = 3;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Paul Mafayon";
        this.flavor = "Ragnaros interviews hundreds of Fire Elementals for the position of \"Destroyer\" but very few have what it takes.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating Lord Victor Nefarius in Blackwing Lair.";
        this.howToEarn = "Unlocked in Blackwing Lair, in the Blackrock Mountain adventure.";
    }

    //[\"BATTLECRY\",\"OVERLOAD\"]

}

export class LOEA02_02h extends Card {
    constructor() {
        super();
        this.name = "Djinnâ€™s Intuition";
        this.type = CARDTYPES.hero_power;
        this.text = "Draw a card. Gain a Mana Crystal. Give your opponent a Wish.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class TB_BlingBrawl_Weapon extends Card {
    constructor() {
        super();
        this.name = "Foam Sword";
        this.type = CARDTYPES.weapon;
        this.set = "TB";
        this.attack = 2;
        this.manacost = 1;
        this.rarity = rarity.unknown;
        this.durability = "2";
    }

}

export class GVG_024 extends Card {
    constructor() {
        super();
        this.name = "Cogmaster's Wrench";
        this.type = CARDTYPES.weapon;
        this.text = "Has +2 Attack while you have a Mech.";
        this.set = "GVG";
        this.attack = 1;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Richard Wright";
        this.flavor = "For tightening cogs and smashin' troggs!";
        this.rarity = rarity.epic;
        this.collectible = true;
        this.durability = "3";
    }

    //[\"AURA\"]

}

export class AT_017e extends Card {
    constructor() {
        super();
        this.name = "Twilight's Embrace";
        this.type = CARDTYPES.enchantment;
        this.text = "+1 Attack and <b>Taunt</b>.";
        this.set = "TGT";
    }

}

export class BRMA12_7H extends Card {
    constructor() {
        super();
        this.name = "Brood Affliction: Bronze";
        this.type = CARDTYPES.spell;
        this.text = "While this is in your hand, Chromaggus' minions cost (3) less.";
        this.set = "BRM";
        this.manacost = 3;
    }

}

export class GVG_036 extends Card {
    constructor() {
        super();
        this.name = "Powermace";
        this.type = CARDTYPES.weapon;
        this.text = "<b>Deathrattle</b>: Give a random friendly Mech +2/+2.";
        this.set = "GVG";
        this.attack = 3;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Zoltan and Gabor";
        this.flavor = "People assume that shamans control the elements, but really, they have to ask them stuff and the elements are like, \"Yeah ok, sure.\"";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.durability = "2";
    }

    //[\"DEATHRATTLE\"]

}

export class EX1_093 extends Card {
    constructor() {
        super();
        this.name = "Defender of Argus";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Give adjacent minions +1/+1 and <b>Taunt</b>.";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 2;
        this.manacost = 4;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "You wouldnâ€™t think that Argus would need this much defending.  But it does.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.faction = "ALLIANCE";
    }

    //[\"BATTLECRY\"]

}

export class GVG_043e extends Card {
    constructor() {
        super();
        this.name = "Glaivezooka";
        this.type = CARDTYPES.enchantment;
        this.text = "+1 Attack.";
        this.set = "GVG";
        this.characterClass = CHARACTERCLASS.hunter;
    }

}

export class EX1_100 extends Card {
    constructor() {
        super();
        this.name = "Lorewalker Cho";
        this.type = CARDTYPES.minion;
        this.text = "Whenever a player casts a spell, put a copy into the other playerâ€™s hand.";
        this.set = "EXPERT1";
        this.health = 4;
        this.attack = 0;
        this.manacost = 2;
        this.artist = "Mark Zug";
        this.flavor = "Lorewalker Cho archives and shares tales from the land of Pandaria, but his favorite story is the one where Joey and Phoebe go on a road trip.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

}

export class CS2_187 extends Card {
    constructor() {
        super();
        this.name = "Booty Bay Bodyguard";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "CORE";
        this.health = 4;
        this.attack = 5;
        this.manacost = 5;
        this.artist = "Matt Cavotta";
        this.flavor = "You can hire him... until someone offers him enough gold to turn on you.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "HORDE";
        this.howToEarnGolden = "Unlocked at Shaman Level 55.";
    }

    //[\"TAUNT\"]

}

export class BRM_008 extends Card {
    constructor() {
        super();
        this.name = "Dark Iron Skulker";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Deal 2 damage to all undamaged enemy minions.";
        this.set = "BRM";
        this.health = 3;
        this.attack = 4;
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Eric Braddock";
        this.flavor = "He loves skulking. He skulks after hours just for the joy of it, but his friends are pretty worried he'll get burnt out.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after completing the Rogue Class Challenge in Blackrock Mountain.";
        this.howToEarn = "Unlocked in Blackwing Lair, in the Blackrock Mountain adventure.";
    }

    //[\"BATTLECRY\"]

}

export class CRED_11 extends Card {
    constructor() {
        super();
        this.name = "Jay Baxter";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Summon FIVE random Inventions.";
        this.set = "CREDITS";
        this.health = 4;
        this.attack = 1;
        this.manacost = 4;
        this.rarity = rarity.legendary;
    }

}

export class FP1_007t extends Card {
    constructor() {
        super();
        this.name = "Nerubian";
        this.type = CARDTYPES.minion;
        this.set = "NAXX";
        this.health = 4;
        this.attack = 4;
        this.manacost = 3;
        this.rarity = rarity.rare;
    }

}

export class AT_087 extends Card {
    constructor() {
        super();
        this.name = "Argent Horserider";
        this.type = CARDTYPES.minion;
        this.text = "<b>Charge</b>\n<b>Divine Shield</b>";
        this.set = "TGT";
        this.health = 1;
        this.attack = 2;
        this.manacost = 3;
        this.artist = "Evgeniy Zagumennyy";
        this.flavor = "His horse's name is Betsy.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"CHARGE\",\"DIVINE_SHIELD\"]

}

export class GVG_108 extends Card {
    constructor() {
        super();
        this.name = "Recombobulator";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Transform a friendly minion into a random minion with the same Cost.";
        this.set = "GVG";
        this.health = 2;
        this.attack = 3;
        this.manacost = 2;
        this.artist = "Ben Olson";
        this.flavor = "For when you didnâ€™t combobulate quite right the first time around.";
        this.rarity = rarity.epic;
        this.collectible = true;
        this.targetingArrowText = "Transform!";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_FRIENDLY_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class EX1_310 extends Card {
    constructor() {
        super();
        this.name = "Doomguard";
        this.type = CARDTYPES.minion;
        this.text = "<b>Charge</b>. <b>Battlecry:</b> Discard two random cards.";
        this.set = "EXPERT1";
        this.health = 7;
        this.attack = 5;
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Lucas Graciano";
        this.race = race.demon;
        this.flavor = "Summoning a doomguard is risky. <i>Someone</i> is going to die.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\",\"CHARGE\"]

}

export class LOEA16_24 extends Card {
    constructor() {
        super();
        this.name = "Giantfin";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, draw until you have as many cards as your opponent.";
        this.set = "LOE";
        this.health = 5;
        this.attack = 5;
        this.manacost = 5;
        this.race = race.murloc;
    }

}

export class NEW1_007 extends Card {
    constructor() {
        super();
        this.name = "Starfall";
        this.type = CARDTYPES.spell;
        this.text = "<b>Choose One -</b> Deal $5 damage to a minion; or $2 damage to all enemy minions.";
        this.set = "EXPERT1";
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Richard Wright";
        this.flavor = "Is the sky falling?  Yes.  Yes it is.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class TB_PickYourFate_12_Ench extends Card {
    constructor() {
        super();
        this.name = "Fate 12 Ench, Confuse";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
    }

}

export class BRMC_93 extends Card {
    constructor() {
        super();
        this.name = "Omnotron Defense System";
        this.type = CARDTYPES.spell;
        this.text = "Summon a random Tron.";
        this.set = "TB";
        this.manacost = 3;
    }

    //[\"BRMA14_3\",\"BRMA14_5\",\"BRMA14_7\",\"BRMA14_9\"]

}

export class GVG_037 extends Card {
    constructor() {
        super();
        this.name = "Whirling Zap-o-matic";
        this.type = CARDTYPES.minion;
        this.text = "<b>Windfury</b>";
        this.set = "GVG";
        this.health = 2;
        this.attack = 3;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Jim Nelson";
        this.race = race.mechanical;
        this.flavor = "If you pay a little extra, you can get it in \"candy-apple red.\"";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"WINDFURY\"]

}

export class GVG_088 extends Card {
    constructor() {
        super();
        this.name = "Ogre Ninja";
        this.type = CARDTYPES.minion;
        this.text = "<b>Stealth</b>\n50% chance to attack the wrong enemy.";
        this.set = "GVG";
        this.health = 6;
        this.attack = 6;
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Samwise";
        this.flavor = "He didn't have the grades to get into ninja school, but his dad pulled some strings.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"STEALTH\"]

}

export class FP1_015 extends Card {
    constructor() {
        super();
        this.name = "Feugen";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> If Stalagg also died this game, summon Thaddius.";
        this.set = "NAXX";
        this.health = 7;
        this.attack = 4;
        this.manacost = 5;
        this.artist = "Dany Orizio";
        this.flavor = "Feugen is sad because everyone likes Stalagg better.";
        this.rarity = rarity.legendary;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after completing the Construct Quarter.";
        this.howToEarn = "Unlocked in The Construct Quarter, in the Naxxramas adventure.";
    }

    //[\"DEATHRATTLE\"]

}

export class Mekka3e extends Card {
    constructor() {
        super();
        this.name = "Emboldened!";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Stats.";
        this.set = "PROMO";
    }

}

export class AT_074e2 extends Card {
    constructor() {
        super();
        this.name = "Seal of Champions";
        this.type = CARDTYPES.enchantment;
        this.text = "+3 Attack and <b>Divine Shield</b>.";
        this.set = "TGT";
        this.characterClass = CHARACTERCLASS.paladin;
    }

}

export class EX1_383t extends Card {
    constructor() {
        super();
        this.name = "Ashbringer";
        this.type = CARDTYPES.weapon;
        this.set = "EXPERT1";
        this.attack = 5;
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.paladin;
        this.rarity = rarity.legendary;
        this.durability = "3";
    }

}

export class TB_PickYourFate_7_EnchMiniom2nd extends Card {
    constructor() {
        super();
        this.name = "Fate";
        this.type = CARDTYPES.enchantment;
        this.text = "<b>Deathrattle</b>: random card in owner's hand costs (0).";
        this.set = "TB";
    }

}

export class CRED_42 extends Card {
    constructor() {
        super();
        this.name = "Tim Erskine";
        this.type = CARDTYPES.minion;
        this.text = "Whenever this minion destroys another minion, draw a card.";
        this.set = "CREDITS";
        this.health = 5;
        this.attack = 3;
        this.manacost = 4;
        this.rarity = rarity.legendary;
    }

}

export class GVG_102e extends Card {
    constructor() {
        super();
        this.name = "Might of Tinkertown";
        this.type = CARDTYPES.enchantment;
        this.text = "+1/+1.";
        this.set = "GVG";
    }

}

export class AT_013 extends Card {
    constructor() {
        super();
        this.name = "Power Word: Glory";
        this.type = CARDTYPES.spell;
        this.text = "Choose a minion. Whenever it attacks, restore 4 Health to\nyour hero.";
        this.set = "TGT";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Mike Sass";
        this.flavor = "The promise of glory is a powerful tool to get minions to do your bidding.  Only slightly less powerful than the promise of an ice cream bar!";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class EX1_593 extends Card {
    constructor() {
        super();
        this.name = "Nightblade";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry: </b>Deal 3 damage to the enemy hero.";
        this.set = "CORE";
        this.health = 4;
        this.attack = 4;
        this.manacost = 5;
        this.artist = "Raymond Swanland";
        this.flavor = "Your face is the place you'd probably least like a dagger, and where rogues are most likely to deliver them.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Druid Level 53.";
    }

    //[\"BATTLECRY\"]

}

export class AT_129 extends Card {
    constructor() {
        super();
        this.name = "Fjola Lightbane";
        this.type = CARDTYPES.minion;
        this.text = "Whenever <b>you</b> target this minion with a spell, gain <b>Divine Shield.</b>";
        this.set = "TGT";
        this.health = 4;
        this.attack = 3;
        this.manacost = 3;
        this.artist = "Mark Zug";
        this.flavor = "LOVES being called \"the wonder twins\".";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

}

export class LOEA16_20e extends Card {
    constructor() {
        super();
        this.name = "Blessed";
        this.type = CARDTYPES.enchantment;
        this.text = " <b>Immune</b> this turn.";
        this.set = "LOE";
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class GVG_106e extends Card {
    constructor() {
        super();
        this.name = "Junked Up";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased stats.";
        this.set = "GVG";
    }

}

export class LOEA06_03 extends Card {
    constructor() {
        super();
        this.name = "Animate Earthen";
        this.type = CARDTYPES.spell;
        this.text = "Give your minions +1/+1 and <b>Taunt</b>.";
        this.set = "LOE";
        this.manacost = 2;
    }

    //{\"REQ_MINIMUM_TOTAL_MINIONS\":1}

}

export class TB_PickYourFate_7_2nd extends Card {
    constructor() {
        super();
        this.name = "Dire Fate: Manaburst";
        this.type = CARDTYPES.spell;
        this.text = "Minions gain <b>Deathrattle</b>: Random card in owner's hand costs (0).";
        this.set = "TB";
        this.manacost = 0;
    }

}

export class BRMA17_9 extends Card {
    constructor() {
        super();
        this.name = "Onyxiclaw";
        this.type = CARDTYPES.weapon;
        this.set = "BRM";
        this.attack = 2;
        this.manacost = 2;
        this.durability = "6";
    }

}

export class EX1_609 extends Card {
    constructor() {
        super();
        this.name = "Snipe";
        this.type = CARDTYPES.spell;
        this.text = "<b>Secret:</b> When your opponent plays a minion, deal $4 damage to it.";
        this.set = "EXPERT1";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Lorenzo Minaca";
        this.flavor = "A great sniper hits the spot.  Just like a delicious flank of boar. Mmmmm.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"SECRET\"]

}

export class DREAM_03 extends Card {
    constructor() {
        super();
        this.name = "Emerald Drake";
        this.type = CARDTYPES.minion;
        this.set = "EXPERT1";
        this.health = 6;
        this.attack = 7;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.dream;
        this.race = race.dragon;
    }

}

export class NEW1_033 extends Card {
    constructor() {
        super();
        this.name = "Leokk";
        this.type = CARDTYPES.minion;
        this.text = "Your other minions have +1 Attack.";
        this.set = "CORE";
        this.health = 4;
        this.attack = 2;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.hunter;
        this.race = race.beast;
        this.rarity = rarity.common;
    }

}

export class BRMA13_3 extends Card {
    constructor() {
        super();
        this.name = "Nefarian";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

    //[\"BRMA13_8\",\"BRMA13_7\",\"BRMA13_5\",\"BRMA13_6\"]

}

export class BRMA12_1 extends Card {
    constructor() {
        super();
        this.name = "Chromaggus";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class AT_042t2 extends Card {
    constructor() {
        super();
        this.name = "Sabertooth Panther";
        this.type = CARDTYPES.minion;
        this.text = "<b>Stealth</b>";
        this.set = "TGT";
        this.health = 2;
        this.attack = 3;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.druid;
        this.race = race.beast;
        this.rarity = rarity.common;
    }

    //[\"STEALTH\"]

}

export class NAX11_01H extends Card {
    constructor() {
        super();
        this.name = "Grobbulus";
        this.type = CARDTYPES.hero;
        this.set = "NAXX";
        this.health = 45;
    }

}

export class TB_PickYourFate_2_EnchMinion extends Card {
    constructor() {
        super();
        this.name = "Fate";
        this.type = CARDTYPES.enchantment;
        this.text = "<b>Deathrattle</b>: Your owner gets a banana.";
        this.set = "TB";
    }

    //[\"DEATHRATTLE\"]

}

export class FP1_006 extends Card {
    constructor() {
        super();
        this.name = "Deathcharger";
        this.type = CARDTYPES.minion;
        this.text = "<b>Charge. Deathrattle:</b> Deal 3 damage to your hero.";
        this.set = "NAXX";
        this.health = 3;
        this.attack = 2;
        this.manacost = 1;
    }

    //[\"CHARGE\",\"DEATHRATTLE\"]

}

export class GVG_041 extends Card {
    constructor() {
        super();
        this.name = "Dark Wispers";
        this.type = CARDTYPES.spell;
        this.text = "<b>Choose One -</b> Summon 5 Wisps; or Give a minion +5/+5 and <b>Taunt</b>.";
        this.set = "GVG";
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Trent Kaniuga";
        this.flavor = "Don't worry; we fired the person who named this card.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //{\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class NEW1_027 extends Card {
    constructor() {
        super();
        this.name = "Southsea Captain";
        this.type = CARDTYPES.minion;
        this.text = "Your other Pirates have +1/+1.";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 3;
        this.manacost = 3;
        this.artist = "Ken Steacy";
        this.race = race.pirate;
        this.flavor = "When he saves enough plunder, he's going to commission an enormous captain's hat.  He has hat envy.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //[\"AURA\"]

}

export class BRMA14_8 extends Card {
    constructor() {
        super();
        this.name = "Activate Magmatron";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nActivate Magmatron!";
        this.set = "BRM";
        this.manacost = 8;
    }

}

export class EX1_625t2 extends Card {
    constructor() {
        super();
        this.name = "Mind Shatter";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDeal $3 damage.";
        this.set = "EXPERT1";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.priest;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class NEW1_030 extends Card {
    constructor() {
        super();
        this.name = "Deathwing";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Destroy all other minions and discard your hand.";
        this.set = "EXPERT1";
        this.health = 12;
        this.attack = 12;
        this.manacost = 10;
        this.artist = "Bernie Kang";
        this.race = race.dragon;
        this.flavor = "Once a noble dragon known as Neltharion, Deathwing lost his mind and shattered Azeroth before finally being defeated.  Daddy issues?";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class EX1_411e2 extends Card {
    constructor() {
        super();
        this.name = "Needs Sharpening";
        this.type = CARDTYPES.enchantment;
        this.text = "Decreased Attack.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.warrior;
    }

}

export class AT_065 extends Card {
    constructor() {
        super();
        this.name = "King's Defender";
        this.type = CARDTYPES.weapon;
        this.text = "<b>Battlecry</b>: If you have a minion with <b>Taunt</b>,  gain +1 Durability.";
        this.set = "TGT";
        this.attack = 3;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Michael Franchina";
        this.flavor = "\"King's Attacker\" is a shield.  Funny, huh?";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.durability = "2";
    }

    //[\"BATTLECRY\"]

}

export class EX1_009 extends Card {
    constructor() {
        super();
        this.name = "Angry Chicken";
        this.type = CARDTYPES.minion;
        this.text = "<b>Enrage:</b> +5 Attack.";
        this.set = "EXPERT1";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
        this.artist = "Mike Sass";
        this.race = race.beast;
        this.flavor = "There is no beast more frightening (or ridiculous) than a fully enraged chicken.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"ENRAGED\"]

}

export class GVG_028t extends Card {
    constructor() {
        super();
        this.name = "Gallywix's Coin";
        this.type = CARDTYPES.spell;
        this.text = "Gain 1 Mana Crystal this turn only.\n<i>(Won't trigger Gallywix.)</i>";
        this.set = "GVG";
        this.manacost = 0;
    }

}

export class NAX8_01 extends Card {
    constructor() {
        super();
        this.name = "Gothik the Harvester";
        this.type = CARDTYPES.hero;
        this.set = "NAXX";
        this.health = 30;
    }

}

export class EX1_164b extends Card {
    constructor() {
        super();
        this.name = "Nourish";
        this.type = CARDTYPES.spell;
        this.text = "Draw 3 cards.";
        this.set = "EXPERT1";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
    }

}

export class LOE_019t2 extends Card {
    constructor() {
        super();
        this.name = "Golden Monkey";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>\n<b>Battlecry:</b> Replace your hand and deck with <b>Legendary</b> minions.";
        this.set = "LOE";
        this.health = 6;
        this.attack = 6;
        this.manacost = 4;
        this.artist = "A.J. Nazzaro";
    }

    //[\"BATTLECRY\",\"TAUNT\"]

}

export class GVG_093 extends Card {
    constructor() {
        super();
        this.name = "Target Dummy";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "GVG";
        this.health = 2;
        this.attack = 0;
        this.manacost = 0;
        this.artist = "Matt Dixon";
        this.race = race.mechanical;
        this.flavor = "The engineering equivalent of a \"Kick Me\" sticker.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"TAUNT\"]

}

export class CS2_034_H1 extends Card {
    constructor() {
        super();
        this.name = "Fireblast";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDeal $1 damage.";
        this.set = "HERO_SKINS";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.mage;
        this.rarity = rarity.free;
        this.targetingArrowText = "Deal 1 damage.";
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class TB_MechWar_Boss1 extends Card {
    constructor() {
        super();
        this.name = "Annoy-o-Tron";
        this.type = CARDTYPES.hero;
        this.set = "TB";
        this.health = 30;
        this.rarity = rarity.free;
    }

}

export class EX1_166 extends Card {
    constructor() {
        super();
        this.name = "Keeper of the Grove";
        this.type = CARDTYPES.minion;
        this.text = "<b>Choose One</b> - Deal 2 damage; or <b>Silence</b> a minion.";
        this.set = "EXPERT1";
        this.health = 4;
        this.attack = 2;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Gabor Szikszai";
        this.flavor = "These guys just show up and start Keeping your Groves without even asking.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //{\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class EX1_066 extends Card {
    constructor() {
        super();
        this.name = "Acidic Swamp Ooze";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Destroy your opponent's weapon.";
        this.set = "CORE";
        this.health = 2;
        this.attack = 3;
        this.manacost = 2;
        this.artist = "Chris Rahn";
        this.flavor = "Oozes love Flamenco.  Don't ask.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "ALLIANCE";
        this.howToEarnGolden = "Unlocked at Rogue Level 57.";
    }

    //[\"BATTLECRY\"]

}

export class NAX4_05 extends Card {
    constructor() {
        super();
        this.name = "Plague";
        this.type = CARDTYPES.spell;
        this.text = "Destroy all non-Skeleton minions.";
        this.set = "NAXX";
        this.manacost = 6;
    }

}

export class BRM_016 extends Card {
    constructor() {
        super();
        this.name = "Axe Flinger";
        this.type = CARDTYPES.minion;
        this.text = "Whenever this minion takes damage, deal 2 damage to the enemy hero.";
        this.set = "BRM";
        this.health = 5;
        this.attack = 2;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Efrem Palacios";
        this.flavor = "Once a lowly \"Stick Flinger\", he's been relentless on the path to his ultimate dream: \"Tauren Flinger\".";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after completing the Warrior Class Challenge in Blackrock Mountain.";
        this.howToEarn = "Unlocked in Molten Core, in the Blackrock Mountain adventure.";
    }

}

export class NAX8_01H extends Card {
    constructor() {
        super();
        this.name = "Gothik the Harvester";
        this.type = CARDTYPES.hero;
        this.set = "NAXX";
        this.health = 45;
    }

}

export class LOEA06_04 extends Card {
    constructor() {
        super();
        this.name = "Shattering Spree";
        this.type = CARDTYPES.spell;
        this.text = "Destroy all Statues. For each destroyed, deal $1 damage.";
        this.set = "LOE";
        this.manacost = 2;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class CS2_028 extends Card {
    constructor() {
        super();
        this.name = "Blizzard";
        this.type = CARDTYPES.spell;
        this.text = "Deal $2 damage to all enemy minions and <b>Freeze</b> them.";
        this.set = "EXPERT1";
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Chris Seaman";
        this.flavor = "This spell can be very Entertaining.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"FREEZE\"]

}

export class NEW1_031 extends Card {
    constructor() {
        super();
        this.name = "Animal Companion";
        this.type = CARDTYPES.spell;
        this.text = "Summon a random Beast Companion.";
        this.set = "CORE";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Wei Wang";
        this.flavor = "You could summon Misha, Leokk, or Huffer!  Huffer is more trouble than he's worth.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 45.";
        this.howToEarn = "Unlocked at Level 2.";
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}
    //[\"NEW1_032\",\"NEW1_033\",\"NEW1_034\"]

}

export class AT_020 extends Card {
    constructor() {
        super();
        this.name = "Fearsome Doomguard";
        this.type = CARDTYPES.minion;
        this.set = "TGT";
        this.health = 8;
        this.attack = 6;
        this.manacost = 7;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Anton Zemskov";
        this.race = race.demon;
        this.flavor = "They were originally called Cuddleguards, but they were not inspiring the proper amount of fear.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class BRMA04_4H extends Card {
    constructor() {
        super();
        this.name = "Rock Out";
        this.type = CARDTYPES.spell;
        this.text = "Summon 3 Firesworn. <b>Overload:</b> (2)";
        this.set = "BRM";
        this.manacost = 3;
    }

    //[\"OVERLOAD\"]

}

export class CS2_173 extends Card {
    constructor() {
        super();
        this.name = "Bluegill Warrior";
        this.type = CARDTYPES.minion;
        this.text = "<b>Charge</b>";
        this.set = "CORE";
        this.health = 1;
        this.attack = 2;
        this.manacost = 2;
        this.artist = "Jakub Kasper";
        this.race = race.murloc;
        this.flavor = "He just wants a hug.   A sloppy... slimy... hug.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Paladin Level 53.";
    }

    //[\"CHARGE\"]

}

export class tt_010 extends Card {
    constructor() {
        super();
        this.name = "Spellbender";
        this.type = CARDTYPES.spell;
        this.text = "<b>Secret:</b> When an enemy casts a spell on a minion, summon a 1/3 as the new target.";
        this.set = "EXPERT1";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Gonzalo Ordonez";
        this.flavor = "While it's fun to intercept enemy lightning bolts, a spellbender much prefers to intercept opposing Marks of the Wild.  It just feels meaner.  And blood elves... well, they're a little mean.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //[\"SECRET\"]

}

export class BRM_033e extends Card {
    constructor() {
        super();
        this.name = "Dragon Blood";
        this.type = CARDTYPES.enchantment;
        this.text = "+1/+1";
        this.set = "BRM";
    }

}

export class NEW1_014 extends Card {
    constructor() {
        super();
        this.name = "Master of Disguise";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Give a friendly minion <b>Stealth</b>.";
        this.set = "EXPERT1";
        this.health = 4;
        this.attack = 4;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Ron Spencer";
        this.flavor = "She's actually a male tauren.  People don't call him \"Master of Disguise\" for nothing.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.targetingArrowText = "Give <b>Stealth</b>.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_NONSELF_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0,\"REQ_FRIENDLY_TARGET\":0}

}

export class CRED_22 extends Card {
    constructor() {
        super();
        this.name = "Cameron Chrisman";
        this.type = CARDTYPES.minion;
        this.text = "While this is in your hand, Golden cards cost (1) less.";
        this.set = "CREDITS";
        this.health = 3;
        this.attack = 3;
        this.manacost = 3;
        this.rarity = rarity.legendary;
    }

}

export class LOEA01_02 extends Card {
    constructor() {
        super();
        this.name = "Blessings of the Sun";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Passive Hero Power</b>\nWhoever controls the Rod of the Sun is <b>Immune.</b>";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class LOE_017e extends Card {
    constructor() {
        super();
        this.name = "Watched";
        this.type = CARDTYPES.enchantment;
        this.text = "Stats changed to 3/3.";
        this.set = "LOE";
        this.characterClass = CHARACTERCLASS.paladin;
    }

}

export class GVG_113 extends Card {
    constructor() {
        super();
        this.name = "Foe Reaper 4000";
        this.type = CARDTYPES.minion;
        this.text = "Also damages the minions next to whomever he attacks.";
        this.set = "GVG";
        this.health = 9;
        this.attack = 6;
        this.manacost = 8;
        this.artist = "James Ryman";
        this.race = race.mechanical;
        this.flavor = "Foe reaping is really not so different from harvest reaping, at the end of the day.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

}

export class AT_111 extends Card {
    constructor() {
        super();
        this.name = "Refreshment Vendor";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Restore 4 Health to each hero.";
        this.set = "TGT";
        this.health = 5;
        this.attack = 3;
        this.manacost = 4;
        this.artist = "Ron Spears";
        this.flavor = "Menu:  Funnel cakes, carrots, popcorn, jormungar steaks.  It's hard serving a diverse clientele.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class skele11 extends Card {
    constructor() {
        super();
        this.name = "Skeleton";
        this.type = CARDTYPES.minion;
        this.text = "<b></b> ";
        this.set = "CORE";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
        this.rarity = rarity.common;
    }

}

export class BRMC_97e extends Card {
    constructor() {
        super();
        this.name = "Burning Adrenaline";
        this.type = CARDTYPES.enchantment;
        this.text = "Costs (2) less.";
        this.set = "TB";
    }

}

export class EX1_166a extends Card {
    constructor() {
        super();
        this.name = "Moonfire";
        this.type = CARDTYPES.spell;
        this.text = "Deal 2 damage.";
        this.set = "EXPERT1";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class GVG_020 extends Card {
    constructor() {
        super();
        this.name = "Fel Cannon";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, deal 2 damage to a non-Mech minion.";
        this.set = "GVG";
        this.health = 5;
        this.attack = 3;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Matt Gaser";
        this.race = race.mechanical;
        this.flavor = "The box says, \"New and improved, with 200% more fel!\"";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class GVG_070 extends Card {
    constructor() {
        super();
        this.name = "Salty Dog";
        this.type = CARDTYPES.minion;
        this.set = "GVG";
        this.health = 4;
        this.attack = 7;
        this.manacost = 5;
        this.artist = "Alex Horley Orlandelli";
        this.race = race.pirate;
        this.flavor = "He's recently recovered from being a \"scurvy dog.\"";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class LOEA15_3 extends Card {
    constructor() {
        super();
        this.name = "Boneraptor";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b>Take control of your opponent's weapon.";
        this.set = "LOE";
        this.health = 2;
        this.attack = 2;
        this.manacost = 3;
    }

}

export class AT_121 extends Card {
    constructor() {
        super();
        this.name = "Crowd Favorite";
        this.type = CARDTYPES.minion;
        this.text = "Whenever you play a card with <b>Battlecry</b>, gain +1/+1.";
        this.set = "TGT";
        this.health = 4;
        this.attack = 4;
        this.manacost = 4;
        this.artist = "Jakub Kasper";
        this.flavor = "The crowd ALWAYS yells lethal.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class GVG_055e extends Card {
    constructor() {
        super();
        this.name = "Screwy Jank";
        this.type = CARDTYPES.enchantment;
        this.text = "+2/+2.";
        this.set = "GVG";
        this.characterClass = CHARACTERCLASS.warrior;
    }

    //{\"REQ_FRIENDLY_TARGET\":0}

}

export class EX1_126 extends Card {
    constructor() {
        super();
        this.name = "Betrayal";
        this.type = CARDTYPES.spell;
        this.text = "Force an enemy minion to deal its damage to the minions next to it.";
        this.set = "EXPERT1";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Lucas Graciano";
        this.flavor = "Everyone has a price. Gnomes, for example, can be persuaded by stuffed animals and small amounts of chocolate.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0,\"REQ_ENEMY_TARGET\":0}

}

export class NAX3_01H extends Card {
    constructor() {
        super();
        this.name = "Maexxna";
        this.type = CARDTYPES.hero;
        this.set = "NAXX";
        this.health = 45;
    }

}

export class GVG_060e extends Card {
    constructor() {
        super();
        this.name = "Well Equipped";
        this.type = CARDTYPES.enchantment;
        this.text = "+2/+2.";
        this.set = "GVG";
        this.characterClass = CHARACTERCLASS.paladin;
    }

}

export class LOEA04_27 extends Card {
    constructor() {
        super();
        this.name = "Animated Statue";
        this.type = CARDTYPES.minion;
        this.text = "You've disturbed the ancient statue...";
        this.set = "LOE";
        this.health = 10;
        this.attack = 10;
        this.manacost = 1;
    }

}

export class GAME_004 extends Card {
    constructor() {
        super();
        this.name = "AFK";
        this.type = CARDTYPES.enchantment;
        this.text = "Your turns are shorter.";
        this.set = "CORE";
    }

}

export class LOEA05_01 extends Card {
    constructor() {
        super();
        this.name = "Chieftain Scarvash";
        this.type = CARDTYPES.hero;
        this.set = "LOE";
        this.health = 30;
    }

}

export class AT_073 extends Card {
    constructor() {
        super();
        this.name = "Competitive Spirit";
        this.type = CARDTYPES.spell;
        this.text = "<b>Secret:</b> When your turn starts, give your minions +1/+1.";
        this.set = "TGT";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Jim Nelson";
        this.flavor = "Competition can be an inspiration to improve oneself.  Or kill all the competitors.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"SECRET\"]

}

export class AT_069 extends Card {
    constructor() {
        super();
        this.name = "Sparring Partner";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>\n<b>Battlecry:</b> Give a\nminion <b>Taunt</b>.";
        this.set = "TGT";
        this.health = 2;
        this.attack = 3;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Jim Nelson";
        this.flavor = "Come at me, bro.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.targetingArrowText = "Grant <b>Taunt</b>.";
    }

    //[\"BATTLECRY\",\"TAUNT\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class LOEA16_6 extends Card {
    constructor() {
        super();
        this.name = "Shard of Sulfuras";
        this.type = CARDTYPES.spell;
        this.text = "Deal $5 damage to ALL characters.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class BRM_031 extends Card {
    constructor() {
        super();
        this.name = "Chromaggus";
        this.type = CARDTYPES.minion;
        this.text = "Whenever you draw a card, put another copy into your hand.";
        this.set = "BRM";
        this.health = 8;
        this.attack = 6;
        this.manacost = 8;
        this.artist = "Todd Lockwood";
        this.race = race.dragon;
        this.flavor = "Left head and right head can never agree about what to eat for dinner, so they always end up just eating ramen again.";
        this.rarity = rarity.legendary;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after completing Blackwing Lair.";
        this.howToEarn = "Unlocked in Blackwing Lair, in the Blackrock Mountain adventure.";
    }

}

export class LOE_010 extends Card {
    constructor() {
        super();
        this.name = "Pit Snake";
        this.type = CARDTYPES.minion;
        this.text = "Destroy any minion damaged by this minion.";
        this.set = "LOE";
        this.health = 1;
        this.attack = 2;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Bernie Kang";
        this.race = race.beast;
        this.flavor = "It could be worse.  It could be a Snake Pit.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in The Ruined City, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in The Ruined City, in the League of Explorers adventure.";
    }

    //[\"POISONOUS\"]

}

export class AT_028 extends Card {
    constructor() {
        super();
        this.name = "Shado-Pan Rider";
        this.type = CARDTYPES.minion;
        this.text = "<b>Combo:</b> Gain +3 Attack.";
        this.set = "TGT";
        this.health = 7;
        this.attack = 3;
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Ryan Metcaff";
        this.flavor = "He needed a break after that business in the Vale of Eternal Blossoms. Naturally, he chose to spend his vacation in an icy snowscape killing monsters.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"COMBO\"]

}

export class GVG_011a extends Card {
    constructor() {
        super();
        this.name = "Shrink Ray";
        this.type = CARDTYPES.enchantment;
        this.text = "-2 Attack this turn.";
        this.set = "GVG";
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class NEW1_032 extends Card {
    constructor() {
        super();
        this.name = "Misha";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "CORE";
        this.health = 4;
        this.attack = 4;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.hunter;
        this.race = race.beast;
        this.rarity = rarity.common;
    }

    //[\"TAUNT\"]

}

export class NEW1_007a extends Card {
    constructor() {
        super();
        this.name = "Starfall";
        this.type = CARDTYPES.spell;
        this.text = "Deal $2 damage to all enemy minions.";
        this.set = "EXPERT1";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
    }

}

export class NEW1_027e extends Card {
    constructor() {
        super();
        this.name = "Yarrr!";
        this.type = CARDTYPES.enchantment;
        this.text = "Southsea Captain is granting +1/+1.";
        this.set = "EXPERT1";
    }

}

export class EX1_549o extends Card {
    constructor() {
        super();
        this.name = "Bestial Wrath";
        this.type = CARDTYPES.enchantment;
        this.text = "+2 Attack and <b>Immune</b> this turn.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.hunter;
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class LOEA09_1 extends Card {
    constructor() {
        super();
        this.name = "Lord Slitherspear";
        this.type = CARDTYPES.hero;
        this.set = "LOE";
        this.health = 30;
    }

}

export class AT_084e extends Card {
    constructor() {
        super();
        this.name = "Equipped";
        this.type = CARDTYPES.enchantment;
        this.text = "+2 Attack.";
        this.set = "TGT";
    }

}

export class XXX_021 extends Card {
    constructor() {
        super();
        this.name = "Restore All Health";
        this.type = CARDTYPES.spell;
        this.text = "Restore all Health to a character.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class CS2_073e2 extends Card {
    constructor() {
        super();
        this.name = "Cold Blood";
        this.type = CARDTYPES.enchantment;
        this.text = "+4 Attack.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.rogue;
    }

}

export class BRMA17_8 extends Card {
    constructor() {
        super();
        this.name = "Nefarian Strikes!";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nNefarian rains fire from above!";
        this.set = "BRM";
        this.manacost = 0;
    }

}

export class TB_006 extends Card {
    constructor() {
        super();
        this.name = "Big Banana";
        this.type = CARDTYPES.spell;
        this.text = "Give a minion +2/+2.";
        this.set = "TB";
        this.manacost = 1;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class HERO_08 extends Card {
    constructor() {
        super();
        this.name = "Jaina Proudmoore";
        this.type = CARDTYPES.hero;
        this.set = "CORE";
        this.health = 30;
        this.characterClass = CHARACTERCLASS.mage;
        this.rarity = rarity.free;
        this.collectible = true;
    }

}

export class GVG_071 extends Card {
    constructor() {
        super();
        this.name = "Lost Tallstrider";
        this.type = CARDTYPES.minion;
        this.set = "GVG";
        this.health = 4;
        this.attack = 5;
        this.manacost = 4;
        this.artist = "Benjamin Zhang";
        this.race = race.beast;
        this.flavor = "The message, \"If found, please return to Mulgore,\" is tattooed on his rear.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class LOEA13_1h extends Card {
    constructor() {
        super();
        this.name = "Heroic Skelesaurus";
        this.type = CARDTYPES.hero;
        this.set = "LOE";
        this.health = 30;
    }

}

export class NAX3_01 extends Card {
    constructor() {
        super();
        this.name = "Maexxna";
        this.type = CARDTYPES.hero;
        this.set = "NAXX";
        this.health = 30;
    }

}

export class LOEA14_1 extends Card {
    constructor() {
        super();
        this.name = "The Steel Sentinel";
        this.type = CARDTYPES.hero;
        this.set = "LOE";
        this.health = 30;
    }

}

export class EX1_304e extends Card {
    constructor() {
        super();
        this.name = "Consume";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased stats.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.warlock;
    }

}

export class XXX_018 extends Card {
    constructor() {
        super();
        this.name = "Destroy All Minions";
        this.type = CARDTYPES.spell;
        this.text = "Destroy all minions.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

}

export class BRMA04_3 extends Card {
    constructor() {
        super();
        this.name = "Firesworn";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Deal 1 damage to the enemy hero for each Firesworn that died this turn.";
        this.set = "BRM";
        this.health = 5;
        this.attack = 0;
        this.manacost = 0;
    }

    //[\"DEATHRATTLE\"]

}

export class EX1_334e extends Card {
    constructor() {
        super();
        this.name = "Shadow Madness";
        this.type = CARDTYPES.enchantment;
        this.text = "This minion has switched controllers this turn.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.priest;
    }

}

export class LOE_105 extends Card {
    constructor() {
        super();
        this.name = "Explorer's Hat";
        this.type = CARDTYPES.spell;
        this.text = "Give a minion +1/+1 and \"<b>Deathrattle:</b> Add an Explorer's Hat to your hand.\"";
        this.set = "LOE";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Joe Wilson";
        this.flavor = "Harrison Jones was disappointed that he didn't get to be part of the League of Explorers, but his hat did.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after starting the League of Explorers adventure.";
        this.howToEarn = "Unlocked by starting the League of Explorers adventure.";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class GVG_064 extends Card {
    constructor() {
        super();
        this.name = "Puddlestomper";
        this.type = CARDTYPES.minion;
        this.set = "GVG";
        this.health = 2;
        this.attack = 3;
        this.manacost = 2;
        this.artist = "Jaemin Kim";
        this.race = race.murloc;
        this.flavor = "He pays homage to Morgl, the great murloc oracle! (Who doesn't??)";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class LOEA02_04 extends Card {
    constructor() {
        super();
        this.name = "Wish for Valor";
        this.type = CARDTYPES.spell;
        this.text = "<b>Discover</b> a (4)-Cost card.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class NAX12_03H extends Card {
    constructor() {
        super();
        this.name = "Jaws";
        this.type = CARDTYPES.weapon;
        this.text = "Whenever a minion with <b>Deathrattle</b> dies, gain +2 Attack.";
        this.set = "NAXX";
        this.attack = 3;
        this.manacost = 1;
        this.durability = "5";
    }

}

export class LOEA16_26H extends Card {
    constructor() {
        super();
        this.name = "Skelesaurus Hex";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, put a random card in your hand. It costs (0).";
        this.set = "LOE";
        this.health = 10;
        this.attack = 10;
        this.manacost = 10;
    }

}

export class BRMC_88 extends Card {
    constructor() {
        super();
        this.name = "Drakonid Slayer";
        this.type = CARDTYPES.minion;
        this.text = "Also damages the minions next to whomever he attacks.";
        this.set = "TB";
        this.health = 6;
        this.attack = 6;
        this.manacost = 6;
        this.race = race.dragon;
    }

}

export class LOEA05_01h extends Card {
    constructor() {
        super();
        this.name = "Heroic Scarvash";
        this.type = CARDTYPES.hero;
        this.set = "LOE";
        this.health = 30;
    }

}

export class NAX12_01 extends Card {
    constructor() {
        super();
        this.name = "Gluth";
        this.type = CARDTYPES.hero;
        this.set = "NAXX";
        this.health = 30;
    }

}

export class BRMA07_1H extends Card {
    constructor() {
        super();
        this.name = "Highlord Omokk";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class LOEA02_10a extends Card {
    constructor() {
        super();
        this.name = "Leokk";
        this.type = CARDTYPES.minion;
        this.text = "Your minions have +1 Attack.";
        this.set = "LOE";
        this.health = 4;
        this.attack = 2;
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.hunter;
        this.race = race.beast;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}

}

export class LOEA16_1H extends Card {
    constructor() {
        super();
        this.name = "Heroic Rafaam";
        this.type = CARDTYPES.hero;
        this.set = "LOE";
        this.health = 30;
    }

    //[\"LOEA16_18H\",\"LOEA16_19H\",\"LOEA16_21H\",\"LOEA16_22H\",\"LOEA16_23H\",\"LOEA16_24H\",\"LOEA16_25H\",\"LOEA16_26H\",\"LOEA16_27H\"]

}

export class GVG_049e extends Card {
    constructor() {
        super();
        this.name = "Might of Zul'Farrak";
        this.type = CARDTYPES.enchantment;
        this.text = "Multiplying Attack.";
        this.set = "GVG";
        this.characterClass = CHARACTERCLASS.hunter;
    }

}

export class BRMA09_1 extends Card {
    constructor() {
        super();
        this.name = "Rend Blackhand";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class NAX6_01H extends Card {
    constructor() {
        super();
        this.name = "Loatheb";
        this.type = CARDTYPES.hero;
        this.set = "NAXX";
        this.health = 99;
    }

}

export class BRMA11_1 extends Card {
    constructor() {
        super();
        this.name = "Vaelastrasz the Corrupt";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class BRMA16_2H extends Card {
    constructor() {
        super();
        this.name = "Echolocate";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nEquip a weapon that grows as your opponent plays cards.";
        this.set = "BRM";
        this.manacost = 0;
    }

}

export class BRMA10_1H extends Card {
    constructor() {
        super();
        this.name = "Razorgore the Untamed";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class EX1_590e extends Card {
    constructor() {
        super();
        this.name = "Shadows of M'uru";
        this.type = CARDTYPES.enchantment;
        this.text = "This minion has consumed Divine Shields and has increased Attack and Health.";
        this.set = "EXPERT1";
        this.rarity = rarity.common;
    }

}

export class EX1_058 extends Card {
    constructor() {
        super();
        this.name = "Sunfury Protector";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Give adjacent minions <b>Taunt</b>.";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 2;
        this.manacost = 2;
        this.artist = "James Ryman";
        this.flavor = "She carries a shield, but only so she can give it to someone she can stand behind.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.faction = "ALLIANCE";
    }

    //[\"BATTLECRY\"]

}

export class CS2_041e extends Card {
    constructor() {
        super();
        this.name = "Ancestral Infusion";
        this.type = CARDTYPES.enchantment;
        this.text = "Taunt.";
        this.set = "CORE";
        this.characterClass = CHARACTERCLASS.shaman;
    }

    //[\"TAUNT\"]

}

export class EX1_534t extends Card {
    constructor() {
        super();
        this.name = "Hyena";
        this.type = CARDTYPES.minion;
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 2;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Andrew Robinson";
        this.race = race.beast;
        this.rarity = rarity.rare;
    }

}

export class BRM_026 extends Card {
    constructor() {
        super();
        this.name = "Hungry Dragon";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Summon a random 1-Cost minion for your opponent.";
        this.set = "BRM";
        this.health = 6;
        this.attack = 5;
        this.manacost = 4;
        this.artist = "John Polidora";
        this.race = race.dragon;
        this.flavor = "Hungry Hungry Dragon is NOT a fun game.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating Chromaggus in Blackwing Lair.";
        this.howToEarn = "Unlocked in Blackwing Lair, in the Blackrock Mountain adventure.";
    }

    //[\"BATTLECRY\"]

}

export class GVG_095 extends Card {
    constructor() {
        super();
        this.name = "Goblin Sapper";
        this.type = CARDTYPES.minion;
        this.text = "Has +4 Attack while your opponent has 6 or more cards in hand.";
        this.set = "GVG";
        this.health = 4;
        this.attack = 2;
        this.manacost = 3;
        this.artist = "Jesper Ejsing";
        this.flavor = "Heâ€™s not such a binge exploder anymore. These days, he only explodes socially.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"AURA\"]

}

export class LOEA14_2 extends Card {
    constructor() {
        super();
        this.name = "Platemail Armor";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Passive Hero Power</b>\nYour Hero can only take 1 damage at a time.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class BRM_014 extends Card {
    constructor() {
        super();
        this.name = "Core Rager";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> If your hand is empty, gain +3/+3.";
        this.set = "BRM";
        this.health = 4;
        this.attack = 4;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Jomaro Kindred";
        this.race = race.beast;
        this.flavor = "It takes a special kind of hunter to venture deep into a firey lava pit and convince a monster who lives there to come home and be a cuddly housepet.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating Highlord Omokk in Blackrock Spire.";
        this.howToEarn = "Unlocked in Blackrock Spire, in the Blackrock Mountain adventure.";
    }

    //[\"BATTLECRY\"]

}

export class CS2_059 extends Card {
    constructor() {
        super();
        this.name = "Blood Imp";
        this.type = CARDTYPES.minion;
        this.text = "<b>Stealth</b>. At the end of your turn, give another random friendly minion +1 Health.";
        this.set = "EXPERT1";
        this.health = 1;
        this.attack = 0;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Bernie Kang";
        this.race = race.demon;
        this.flavor = "Imps are content to hide and viciously taunt everyone nearby.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"STEALTH\"]

}

export class LOE_019t extends Card {
    constructor() {
        super();
        this.name = "Map to the Golden Monkey";
        this.type = CARDTYPES.spell;
        this.text = "Shuffle the Golden Monkey into your deck. Draw a card.";
        this.set = "LOE";
        this.manacost = 2;
        this.artist = "Milivoj Ceran";
    }

}

export class EX1_379e extends Card {
    constructor() {
        super();
        this.name = "Repentance";
        this.type = CARDTYPES.enchantment;
        this.text = "Health reduced to 1.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.paladin;
    }

}

export class LOEA09_6 extends Card {
    constructor() {
        super();
        this.name = "Slithering Archer";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Deal 1 damage.";
        this.set = "LOE";
        this.health = 2;
        this.attack = 2;
        this.manacost = 2;
    }

    //[\"BATTLECRY\"]
    //{\"REQ_NONSELF_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class NAX1h_03 extends Card {
    constructor() {
        super();
        this.name = "Nerubian";
        this.type = CARDTYPES.minion;
        this.set = "NAXX";
        this.health = 4;
        this.attack = 4;
        this.manacost = 2;
    }

}

export class NAX5_02H extends Card {
    constructor() {
        super();
        this.name = "Eruption";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDeal 3 damage to the left-most enemy minion.";
        this.set = "NAXX";
        this.manacost = 0;
    }

    //{\"REQ_MINIMUM_ENEMY_MINIONS\":0}

}

export class CS2_102 extends Card {
    constructor() {
        super();
        this.name = "Armor Up!";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nGain 2 Armor.";
        this.set = "CORE";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.warrior;
        this.rarity = rarity.free;
    }

}

export class EX1_014te extends Card {
    constructor() {
        super();
        this.name = "Bananas";
        this.type = CARDTYPES.enchantment;
        this.text = "Has +1/+1.";
        this.set = "EXPERT1";
    }

}

export class TB_015 extends Card {
    constructor() {
        super();
        this.name = "Pirate";
        this.type = CARDTYPES.minion;
        this.set = "TB";
        this.health = 3;
        this.attack = 2;
        this.manacost = 2;
        this.race = race.pirate;
    }

}

export class GVG_046e extends Card {
    constructor() {
        super();
        this.name = "The King";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Attack.";
        this.set = "GVG";
        this.characterClass = CHARACTERCLASS.hunter;
    }

}

export class BRM_024 extends Card {
    constructor() {
        super();
        this.name = "Drakonid Crusher";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> If your opponent has 15 or less Health, gain +3/+3.";
        this.set = "BRM";
        this.health = 6;
        this.attack = 6;
        this.manacost = 6;
        this.artist = "Slawomir Maniak";
        this.race = race.dragon;
        this.flavor = "Drakonids were created to have all the bad parts of a dragon in the form of a humaniod. But, like, why?";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating Atramedes in the Hidden Laboratory.";
        this.howToEarn = "Unlocked in Hidden Laboratory, in the Blackrock Mountain adventure.";
    }

    //[\"BATTLECRY\"]

}

export class TB_RandCardCost extends Card {
    constructor() {
        super();
        this.name = "TBRandomCardCost";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
    }

}

export class CS2_101t extends Card {
    constructor() {
        super();
        this.name = "Silver Hand Recruit";
        this.type = CARDTYPES.minion;
        this.set = "CORE";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.paladin;
        this.rarity = rarity.free;
    }

}

export class CRED_18 extends Card {
    constructor() {
        super();
        this.name = "Becca Abel";
        this.type = CARDTYPES.minion;
        this.text = "Whenever you draw a card, make it Golden.";
        this.set = "CREDITS";
        this.health = 2;
        this.attack = 2;
        this.manacost = 2;
        this.rarity = rarity.legendary;
    }

}

export class XXX_054e extends Card {
    constructor() {
        super();
        this.name = "Weapon Buff Enchant";
        this.type = CARDTYPES.enchantment;
        this.set = "CHEAT";
    }

}

export class DS1_184 extends Card {
    constructor() {
        super();
        this.name = "Tracking";
        this.type = CARDTYPES.spell;
        this.text = "Look at the top three cards of your deck. Draw one and discard the others.";
        this.set = "CORE";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Mauro Cascioli";
        this.flavor = "For the person who just cannot decide what card to put into a deck!";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 15.";
        this.howToEarn = "Unlocked at Level 1.";
    }

}

export class BRM_010t2 extends Card {
    constructor() {
        super();
        this.name = "Druid of the Flame";
        this.type = CARDTYPES.minion;
        this.set = "BRM";
        this.health = 5;
        this.attack = 2;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Hideaki Takamura";
        this.race = race.beast;
        this.rarity = rarity.common;
    }

}

export class TB_CoOpBossSpell_2 extends Card {
    constructor() {
        super();
        this.name = "Bomb Salvo";
        this.type = CARDTYPES.spell;
        this.text = "Deal Attack damage to up to 3 random targets.";
        this.set = "TB";
        this.manacost = 0;
    }

}

export class LOEA15_1 extends Card {
    constructor() {
        super();
        this.name = "Rafaam";
        this.type = CARDTYPES.hero;
        this.set = "LOE";
        this.health = 30;
    }

}

export class BRMA13_4H extends Card {
    constructor() {
        super();
        this.name = "Wild Magic";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nPut a random spell from your opponent's class into your hand.";
        this.set = "BRM";
        this.manacost = 1;
    }

}

export class XXX_041 extends Card {
    constructor() {
        super();
        this.name = "Destroy Hero Power";
        this.type = CARDTYPES.spell;
        this.text = "Destroy a player's Hero Power.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

    //{\"REQ_TARGET_TO_PLAY\":0,\"REQ_HERO_TARGET\":0}

}

export class GVG_105 extends Card {
    constructor() {
        super();
        this.name = "Piloted Sky Golem";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Summon a random 4-Cost minion.";
        this.set = "GVG";
        this.health = 4;
        this.attack = 6;
        this.manacost = 6;
        this.artist = "Michael Phillippi";
        this.race = race.mechanical;
        this.flavor = "The pinnacle of goblin engineering. Includes an espresso machine and foot massager.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //[\"DEATHRATTLE\"]

}

export class CS2_tk1 extends Card {
    constructor() {
        super();
        this.name = "Sheep";
        this.type = CARDTYPES.minion;
        this.set = "CORE";
        this.health = 1;
        this.attack = 1;
        this.manacost = 0;
        this.race = race.beast;
        this.rarity = rarity.common;
    }

}

export class LOEA16_8a extends Card {
    constructor() {
        super();
        this.name = "Putressed";
        this.type = CARDTYPES.enchantment;
        this.text = "Attack and Health swapped.";
        this.set = "LOE";
    }

}

export class LOE_019 extends Card {
    constructor() {
        super();
        this.name = "Unearthed Raptor";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Choose a friendly minion. Gain a copy of its <b>Deathrattle</b> effect.";
        this.set = "LOE";
        this.health = 4;
        this.attack = 3;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Trent Kaniuga";
        this.flavor = "Still hunting for the ones who earthed him.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in Uldaman, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in Uldaman, in the League of Explorers adventure.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_TARGET_WITH_DEATHRATTLE\":0,\"REQ_FRIENDLY_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class BRMA02_2 extends Card {
    constructor() {
        super();
        this.name = "Jeering Crowd";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon a 1/1 Spectator with <b>Taunt</b>.";
        this.set = "BRM";
        this.manacost = 1;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}

}

export class TBA01_6 extends Card {
    constructor() {
        super();
        this.name = "Molten Rage";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon a 5/1 Magma Rager.";
        this.set = "TB";
        this.manacost = 2;
    }

}

export class XXX_044 extends Card {
    constructor() {
        super();
        this.name = "Hand Swapper Minion";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Discard 3 cards, then draw 3 cards.";
        this.set = "CHEAT";
        this.health = 5;
        this.attack = 5;
        this.manacost = 0;
        this.rarity = rarity.common;
    }

}

export class LOE_018 extends Card {
    constructor() {
        super();
        this.name = "Tunnel Trogg";
        this.type = CARDTYPES.minion;
        this.text = "Whenever you <b>Overload</b>, gain +1 Attack per locked Mana Crystal.";
        this.set = "LOE";
        this.health = 3;
        this.attack = 1;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Andrew Hou";
        this.flavor = "Sure, they're ugly, but they live in tunnels.  You try your beauty routine without natural light.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in Uldaman, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in Uldaman, in the League of Explorers adventure.";
    }

}

export class EX1_067 extends Card {
    constructor() {
        super();
        this.name = "Argent Commander";
        this.type = CARDTYPES.minion;
        this.text = "<b>Charge</b>\n<b>Divine Shield</b>";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 4;
        this.manacost = 6;
        this.artist = "James Ryman";
        this.flavor = "The Argent Dawn stands vigilant against the Scourge, as well as people who cut in line at coffee shops.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"CHARGE\",\"DIVINE_SHIELD\"]

}

export class AT_066e extends Card {
    constructor() {
        super();
        this.name = "Forges of Orgrimmar";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Attack.";
        this.set = "TGT";
        this.characterClass = CHARACTERCLASS.warrior;
    }

}

export class EX1_145 extends Card {
    constructor() {
        super();
        this.name = "Preparation";
        this.type = CARDTYPES.spell;
        this.text = "The next spell you cast this turn costs (3) less.";
        this.set = "EXPERT1";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Clint Langley";
        this.flavor = "\"Be Prepared\" - Rogue Motto";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class LOEA07_02h extends Card {
    constructor() {
        super();
        this.name = "Heroic Mine Shaft";
        this.type = CARDTYPES.hero;
        this.set = "LOE";
        this.health = 80;
    }

}

export class EX1_572 extends Card {
    constructor() {
        super();
        this.name = "Ysera";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, add a Dream Card to your hand.";
        this.set = "EXPERT1";
        this.health = 12;
        this.attack = 4;
        this.manacost = 9;
        this.artist = "Gabor Szikszai";
        this.race = race.dragon;
        this.flavor = "Ysera rules the Emerald Dream.  Which is some kind of green-mirror-version of the real world, or something?";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"DREAM_01\",\"DREAM_02\",\"DREAM_03\",\"DREAM_04\",\"DREAM_05\"]

}

export class EX1_289 extends Card {
    constructor() {
        super();
        this.name = "Ice Barrier";
        this.type = CARDTYPES.spell;
        this.text = "<b>Secret:</b> When your hero is attacked, gain 8 Armor.";
        this.set = "EXPERT1";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Alex Garner";
        this.flavor = "This is Rank 1.  Rank 2 is Chocolate Milk Barrier.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"SECRET\"]

}

export class EX1_573 extends Card {
    constructor() {
        super();
        this.name = "Cenarius";
        this.type = CARDTYPES.minion;
        this.text = "<b>Choose One</b> - Give your other minions +2/+2; or Summon two 2/2 Treants with <b>Taunt</b>.";
        this.set = "EXPERT1";
        this.health = 8;
        this.attack = 5;
        this.manacost = 9;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "Yes, he's a demigod. No, he doesn't need to wear a shirt.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

}

export class NAX1h_04 extends Card {
    constructor() {
        super();
        this.name = "Skitter";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon a 4/4 Nerubian.";
        this.set = "NAXX";
        this.manacost = 2;
    }

}

export class GVG_030be extends Card {
    constructor() {
        super();
        this.name = "Tank Mode";
        this.type = CARDTYPES.enchantment;
        this.text = "+1 Health.";
        this.set = "GVG";
        this.characterClass = CHARACTERCLASS.druid;
    }

}

export class HRW02_1 extends Card {
    constructor() {
        super();
        this.name = "Gearmaster Mechazod";
        this.type = CARDTYPES.minion;
        this.text = "<b>Boss</b>\nAt the beginning of each turn, Mechazod strikes!";
        this.set = "TB";
        this.health = 80;
        this.attack = 1;
        this.manacost = 10;
        this.rarity = rarity.legendary;
    }

    //[\"TAUNT\",\"InvisibleDeathrattle\"]

}

export class XXX_063 extends Card {
    constructor() {
        super();
        this.name = "Destroy ALL Secrets";
        this.type = CARDTYPES.spell;
        this.text = "Destroy all <b>Secrets:</b>.";
        this.set = "CHEAT";
        this.manacost = 0;
    }

}

export class TU4c_006e extends Card {
    constructor() {
        super();
        this.name = "Bananas";
        this.type = CARDTYPES.enchantment;
        this.text = "This minion has +1/+1. <i>(+1 Attack/+1 Health)</i>";
        this.set = "MISSIONS";
    }

}

export class CS2_213 extends Card {
    constructor() {
        super();
        this.name = "Reckless Rocketeer";
        this.type = CARDTYPES.minion;
        this.text = "<b>Charge</b>";
        this.set = "CORE";
        this.health = 2;
        this.attack = 5;
        this.manacost = 6;
        this.artist = "John Polidora";
        this.flavor = "One Insane Rocketeer.   One Rocket full of Explosives.   Infinite Fun.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.faction = "HORDE";
        this.howToEarnGolden = "Unlocked at Shaman Level 59.";
    }

    //[\"CHARGE\"]

}

export class BRM_010a extends Card {
    constructor() {
        super();
        this.name = "Firecat Form";
        this.type = CARDTYPES.spell;
        this.text = "Transform into a 5/2 minion.";
        this.set = "BRM";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
        this.race = race.beast;
        this.rarity = rarity.common;
    }

}

export class TB_PickYourFate_2_Ench extends Card {
    constructor() {
        super();
        this.name = "Pick Your Fate 2 Ench";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
    }

}

export class LOEA09_9H extends Card {
    constructor() {
        super();
        this.name = "Naga Repellent";
        this.type = CARDTYPES.spell;
        this.text = "Change the Attack of all Hungry Naga to 1.";
        this.set = "LOE";
        this.manacost = 1;
    }

}

export class TB_PickYourFate_1 extends Card {
    constructor() {
        super();
        this.name = "Dire Fate: Taunt and Charge";
        this.type = CARDTYPES.spell;
        this.text = "All minions have <b>Taunt</b> and <b>Charge</b>.";
        this.set = "TB";
        this.manacost = 0;
    }

}

export class DS1_178 extends Card {
    constructor() {
        super();
        this.name = "Tundra Rhino";
        this.type = CARDTYPES.minion;
        this.text = "Your Beasts have <b>Charge</b>.";
        this.set = "CORE";
        this.health = 5;
        this.attack = 2;
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Lars Grant-West";
        this.race = race.beast;
        this.flavor = "Tundra rhinos are often mistaken for kodos.  Or am I mistaken?";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 43.";
        this.howToEarn = "Unlocked at Level 8.";
    }

}

export class EX1_603e extends Card {
    constructor() {
        super();
        this.name = "Whipped Into Shape";
        this.type = CARDTYPES.enchantment;
        this.text = "+2 Attack.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.warrior;
    }

}

export class TB_PickYourFate_6 extends Card {
    constructor() {
        super();
        this.name = "Fate: Portals";
        this.type = CARDTYPES.spell;
        this.text = "Shuffle 10 Unstable Portals into each player's deck.";
        this.set = "TB";
        this.manacost = 0;
    }

}

export class GVG_080t extends Card {
    constructor() {
        super();
        this.name = "Druid of the Fang";
        this.type = CARDTYPES.minion;
        this.set = "GVG";
        this.health = 7;
        this.attack = 7;
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Massive Black";
        this.race = race.beast;
    }

}

export class LOEA04_25h extends Card {
    constructor() {
        super();
        this.name = "Seething Statue";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, deal 5 damage to all enemies.";
        this.set = "LOE";
        this.health = 9;
        this.attack = 5;
        this.manacost = 8;
    }

}

export class BRMA13_8 extends Card {
    constructor() {
        super();
        this.name = "DIE, INSECT!";
        this.type = CARDTYPES.spell;
        this.text = "Deal $8 damage to a random enemy.";
        this.set = "BRM";
        this.manacost = 0;
    }

}

export class tt_010a extends Card {
    constructor() {
        super();
        this.name = "Spellbender";
        this.type = CARDTYPES.minion;
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 1;
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.mage;
        this.rarity = rarity.epic;
    }

}

export class CS2_188 extends Card {
    constructor() {
        super();
        this.name = "Abusive Sergeant";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Give a minion +2 Attack this turn.";
        this.set = "EXPERT1";
        this.health = 1;
        this.attack = 2;
        this.manacost = 1;
        this.artist = "Luca Zontini";
        this.flavor = "ADD ME TO YOUR DECK, MAGGOT!";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "ALLIANCE";
        this.targetingArrowText = "Grant +2 Attack.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class EX1_145o extends Card {
    constructor() {
        super();
        this.name = "Preparation";
        this.type = CARDTYPES.enchantment;
        this.text = "The next spell you cast this turn costs (3) less.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.rogue;
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class NAX4_01 extends Card {
    constructor() {
        super();
        this.name = "Noth the Plaguebringer";
        this.type = CARDTYPES.hero;
        this.set = "NAXX";
        this.health = 30;
        this.characterClass = CHARACTERCLASS.mage;
    }

}

export class AT_002 extends Card {
    constructor() {
        super();
        this.name = "Effigy";
        this.type = CARDTYPES.spell;
        this.text = "<b>Secret:</b> When a friendly minion dies, summon a random minion with the same Cost.";
        this.set = "TGT";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Tooth";
        this.flavor = "Burning man, brah.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"SECRET\"]

}

export class EX1_014 extends Card {
    constructor() {
        super();
        this.name = "King Mukla";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Give your opponent 2 Bananas.";
        this.set = "EXPERT1";
        this.health = 5;
        this.attack = 5;
        this.manacost = 3;
        this.artist = "Sunny Gho";
        this.race = race.beast;
        this.flavor = "King Mukla wanders Jaguero Isle, searching for love.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class AT_132_PRIEST extends Card {
    constructor() {
        super();
        this.name = "Heal";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nRestore #4 Health.";
        this.set = "TGT";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.priest;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class BRMA09_2 extends Card {
    constructor() {
        super();
        this.name = "Open the Gates";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon three 1/1 Whelps. Get a new Hero Power.";
        this.set = "BRM";
        this.manacost = 2;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}
    //[\"BRMA09_3\",\"BRMA09_4\"]

}

export class GVG_046 extends Card {
    constructor() {
        super();
        this.name = "King of Beasts";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>. <b>Battlecry:</b> Gain +1 Attack for each other Beast you have.";
        this.set = "GVG";
        this.health = 6;
        this.attack = 2;
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Seamus Gallagher";
        this.race = race.beast;
        this.flavor = "He never sleeps.  Not even in the mighty jungle.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\",\"TAUNT\"]

}

export class DS1_188 extends Card {
    constructor() {
        super();
        this.name = "Gladiator's Longbow";
        this.type = CARDTYPES.weapon;
        this.text = "Your hero is <b>Immune</b> while attacking.";
        this.set = "EXPERT1";
        this.attack = 5;
        this.manacost = 7;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Peter C. Lee";
        this.flavor = "The longbow allows shots to be fired from farther away and is useful for firing on particularly odorous targets.";
        this.rarity = rarity.epic;
        this.collectible = true;
        this.durability = "2";
    }

}

export class CS2_186 extends Card {
    constructor() {
        super();
        this.name = "War Golem";
        this.type = CARDTYPES.minion;
        this.set = "CORE";
        this.health = 7;
        this.attack = 7;
        this.manacost = 7;
        this.artist = "Dave Kendall";
        this.flavor = "Golems are not afraid, but for some reason they still run when you cast Fear on them.  Instinct, maybe?  A desire to blend in?";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Rogue Level 51.";
    }

}

export class LOE_023 extends Card {
    constructor() {
        super();
        this.name = "Dark Peddler";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry: Discover</b> a\n1-Cost card.";
        this.set = "LOE";
        this.health = 2;
        this.attack = 2;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "George Davis";
        this.flavor = "I'm offering you a bargain here!  This amazing vacuum cleaner for your soul!";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in the Temple of Orsis, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in the Temple of Orsis, in the League of Explorers adventure.";
    }

    //[\"BATTLECRY\"]

}

export class BRM_010t extends Card {
    constructor() {
        super();
        this.name = "Druid of the Flame";
        this.type = CARDTYPES.minion;
        this.set = "BRM";
        this.health = 2;
        this.attack = 5;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Ben Zhang";
        this.race = race.beast;
        this.rarity = rarity.common;
    }

}

export class EX1_028 extends Card {
    constructor() {
        super();
        this.name = "Stranglethorn Tiger";
        this.type = CARDTYPES.minion;
        this.text = "<b>Stealth</b>";
        this.set = "EXPERT1";
        this.health = 5;
        this.attack = 5;
        this.manacost = 5;
        this.artist = "Alex Horley Orlandelli";
        this.race = race.beast;
        this.flavor = "The wonderful thing about tigers is tigers are wonderful things!";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "ALLIANCE";
    }

    //[\"STEALTH\"]

}

export class GVG_040 extends Card {
    constructor() {
        super();
        this.name = "Siltfin Spiritwalker";
        this.type = CARDTYPES.minion;
        this.text = "Whenever another friendly Murloc dies, draw a card. <b>Overload</b>: (1)";
        this.set = "GVG";
        this.health = 5;
        this.attack = 2;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Clint Langley";
        this.race = race.murloc;
        this.flavor = "The elements respond to anyone who calls them for a worthy cause, even if you call them by yelling, \"MRGHRGLGLGL!\"";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //[\"OVERLOAD\"]

}

export class AT_011 extends Card {
    constructor() {
        super();
        this.name = "Holy Champion";
        this.type = CARDTYPES.minion;
        this.text = "Whenever a character is healed, gain +2 Attack.";
        this.set = "TGT";
        this.health = 5;
        this.attack = 3;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Alex Garner";
        this.flavor = "She really likes seeing people get better.  That's why she hurts them in the first place.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class CRED_46 extends Card {
    constructor() {
        super();
        this.name = "Keith Landes";
        this.type = CARDTYPES.minion;
        this.text = "At the start of your turn, get -2 Health due to hunger.";
        this.set = "CREDITS";
        this.health = 6;
        this.attack = 2;
        this.manacost = 2;
        this.rarity = rarity.legendary;
    }

}

export class XXX_022e extends Card {
    constructor() {
        super();
        this.name = "Free Cards";
        this.type = CARDTYPES.enchantment;
        this.text = "Your cards cost (0) for the rest of the game.";
        this.set = "CHEAT";
    }

}

export class LOEA09_2 extends Card {
    constructor() {
        super();
        this.name = "Enraged!";
        this.type = CARDTYPES.hero_power;
        this.text = "Give your hero +2 attack this turn.";
        this.set = "LOE";
        this.manacost = 2;
    }

}

export class AT_121e extends Card {
    constructor() {
        super();
        this.name = "Huge Ego";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased stats.";
        this.set = "TGT";
    }

}

export class AT_037t extends Card {
    constructor() {
        super();
        this.name = "Sapling";
        this.type = CARDTYPES.minion;
        this.set = "TGT";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.druid;
    }

}

export class XXX_009e extends Card {
    constructor() {
        super();
        this.name = "Empty Enchant";
        this.type = CARDTYPES.enchantment;
        this.text = "This enchantment does nothing.";
        this.set = "CHEAT";
        this.rarity = rarity.common;
    }

}

export class TBST_006 extends Card {
    constructor() {
        super();
        this.name = "OLDTBST Push Common Card";
        this.type = CARDTYPES.enchantment;
        this.text = "push a common card into player's hand";
        this.set = "TB";
    }

    //[\"TBST_003\",\"TBST_002\",\"TBST_001\"]

}

export class AT_045e extends Card {
    constructor() {
        super();
        this.name = "Empowering Mist";
        this.type = CARDTYPES.enchantment;
        this.text = "+1/+1.";
        this.set = "TGT";
    }

}

export class XXX_010 extends Card {
    constructor() {
        super();
        this.name = "Silence - debug";
        this.type = CARDTYPES.spell;
        this.text = "Remove all enchantments and powers from a minion.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0,\"REQ_HERO_TARGET\":0}

}

export class AT_001 extends Card {
    constructor() {
        super();
        this.name = "Flame Lance";
        this.type = CARDTYPES.spell;
        this.text = "Deal $8 damage to a minion.";
        this.set = "TGT";
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Nutthapon Petchthai";
        this.flavor = "It's on the rack next to ice lance, acid lance, and English muffin lance.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class AT_070 extends Card {
    constructor() {
        super();
        this.name = "Skycap'n Kragg";
        this.type = CARDTYPES.minion;
        this.text = "<b>Charrrrrge</b>\nCosts (1) less for each friendly Pirate.";
        this.set = "TGT";
        this.health = 6;
        this.attack = 4;
        this.manacost = 7;
        this.artist = "Alex Horley Orlandelli";
        this.race = race.pirate;
        this.flavor = "What's more boss than riding a parrot with a jawbone for a shoulderpad while wielding a giant hook-lance-thing and wearing a pirate hat?  NOTHING.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"CHARGE\"]

}

export class LOEA09_6H extends Card {
    constructor() {
        super();
        this.name = "Slithering Archer";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Deal 2 damage to all enemy minions.";
        this.set = "LOE";
        this.health = 2;
        this.attack = 2;
        this.manacost = 2;
    }

    //[\"BATTLECRY\"]

}

export class NAX9_05 extends Card {
    constructor() {
        super();
        this.name = "Runeblade";
        this.type = CARDTYPES.weapon;
        this.text = "Has +3 Attack if the other Horsemen are dead.";
        this.set = "NAXX";
        this.attack = 1;
        this.manacost = 3;
        this.durability = "3";
    }

}

export class EX1_625t extends Card {
    constructor() {
        super();
        this.name = "Mind Spike";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDeal $2 damage.";
        this.set = "EXPERT1";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.priest;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class HERO_09 extends Card {
    constructor() {
        super();
        this.name = "Anduin Wrynn";
        this.type = CARDTYPES.hero;
        this.set = "CORE";
        this.health = 30;
        this.characterClass = CHARACTERCLASS.priest;
        this.rarity = rarity.free;
        this.collectible = true;
    }

}

export class DS1h_292_H1_AT_132 extends Card {
    constructor() {
        super();
        this.name = "Ballista Shot";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDeal $3 damage to the enemy hero.";
        this.set = "HERO_SKINS";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.hunter;
    }

    //{\"REQ_STEADY_SHOT\":0}

}

export class EX1_155be extends Card {
    constructor() {
        super();
        this.name = "Mark of Nature";
        this.type = CARDTYPES.enchantment;
        this.text = "This minion has +4 Health and <b>Taunt</b>.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.druid;
    }

}

export class CS2_092 extends Card {
    constructor() {
        super();
        this.name = "Blessing of Kings";
        this.type = CARDTYPES.spell;
        this.text = "Give a minion +4/+4. <i>(+4 Attack/+4 Health)</i>";
        this.set = "CORE";
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Lucas Graciano";
        this.flavor = "Given the number of kings who have been assassinated, are you sure you want their blessing?";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 49.";
        this.howToEarn = "Unlocked at Level 10.";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class AT_095 extends Card {
    constructor() {
        super();
        this.name = "Silent Knight";
        this.type = CARDTYPES.minion;
        this.text = "<b>Stealth</b>\n<b>Divine Shield</b>";
        this.set = "TGT";
        this.health = 2;
        this.attack = 2;
        this.manacost = 3;
        this.artist = "Esad Ribic";
        this.flavor = "He used to be a librarian.  Old habits die hard.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"DIVINE_SHIELD\",\"STEALTH\"]

}

export class CS2_182 extends Card {
    constructor() {
        super();
        this.name = "Chillwind Yeti";
        this.type = CARDTYPES.minion;
        this.set = "CORE";
        this.health = 5;
        this.attack = 4;
        this.manacost = 4;
        this.artist = "Mauro Cascioli";
        this.flavor = "He always dreamed of coming down from the mountains and opening a noodle shop, but he never got the nerve.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Warrior Level 55.";
    }

}

export class LOEA12_2H extends Card {
    constructor() {
        super();
        this.name = "Pearl of the Tides";
        this.type = CARDTYPES.hero_power;
        this.text = "At the end of your turn, replace all minions with new ones. Yours cost (1) more.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class LOEA15_1H extends Card {
    constructor() {
        super();
        this.name = "Heroic Rafaam";
        this.type = CARDTYPES.hero;
        this.set = "LOE";
        this.health = 30;
    }

}

export class CS2_027 extends Card {
    constructor() {
        super();
        this.name = "Mirror Image";
        this.type = CARDTYPES.spell;
        this.text = "Summon two 0/2 minions with <b>Taunt</b>.";
        this.set = "CORE";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Jim Nelson";
        this.flavor = "Oh hey it's Mirror Image! !egamI rorriM s'ti yeh hO";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 36.";
        this.howToEarn = "Unlocked at Level 4.";
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}

}

export class Mekka3 extends Card {
    constructor() {
        super();
        this.name = "Emboldener 3000";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, give a random minion +1/+1.";
        this.set = "PROMO";
        this.health = 4;
        this.attack = 0;
        this.manacost = 1;
        this.race = race.mechanical;
        this.rarity = rarity.common;
        this.faction = "ALLIANCE";
    }

}

export class LOEA16_3e extends Card {
    constructor() {
        super();
        this.name = "Lantern of Power";
        this.type = CARDTYPES.enchantment;
        this.text = "+10/+10.";
        this.set = "LOE";
    }

}

export class PART_001e extends Card {
    constructor() {
        super();
        this.name = "Armor Plating";
        this.type = CARDTYPES.enchantment;
        this.text = "+1 Health.";
        this.set = "GVG";
    }

}

export class NAX7_01H extends Card {
    constructor() {
        super();
        this.name = "Instructor Razuvious";
        this.type = CARDTYPES.hero;
        this.set = "NAXX";
        this.health = 55;
    }

}

export class EX1_409t extends Card {
    constructor() {
        super();
        this.name = "Heavy Axe";
        this.type = CARDTYPES.weapon;
        this.set = "EXPERT1";
        this.attack = 1;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.warrior;
        this.durability = "3";
    }

}

export class GVG_082 extends Card {
    constructor() {
        super();
        this.name = "Clockwork Gnome";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Add a <b>Spare Part</b> card to your hand.";
        this.set = "GVG";
        this.health = 1;
        this.attack = 2;
        this.manacost = 1;
        this.artist = "Matt Dixon";
        this.race = race.mechanical;
        this.flavor = "Clockwork gnomes are always asking what time it is.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"DEATHRATTLE\"]
    //[\"PART_003\",\"PART_001\",\"PART_007\",\"PART_006\",\"PART_005\",\"PART_002\",\"PART_004\"]

}

export class BRMA09_3Ht extends Card {
    constructor() {
        super();
        this.name = "Old Horde Orc";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "BRM";
        this.health = 2;
        this.attack = 2;
        this.manacost = 1;
    }

    //[\"TAUNT\"]

}

export class AT_044 extends Card {
    constructor() {
        super();
        this.name = "Mulch";
        this.type = CARDTYPES.spell;
        this.text = "Destroy a minion.\nAdd a random minion to your opponent's hand.";
        this.set = "TGT";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Dan Scott";
        this.flavor = "Is this a noun or a verb?  We will never know.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class AT_046 extends Card {
    constructor() {
        super();
        this.name = "Tuskarr Totemic";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Summon ANY random Totem.";
        this.set = "TGT";
        this.health = 2;
        this.attack = 3;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Eva Widermann";
        this.flavor = "Turns out the tuskarr aren't real choosy about their totems.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]
    //[\"CS2_052\",\"NEW1_009\",\"CS2_050\",\"CS2_051\",\"EX1_565\",\"GVG_039\",\"EX1_575\",\"AT_052\"]

}

export class EX1_567 extends Card {
    constructor() {
        super();
        this.name = "Doomhammer";
        this.type = CARDTYPES.weapon;
        this.text = "<b>Windfury, Overload:</b> (2)";
        this.set = "EXPERT1";
        this.attack = 2;
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "John Polidora";
        this.flavor = "Orgrim Doomhammer gave this legendary weapon to Thrall.  His name is a total coincidence.";
        this.rarity = rarity.epic;
        this.collectible = true;
        this.durability = "8";
    }

    //[\"OVERLOAD\",\"WINDFURY\"]

}

export class BRMA09_2Ht extends Card {
    constructor() {
        super();
        this.name = "Whelp";
        this.type = CARDTYPES.minion;
        this.set = "BRM";
        this.health = 2;
        this.attack = 2;
        this.manacost = 1;
        this.race = race.dragon;
    }

}

export class LOEA09_3H extends Card {
    constructor() {
        super();
        this.name = "Endless Hunger";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon a Hungry Naga.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class LOE_119 extends Card {
    constructor() {
        super();
        this.name = "Animated Armor";
        this.type = CARDTYPES.minion;
        this.text = "Your hero can only take 1 damage at a time.";
        this.set = "LOE";
        this.health = 4;
        this.attack = 4;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Mike Sass";
        this.flavor = "Try putting it on.  Wait, let me get my camera.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in the Hall of Explorers, in the League of Explorers adventure.";
    }

}

export class AT_006e extends Card {
    constructor() {
        super();
        this.name = "Power of Dalaran";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Spell Damage.";
        this.set = "TGT";
        this.characterClass = CHARACTERCLASS.mage;
    }

}

export class XXX_062 extends Card {
    constructor() {
        super();
        this.name = "Armor 5";
        this.type = CARDTYPES.spell;
        this.text = "Give target Hero +5 Armor";
        this.set = "CHEAT";
        this.manacost = 0;
    }

    //{\"REQ_TARGET_TO_PLAY\":0,\"REQ_HERO_TARGET\":0}

}

export class GVG_090 extends Card {
    constructor() {
        super();
        this.name = "Madder Bomber";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Deal 6 damage randomly split between all other characters.";
        this.set = "GVG";
        this.health = 4;
        this.attack = 5;
        this.manacost = 5;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "Dang, Bomber, calm down.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class HERO_02 extends Card {
    constructor() {
        super();
        this.name = "Thrall";
        this.type = CARDTYPES.hero;
        this.set = "CORE";
        this.health = 30;
        this.characterClass = CHARACTERCLASS.shaman;
        this.rarity = rarity.free;
        this.collectible = true;
    }

}

export class NAX9_01H extends Card {
    constructor() {
        super();
        this.name = "Baron Rivendare";
        this.type = CARDTYPES.hero;
        this.set = "NAXX";
        this.health = 14;
    }

}

export class AT_083e extends Card {
    constructor() {
        super();
        this.name = "Dragonhawkery";
        this.type = CARDTYPES.enchantment;
        this.text = "<b>Windfury</b> this turn.";
        this.set = "TGT";
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class DS1_178e extends Card {
    constructor() {
        super();
        this.name = "Charge";
        this.type = CARDTYPES.enchantment;
        this.text = "Tundra Rhino grants <b>Charge</b>.";
        this.set = "CORE";
        this.characterClass = CHARACTERCLASS.hunter;
    }

}

export class EX1_317 extends Card {
    constructor() {
        super();
        this.name = "Sense Demons";
        this.type = CARDTYPES.spell;
        this.text = "Put 2 random Demons from your deck into your hand.";
        this.set = "EXPERT1";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Raven Mimura";
        this.flavor = "Generally demons are pretty obvious and you donâ€™t need a spell to sense them.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class DREAM_05e extends Card {
    constructor() {
        super();
        this.name = "Nightmare";
        this.type = CARDTYPES.enchantment;
        this.text = "This minion has +5/+5, but will be destroyed soon.";
        this.set = "EXPERT1";
    }

}

export class TU4a_001 extends Card {
    constructor() {
        super();
        this.name = "Hogger";
        this.type = CARDTYPES.hero;
        this.set = "MISSIONS";
        this.health = 10;
        this.rarity = rarity.common;
    }

}

export class GVG_106 extends Card {
    constructor() {
        super();
        this.name = "Junkbot";
        this.type = CARDTYPES.minion;
        this.text = "Whenever a friendly Mech dies, gain +2/+2.";
        this.set = "GVG";
        this.health = 5;
        this.attack = 1;
        this.manacost = 5;
        this.artist = "Zoltan Boros";
        this.race = race.mechanical;
        this.flavor = "One bot's junk is another bot's AWESOME UPGRADE!";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class HERO_05 extends Card {
    constructor() {
        super();
        this.name = "Rexxar";
        this.type = CARDTYPES.hero;
        this.set = "CORE";
        this.health = 30;
        this.characterClass = CHARACTERCLASS.hunter;
        this.rarity = rarity.free;
        this.collectible = true;
    }

}

export class CS2_102_H1 extends Card {
    constructor() {
        super();
        this.name = "Armor Up!";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nGain 2 Armor.";
        this.set = "HERO_SKINS";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.warrior;
        this.rarity = rarity.free;
    }

}

export class TB_PickYourFate_11rand extends Card {
    constructor() {
        super();
        this.name = "Dire Fate: Murlocs";
        this.type = CARDTYPES.spell;
        this.text = "Turn each minion in play into a 1/1 Murloc.";
        this.set = "TB";
        this.manacost = 0;
    }

}

export class CRED_43 extends Card {
    constructor() {
        super();
        this.name = "Jon Bankard";
        this.type = CARDTYPES.minion;
        this.text = "50% chance to be 100% right.";
        this.set = "CREDITS";
        this.health = 5;
        this.attack = 5;
        this.manacost = 5;
        this.rarity = rarity.legendary;
    }

}

export class EX1_244 extends Card {
    constructor() {
        super();
        this.name = "Totemic Might";
        this.type = CARDTYPES.spell;
        this.text = "Give your Totems +2 Health.";
        this.set = "CORE";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Trent Kaniuga";
        this.flavor = "Totem-stomping is no longer recommended.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 28.";
        this.howToEarn = "Unlocked at Level 6.";
    }

}

export class GAME_003 extends Card {
    constructor() {
        super();
        this.name = "Coin's Vengeance";
        this.type = CARDTYPES.enchantment;
        this.text = "Going second makes your first minion stronger.";
        this.set = "CORE";
    }

}

export class TB_PickYourFate_11_Ench extends Card {
    constructor() {
        super();
        this.name = "Fate 11 Ench. Murloc";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
    }

}

export class BRMA01_1 extends Card {
    constructor() {
        super();
        this.name = "Coren Direbrew";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class AT_009 extends Card {
    constructor() {
        super();
        this.name = "Rhonin";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Add 3 copies of Arcane Missiles to your hand.";
        this.set = "TGT";
        this.health = 7;
        this.attack = 7;
        this.manacost = 8;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Zoltan & Gabor";
        this.flavor = "A masterless shamurai.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"DEATHRATTLE\"]

}

export class AT_005 extends Card {
    constructor() {
        super();
        this.name = "Polymorph: Boar";
        this.type = CARDTYPES.spell;
        this.text = "Transform a minion into a 4/2 Boar with <b>Charge</b>.";
        this.set = "TGT";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Mike Sass";
        this.flavor = "It's always Huffer.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class AT_073e extends Card {
    constructor() {
        super();
        this.name = "Competitive Spirit";
        this.type = CARDTYPES.enchantment;
        this.text = "+1/+1.";
        this.set = "TGT";
    }

}

export class CS2_038e extends Card {
    constructor() {
        super();
        this.name = "Ancestral Spirit";
        this.type = CARDTYPES.enchantment;
        this.text = "<b>Deathrattle:</b> Resummon this minion.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.shaman;
    }

}

export class TB_PickYourFate7Ench extends Card {
    constructor() {
        super();
        this.name = "Fate 7 Ench Get a Coin";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
    }

}

export class CS2_031 extends Card {
    constructor() {
        super();
        this.name = "Ice Lance";
        this.type = CARDTYPES.spell;
        this.text = "<b>Freeze</b> a character. If it was already <b>Frozen</b>, deal $4 damage instead.";
        this.set = "EXPERT1";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "The trick is not to break the lance.  Otherwise, you have \"Ice Pieces.\"  Ice Pieces aren't as effective.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"FREEZE\"]
    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class EX1_626 extends Card {
    constructor() {
        super();
        this.name = "Mass Dispel";
        this.type = CARDTYPES.spell;
        this.text = "<b>Silence</b> all enemy minions. Draw a card.";
        this.set = "EXPERT1";
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Sean O'Daniels";
        this.flavor = "It dispels buffs, powers, hopes, and dreams.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"SILENCE\"]

}

export class GVG_045 extends Card {
    constructor() {
        super();
        this.name = "Imp-losion";
        this.type = CARDTYPES.spell;
        this.text = "Deal $2-$4 damage to a minion. Summon a 1/1 Imp for each damage dealt.";
        this.set = "GVG";
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Jaemin Kim";
        this.flavor = "The shrapnel is waaaaay worse than the explosion.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class NAX2_01H extends Card {
    constructor() {
        super();
        this.name = "Grand Widow Faerlina";
        this.type = CARDTYPES.hero;
        this.set = "NAXX";
        this.health = 45;
    }

}

export class NEW1_041 extends Card {
    constructor() {
        super();
        this.name = "Stampeding Kodo";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Destroy a random enemy minion with 2 or less Attack.";
        this.set = "EXPERT1";
        this.health = 5;
        this.attack = 3;
        this.manacost = 5;
        this.artist = "Daren Bader";
        this.race = race.beast;
        this.flavor = "This Kodo is so big that he can stampede by <i>himself</i>.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class CRED_08 extends Card {
    constructor() {
        super();
        this.name = "Ben Brode";
        this.type = CARDTYPES.minion;
        this.text = "Your volume can't be reduced below maximum.";
        this.set = "CREDITS";
        this.health = 1;
        this.attack = 4;
        this.manacost = 3;
        this.rarity = rarity.legendary;
    }

}

export class LOEA07_25 extends Card {
    constructor() {
        super();
        this.name = "Mechanical Parrot";
        this.type = CARDTYPES.minion;
        this.set = "LOE";
        this.health = 6;
        this.attack = 3;
        this.manacost = 1;
        this.race = race.mechanical;
    }

}

export class XXX_040 extends Card {
    constructor() {
        super();
        this.name = "Hogger";
        this.type = CARDTYPES.hero;
        this.set = "CHEAT";
        this.health = 10;
        this.characterClass = CHARACTERCLASS.warrior;
    }

}

export class GVG_044 extends Card {
    constructor() {
        super();
        this.name = "Spider Tank";
        this.type = CARDTYPES.minion;
        this.set = "GVG";
        this.health = 4;
        this.attack = 3;
        this.manacost = 3;
        this.artist = "Dany Orizio";
        this.race = race.mechanical;
        this.flavor = "\"What if we put guns on it?\" -Fizzblitz, staring at the spider-transportation-machine";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class CS2_045 extends Card {
    constructor() {
        super();
        this.name = "Rockbiter Weapon";
        this.type = CARDTYPES.spell;
        this.text = "Give a friendly character +3 Attack this turn.";
        this.set = "CORE";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "This would be real handy if your enemy is made of rock.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 36.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //{\"REQ_TARGET_TO_PLAY\":0,\"REQ_FRIENDLY_TARGET\":0}

}

export class BRMA09_4H extends Card {
    constructor() {
        super();
        this.name = "Blackwing";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon a 5/4 Dragonkin. Get a new Hero Power.";
        this.set = "BRM";
        this.manacost = 1;
    }

    //[\"BRMA09_2H\",\"BRMA09_3H\",\"BRMA09_5H\"]

}

export class DREAM_04 extends Card {
    constructor() {
        super();
        this.name = "Dream";
        this.type = CARDTYPES.spell;
        this.text = "Return a minion to its owner's hand.";
        this.set = "EXPERT1";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.dream;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class XXX_058e extends Card {
    constructor() {
        super();
        this.name = "Weapon Nerf Enchant";
        this.type = CARDTYPES.enchantment;
        this.text = "Red Sparkles!";
        this.set = "CHEAT";
    }

}

export class BRM_017 extends Card {
    constructor() {
        super();
        this.name = "Resurrect";
        this.type = CARDTYPES.spell;
        this.text = "Summon a random friendly minion that died this game.";
        this.set = "BRM";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Luke Mancini";
        this.flavor = "I walked into the dungeon and noticed a slain adventurer. In his final moments, he had scrawled out a message in the dust on the wall beside him. Two words: \"rez plz\"";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating Emperor Thaurissan in Blackrock Depths.";
        this.howToEarn = "Unlocked in Blackrock Depths, in the Blackrock Mountain adventure.";
    }

    //{\"REQ_NUM_MINION_SLOTS\":1,\"REQ_FRIENDLY_MINION_DIED_THIS_GAME\":0}

}

export class CS2_101_H1 extends Card {
    constructor() {
        super();
        this.name = "Reinforce";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon a 1/1 Silver Hand Recruit.";
        this.set = "HERO_SKINS";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.paladin;
        this.rarity = rarity.free;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}

}

export class XXX_059 extends Card {
    constructor() {
        super();
        this.name = "Destroy Hero's Stuff";
        this.type = CARDTYPES.spell;
        this.text = "Destroy target hero's hero power, weapon, deck, hand, minions, and secrets.";
        this.set = "CHEAT";
        this.manacost = 0;
    }

    //{\"REQ_TARGET_TO_PLAY\":0,\"REQ_HERO_TARGET\":0}

}

export class BRMA12_6 extends Card {
    constructor() {
        super();
        this.name = "Brood Affliction: Black";
        this.type = CARDTYPES.spell;
        this.text = "While this is in your hand, whenever Chromaggus draws a card, he gets another copy of it.";
        this.set = "BRM";
        this.manacost = 1;
    }

}

export class XXX_016 extends Card {
    constructor() {
        super();
        this.name = "Snake Ball";
        this.type = CARDTYPES.spell;
        this.text = "Summon five 1/1 snakes.";
        this.set = "CHEAT";
        this.manacost = 0;
    }

}

export class AT_089e extends Card {
    constructor() {
        super();
        this.name = "Boneguarded";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Health.";
        this.set = "TGT";
    }

}

export class NAX6_01 extends Card {
    constructor() {
        super();
        this.name = "Loatheb";
        this.type = CARDTYPES.hero;
        this.set = "NAXX";
        this.health = 75;
    }

}

export class BRMA17_5H extends Card {
    constructor() {
        super();
        this.name = "Bone Minions";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon two 4/2 Bone Constructs.";
        this.set = "BRM";
        this.manacost = 2;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}

}

export class EX1_617 extends Card {
    constructor() {
        super();
        this.name = "Deadly Shot";
        this.type = CARDTYPES.spell;
        this.text = "Destroy a random enemy minion.";
        this.set = "EXPERT1";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Steve Prescott";
        this.flavor = "Accuracy is not a highly valued trait among the mok'nathal.  Deadliness is near the top, though.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //{\"REQ_MINIMUM_ENEMY_MINIONS\":1}

}

export class LOEA09_13 extends Card {
    constructor() {
        super();
        this.name = "Hungry Naga";
        this.type = CARDTYPES.minion;
        this.set = "LOE";
        this.health = 1;
        this.attack = 5;
        this.manacost = 5;
    }

}

export class BRM_028e extends Card {
    constructor() {
        super();
        this.name = "Imperial Favor";
        this.type = CARDTYPES.enchantment;
        this.text = "Costs (1) less.";
        this.set = "BRM";
    }

}

export class CS2_236e extends Card {
    constructor() {
        super();
        this.name = "Divine Spirit";
        this.type = CARDTYPES.enchantment;
        this.text = "This minion has double Health.";
        this.set = "CORE";
        this.characterClass = CHARACTERCLASS.priest;
    }

}

export class FP1_008 extends Card {
    constructor() {
        super();
        this.name = "Spectral Knight";
        this.type = CARDTYPES.minion;
        this.text = "Can't be targeted by spells or Hero Powers.";
        this.set = "NAXX";
        this.health = 6;
        this.attack = 4;
        this.manacost = 5;
        this.artist = "Chris Rahn";
        this.flavor = "What do Faerie Dragons and Spectral Knights have in common?  They both love pasta!";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating Gothik the Harvester in the Military Quarter.";
        this.howToEarn = "Unlocked in The Military Quarter, in the Naxxramas adventure.";
    }

}

export class NAX15_01 extends Card {
    constructor() {
        super();
        this.name = "Kel'Thuzad";
        this.type = CARDTYPES.hero;
        this.set = "NAXX";
        this.health = 30;
    }

}

export class AT_057o extends Card {
    constructor() {
        super();
        this.name = "Groomed";
        this.type = CARDTYPES.enchantment;
        this.text = "<b>Immune</b> this turn.";
        this.set = "TGT";
        this.characterClass = CHARACTERCLASS.hunter;
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class GAME_005 extends Card {
    constructor() {
        super();
        this.name = "The Coin";
        this.type = CARDTYPES.spell;
        this.text = "Gain 1 Mana Crystal this turn only.";
        this.set = "CORE";
        this.manacost = 0;
    }

}

export class EX1_007 extends Card {
    constructor() {
        super();
        this.name = "Acolyte of Pain";
        this.type = CARDTYPES.minion;
        this.text = "Whenever this minion takes damage, draw a card.";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 1;
        this.manacost = 3;
        this.artist = "Dave Kendall";
        this.flavor = "He trained when he was younger to be an acolyte of joy, but things didnâ€™t work out like he thought they would.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class XXX_061 extends Card {
    constructor() {
        super();
        this.name = "Armor 1";
        this.type = CARDTYPES.spell;
        this.text = "Give target Hero +1 Armor";
        this.set = "CHEAT";
        this.manacost = 0;
    }

    //{\"REQ_TARGET_TO_PLAY\":0,\"REQ_HERO_TARGET\":0}

}

export class EX1_062 extends Card {
    constructor() {
        super();
        this.name = "Old Murk-Eye";
        this.type = CARDTYPES.minion;
        this.text = "<b>Charge</b>. Has +1 Attack for each other Murloc on the battlefield.";
        this.set = "REWARD";
        this.health = 4;
        this.attack = 2;
        this.manacost = 4;
        this.artist = "Dan Scott";
        this.race = race.murloc;
        this.flavor = "He's a legend among murlocs.  \"Mrghllghghllghg!\", they say.";
        this.rarity = rarity.legendary;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked when you have all the Golden Murlocs from the Classic and Basic Sets.";
        this.howToEarn = "Unlocked when you have all the Murlocs from the Classic Set.";
    }

    //[\"CHARGE\"]

}

export class TB_FactionWar_BoomBot extends Card {
    constructor() {
        super();
        this.name = "TBFactionWarBoomBot";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
    }

    //[\"EX1_066\",\"EX1_066\",\"EX1_066\",\"EX1_066\",\"EX1_066\",\"EX1_066\"]

}

export class AT_068 extends Card {
    constructor() {
        super();
        this.name = "Bolster";
        this.type = CARDTYPES.spell;
        this.text = "Give your <b>Taunt</b> minions +2/+2.";
        this.set = "TGT";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Mishi McCaig";
        this.flavor = "The best offense is a good defense.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class TB_PickYourFate_9_EnchMinion extends Card {
    constructor() {
        super();
        this.name = "Bonus";
        this.type = CARDTYPES.enchantment;
        this.text = "Your <b>Deathrattle</b> minions have +1/+1.";
        this.set = "TB";
    }

}

export class CRED_27 extends Card {
    constructor() {
        super();
        this.name = "Henry Ho";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Spectate your opponent's hand.";
        this.set = "CREDITS";
        this.health = 4;
        this.attack = 3;
        this.manacost = 3;
        this.rarity = rarity.legendary;
    }

}

export class LOE_053 extends Card {
    constructor() {
        super();
        this.name = "Djinni of Zephyrs";
        this.type = CARDTYPES.minion;
        this.text = "After you cast a spell on another friendly minion, cast a copy of it on this one.";
        this.set = "LOE";
        this.health = 6;
        this.attack = 4;
        this.manacost = 5;
        this.artist = "Jakub Kasper";
        this.flavor = "If you want your wish granted, don't rub him the wrong way.";
        this.rarity = rarity.epic;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in the Temple of Orsis, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in the Temple of Orsis, in the League of Explorers adventure.";
    }

}

export class CS2_041 extends Card {
    constructor() {
        super();
        this.name = "Ancestral Healing";
        this.type = CARDTYPES.spell;
        this.text = "Restore a minion to full Health and give it <b>Taunt</b>.";
        this.set = "CORE";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Dan Scott";
        this.flavor = "I personally prefer some non-ancestral right-the-heck-now healing, but maybe that is just me.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 15.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class EX1_095 extends Card {
    constructor() {
        super();
        this.name = "Gadgetzan Auctioneer";
        this.type = CARDTYPES.minion;
        this.text = "Whenever you cast a spell, draw a card.";
        this.set = "EXPERT1";
        this.health = 4;
        this.attack = 4;
        this.manacost = 6;
        this.artist = "Matt Dixon";
        this.flavor = "He used to run the black market auction house, but there was just too much violence and he had to move.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.textInPlay = "Auctioning";
    }

}

export class TBST_004 extends Card {
    constructor() {
        super();
        this.name = "OLDLegit Healer";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, summon a random friendly minion that died this turn.";
        this.set = "TB";
        this.health = 2;
        this.attack = 2;
        this.manacost = 3;
    }

}

export class EX1_554t extends Card {
    constructor() {
        super();
        this.name = "Snake";
        this.type = CARDTYPES.minion;
        this.set = "EXPERT1";
        this.health = 1;
        this.attack = 1;
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.hunter;
        this.race = race.beast;
        this.rarity = rarity.common;
    }

}

export class LOEA16_2 extends Card {
    constructor() {
        super();
        this.name = "Staff of Origination";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Passive Hero Power</b>\nYour hero is <b>Immune</b> while the staff charges.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class EX1_382 extends Card {
    constructor() {
        super();
        this.name = "Aldor Peacekeeper";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Change an enemy minion's Attack to 1.";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 3;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Dany Orizio";
        this.flavor = "The Aldor hate two things: the Scryers and smooth jazz.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.targetingArrowText = "Change Attack to 1.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0,\"REQ_ENEMY_TARGET\":0}

}

export class EX1_508 extends Card {
    constructor() {
        super();
        this.name = "Grimscale Oracle";
        this.type = CARDTYPES.minion;
        this.text = "ALL other Murlocs have +1 Attack.";
        this.set = "CORE";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
        this.artist = "Phil Saunders";
        this.race = race.murloc;
        this.flavor = "These are the brainy murlocs.  It turns out that doesnâ€™t mean much.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Warlock Level 53.";
    }

}

export class CS1_042 extends Card {
    constructor() {
        super();
        this.name = "Goldshire Footman";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "CORE";
        this.health = 2;
        this.attack = 1;
        this.manacost = 1;
        this.artist = "Donato Giancola";
        this.flavor = "If 1/2 minions are all that is defending Goldshire, you would think it would have been overrun years ago.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "ALLIANCE";
        this.howToEarnGolden = "Unlocked at Paladin Level 57.";
    }

    //[\"TAUNT\"]

}

export class BRMA16_5e extends Card {
    constructor() {
        super();
        this.name = "I hear you...";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Attack.";
        this.set = "BRM";
    }

}

export class LOEA01_01h extends Card {
    constructor() {
        super();
        this.name = "Heroic Phaerix";
        this.type = CARDTYPES.hero;
        this.set = "LOE";
        this.health = 30;
    }

}

export class BRMA02_1H extends Card {
    constructor() {
        super();
        this.name = "High Justice Grimstone";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class GVG_036e extends Card {
    constructor() {
        super();
        this.name = "Powered";
        this.type = CARDTYPES.enchantment;
        this.text = "+2/+2.";
        this.set = "GVG";
        this.characterClass = CHARACTERCLASS.shaman;
    }

}

export class EX1_129 extends Card {
    constructor() {
        super();
        this.name = "Fan of Knives";
        this.type = CARDTYPES.spell;
        this.text = "Deal $1 damage to all enemy minions. Draw a card.";
        this.set = "CORE";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Andrew Robinson";
        this.flavor = "I wouldn't say I LOVE knives, but I'm definitely a fan.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 28.";
        this.howToEarn = "Unlocked at Level 4.";
    }

}

export class CS2_mirror extends Card {
    constructor() {
        super();
        this.name = "Mirror Image";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "CORE";
        this.health = 2;
        this.attack = 0;
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.mage;
        this.rarity = rarity.common;
    }

    //[\"TAUNT\"]

}

export class NEW1_023 extends Card {
    constructor() {
        super();
        this.name = "Faerie Dragon";
        this.type = CARDTYPES.minion;
        this.text = "Can't be targeted by spells or Hero Powers.";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 3;
        this.manacost = 2;
        this.artist = "Samwise";
        this.race = race.dragon;
        this.flavor = "Adorable.  Immune to Magic.  Doesn't pee on the rug.  The perfect pet!";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class BRMA05_3e extends Card {
    constructor() {
        super();
        this.name = "Living Bomb";
        this.type = CARDTYPES.enchantment;
        this.text = "On Geddon's turn, deal 5 damage to all of your stuff.";
        this.set = "BRM";
    }

}

export class LOEA13_1 extends Card {
    constructor() {
        super();
        this.name = "Skelesaurus Hex";
        this.type = CARDTYPES.hero;
        this.set = "LOE";
        this.health = 30;
    }

}

export class AT_042a extends Card {
    constructor() {
        super();
        this.name = "Lion Form";
        this.type = CARDTYPES.spell;
        this.text = "<b>Charge</b>";
        this.set = "TGT";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
        this.rarity = rarity.common;
    }

}

export class LOEA16_22H extends Card {
    constructor() {
        super();
        this.name = "Archaedas";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, turn a random enemy minion into a 0/2 Statue.";
        this.set = "LOE";
        this.health = 10;
        this.attack = 10;
        this.manacost = 10;
    }

}

export class AT_103 extends Card {
    constructor() {
        super();
        this.name = "North Sea Kraken";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Deal 4 damage.";
        this.set = "TGT";
        this.health = 7;
        this.attack = 9;
        this.manacost = 9;
        this.artist = "Seamus Gallagher";
        this.flavor = "You have no idea how tired this guy is of being released.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.targetingArrowText = "Deal 4 damage.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class EX1_279 extends Card {
    constructor() {
        super();
        this.name = "Pyroblast";
        this.type = CARDTYPES.spell;
        this.text = "Deal $10 damage.";
        this.set = "EXPERT1";
        this.manacost = 10;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Luca Zontini";
        this.flavor = "Take the time for an evil laugh after you draw this card.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class NAX10_03 extends Card {
    constructor() {
        super();
        this.name = "Hateful Strike";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDestroy a minion.";
        this.set = "NAXX";
        this.manacost = 4;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class AT_054 extends Card {
    constructor() {
        super();
        this.name = "The Mistcaller";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Give all minions in your hand and deck +1/+1.";
        this.set = "TGT";
        this.health = 4;
        this.attack = 4;
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Wei Wang";
        this.flavor = "Calling the mist doesn't sound all that great.  \"Ooooh, it is slightly damp now!\"";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class GVG_033 extends Card {
    constructor() {
        super();
        this.name = "Tree of Life";
        this.type = CARDTYPES.spell;
        this.text = "Restore all characters to full Health.";
        this.set = "GVG";
        this.manacost = 9;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Steve Prescott";
        this.flavor = "Healing: It grows on trees!";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class EX1_154 extends Card {
    constructor() {
        super();
        this.name = "Wrath";
        this.type = CARDTYPES.spell;
        this.text = "<b>Choose One</b> - Deal $3 damage to a minion; or $1 damage and draw a card.";
        this.set = "EXPERT1";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Raymond Swanland";
        this.flavor = "The talk around the Ratchet Inn is that this card is too good and should be a Legendary.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class EX1_508o extends Card {
    constructor() {
        super();
        this.name = "Mlarggragllabl!";
        this.type = CARDTYPES.enchantment;
        this.text = "This Murloc has +1 Attack.";
        this.set = "CORE";
    }

}

export class LOEA07_26 extends Card {
    constructor() {
        super();
        this.name = "Consult Brann";
        this.type = CARDTYPES.spell;
        this.text = "Draw 3 cards.";
        this.set = "LOE";
        this.manacost = 1;
    }

}

export class GVG_022 extends Card {
    constructor() {
        super();
        this.name = "Tinker's Sharpsword Oil";
        this.type = CARDTYPES.spell;
        this.text = "Give your weapon +3 Attack. <b>Combo:</b> Give a random friendly minion +3 Attack.";
        this.set = "GVG";
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Den";
        this.flavor = "\"Get ready to strike oil!\" - Super-cheesy battle cry";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"COMBO\"]
    //{\"REQ_MINION_TARGET\":0}

}

export class TB_PickYourFate_10_EnchMinion extends Card {
    constructor() {
        super();
        this.name = "Bonus";
        this.type = CARDTYPES.enchantment;
        this.text = "Your <b>Battlecry</b> minions have +1/+1.";
        this.set = "TB";
    }

}

export class EX1_620 extends Card {
    constructor() {
        super();
        this.name = "Molten Giant";
        this.type = CARDTYPES.minion;
        this.text = "Costs (1) less for each damage your hero has taken.";
        this.set = "EXPERT1";
        this.health = 8;
        this.attack = 8;
        this.manacost = 20;
        this.artist = "Glenn Rane";
        this.flavor = "He gets terrible heartburn.  BECAUSE HE IS FULL OF LAVA.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class GVG_057a extends Card {
    constructor() {
        super();
        this.name = "Seal of Light";
        this.type = CARDTYPES.enchantment;
        this.text = "+2 Attack this turn.";
        this.set = "GVG";
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class LOE_113e extends Card {
    constructor() {
        super();
        this.name = "Mrglllraawrrrglrur!";
        this.type = CARDTYPES.enchantment;
        this.text = "+2/+2.";
        this.set = "LOE";
    }

}

export class CS2_024 extends Card {
    constructor() {
        super();
        this.name = "Frostbolt";
        this.type = CARDTYPES.spell;
        this.text = "Deal $3 damage to a character and <b>Freeze</b> it.";
        this.set = "CORE";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Steve Ellis";
        this.flavor = "It is customary to yell \"Chill out!\" or \"Freeze!\" or \"Ice ice, baby!\" when you play this card.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 40.";
        this.howToEarn = "Unlocked at Level 2.";
    }

    //[\"FREEZE\"]
    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class GVG_023 extends Card {
    constructor() {
        super();
        this.name = "Goblin Auto-Barber";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry</b>: Give your weapon +1 Attack.";
        this.set = "GVG";
        this.health = 2;
        this.attack = 3;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Zolton Boros";
        this.race = race.mechanical;
        this.flavor = "This guy is excellent at adjusting your haircut and/or height.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class FP1_026 extends Card {
    constructor() {
        super();
        this.name = "Anub'ar Ambusher";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Return a random friendly minion to your hand.";
        this.set = "NAXX";
        this.health = 5;
        this.attack = 5;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Nate Bowden";
        this.flavor = "Originally he was called \"Anub'ar Guy who bounces a guy back to your hand\", but it lacked a certain zing.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after completing the Rogue Class Challenge in Naxxramas.";
        this.howToEarn = "Unlocked in The Arachnid Quarter, in the Naxxramas adventure.";
    }

    //[\"DEATHRATTLE\"]

}

export class CS2_005o extends Card {
    constructor() {
        super();
        this.name = "Claw";
        this.type = CARDTYPES.enchantment;
        this.text = "+2 Attack this turn.";
        this.set = "CORE";
        this.characterClass = CHARACTERCLASS.druid;
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class EX1_607e extends Card {
    constructor() {
        super();
        this.name = "Inner Rage";
        this.type = CARDTYPES.enchantment;
        this.text = "+2 Attack.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.warrior;
    }

}

export class EX1_396 extends Card {
    constructor() {
        super();
        this.name = "Mogu'shan Warden";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "EXPERT1";
        this.health = 7;
        this.attack = 1;
        this.manacost = 4;
        this.artist = "Cole Eastburn";
        this.flavor = "All these guys ever do is talk about the Thunder King.   BOOOORRRINNG!";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"TAUNT\"]

}

export class LOE_008H extends Card {
    constructor() {
        super();
        this.name = "Eye of Hakkar";
        this.type = CARDTYPES.spell;
        this.text = "Take a secret from your opponent's deck and put it into the battlefield.";
        this.set = "LOE";
        this.manacost = 1;
    }

}

export class NEW1_012 extends Card {
    constructor() {
        super();
        this.name = "Mana Wyrm";
        this.type = CARDTYPES.minion;
        this.text = "Whenever you cast a spell, gain +1 Attack.";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 1;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Blizzard Cinematics";
        this.flavor = "These wyrms feed on arcane energies, and while they are generally considered a nuisance rather than a real threat, you really shouldn't leave them alone with a bucket of mana.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.textInPlay = "Gorging";
    }

}

export class EX1_595 extends Card {
    constructor() {
        super();
        this.name = "Cult Master";
        this.type = CARDTYPES.minion;
        this.text = "Whenever one of your other minions dies, draw a card.";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 4;
        this.manacost = 4;
        this.artist = "Raymond Swanland";
        this.flavor = "She may be an evil cult master, but she still calls her parents once a week.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.textInPlay = "Cultist";
    }

}

export class BRMA09_2H extends Card {
    constructor() {
        super();
        this.name = "Open the Gates";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon three 2/2 Whelps. Get a new Hero Power.";
        this.set = "BRM";
        this.manacost = 2;
    }

    //[\"BRMA09_3H\",\"BRMA09_4H\"]

}

export class BRMA09_2t extends Card {
    constructor() {
        super();
        this.name = "Whelp";
        this.type = CARDTYPES.minion;
        this.set = "BRM";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
        this.race = race.dragon;
    }

}

export class EX1_124 extends Card {
    constructor() {
        super();
        this.name = "Eviscerate";
        this.type = CARDTYPES.spell;
        this.text = "Deal $2 damage. <b>Combo:</b> Deal $4 damage instead.";
        this.set = "EXPERT1";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Ariel Olivetti";
        this.flavor = "There is a high cost to Eviscerating your opponent:  It takes a long time to get blood stains out of leather armor.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"COMBO\"]
    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class BRMA13_4_2_TB extends Card {
    constructor() {
        super();
        this.name = "Wild Magic";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nPut a random spell from your opponent's class into your hand.";
        this.set = "TB";
        this.manacost = 2;
    }

}

export class BRMA15_2H extends Card {
    constructor() {
        super();
        this.name = "The Alchemist";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Passive Hero Power</b>\nMinions' Attack and Health are swapped.\nYour minions have +2/+2.";
        this.set = "BRM";
        this.manacost = 0;
    }

}

export class EX1_287 extends Card {
    constructor() {
        super();
        this.name = "Counterspell";
        this.type = CARDTYPES.spell;
        this.text = "<b>Secret:</b> When your opponent casts a spell, <b>Counter</b> it.";
        this.set = "EXPERT1";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Jason Chan";
        this.flavor = "What's the difference between a mage playing with Counterspell and a mage who isn't?  The mage who isn't is getting Pyroblasted in the face.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"SECRET\"]

}

export class EX1_412 extends Card {
    constructor() {
        super();
        this.name = "Raging Worgen";
        this.type = CARDTYPES.minion;
        this.text = "<b>Enrage:</b> <b>Windfury</b> and +1 Attack";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 3;
        this.manacost = 3;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "If he's raging now, just wait until he gets nerfed.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"ENRAGED\"]

}

export class EX1_598 extends Card {
    constructor() {
        super();
        this.name = "Imp";
        this.type = CARDTYPES.minion;
        this.set = "EXPERT1";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
        this.race = race.demon;
        this.rarity = rarity.rare;
    }

}

export class PRO_001c extends Card {
    constructor() {
        super();
        this.name = "Power of the Horde";
        this.type = CARDTYPES.spell;
        this.text = "Summon a random Horde Warrior.";
        this.set = "PROMO";
        this.manacost = 4;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}
    //[\"CS2_121\",\"EX1_021\",\"EX1_023\",\"EX1_110\",\"EX1_390\",\"CS2_179\"]

}

export class CRED_14 extends Card {
    constructor() {
        super();
        this.name = "Yong Woo";
        this.type = CARDTYPES.minion;
        this.text = "Your other minions have +3 Attack and <b>Charge</b>.";
        this.set = "CREDITS";
        this.health = 2;
        this.attack = 3;
        this.manacost = 5;
        this.rarity = rarity.legendary;
    }

}

export class NAX15_02H extends Card {
    constructor() {
        super();
        this.name = "Frost Blast";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDeal 3 damage to the enemy hero and <b>Freeze</b> it.";
        this.set = "NAXX";
        this.manacost = 0;
    }

    //[\"FREEZE\"]

}

export class GVG_067a extends Card {
    constructor() {
        super();
        this.name = "Metabolized Magic";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Attack.";
        this.set = "GVG";
    }

    //[\"AURA\"]

}

export class AT_132_HUNTER extends Card {
    constructor() {
        super();
        this.name = "Ballista Shot";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDeal $3 damage to the enemy hero.";
        this.set = "TGT";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.hunter;
    }

    //{\"REQ_STEADY_SHOT\":0}

}

export class EX1_565o extends Card {
    constructor() {
        super();
        this.name = "Flametongue";
        this.type = CARDTYPES.enchantment;
        this.text = "+2 Attack from Flametongue Totem.";
        this.set = "CORE";
        this.characterClass = CHARACTERCLASS.shaman;
    }

}

export class BRMA01_2H_2_TB extends Card {
    constructor() {
        super();
        this.name = "Pile On!!!";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nPut a minion from each deck into the battlefield.";
        this.set = "TB";
        this.manacost = 2;
    }

}

export class CS2_221e extends Card {
    constructor() {
        super();
        this.name = "Sharp!";
        this.type = CARDTYPES.enchantment;
        this.text = "+2 Attack from Spiteful Smith.";
        this.set = "EXPERT1";
    }

}

export class CS2_083e extends Card {
    constructor() {
        super();
        this.name = "Sharpened";
        this.type = CARDTYPES.enchantment;
        this.text = "+1 Attack this turn.";
        this.set = "CORE";
        this.characterClass = CHARACTERCLASS.rogue;
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class BRMA07_2 extends Card {
    constructor() {
        super();
        this.name = "ME SMASH";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDestroy a random damaged enemy minion.";
        this.set = "BRM";
        this.manacost = 1;
    }

    //{\"REQ_MINIMUM_ENEMY_MINIONS\":1}

}

export class EX1_165b extends Card {
    constructor() {
        super();
        this.name = "Bear Form";
        this.type = CARDTYPES.spell;
        this.text = "+2 Health and <b>Taunt</b>.";
        this.set = "EXPERT1";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
        this.rarity = rarity.common;
    }

}

export class LOEA16_10 extends Card {
    constructor() {
        super();
        this.name = "Hakkari Blood Goblet";
        this.type = CARDTYPES.spell;
        this.text = "Transform a minion into a 2/1 Pit Snake.";
        this.set = "LOE";
        this.manacost = 0;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class Mekka4e extends Card {
    constructor() {
        super();
        this.name = "Transformed";
        this.type = CARDTYPES.enchantment;
        this.text = "Has been transformed into a chicken!";
        this.set = "PROMO";
    }

    //[\"MORPH\"]

}

export class CRED_16 extends Card {
    constructor() {
        super();
        this.name = "Hamilton Chu";
        this.type = CARDTYPES.minion;
        this.text = "<i>Was successfully NOT part of the problem! ...most of the time.</i>";
        this.set = "CREDITS";
        this.health = 5;
        this.attack = 9;
        this.manacost = 7;
        this.rarity = rarity.legendary;
    }

}

export class LOEA04_02h extends Card {
    constructor() {
        super();
        this.name = "Escape!";
        this.type = CARDTYPES.hero_power;
        this.text = "Encounter new obstacles!";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class XXX_094 extends Card {
    constructor() {
        super();
        this.name = "AI Buddy - Blank Slate";
        this.type = CARDTYPES.minion;
        this.text = "Spawn into play to clear the entire board, both hands, both decks, all mana and all secrets.";
        this.set = "CHEAT";
        this.health = 1;
        this.attack = 1;
        this.manacost = 0;
    }

}

export class LOE_076 extends Card {
    constructor() {
        super();
        this.name = "Sir Finley Mrrgglton";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry: Discover</b> a new basic Hero Power.";
        this.set = "LOE";
        this.health = 3;
        this.attack = 1;
        this.manacost = 1;
        this.artist = "Matt Dixon";
        this.race = race.murloc;
        this.flavor = "In addition to fluent Common, he also speaks fourteen dialects of 'mrgl'.";
        this.rarity = rarity.legendary;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in The Ruined City, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in The Ruined City, in the League of Explorers adventure.";
    }

    //[\"BATTLECRY\"]
    //[\"CS2_034\",\"DS1h_292\",\"CS2_101\",\"CS1h_001\",\"CS2_102\",\"CS2_083b\",\"CS2_049\",\"CS2_017\",\"CS2_056\"]

}

export class LOE_086 extends Card {
    constructor() {
        super();
        this.name = "Summoning Stone";
        this.type = CARDTYPES.minion;
        this.text = "Whenever you cast a spell, summon a random minion of the same Cost.";
        this.set = "LOE";
        this.health = 6;
        this.attack = 0;
        this.manacost = 5;
        this.artist = "Jason Kang";
        this.flavor = "Sometimes it feels like it's always the same slackers that are waiting for a summon.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in the Temple of Orsis, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in the Temple of Orsis, in the League of Explorers adventure.";
    }

}

export class EX1_165t1 extends Card {
    constructor() {
        super();
        this.name = "Druid of the Claw";
        this.type = CARDTYPES.minion;
        this.text = "<b>Charge</b>";
        this.set = "EXPERT1";
        this.health = 4;
        this.attack = 4;
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.druid;
        this.race = race.beast;
        this.rarity = rarity.common;
    }

    //[\"CHARGE\"]

}

export class LOE_046 extends Card {
    constructor() {
        super();
        this.name = "Huge Toad";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Deal 1 damage to a random enemy.";
        this.set = "LOE";
        this.health = 2;
        this.attack = 3;
        this.manacost = 2;
        this.artist = "Matt Dixon";
        this.race = race.beast;
        this.flavor = "Deals damage when he croaks.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in The Ruined City, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in The Ruined City, in the League of Explorers adventure.";
    }

    //[\"DEATHRATTLE\"]

}

export class EX1_259 extends Card {
    constructor() {
        super();
        this.name = "Lightning Storm";
        this.type = CARDTYPES.spell;
        this.text = "Deal $2-$3 damage to all enemy minions. <b>Overload:</b> (2)";
        this.set = "EXPERT1";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Christopher Moeller";
        this.flavor = "An umbrella won't be effective, I'm afraid.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"OVERLOAD\"]

}

export class EX1_025 extends Card {
    constructor() {
        super();
        this.name = "Dragonling Mechanic";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Summon a 2/1 Mechanical Dragonling.";
        this.set = "CORE";
        this.health = 4;
        this.attack = 2;
        this.manacost = 4;
        this.artist = "Warren Mahy";
        this.flavor = "She is still working on installing the rocket launcher add-on for Mr. Bitey.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "ALLIANCE";
        this.howToEarnGolden = "Unlocked at Mage Level 53.";
    }

    //[\"BATTLECRY\"]

}

export class EX1_275 extends Card {
    constructor() {
        super();
        this.name = "Cone of Cold";
        this.type = CARDTYPES.spell;
        this.text = "<b>Freeze</b> a minion and the minions next to it, and deal $1 damage to them.";
        this.set = "EXPERT1";
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Leo Che";
        this.flavor = "Magi of the Kirin Tor were casting Cubes of Cold for many years before Cones came into fashion some 90 years ago.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"FREEZE\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class LOEA13_2 extends Card {
    constructor() {
        super();
        this.name = "Ancient Power";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nGive each player a random card. It costs (0).";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class GVG_026 extends Card {
    constructor() {
        super();
        this.name = "Feign Death";
        this.type = CARDTYPES.spell;
        this.text = "Trigger all <b>Deathrattles</b> on your minions.";
        this.set = "GVG";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Luca Zontini";
        this.flavor = "The hardest part about doing a \"Feign Death\" convincingly is learning how to make the right smell. It takes a lot of commitment.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class AT_085 extends Card {
    constructor() {
        super();
        this.name = "Maiden of the Lake";
        this.type = CARDTYPES.minion;
        this.text = "Your Hero Power costs (1).";
        this.set = "TGT";
        this.health = 6;
        this.attack = 2;
        this.manacost = 4;
        this.artist = "Froilan Gardner";
        this.flavor = "Not a good basis for a system of government.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"AURA\"]

}

export class NAX1_04 extends Card {
    constructor() {
        super();
        this.name = "Skitter";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon a 3/1 Nerubian.";
        this.set = "NAXX";
        this.manacost = 2;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}

}

export class LOE_104 extends Card {
    constructor() {
        super();
        this.name = "Entomb";
        this.type = CARDTYPES.spell;
        this.text = "Choose an enemy minion.\nShuffle it into your deck.";
        this.set = "LOE";
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Alex Konstad";
        this.flavor = "It's perfectly safe as long as you remember to put in air holes.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in The Ruined City, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in The Ruined City, in the League of Explorers adventure.";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0,\"REQ_ENEMY_TARGET\":0}

}

export class BRM_009 extends Card {
    constructor() {
        super();
        this.name = "Volcanic Lumberer";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>\nCosts (1) less for each minion that died this turn.";
        this.set = "BRM";
        this.health = 8;
        this.attack = 7;
        this.manacost = 9;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Trent Kaniuga";
        this.flavor = "The roots, the roots, the roots is on fire!";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after completing the Druid Class Challenge in Blackrock Mountain.";
        this.howToEarn = "Unlocked in Blackrock Spire, in the Blackrock Mountain adventure.";
    }

    //[\"TAUNT\"]

}

export class BRM_030t extends Card {
    constructor() {
        super();
        this.name = "Tail Swipe";
        this.type = CARDTYPES.spell;
        this.text = "Deal $4 damage.";
        this.set = "BRM";
        this.manacost = 4;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class EX1_410 extends Card {
    constructor() {
        super();
        this.name = "Shield Slam";
        this.type = CARDTYPES.spell;
        this.text = "Deal 1 damage to a minion for each Armor you have.";
        this.set = "EXPERT1";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Raymond Swanland";
        this.flavor = "\"What is a better weapon? The sharp one your enemies expect, or the blunt one they ignore?\" - The Art of Warrior, Chapter 9";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class AT_051 extends Card {
    constructor() {
        super();
        this.name = "Elemental Destruction";
        this.type = CARDTYPES.spell;
        this.text = "Deal $4-$5 damage to all minions. <b>Overload: (5)</b>";
        this.set = "TGT";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Tyler Walpole";
        this.flavor = "I'm not a shaman or anything, but isn't Elemental Destruction the opposite of what they want to do?";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //[\"OVERLOAD\"]

}

export class EX1_591 extends Card {
    constructor() {
        super();
        this.name = "Auchenai Soulpriest";
        this.type = CARDTYPES.minion;
        this.text = "Your cards and powers that restore Health now deal damage instead.";
        this.set = "EXPERT1";
        this.health = 5;
        this.attack = 3;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Doug Alexander";
        this.flavor = "The Auchenai know the end is coming, but they're not sure when.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"AURA\"]

}

export class BRMA13_5 extends Card {
    constructor() {
        super();
        this.name = "Son of the Flame";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Deal 6 damage.";
        this.set = "BRM";
        this.health = 3;
        this.attack = 6;
        this.manacost = 0;
        this.targetingArrowText = "Deal 6 damage.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class CS2_093 extends Card {
    constructor() {
        super();
        this.name = "Consecration";
        this.type = CARDTYPES.spell;
        this.text = "Deal $2 damage to all enemies.";
        this.set = "CORE";
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Vance Kovacs";
        this.flavor = "Consecrated ground glows with Holy energy.  But it smells a little, too.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 43.";
        this.howToEarn = "Unlocked at Level 4.";
    }

}

export class AT_042b extends Card {
    constructor() {
        super();
        this.name = "Panther Form";
        this.type = CARDTYPES.spell;
        this.text = "+1/+1 and <b>Stealth</b>";
        this.set = "TGT";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
        this.rarity = rarity.common;
    }

}

export class LOE_016t extends Card {
    constructor() {
        super();
        this.name = "Rock";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt.</b>";
        this.set = "LOE";
        this.health = 6;
        this.attack = 0;
        this.manacost = 1;
    }

    //[\"TAUNT\"]

}

export class AT_022 extends Card {
    constructor() {
        super();
        this.name = "Fist of Jaraxxus";
        this.type = CARDTYPES.spell;
        this.text = "When you play or discard this, deal $4 damage to a random enemy.";
        this.set = "TGT";
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Matt Dixon";
        this.flavor = "* Not actually Jaraxxus' fist.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"InvisibleDeathrattle\"]

}

export class TU4d_003 extends Card {
    constructor() {
        super();
        this.name = "Shotgun Blast";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDeal 1 damage.";
        this.set = "MISSIONS";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.hunter;
        this.rarity = rarity.common;
    }

    //{\"REQ_TARGET_TO_PLAY\":0,\"REQ_ENEMY_TARGET\":0}

}

export class AT_049e extends Card {
    constructor() {
        super();
        this.name = "Power of the Bluff";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Attack.";
        this.set = "TGT";
        this.characterClass = CHARACTERCLASS.shaman;
    }

}

export class BRM_001 extends Card {
    constructor() {
        super();
        this.name = "Solemn Vigil";
        this.type = CARDTYPES.spell;
        this.text = "Draw 2 cards. Costs (1) less for each minion that died this turn.";
        this.set = "BRM";
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Jaime Jones";
        this.flavor = "Each year, folk gather in front of Blackrock Mountain to mourn those who were mind-controlled into the lava.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after completing the Paladin Class Challenge in Blackrock Mountain.";
        this.howToEarn = "Unlocked in Hidden Laboratory, in the Blackrock Mountain adventure.";
    }

}

export class EX1_319 extends Card {
    constructor() {
        super();
        this.name = "Flame Imp";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Deal 3 damage to your hero.";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 3;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Alex Horley Orlandelli";
        this.race = race.demon;
        this.flavor = "Imps like being on fire.  They just do.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class AT_064 extends Card {
    constructor() {
        super();
        this.name = "Bash";
        this.type = CARDTYPES.spell;
        this.text = "Deal $3 damage.\nGain 3 Armor.";
        this.set = "TGT";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Dany Orizio";
        this.flavor = "You might think bashing doesn't take a lot of practice.  It doesn't.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class NEW1_029t extends Card {
    constructor() {
        super();
        this.name = "Kill Millhouse!";
        this.type = CARDTYPES.enchantment;
        this.text = "Spells cost (0) this turn!";
        this.set = "EXPERT1";
        this.rarity = rarity.legendary;
    }

}

export class XXX_003 extends Card {
    constructor() {
        super();
        this.name = "Restore 1";
        this.type = CARDTYPES.spell;
        this.text = "Restore 1 Health to a character.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class CRED_41 extends Card {
    constructor() {
        super();
        this.name = "Seyil Yoon";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Add 3 Sprints and a Marathon to your hand.";
        this.set = "CREDITS";
        this.health = 9;
        this.attack = 2;
        this.manacost = 5;
        this.rarity = rarity.legendary;
    }

}

export class EX1_006 extends Card {
    constructor() {
        super();
        this.name = "Alarm-o-Bot";
        this.type = CARDTYPES.minion;
        this.text = "At the start of your turn, swap this minion with a random one in your hand.";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 0;
        this.manacost = 3;
        this.artist = "Sean Oâ€™Daniels";
        this.race = race.mechanical;
        this.flavor = "WARNING.  WARNING.  WARNING.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class CS1_113 extends Card {
    constructor() {
        super();
        this.name = "Mind Control";
        this.type = CARDTYPES.spell;
        this.text = "Take control of an enemy minion.";
        this.set = "CORE";
        this.manacost = 10;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Sean Oâ€™Daniels";
        this.flavor = "Nominated as \"Spell Most Likely to Make Your Opponent Punch the Wall.\"";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 49.";
        this.howToEarn = "Unlocked at Level 10.";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0,\"REQ_ENEMY_TARGET\":0,\"REQ_NUM_MINION_SLOTS\":1}

}

export class EX1_308 extends Card {
    constructor() {
        super();
        this.name = "Soulfire";
        this.type = CARDTYPES.spell;
        this.text = "Deal $4 damage. Discard a random card.";
        this.set = "CORE";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Raymond Swanland";
        this.flavor = "Are you lighting a soul on fire? Or burning someone with your OWN soul? This seems like an important distinction.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 28.";
        this.howToEarn = "Unlocked at Level 6.";
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class FP1_002t extends Card {
    constructor() {
        super();
        this.name = "Spectral Spider";
        this.type = CARDTYPES.minion;
        this.set = "NAXX";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
    }

}

export class BRMA05_2H extends Card {
    constructor() {
        super();
        this.name = "Ignite Mana";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDeal 10 damage to the enemy hero if they have any unspent Mana.";
        this.set = "BRM";
        this.manacost = 0;
    }

}

export class GVG_056 extends Card {
    constructor() {
        super();
        this.name = "Iron Juggernaut";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Shuffle a Mine into your opponent's deck. When drawn, it explodes for 10 damage.";
        this.set = "GVG";
        this.health = 5;
        this.attack = 6;
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Raymond Swanland";
        this.race = race.mechanical;
        this.flavor = "The Iron Juggernaut guards Orgrimmar and has just earned the \"Employee of the Month\" award!";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class LOEA09_2H extends Card {
    constructor() {
        super();
        this.name = "Enraged!";
        this.type = CARDTYPES.hero_power;
        this.text = "Give your hero +5 attack this turn.";
        this.set = "LOE";
        this.manacost = 2;
    }

}

export class FP1_019 extends Card {
    constructor() {
        super();
        this.name = "Poison Seeds";
        this.type = CARDTYPES.spell;
        this.text = "Destroy all minions and summon 2/2 Treants to replace them.";
        this.set = "NAXX";
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Brian Despain";
        this.flavor = "\"Poisonseed Bagel\" is the least popular bagel at McTiggin's Druidic Bagel Emporium.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after completing the Druid Class Challenge in Naxxramas.";
        this.howToEarn = "Unlocked in The Arachnid Quarter, in the Naxxramas adventure.";
    }

}

export class XXX_046 extends Card {
    constructor() {
        super();
        this.name = "Force AI to Use Hero Power";
        this.type = CARDTYPES.spell;
        this.text = "Force the AI to use their Hero Power every turn from now on.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

}

export class AT_057 extends Card {
    constructor() {
        super();
        this.name = "Stablemaster";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Give a friendly Beast <b>Immune</b> this turn.";
        this.set = "TGT";
        this.health = 2;
        this.attack = 4;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Tyson Murphy";
        this.flavor = "Takes way better care of her pets than her brother, Unstablemaster.";
        this.rarity = rarity.epic;
        this.collectible = true;
        this.targetingArrowText = "Grant <b>Immune</b> this turn.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_TARGET_WITH_RACE\":20,\"REQ_FRIENDLY_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class GVG_123e extends Card {
    constructor() {
        super();
        this.name = "Overclocked";
        this.type = CARDTYPES.enchantment;
        this.text = "Spell Damage +2.";
        this.set = "GVG";
        this.characterClass = CHARACTERCLASS.mage;
    }

    //[\"SPELLPOWER\"]

}

export class GVG_122 extends Card {
    constructor() {
        super();
        this.name = "Wee Spellstopper";
        this.type = CARDTYPES.minion;
        this.text = "Adjacent minions can't be targeted by spells or Hero Powers.";
        this.set = "GVG";
        this.health = 5;
        this.attack = 2;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Jonboy Meyers";
        this.flavor = "Bane of spellcasters and spelling bees everywhere.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //[\"AURA\"]

}

export class EX1_133 extends Card {
    constructor() {
        super();
        this.name = "Perdition's Blade";
        this.type = CARDTYPES.weapon;
        this.text = "<b>Battlecry:</b> Deal 1 damage. <b>Combo:</b> Deal 2 instead.";
        this.set = "EXPERT1";
        this.attack = 2;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Daren Bader";
        this.flavor = "Perdition's Blade is Ragnaros's back-up weapon while Sulfuras is in the shop.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.targetingArrowText = "Deal 1 damage.  Combo: 2 instead.";
        this.durability = "2";
    }

    //[\"BATTLECRY\",\"COMBO\"]
    //{\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class TB_GreatCurves_01 extends Card {
    constructor() {
        super();
        this.name = "TB_ClockworkCardDealer";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
    }

}

export class AT_100 extends Card {
    constructor() {
        super();
        this.name = "Silver Hand Regent";
        this.type = CARDTYPES.minion;
        this.text = "<b>Inspire:</b> Summon a 1/1 Silver Hand Recruit.";
        this.set = "TGT";
        this.health = 3;
        this.attack = 3;
        this.manacost = 3;
        this.artist = "John Polidora";
        this.flavor = "The Silver Hand is the best paladin organization.  The Argent Crusaders are super jealous.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"INSPIRE\"]

}

export class EX1_165a extends Card {
    constructor() {
        super();
        this.name = "Cat Form";
        this.type = CARDTYPES.spell;
        this.text = "<b>Charge</b>";
        this.set = "EXPERT1";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
        this.rarity = rarity.common;
    }

}

export class EX1_076 extends Card {
    constructor() {
        super();
        this.name = "Pint-Sized Summoner";
        this.type = CARDTYPES.minion;
        this.text = "The first minion you play each turn costs (1) less.";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 2;
        this.manacost = 2;
        this.artist = "Ron Spears";
        this.flavor = "She's quite jealous of the Gallon-Sized Summoner.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.faction = "ALLIANCE";
        this.textInPlay = "Ritual";
    }

    //[\"AURA\"]

}

export class BRMA16_5 extends Card {
    constructor() {
        super();
        this.name = "Dragonteeth";
        this.type = CARDTYPES.weapon;
        this.text = "Whenever your opponent plays a card, gain +1 Attack.";
        this.set = "BRM";
        this.attack = 0;
        this.manacost = 1;
        this.durability = "6";
    }

}

export class LOEA06_03eh extends Card {
    constructor() {
        super();
        this.name = "Animated";
        this.type = CARDTYPES.enchantment;
        this.text = "+3/+3 and <b>Taunt</b>.";
        this.set = "LOE";
    }

}

export class AT_125 extends Card {
    constructor() {
        super();
        this.name = "Icehowl";
        this.type = CARDTYPES.minion;
        this.text = "<b>Charge</b>\nCan't attack heroes.";
        this.set = "TGT";
        this.health = 10;
        this.attack = 10;
        this.manacost = 9;
        this.artist = "John Polidora";
        this.flavor = "This massive yeti just closes his eyes and charges at the nearest target.  The nearest Target is a couple blocks away and has sick deals on skateboards.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"CHARGE\"]

}

export class NAX15_01He extends Card {
    constructor() {
        super();
        this.name = "Interloper!";
        this.type = CARDTYPES.enchantment;
        this.set = "NAXX";
    }

}

export class CS2_236 extends Card {
    constructor() {
        super();
        this.name = "Divine Spirit";
        this.type = CARDTYPES.spell;
        this.text = "Double a minion's Health.";
        this.set = "CORE";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Jim Pavelec";
        this.flavor = "Double the trouble. Double the fun!";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 28.";
        this.howToEarn = "Unlocked at Level 2.";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class AT_063t extends Card {
    constructor() {
        super();
        this.name = "Dreadscale";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, deal 1 damage to all other minions.";
        this.set = "TGT";
        this.health = 2;
        this.attack = 4;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Zoltan Boros";
        this.race = race.beast;
        this.flavor = "Let's be clear about this:  ACIDMAW is the sidekick.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

}

export class AT_021 extends Card {
    constructor() {
        super();
        this.name = "Tiny Knight of Evil";
        this.type = CARDTYPES.minion;
        this.text = "Whenever you discard a card, gain +1/+1.";
        this.set = "TGT";
        this.health = 2;
        this.attack = 3;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Raymond Swanland";
        this.race = race.demon;
        this.flavor = "\"No, no, no. I asked for a tiny JESTER of evil.\"";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class EX1_048 extends Card {
    constructor() {
        super();
        this.name = "Spellbreaker";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> <b>Silence</b> a minion.";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 4;
        this.manacost = 4;
        this.artist = "Matt Cavotta";
        this.flavor = "Spellbreakers can rip enchantments from magic-wielders.  The process is painless and can be performed on an outpatient basis.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "HORDE";
        this.targetingArrowText = "<b>Silence</b> a minion.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0,\"REQ_NONSELF_TARGET\":0}

}

export class LOE_050 extends Card {
    constructor() {
        super();
        this.name = "Mounted Raptor";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Summon a random 1-Cost minion.";
        this.set = "LOE";
        this.health = 2;
        this.attack = 3;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Ben Zhang";
        this.race = race.beast;
        this.flavor = "Clever girl!";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in Uldaman, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in Uldaman, in the League of Explorers adventure.";
    }

    //[\"DEATHRATTLE\"]

}

export class LOEA16_18H extends Card {
    constructor() {
        super();
        this.name = "Zinaar";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, gain a wish.";
        this.set = "LOE";
        this.health = 10;
        this.attack = 10;
        this.manacost = 10;
    }

}

export class FP1_012 extends Card {
    constructor() {
        super();
        this.name = "Sludge Belcher";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt.\nDeathrattle:</b> Summon a 1/2 Slime with <b>Taunt</b>.";
        this.set = "NAXX";
        this.health = 5;
        this.attack = 3;
        this.manacost = 5;
        this.artist = "Nate Bowden";
        this.flavor = "DO NOT GIVE HIM A ROOT BEER.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating Loatheb in the Plague Quarter.";
        this.howToEarn = "Unlocked in The Plague Quarter, in the Naxxramas adventure.";
    }

    //[\"DEATHRATTLE\",\"TAUNT\"]

}

export class EX1_384 extends Card {
    constructor() {
        super();
        this.name = "Avenging Wrath";
        this.type = CARDTYPES.spell;
        this.text = "Deal $8 damage randomly split among all enemies.";
        this.set = "EXPERT1";
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Alex Garner";
        this.flavor = "Wham! Wham! Wham! Wham! Wham! Wham! Wham! Wham!";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //[\"ImmuneToSpellpower\"]

}

export class EX1_583 extends Card {
    constructor() {
        super();
        this.name = "Priestess of Elune";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Restore 4 Health to your hero.";
        this.set = "EXPERT1";
        this.health = 4;
        this.attack = 5;
        this.manacost = 6;
        this.artist = "Dan Scott";
        this.flavor = "If she threatens to \"moon\" you, it's not what you think.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class CS2_105e extends Card {
    constructor() {
        super();
        this.name = "Heroic Strike";
        this.type = CARDTYPES.enchantment;
        this.text = "+4 Attack this turn.";
        this.set = "CORE";
        this.characterClass = CHARACTERCLASS.warrior;
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class NAX10_02 extends Card {
    constructor() {
        super();
        this.name = "Hook";
        this.type = CARDTYPES.weapon;
        this.text = "<b>Deathrattle:</b> Put this weapon into your hand.";
        this.set = "NAXX";
        this.attack = 5;
        this.manacost = 3;
        this.durability = "8";
    }

    //[\"DEATHRATTLE\"]

}

export class GVG_052 extends Card {
    constructor() {
        super();
        this.name = "Crush";
        this.type = CARDTYPES.spell;
        this.text = "Destroy a minion. If you have a damaged minion, this costs (4) less.";
        this.set = "GVG";
        this.manacost = 7;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Michael Sutfin";
        this.flavor = "Using this card on your enemies is one of the best things in life, according to some barbarians.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class LOE_110 extends Card {
    constructor() {
        super();
        this.name = "Ancient Shade";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Shuffle an 'Ancient Curse' into your deck that deals 7 damage to you when drawn.";
        this.set = "LOE";
        this.health = 4;
        this.attack = 7;
        this.manacost = 4;
        this.artist = "Slawomir Maniak";
        this.flavor = "Warning: Do not expose to direct sunlight.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in the Temple of Orsis, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in the Temple of Orsis, in the League of Explorers adventure.";
    }

    //[\"BATTLECRY\"]

}

export class EX1_382e extends Card {
    constructor() {
        super();
        this.name = "Stand Down!";
        this.type = CARDTYPES.enchantment;
        this.text = "Attack changed to 1.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.paladin;
    }

}

export class CS2_108 extends Card {
    constructor() {
        super();
        this.name = "Execute";
        this.type = CARDTYPES.spell;
        this.text = "Destroy a damaged enemy minion.";
        this.set = "CORE";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Dany Orizio";
        this.flavor = "It's okay, he deserved it.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 47.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0,\"REQ_ENEMY_TARGET\":0,\"REQ_DAMAGED_TARGET\":0}

}

export class tt_004 extends Card {
    constructor() {
        super();
        this.name = "Flesheating Ghoul";
        this.type = CARDTYPES.minion;
        this.text = "Whenever a minion dies, gain +1 Attack.";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 2;
        this.manacost = 3;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "'Flesheating' is an unfair name.  It's just that there's not really much else for him to eat.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.textInPlay = "Cannibalism";
    }

}

export class AT_122 extends Card {
    constructor() {
        super();
        this.name = "Gormok the Impaler";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> If you have at least 4 other minions, deal 4 damage.";
        this.set = "TGT";
        this.health = 4;
        this.attack = 4;
        this.manacost = 4;
        this.artist = "Nutthapon Petchthai";
        this.flavor = "Gormok has been giving impaling lessons in a small tent near the tournament grounds.  For only 25g you too could learn the fine art of impaling!";
        this.rarity = rarity.legendary;
        this.collectible = true;
        this.targetingArrowText = "Deal 4 damage.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_TARGET_IF_AVAILABLE_AND_MINIMUM_FRIENDLY_MINIONS\":4}

}

export class LOEA15_2H extends Card {
    constructor() {
        super();
        this.name = "Unstable Portal";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nAdd a random minion to your hand. It costs (3) less.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class XXX_024 extends Card {
    constructor() {
        super();
        this.name = "Damage Reflector";
        this.type = CARDTYPES.minion;
        this.text = "Whenever this minion takes damage, deal 1 damage to ALL other characters.";
        this.set = "CHEAT";
        this.health = 10;
        this.attack = 3;
        this.manacost = 0;
        this.rarity = rarity.common;
    }

}

export class CRED_21 extends Card {
    constructor() {
        super();
        this.name = "Bryan Chang";
        this.type = CARDTYPES.minion;
        this.text = "<b>Foodie:</b> Make all minions edible.";
        this.set = "CREDITS";
        this.health = 3;
        this.attack = 1;
        this.manacost = 1;
        this.rarity = rarity.legendary;
    }

}

export class BRMA09_5H extends Card {
    constructor() {
        super();
        this.name = "Dismount";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon Gyth. Get a new Hero Power.";
        this.set = "BRM";
        this.manacost = 4;
    }

    //[\"BRMA09_2H\",\"BRMA09_3H\",\"BRMA09_4H\"]

}

export class XXX_025 extends Card {
    constructor() {
        super();
        this.name = "Do Nothing";
        this.type = CARDTYPES.spell;
        this.text = "This does nothing.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

}

export class LOEA04_25 extends Card {
    constructor() {
        super();
        this.name = "Seething Statue";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, deal 2 damage to all enemies.";
        this.set = "LOE";
        this.health = 9;
        this.attack = 0;
        this.manacost = 8;
    }

}

export class GVG_014 extends Card {
    constructor() {
        super();
        this.name = "Vol'jin";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Swap Health with another minion.";
        this.set = "GVG";
        this.health = 2;
        this.attack = 6;
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Raymond Swanland";
        this.flavor = "Vol'jin is a shadow hunter, which is like a shadow priest except more voodoo.";
        this.rarity = rarity.legendary;
        this.collectible = true;
        this.targetingArrowText = "Swap Health.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class EX1_619e extends Card {
    constructor() {
        super();
        this.name = "Equality";
        this.type = CARDTYPES.enchantment;
        this.text = "Health changed to 1.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.paladin;
    }

}

export class FP1_002 extends Card {
    constructor() {
        super();
        this.name = "Haunted Creeper";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Summon two 1/1 Spectral Spiders.";
        this.set = "NAXX";
        this.health = 2;
        this.attack = 1;
        this.manacost = 2;
        this.artist = "Jeremy Cranford";
        this.race = race.beast;
        this.flavor = "Arachnofauxbia: Fear of fake spiders.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating Anub'Rekhan in the Arachnid Quarter.";
        this.howToEarn = "Unlocked in The Arachnid Quarter, in the Naxxramas adventure.";
    }

    //[\"DEATHRATTLE\"]

}

export class EX1_400 extends Card {
    constructor() {
        super();
        this.name = "Whirlwind";
        this.type = CARDTYPES.spell;
        this.text = "Deal $1 damage to ALL minions.";
        this.set = "CORE";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Jonboy Meyers";
        this.flavor = "The way to tell seasoned warriors from novice ones: the novices yell \"wheeeee\" while whirlwinding.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 32.";
        this.howToEarn = "Unlocked at Level 6.";
    }

}

export class CS2_121 extends Card {
    constructor() {
        super();
        this.name = "Frostwolf Grunt";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "CORE";
        this.health = 2;
        this.attack = 2;
        this.manacost = 2;
        this.artist = "Richie Marella";
        this.flavor = "Grunting is what his father did and his father before that.   It's more than just a job.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Shaman Level 57.";
    }

    //[\"TAUNT\"]

}

export class tt_004o extends Card {
    constructor() {
        super();
        this.name = "Cannibalize";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Attack.";
        this.set = "EXPERT1";
    }

}

export class GVG_079 extends Card {
    constructor() {
        super();
        this.name = "Force-Tank MAX";
        this.type = CARDTYPES.minion;
        this.text = "<b>Divine Shield</b>";
        this.set = "GVG";
        this.health = 7;
        this.attack = 7;
        this.manacost = 8;
        this.artist = "Nutchapol Thitinunthakorn";
        this.race = race.mechanical;
        this.flavor = "There is a factory in Tanaris for crafting force-tanks, but it only ever made two, because of cost overruns.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"DIVINE_SHIELD\"]

}

export class XXX_014 extends Card {
    constructor() {
        super();
        this.name = "Mill 10";
        this.type = CARDTYPES.spell;
        this.text = "Put 10 cards from a hero's deck into his graveyard.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

    //{\"REQ_TARGET_TO_PLAY\":0,\"REQ_HERO_TARGET\":0}

}

export class GVG_022b extends Card {
    constructor() {
        super();
        this.name = "Tinker's Sharpsword Oil";
        this.type = CARDTYPES.enchantment;
        this.text = "+3 Attack.";
        this.set = "GVG";
    }

}

export class AT_014e extends Card {
    constructor() {
        super();
        this.name = "Shadowfiended";
        this.type = CARDTYPES.enchantment;
        this.text = "Costs (1) less.";
        this.set = "TGT";
        this.characterClass = CHARACTERCLASS.priest;
    }

}

export class NAX5_02 extends Card {
    constructor() {
        super();
        this.name = "Eruption";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDeal 2 damage to the left-most enemy minion.";
        this.set = "NAXX";
        this.manacost = 1;
    }

    //{\"REQ_MINIMUM_ENEMY_MINIONS\":1}

}

export class BRMA14_3 extends Card {
    constructor() {
        super();
        this.name = "Arcanotron";
        this.type = CARDTYPES.minion;
        this.text = "Both players have <b>Spell Damage +2</b>.";
        this.set = "BRM";
        this.health = 2;
        this.attack = 2;
        this.manacost = 0;
        this.race = race.mechanical;
        this.rarity = rarity.legendary;
    }

    //[\"SPELLPOWER\"]

}

export class EX1_531e extends Card {
    constructor() {
        super();
        this.name = "Well Fed";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Attack and Health.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.hunter;
    }

}

export class NAX1_03 extends Card {
    constructor() {
        super();
        this.name = "Nerubian";
        this.type = CARDTYPES.minion;
        this.set = "NAXX";
        this.health = 1;
        this.attack = 3;
        this.manacost = 2;
    }

}

export class GVG_009 extends Card {
    constructor() {
        super();
        this.name = "Shadowbomber";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Deal 3 damage to each hero.";
        this.set = "GVG";
        this.health = 1;
        this.attack = 2;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Matt Dixon";
        this.flavor = "Shadowbomber does her job, but she's kind of phoning it in at this point.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class CS1_130 extends Card {
    constructor() {
        super();
        this.name = "Holy Smite";
        this.type = CARDTYPES.spell;
        this.text = "Deal $2 damage.";
        this.set = "CORE";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Steve Ellis";
        this.flavor = "It doesn't matter how pious you are.  Everyone needs a good smiting now and again.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 23.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class GVG_042 extends Card {
    constructor() {
        super();
        this.name = "Neptulon";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Add 4 random Murlocs to your hand. <b>Overload:</b> (3)";
        this.set = "GVG";
        this.health = 7;
        this.attack = 7;
        this.manacost = 7;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Ruan Jia";
        this.flavor = "Neptulon is \"The Tidehunter\". Heâ€™s one of the four elemental lords. And he and Ragnaros get together and make really amazing saunas.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"BATTLECRY\",\"OVERLOAD\"]

}

export class TU4e_005 extends Card {
    constructor() {
        super();
        this.name = "Flame Burst";
        this.type = CARDTYPES.spell;
        this.text = "Shoot 5 missiles at random enemies for $1 damage each.";
        this.set = "MISSIONS";
        this.manacost = 3;
        this.rarity = rarity.common;
    }

}

export class EX1_612 extends Card {
    constructor() {
        super();
        this.name = "Kirin Tor Mage";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> The next <b>Secret</b> you play this turn costs (0).";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 4;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Popo Wei";
        this.flavor = "The Kirin Tor reside in the floating city of Dalaran.  How do you make a Dalaran float?  Two scoops of ice cream, one scoop of Dalaran.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class CS2_012 extends Card {
    constructor() {
        super();
        this.name = "Swipe";
        this.type = CARDTYPES.spell;
        this.text = "Deal $4 damage to an enemy and $1 damage to all other enemies.";
        this.set = "CORE";
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Sean Oâ€™Daniels";
        this.flavor = "When a bear rears back and extends his arms, he's about to Swipe!  ... or hug.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 47.";
        this.howToEarn = "Unlocked at Level 8.";
    }

    //{\"REQ_TARGET_TO_PLAY\":0,\"REQ_ENEMY_TARGET\":0}

}

export class TB_PickYourFate_4 extends Card {
    constructor() {
        super();
        this.name = "Dire Fate: Card";
        this.type = CARDTYPES.spell;
        this.text = "When a minion dies, its owner draws a card.";
        this.set = "TB";
        this.manacost = 0;
    }

}

export class GVG_114 extends Card {
    constructor() {
        super();
        this.name = "Sneed's Old Shredder";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Summon a random legendary minion.";
        this.set = "GVG";
        this.health = 7;
        this.attack = 5;
        this.manacost = 8;
        this.artist = "Christopher Moeller";
        this.race = race.mechanical;
        this.flavor = "When Sneed was defeated in the Deadmines, his shredder was sold at auction to an anonymous buyer. (Probably Hogger.)";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"DEATHRATTLE\"]

}

export class EX1_621 extends Card {
    constructor() {
        super();
        this.name = "Circle of Healing";
        this.type = CARDTYPES.spell;
        this.text = "Restore #4 Health to ALL minions.";
        this.set = "EXPERT1";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Daarken";
        this.flavor = "It isn't really a circle.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class EX1_178 extends Card {
    constructor() {
        super();
        this.name = "Ancient of War";
        this.type = CARDTYPES.minion;
        this.text = "<b>Choose One</b> -\n+5 Attack; or +5 Health and <b>Taunt</b>.";
        this.set = "EXPERT1";
        this.health = 5;
        this.attack = 5;
        this.manacost = 7;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Sean Oâ€™Daniels";
        this.flavor = "Young Night Elves love to play \"Who can get the Ancient of War to Uproot?\"  You lose if you get crushed to death.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class CS2_075 extends Card {
    constructor() {
        super();
        this.name = "Sinister Strike";
        this.type = CARDTYPES.spell;
        this.text = "Deal $3 damage to the enemy hero.";
        this.set = "CORE";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Frank Cho";
        this.flavor = "There's something about this strike that just feels off.  Sinister, even.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 15.";
        this.howToEarn = "Unlocked at Level 1.";
    }

}

export class EX1_155ae extends Card {
    constructor() {
        super();
        this.name = "Mark of Nature";
        this.type = CARDTYPES.enchantment;
        this.text = "This minion has +4 Attack.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.druid;
    }

}

export class LOEA07_21 extends Card {
    constructor() {
        super();
        this.name = "Barrel Forward";
        this.type = CARDTYPES.spell;
        this.text = "Get 1 turn closer to the Exit!";
        this.set = "LOE";
        this.manacost = 1;
    }

}

export class GVG_072 extends Card {
    constructor() {
        super();
        this.name = "Shadowboxer";
        this.type = CARDTYPES.minion;
        this.text = "Whenever a character is healed, deal 1 damage to a random enemy.";
        this.set = "GVG";
        this.health = 3;
        this.attack = 2;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Dan Scott";
        this.race = race.mechanical;
        this.flavor = "Punching is its primary function. Also, its secondary function.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class EX1_608 extends Card {
    constructor() {
        super();
        this.name = "Sorcerer's Apprentice";
        this.type = CARDTYPES.minion;
        this.text = "Your spells cost (1) less.";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 3;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "Apprentices are great for bossing around.  \"Conjure me some mana buns! And a coffee!  Make that a mana coffee!\"";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"AURA\"]

}

export class EX1_522 extends Card {
    constructor() {
        super();
        this.name = "Patient Assassin";
        this.type = CARDTYPES.minion;
        this.text = "<b>Stealth</b>. Destroy any minion damaged by this minion.";
        this.set = "EXPERT1";
        this.health = 1;
        this.attack = 1;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Ben Olson";
        this.flavor = "Heâ€™s not really that patient. It just takes a while for someone to walk by that he can actually reach.";
        this.rarity = rarity.epic;
        this.collectible = true;
        this.textInPlay = "Sharpening";
    }

    //[\"POISONOUS\",\"STEALTH\"]

}

export class DS1h_292_H1 extends Card {
    constructor() {
        super();
        this.name = "Steady Shot";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDeal $2 damage to the enemy hero.";
        this.set = "HERO_SKINS";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.hunter;
        this.rarity = rarity.free;
    }

    //{\"REQ_STEADY_SHOT\":0}

}

export class AT_109 extends Card {
    constructor() {
        super();
        this.name = "Argent Watchman";
        this.type = CARDTYPES.minion;
        this.text = "Can't attack.\n<b>Inspire:</b> Can attack as normal this turn.";
        this.set = "TGT";
        this.health = 4;
        this.attack = 2;
        this.manacost = 2;
        this.artist = "Ben Zhang";
        this.flavor = "Who argent watches the Argent Watchman?";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"INSPIRE\"]

}

export class CS2_076 extends Card {
    constructor() {
        super();
        this.name = "Assassinate";
        this.type = CARDTYPES.spell;
        this.text = "Destroy an enemy minion.";
        this.set = "CORE";
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Glenn Rane";
        this.flavor = "If you don't want to be assassinated, move to the Barrens and change your name. Good luck!";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 47.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0,\"REQ_ENEMY_TARGET\":0}

}

export class HERO_04 extends Card {
    constructor() {
        super();
        this.name = "Uther Lightbringer";
        this.type = CARDTYPES.hero;
        this.set = "CORE";
        this.health = 30;
        this.characterClass = CHARACTERCLASS.paladin;
        this.rarity = rarity.free;
        this.collectible = true;
    }

}

export class BRMA05_3H extends Card {
    constructor() {
        super();
        this.name = "Living Bomb";
        this.type = CARDTYPES.spell;
        this.text = "Choose an enemy minion. If it lives until your next turn, deal $10 damage to all enemies.";
        this.set = "BRM";
        this.manacost = 3;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0,\"REQ_ENEMY_TARGET\":0}

}

export class LOEA07_09 extends Card {
    constructor() {
        super();
        this.name = "Chasing Trogg";
        this.type = CARDTYPES.minion;
        this.set = "LOE";
        this.health = 6;
        this.attack = 2;
        this.manacost = 4;
    }

}

export class CS2_073e extends Card {
    constructor() {
        super();
        this.name = "Cold Blood";
        this.type = CARDTYPES.enchantment;
        this.text = "+2 Attack.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.rogue;
    }

}

export class XXX_049 extends Card {
    constructor() {
        super();
        this.name = "Destroy all Mana";
        this.type = CARDTYPES.spell;
        this.text = "Destroy all of a player's Mana Crystals.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

    //{\"REQ_TARGET_TO_PLAY\":0,\"REQ_HERO_TARGET\":0}

}

export class NAX7_04 extends Card {
    constructor() {
        super();
        this.name = "Massive Runeblade";
        this.type = CARDTYPES.weapon;
        this.text = "Deals double damage to heroes.";
        this.set = "NAXX";
        this.attack = 5;
        this.manacost = 3;
        this.durability = "2";
    }

}

export class BRMA14_2 extends Card {
    constructor() {
        super();
        this.name = "Activate Arcanotron";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nActivate Arcanotron!";
        this.set = "BRM";
        this.manacost = 2;
    }

}

export class NEW1_038 extends Card {
    constructor() {
        super();
        this.name = "Gruul";
        this.type = CARDTYPES.minion;
        this.text = "At the end of each turn, gain +1/+1 .";
        this.set = "EXPERT1";
        this.health = 7;
        this.attack = 7;
        this.manacost = 8;
        this.artist = "Kev Walker";
        this.flavor = "He's Gruul \"the Dragonkiller\".  He just wanted to cuddle themâ€¦ he never meant toâ€¦ ";
        this.rarity = rarity.legendary;
        this.collectible = true;
        this.textInPlay = "Growth";
    }

}

export class BRMC_95h extends Card {
    constructor() {
        super();
        this.name = "Core Hound Puppies";
        this.type = CARDTYPES.spell;
        this.text = "Summon two 2/4 Core Hound Pups.";
        this.set = "TB";
        this.manacost = 3;
    }

}

export class LOE_047 extends Card {
    constructor() {
        super();
        this.name = "Tomb Spider";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry: Discover</b> a Beast.";
        this.set = "LOE";
        this.health = 3;
        this.attack = 3;
        this.manacost = 4;
        this.artist = "Turovec Konstantin";
        this.race = race.beast;
        this.flavor = "Less serious than its cousin, the Grave Spider.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in Uldaman, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in Uldaman, in the League of Explorers adventure.";
    }

    //[\"BATTLECRY\"]

}

export class AT_132_SHAMANc extends Card {
    constructor() {
        super();
        this.name = "Stoneclaw Totem";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "TGT";
        this.health = 2;
        this.attack = 0;
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.shaman;
    }

}

export class AT_132_SHAMAN extends Card {
    constructor() {
        super();
        this.name = "Totemic Slam";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon a Totem of your choice.";
        this.set = "TGT";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.shaman;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}

}

export class LOEA06_02h extends Card {
    constructor() {
        super();
        this.name = "Stonesculpting";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\n Summon a Statue for both players.";
        this.set = "LOE";
        this.manacost = 1;
    }

}

export class LOEA02_01h extends Card {
    constructor() {
        super();
        this.name = "Heroic Zinaar";
        this.type = CARDTYPES.hero;
        this.set = "LOE";
        this.health = 30;
    }

}

export class BRMA14_5 extends Card {
    constructor() {
        super();
        this.name = "Toxitron";
        this.type = CARDTYPES.minion;
        this.text = "At the start of your turn, deal 1 damage to all other minions.";
        this.set = "BRM";
        this.health = 3;
        this.attack = 3;
        this.manacost = 1;
        this.race = race.mechanical;
        this.rarity = rarity.legendary;
    }

}

export class CS2_045e extends Card {
    constructor() {
        super();
        this.name = "Rockbiter Weapon";
        this.type = CARDTYPES.enchantment;
        this.text = "This character has +3 Attack this turn.";
        this.set = "CORE";
        this.characterClass = CHARACTERCLASS.shaman;
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class LOEA16_23H extends Card {
    constructor() {
        super();
        this.name = "Lord Slitherspear";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, summon 1/1 Hungry Naga for each enemy minion.";
        this.set = "LOE";
        this.health = 10;
        this.attack = 10;
        this.manacost = 10;
    }

}

export class NEW1_008b extends Card {
    constructor() {
        super();
        this.name = "Ancient Secrets";
        this.type = CARDTYPES.spell;
        this.text = "Restore 5 Health.";
        this.set = "EXPERT1";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class BRMA02_2H extends Card {
    constructor() {
        super();
        this.name = "Jeering Crowd";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon a 1/1 Spectator with <b>Taunt</b>.";
        this.set = "BRM";
        this.manacost = 0;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}

}

export class FP1_030 extends Card {
    constructor() {
        super();
        this.name = "Loatheb";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Enemy spells cost (5) more next turn.";
        this.set = "NAXX";
        this.health = 5;
        this.attack = 5;
        this.manacost = 5;
        this.artist = "Samwise";
        this.flavor = "Loatheb used to be a simple Bog Beast.  This is why we need stricter regulations on mining and agriculture.";
        this.rarity = rarity.legendary;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after completing the Plague Quarter.";
        this.howToEarn = "Unlocked in The Plague Quarter, in the Naxxramas adventure.";
    }

    //[\"BATTLECRY\"]

}

export class XXX_039 extends Card {
    constructor() {
        super();
        this.name = "Become Hogger";
        this.type = CARDTYPES.spell;
        this.text = "Become Hogger for Video Recording.";
        this.set = "CHEAT";
        this.manacost = 0;
    }

}

export class AT_075 extends Card {
    constructor() {
        super();
        this.name = "Warhorse Trainer";
        this.type = CARDTYPES.minion;
        this.text = "Your Silver Hand Recruits have +1 Attack.";
        this.set = "TGT";
        this.health = 4;
        this.attack = 2;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Zoltan & Gabor";
        this.flavor = "He doesn't even get Sundays off.  Every day he's hostling.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"AURA\"]

}

export class BRMA12_2 extends Card {
    constructor() {
        super();
        this.name = "Brood Affliction";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nAt the end of your turn, add a Brood Affliction card to your opponent's hand.";
        this.set = "BRM";
        this.manacost = 0;
    }

    //[\"BRMA12_6\",\"BRMA12_5\",\"BRMA12_7\",\"BRMA12_4\",\"BRMA12_3\"]

}

export class LOEA09_7H extends Card {
    constructor() {
        super();
        this.name = "Cauldron";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>\n<b>Deathrattle:</b> Save Sir Finley!";
        this.set = "LOE";
        this.health = 10;
        this.attack = 0;
        this.manacost = 0;
    }

    //[\"DEATHRATTLE\",\"TAUNT\"]

}

export class BRMA08_1H extends Card {
    constructor() {
        super();
        this.name = "General Drakkisath";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 50;
    }

}

export class LOEA01_12 extends Card {
    constructor() {
        super();
        this.name = "Tol'vir Hoplite";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Deal 5 damage to both heroes.";
        this.set = "LOE";
        this.health = 2;
        this.attack = 5;
        this.manacost = 3;
    }

    //[\"DEATHRATTLE\"]

}

export class BRM_012e extends Card {
    constructor() {
        super();
        this.name = "On Fire!";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Attack.";
        this.set = "BRM";
    }

}

export class CS2_235 extends Card {
    constructor() {
        super();
        this.name = "Northshire Cleric";
        this.type = CARDTYPES.minion;
        this.text = "Whenever a minion is healed, draw a card.";
        this.set = "CORE";
        this.health = 3;
        this.attack = 1;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Terese Nielsen";
        this.flavor = "They help the downtrodden and distressed.  Also they sell cookies.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 40.";
        this.howToEarn = "Unlocked at Level 1.";
    }

}

export class CS2_065 extends Card {
    constructor() {
        super();
        this.name = "Voidwalker";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "CORE";
        this.health = 3;
        this.attack = 1;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Alex Horley Orlandelli";
        this.race = race.demon;
        this.flavor = "No relation to \"The Voidsteppers\", the popular Void-based dance troupe.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 36.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //[\"TAUNT\"]

}

export class CS1_112 extends Card {
    constructor() {
        super();
        this.name = "Holy Nova";
        this.type = CARDTYPES.spell;
        this.text = "Deal $2 damage to all enemies. Restore #2 Health to all friendly characters.";
        this.set = "CORE";
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Luca Zontini";
        this.flavor = "If the Holy Light forsakes you, good luck casting this spell.  Also, you're probably a jerk.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 45.";
        this.howToEarn = "Unlocked at Level 6.";
    }

}

export class FP1_029 extends Card {
    constructor() {
        super();
        this.name = "Dancing Swords";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Your opponent draws a card.";
        this.set = "NAXX";
        this.health = 4;
        this.attack = 4;
        this.manacost = 3;
        this.artist = "Jon McConnell";
        this.flavor = "They like to dance to reggae.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating Instructor Razuvious in the Military Quarter.";
        this.howToEarn = "Unlocked in The Military Quarter, in the Naxxramas adventure.";
    }

    //[\"DEATHRATTLE\"]

}

export class BRMA14_4H extends Card {
    constructor() {
        super();
        this.name = "Activate Toxitron";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nActivate Toxitron!";
        this.set = "BRM";
        this.manacost = 2;
    }

}

export class TU4c_003 extends Card {
    constructor() {
        super();
        this.name = "Barrel";
        this.type = CARDTYPES.minion;
        this.text = "Is something in this barrel?";
        this.set = "MISSIONS";
        this.health = 2;
        this.attack = 0;
        this.manacost = 0;
        this.rarity = rarity.common;
        this.textInPlay = "Breakable";
    }

    //[\"DEATHRATTLE\"]

}

export class LOEA16_23 extends Card {
    constructor() {
        super();
        this.name = "Lord Slitherspear";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, summon 1/1 Hungry Naga for each enemy minion.";
        this.set = "LOE";
        this.health = 5;
        this.attack = 5;
        this.manacost = 5;
    }

}

export class CS2_004 extends Card {
    constructor() {
        super();
        this.name = "Power Word: Shield";
        this.type = CARDTYPES.spell;
        this.text = "Give a minion +2 Health.\nDraw a card.";
        this.set = "CORE";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Jessica Jung";
        this.flavor = "Sure the extra protection is nice, but the shield really reduces visibility.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 47.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class AT_132_ROGUE extends Card {
    constructor() {
        super();
        this.name = "Poisoned Daggers";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nEquip a 2/2 Weapon.";
        this.set = "TGT";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.rogue;
    }

}

export class HRW02_1e extends Card {
    constructor() {
        super();
        this.name = "Overclock";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Attack.";
        this.set = "TB";
        this.manacost = 1;
    }

}

export class CS2_013t extends Card {
    constructor() {
        super();
        this.name = "Excess Mana";
        this.type = CARDTYPES.spell;
        this.text = "Draw a card. <i>(You can only have 10 Mana in your tray.)</i>";
        this.set = "CORE";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
    }

}

export class LOEA07_03 extends Card {
    constructor() {
        super();
        this.name = "Flee the Mine!";
        this.type = CARDTYPES.hero_power;
        this.text = "Escape the Troggs!";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class LOEA10_3 extends Card {
    constructor() {
        super();
        this.name = "Murloc Tinyfin";
        this.type = CARDTYPES.minion;
        this.set = "LOE";
        this.health = 1;
        this.attack = 1;
        this.manacost = 0;
        this.artist = "Oliver Chipping";
        this.race = race.murloc;
        this.flavor = "High mortality rate, from often being hugged to death.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in The Ruined City, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in The Ruined City, in the League of Explorers adventure.";
    }

}

export class NAX3_02_TB extends Card {
    constructor() {
        super();
        this.name = "Web Wrap";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nReturn a random enemy minion to your opponent's hand.";
        this.set = "TB";
        this.manacost = 2;
    }

    //{\"REQ_MINIMUM_ENEMY_MINIONS\":1}

}

export class AT_049 extends Card {
    constructor() {
        super();
        this.name = "Thunder Bluff Valiant";
        this.type = CARDTYPES.minion;
        this.text = "<b>Inspire:</b> Give your Totems +2 Attack.";
        this.set = "TGT";
        this.health = 6;
        this.attack = 3;
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Sean McNally";
        this.flavor = "Allowing totems to attack is not cheating.  I mean, there isn't anything in the rule books about it.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"INSPIRE\"]

}

export class XXX_030 extends Card {
    constructor() {
        super();
        this.name = "Opponent Disconnect";
        this.type = CARDTYPES.spell;
        this.text = "Force your opponnet to disconnect.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

}

export class EX1_089 extends Card {
    constructor() {
        super();
        this.name = "Arcane Golem";
        this.type = CARDTYPES.minion;
        this.text = "<b>Charge</b>. <b>Battlecry:</b> Give your opponent a Mana Crystal.";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 4;
        this.manacost = 3;
        this.artist = "Sedhayu Ardian";
        this.flavor = "Having Arcane golems at home really classes up the place, and as a bonus they are great conversation pieces.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\",\"CHARGE\"]

}

export class TU4c_002 extends Card {
    constructor() {
        super();
        this.name = "Barrel Toss";
        this.type = CARDTYPES.spell;
        this.text = "Deal 2 damage.";
        this.set = "MISSIONS";
        this.manacost = 1;
        this.rarity = rarity.common;
    }

    //{\"REQ_TARGET_TO_PLAY\":0,\"REQ_ENEMY_TARGET\":0}

}

export class LOEA09_3d extends Card {
    constructor() {
        super();
        this.name = "Getting Hungry";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon a 5/1 Hungry Naga.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class CS2_203 extends Card {
    constructor() {
        super();
        this.name = "Ironbeak Owl";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> <b>Silence</b> a minion.";
        this.set = "EXPERT1";
        this.health = 1;
        this.attack = 2;
        this.manacost = 2;
        this.artist = "Trevor Jacobs";
        this.race = race.beast;
        this.flavor = "Their wings are silent but their screech is... whatever the opposite of silent is.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "HORDE";
        this.targetingArrowText = "<b>Silence</b> a minion.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class TU4c_007 extends Card {
    constructor() {
        super();
        this.name = "Mukla's Big Brother";
        this.type = CARDTYPES.minion;
        this.text = "So strong! And only 6 Mana?!";
        this.set = "MISSIONS";
        this.health = 10;
        this.attack = 10;
        this.manacost = 6;
        this.rarity = rarity.common;
    }

}

export class GVG_006 extends Card {
    constructor() {
        super();
        this.name = "Mechwarper";
        this.type = CARDTYPES.minion;
        this.text = "Your Mechs cost (1) less.";
        this.set = "GVG";
        this.health = 3;
        this.attack = 2;
        this.manacost = 2;
        this.artist = "Phil Saunders";
        this.race = race.mechanical;
        this.flavor = "Mechs that summon mechs? What's next? Donuts that summon donuts? Mmmmm.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"AURA\"]

}

export class CRED_02 extends Card {
    constructor() {
        super();
        this.name = "Eric Dodds";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Summon a 2/2 Pirate and destroy all Ninjas.";
        this.set = "CREDITS";
        this.health = 5;
        this.attack = 5;
        this.manacost = 6;
        this.rarity = rarity.legendary;
    }

}

export class TB_PickYourFateRandom extends Card {
    constructor() {
        super();
        this.name = "Pick Your Fate Random";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
    }

    //[\"TB_PickYourFate_12\",\"TB_PickYourFate_2\",\"TB_PickYourFate_8rand\",\"TB_PickYourFate_6\",\"TB_PickYourFate_5\",\"TB_PickYourFate_7\"]

}

export class GVG_030a extends Card {
    constructor() {
        super();
        this.name = "Attack Mode";
        this.type = CARDTYPES.spell;
        this.text = "+1 Attack.";
        this.set = "GVG";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
    }

}

export class TB_GiftExchange_Treasure extends Card {
    constructor() {
        super();
        this.name = "Winter's Veil Gift";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle</b>: Give current player a Stolen Gift.";
        this.set = "TB";
        this.health = 4;
        this.attack = 0;
        this.manacost = 0;
    }

    //[\"DEATHRATTLE\"]

}

export class AT_062 extends Card {
    constructor() {
        super();
        this.name = "Ball of Spiders";
        this.type = CARDTYPES.spell;
        this.text = "Summon three 1/1 Webspinners.";
        this.set = "TGT";
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Skan Srisuwan";
        this.flavor = "\"THEY'RE EVERYWHERE GET THEM OFF!!!\" - Everyone";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}

}

export class AT_047e extends Card {
    constructor() {
        super();
        this.name = "Experienced";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased stats.";
        this.set = "TGT";
        this.characterClass = CHARACTERCLASS.shaman;
    }

}

export class AT_055 extends Card {
    constructor() {
        super();
        this.name = "Flash Heal";
        this.type = CARDTYPES.spell;
        this.text = "Restore #5 Health.";
        this.set = "TGT";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Marcelo Vignali";
        this.flavor = "Flash!  Ahhhhhhh~";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class XXX_058 extends Card {
    constructor() {
        super();
        this.name = "Weapon Nerf";
        this.type = CARDTYPES.spell;
        this.text = "Give a weapon a negative enchantment.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

}

export class LOE_118 extends Card {
    constructor() {
        super();
        this.name = "Cursed Blade";
        this.type = CARDTYPES.weapon;
        this.text = "Double all damage dealt to your hero.";
        this.set = "LOE";
        this.attack = 2;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Craig Mullins";
        this.flavor = "The Curse is that you have to listen to \"MMMBop\" on repeat.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in the Hall of Explorers, in the League of Explorers adventure.";
        this.durability = "3";
    }

}

export class EX1_085 extends Card {
    constructor() {
        super();
        this.name = "Mind Control Tech";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> If your opponent has 4 or more minions, take control of one at random.";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 3;
        this.manacost = 3;
        this.artist = "Leo Che";
        this.flavor = "Mind Control technology is getting better, but that's not saying much.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.faction = "ALLIANCE";
    }

    //[\"BATTLECRY\"]

}

export class BRMA15_3 extends Card {
    constructor() {
        super();
        this.name = "Release the Aberrations!";
        this.type = CARDTYPES.spell;
        this.text = "Summon 3 Aberrations.";
        this.set = "BRM";
        this.manacost = 2;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}

}

export class CS2_221 extends Card {
    constructor() {
        super();
        this.name = "Spiteful Smith";
        this.type = CARDTYPES.minion;
        this.text = "<b>Enrage:</b> Your weapon has +2 Attack.";
        this.set = "EXPERT1";
        this.health = 6;
        this.attack = 4;
        this.manacost = 5;
        this.artist = "Justin Sweet";
        this.flavor = "She'll craft you a sword, but you'll need to bring her 5 Steel Ingots, 3 Motes of Earth, and the scalp of her last customer.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "HORDE";
        this.textInPlay = "Summoning";
    }

    //[\"ENRAGED\"]

}

export class CS1_129e extends Card {
    constructor() {
        super();
        this.name = "Inner Fire";
        this.type = CARDTYPES.enchantment;
        this.text = "This minion's Attack is equal to its Health.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.priest;
    }

}

export class AT_043 extends Card {
    constructor() {
        super();
        this.name = "Astral Communion";
        this.type = CARDTYPES.spell;
        this.text = "Gain 10 Mana Crystals. Discard your hand.";
        this.set = "TGT";
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Christopher Moeller";
        this.flavor = "Hey!  Moon!  Can I have some mana crystals?";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class TU4c_005 extends Card {
    constructor() {
        super();
        this.name = "Hidden Gnome";
        this.type = CARDTYPES.minion;
        this.text = "Was hiding in a barrel!";
        this.set = "MISSIONS";
        this.health = 3;
        this.attack = 1;
        this.manacost = 2;
        this.rarity = rarity.common;
    }

}

export class BRM_003 extends Card {
    constructor() {
        super();
        this.name = "Dragon's Breath";
        this.type = CARDTYPES.spell;
        this.text = "Deal $4 damage. Costs (1) less for each minion that died this turn.";
        this.set = "BRM";
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Mauricio Herrera";
        this.flavor = "Dragons breathe fire, sure, but did you know they can also breathe Cotton Candy?  It's harder to give them a reason to do that, though.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after completing the Mage Class Challenge in Blackrock Mountain.";
        this.howToEarn = "Unlocked in Blackrock Depths, in the Blackrock Mountain adventure.";
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class CS2_032 extends Card {
    constructor() {
        super();
        this.name = "Flamestrike";
        this.type = CARDTYPES.spell;
        this.text = "Deal $4 damage to all enemy minions.";
        this.set = "CORE";
        this.manacost = 7;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Romain De Santi";
        this.flavor = "When the ground is on fire, you should <i>not</i> stop, drop, and roll.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 51.";
        this.howToEarn = "Unlocked at Level 10.";
    }

}

export class AT_045 extends Card {
    constructor() {
        super();
        this.name = "Aviana";
        this.type = CARDTYPES.minion;
        this.text = "Your minions cost (1).";
        this.set = "TGT";
        this.health = 5;
        this.attack = 5;
        this.manacost = 9;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Velvet Engine";
        this.flavor = "Call her \"Tweety\".  She'll find it real funny.  I PROMISE.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"AURA\"]

}

export class LOEA16_11 extends Card {
    constructor() {
        super();
        this.name = "Crown of Kael'thas";
        this.type = CARDTYPES.spell;
        this.text = "Deal $10 damage randomly split among ALL characters.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class NEW1_012o extends Card {
    constructor() {
        super();
        this.name = "Mana Gorged";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased attack.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.mage;
    }

}

export class NAX2_03H extends Card {
    constructor() {
        super();
        this.name = "Rain of Fire";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nFire a missile for each card in your opponent's hand.";
        this.set = "NAXX";
        this.manacost = 1;
    }

    //[\"ImmuneToSpellpower\"]

}

export class FP1_012t extends Card {
    constructor() {
        super();
        this.name = "Slime";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "NAXX";
        this.health = 2;
        this.attack = 1;
        this.manacost = 1;
    }

    //[\"TAUNT\"]

}

export class TB_CoOp_Mechazod2 extends Card {
    constructor() {
        super();
        this.name = "Overloaded Mechazod";
        this.type = CARDTYPES.minion;
        this.text = "<b>Boss</b>\nAt the beginning of each turn, Mechazod strikes!";
        this.set = "TB";
        this.health = 80;
        this.attack = 9;
        this.manacost = 10;
        this.rarity = rarity.legendary;
    }

}

export class TB_DecreasingCardCost extends Card {
    constructor() {
        super();
        this.name = "TB_DecreasingCardCost";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
    }

}

export class EX1_360 extends Card {
    constructor() {
        super();
        this.name = "Humility";
        this.type = CARDTYPES.spell;
        this.text = "Change a minion's Attack to 1.";
        this.set = "CORE";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Daren Bader";
        this.flavor = "This card makes something really damp.  Oh wait.  That's \"Humidity.\"";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 28.";
        this.howToEarn = "Unlocked at Level 6.";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class PART_006 extends Card {
    constructor() {
        super();
        this.name = "Reversing Switch";
        this.type = CARDTYPES.spell;
        this.text = "Swap a minion's Attack and Health.";
        this.set = "GVG";
        this.manacost = 1;
        this.artist = "Nutthapon Petthai";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class NAX4_01H extends Card {
    constructor() {
        super();
        this.name = "Noth the Plaguebringer";
        this.type = CARDTYPES.hero;
        this.set = "NAXX";
        this.health = 45;
        this.characterClass = CHARACTERCLASS.mage;
    }

}

export class AT_108 extends Card {
    constructor() {
        super();
        this.name = "Armored Warhorse";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Reveal a minion in each deck. If yours costs more, gain <b>Charge</b>.";
        this.set = "TGT";
        this.health = 3;
        this.attack = 5;
        this.manacost = 4;
        this.artist = "Edouard Guiton & Tony Washington";
        this.race = race.beast;
        this.flavor = "Yep.  It's a horse... wearing armor... going to war.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class BRMA01_4 extends Card {
    constructor() {
        super();
        this.name = "Get 'em!";
        this.type = CARDTYPES.spell;
        this.text = "Summon four 1/1 Dwarves with <b>Taunt</b>.";
        this.set = "BRM";
        this.manacost = 3;
    }

}

export class EX1_303 extends Card {
    constructor() {
        super();
        this.name = "Shadowflame";
        this.type = CARDTYPES.spell;
        this.text = "Destroy a friendly minion and deal its Attack damage to all enemy minions.";
        this.set = "EXPERT1";
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Dave Kendall";
        this.flavor = "Start with a powerful minion and stir in Shadowflame and you have a good time!";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0,\"REQ_FRIENDLY_TARGET\":0}

}

export class EX1_507e extends Card {
    constructor() {
        super();
        this.name = "Mrgglaargl!";
        this.type = CARDTYPES.enchantment;
        this.text = "Murloc Warleader is granting +2/+1.";
        this.set = "EXPERT1";
    }

}

export class CRED_06 extends Card {
    constructor() {
        super();
        this.name = "Derek Sakamoto";
        this.type = CARDTYPES.minion;
        this.text = "<i>The notorious Footclapper.</i>";
        this.set = "CREDITS";
        this.health = 1;
        this.attack = 3;
        this.manacost = 1;
        this.rarity = rarity.legendary;
    }

}

export class BRMC_95he extends Card {
    constructor() {
        super();
        this.name = "Core Hound Pup";
        this.type = CARDTYPES.minion;
        this.text = "At the end of each turn, summon all Core Hound Pups that died this turn.";
        this.set = "TB";
        this.health = 4;
        this.attack = 2;
        this.manacost = 3;
        this.race = race.beast;
    }

}

export class LOEA01_02h extends Card {
    constructor() {
        super();
        this.name = "Blessings of the Sun";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Passive Hero Power</b>\n Phaerix is <b>Immune</b> while he controls the Rod of the Sun.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class EX1_558 extends Card {
    constructor() {
        super();
        this.name = "Harrison Jones";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Destroy your opponent's weapon and draw cards equal to its Durability.";
        this.set = "EXPERT1";
        this.health = 4;
        this.attack = 5;
        this.manacost = 5;
        this.artist = "Matt Dixon";
        this.flavor = "â€œThat belongs in the Hall of Explorers!â€";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class EX1_244e extends Card {
    constructor() {
        super();
        this.name = "Totemic Might";
        this.type = CARDTYPES.enchantment;
        this.text = "+2 Health.";
        this.set = "CORE";
        this.characterClass = CHARACTERCLASS.shaman;
    }

}

export class EX1_001 extends Card {
    constructor() {
        super();
        this.name = "Lightwarden";
        this.type = CARDTYPES.minion;
        this.text = "Whenever a character is healed, gain +2 Attack.";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 1;
        this.manacost = 1;
        this.artist = "Erik Ko";
        this.flavor = "Sheâ€™s smaller than her sisters Mediumwarden and Heavywarden.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class EX1_019 extends Card {
    constructor() {
        super();
        this.name = "Shattered Sun Cleric";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Give a friendly minion +1/+1.";
        this.set = "CORE";
        this.health = 2;
        this.attack = 3;
        this.manacost = 3;
        this.artist = "Doug Alexander";
        this.flavor = "They always have a spare flask of Sunwell Energy Drinkâ„¢!";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Priest Level 53.";
        this.targetingArrowText = "Give +1/+1.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_FRIENDLY_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class GVG_118 extends Card {
    constructor() {
        super();
        this.name = "Troggzor the Earthinator";
        this.type = CARDTYPES.minion;
        this.text = "Whenever your opponent casts a spell, summon a Burly Rockjaw Trogg.";
        this.set = "GVG";
        this.health = 6;
        this.attack = 6;
        this.manacost = 7;
        this.artist = "Mike Sass";
        this.flavor = "He keeps earthinating the countryside despite attempts to stop him.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

}

export class EX1_323 extends Card {
    constructor() {
        super();
        this.name = "Lord Jaraxxus";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Destroy your hero and replace it with Lord Jaraxxus.";
        this.set = "EXPERT1";
        this.health = 15;
        this.attack = 3;
        this.manacost = 9;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Alex Horley Orlandelli";
        this.race = race.demon;
        this.flavor = "\"TRIFLING GNOME! YOUR ARROGANCE WILL BE YOUR UNDOING!!!!\"";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class EX1_597 extends Card {
    constructor() {
        super();
        this.name = "Imp Master";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, deal 1 damage to this minion and summon a 1/1 Imp.";
        this.set = "EXPERT1";
        this.health = 5;
        this.attack = 1;
        this.manacost = 3;
        this.artist = "Mark Gibbons";
        this.flavor = "She would enjoy the job a lot more if she just could get the imps to QUIT BITING HER.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.textInPlay = "Imp Master";
    }

}

export class CRED_09 extends Card {
    constructor() {
        super();
        this.name = "Ben Thompson";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Draw some cards. With a pen.";
        this.set = "CREDITS";
        this.health = 7;
        this.attack = 4;
        this.manacost = 6;
        this.rarity = rarity.legendary;
    }

}

export class HERO_05a extends Card {
    constructor() {
        super();
        this.name = "Alleria Windrunner";
        this.type = CARDTYPES.hero;
        this.set = "HERO_SKINS";
        this.health = 30;
        this.characterClass = CHARACTERCLASS.hunter;
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class CS2_053 extends Card {
    constructor() {
        super();
        this.name = "Far Sight";
        this.type = CARDTYPES.spell;
        this.text = "Draw a card. That card costs (3) less.";
        this.set = "EXPERT1";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Lars Grant-West";
        this.flavor = "Drek'thar can't see, but he can <i>see</i>. You know what I mean? It's ok if you don't.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class GVG_047 extends Card {
    constructor() {
        super();
        this.name = "Sabotage";
        this.type = CARDTYPES.spell;
        this.text = "Destroy a random enemy minion. <b>Combo</b>: And your opponent's weapon.";
        this.set = "GVG";
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Dave Allsop";
        this.flavor = "Rogues can't stand it. They know you planned it! They are going to set you straight!";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //[\"COMBO\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_ENEMY_TARGET\":0}

}

export class CRED_12 extends Card {
    constructor() {
        super();
        this.name = "Rachelle Davis";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Draw TWO cards. <i>She's not a novice engineer.</i>";
        this.set = "CREDITS";
        this.health = 2;
        this.attack = 1;
        this.manacost = 2;
        this.rarity = rarity.legendary;
    }

}

export class AT_034e extends Card {
    constructor() {
        super();
        this.name = "Laced";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Attack.";
        this.set = "TGT";
        this.characterClass = CHARACTERCLASS.rogue;
    }

}

export class GVG_089 extends Card {
    constructor() {
        super();
        this.name = "Illuminator";
        this.type = CARDTYPES.minion;
        this.text = "If you control a <b>Secret</b> at the end of your turn, restore 4 Health to your hero.";
        this.set = "GVG";
        this.health = 4;
        this.attack = 2;
        this.manacost = 3;
        this.artist = "Jim Nelson";
        this.flavor = "\"LUMOS!\" is not what they yell. What do you think this is, Hogwarts?";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class BRMA_01 extends Card {
    constructor() {
        super();
        this.name = "Flameheart";
        this.type = CARDTYPES.spell;
        this.text = "Draw 2 cards.\nGain 4 Armor.";
        this.set = "BRM";
        this.manacost = 3;
    }

}

export class TB_011 extends Card {
    constructor() {
        super();
        this.name = "Tarnished Coin";
        this.type = CARDTYPES.spell;
        this.text = "Gain 1 Mana Crystal this turn only.";
        this.set = "TB";
        this.manacost = 0;
    }

}

export class PART_005 extends Card {
    constructor() {
        super();
        this.name = "Emergency Coolant";
        this.type = CARDTYPES.spell;
        this.text = "<b>Freeze</b> a minion.";
        this.set = "GVG";
        this.manacost = 1;
        this.artist = "Peerasak Senalai";
    }

    //[\"FREEZE\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class AT_084 extends Card {
    constructor() {
        super();
        this.name = "Lance Carrier";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Give a friendly minion +2 Attack.";
        this.set = "TGT";
        this.health = 2;
        this.attack = 1;
        this.manacost = 2;
        this.artist = "Tyson Murphy";
        this.flavor = "Lance Carrier is an obscure entry level position in orcish armies.  A mystery, since orcs don't generally use lances.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.targetingArrowText = "Give +2 Attack.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_FRIENDLY_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class BRMC_86e extends Card {
    constructor() {
        super();
        this.name = "I Hear You...";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Attack.";
        this.set = "TB";
    }

}

export class LOE_018e extends Card {
    constructor() {
        super();
        this.name = "Trogg No Stupid";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Attack.";
        this.set = "LOE";
        this.characterClass = CHARACTERCLASS.shaman;
    }

}

export class AT_119e extends Card {
    constructor() {
        super();
        this.name = "Inspired";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Stats.";
        this.set = "TGT";
    }

}

export class PlaceholderCard extends Card {
    constructor() {
        super();
        this.name = "Placeholder Card";
        this.type = CARDTYPES.minion;
        this.text = "Battlecry: Someone remembers to publish this card.";
        this.set = "NONE";
        this.health = 8;
        this.attack = 6;
        this.manacost = 9;
        this.characterClass = CHARACTERCLASS.mage;
        this.rarity = rarity.epic;
    }

}

export class EX1_083 extends Card {
    constructor() {
        super();
        this.name = "Tinkmaster Overspark";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Transform another random minion into a 5/5 Devilsaur or a 1/1 Squirrel.";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 3;
        this.manacost = 3;
        this.artist = "Tom Baxa";
        this.flavor = "Tinkmaster Overspark nearly lost his Tinker's license after the Great Ironforge Squirrel Stampede of '09.";
        this.rarity = rarity.legendary;
        this.collectible = true;
        this.faction = "ALLIANCE";
        this.targetingArrowText = "Transform a minion into a 5/5 or a 1/1 at random.";
    }

    //[\"BATTLECRY\"]

}

export class BRM_007 extends Card {
    constructor() {
        super();
        this.name = "Gang Up";
        this.type = CARDTYPES.spell;
        this.text = "Choose a minion. Shuffle 3 copies of it into your deck.";
        this.set = "BRM";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Jim Nelson";
        this.flavor = "If you are thinking about visiting Moonbrook, you better roll deep.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating the Dark Iron Arena in Blackrock Depths.";
        this.howToEarn = "Unlocked in Blackrock Depths, in the Blackrock Mountain adventure.";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class XXX_055 extends Card {
    constructor() {
        super();
        this.name = "1000 Stats";
        this.type = CARDTYPES.spell;
        this.text = "Give a Minion +1000/+1000";
        this.set = "CHEAT";
        this.manacost = 0;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class LOE_115a extends Card {
    constructor() {
        super();
        this.name = "Raven Idol";
        this.type = CARDTYPES.spell;
        this.text = "<b>Discover</b> a minion.";
        this.set = "LOE";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "A.J. Nazzaro";
        this.rarity = rarity.common;
    }

}

export class BRMA11_3 extends Card {
    constructor() {
        super();
        this.name = "Burning Adrenaline";
        this.type = CARDTYPES.spell;
        this.text = "Deal $2 damage to the enemy hero.";
        this.set = "BRM";
        this.manacost = 0;
    }

}

export class EX1_405 extends Card {
    constructor() {
        super();
        this.name = "Shieldbearer";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "EXPERT1";
        this.health = 4;
        this.attack = 0;
        this.manacost = 1;
        this.artist = "Carl Critchlow";
        this.flavor = "Have you seen the size of the shields in this game??  This is no easy job.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"TAUNT\"]

}

export class AT_011e extends Card {
    constructor() {
        super();
        this.name = "Light's Blessing";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Attack.";
        this.set = "TGT";
    }

    //[\"AURA\"]

}

export class AT_099 extends Card {
    constructor() {
        super();
        this.name = "Kodorider";
        this.type = CARDTYPES.minion;
        this.text = "<b>Inspire:</b> Summon a 3/5 War Kodo.";
        this.set = "TGT";
        this.health = 5;
        this.attack = 3;
        this.manacost = 6;
        this.artist = "Ben Wootten";
        this.flavor = "Someone called her a Rhinorider, and she's NOT HAPPY.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //[\"INSPIRE\"]

}

export class EX1_277 extends Card {
    constructor() {
        super();
        this.name = "Arcane Missiles";
        this.type = CARDTYPES.spell;
        this.text = "Deal $3 damage randomly split among all enemies.";
        this.set = "CORE";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Warren Mahy";
        this.flavor = "You'd think you'd be able to control your missiles a little better since you're a powerful mage and all.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 32.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //[\"ImmuneToSpellpower\"]

}

export class GAME_002 extends Card {
    constructor() {
        super();
        this.name = "Avatar of the Coin";
        this.type = CARDTYPES.minion;
        this.text = "<i>You lost the coin flip, but gained a friend.</i>";
        this.set = "CORE";
        this.health = 1;
        this.attack = 1;
        this.manacost = 0;
        this.rarity = rarity.free;
    }

}

export class LOEA10_2 extends Card {
    constructor() {
        super();
        this.name = "Mrglmrgl MRGL!";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDraw cards until you have as many in hand as your opponent.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class EX1_164a extends Card {
    constructor() {
        super();
        this.name = "Nourish";
        this.type = CARDTYPES.spell;
        this.text = "Gain 2 Mana Crystals.";
        this.set = "EXPERT1";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
    }

}

export class FP1_030e extends Card {
    constructor() {
        super();
        this.name = "Necrotic Aura";
        this.type = CARDTYPES.enchantment;
        this.text = "Your spells cost (5) more this turn.";
        this.set = "NAXX";
    }

}

export class GVG_085 extends Card {
    constructor() {
        super();
        this.name = "Annoy-o-Tron";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>\n<b>Divine Shield</b>";
        this.set = "GVG";
        this.health = 2;
        this.attack = 1;
        this.manacost = 2;
        this.artist = "Matt Dixon";
        this.race = race.mechanical;
        this.flavor = "The inventor of the Annoy-o-Tron was immediately expelled from Tinkerschool, Tinkertown, and was eventually exiled from the Eastern Kingdoms altogether.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"DIVINE_SHIELD\",\"TAUNT\"]

}

export class XXX_006 extends Card {
    constructor() {
        super();
        this.name = "Break Weapon";
        this.type = CARDTYPES.spell;
        this.text = "Destroy a hero's weapon.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

    //{\"REQ_TARGET_TO_PLAY\":0,\"REQ_HERO_TARGET\":0}

}

export class LOEA05_03 extends Card {
    constructor() {
        super();
        this.name = "Trogg Hate Spells!";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Passive Hero Power</b>\n Enemy spells cost (2) more. Swap at the start of your turn.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class EX1_399 extends Card {
    constructor() {
        super();
        this.name = "Gurubashi Berserker";
        this.type = CARDTYPES.minion;
        this.text = "Whenever this minion takes damage, gain +3 Attack.";
        this.set = "CORE";
        this.health = 7;
        this.attack = 2;
        this.manacost = 5;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "No Pain, No Gain.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Warlock Level 57.";
    }

}

export class BRM_020e extends Card {
    constructor() {
        super();
        this.name = "Draconic Power";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased stats.";
        this.set = "BRM";
    }

}

export class CS2_003 extends Card {
    constructor() {
        super();
        this.name = "Mind Vision";
        this.type = CARDTYPES.spell;
        this.text = "Put a copy of a random card in your opponent's hand into your hand.";
        this.set = "CORE";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Michael Komarck";
        this.flavor = "I see what you did there.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 32.";
        this.howToEarn = "Unlocked at Level 4.";
    }

}

export class TB_CoOpBossSpell_3 extends Card {
    constructor() {
        super();
        this.name = "Release Coolant";
        this.type = CARDTYPES.spell;
        this.text = "Freeze and deal Attack damage to all minions.\nGain 2 Attack.";
        this.set = "TB";
        this.manacost = 0;
    }

}

export class CS2_189 extends Card {
    constructor() {
        super();
        this.name = "Elven Archer";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Deal 1 damage.";
        this.set = "CORE";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
        this.artist = "Steve Prescott";
        this.flavor = "Don't bother asking her out on a date.  She'll shoot you down.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "HORDE";
        this.howToEarnGolden = "Unlocked at Druid Level 57.";
        this.targetingArrowText = "Deal 1 damage.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_NONSELF_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class BRM_003e extends Card {
    constructor() {
        super();
        this.name = "Dragon's Might";
        this.type = CARDTYPES.enchantment;
        this.text = "Costs (3) less this turn.";
        this.set = "BRM";
        this.characterClass = CHARACTERCLASS.mage;
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class AT_052 extends Card {
    constructor() {
        super();
        this.name = "Totem Golem";
        this.type = CARDTYPES.minion;
        this.text = "<b>Overload: (1)</b>";
        this.set = "TGT";
        this.health = 4;
        this.attack = 3;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Steve Prescott";
        this.race = race.totem;
        this.flavor = "What happens when you glue a buncha totems together.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"OVERLOAD\"]

}

export class TB_PickYourFate_10 extends Card {
    constructor() {
        super();
        this.name = "Battlecry Bonus";
        this.type = CARDTYPES.spell;
        this.text = "Your <b>Battlecry</b> minions have +1/+1.";
        this.set = "TB";
        this.manacost = 0;
    }

}

export class TB_PickYourFate_Windfury extends Card {
    constructor() {
        super();
        this.name = "Fate";
        this.type = CARDTYPES.enchantment;
        this.text = "This minion has <b>Windfury</b>";
        this.set = "TB";
    }

}

export class AT_038 extends Card {
    constructor() {
        super();
        this.name = "Darnassus Aspirant";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Gain an empty Mana Crystal.\n<b>Deathrattle:</b> Lose a Mana Crystal.";
        this.set = "TGT";
        this.health = 3;
        this.attack = 2;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Laurel Austin";
        this.flavor = "She loves mana crystals, she hates mana crystals.   So fickle!";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\",\"DEATHRATTLE\"]

}

export class EX1_509e extends Card {
    constructor() {
        super();
        this.name = "Blarghghl";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Attack.";
        this.set = "EXPERT1";
    }

}

export class XXX_002 extends Card {
    constructor() {
        super();
        this.name = "Damage 5";
        this.type = CARDTYPES.spell;
        this.text = "Deal 5 damage.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

    //[\"ImmuneToSpellpower\"]
    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class XXX_028 extends Card {
    constructor() {
        super();
        this.name = "Reveal Hand";
        this.type = CARDTYPES.spell;
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

}

export class CRED_35 extends Card {
    constructor() {
        super();
        this.name = "Max McCall";
        this.type = CARDTYPES.minion;
        this.text = "Your emotes have no cooldown and can't be squelched.";
        this.set = "CREDITS";
        this.health = 2;
        this.attack = 9;
        this.manacost = 4;
        this.rarity = rarity.legendary;
    }

}

export class FP1_010 extends Card {
    constructor() {
        super();
        this.name = "Maexxna";
        this.type = CARDTYPES.minion;
        this.text = "Destroy any minion damaged by this minion.";
        this.set = "NAXX";
        this.health = 8;
        this.attack = 2;
        this.manacost = 6;
        this.artist = "Howard Lyon";
        this.race = race.beast;
        this.flavor = "Maexxna gets super mad when people introduce her as \"Maxina\" or \"Maxxy\".";
        this.rarity = rarity.legendary;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after completing the Arachnid Quarter.";
        this.howToEarn = "Unlocked in The Arachnid Quarter, in the Naxxramas adventure.";
    }

    //[\"POISONOUS\"]

}

export class LOEA06_02th extends Card {
    constructor() {
        super();
        this.name = "Earthen Statue";
        this.type = CARDTYPES.minion;
        this.set = "LOE";
        this.health = 5;
        this.attack = 0;
        this.manacost = 1;
    }

}

export class TB_CoOpBossSpell_4 extends Card {
    constructor() {
        super();
        this.name = "Overclock";
        this.type = CARDTYPES.spell;
        this.text = "Gain 2 Attack.";
        this.set = "TB";
        this.manacost = 0;
    }

}

export class XXX_099 extends Card {
    constructor() {
        super();
        this.name = "AI Helper Buddy";
        this.type = CARDTYPES.minion;
        this.text = "Get the AI ready for testing.";
        this.set = "CHEAT";
        this.health = 1;
        this.attack = 1;
        this.manacost = 0;
    }

}

export class GVG_041c extends Card {
    constructor() {
        super();
        this.name = "Dark Wispers";
        this.type = CARDTYPES.enchantment;
        this.text = "+5/+5 and <b>Taunt</b>.";
        this.set = "GVG";
        this.characterClass = CHARACTERCLASS.druid;
    }

}

export class GVG_003 extends Card {
    constructor() {
        super();
        this.name = "Unstable Portal";
        this.type = CARDTYPES.spell;
        this.text = "Add a random minion to your hand. It costs (3) less.";
        this.set = "GVG";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Sean O'Daniels";
        this.flavor = "The denizens of Azeroth have no idea how much work goes into stabilizing portals.  We spend like 30% of GDP on portal upkeep.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class PRO_001a extends Card {
    constructor() {
        super();
        this.name = "I Am Murloc";
        this.type = CARDTYPES.spell;
        this.text = "Summon three, four, or five 1/1 Murlocs.";
        this.set = "PROMO";
        this.manacost = 4;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}

}

export class LOEA04_01e extends Card {
    constructor() {
        super();
        this.name = "Temple Escape Enchant";
        this.type = CARDTYPES.enchantment;
        this.set = "LOE";
    }

}

export class EX1_306 extends Card {
    constructor() {
        super();
        this.name = "Succubus";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Discard a random card.";
        this.set = "CORE";
        this.health = 3;
        this.attack = 4;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Matt Dixon";
        this.race = race.demon;
        this.flavor = "Warlocks have it pretty good.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 40.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //[\"BATTLECRY\"]

}

export class LOE_118e extends Card {
    constructor() {
        super();
        this.name = "Cursed Blade";
        this.type = CARDTYPES.enchantment;
        this.text = "Double all damage dealt to your hero.";
        this.set = "LOE";
        this.characterClass = CHARACTERCLASS.warrior;
    }

}

export class GVG_008 extends Card {
    constructor() {
        super();
        this.name = "Lightbomb";
        this.type = CARDTYPES.spell;
        this.text = "Deal damage to each minion equal to its Attack.";
        this.set = "GVG";
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Luca Zontini";
        this.flavor = "This is what happens when you allow goblins to be priests.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class EX1_128 extends Card {
    constructor() {
        super();
        this.name = "Conceal";
        this.type = CARDTYPES.spell;
        this.text = "Give your minions <b>Stealth</b> until your next turn.";
        this.set = "EXPERT1";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Steve Hui";
        this.flavor = "Rogues conceal everything but their emotions.  You can't get 'em to shut up about feelings.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class BRMA14_10 extends Card {
    constructor() {
        super();
        this.name = "Activate!";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nActivate a random Tron.";
        this.set = "BRM";
        this.manacost = 4;
    }

    //[\"BRMA14_3\",\"BRMA14_5\",\"BRMA14_7\",\"BRMA14_9\"]

}

export class BRMA12_5H extends Card {
    constructor() {
        super();
        this.name = "Brood Affliction: Blue";
        this.type = CARDTYPES.spell;
        this.text = "While this is in your hand, Chromaggus' spells cost (3) less.";
        this.set = "BRM";
        this.manacost = 3;
    }

}

export class AT_098 extends Card {
    constructor() {
        super();
        this.name = "Sideshow Spelleater";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Copy your opponent's Hero Power.";
        this.set = "TGT";
        this.health = 5;
        this.attack = 6;
        this.manacost = 6;
        this.artist = "Wayne Reynolds";
        this.flavor = "Hey!  Let me try that...";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class TU4f_007 extends Card {
    constructor() {
        super();
        this.name = "Crazy Monkey";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Throw Bananas.";
        this.set = "MISSIONS";
        this.health = 2;
        this.attack = 1;
        this.manacost = 1;
        this.rarity = rarity.common;
    }

    //[\"BATTLECRY\"]

}

export class LOE_009 extends Card {
    constructor() {
        super();
        this.name = "Obsidian Destroyer";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, summon a 1/1 Scarab with <b>Taunt</b>.";
        this.set = "LOE";
        this.health = 7;
        this.attack = 7;
        this.manacost = 7;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Anton Zemskov";
        this.flavor = "No obsidian is safe around the Obsidian Destroyer!";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in the Temple of Orsis, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in the Temple of Orsis, in the League of Explorers adventure.";
    }

}

export class BRMA14_1H extends Card {
    constructor() {
        super();
        this.name = "Omnotron Defense System";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class CS2_074e extends Card {
    constructor() {
        super();
        this.name = "Deadly Poison";
        this.type = CARDTYPES.enchantment;
        this.text = "+2 Attack.";
        this.set = "CORE";
    }

}

export class BRM_006t extends Card {
    constructor() {
        super();
        this.name = "Imp";
        this.type = CARDTYPES.minion;
        this.set = "BRM";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.warlock;
        this.race = race.demon;
    }

}

export class NEW1_008 extends Card {
    constructor() {
        super();
        this.name = "Ancient of Lore";
        this.type = CARDTYPES.minion;
        this.text = "<b>Choose One -</b> Draw 2 cards; or Restore 5 Health.";
        this.set = "EXPERT1";
        this.health = 5;
        this.attack = 5;
        this.manacost = 7;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Patrik Hjelm";
        this.flavor = "Go ahead, carve your initials in him.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //{\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class BRM_020 extends Card {
    constructor() {
        super();
        this.name = "Dragonkin Sorcerer";
        this.type = CARDTYPES.minion;
        this.text = "Whenever <b>you</b> target this minion with a spell, gain +1/+1.";
        this.set = "BRM";
        this.health = 5;
        this.attack = 3;
        this.manacost = 4;
        this.artist = "Edouard Guiton & Stuido HIVE";
        this.race = race.dragon;
        this.flavor = "Dragonkin Sorcerers be all \"I'm a wizard\" and everyone else be all \"daaaaang\".";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating Nefarian in the Hidden Laboratory.";
        this.howToEarn = "Unlocked in Hidden Laboratory, in the Blackrock Mountain adventure.";
    }

}

export class FP1_005e extends Card {
    constructor() {
        super();
        this.name = "Consume";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased stats.";
        this.set = "NAXX";
    }

}

export class AT_041e extends Card {
    constructor() {
        super();
        this.name = "Call of the Wild";
        this.type = CARDTYPES.enchantment;
        this.text = "Cost reduced.";
        this.set = "TGT";
    }

}

export class BRMA06_3H extends Card {
    constructor() {
        super();
        this.name = "Ragnaros the Firelord";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class LOEA04_13bt extends Card {
    constructor() {
        super();
        this.name = "Orsis Guard";
        this.type = CARDTYPES.minion;
        this.text = "<b>Divine Shield</b>";
        this.set = "LOE";
        this.health = 5;
        this.attack = 7;
        this.manacost = 4;
    }

    //[\"DIVINE_SHIELD\"]

}

export class LOEA05_03h extends Card {
    constructor() {
        super();
        this.name = "Trogg Hate Spells!";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Passive Hero Power</b>\n Enemy spells cost (11). Swap at the start of your turn.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class BRMA04_4 extends Card {
    constructor() {
        super();
        this.name = "Rock Out";
        this.type = CARDTYPES.spell;
        this.text = "Summon 3 Firesworn. <b>Overload:</b> (2)";
        this.set = "BRM";
        this.manacost = 3;
    }

    //[\"OVERLOAD\"]

}

export class BRMA13_4 extends Card {
    constructor() {
        super();
        this.name = "Wild Magic";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nPut a random spell from your opponent's class into your hand.";
        this.set = "BRM";
        this.manacost = 1;
    }

}

export class NAX6_04 extends Card {
    constructor() {
        super();
        this.name = "Sporeburst";
        this.type = CARDTYPES.spell;
        this.text = "Deal $1 damage to all enemy minions. Summon a Spore.";
        this.set = "NAXX";
        this.manacost = 1;
    }

}

export class AT_061e extends Card {
    constructor() {
        super();
        this.name = "Lock and Load";
        this.type = CARDTYPES.enchantment;
        this.set = "TGT";
        this.characterClass = CHARACTERCLASS.hunter;
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class BRMA01_4t extends Card {
    constructor() {
        super();
        this.name = "Guzzler";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "BRM";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
    }

    //[\"TAUNT\"]

}

export class EX1_317t extends Card {
    constructor() {
        super();
        this.name = "Worthless Imp";
        this.type = CARDTYPES.minion;
        this.text = "<i>You are out of demons! At least there are always imps...</i>";
        this.set = "EXPERT1";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.warlock;
        this.race = race.demon;
        this.rarity = rarity.common;
    }

}

export class LOEA01_11he extends Card {
    constructor() {
        super();
        this.name = "Heroic Mode";
        this.type = CARDTYPES.enchantment;
        this.text = "+3/+3 if Phaerix controls the Rod.";
        this.set = "LOE";
    }

}

export class EX1_355e extends Card {
    constructor() {
        super();
        this.name = "Blessed Champion";
        this.type = CARDTYPES.enchantment;
        this.text = "This minion's Attack has been doubled.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.paladin;
    }

}

export class AT_019 extends Card {
    constructor() {
        super();
        this.name = "Dreadsteed";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Summon a Dreadsteed.";
        this.set = "TGT";
        this.health = 1;
        this.attack = 1;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Alex Horley Orlandelli";
        this.race = race.demon;
        this.flavor = "Crescendo himself summoned this steed, riding it to victory in the Grand Tournament.  Wherever he rides, an army of riders ride behind him, supporting the legendary champion.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //[\"DEATHRATTLE\"]

}

export class CS2_080 extends Card {
    constructor() {
        super();
        this.name = "Assassin's Blade";
        this.type = CARDTYPES.weapon;
        this.set = "CORE";
        this.attack = 3;
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Brian Huang";
        this.flavor = "Guaranteed to have been owned by a real assassin.   Certificate of authenticity included.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 32.";
        this.howToEarn = "Unlocked at Level 2.";
        this.durability = "4";
    }

}

export class CS2_127 extends Card {
    constructor() {
        super();
        this.name = "Silverback Patriarch";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "CORE";
        this.health = 4;
        this.attack = 1;
        this.manacost = 3;
        this.artist = "Daren Bader";
        this.race = race.beast;
        this.flavor = "He likes to act like he's in charge, but the silverback matriarch actually runs things.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "HORDE";
        this.howToEarnGolden = "Unlocked at Warrior Level 53.";
    }

    //[\"TAUNT\"]

}

export class LOEA02_10c extends Card {
    constructor() {
        super();
        this.name = "Misha";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "LOE";
        this.health = 4;
        this.attack = 4;
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.hunter;
        this.race = race.beast;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}

}

export class DS1_070 extends Card {
    constructor() {
        super();
        this.name = "Houndmaster";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Give a friendly Beast +2/+2 and <b>Taunt</b>.";
        this.set = "CORE";
        this.health = 3;
        this.attack = 4;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Dan Brereton";
        this.flavor = "\"Who let the dogs out?\" he asks.  It's rhetorical.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 28.";
        this.howToEarn = "Unlocked at Level 1.";
        this.targetingArrowText = "Give a Beast +2/+2 and Taunt.";
        this.textInPlay = "Beastmaster";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_TARGET_WITH_RACE\":20,\"REQ_FRIENDLY_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class GVG_019 extends Card {
    constructor() {
        super();
        this.name = "Demonheart";
        this.type = CARDTYPES.spell;
        this.text = "Deal $5 damage to a minion.  If it's a friendly Demon, give it +5/+5 instead.";
        this.set = "GVG";
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Kerem Beyit";
        this.flavor = "Virtually every member of the pro demon lobby is a warlock. Weird.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class EX1_tk34 extends Card {
    constructor() {
        super();
        this.name = "Infernal";
        this.type = CARDTYPES.minion;
        this.set = "EXPERT1";
        this.health = 6;
        this.attack = 6;
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.warlock;
        this.race = race.demon;
        this.rarity = rarity.common;
    }

}

export class EX1_043 extends Card {
    constructor() {
        super();
        this.name = "Twilight Drake";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Gain +1 Health for each card in your hand.";
        this.set = "EXPERT1";
        this.health = 1;
        this.attack = 4;
        this.manacost = 4;
        this.artist = "Jaemin Kim";
        this.race = race.dragon;
        this.flavor = "Twilight drakes feed on Mystical Energy.  And Tacos.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class TB_GiftExchange_Enchantment extends Card {
    constructor() {
        super();
        this.name = "Cheap Gift";
        this.type = CARDTYPES.enchantment;
        this.text = "This card's cost is reduced.";
        this.set = "TB";
    }

}

export class NAX14_04 extends Card {
    constructor() {
        super();
        this.name = "Pure Cold";
        this.type = CARDTYPES.spell;
        this.text = "Deal $8 damage to the enemy hero, and <b>Freeze</b> it.";
        this.set = "NAXX";
        this.manacost = 5;
    }

    //[\"FREEZE\"]

}

export class TU4e_001 extends Card {
    constructor() {
        super();
        this.name = "Illidan Stormrage";
        this.type = CARDTYPES.hero;
        this.set = "MISSIONS";
        this.health = 30;
        this.characterClass = CHARACTERCLASS.hunter;
    }

}

export class AT_029e extends Card {
    constructor() {
        super();
        this.name = "Extra Stabby";
        this.type = CARDTYPES.enchantment;
        this.text = "+1 Attack";
        this.set = "TGT";
    }

}

export class EX1_247 extends Card {
    constructor() {
        super();
        this.name = "Stormforged Axe";
        this.type = CARDTYPES.weapon;
        this.text = "<b>Overload:</b> (1)";
        this.set = "EXPERT1";
        this.attack = 2;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Nate Bowden";
        this.flavor = "Yo, that's a nice axe.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.durability = "3";
    }

    //[\"OVERLOAD\"]

}

export class EX1_295o extends Card {
    constructor() {
        super();
        this.name = "Ice Block";
        this.type = CARDTYPES.enchantment;
        this.text = "Your hero is <b>Immune</b> this turn.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.mage;
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class DS1_070o extends Card {
    constructor() {
        super();
        this.name = "Master's Presence";
        this.type = CARDTYPES.enchantment;
        this.text = "+2/+2 and <b>Taunt</b>.";
        this.set = "CORE";
        this.characterClass = CHARACTERCLASS.hunter;
    }

}

export class CS2_104 extends Card {
    constructor() {
        super();
        this.name = "Rampage";
        this.type = CARDTYPES.spell;
        this.text = "Give a damaged minion +3/+3.";
        this.set = "EXPERT1";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Jonboy Meyers";
        this.flavor = "Minion get ANGRY.   Minion SMASH!";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0,\"REQ_DAMAGED_TARGET\":0}

}

export class TU4f_005 extends Card {
    constructor() {
        super();
        this.name = "Brewmaster";
        this.type = CARDTYPES.minion;
        this.set = "MISSIONS";
        this.health = 4;
        this.attack = 4;
        this.manacost = 4;
        this.rarity = rarity.common;
    }

}

export class AT_039 extends Card {
    constructor() {
        super();
        this.name = "Savage Combatant";
        this.type = CARDTYPES.minion;
        this.text = "<b>Inspire:</b> Give your hero\n+2 Attack this turn.";
        this.set = "TGT";
        this.health = 4;
        this.attack = 5;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Alex Pascenko";
        this.race = race.beast;
        this.flavor = "Maybe if you whistle a tune it will soothe him.  Yeah...  Try that.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"INSPIRE\"]

}

export class LOEA16_2H extends Card {
    constructor() {
        super();
        this.name = "Staff of Origination";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Passive Hero Power</b>\nYour hero is <b>Immune</b>.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class NAX15_04H extends Card {
    constructor() {
        super();
        this.name = "Chains";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nTake control of a random enemy minion.";
        this.set = "NAXX";
        this.manacost = 8;
    }

}

export class TB_PickYourFate_4_EnchMinion extends Card {
    constructor() {
        super();
        this.name = "Fate";
        this.type = CARDTYPES.enchantment;
        this.text = "<b>Deathrattle</b>: Draw a card.";
        this.set = "TB";
    }

    //[\"DEATHRATTLE\"]

}

export class LOEA09_3c extends Card {
    constructor() {
        super();
        this.name = "Getting Hungry";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon a 2/1 Hungry Naga.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class CS2_017o extends Card {
    constructor() {
        super();
        this.name = "Claws";
        this.type = CARDTYPES.enchantment;
        this.text = "Your hero has +1 Attack this turn.";
        this.set = "CORE";
        this.characterClass = CHARACTERCLASS.druid;
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class BRM_004t extends Card {
    constructor() {
        super();
        this.name = "Whelp";
        this.type = CARDTYPES.minion;
        this.set = "BRM";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
    }

}

export class BRMA12_3 extends Card {
    constructor() {
        super();
        this.name = "Brood Affliction: Red";
        this.type = CARDTYPES.spell;
        this.text = "While this is in your hand, take 1 damage at the start of your turn.";
        this.set = "BRM";
        this.manacost = 1;
    }

    //[\"ImmuneToSpellpower\"]

}

export class EX1_363e extends Card {
    constructor() {
        super();
        this.name = "Blessing of Wisdom";
        this.type = CARDTYPES.enchantment;
        this.text = "When this minion attacks, the player who blessed it draws a card.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.paladin;
    }

}

export class BRM_030 extends Card {
    constructor() {
        super();
        this.name = "Nefarian";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Add 2 random spells to your hand <i>(from your opponent's class)</i>.";
        this.set = "BRM";
        this.health = 8;
        this.attack = 8;
        this.manacost = 9;
        this.artist = "Ruan Jia";
        this.race = race.dragon;
        this.flavor = "They call him \"Blackwing\" because he's a black dragon...... and he's got wings.";
        this.rarity = rarity.legendary;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after completing the Hidden Laboratory.";
        this.howToEarn = "Unlocked in Hidden Laboratory, in the Blackrock Mountain adventure.";
    }

    //[\"BATTLECRY\"]

}

export class TU4c_001 extends Card {
    constructor() {
        super();
        this.name = "King Mukla";
        this.type = CARDTYPES.hero;
        this.set = "MISSIONS";
        this.health = 26;
        this.rarity = rarity.common;
    }

}

export class LOEA10_5H extends Card {
    constructor() {
        super();
        this.name = "Mrgl Mrgl Nyah Nyah";
        this.type = CARDTYPES.spell;
        this.text = "Summon 5 Murlocs that died this game.";
        this.set = "LOE";
        this.manacost = 3;
        this.rarity = rarity.common;
    }

}

export class BRMA14_12 extends Card {
    constructor() {
        super();
        this.name = "Magmaw";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "BRM";
        this.health = 2;
        this.attack = 10;
        this.manacost = 5;
        this.rarity = rarity.legendary;
    }

    //[\"TAUNT\"]

}

export class EX1_590 extends Card {
    constructor() {
        super();
        this.name = "Blood Knight";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> All minions lose <b>Divine Shield</b>. Gain +3/+3 for each Shield lost.";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 3;
        this.manacost = 3;
        this.artist = "Trent Kaniuga";
        this.flavor = "The Blood Knights get their holy powers from the Sunwell, which you should NOT bathe in.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class BRMA08_1 extends Card {
    constructor() {
        super();
        this.name = "General Drakkisath";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 50;
    }

}

export class EX1_243 extends Card {
    constructor() {
        super();
        this.name = "Dust Devil";
        this.type = CARDTYPES.minion;
        this.text = "<b>Windfury</b>. <b>Overload:</b> (2)";
        this.set = "EXPERT1";
        this.health = 1;
        this.attack = 3;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Raymond Swanland";
        this.flavor = "Westfall is full of dust devils. And buzzards. And crazed golems. And pirates. Why does anyone live here?";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"OVERLOAD\",\"WINDFURY\"]

}

export class LOEA01_12h extends Card {
    constructor() {
        super();
        this.name = "Tol'vir Hoplite";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Deal 5 damage to both heroes.";
        this.set = "LOE";
        this.health = 5;
        this.attack = 5;
        this.manacost = 3;
    }

    //[\"DEATHRATTLE\"]

}

export class LOEA07_18 extends Card {
    constructor() {
        super();
        this.name = "Dynamite";
        this.type = CARDTYPES.spell;
        this.text = "Deal $10 damage.";
        this.set = "LOE";
        this.manacost = 1;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class GVG_063 extends Card {
    constructor() {
        super();
        this.name = "Bolvar Fordragon";
        this.type = CARDTYPES.minion;
        this.text = "Whenever a friendly minion dies while this is in your hand, gain +1 Attack.";
        this.set = "GVG";
        this.health = 7;
        this.attack = 1;
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Tooth";
        this.flavor = "Spoiler alert: Bolvar gets melted and then sits on an ice throne and everyone forgets about him.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

}

export class CS2_234 extends Card {
    constructor() {
        super();
        this.name = "Shadow Word: Pain";
        this.type = CARDTYPES.spell;
        this.text = "Destroy a minion with 3 or less Attack.";
        this.set = "CORE";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Raymond Swanland";
        this.flavor = "A step up from a spell cast by many beginning acolytes: \"Shadow Word: Annoy\".";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 36.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0,\"REQ_TARGET_MAX_ATTACK\":3}

}

export class GVG_023a extends Card {
    constructor() {
        super();
        this.name = "Extra Sharp";
        this.type = CARDTYPES.enchantment;
        this.text = "+1 Attack.";
        this.set = "GVG";
    }

}

export class AT_132_SHAMANd extends Card {
    constructor() {
        super();
        this.name = "Wrath of Air Totem";
        this.type = CARDTYPES.minion;
        this.text = "<b>Spell Damage +1</b>";
        this.set = "TGT";
        this.health = 2;
        this.attack = 0;
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.shaman;
    }

}

export class NEW1_038o extends Card {
    constructor() {
        super();
        this.name = "Growth";
        this.type = CARDTYPES.enchantment;
        this.text = "Gruul is growing...";
        this.set = "EXPERT1";
    }

}

export class AT_077 extends Card {
    constructor() {
        super();
        this.name = "Argent Lance";
        this.type = CARDTYPES.weapon;
        this.text = "<b>Battlecry:</b> Reveal a minion in each deck. If yours costs more, +1 Durability.";
        this.set = "TGT";
        this.attack = 2;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Joe Wilson";
        this.flavor = "The stripes make it look like a candy cane, but we recommend against licking it.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.durability = "2";
    }

    //[\"BATTLECRY\"]

}

export class DS1_175o extends Card {
    constructor() {
        super();
        this.name = "Furious Howl";
        this.type = CARDTYPES.enchantment;
        this.text = "This Beast has +1 Attack from Timber Wolf.";
        this.set = "CORE";
        this.characterClass = CHARACTERCLASS.hunter;
    }

}

export class GVG_080 extends Card {
    constructor() {
        super();
        this.name = "Druid of the Fang";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> If you have a Beast, transform this minion into a 7/7.";
        this.set = "GVG";
        this.health = 4;
        this.attack = 4;
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Brandon Kitkouski";
        this.flavor = "The Druids of the Fang live in the Wailing Caverns. They wear cool snake shirts and tell snake jokes and say \"bro\" a lot.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class CRED_25 extends Card {
    constructor() {
        super();
        this.name = "Elizabeth Cho";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Add Echo of Medivh and Echoing Ooze to your hand. ";
        this.set = "CREDITS";
        this.health = 4;
        this.attack = 2;
        this.manacost = 4;
        this.rarity = rarity.legendary;
    }

}

export class XXX_017 extends Card {
    constructor() {
        super();
        this.name = "Draw 3 Cards";
        this.type = CARDTYPES.spell;
        this.text = "Draw 3 cards.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

}

export class EX1_080 extends Card {
    constructor() {
        super();
        this.name = "Secretkeeper";
        this.type = CARDTYPES.minion;
        this.text = "Whenever a <b>Secret</b> is played, gain +1/+1.";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 1;
        this.manacost = 1;
        this.artist = "Gonzalo Ordonez";
        this.flavor = "She promises not to tell anyone about that thing you did last night with that one person.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.faction = "ALLIANCE";
    }

}

export class Mekka2 extends Card {
    constructor() {
        super();
        this.name = "Repair Bot";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, restore 6 Health to a damaged character.";
        this.set = "PROMO";
        this.health = 3;
        this.attack = 0;
        this.manacost = 1;
        this.race = race.mechanical;
        this.rarity = rarity.common;
        this.faction = "ALLIANCE";
    }

}

export class CRED_28 extends Card {
    constructor() {
        super();
        this.name = "He-Rim Woo";
        this.type = CARDTYPES.minion;
        this.text = "<b>Choose One</b> - Punch an arm; Offer a treat; or Give a big hug.";
        this.set = "CREDITS";
        this.health = 3;
        this.attack = 4;
        this.manacost = 4;
        this.rarity = rarity.legendary;
    }

}

export class AT_014 extends Card {
    constructor() {
        super();
        this.name = "Shadowfiend";
        this.type = CARDTYPES.minion;
        this.text = "Whenever you draw a card, reduce its Cost by (1).";
        this.set = "TGT";
        this.health = 3;
        this.attack = 3;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Warren Mahy";
        this.flavor = "Hopes to be promoted to \"Shadowfriend\" someday.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class NAX5_01H extends Card {
    constructor() {
        super();
        this.name = "Heigan the Unclean";
        this.type = CARDTYPES.hero;
        this.set = "NAXX";
        this.health = 45;
        this.characterClass = CHARACTERCLASS.warlock;
    }

}

export class LOE_016 extends Card {
    constructor() {
        super();
        this.name = "Rumbling Elemental";
        this.type = CARDTYPES.minion;
        this.text = "After you play a <b>Battlecry</b> minion, deal 2 damage to a random enemy.";
        this.set = "LOE";
        this.health = 6;
        this.attack = 2;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Cole Eastburn";
        this.flavor = "He's a very hungry elemental.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in the Temple of Orsis, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in the Temple of Orsis, in the League of Explorers adventure.";
    }

}

export class TU4f_002 extends Card {
    constructor() {
        super();
        this.name = "Pandaren Scout";
        this.type = CARDTYPES.minion;
        this.set = "MISSIONS";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
        this.rarity = rarity.common;
    }

}

export class LOEA16_3 extends Card {
    constructor() {
        super();
        this.name = "Lantern of Power";
        this.type = CARDTYPES.spell;
        this.text = "Give a minion +10/+10.";
        this.set = "LOE";
        this.manacost = 10;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class LOE_019e extends Card {
    constructor() {
        super();
        this.name = "Unearthed Raptor";
        this.type = CARDTYPES.enchantment;
        this.text = "Copied <b>Deathrattle</b> from CARD_NAME.";
        this.set = "LOE";
        this.characterClass = CHARACTERCLASS.rogue;
    }

}

export class EX1_241 extends Card {
    constructor() {
        super();
        this.name = "Lava Burst";
        this.type = CARDTYPES.spell;
        this.text = "Deal $5 damage. <b>Overload:</b> (2)";
        this.set = "EXPERT1";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Dan Scott";
        this.flavor = "It's like an ocean of liquid magma in your mouth!";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"OVERLOAD\"]
    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class TB_010 extends Card {
    constructor() {
        super();
        this.name = "Deckbuilding Enchant";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
    }

}

export class BRMA14_7H extends Card {
    constructor() {
        super();
        this.name = "Electron";
        this.type = CARDTYPES.minion;
        this.text = "All spells cost (3) less.";
        this.set = "BRM";
        this.health = 6;
        this.attack = 6;
        this.manacost = 3;
        this.race = race.mechanical;
        this.rarity = rarity.legendary;
    }

}

export class CRED_45 extends Card {
    constructor() {
        super();
        this.name = "Jonas Laster";
        this.type = CARDTYPES.minion;
        this.text = "Whenever a <b>Silenced</b> minion dies, gain +1/+1.";
        this.set = "CREDITS";
        this.health = 6;
        this.attack = 6;
        this.manacost = 6;
        this.rarity = rarity.legendary;
    }

}

export class GVG_068a extends Card {
    constructor() {
        super();
        this.name = "Metabolized Magic";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Attack.";
        this.set = "GVG";
    }

    //[\"AURA\"]

}

export class NAX1_05 extends Card {
    constructor() {
        super();
        this.name = "Locust Swarm";
        this.type = CARDTYPES.spell;
        this.text = "Deal $3 damage to all enemy minions. Restore #3 Health to your hero.";
        this.set = "NAXX";
        this.manacost = 7;
    }

}

export class GVG_004 extends Card {
    constructor() {
        super();
        this.name = "Goblin Blastmage";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> If you have a Mech, deal 4 damage randomly split among all enemies.";
        this.set = "GVG";
        this.health = 4;
        this.attack = 5;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Glenn Rane";
        this.flavor = "If you can't find a bomb to throw, just pick up any goblin invention and throw that.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class NAX4_03 extends Card {
    constructor() {
        super();
        this.name = "Skeleton";
        this.type = CARDTYPES.minion;
        this.set = "NAXX";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
    }

}

export class BRMA06_3 extends Card {
    constructor() {
        super();
        this.name = "Ragnaros the Firelord";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 8;
    }

}

export class LOEA04_30 extends Card {
    constructor() {
        super();
        this.name = "The Darkness";
        this.type = CARDTYPES.spell;
        this.text = "<b>Take the Shortcut?</b>";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class GVG_025 extends Card {
    constructor() {
        super();
        this.name = "One-eyed Cheat";
        this.type = CARDTYPES.minion;
        this.text = "Whenever you summon a Pirate, gain <b>Stealth</b>.";
        this.set = "GVG";
        this.health = 1;
        this.attack = 4;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Danny Beck";
        this.race = race.pirate;
        this.flavor = "When pirates say there is no \"Eye\" in \"team,\" they are very literal about it.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class TBUD_1 extends Card {
    constructor() {
        super();
        this.name = "TBUD Summon Early Minion";
        this.type = CARDTYPES.enchantment;
        this.text = "Each turn, if you have less health then a your opponent, summon a free minion";
        this.set = "TB";
    }

    //[\"CS1_042\",\"CS2_171\"]

}

export class EX1_409e extends Card {
    constructor() {
        super();
        this.name = "Upgraded";
        this.type = CARDTYPES.enchantment;
        this.text = "+1 Attack and +1 Durability.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.warrior;
    }

}

export class BRMA14_10H extends Card {
    constructor() {
        super();
        this.name = "Activate!";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nActivate a random Tron.";
        this.set = "BRM";
        this.manacost = 2;
    }

    //[\"BRMA14_3\",\"BRMA14_5H\",\"BRMA14_7H\",\"BRMA14_9H\"]

}

export class TB_PickYourFate_8_Ench extends Card {
    constructor() {
        super();
        this.name = "Fate 8 Get Armor";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
    }

}

export class TU4e_003 extends Card {
    constructor() {
        super();
        this.name = "Naga Myrmidon";
        this.type = CARDTYPES.minion;
        this.text = "<b></b> ";
        this.set = "MISSIONS";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
        this.rarity = rarity.common;
    }

}

export class TB_BlingBrawl_Hero1e extends Card {
    constructor() {
        super();
        this.name = "Sharpened";
        this.type = CARDTYPES.enchantment;
        this.text = "+1 Attack";
        this.set = "TB";
        this.characterClass = CHARACTERCLASS.rogue;
    }

}

export class TB_RandHero2_001 extends Card {
    constructor() {
        super();
        this.name = "TB_EnchWhosTheBossNow";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
    }

    //[\"BRMA07_2_2_TB\",\"BRMA01_2H_2_TB\",\"BRMA17_5_TB\",\"NAX12_02H_2_TB\",\"BRMA02_2_2_TB\",\"NAX11_02H_2_TB\",\"BRMA13_4_2_TB\",\"BRMA09_2_TB\",\"BRMA14_10H_TB\",\"BRMA06_2H_TB\",\"NAX3_02_TB\",\"NAX8_02H_TB\"]

}

export class FP1_001 extends Card {
    constructor() {
        super();
        this.name = "Zombie Chow";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Restore 5 Health to the enemy hero.";
        this.set = "NAXX";
        this.health = 3;
        this.attack = 2;
        this.manacost = 1;
        this.artist = "E. M. Gist";
        this.flavor = "Zombie.  It's what's for dinner.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating Gluth in the Construct Quarter.";
        this.howToEarn = "Unlocked in The Construct Quarter, in the Naxxramas adventure.";
    }

    //[\"DEATHRATTLE\"]

}

export class LOEA16_4 extends Card {
    constructor() {
        super();
        this.name = "Timepiece of Horror";
        this.type = CARDTYPES.spell;
        this.text = "Deal $10 damage randomly split among all enemies.";
        this.set = "LOE";
        this.manacost = 10;
    }

    //[\"ImmuneToSpellpower\"]

}

export class EX1_587 extends Card {
    constructor() {
        super();
        this.name = "Windspeaker";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Give a friendly minion <b>Windfury</b>.";
        this.set = "CORE";
        this.health = 3;
        this.attack = 3;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Vance Kovacs";
        this.flavor = "Is there anything worse than a Windspeaker with halitosis?";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 45.";
        this.howToEarn = "Unlocked at Level 8.";
        this.targetingArrowText = "Give <b>Windfury</b>.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_FRIENDLY_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class CS2_057 extends Card {
    constructor() {
        super();
        this.name = "Shadow Bolt";
        this.type = CARDTYPES.spell;
        this.text = "Deal $4 damage to a minion.";
        this.set = "CORE";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Dave Allsop";
        this.flavor = "Itâ€™s a Bolt.   Its made out of Shadow.   What more do you need to know!";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 47.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class CRED_39 extends Card {
    constructor() {
        super();
        this.name = "Ryan Chew";
        this.type = CARDTYPES.minion;
        this.text = "<b>Chews One</b> - Sing karaoke; or Leave on time and tell everyone about it.";
        this.set = "CREDITS";
        this.health = 3;
        this.attack = 2;
        this.manacost = 2;
        this.rarity = rarity.legendary;
    }

}

export class AT_132_PALADIN extends Card {
    constructor() {
        super();
        this.name = "The Silver Hand";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon two 1/1 Recruits.";
        this.set = "TGT";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.paladin;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}

}

export class CS2_091 extends Card {
    constructor() {
        super();
        this.name = "Light's Justice";
        this.type = CARDTYPES.weapon;
        this.set = "CORE";
        this.attack = 1;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Glenn Rane";
        this.flavor = "Prince Malchezaar was a collector of rare weapons. He'd animate them and have them dance for him.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 36.";
        this.howToEarn = "Unlocked at Level 1.";
        this.durability = "4";
    }

}

export class AT_028e extends Card {
    constructor() {
        super();
        this.name = "Chi Lance";
        this.type = CARDTYPES.enchantment;
        this.text = "+3 Attack.";
        this.set = "TGT";
    }

}

export class XXX_026 extends Card {
    constructor() {
        super();
        this.name = "Enable Emotes";
        this.type = CARDTYPES.spell;
        this.text = "Enable emotes for your VS.AI game. (not in tutorials, though)";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

}

export class TB_BlingBrawl_Blade2e extends Card {
    constructor() {
        super();
        this.name = "Blingtron's Blade HERO";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
        this.rarity = rarity.unknown;
    }

}

export class BRMA07_2_2c_TB extends Card {
    constructor() {
        super();
        this.name = "ME SMASH";
        this.type = CARDTYPES.spell;
        this.text = "Destroy a random enemy minion.";
        this.set = "TB";
        this.manacost = 0;
    }

}

export class CRED_44 extends Card {
    constructor() {
        super();
        this.name = "Walter Kong";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Deal 1 damage to each of 2 strategic targets.";
        this.set = "CREDITS";
        this.health = 2;
        this.attack = 3;
        this.manacost = 4;
        this.rarity = rarity.legendary;
    }

}

export class EX1_622 extends Card {
    constructor() {
        super();
        this.name = "Shadow Word: Death";
        this.type = CARDTYPES.spell;
        this.text = "Destroy a minion with an Attack of 5 or more.";
        this.set = "CORE";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Raymond Swanland";
        this.flavor = "If you miss, it leaves a lightning-bolt-shaped scar on your target.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 43.";
        this.howToEarn = "Unlocked at Level 8.";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_MIN_ATTACK\":5,\"REQ_TARGET_TO_PLAY\":0}

}

export class NAX11_02H_2_TB extends Card {
    constructor() {
        super();
        this.name = "Poison Cloud";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDeal 1 damage to all enemy minions. If any die, summon a slime.";
        this.set = "TB";
        this.manacost = 2;
    }

}

export class FP1_023e extends Card {
    constructor() {
        super();
        this.name = "Power of the Ziggurat";
        this.type = CARDTYPES.enchantment;
        this.text = "+3 Health.";
        this.set = "NAXX";
        this.characterClass = CHARACTERCLASS.priest;
    }

}

export class GVG_011 extends Card {
    constructor() {
        super();
        this.name = "Shrinkmeister";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Give a minion -2 Attack this turn.";
        this.set = "GVG";
        this.health = 2;
        this.attack = 3;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Jim Nelson";
        this.flavor = "After the debacle of the Gnomish World Enlarger, gnomes are wary of size-changing inventions.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.targetingArrowText = "Give -2 Attack this turn.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class BRMA10_5H extends Card {
    constructor() {
        super();
        this.name = "Chromatic Drake";
        this.type = CARDTYPES.minion;
        this.set = "BRM";
        this.health = 7;
        this.attack = 7;
        this.manacost = 4;
        this.race = race.dragon;
    }

}

export class LOEA09_3a extends Card {
    constructor() {
        super();
        this.name = "Famished";
        this.type = CARDTYPES.enchantment;
        this.text = "Quite Hungry.";
        this.set = "LOE";
    }

}

export class CS2_118 extends Card {
    constructor() {
        super();
        this.name = "Magma Rager";
        this.type = CARDTYPES.minion;
        this.set = "CORE";
        this.health = 1;
        this.attack = 5;
        this.manacost = 3;
        this.artist = "Matt Gaser";
        this.flavor = "He likes to think he is powerful, but pretty much anyone can solo Molten Core now.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Shaman Level 51.";
    }

}

export class XXX_019 extends Card {
    constructor() {
        super();
        this.name = "Molasses";
        this.type = CARDTYPES.spell;
        this.text = "You can take as long as you want on your turn.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

}

export class EX1_506 extends Card {
    constructor() {
        super();
        this.name = "Murloc Tidehunter";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Summon a 1/1 Murloc Scout.";
        this.set = "CORE";
        this.health = 1;
        this.attack = 2;
        this.manacost = 2;
        this.artist = "Dan Scott";
        this.race = race.murloc;
        this.flavor = "\"Death will rise, from the tides!\"";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Rogue Level 53.";
    }

    //[\"BATTLECRY\"]

}

export class GVG_041a extends Card {
    constructor() {
        super();
        this.name = "Dark Wispers";
        this.type = CARDTYPES.spell;
        this.text = "+5/+5 and <b>Taunt</b>.";
        this.set = "GVG";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class HERO_06 extends Card {
    constructor() {
        super();
        this.name = "Malfurion Stormrage";
        this.type = CARDTYPES.hero;
        this.set = "CORE";
        this.health = 30;
        this.characterClass = CHARACTERCLASS.druid;
        this.rarity = rarity.free;
        this.collectible = true;
    }

}

export class CS2_050 extends Card {
    constructor() {
        super();
        this.name = "Searing Totem";
        this.type = CARDTYPES.minion;
        this.set = "CORE";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.shaman;
        this.race = race.totem;
        this.rarity = rarity.free;
    }

}

export class NAX12_04 extends Card {
    constructor() {
        super();
        this.name = "Enrage";
        this.type = CARDTYPES.spell;
        this.text = "Give your hero +6 Attack this turn.";
        this.set = "NAXX";
        this.manacost = 3;
    }

}

export class CS2_011o extends Card {
    constructor() {
        super();
        this.name = "Savage Roar";
        this.type = CARDTYPES.enchantment;
        this.text = "+2 Attack this turn.";
        this.set = "CORE";
        this.characterClass = CHARACTERCLASS.druid;
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class AT_109e extends Card {
    constructor() {
        super();
        this.name = "Inspired";
        this.type = CARDTYPES.enchantment;
        this.text = "Can attack this turn.";
        this.set = "TGT";
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class EX1_573a extends Card {
    constructor() {
        super();
        this.name = "Demigod's Favor";
        this.type = CARDTYPES.spell;
        this.text = "Give your other minions +2/+2.";
        this.set = "EXPERT1";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
    }

}

export class GVG_054 extends Card {
    constructor() {
        super();
        this.name = "Ogre Warmaul";
        this.type = CARDTYPES.weapon;
        this.text = "50% chance to attack the wrong enemy.";
        this.set = "GVG";
        this.attack = 4;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Richard Wright";
        this.flavor = "Simple, misguided, and incredibly dangerous. You know, like most things ogre.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.durability = "2";
    }

}

export class CS2_011 extends Card {
    constructor() {
        super();
        this.name = "Savage Roar";
        this.type = CARDTYPES.spell;
        this.text = "Give your characters +2 Attack this turn.";
        this.set = "CORE";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Grace Liu";
        this.flavor = "What do they roar? Nobody can quite tell, but it sounds like \"Elephant Macho Breeze\".  It's probably not that, though.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 43.";
        this.howToEarn = "Unlocked at Level 4.";
    }

}

export class LOEA16_18 extends Card {
    constructor() {
        super();
        this.name = "Zinaar";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, gain a wish.";
        this.set = "LOE";
        this.health = 5;
        this.attack = 5;
        this.manacost = 5;
    }

}

export class TU4b_001 extends Card {
    constructor() {
        super();
        this.name = "Millhouse Manastorm";
        this.type = CARDTYPES.hero;
        this.set = "MISSIONS";
        this.health = 20;
        this.characterClass = CHARACTERCLASS.mage;
        this.rarity = rarity.common;
    }

}

export class AT_132_ROGUEt extends Card {
    constructor() {
        super();
        this.name = "Poisoned Dagger";
        this.type = CARDTYPES.weapon;
        this.set = "TGT";
        this.attack = 2;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.rogue;
        this.durability = "2";
    }

}

export class NAX7_05 extends Card {
    constructor() {
        super();
        this.name = "Mind Control Crystal";
        this.type = CARDTYPES.spell;
        this.text = "Activate the Crystal to control the Understudies!";
        this.set = "NAXX";
        this.manacost = 1;
    }

}

export class EX1_399e extends Card {
    constructor() {
        super();
        this.name = "Berserking";
        this.type = CARDTYPES.enchantment;
        this.text = "This minion has increased Attack.";
        this.set = "CORE";
    }

}

export class EX1_246 extends Card {
    constructor() {
        super();
        this.name = "Hex";
        this.type = CARDTYPES.spell;
        this.text = "Transform a minion into a 0/1 Frog with <b>Taunt</b>.";
        this.set = "CORE";
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Steve Hui";
        this.flavor = "If you Hex a Murloc... it really isn't much of a change, is it?";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 47.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class TB_PickYourFate_9_Ench extends Card {
    constructor() {
        super();
        this.name = "Fate 9 Ench. Deathrattle bonus";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
    }

}

export class CS2_boar extends Card {
    constructor() {
        super();
        this.name = "Boar";
        this.type = CARDTYPES.minion;
        this.set = "CORE";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
        this.race = race.beast;
        this.rarity = rarity.common;
    }

}

export class BRMA14_6 extends Card {
    constructor() {
        super();
        this.name = "Activate Electron";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nActivate Electron!";
        this.set = "BRM";
        this.manacost = 6;
    }

}

export class LOEA16_24H extends Card {
    constructor() {
        super();
        this.name = "Giantfin";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, draw 2 cards.";
        this.set = "LOE";
        this.health = 10;
        this.attack = 10;
        this.manacost = 10;
        this.race = race.murloc;
    }

}

export class AT_058 extends Card {
    constructor() {
        super();
        this.name = "King's Elekk";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Reveal a minion in each deck. If yours costs more, draw it.";
        this.set = "TGT";
        this.health = 2;
        this.attack = 3;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "James Zhang";
        this.race = race.beast;
        this.flavor = "Elekk jousting is AWESOME.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class BRMA13_6 extends Card {
    constructor() {
        super();
        this.name = "Living Lava";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "BRM";
        this.health = 6;
        this.attack = 6;
        this.manacost = 0;
    }

    //[\"TAUNT\"]

}

export class CS2_226e extends Card {
    constructor() {
        super();
        this.name = "Frostwolf Banner";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased stats.";
        this.set = "CORE";
    }

}

export class XXX_008 extends Card {
    constructor() {
        super();
        this.name = "Freeze";
        this.type = CARDTYPES.spell;
        this.text = "<b>Freeze</b> a character.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

    //[\"FREEZE\"]
    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class TU4d_002 extends Card {
    constructor() {
        super();
        this.name = "Crazed Hunter";
        this.type = CARDTYPES.minion;
        this.set = "MISSIONS";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
        this.rarity = rarity.common;
    }

}

export class CS2_084 extends Card {
    constructor() {
        super();
        this.name = "Hunter's Mark";
        this.type = CARDTYPES.spell;
        this.text = "Change a minion's Health to 1.";
        this.set = "CORE";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Jimmy Lo";
        this.flavor = "Never play 'Hide and Go Seek' with a Hunter.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 40.";
        this.howToEarn = "Unlocked at Level 6.";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class BRMA12_7 extends Card {
    constructor() {
        super();
        this.name = "Brood Affliction: Bronze";
        this.type = CARDTYPES.spell;
        this.text = "While this is in your hand, Chromaggus' minions cost (1) less.";
        this.set = "BRM";
        this.manacost = 1;
    }

}

export class AT_027 extends Card {
    constructor() {
        super();
        this.name = "Wilfred Fizzlebang";
        this.type = CARDTYPES.minion;
        this.text = "Cards you draw from your Hero Power cost (0).";
        this.set = "TGT";
        this.health = 4;
        this.attack = 4;
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Tooth";
        this.flavor = "He can summon anything, even a FEARSOME DOOMGUARD*.\n*He's pretty sure this is going to work out.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

}

export class AT_042 extends Card {
    constructor() {
        super();
        this.name = "Druid of the Saber";
        this.type = CARDTYPES.minion;
        this.text = "<b>Choose One -</b> Transform to gain <b>Charge</b>; or +1/+1 and <b>Stealth</b>.";
        this.set = "TGT";
        this.health = 1;
        this.attack = 2;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Arthur Gimaldinov";
        this.flavor = "That's saberTEETH, not like curved pirate blades.  That's a different kind of druid.  Druid of the Curved Pirate Blades.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class AT_132_SHAMANb extends Card {
    constructor() {
        super();
        this.name = "Searing Totem";
        this.type = CARDTYPES.minion;
        this.set = "TGT";
        this.health = 1;
        this.attack = 1;
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.shaman;
    }

}

export class EX1_563 extends Card {
    constructor() {
        super();
        this.name = "Malygos";
        this.type = CARDTYPES.minion;
        this.text = "<b>Spell Damage +5</b>";
        this.set = "EXPERT1";
        this.health = 12;
        this.attack = 4;
        this.manacost = 9;
        this.artist = "Michael Komarck";
        this.race = race.dragon;
        this.flavor = "Malygos hates it when mortals use magic.  He gets so mad!";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"SPELLPOWER\"]

}

export class BRMA09_4t extends Card {
    constructor() {
        super();
        this.name = "Dragonkin";
        this.type = CARDTYPES.minion;
        this.set = "BRM";
        this.health = 1;
        this.attack = 3;
        this.manacost = 1;
        this.race = race.dragon;
    }

}

export class EX1_363e2 extends Card {
    constructor() {
        super();
        this.name = "Blessing of Wisdom";
        this.type = CARDTYPES.enchantment;
        this.text = "When this minion attacks, the enemy player draws a card.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.paladin;
    }

}

export class EX1_169 extends Card {
    constructor() {
        super();
        this.name = "Innervate";
        this.type = CARDTYPES.spell;
        this.text = "Gain 2 Mana Crystals this turn only.";
        this.set = "CORE";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Doug Alexander";
        this.flavor = "Some druids still have flashbacks from strangers yelling \"Innervate me!!\" at them.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 36.";
        this.howToEarn = "Unlocked at Level 1.";
    }

}

export class LOE_061e extends Card {
    constructor() {
        super();
        this.name = "Power of the Titans";
        this.type = CARDTYPES.enchantment;
        this.text = "+3/+3.";
        this.set = "LOE";
    }

}

export class TB_007 extends Card {
    constructor() {
        super();
        this.name = "Deviate Banana";
        this.type = CARDTYPES.spell;
        this.text = "Swap a minion's Attack and Health.";
        this.set = "TB";
        this.manacost = 1;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class LOEA09_4H extends Card {
    constructor() {
        super();
        this.name = "Rare Spear";
        this.type = CARDTYPES.weapon;
        this.text = "Whenever your opponent plays a Rare card, gain +1/+1.";
        this.set = "LOE";
        this.attack = 1;
        this.manacost = 1;
        this.durability = "2";
    }

}

export class GVG_097 extends Card {
    constructor() {
        super();
        this.name = "Lil' Exorcist";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>\n<b>Battlecry:</b> Gain +1/+1 for each enemy <b>Deathrattle</b> minion.";
        this.set = "GVG";
        this.health = 3;
        this.attack = 2;
        this.manacost = 3;
        this.artist = "Jim Nelson";
        this.flavor = "Warlocks have the town exorcist on speed dial in case they unleash the wrong demon.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\",\"TAUNT\"]

}

export class CS2_039 extends Card {
    constructor() {
        super();
        this.name = "Windfury";
        this.type = CARDTYPES.spell;
        this.text = "Give a minion <b>Windfury</b>.";
        this.set = "CORE";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Justin Sweet";
        this.flavor = "Windfury is like Earthfury and Firefury, but more light and airy.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 23.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class EX1_132 extends Card {
    constructor() {
        super();
        this.name = "Eye for an Eye";
        this.type = CARDTYPES.spell;
        this.text = "<b>Secret:</b> When your hero takes damage, deal that much damage to the enemy hero.";
        this.set = "EXPERT1";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "James Ryman";
        this.flavor = "Justice sometimes takes the form of a closed fist into a soft cheek.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"SECRET\"]

}

export class CRED_31 extends Card {
    constructor() {
        super();
        this.name = "Jeremy Cranford";
        this.type = CARDTYPES.minion;
        this.text = "When the game starts, this card climbs to the top of the deck.";
        this.set = "CREDITS";
        this.health = 4;
        this.attack = 5;
        this.manacost = 4;
        this.rarity = rarity.legendary;
    }

}

export class TBA01_5 extends Card {
    constructor() {
        super();
        this.name = "Wild Magic";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nAdd a random spell from any class to your hand. It costs (0).";
        this.set = "TB";
        this.manacost = 2;
    }

}

export class AT_118 extends Card {
    constructor() {
        super();
        this.name = "Grand Crusader";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Add a random Paladin card to your hand.";
        this.set = "TGT";
        this.health = 5;
        this.attack = 5;
        this.manacost = 6;
        this.artist = "Todd Lockwood";
        this.flavor = "A veteran of a number of crusades, she is a force for light and goodness.  Her latest crusade is against goblin telemarketers.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class NAX15_04a extends Card {
    constructor() {
        super();
        this.name = "Slave of Kel'Thuzad";
        this.type = CARDTYPES.enchantment;
        this.text = "MINE!";
        this.set = "NAXX";
    }

}

export class BRM_014e extends Card {
    constructor() {
        super();
        this.name = "Power Rager";
        this.type = CARDTYPES.enchantment;
        this.text = "+3/+3";
        this.set = "BRM";
        this.characterClass = CHARACTERCLASS.hunter;
    }

}

export class BRMC_99e extends Card {
    constructor() {
        super();
        this.name = "Rock Elemental";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "TB";
        this.health = 3;
        this.attack = 2;
        this.manacost = 2;
    }

    //[\"TAUNT\"]

}

export class BRMA03_1H extends Card {
    constructor() {
        super();
        this.name = "Emperor Thaurissan";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class BRMA17_7 extends Card {
    constructor() {
        super();
        this.name = "Chromatic Prototype";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "BRM";
        this.health = 4;
        this.attack = 1;
        this.manacost = 2;
    }

    //[\"TAUNT\"]

}

export class NEW1_036e2 extends Card {
    constructor() {
        super();
        this.name = "Commanding Shout";
        this.type = CARDTYPES.enchantment;
        this.text = "Your minions can't be reduced below 1 Health this turn.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.warrior;
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class NAX4_04 extends Card {
    constructor() {
        super();
        this.name = "Raise Dead";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Passive Hero Power</b>\nWhenever an enemy dies, raise a 1/1 Skeleton.";
        this.set = "NAXX";
        this.manacost = 0;
    }

}

export class NAX13_02 extends Card {
    constructor() {
        super();
        this.name = "Polarity Shift";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSwap the Attack and Health of all minions.";
        this.set = "NAXX";
        this.manacost = 0;
    }

}

export class BRMA02_2_2_TB extends Card {
    constructor() {
        super();
        this.name = "Jeering Crowd";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon a 1/1 Spectator with <b>Taunt</b>.";
        this.set = "TB";
        this.manacost = 2;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}

}

export class TU4f_001 extends Card {
    constructor() {
        super();
        this.name = "Lorewalker Cho";
        this.type = CARDTYPES.hero;
        this.set = "MISSIONS";
        this.health = 25;
    }

}

export class CRED_04 extends Card {
    constructor() {
        super();
        this.name = "Steven Gabriel";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Summon a frothy beverage.";
        this.set = "CREDITS";
        this.health = 3;
        this.attack = 3;
        this.manacost = 1;
        this.rarity = rarity.legendary;
    }

}

export class EX1_001e extends Card {
    constructor() {
        super();
        this.name = "Warded";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Attack.";
        this.set = "EXPERT1";
    }

}

export class BRMC_94 extends Card {
    constructor() {
        super();
        this.name = "Sulfuras";
        this.type = CARDTYPES.weapon;
        this.text = "<b>Deathrattle:</b> Your Hero Power becomes 'Deal 8 damage to a random enemy'.";
        this.set = "TB";
        this.attack = 2;
        this.manacost = 2;
        this.durability = "6";
    }

    //[\"DEATHRATTLE\"]

}

export class AT_071e extends Card {
    constructor() {
        super();
        this.name = "Alexstrasza's Boon";
        this.type = CARDTYPES.enchantment;
        this.text = "+1 Attack and <b>Charge</b>.";
        this.set = "TGT";
        this.characterClass = CHARACTERCLASS.warrior;
    }

}

export class BRMA03_3H extends Card {
    constructor() {
        super();
        this.name = "Moira Bronzebeard";
        this.type = CARDTYPES.minion;
        this.text = "Thaurissan's Hero Power can't be used.\nNever attacks minions unless they have <b>Taunt</b>.";
        this.set = "BRM";
        this.health = 1;
        this.attack = 3;
        this.manacost = 2;
    }

    //[\"AURA\",\"InvisibleDeathrattle\"]

}

export class skele21 extends Card {
    constructor() {
        super();
        this.name = "Damaged Golem";
        this.type = CARDTYPES.minion;
        this.set = "EXPERT1";
        this.health = 1;
        this.attack = 2;
        this.manacost = 1;
        this.race = race.mechanical;
        this.rarity = rarity.common;
    }

}

export class XXX_043 extends Card {
    constructor() {
        super();
        this.name = "Mill 30";
        this.type = CARDTYPES.spell;
        this.text = "Put 30 cards from a hero's deck into his graveyard.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

    //{\"REQ_TARGET_TO_PLAY\":0,\"REQ_HERO_TARGET\":0}

}

export class EX1_046e extends Card {
    constructor() {
        super();
        this.name = "Tempered";
        this.type = CARDTYPES.enchantment;
        this.text = "+2 Attack this turn.";
        this.set = "EXPERT1";
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class EX1_002 extends Card {
    constructor() {
        super();
        this.name = "The Black Knight";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Destroy an enemy minion with <b>Taunt</b>.";
        this.set = "EXPERT1";
        this.health = 5;
        this.attack = 4;
        this.manacost = 6;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "He was sent by the Lich King to disrupt the Argent Tournament.   We can pretty much mark that a failure.";
        this.rarity = rarity.legendary;
        this.collectible = true;
        this.targetingArrowText = "Destroy a minion with Taunt.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0,\"REQ_ENEMY_TARGET\":0,\"REQ_MUST_TARGET_TAUNTER\":0}

}

export class LOEA16_17 extends Card {
    constructor() {
        super();
        this.name = "Animated Statue";
        this.type = CARDTYPES.minion;
        this.set = "LOE";
        this.health = 10;
        this.attack = 10;
        this.manacost = 10;
    }

}

export class EX1_561e extends Card {
    constructor() {
        super();
        this.name = "Alexstrasza's Fire";
        this.type = CARDTYPES.enchantment;
        this.text = "Health set to 15.";
        this.set = "EXPERT1";
    }

}

export class EX1_004 extends Card {
    constructor() {
        super();
        this.name = "Young Priestess";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, give another random friendly minion +1 Health.";
        this.set = "EXPERT1";
        this.health = 1;
        this.attack = 2;
        this.manacost = 1;
        this.artist = "Vance Kovacs";
        this.flavor = "She can't wait to learn Power Word: Fortitude Rank 2.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class NAX10_02H extends Card {
    constructor() {
        super();
        this.name = "Hook";
        this.type = CARDTYPES.weapon;
        this.text = "<b>Windfury</b>\n<b>Deathrattle:</b> Put this weapon into your hand.";
        this.set = "NAXX";
        this.attack = 4;
        this.manacost = 3;
        this.durability = "8";
    }

    //[\"DEATHRATTLE\",\"WINDFURY\"]

}

export class NAX11_02 extends Card {
    constructor() {
        super();
        this.name = "Poison Cloud";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDeal 1 damage to all minions. If any die, summon a slime.";
        this.set = "NAXX";
        this.manacost = 2;
    }

}

export class NAX8_03 extends Card {
    constructor() {
        super();
        this.name = "Unrelenting Trainee";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Summon a Spectral Trainee for your opponent.";
        this.set = "NAXX";
        this.health = 2;
        this.attack = 2;
        this.manacost = 1;
    }

    //[\"DEATHRATTLE\"]

}

export class CS2_064 extends Card {
    constructor() {
        super();
        this.name = "Dread Infernal";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Deal 1 damage to ALL other characters.";
        this.set = "CORE";
        this.health = 6;
        this.attack = 6;
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Zoltan & Gabor";
        this.race = race.demon;
        this.flavor = "\"INFERNOOOOOOOOOO!\" - Jaraxxus, Eredar Lord of the Burning Legion";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 23.";
        this.howToEarn = "Unlocked at Level 10.";
    }

    //[\"BATTLECRY\"]

}

export class GVG_103 extends Card {
    constructor() {
        super();
        this.name = "Micro Machine";
        this.type = CARDTYPES.minion;
        this.text = "At the start of each turn, gain +1 Attack.";
        this.set = "GVG";
        this.health = 2;
        this.attack = 1;
        this.manacost = 2;
        this.artist = "Skan Srisuwan";
        this.race = race.mechanical;
        this.flavor = "This card is the real thing.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class AT_003 extends Card {
    constructor() {
        super();
        this.name = "Fallen Hero";
        this.type = CARDTYPES.minion;
        this.text = "Your Hero Power deals 1 extra damage.";
        this.set = "TGT";
        this.health = 2;
        this.attack = 3;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Arthur Bozonnet";
        this.flavor = "And he can't get up.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class AT_063 extends Card {
    constructor() {
        super();
        this.name = "Acidmaw";
        this.type = CARDTYPES.minion;
        this.text = "Whenever another minion takes damage, destroy it.";
        this.set = "TGT";
        this.health = 2;
        this.attack = 4;
        this.manacost = 7;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Andrew Hou";
        this.race = race.beast;
        this.flavor = "With the help of his trusty sidekick Dreadscale, the giant jormungar Acidmaw is ready to face any knight!";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

}

export class CS2_029 extends Card {
    constructor() {
        super();
        this.name = "Fireball";
        this.type = CARDTYPES.spell;
        this.text = "Deal $6 damage.";
        this.set = "CORE";
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Ralph Horsley";
        this.flavor = "This spell is useful for burning things.  If you're looking for spells that toast things, or just warm them a little, you're in the wrong place.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 44.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class CS2_122e extends Card {
    constructor() {
        super();
        this.name = "Enhanced";
        this.type = CARDTYPES.enchantment;
        this.text = "Raid Leader is granting this minion +1 Attack.";
        this.set = "CORE";
    }

}

export class LOE_017 extends Card {
    constructor() {
        super();
        this.name = "Keeper of Uldaman";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Set a minion's Attack and Health to 3.";
        this.set = "LOE";
        this.health = 4;
        this.attack = 3;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "James Ryman";
        this.flavor = "U da man!  No, U da man!";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in Uldaman, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in Uldaman, in the League of Explorers adventure.";
        this.targetingArrowText = "Change to 3/3.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class NEW1_026t extends Card {
    constructor() {
        super();
        this.name = "Violet Apprentice";
        this.type = CARDTYPES.minion;
        this.set = "EXPERT1";
        this.health = 1;
        this.attack = 1;
        this.manacost = 0;
    }

}

export class XXX_007 extends Card {
    constructor() {
        super();
        this.name = "Enable for Attack";
        this.type = CARDTYPES.spell;
        this.text = "Give a character Charge and make him able to attack!";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class EX1_283 extends Card {
    constructor() {
        super();
        this.name = "Frost Elemental";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> <b>Freeze</b> a character.";
        this.set = "EXPERT1";
        this.health = 5;
        this.attack = 5;
        this.manacost = 6;
        this.artist = "Dan Scott";
        this.flavor = "When a Water elemental and an Ice elemental love each other VERY much...";
        this.rarity = rarity.common;
        this.collectible = true;
        this.targetingArrowText = "Freeze a character.";
    }

    //[\"BATTLECRY\",\"FREEZE\"]
    //{\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class BRM_027 extends Card {
    constructor() {
        super();
        this.name = "Majordomo Executus";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Replace your hero with Ragnaros, the Firelord.";
        this.set = "BRM";
        this.health = 7;
        this.attack = 9;
        this.manacost = 9;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "You thought Executus turned you into Ragnaros, but really Ragnaros was in you the whole time.";
        this.rarity = rarity.legendary;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after completing Molten Core.";
        this.howToEarn = "Unlocked in Molten Core, in the Blackrock Mountain adventure.";
    }

    //[\"DEATHRATTLE\"]

}

export class CS2_181 extends Card {
    constructor() {
        super();
        this.name = "Injured Blademaster";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Deal 4 damage to HIMSELF.";
        this.set = "EXPERT1";
        this.health = 7;
        this.attack = 4;
        this.manacost = 3;
        this.artist = "Samwise";
        this.flavor = "He claims it is an old war wound, but we think he just cut himself shaving.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.faction = "HORDE";
        this.textInPlay = "Weakened";
    }

    //[\"BATTLECRY\"]

}

export class GVG_034 extends Card {
    constructor() {
        super();
        this.name = "Mech-Bear-Cat";
        this.type = CARDTYPES.minion;
        this.text = "Whenever this minion takes damage, add a <b>Spare Part</b> card to your hand.";
        this.set = "GVG";
        this.health = 6;
        this.attack = 7;
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Trent Kaniuga";
        this.race = race.mechanical;
        this.flavor = "Crushes buildings with his BEAR hands. ";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"PART_007\",\"PART_006\",\"PART_005\",\"PART_001\",\"PART_003\",\"PART_002\",\"PART_004\"]

}

export class NAX13_04H extends Card {
    constructor() {
        super();
        this.name = "Feugen";
        this.type = CARDTYPES.minion;
        this.set = "NAXX";
        this.health = 7;
        this.attack = 4;
        this.manacost = 5;
        this.rarity = rarity.legendary;
    }

}

export class PRO_001 extends Card {
    constructor() {
        super();
        this.name = "Elite Tauren Chieftain";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Give both players the power to ROCK! (with a Power Chord card)";
        this.set = "PROMO";
        this.health = 5;
        this.attack = 5;
        this.manacost = 5;
        this.artist = "Samwise Didier";
        this.flavor = "He's looking for a drummer.  The current candidates are: Novice Engineer, Sen'jin Shieldmasta', and Ragnaros the Firelord.";
        this.rarity = rarity.legendary;
        this.collectible = true;
        this.howToEarnGolden = "Awarded at BlizzCon 2013.";
    }

    //[\"BATTLECRY\"]
    //[\"PRO_001a\",\"PRO_001b\",\"PRO_001c\"]

}

export class TB_013_PickOnCurve extends Card {
    constructor() {
        super();
        this.name = "Player Choice Enchant On Curve";
        this.type = CARDTYPES.enchantment;
        this.set = "TB";
    }

}

export class AT_090 extends Card {
    constructor() {
        super();
        this.name = "Mukla's Champion";
        this.type = CARDTYPES.minion;
        this.text = "<b>Inspire:</b> Give your other minions +1/+1.";
        this.set = "TGT";
        this.health = 3;
        this.attack = 4;
        this.manacost = 5;
        this.artist = "Andrew Hou";
        this.race = race.beast;
        this.flavor = "An elegant gorilla, for a more civilized age.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"INSPIRE\"]

}

export class NAX8_02H_TB extends Card {
    constructor() {
        super();
        this.name = "Harvest";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDraw a card. Gain a Mana Crystal.";
        this.set = "TB";
        this.manacost = 2;
    }

}

export class EX1_tk11 extends Card {
    constructor() {
        super();
        this.name = "Spirit Wolf";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "EXPERT1";
        this.health = 3;
        this.attack = 2;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.shaman;
        this.rarity = rarity.rare;
    }

    //[\"TAUNT\"]

}

export class LOEA_01H extends Card {
    constructor() {
        super();
        this.name = "Looming Presence";
        this.type = CARDTYPES.spell;
        this.text = "Draw 3 cards. Gain 6 Armor.";
        this.set = "LOE";
        this.manacost = 3;
    }

}

export class NAX8_04t extends Card {
    constructor() {
        super();
        this.name = "Spectral Warrior";
        this.type = CARDTYPES.minion;
        this.text = "At the start of your turn, deal 1 damage to your hero.";
        this.set = "NAXX";
        this.health = 4;
        this.attack = 0;
        this.manacost = 3;
    }

}

export class AT_015 extends Card {
    constructor() {
        super();
        this.name = "Convert";
        this.type = CARDTYPES.spell;
        this.text = "Put a copy of an enemy minion into your hand.";
        this.set = "TGT";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Dan Dos Santos";
        this.flavor = "\"Are you interested in... HEALTH benefits?!\"";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0,\"REQ_ENEMY_TARGET\":0}

}

export class NAX3_02 extends Card {
    constructor() {
        super();
        this.name = "Web Wrap";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nReturn a random enemy minion to your opponent's hand.";
        this.set = "NAXX";
        this.manacost = 3;
    }

    //{\"REQ_MINIMUM_ENEMY_MINIONS\":1}

}

export class TB_GiftExchange_Snowball extends Card {
    constructor() {
        super();
        this.name = "Hardpacked Snowballs";
        this.type = CARDTYPES.spell;
        this.text = "Return 3 random enemy minions to your opponent's hand.";
        this.set = "TB";
        this.manacost = 0;
    }

}

export class EX1_045 extends Card {
    constructor() {
        super();
        this.name = "Ancient Watcher";
        this.type = CARDTYPES.minion;
        this.text = "Can't attack.";
        this.set = "EXPERT1";
        this.health = 5;
        this.attack = 4;
        this.manacost = 2;
        this.artist = "Richard Wright";
        this.flavor = "Why do its eyes seem to follow you as you walk by?";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.faction = "ALLIANCE";
    }

}

export class TU4f_004 extends Card {
    constructor() {
        super();
        this.name = "Legacy of the Emperor";
        this.type = CARDTYPES.spell;
        this.text = "Give your minions +2/+2. <i>(+2 Attack/+2 Health)</i>";
        this.set = "MISSIONS";
        this.manacost = 3;
        this.rarity = rarity.common;
    }

}

export class NAX9_01 extends Card {
    constructor() {
        super();
        this.name = "Baron Rivendare";
        this.type = CARDTYPES.hero;
        this.set = "NAXX";
        this.health = 7;
    }

}

export class BRMA10_3e extends Card {
    constructor() {
        super();
        this.name = "Incubation";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Health.";
        this.set = "BRM";
    }

}

export class LOE_029 extends Card {
    constructor() {
        super();
        this.name = "Jeweled Scarab";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry: Discover</b> a\n3-Cost card.";
        this.set = "LOE";
        this.health = 1;
        this.attack = 1;
        this.manacost = 2;
        this.artist = "Jaemin Kim";
        this.race = race.beast;
        this.flavor = "It's amazing what you can do with super glue!";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in the Temple of Orsis, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in the Temple of Orsis, in the League of Explorers adventure.";
    }

    //[\"BATTLECRY\"]

}

export class BRMA13_2H extends Card {
    constructor() {
        super();
        this.name = "True Form";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nLet the games begin!";
        this.set = "BRM";
        this.manacost = 1;
    }

    //[\"BRMA13_6\",\"BRMA13_8\",\"BRMA13_7\",\"BRMA13_5\"]

}

export class EX1_582 extends Card {
    constructor() {
        super();
        this.name = "Dalaran Mage";
        this.type = CARDTYPES.minion;
        this.text = "<b>Spell Damage +1</b>";
        this.set = "CORE";
        this.health = 4;
        this.attack = 1;
        this.manacost = 3;
        this.artist = "Jim Nelson";
        this.flavor = "You don't see a lot of Dalaran warriors.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Mage Level 59.";
    }

    //[\"SPELLPOWER\"]

}

export class EX1_144 extends Card {
    constructor() {
        super();
        this.name = "Shadowstep";
        this.type = CARDTYPES.spell;
        this.text = "Return a friendly minion to your hand. It costs (2) less.";
        this.set = "EXPERT1";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Graven Tung";
        this.flavor = "Rogue dance troops will sometimes Shadowstep away at the end of a performance.  Crowds love it.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0,\"REQ_FRIENDLY_TARGET\":0}

}

export class XXX_055e extends Card {
    constructor() {
        super();
        this.name = "1000 Stats Enchant";
        this.type = CARDTYPES.enchantment;
        this.set = "CHEAT";
    }

}

export class AT_110 extends Card {
    constructor() {
        super();
        this.name = "Coliseum Manager";
        this.type = CARDTYPES.minion;
        this.text = "<b>Inspire:</b> Return this minion to your hand.";
        this.set = "TGT";
        this.health = 5;
        this.attack = 2;
        this.manacost = 3;
        this.artist = "Dan Scott";
        this.flavor = "Meets monthly with the gladiators to discuss career goals.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"INSPIRE\"]

}

export class EX1_059 extends Card {
    constructor() {
        super();
        this.name = "Crazed Alchemist";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Swap the Attack and Health of a minion.";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 2;
        this.manacost = 2;
        this.artist = "Tom Fleming";
        this.flavor = "\"You'll <i>love</i> my new recipe!\" he says... especially if you're not happy with your current number of limbs.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.targetingArrowText = "Swap Attack and Health of a minion.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class AT_072 extends Card {
    constructor() {
        super();
        this.name = "Varian Wrynn";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Draw 3 cards.\nPut any minions you drew directly into the battlefield.";
        this.set = "TGT";
        this.health = 7;
        this.attack = 7;
        this.manacost = 10;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Wei Wang";
        this.flavor = "Leader of the Alliance!  Father of Anduin!  Also he likes to play Arena, and he averages 12 wins.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class LOEA09_8H extends Card {
    constructor() {
        super();
        this.name = "Slithering Guard";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "LOE";
        this.health = 7;
        this.attack = 5;
        this.manacost = 5;
    }

    //[\"TAUNT\"]

}

export class EX1_536 extends Card {
    constructor() {
        super();
        this.name = "Eaglehorn Bow";
        this.type = CARDTYPES.weapon;
        this.text = "Whenever a friendly <b>Secret</b> is revealed, gain +1 Durability.";
        this.set = "EXPERT1";
        this.attack = 3;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Cyril Van Der Haegen";
        this.flavor = "First Lesson: Put the pointy end in the other guy.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.durability = "2";
    }

}

export class LOEA16_16 extends Card {
    constructor() {
        super();
        this.name = "Rummage";
        this.type = CARDTYPES.hero_power;
        this.text = "Find an artifact.";
        this.set = "LOE";
        this.manacost = 0;
    }

    //[\"LOEA16_10\",\"LOEA16_11\",\"LOEA16_14\",\"LOEA16_15\",\"LOEA16_6\",\"LOEA16_7\",\"LOEA16_9\",\"LOEA16_12\",\"LOEA16_13\",\"LOEA16_8\"]

}

export class BRMA04_2 extends Card {
    constructor() {
        super();
        this.name = "Magma Pulse";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDeal 1 damage to all minions.";
        this.set = "BRM";
        this.manacost = 1;
    }

}

export class BRMA14_8H extends Card {
    constructor() {
        super();
        this.name = "Activate Magmatron";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nActivate Magmatron!";
        this.set = "BRM";
        this.manacost = 6;
    }

}

export class AT_104 extends Card {
    constructor() {
        super();
        this.name = "Tuskarr Jouster";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Reveal a minion in each deck. If yours costs more, restore 7 Health to your hero.";
        this.set = "TGT";
        this.health = 5;
        this.attack = 5;
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Skan Srisuwan";
        this.flavor = "Just could not be talked out of using his turtle for the joust...";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class EX1_155a extends Card {
    constructor() {
        super();
        this.name = "Mark of Nature";
        this.type = CARDTYPES.spell;
        this.text = "+4 Attack.";
        this.set = "EXPERT1";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class EX1_414 extends Card {
    constructor() {
        super();
        this.name = "Grommash Hellscream";
        this.type = CARDTYPES.minion;
        this.text = "<b>Charge</b>\n<b>Enrage:</b> +6 Attack";
        this.set = "EXPERT1";
        this.health = 9;
        this.attack = 4;
        this.manacost = 8;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Glenn Rane";
        this.flavor = "Grommash drank the tainted blood of Mannoroth, dooming the orcs to green skin and red eyes!  Maybe not his best decision.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"CHARGE\",\"ENRAGED\"]

}

export class NAX12_02H_2c_TB extends Card {
    constructor() {
        super();
        this.name = "Decimate";
        this.type = CARDTYPES.spell;
        this.text = "Change the Health of enemy minions to 1.";
        this.set = "TB";
        this.manacost = 1;
    }

}

export class CS2_053e extends Card {
    constructor() {
        super();
        this.name = "Far Sight";
        this.type = CARDTYPES.enchantment;
        this.text = "One of your cards costs (3) less.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Lars Grant-West";
    }

}

export class XXX_056 extends Card {
    constructor() {
        super();
        this.name = "Silence and Destroy All Minions";
        this.type = CARDTYPES.spell;
        this.text = "Destroy all minions without triggering deathrattles.";
        this.set = "CHEAT";
        this.manacost = 0;
    }

}

export class EX1_033 extends Card {
    constructor() {
        super();
        this.name = "Windfury Harpy";
        this.type = CARDTYPES.minion;
        this.text = "<b>Windfury</b>";
        this.set = "EXPERT1";
        this.health = 5;
        this.attack = 4;
        this.manacost = 6;
        this.artist = "Luke Mancini";
        this.flavor = "Harpies are not pleasant sounding.  That's the nicest I can put it.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "ALLIANCE";
    }

    //[\"WINDFURY\"]

}

export class XXX_065 extends Card {
    constructor() {
        super();
        this.name = "Remove All Immune";
        this.type = CARDTYPES.spell;
        this.text = "Remove <b>Immune</b> from enemy hero";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

}

export class LOEA02_02 extends Card {
    constructor() {
        super();
        this.name = "Djinnâ€™s Intuition";
        this.type = CARDTYPES.hero_power;
        this.text = "Draw a card.\nGive your opponent a Wish.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class BRM_024e extends Card {
    constructor() {
        super();
        this.name = "Large Talons";
        this.type = CARDTYPES.enchantment;
        this.text = "+3/+3.";
        this.set = "BRM";
    }

}

export class FP1_027 extends Card {
    constructor() {
        super();
        this.name = "Stoneskin Gargoyle";
        this.type = CARDTYPES.minion;
        this.text = "At the start of your turn, restore this minion to full Health.";
        this.set = "NAXX";
        this.health = 4;
        this.attack = 1;
        this.manacost = 3;
        this.artist = "Matt Smith";
        this.flavor = "Stoneskin Gargoyles love freeze tag.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating Noth the Plaguebringer in the Plague Quarter.";
        this.howToEarn = "Unlocked in The Plague Quarter, in the Naxxramas adventure.";
    }

}

export class NAX15_01e extends Card {
    constructor() {
        super();
        this.name = "Interloper!";
        this.type = CARDTYPES.enchantment;
        this.set = "NAXX";
    }

}

export class NEW1_014e extends Card {
    constructor() {
        super();
        this.name = "Disguised";
        this.type = CARDTYPES.enchantment;
        this.text = "Stealthed until your next turn.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.rogue;
    }

}

export class EX1_130a extends Card {
    constructor() {
        super();
        this.name = "Defender";
        this.type = CARDTYPES.minion;
        this.set = "EXPERT1";
        this.health = 1;
        this.attack = 2;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.paladin;
        this.rarity = rarity.common;
    }

}

export class EX1_012 extends Card {
    constructor() {
        super();
        this.name = "Bloodmage Thalnos";
        this.type = CARDTYPES.minion;
        this.text = "<b>Spell Damage +1</b>. <b>Deathrattle:</b> Draw a card.";
        this.set = "EXPERT1";
        this.health = 1;
        this.attack = 1;
        this.manacost = 2;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "He's in charge of the Annual Scarlet Monastery Blood Drive!";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"DEATHRATTLE\",\"SPELLPOWER\"]

}

export class TB_PickYourFate_12 extends Card {
    constructor() {
        super();
        this.name = "Fate: Confusion";
        this.type = CARDTYPES.spell;
        this.text = "At the end of each turn, swap all minions' Attack and Health.";
        this.set = "TB";
        this.manacost = 0;
    }

}

export class BRMA06_4 extends Card {
    constructor() {
        super();
        this.name = "Flamewaker Acolyte";
        this.type = CARDTYPES.minion;
        this.set = "BRM";
        this.health = 3;
        this.attack = 1;
        this.manacost = 2;
    }

}

export class EX1_250 extends Card {
    constructor() {
        super();
        this.name = "Earth Elemental";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>. <b>Overload:</b> (3)";
        this.set = "EXPERT1";
        this.health = 8;
        this.attack = 7;
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Dan Scott";
        this.flavor = "Nothing beats rock.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //[\"OVERLOAD\",\"TAUNT\"]

}

export class NEW1_029 extends Card {
    constructor() {
        super();
        this.name = "Millhouse Manastorm";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Enemy spells cost (0) next turn.";
        this.set = "EXPERT1";
        this.health = 4;
        this.attack = 4;
        this.manacost = 2;
        this.artist = "Jim Nelson";
        this.flavor = "\"I'm gonna light you up, sweetcheeks!\"";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class GVG_030ae extends Card {
    constructor() {
        super();
        this.name = "Attack Mode";
        this.type = CARDTYPES.enchantment;
        this.text = "+1 Attack.";
        this.set = "GVG";
        this.characterClass = CHARACTERCLASS.druid;
    }

}

export class EX1_536e extends Card {
    constructor() {
        super();
        this.name = "Upgraded";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Durability.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.hunter;
    }

}

export class HERO_01a extends Card {
    constructor() {
        super();
        this.name = "Magni Bronzebeard";
        this.type = CARDTYPES.hero;
        this.set = "HERO_SKINS";
        this.health = 30;
        this.characterClass = CHARACTERCLASS.warrior;
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class TU4f_004o extends Card {
    constructor() {
        super();
        this.name = "Legacy of the Emperor";
        this.type = CARDTYPES.enchantment;
        this.text = "Has +2/+2. <i>(+2 Attack/+2 Health)</i>";
        this.set = "MISSIONS";
    }

}

export class CS2_004e extends Card {
    constructor() {
        super();
        this.name = "Power Word: Shield";
        this.type = CARDTYPES.enchantment;
        this.text = "+2 Health.";
        this.set = "CORE";
        this.characterClass = CHARACTERCLASS.priest;
    }

}

export class BRM_028 extends Card {
    constructor() {
        super();
        this.name = "Emperor Thaurissan";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, reduce the Cost of cards in your hand by (1).";
        this.set = "BRM";
        this.health = 5;
        this.attack = 5;
        this.manacost = 6;
        this.artist = "Wayne Reynolds";
        this.flavor = "His second greatest regret is summoning an evil Firelord who enslaved his entire people.";
        this.rarity = rarity.legendary;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after completing Blackrock Depths.";
        this.howToEarn = "Unlocked in Blackrock Depths, in the Blackrock Mountain adventure.";
    }

}

export class EX1_623e extends Card {
    constructor() {
        super();
        this.name = "Infusion";
        this.type = CARDTYPES.enchantment;
        this.text = "+3 Health.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.priest;
    }

}

export class EX1_154a extends Card {
    constructor() {
        super();
        this.name = "Wrath";
        this.type = CARDTYPES.spell;
        this.text = "Deal $3 damage to a minion.";
        this.set = "EXPERT1";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class NAX9_04H extends Card {
    constructor() {
        super();
        this.name = "Sir Zeliek";
        this.type = CARDTYPES.minion;
        this.text = "Your hero is <b>Immune</b>.";
        this.set = "NAXX";
        this.health = 7;
        this.attack = 2;
        this.manacost = 3;
    }

}

export class EX1_019e extends Card {
    constructor() {
        super();
        this.name = "Cleric's Blessing";
        this.type = CARDTYPES.enchantment;
        this.text = "+1/+1.";
        this.set = "CORE";
        this.characterClass = CHARACTERCLASS.priest;
    }

}

export class BRM_011 extends Card {
    constructor() {
        super();
        this.name = "Lava Shock";
        this.type = CARDTYPES.spell;
        this.text = "Deal $2 damage.\nUnlock your <b>Overloaded</b> Mana Crystals.";
        this.set = "BRM";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Zoltan Boros";
        this.flavor = "Chocolate lava cake is shockingly delicious.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after completing the Shaman Class Challenge in Blackrock Mountain.";
        this.howToEarn = "Unlocked in Molten Core, in the Blackrock Mountain adventure.";
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class AT_076 extends Card {
    constructor() {
        super();
        this.name = "Murloc Knight";
        this.type = CARDTYPES.minion;
        this.text = "<b>Inspire:</b> Summon a random Murloc.";
        this.set = "TGT";
        this.health = 4;
        this.attack = 3;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Sam Nielson";
        this.race = race.murloc;
        this.flavor = "Hee hee!  Look at his cute little feet.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"INSPIRE\"]

}

export class GVG_045t extends Card {
    constructor() {
        super();
        this.name = "Imp";
        this.type = CARDTYPES.minion;
        this.set = "GVG";
        this.health = 1;
        this.attack = 1;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.warlock;
        this.race = race.demon;
    }

}

export class FP1_007 extends Card {
    constructor() {
        super();
        this.name = "Nerubian Egg";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Summon a 4/4 Nerubian.";
        this.set = "NAXX";
        this.health = 2;
        this.attack = 0;
        this.manacost = 2;
        this.artist = "Justin Thavirat";
        this.flavor = "Eggs are a good source of protein and Nerubians.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.howToEarnGolden = "Can be crafted after defeating Maexxna in the Arachnid Quarter.";
        this.howToEarn = "Unlocked in The Arachnid Quarter, in the Naxxramas adventure.";
    }

    //[\"DEATHRATTLE\"]

}

export class BRMA10_6e extends Card {
    constructor() {
        super();
        this.name = "Blind With Rage";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Attack.";
        this.set = "BRM";
    }

}

export class LOE_089 extends Card {
    constructor() {
        super();
        this.name = "Wobbling Runts";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Summon three 2/2 Runts.";
        this.set = "LOE";
        this.health = 6;
        this.attack = 2;
        this.manacost = 6;
        this.artist = "Sam Nielson";
        this.flavor = "The fourth one fell off in a tragic accident.  They don't talk about it.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in the Hall of Explorers, in the League of Explorers adventure.";
    }

    //[\"DEATHRATTLE\"]

}

export class LOE_111 extends Card {
    constructor() {
        super();
        this.name = "Excavated Evil";
        this.type = CARDTYPES.spell;
        this.text = "Deal $3 damage to all minions.\nShuffle this card into your opponent's deck.";
        this.set = "LOE";
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.priest;
        this.artist = "Raymond Swanland";
        this.flavor = "MOM! DAD! DON'T TOUCH IT! IT'S EVIL!!!!!!";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in Uldaman, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in Uldaman, in the League of Explorers adventure.";
    }

}

export class GVG_029 extends Card {
    constructor() {
        super();
        this.name = "Ancestor's Call";
        this.type = CARDTYPES.spell;
        this.text = "Put a random minion from each player's hand into the battlefield.";
        this.set = "GVG";
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.shaman;
        this.artist = "Dan Scott";
        this.flavor = "\"Hey! Ancestors!\" - Ancestor's call";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class AT_040e extends Card {
    constructor() {
        super();
        this.name = "Kindred Spirit";
        this.type = CARDTYPES.enchantment;
        this.text = "+3 Health.";
        this.set = "TGT";
        this.characterClass = CHARACTERCLASS.druid;
    }

}

export class EX1_136 extends Card {
    constructor() {
        super();
        this.name = "Redemption";
        this.type = CARDTYPES.spell;
        this.text = "<b>Secret:</b> When one of your minions dies, return it to life with 1 Health.";
        this.set = "EXPERT1";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Ittoku";
        this.flavor = "I am not sure how you get demptioned the first time.  Itâ€™s a mystery!";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"SECRET\"]

}

export class EX1_570e extends Card {
    constructor() {
        super();
        this.name = "Bite";
        this.type = CARDTYPES.enchantment;
        this.text = "+4 Attack this turn.";
        this.set = "EXPERT1";
    }

    //[\"TAG_ONE_TURN_EFFECT\"]

}

export class EX1_103e extends Card {
    constructor() {
        super();
        this.name = "Mrghlglhal";
        this.type = CARDTYPES.enchantment;
        this.text = "+2 Health.";
        this.set = "EXPERT1";
    }

}

export class CS2_151 extends Card {
    constructor() {
        super();
        this.name = "Silver Hand Knight";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Summon a 2/2 Squire.";
        this.set = "EXPERT1";
        this.health = 4;
        this.attack = 4;
        this.manacost = 5;
        this.artist = "Matt Starbuck";
        this.flavor = "It's good to be a knight.   Less so to be one's squire.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "ALLIANCE";
    }

    //[\"BATTLECRY\"]

}

export class CS2_161 extends Card {
    constructor() {
        super();
        this.name = "Ravenholdt Assassin";
        this.type = CARDTYPES.minion;
        this.text = "<b>Stealth</b>";
        this.set = "EXPERT1";
        this.health = 5;
        this.attack = 7;
        this.manacost = 7;
        this.artist = "Ralph Horsley";
        this.flavor = "Just mail him a package with a name and 10,000 gold.  He'll take care of the rest.";
        this.rarity = rarity.rare;
        this.collectible = true;
        this.faction = "ALLIANCE";
    }

    //[\"STEALTH\"]

}

export class BRMA11_2H extends Card {
    constructor() {
        super();
        this.name = "Essence of the Red";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nEach player draws 3 cards. Gain a Mana Crystal.";
        this.set = "BRM";
        this.manacost = 0;
    }

}

export class LOEA04_29 extends Card {
    constructor() {
        super();
        this.name = "The Eye";
        this.type = CARDTYPES.spell;
        this.text = "<b>Choose Your Path!</b>";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class AT_091 extends Card {
    constructor() {
        super();
        this.name = "Tournament Medic";
        this.type = CARDTYPES.minion;
        this.text = "<b>Inspire:</b> Restore 2 Health to your hero.";
        this.set = "TGT";
        this.health = 8;
        this.attack = 1;
        this.manacost = 4;
        this.artist = "Sean McNally";
        this.flavor = "The medic tournament is less entertaining than the Grand Tournament.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"INSPIRE\"]

}

export class EX1_004e extends Card {
    constructor() {
        super();
        this.name = "Elune's Grace";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Health.";
        this.set = "EXPERT1";
    }

}

export class GVG_060 extends Card {
    constructor() {
        super();
        this.name = "Quartermaster";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Give your Silver Hand Recruits +2/+2.";
        this.set = "GVG";
        this.health = 5;
        this.attack = 2;
        this.manacost = 5;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "Phroilan Gardner";
        this.flavor = "His specialty? Dividing things into four pieces.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class LOE_089t extends Card {
    constructor() {
        super();
        this.name = "Rascally Runt";
        this.type = CARDTYPES.minion;
        this.set = "LOE";
        this.health = 2;
        this.attack = 2;
        this.manacost = 2;
        this.artist = "Matt Dixon";
    }

}

export class BRMA16_3 extends Card {
    constructor() {
        super();
        this.name = "Sonic Breath";
        this.type = CARDTYPES.spell;
        this.text = "Deal $3 damage to a minion. Give your weapon +3 Attack.";
        this.set = "BRM";
        this.manacost = 4;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_WEAPON_EQUIPPED\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class NEW1_008a extends Card {
    constructor() {
        super();
        this.name = "Ancient Teachings";
        this.type = CARDTYPES.spell;
        this.text = "Draw 2 cards.";
        this.set = "EXPERT1";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.druid;
    }

}

export class BRMA17_8H extends Card {
    constructor() {
        super();
        this.name = "Nefarian Strikes!";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nNefarian rains fire from above!";
        this.set = "BRM";
        this.manacost = 0;
    }

}

export class AT_007 extends Card {
    constructor() {
        super();
        this.name = "Spellslinger";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Add a random spell to each player's hand.";
        this.set = "TGT";
        this.health = 4;
        this.attack = 3;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Andrew Hou";
        this.flavor = "Does he sling spells, or do his spells linger about.  Who can say?";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class CS2_063 extends Card {
    constructor() {
        super();
        this.name = "Corruption";
        this.type = CARDTYPES.spell;
        this.text = "Choose an enemy minion. At the start of your turn, destroy it.";
        this.set = "CORE";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Wayne Reynolds";
        this.flavor = "It starts with stealing a pen from work, and before you know it, BOOM!  Corrupted!";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 32.";
        this.howToEarn = "Unlocked at Level 2.";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0,\"REQ_ENEMY_TARGET\":0}

}

export class AT_025 extends Card {
    constructor() {
        super();
        this.name = "Dark Bargain";
        this.type = CARDTYPES.spell;
        this.text = "Destroy 2 random enemy minions. Discard 2 random cards.";
        this.set = "TGT";
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Paul Mafayon";
        this.flavor = "A prime example of lose-lose negotiating.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //{\"REQ_MINIMUM_ENEMY_MINIONS\":2}

}

export class LOEA05_02ha extends Card {
    constructor() {
        super();
        this.name = "Trogg Hate Minions!";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Passive Hero Power</b>\n Enemy minions cost (11). Swap at the start of your turn.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class CS2_150 extends Card {
    constructor() {
        super();
        this.name = "Stormpike Commando";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Deal 2 damage.";
        this.set = "CORE";
        this.health = 2;
        this.attack = 4;
        this.manacost = 5;
        this.artist = "Kev Walker";
        this.flavor = "The Stormpike Commandos are demolition experts.  They also bake a mean cupcake.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "ALLIANCE";
        this.howToEarnGolden = "Unlocked at Paladin Level 51.";
        this.targetingArrowText = "Deal 2 damage.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_NONSELF_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class GVG_084 extends Card {
    constructor() {
        super();
        this.name = "Flying Machine";
        this.type = CARDTYPES.minion;
        this.text = "<b>Windfury</b>";
        this.set = "GVG";
        this.health = 4;
        this.attack = 1;
        this.manacost = 3;
        this.artist = "Matt Dixon";
        this.race = race.mechanical;
        this.flavor = "To operate, this contraption needs a hula doll on the dashboard. Otherwise it's just a â€œfalling machine.â€";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"WINDFURY\"]

}

export class LOEA10_1 extends Card {
    constructor() {
        super();
        this.name = "Giantfin";
        this.type = CARDTYPES.hero;
        this.set = "LOE";
        this.health = 30;
    }

}

export class LOE_009e extends Card {
    constructor() {
        super();
        this.name = "Sinister Power";
        this.type = CARDTYPES.enchantment;
        this.text = "+4/+4.";
        this.set = "LOE";
        this.characterClass = CHARACTERCLASS.warlock;
    }

}

export class CS2_114 extends Card {
    constructor() {
        super();
        this.name = "Cleave";
        this.type = CARDTYPES.spell;
        this.text = "Deal $2 damage to two random enemy minions.";
        this.set = "CORE";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Phroilan Gardner";
        this.flavor = "Hey you twoâ€¦could you stand next to each other for a secondâ€¦";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 40.";
        this.howToEarn = "Unlocked at Level 2.";
    }

    //{\"REQ_MINIMUM_ENEMY_MINIONS\":2}

}

export class TB_MechWar_Boss2_HeroPower extends Card {
    constructor() {
        super();
        this.name = "Boom Bot Jr.";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDeal 2 damage randomly split among all enemies.";
        this.set = "TB";
        this.manacost = 2;
    }

}

export class TB_AllMinionsTauntCharge extends Card {
    constructor() {
        super();
        this.name = "Give Taunt and Charge";
        this.type = CARDTYPES.enchantment;
        this.text = "This minion is granted <b>Taunt</b> and <b>Charge</b>.";
        this.set = "TB";
    }

}

export class EX1_614 extends Card {
    constructor() {
        super();
        this.name = "Illidan Stormrage";
        this.type = CARDTYPES.minion;
        this.text = "Whenever you play a card, summon a 2/1 Flame of Azzinoth.";
        this.set = "EXPERT1";
        this.health = 5;
        this.attack = 7;
        this.manacost = 6;
        this.artist = "Alex Horley Orlandelli";
        this.race = race.demon;
        this.flavor = "Illidan's brother, Malfurion, imprisoned him beneath Hyjal for 10,000 years.  Stormrages are not good at letting go of grudges.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

}

export class GVG_081 extends Card {
    constructor() {
        super();
        this.name = "Gilblin Stalker";
        this.type = CARDTYPES.minion;
        this.text = "<b>Stealth</b>";
        this.set = "GVG";
        this.health = 3;
        this.attack = 2;
        this.manacost = 2;
        this.artist = "Seamus Gallagher";
        this.flavor = "\"Shhh, I think I hear something.\"\n\"Ah, it's probably nothing.\" - Every Henchman";
        this.rarity = rarity.common;
        this.collectible = true;
    }

    //[\"STEALTH\"]

}

export class EX1_562 extends Card {
    constructor() {
        super();
        this.name = "Onyxia";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Summon 1/1 Whelps until your side of the battlefield is full.";
        this.set = "EXPERT1";
        this.health = 8;
        this.attack = 8;
        this.manacost = 9;
        this.artist = "Dany Orizio";
        this.race = race.dragon;
        this.flavor = "Onyxia long manipulated the Stormwind Court by disguising herself as Lady Katrana Prestor.   You would have thought that the giant wings and scales would have been a giveaway.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class LOEA05_02h extends Card {
    constructor() {
        super();
        this.name = "Trogg Hate Minions!";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Passive Hero Power</b>\n Enemy minions cost (11). Swap at the start of your turn.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class EX1_084 extends Card {
    constructor() {
        super();
        this.name = "Warsong Commander";
        this.type = CARDTYPES.minion;
        this.text = "Your <b>Charge</b> minions have +1 Attack.";
        this.set = "CORE";
        this.health = 3;
        this.attack = 2;
        this.manacost = 3;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Wei Wang";
        this.flavor = "The Warsong clan is <i>such drama</i>. It's really not worth it to become a commander.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 36.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //[\"AURA\"]

}

export class EX1_005 extends Card {
    constructor() {
        super();
        this.name = "Big Game Hunter";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Destroy a minion with an Attack of 7 or more.";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 4;
        this.manacost = 3;
        this.artist = "Chris Seaman";
        this.flavor = "Mere devilsaurs no longer excite him.  Soon he'll be trying to catch Onyxia with only a dull Krol Blade.";
        this.rarity = rarity.epic;
        this.collectible = true;
        this.targetingArrowText = "Destroy a minion with an Attack of 7 or more.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_MIN_ATTACK\":7,\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class XXX_047 extends Card {
    constructor() {
        super();
        this.name = "Destroy Deck";
        this.type = CARDTYPES.spell;
        this.text = "Delete an opponent's deck";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

    //{\"REQ_TARGET_TO_PLAY\":0,\"REQ_HERO_TARGET\":0}

}

export class EX1_015 extends Card {
    constructor() {
        super();
        this.name = "Novice Engineer";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Draw a card.";
        this.set = "CORE";
        this.health = 1;
        this.attack = 1;
        this.manacost = 2;
        this.artist = "Karl Richardson";
        this.flavor = "\"Half of this class will not graduateâ€¦ since they'll have been turned to chickens.\" - Tinkmaster Overspark, teaching Gizmos 101.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.faction = "ALLIANCE";
        this.howToEarnGolden = "Unlocked at Druid Level 59.";
    }

    //[\"BATTLECRY\"]

}

export class BRMA12_8t extends Card {
    constructor() {
        super();
        this.name = "Chromatic Dragonkin";
        this.type = CARDTYPES.minion;
        this.text = "Whenever your opponent casts a spell, gain +2/+2.";
        this.set = "BRM";
        this.health = 3;
        this.attack = 2;
        this.manacost = 2;
        this.race = race.dragon;
    }

}

export class AT_080 extends Card {
    constructor() {
        super();
        this.name = "Garrison Commander";
        this.type = CARDTYPES.minion;
        this.text = "You can use your Hero Power twice a turn.";
        this.set = "TGT";
        this.health = 3;
        this.attack = 2;
        this.manacost = 2;
        this.artist = "Jesper Ejsing";
        this.flavor = "He'll never admit it, but he pushes you hard because he really cares about you.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //[\"AURA\"]

}

export class BRMC_83 extends Card {
    constructor() {
        super();
        this.name = "Open the Gates";
        this.type = CARDTYPES.spell;
        this.text = "Fill your board with 2/2 Whelps.";
        this.set = "TB";
        this.manacost = 8;
    }

}

export class LOEA14_1H extends Card {
    constructor() {
        super();
        this.name = "Heroic Sentinel";
        this.type = CARDTYPES.hero;
        this.set = "LOE";
        this.health = 30;
    }

}

export class TB_CoOp_Mechazod extends Card {
    constructor() {
        super();
        this.name = "Gearmaster Mechazod";
        this.type = CARDTYPES.minion;
        this.text = "<b>Boss</b>\nMechazod wins if he defeats either of you!";
        this.set = "TB";
        this.health = 95;
        this.attack = 2;
        this.manacost = 10;
        this.rarity = rarity.legendary;
    }

    //[\"TAUNT\"]

}

export class GVG_092 extends Card {
    constructor() {
        super();
        this.name = "Gnomish Experimenter";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Draw a card. If it's a minion, transform it into a Chicken.";
        this.set = "GVG";
        this.health = 2;
        this.attack = 3;
        this.manacost = 3;
        this.artist = "Jesper Ejsing";
        this.flavor = "He's legitimately surprised every time he turns himself into a chicken.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

    //[\"BATTLECRY\"]

}

export class CS2_051 extends Card {
    constructor() {
        super();
        this.name = "Stoneclaw Totem";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "CORE";
        this.health = 2;
        this.attack = 0;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.shaman;
        this.race = race.totem;
        this.rarity = rarity.free;
    }

    //[\"TAUNT\"]

}

export class GVG_065 extends Card {
    constructor() {
        super();
        this.name = "Ogre Brute";
        this.type = CARDTYPES.minion;
        this.text = "50% chance to attack the wrong enemy.";
        this.set = "GVG";
        this.health = 4;
        this.attack = 4;
        this.manacost = 3;
        this.artist = "Vinod Rams";
        this.flavor = "Ogres have really terrible short-term chocolate.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class AT_067 extends Card {
    constructor() {
        super();
        this.name = "Magnataur Alpha";
        this.type = CARDTYPES.minion;
        this.text = "Also damages the minions next to whomever\nhe attacks.";
        this.set = "TGT";
        this.health = 3;
        this.attack = 5;
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Alex Horley Orlandelli";
        this.flavor = "Playing him also gets you into the Magnataur Beta.";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

}

export class CS2_082 extends Card {
    constructor() {
        super();
        this.name = "Wicked Knife";
        this.type = CARDTYPES.weapon;
        this.set = "CORE";
        this.attack = 1;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.rogue;
        this.rarity = rarity.free;
        this.durability = "2";
    }

}

export class BRMA09_3 extends Card {
    constructor() {
        super();
        this.name = "Old Horde";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nSummon two 1/1 Orcs with <b>Taunt</b>. Get a new Hero Power.";
        this.set = "BRM";
        this.manacost = 2;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}
    //[\"BRMA09_2\",\"BRMA09_4\",\"BRMA09_5\"]

}

export class BRMA16_2 extends Card {
    constructor() {
        super();
        this.name = "Echolocate";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nEquip a weapon that grows as your opponent plays cards.";
        this.set = "BRM";
        this.manacost = 1;
    }

}

export class BRMA14_7 extends Card {
    constructor() {
        super();
        this.name = "Electron";
        this.type = CARDTYPES.minion;
        this.text = "All spells cost (3) less.";
        this.set = "BRM";
        this.health = 5;
        this.attack = 5;
        this.manacost = 3;
        this.race = race.mechanical;
        this.rarity = rarity.legendary;
    }

    //[\"AURA\"]

}

export class BRMC_91 extends Card {
    constructor() {
        super();
        this.name = "Son of the Flame";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Deal 6 damage.";
        this.set = "TB";
        this.health = 3;
        this.attack = 6;
        this.manacost = 3;
        this.targetingArrowText = "Deal 6 damage.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_TARGET_IF_AVAILABLE\":0}

}

export class EX1_509 extends Card {
    constructor() {
        super();
        this.name = "Murloc Tidecaller";
        this.type = CARDTYPES.minion;
        this.text = "Whenever a Murloc is summoned, gain +1 Attack.";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 1;
        this.manacost = 1;
        this.artist = "Jaemin Kim";
        this.race = race.murloc;
        this.flavor = "This guy gets crazy strong at family reunions.";
        this.rarity = rarity.rare;
        this.collectible = true;
    }

}

export class NAX6_03te extends Card {
    constructor() {
        super();
        this.name = "Fungal Growth";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Attack.";
        this.set = "NAXX";
    }

}

export class EX1_581 extends Card {
    constructor() {
        super();
        this.name = "Sap";
        this.type = CARDTYPES.spell;
        this.text = "Return an enemy minion to your opponent's hand.";
        this.set = "CORE";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Scott Altmann";
        this.flavor = "Rogues love sappy movies.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 40.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0,\"REQ_ENEMY_TARGET\":0}

}

export class NAX6_03 extends Card {
    constructor() {
        super();
        this.name = "Deathbloom";
        this.type = CARDTYPES.spell;
        this.text = "Deal $5 damage to a minion. Summon a Spore.";
        this.set = "NAXX";
        this.manacost = 4;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class AT_029 extends Card {
    constructor() {
        super();
        this.name = "Buccaneer";
        this.type = CARDTYPES.minion;
        this.text = "Whenever you equip a weapon, give it +1 Attack.";
        this.set = "TGT";
        this.health = 1;
        this.attack = 2;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.rogue;
        this.artist = "Matt Dixon";
        this.race = race.pirate;
        this.flavor = "The best part of buccaneering is the pants.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class NEW1_017e extends Card {
    constructor() {
        super();
        this.name = "Full Belly";
        this.type = CARDTYPES.enchantment;
        this.text = "+2/+2.  Full of Murloc.";
        this.set = "EXPERT1";
    }

}

export class EX1_249 extends Card {
    constructor() {
        super();
        this.name = "Baron Geddon";
        this.type = CARDTYPES.minion;
        this.text = "At the end of your turn, deal 2 damage to ALL other characters.";
        this.set = "EXPERT1";
        this.health = 5;
        this.attack = 7;
        this.manacost = 7;
        this.artist = "Ian Ameling";
        this.flavor = "Baron Geddon was Ragnaros's foremost lieutenant, until he got FIRED.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

}

export class TB_008 extends Card {
    constructor() {
        super();
        this.name = "Rotten Banana";
        this.type = CARDTYPES.spell;
        this.text = "Deal $1 damage.";
        this.set = "TB";
        this.manacost = 1;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class EX1_573t extends Card {
    constructor() {
        super();
        this.name = "Treant";
        this.type = CARDTYPES.minion;
        this.text = "<b>Taunt</b>";
        this.set = "EXPERT1";
        this.health = 2;
        this.attack = 2;
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.druid;
    }

    //[\"TAUNT\"]

}

export class EX1_057 extends Card {
    constructor() {
        super();
        this.name = "Ancient Brewmaster";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Return a friendly minion from the battlefield to your hand.";
        this.set = "EXPERT1";
        this.health = 4;
        this.attack = 5;
        this.manacost = 4;
        this.artist = "Bernie Kang";
        this.flavor = "Most pandaren say his brew tastes like yak.  But apparently that's a compliment.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "ALLIANCE";
        this.targetingArrowText = "Return a minion to your hand.";
    }

    //[\"BATTLECRY\"]
    //{\"REQ_MINION_TARGET\":0,\"REQ_FRIENDLY_TARGET\":0,\"REQ_TARGET_IF_AVAILABLE\":0,\"REQ_NONSELF_TARGET\":0}

}

export class NAX13_01H extends Card {
    constructor() {
        super();
        this.name = "Thaddius";
        this.type = CARDTYPES.hero;
        this.set = "NAXX";
        this.health = 45;
    }

}

export class TB_PickYourFate_6_2nd extends Card {
    constructor() {
        super();
        this.name = "Dire Fate: Unstable Portals";
        this.type = CARDTYPES.spell;
        this.text = "Place 3 Unstable Portals in each player's hand.";
        this.set = "TB";
        this.manacost = 0;
    }

}

export class LOEA13_2H extends Card {
    constructor() {
        super();
        this.name = "Ancient Power";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nAdd a random card to your hand. It costs (0).";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class LOEA02_05 extends Card {
    constructor() {
        super();
        this.name = "Wish for Glory";
        this.type = CARDTYPES.spell;
        this.text = "<b>Discover</b> a minion.";
        this.set = "LOE";
        this.manacost = 0;
    }

}

export class BRMA10_5 extends Card {
    constructor() {
        super();
        this.name = "Chromatic Drake";
        this.type = CARDTYPES.minion;
        this.set = "BRM";
        this.health = 3;
        this.attack = 7;
        this.manacost = 4;
        this.race = race.dragon;
    }

}

export class BRMA15_1 extends Card {
    constructor() {
        super();
        this.name = "Maloriak";
        this.type = CARDTYPES.hero;
        this.set = "BRM";
        this.health = 30;
    }

}

export class CS2_088 extends Card {
    constructor() {
        super();
        this.name = "Guardian of Kings";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Restore 6 Health to your hero.";
        this.set = "CORE";
        this.health = 6;
        this.attack = 5;
        this.manacost = 7;
        this.characterClass = CHARACTERCLASS.paladin;
        this.artist = "E.M. Gist";
        this.flavor = "Holy beings from the beyond are so clichÃ©!";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 47.";
        this.howToEarn = "Unlocked at Level 8.";
    }

    //[\"BATTLECRY\"]

}

export class EX1_571 extends Card {
    constructor() {
        super();
        this.name = "Force of Nature";
        this.type = CARDTYPES.spell;
        this.text = "Summon three 2/2 Treants with <b>Charge</b> that die at the end of the turn.";
        this.set = "EXPERT1";
        this.manacost = 6;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "Trevor Jacobs";
        this.flavor = "\"I think I'll just nap under these trees. Wait... AAAAAHHH!\" - Blinkfizz, the Unfortunate Gnome";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //{\"REQ_NUM_MINION_SLOTS\":1}

}

export class LOEA01_11h extends Card {
    constructor() {
        super();
        this.name = "Rod of the Sun";
        this.type = CARDTYPES.minion;
        this.text = "<b>Deathrattle:</b> Surrender this to your opponent.";
        this.set = "LOE";
        this.health = 5;
        this.attack = 0;
        this.manacost = 0;
    }

    //[\"DEATHRATTLE\"]

}

export class AT_037b extends Card {
    constructor() {
        super();
        this.name = "Living Roots";
        this.type = CARDTYPES.spell;
        this.text = "Summon two 1/1 Saplings.";
        this.set = "TGT";
        this.manacost = 0;
    }

}

export class CS2_222o extends Card {
    constructor() {
        super();
        this.name = "Might of Stormwind";
        this.type = CARDTYPES.enchantment;
        this.text = "Has +1/+1.";
        this.set = "CORE";
    }

}

export class XXX_027 extends Card {
    constructor() {
        super();
        this.name = "Server Crash";
        this.type = CARDTYPES.spell;
        this.text = "Crash the Server.  DON'T BE A FOOL.";
        this.set = "CHEAT";
        this.manacost = 0;
    }

}

export class DS1_183 extends Card {
    constructor() {
        super();
        this.name = "Multi-Shot";
        this.type = CARDTYPES.spell;
        this.text = "Deal $3 damage to two random enemy minions.";
        this.set = "CORE";
        this.manacost = 4;
        this.characterClass = CHARACTERCLASS.hunter;
        this.artist = "Benjamin Zhang";
        this.flavor = "You see, it's all about <i>throughput</i>.";
        this.rarity = rarity.free;
        this.collectible = true;
        this.howToEarnGolden = "Unlocked at Level 36.";
        this.howToEarn = "Unlocked at Level 1.";
    }

    //{\"REQ_MINIMUM_ENEMY_MINIONS\":2}

}

export class LOE_115 extends Card {
    constructor() {
        super();
        this.name = "Raven Idol";
        this.type = CARDTYPES.spell;
        this.text = "<b>Choose One -</b>\n<b>Discover</b> a minion; or <b>Discover</b> a spell.";
        this.set = "LOE";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.druid;
        this.artist = "A.J. Nazzaro";
        this.flavor = "Was petrified when it found out it didn't make the cut for Azerothean Idol.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.howToEarnGolden = "Crafting unlocked in the Hall of Explorers, in the League of Explorers adventure.";
        this.howToEarn = "Unlocked in the Hall of Explorers, in the League of Explorers adventure.";
    }

}

export class DREAM_05 extends Card {
    constructor() {
        super();
        this.name = "Nightmare";
        this.type = CARDTYPES.spell;
        this.text = "Give a minion +5/+5. At the start of your next turn, destroy it.";
        this.set = "EXPERT1";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.dream;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class EX1_506a extends Card {
    constructor() {
        super();
        this.name = "Murloc Scout";
        this.type = CARDTYPES.minion;
        this.set = "CORE";
        this.health = 1;
        this.attack = 1;
        this.manacost = 0;
        this.race = race.murloc;
        this.rarity = rarity.common;
    }

}

export class BRMA03_2 extends Card {
    constructor() {
        super();
        this.name = "Power of the Firelord";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nDeal 30 damage.";
        this.set = "BRM";
        this.manacost = 2;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class CS2_196 extends Card {
    constructor() {
        super();
        this.name = "Razorfen Hunter";
        this.type = CARDTYPES.minion;
        this.text = "<b>Battlecry:</b> Summon a 1/1 Boar.";
        this.set = "CORE";
        this.health = 3;
        this.attack = 2;
        this.manacost = 3;
        this.artist = "Clint Langley";
        this.flavor = "Someone did mess with Tuskerr once.  ONCE.";
        this.rarity = rarity.common;
        this.collectible = true;
        this.faction = "HORDE";
        this.howToEarnGolden = "Unlocked at Hunter Level 55.";
    }

    //[\"BATTLECRY\"]

}

export class AT_026 extends Card {
    constructor() {
        super();
        this.name = "Wrathguard";
        this.type = CARDTYPES.minion;
        this.text = "Whenever this minion takes damage, also deal that amount to your hero.";
        this.set = "TGT";
        this.health = 3;
        this.attack = 4;
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.warlock;
        this.artist = "Sojin Hwang";
        this.race = race.demon;
        this.flavor = "After playing against 5 Annoy-O-Trons, any normal guard will become a Wrathguard.";
        this.rarity = rarity.common;
        this.collectible = true;
    }

}

export class AT_132_DRUID extends Card {
    constructor() {
        super();
        this.name = "Dire Shapeshift";
        this.type = CARDTYPES.hero_power;
        this.text = "<b>Hero Power</b>\nGain 2 Armor and +2 Attack this turn.";
        this.set = "TGT";
        this.manacost = 2;
        this.characterClass = CHARACTERCLASS.druid;
    }

}

export class EX1_604o extends Card {
    constructor() {
        super();
        this.name = "Berserk";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Attack.";
        this.set = "EXPERT1";
        this.characterClass = CHARACTERCLASS.warrior;
    }

}

export class XXX_020 extends Card {
    constructor() {
        super();
        this.name = "Damage all but 1";
        this.type = CARDTYPES.spell;
        this.text = "Set the Health of a character to 1.";
        this.set = "CHEAT";
        this.manacost = 0;
        this.rarity = rarity.common;
    }

    //[\"ImmuneToSpellpower\"]
    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class LOEA04_01 extends Card {
    constructor() {
        super();
        this.name = "Temple Escape";
        this.type = CARDTYPES.hero;
        this.set = "LOE";
        this.health = 100;
    }

}

export class AT_035t extends Card {
    constructor() {
        super();
        this.name = "Ambush!";
        this.type = CARDTYPES.spell;
        this.text = "When you draw this, summon a 4/4 Nerubian for your opponent. Draw a card.";
        this.set = "TGT";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.rogue;
    }

}

export class EX1_559 extends Card {
    constructor() {
        super();
        this.name = "Archmage Antonidas";
        this.type = CARDTYPES.minion;
        this.text = "Whenever you cast a spell, add a 'Fireball' spell to your hand.";
        this.set = "EXPERT1";
        this.health = 7;
        this.attack = 5;
        this.manacost = 7;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Wayne Reynolds";
        this.flavor = "Antonidas was the Grand Magus of the Kirin Tor, and Jaina's mentor.  This was a big step up from being Grand Magus of Jelly Donuts.";
        this.rarity = rarity.legendary;
        this.collectible = true;
    }

}

export class PRO_001b extends Card {
    constructor() {
        super();
        this.name = "Rogues Do It...";
        this.type = CARDTYPES.spell;
        this.text = "Deal $4 damage. Draw a card.";
        this.set = "PROMO";
        this.manacost = 4;
    }

    //{\"REQ_TARGET_TO_PLAY\":0}

}

export class GVG_056t extends Card {
    constructor() {
        super();
        this.name = "Burrowing Mine";
        this.type = CARDTYPES.spell;
        this.text = "When you draw this, it explodes. You take 10 damage and draw a card.";
        this.set = "GVG";
        this.manacost = 0;
        this.characterClass = CHARACTERCLASS.warrior;
        this.artist = "Chris Seaman";
    }

    //[\"ImmuneToSpellpower\"]

}

export class TU4a_002 extends Card {
    constructor() {
        super();
        this.name = "Riverpaw Gnoll";
        this.type = CARDTYPES.minion;
        this.set = "MISSIONS";
        this.health = 1;
        this.attack = 2;
        this.manacost = 1;
        this.rarity = rarity.common;
    }

}

export class AT_004 extends Card {
    constructor() {
        super();
        this.name = "Arcane Blast";
        this.type = CARDTYPES.spell;
        this.text = "Deal $2 damage to a minion. This spell gets double bonus from <b>Spell Damage</b>.";
        this.set = "TGT";
        this.manacost = 1;
        this.characterClass = CHARACTERCLASS.mage;
        this.artist = "Gabor Szikszai";
        this.flavor = "Now with 100% more blast!";
        this.rarity = rarity.epic;
        this.collectible = true;
    }

    //{\"REQ_MINION_TARGET\":0,\"REQ_TARGET_TO_PLAY\":0}

}

export class NEW1_025e extends Card {
    constructor() {
        super();
        this.name = "Bolstered";
        this.type = CARDTYPES.enchantment;
        this.text = "Increased Health.";
        this.set = "EXPERT1";
    }

}

export class NAX9_02H extends Card {
    constructor() {
        super();
        this.name = "Lady Blaumeux";
        this.type = CARDTYPES.minion;
        this.text = "Your hero is <b>Immune</b>.";
        this.set = "NAXX";
        this.health = 7;
        this.attack = 2;
        this.manacost = 3;
    }

}

