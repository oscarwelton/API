const fs = require("fs");

const antonyms = require("../data/JSON/antonyms.json");
const synonyms = require("../data/JSON/synonyms.json");

const synonymWords = synonyms.map((object) => object.word.toLowerCase().trim());
const antonymWords = antonyms.map((object) => object.word.toLowerCase().trim());

const mergedJSON = [];

synonymWords.forEach((word) => {
  let merged = {};
  const matchedIndex = antonymWords.indexOf(word);
  if (matchedIndex !== -1) {
    const matchingSynonym = synonyms.find(
      (synonym) => synonym.word.toLowerCase().trim() === word
    );
    const matchingAntonym = antonyms[matchedIndex];
    merged = mergeObject(matchingSynonym, matchingAntonym);
  } else {
    merged = mergeObject(
      synonyms.find((synonym) => synonym.word.toLowerCase().trim() === word),
      { antonyms: [] }
    );
  }
  mergedJSON.push(merged);
});

function mergeObject(synonym, antonym) {
  const word = synonym.word;
  const mergedObject = {
    [word]: {
      pos: synonym.pos,
      synonyms: synonym.synonyms,
      antonyms: antonym.antonyms,
    },
  };
  return mergedObject;
}

fs.writeFileSync(
  "../data/JSON/merged.json",
  JSON.stringify(mergedJSON, null, 2)
);
