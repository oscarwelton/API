const fs = require("fs");
const word = require("../models/word");

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
  return thesaurus;
}

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

  return hyperMerge;
}

function mergeTypes() {
  const nouns = require("../data/JSON/nouns.json");
  const verbs = require("../data/JSON/verbs.json");
  const adjectives = require("../data/JSON/adjectives.json");
  const adverbs = require("../data/JSON/adverbs.json");
  const combinedData = [...nouns, ...verbs, ...adjectives, ...adverbs];

  return combinedData;
}

function insertTypes() {
  const types = mergeTypes();
  const typeWords = types.map((object) => object.word.toLowerCase().trim());

  const typesInserted = [];

  types.forEach((word) => {
    const typeIndex = typeWords.indexOf(word.word.toLowerCase().trim());

    if (typeIndex !== -1) {
      const matchingType = types[typeIndex];

      const insertedObject = {
        word: word.word,
        length: word.length,
        count: word.count,
        pos: matchingType.pos,
        meanings: matchingType.meanings,
      };
      typesInserted.push(insertedObject);
    } else {
      typesInserted.push(word);
    }
  });
  wordList = typesInserted;
  return wordList;
}

function insertThesaurus() {
  const thesaurus = makeThesaurus();
  const thesaurusWords = thesaurus.map((object) =>
    Object.keys(object)[0].toLowerCase().trim()
  );

  const thesaurusInserted = [];

  wordList.forEach((word) => {
    const thesaurusIndex = thesaurusWords.indexOf(
      word.word.toLowerCase().trim()
    );

    if (thesaurusIndex !== -1) {
      const matchingThesaurus = thesaurus[thesaurusIndex];

      const insertedObject = {
        word: word.word,
        length: word.length,
        count: word.count,
        pos: word.pos ? word.pos : "",
        meanings: word.meanings ? word.meanings : "",
        antonyms: matchingThesaurus[word.word].antonyms,
        synonyms: matchingThesaurus[word.word].synonyms,
      };
      thesaurusInserted.push(insertedObject);
    } else {
      thesaurusInserted.push(word);
    }
  });
  wordList = thesaurusInserted;
  return wordList;
}

function insertHyp() {
  const hyp = makeHyper();

  const hypWords = hyp.map((object) =>
    Object.keys(object)[0].toLowerCase().trim()
  );

  const hypInserted = [];

  wordList.forEach((word) => {
    const hypIndex = hypWords.indexOf(word.word.toLowerCase().trim());

    if (hypIndex !== -1) {
      const matchingHyp = hyp[hypIndex];

      const insertedObject = {
        word: word.word,
        length: word.length,
        count: word.count,
        pos: word.pos,
        meanings: word.meanings,
        antonyms: word.antonyms,
        synonyms: word.synonyms,
        hypernyms: matchingHyp[word.word].hypernyms,
        hyponyms: matchingHyp[word.word].hyponyms,
      };
      hypInserted.push(insertedObject);
    } else {
      hypInserted.push(word);
    }
  });
  wordList = hypInserted;
  return wordList;
}

function singleWord(word) {
  const splitString = word.split(" ");
  if (splitString.length === 1) {
    return true;
  }
  return false;
}

function removeNonSingles() {
  const singles = wordList.filter((object) => singleWord(object.word));
  wordList = singles;
}

function mergeData() {
  insertTypes();
  insertThesaurus();
  insertHyp();
  removeNonSingles();

  fs.writeFile(
    "../data/finalData.json",
    JSON.stringify(wordList, null, 2),
    (err) => {
      if (err) throw err;
      console.log("Saved wordList.json", wordList.length);
    }
  );
}
module.exports = mergeData;
