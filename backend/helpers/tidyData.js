function combineAdjectives(data) {

  let combinedEntries = {};
  data.forEach((entry) => {
    let word = entry.Word;

    if (combinedEntries[word]) {
      combinedEntries[word].Meanings.push({
        Definition: entry.Definition,
        Examples: [
          entry["Example 1"],
          entry["Example 2"],
          entry["Example 3"],
          entry["Example 4"],
        ],
      });
    } else {
      combinedEntries[word] = {
        Word: word,
        POS: "adjective",
        Length: entry.Length,
        Meanings: [
          {
            Definition: entry.Definition,
            Examples: [
              entry["Example 1"],
              entry["Example 2"],
              entry["Example 3"],
              entry["Example 4"],
            ],
          },
        ],
      };
    }
  });

  let combinedArray = Object.values(combinedEntries);
  return combinedArray;
}

function combineAdverbs(data) {
  let combinedEntries = {};

  data.forEach((entry) => {
    let word = entry.Word;

    if (combinedEntries[word]) {
      combinedEntries[word].Meanings.push({
        Definition: entry.Definition,
        Example: entry.Example,
      });
    } else {
      combinedEntries[word] = {
        Word: word,
        POS: "adverb",
        Length: entry.Length,
        Meanings: [
          {
            Definition: entry.Definition,
            Example: entry.Example,
          },
        ],
      };
    }
  });

  let combinedArray = Object.values(combinedEntries);
  return combinedArray;
}

function combineAntonyms(data) {
 let combinedEntries = {};

  data.forEach((entry) => {
    let word = entry.Word;

    if (combinedEntries[word]) {
      combinedEntries[word].POS.push({
        POS: entry.POS,
        Antonyms: entry.Antonyms,
      });
    } else {
      combinedEntries[word] = {
        Word: word,
        Length: entry.Length,
        POS: [
          {
            POS: entry.POS,
            Antonyms: entry.Antonyms,
          },
        ],
      };
    }
  });

  let combinedArray = Object.values(combinedEntries);
  return combinedArray
}


function combineHypernyms(data) {
 let combinedEntries = {};

  data.forEach((entry) => {
    let word = entry.Word;

    if (combinedEntries[word]) {
      if (!combinedEntries[word].POS) {
        combinedEntries[word].POS = [];
      }
      combinedEntries[word].POS.push({
        POS: entry.POS,
        Hypernyms: entry.Hypernyms,
      });
    } else {
      combinedEntries[word] = {
        Word: word,
        Length: entry.Length,
        POS: [
          {
            POS: entry.POS,
            Hypernyms: entry.Hypernyms,
          },
        ],
      };
    }
  });

  let combinedArray = Object.values(combinedEntries);
  return combinedArray;
}

function combineHyponyms(data) {
  let combinedEntries = {};

  data.forEach((entry) => {
    let word = entry.Word;

    if (combinedEntries[word]) {
      if (!combinedEntries[word].POS) {
        combinedEntries[word].POS = [];
      }
      combinedEntries[word].POS.push({
        POS: entry.POS,
        Hyponyms: entry.Hyponyms,
      });
    } else {
      combinedEntries[word] = {
        Word: word,
        Length: entry.Length,
        POS: [
          {
            POS: entry.POS,
            Hyponyms: entry.Hyponyms,
          },
        ],
      };
    }
  });

  let combinedArray = Object.values(combinedEntries);
  return combinedArray;
}

function combineSynonyms(data) {
  let combinedEntries = {};

  data.forEach((entry) => {
    let word = entry.Word;

    if (combinedEntries[word]) {
      if (!combinedEntries[word].POS) {
        combinedEntries[word].POS = [];
      }
      combinedEntries[word].POS.push({
        POS: entry.POS,
        Synonyms: entry.Synonyms,
      });
    } else {
      combinedEntries[word] = {
        Word: word,
        Length: entry.Length,
        POS: [
          {
            POS: entry.POS,
            Synonyms: entry.Synonyms,
          },
        ],
      };
    }
  });

  let combinedArray = Object.values(combinedEntries);
  console.log(combinedArray);
  return combinedArray;
}

function combineVerbs(data) {
  let combinedEntries = {};

  data.forEach((entry) => {
    let word = entry.Word;

    if (combinedEntries[word]) {
      let existingSense = combinedEntries[word].Meanings.find(
        (sense) => sense.Meanings === entry.Meanings
      );
      if (existingSense) {
        existingSense.Examples.push({
          Example: entry["Example 1"],
        });
        existingSense.Examples.push({
          Example: entry["Example 2"],
        });
      } else {
        combinedEntries[word].Meanings.push({
          Meanings: entry.Meanings,
          Definition: entry.Definition,
          Examples: [
            { Example: entry["Example 1"] },
            { Example: entry["Example 2"] },
          ],
        });
      }
    } else {
      combinedEntries[word] = {
        Word: word,
        POS: "verb",
        Length: entry.Length,
        Meanings: [
          {
            Meanings: entry.Meanings,
            Definition: entry.Definition,
            Examples: [
              { Example: entry["Example 1"] },
              { Example: entry["Example 2"] },
            ],
          },
        ],
      };
    }
  });

  let combinedArray = Object.values(combinedEntries);
  return combinedArray
}

function combineNouns(data) {

  let combinedEntries = {};

  data.forEach(entry => {
    let word = entry.Word;

    if (combinedEntries[word]) {
      combinedEntries[word].Definitions.push(entry.Definition);
    } else {
      combinedEntries[word] = {
        Word: word,
        Length: entry.Length,
        POS: entry.POS,
        Definitions: [entry.Definition]
      };
    }
  });

  let combinedArray = Object.values(combinedEntries);
  return combinedArray
}

module.exports = {
  combineNouns,
  combineVerbs,
  combineSynonyms,
  combineHyponyms,
  combineHypernyms,
  combineAntonyms,
  combineAdverbs,
  combineAdjectives
};
