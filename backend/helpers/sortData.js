const fs = require("fs");
const allData = require("../data/allData.json");

const allDataWords = allData.map((object) => object.word.toLowerCase().trim());

const pattern = /^\w+$/;

const finalData = [];

function testWord(word) {
  if (pattern.test(word)) {
    return true;
  } else {
    return false;
  }
}

console.log(allDataWords.length);
