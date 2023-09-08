const fs = require("fs");

function makeThesaurus() {
  const antonyms = require("../data/JSON/antonyms.json");
  const synonyms = require("../data/JSON/synonyms.json");

  const synonymWords = synonyms.map((object) =>
    object.word.toLowerCase().trim()
  );
  const antonymWords = antonyms.map((object) =>
    object.word.toLowerCase().trim()
  );

  const thesaurus = [];

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
    thesaurus.push(merged);
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
    JSON.stringify(thesaurus, null, 2)
  );
}

// makeThesaurus();

function makeHyper() {
  const hyponyms = require("../data/JSON/hyponyms.json");
  const hypernyms = require("../data/JSON/hypernyms.json");

  const hyponymWords = hyponyms.map((object) =>
    object.word.toLowerCase().trim()
  );
  const hypernymWords = hypernyms.map((object) =>
    object.word.toLowerCase().trim()
  );

  const hyperMerge = [];

  hypernymWords.forEach((word) => {
    let merged = {};
    const matchedIndex = hyponymWords.indexOf(word);
    if (matchedIndex !== -1) {
      const matchingHypernym = hypernyms.find(
        (hypernym) => hypernym.word.toLowerCase().trim() === word
      );
      const matchingHyponym = hyponyms[matchedIndex];
      merged = mergeObject(matchingHypernym, matchingHyponym);
    } else {
      merged = mergeObject(
        hypernyms.find(
          (hypernym) => hypernym.word.toLowerCase().trim() === word
        ),
        { hyponyms: [] }
      );
    }
    hyperMerge.push(merged);
  });

  function mergeObject(hypernym, hyponym) {
    const word = hypernym.word;
    const mergedObject = {
      [word]: {
        pos: hypernym.pos,
        hypernyms: hypernym.hypernyms,
        hyponyms: hyponym.hyponyms,
      },
    };
    return mergedObject;
  }

  console.log(hyperMerge);

  fs.writeFileSync(
    "../data/JSON/hyperMerge.json",
    JSON.stringify(hyperMerge, null, 2)
  );
}

makeHyper();
