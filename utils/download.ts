import axios from 'axios';
import fs from 'fs';
import path from 'path';

const enumUrl = 'https://api.hearthstonejson.com/v1/enums.d.ts';
const enumPath = path.join(__dirname, '../types/enums.d.ts');

const cardsUrl = 'https://api.hearthstonejson.com/v1/latest/enUS/cards.json';
const cardsPath = path.join(__dirname, '../data/cards.json');

(async () => {
  const { data: enumFile } = await axios.get<string>(enumUrl);
  fs.mkdirSync(path.dirname(enumPath), {
    recursive: true,
  });
  fs.writeFileSync(enumPath, enumFile.replaceAll('\t', '  '));

  const { data: cardsFile } = await axios.get(cardsUrl);
  fs.mkdirSync(path.dirname(cardsPath), {
    recursive: true,
  });
  fs.writeFileSync(cardsPath, JSON.stringify(cardsFile, null, 4));
})();
