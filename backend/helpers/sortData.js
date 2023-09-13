const fs = require("fs");
const allData = require("../data/allData.json");

const allDataWords = allData.map((object) => object.word.toLowerCase().trim());

const nonSingles = [];

function singleWord(word) {
  const splitString = word.split(" ");
  if (splitString.length === 1) {
    return true;
  }
  nonSingles.push(word);
  return false;
}

function removeNonSingles() {
  const singles = allData.filter((object) => singleWord(object.word));
  return singles;
}

const singleWordsObject = removeNonSingles();
console.log(singleWordsObject, singleWordsObject.length);

fs.writeFile(
  "../data/finalData.json",
  JSON.stringify(singleWordsObject, null, 2),
  (err) => {
    if (err) throw err;
    console.log("Saved allData.json");
  }
);
