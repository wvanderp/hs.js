var _ = require("lodash");
var fs = require("fs");
var json = require("./AllSets.json");


//reimplement replace for more than one instance in a string
String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

var toWrite = "";


toWrite += "import {Card} from \"../../hs.js/cards/card.js\" \n" +
    "import {CARDTYPES, CHARACTERCLASS, rarity, race} from \"../../hs.js/baseEntities.js\"\n\n";

for (var i = 0; i < _.size(json); i++) {
    toWrite += makeClass(json[i]) + "\n\n";
    console.log(i + "/" + (_.size(json) - 1));

}

fs.writeFile("out.js", toWrite);

function makeClass(card) {
    var c = "";
    var br = "\n";
    //id
    c += makeRow("export class %%here%% extends Card{", card["id"], 0);
    c += "\tconstructor(){" + br;
    c += "\t\tsuper();" + br;

    //name
    c += makeRow('this.name = "%%here%%";', card["name"], 2);
    //type
    c += makeRow("this.type = CARDTYPES.%%here%%;", toLower(card["type"]), 2);

    //text
    c += makeRow("this.text = \"%%here%%\";", card["text"], 2);
    //set
    c += makeRow("this.set = \"%%here%%\";", card["set"], 2);

    //health
    c += makeRow("this.health = %%here%%;", card["health"], 2);

    //attack
    c += makeRow("this.attack = %%here%%;", card["attack"], 2);

    //cost
    c += makeRow("this.manacost = %%here%%;", card["cost"], 2);

    //playerClass
    c += makeRow("this.characterClass = CHARACTERCLASS.%%here%%;", toLower(card["playerClass"]), 2);

    //artist
    c += makeRow("this.artist = \"%%here%%\";", card["artist"], 2);

    //race
    c += makeRow("this.race = race.%%here%%;", toLower(card["race"]), 2);

    //flavor
    c += makeRow("this.flavor = \"%%here%%\";", card["flavor"], 2);

    //rarity
    c += makeRow("this.rarity = rarity.%%here%%;", toLower(card["rarity"]), 2);

    //collectible
    c += makeRow("this.collectible = %%here%%;", card["collectible"], 2);

    //faction
    c += makeRow("this.faction = \"%%here%%\";", card["faction"], 2);

    //howToEarnGolden
    c += makeRow("this.howToEarnGolden = \"%%here%%\";", card["howToEarnGolden"], 2);

    //howToEarn
    c += makeRow("this.howToEarn = \"%%here%%\";", card["howToEarn"], 2);

    //targetingArrowText
    c += makeRow("this.targetingArrowText = \"%%here%%\";", card["targetingArrowText"], 2);

    //textInPlay
    c += makeRow("this.textInPlay = \"%%here%%\";", card["textInPlay"], 2);

    //durability
    c += makeRow("this.durability = \"%%here%%\";", card["durability"], 2);

    c += "\t}\n";


    //mechanics
    c += makeRow("//%%here%%", JSON.stringify(card["mechanics"]), 1);

    //playRequirements
    c += makeRow("//%%here%%", JSON.stringify(card["playRequirements"]), 1);

    //entourage
    c += makeRow("//%%here%%", JSON.stringify(card["entourage"]), 1);

    c += "\n}";

    return c;
}

function makeRow(text, insert, tabs) {
    if (typeof insert == "undefined") {
        return "";
    }

    // quick and dirty string conversion.
    // for when the insert isn't a string
    insert = insert + "";


    insert = insert.replaceAll("\n", "\\n");
    insert = insert.replaceAll("\"", "\\\"");

    //some data reformating
    insert = insert.replaceAll("unknown_6", "unknown");


    text = text.replace("%%here%%", insert);

    for (var i = tabs; i != 0; i--) {
        text = "    " + text;
    }

    text = text + "\n";

    //console.log(text);
    return text;
}

function toLower(string) {
    if (typeof string == "undefined") {
        return undefined;
    }

    //string convertion if nessesary
    string = string + "";
    return string.toLowerCase();
}