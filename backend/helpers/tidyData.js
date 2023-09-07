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

function combineAntonyms(data) {
 let combinedEntries = {};

  data.forEach((entry) => {
    let word = entry.word;

    if (combinedEntries[word]) {
      combinedEntries[word].pos.push({
        pos: entry.pos,
        antonyms: entry.antonyms,
      });
    } else {
      combinedEntries[word] = {
        word: word,
        length: entry.length,
        pos: [
          {
            pos: entry.pos,
            antonyms: entry.antonyms,
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
    let word = entry.word;

    if (combinedEntries[word]) {
      if (!combinedEntries[word].pos) {
        combinedEntries[word].pos = [];
      }
      combinedEntries[word].pos.push({
        pos: entry.pos,
        hypernyms: entry.hypernyms,
      });
    } else {
      combinedEntries[word] = {
        word: word,
        length: entry.length,
        pos: [
          {
            pos: entry.pos,
            hypernyms: entry.hypernyms,
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
    let word = entry.word;

    if (combinedEntries[word]) {
      if (!combinedEntries[word].pos) {
        combinedEntries[word].pos = [];
      }
      combinedEntries[word].pos.push({
        pos: entry.pos,
        hyponyms: entry.hyponyms,
      });
    } else {
      combinedEntries[word] = {
        word: word,
        length: entry.length,
        pos: [
          {
            pos: entry.pos,
            hyponyms: entry.hyponyms,
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
    let word = entry.word;

    if (combinedEntries[word]) {
      if (!combinedEntries[word].pos) {
        combinedEntries[word].pos = [];
      }
      combinedEntries[word].pos.push({
        pos: entry.pos,
        synonyms: entry.synonyms,
      });
    } else {
      combinedEntries[word] = {
        word: word,
        length: entry.length,
        pos: [
          {
            pos: entry.pos,
            synonyms: entry.synonyms,
          },
        ],
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
  return combinedArray
}

function combineNouns(data) {

  let combinedEntries = {};

  data.forEach(entry => {
    let word = entry.word;

    if (combinedEntries[word]) {
      combinedEntries[word].definitions.push(entry.definition);
    } else {
      combinedEntries[word] = {
        word: word,
        length: entry.length,
        pos: entry.pos,
        definitions: [entry.definition]
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
