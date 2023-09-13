const fs = require("fs");
const csv = require("csv-parser");
const isWord = require("is-word");
var realWord = isWord("american-english");

const checkWord = require("check-if-word"),
  dictionary = checkWord("en");

const combineData = require("./combineData.js");

const {
  combineNouns,
  combineVerbs,
  combineSynonyms,
  combineHyponyms,
  combineHypernyms,
  combineAntonyms,
  combineAdverbs,
  combineAdjectives,
} = combineData;

const mergeData = require("./mergeData.js");

// const results = [];

const csvPaths = {
  adverbs: "../data/CSV/WordnetAdverbs.csv",
  nouns: "../data/CSV/WordnetNouns.csv",
  adjectives: "../data/CSV/WordnetAdjectives.csv",
  verbs: "../data/CSV/WordnetVerbs.csv",
  synonyms: "../data/CSV/WordnetSynonyms.csv",
  antonyms: "../data/CSV/WordnetAntonyms.csv",
  hyponyms: "../data/CSV/WordnetHyponyms.csv",
  hypernyms: "../data/CSV/WordnetHypernyms.csv",
};

function dictionarySearch(word) {
  const isPlural = word.endsWith("s");
  const singular = isPlural ? word.slice(0, -1) : word;

  if (dictionary.check(singular) || realWord.check(singular)) {
    return singular;
  } else if (dictionary.check(word) || realWord.check(word)) {
    return word;
  }
}

function filterJSON(array, path) {
  let filterData = array;

  let formattedData = [];

  switch (path) {
    case "nouns":
      formattedData = combineNouns(filterData);
      break;
    case "verbs":
      formattedData = combineVerbs(filterData);
      break;
    case "adjectives":
      formattedData = combineAdjectives(filterData);
      break;
    case "adverbs":
      formattedData = combineAdverbs(filterData);
      break;
    case "antonyms":
      formattedData = combineAntonyms(filterData);
      break;
    case "synonyms":
      formattedData = combineSynonyms(filterData);
      break;
    case "hyponyms":
      formattedData = combineHyponyms(filterData);
      break;
    case "hypernyms":
      formattedData = combineHypernyms(filterData);
      break;
    default:
      console.log("No match");
  }

  const filteredJSONPath = `../data/JSON/${path}.json`;

  fs.writeFile(
    filteredJSONPath,
    JSON.stringify(formattedData, null, 2),
    (err) => {
      if (err) throw err;
      console.log(`Saved ${path}.json`, formattedData.length);
    }
  );
}

function convertToJSON() {
  Object.keys(csvPaths).forEach((path) => {
    const jsonArray = [];
    fs.createReadStream(csvPaths[path])
      .pipe(csv())
      .on("data", async (data) => {
        jsonArray.push(data);
      })
      .on("end", () => {
        filterJSON(jsonArray, path);
      });
  });
}

convertToJSON();
mergeData();
