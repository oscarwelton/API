const fs = require("fs");
const csv = require("csv-parser");
const results = [];
const isWord = require("is-word");

const combineData = require("./tidyData.js");

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

var englishWords = isWord("british-english");

async function wordList() {
  fs.createReadStream("../data/CSV/word-list.csv")
    .pipe(csv())
    .on("data", async (data) => {
      if (englishWords.check(data.word)) {
        results.push({
          word: data.word,
          length: data.length,
        });
      }
    })
    .on("end", () => {
      fs.writeFile(
        "./data/word-list.json",
        JSON.stringify(results.slice(0, 50000), null, 2),
        (err) => {
          if (err) throw err;
          console.log("The file was saved!");
        }
      );
    });
}

// wordList();

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

function filterJSON(array, path) {
  const words = require("../data/JSON/word-list.json");
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
      console.log("The file was saved!");
    }
  );
}

convertToJSON();
