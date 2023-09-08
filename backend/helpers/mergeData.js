const antonyms = require("../data/JSON/antonyms.json");
const synonyms = require("../data/JSON/synonyms.json");

const synonymWords = synonyms.map((object) => object.word.toLowerCase().trim());
const antonymWords = antonyms.map((object) => object.word.toLowerCase().trim());

synonymWords.forEach((word) => {
  const matchedIndex = antonymWords.indexOf(word);
  if (matchedIndex !== -1) {
    const matchingSynonym = synonyms.find(
      (synonym) => synonym.word.toLowerCase().trim() === word
    );
    const matchingAntonym = antonyms[matchedIndex];
    mergeObject(matchingSynonym, matchingAntonym)
  }
});


function mergeObject(synonym, antonym) {
  console.log(synonym)
}
