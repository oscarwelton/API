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

const results = [];

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
  if (word.endsWith("s")) {
    const singular = word.slice(0, -1);
    if (dictionary.check(singular) || realWord.check(singular)) {
      return singular;
    } else if (dictionary.check(word) || realWord.check(word)) {
      return word;
    } else {
      return false;
    }
  } else if (dictionary.check(word) || realWord.check(word)) {
    return word;
  }
}

function wordList() {
  fs.createReadStream("../data/CSV/word-list.csv")
    .pipe(csv())
    .on("data", async (data) => {
      const word = data.word.toLowerCase().trim();
      const response = await dictionarySearch(word);

      if (response) {
        results.push({
          word: response,
          length: response.length,
          count: data.count,
         });
      } else {
        console.log("Not a word:", word);
      }
    })
    .on("end", () => {
      fs.writeFile(
        "../data/hello.json",
        JSON.stringify(results, null, 2),
        (err) => {
          if (err) throw err;
        }
      );
      console.log("Saved word-list.json");
    });
}

function filterJSON(array, path) {
  const words = require(`../data/hello.json`);
  const list = words.map((object) => object.word.toLowerCase().trim());

  let filterData = [];

  array.filter((item) => {
    if (item.word) {
      const word = item.word.toLowerCase().trim();
      const index = list.indexOf(word);
      if (index !== -1) {
        filterData.push(item);
      }
    }
  });

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

// wordList();
// convertToJSON();
mergeData();
