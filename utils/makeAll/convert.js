var fs = require("fs");

var file = fs.readFileSync("./AllSets.json", "utf8");

var json = JSON.parse(file);

console.log(json);

for(set in json){
    console.log(set);
}