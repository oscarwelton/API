const fs = require("fs");
const wordList = require("../data/JSON/word-list.json");
const adjectives = require("../data/JSON/adjectives.json");

console.log(Object.keys(wordList))


// function mergeObjectsByKey(arr1, arr2, key) {
//   const map = new Map(arr1.map(item => [item[key], item]));

//   for (const item of arr2) {
//     const value = item[key];
//     if (map.has(value)) {
//       Object.assign(map.get(value), item);
//     }
//   }

//   return Array.from(map.values());
// }

// const mergedData = mergeObjectsByKey(wordList, adjectives, 'aggressive');
// const mergedJSON = JSON.stringify(mergedData);

// fs.writeFile("../data/JSON/merged.json", mergedJSON, "utf8", function (err) {
//   if (err) {
//     console.log("An error occurred while writing JSON Object to File.");
//     return console.log(err);
//   }
//   console.log("JSON file has been saved.");
// });
