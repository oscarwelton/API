function combineAdjectives(data) {
  let combinedEntries = {};

  data.forEach((entry) => {
    let word = entry.word;
    if (combinedEntries[word]) {
      combinedEntries[word].meanings.push({
        definition: entry.definition,
        example: entry["example 1"],
      });
    } else {
      combinedEntries[word] = {
        word: word.toLowerCase().trim(),
        pos: "adjective",
        meanings: [
          {
            definition: entry.definition,
            example: entry["example 1"],
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
    let word = entry.word;

    if (combinedEntries[word]) {
      combinedEntries[word].meanings.push({
        definition: entry.definition,
        example: entry.example,
      });
    } else {
      combinedEntries[word] = {
        word: word.toLowerCase().trim(),
        pos: "adverb",
        meanings: [
          {
            definition: entry.definition,
            example: entry.example,
          },
        ],
      };
    }
  });

  let combinedArray = Object.values(combinedEntries);
  return combinedArray;
}

function combineHypernyms(data) {
  let combinedEntries = {};

  data.forEach((entry) => {
    const string = entry.hypernyms.replace(/;/g, "|");
    const array = [...new Set(string.split("|"))];

    let word = entry.word;
    if (!combinedEntries[word]) {
      combinedEntries[word] = {
        word: word.toLowerCase().trim(),
        pos: entry.pos,
        hypernyms: array,
      };
    }
  });

  let combinedArray = Object.values(combinedEntries);
  return combinedArray;
}

function combineHyponyms(data) {
  let combinedEntries = {};

  data.forEach((entry) => {
    const string = entry.hyponyms.replace(/;/g, "|");
    const array = [...new Set(string.split("|"))];

    let word = entry.word;
    if (!combinedEntries[word]) {
      combinedEntries[word] = {
        word: word.toLowerCase().trim(),
        pos: entry.pos,
        hyponyms: array,
      };
    }
  });

  let combinedArray = Object.values(combinedEntries);
  return combinedArray;
}

function combineAntonyms(data) {
  let combinedEntries = {};

  data.forEach((entry) => {
    const string = entry.antonyms.replace(/;/g, "|");
    const array = [...new Set(string.split("|"))];

    let word = entry.word;
    if (!combinedEntries[word]) {
      combinedEntries[word] = {
        word: word.toLowerCase().trim(),
        pos: entry.pos,
        antonyms: array,
      };
    }
  });

  let combinedArray = Object.values(combinedEntries);
  return combinedArray;
}

function combineSynonyms(data) {
  let combinedEntries = {};

  data.forEach((entry) => {
    const string = entry.synonyms.replace(/;/g, "|");
    const array = [...new Set(string.split("|"))];

    let word = entry.word;

    if (!combinedEntries[word]) {
      combinedEntries[word] = {
        word: word.toLowerCase().trim(),
        pos: entry.pos,
        synonyms: array,
      };
    }
  });

  let combinedArray = Object.values(combinedEntries);
  return combinedArray;
}
function combineVerbs(data) {
  let combinedEntries = {};

  data.forEach((entry) => {
    let word = entry.word;

    if (combinedEntries[word]) {
      combinedEntries[word].meanings.push({
        definition: entry.definition,
        example: entry["example 1"],
      });
    } else {
      combinedEntries[word] = {
        word: word.toLowerCase().trim(),
        pos: "verb",
        meanings: [
          {
            definition: entry.definition,
            example: entry["example 1"],
          },
        ],
      };
    }
  });

  let combinedArray = Object.values(combinedEntries);
  return combinedArray;
}

function combineNouns(data) {
  let combinedEntries = {};

  data.forEach((entry) => {
    let word = entry.word;

    if (combinedEntries[word]) {
      combinedEntries[word].meanings.push({
        definition: entry.definition,
      });
    } else {
      combinedEntries[word] = {
        word: word.toLowerCase().trim(),
        pos: "noun",
        meanings: [
          {
            definition: entry.definition,
          },
        ],
      };
    }
  });

  let combinedArray = Object.values(combinedEntries);
  return combinedArray;
}

module.exports = {
  combineNouns,
  combineVerbs,
  combineSynonyms,
  combineHyponyms,
  combineHypernyms,
  combineAntonyms,
  combineAdverbs,
  combineAdjectives,
};
