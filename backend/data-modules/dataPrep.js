const fs = require("fs");
const csv = require("csv-parser");
const results = [];
const isWord = require("is-word");

var englishWords = isWord("british-english");

async function wordList() {
  fs.createReadStream("./data/csv/word-list.csv")
    .pipe(csv())
    .on("data", async (data) => {
      if (englishWords.check(data.word)) {
        results.push({
          word: data.word,
          count: data.count,
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
  adjectives: "./data/csv/WordnetAdjectives.csv",
  adverbs: "./data/csv/WordnetAdverbs.csv",
  nouns: "./data/csv/WordnetNouns.csv",
  verbs: "./data/csv/WordnetVerbs.csv",
  synonyms: "./data/csv/WordnetSynonyms.csv",
  antonyms: "./data/csv/WordnetAntonyms.csv",
  hyponyms: "./data/csv/WordnetHyponyms.csv",
  hypernyms: "./data/csv/WordnetHypernyms.csv",
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
  const words = require("./data/rawJSON/word-list.json");
  const list = words.map((object) => object.word.toLowerCase().trim());

  let filterData = [];

  array.filter((item) => {
    if (item.Word) {
      const word = item.Word.toLowerCase().trim();
      const index = list.indexOf(word);
      if (index !== -1) {
        filterData.push(item);
      }
    }
    if (item.lemma) {
      const lemma = item.lemma.toLowerCase().trim();
      const index = list.indexOf(lemma);
      if (index !== -1) {
        filterData.push(item);
      }
    }
  });

  const filteredJSONPath = `./data/test/${path}.json`;

  fs.writeFile(filteredJSONPath, JSON.stringify(filterData, null, 2), (err) => {
    if (err) throw err;
    console.log("The file was saved!");
  });
}

// convertToJSON();
