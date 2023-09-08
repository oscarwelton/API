const fs = require("fs");
const antonyms = require("../data/JSON/antonyms.json");
const synonyms = require("../data/JSON/synonyms.json");

const synonymWords = synonyms.map((object) => object.word.toLowerCase().trim());
const antonymWords = antonyms.map((object) => object.word.toLowerCase().trim());

const mergedJSON = [];

synonymWords.forEach((word) => {
  const matchedWord = antonymWords.indexOf(word);

  if (matchedWord !== -1) {
    mergedJSON.push(word)
  }
});

console.log(mergedJSON.length)
