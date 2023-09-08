function combineAdjectives(data) {
  let combinedEntries = {};
  data.forEach((entry) => {
    let word = entry.word;

    if (combinedEntries[word]) {
      combinedEntries[word].meanings.push({
        definition: entry.definition,
        examples: [
          entry["example 1"],
          entry["example 2"],
          entry["example 3"],
          entry["example 4"],
        ],
      });
    } else {
      combinedEntries[word] = {
        word: word,
        pos: "adjective",
        length: entry.length,
        meanings: [
          {
            definition: entry.definition,
            examples: [
              entry["example 1"],
              entry["example 2"],
              entry["example 3"],
              entry["example 4"],
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
    let word = entry.word;

    if (combinedEntries[word]) {
      combinedEntries[word].meanings.push({
        definition: entry.definition,
        example: entry.example,
      });
    } else {
      combinedEntries[word] = {
        word: word,
        pos: "adverb",
        length: entry.length,
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
        word: word,
        length: entry.length,
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
        word: word,
        length: entry.length,
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
        word: word,
        length: entry.length,
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
        word: word,
        length: entry.length,
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
      let existingSense = combinedEntries[word].meanings.find(
        (sense) => sense.meanings === entry.meanings
      );
      if (existingSense) {
        existingSense.examples.push({
          example: entry["example 1"],
        });
        existingSense.examples.push({
          example: entry["example 2"],
        });
      } else {
        combinedEntries[word].meanings.push({
          meanings: entry.meanings,
          definition: entry.definition,
          examples: [
            { example: entry["example 1"] },
            { example: entry["example 2"] },
          ],
        });
      }
    } else {
      combinedEntries[word] = {
        word: word,
        pos: "verb",
        length: entry.length,
        meanings: [
          {
            meanings: entry.meanings,
            definition: entry.definition,
            examples: [
              { example: entry["example 1"] },
              { example: entry["example 2"] },
            ],
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
        word: word,
        length: entry.length,
        pos: entry.pos,
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
