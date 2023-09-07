const fs = require("fs");

function combineAdjectives() {
  const adjectives = require("./data/JSON/adjectives.json");

  let combinedEntries = {};
  adjectives.forEach((entry) => {
    let word = entry.Word;

    if (combinedEntries[word]) {
      combinedEntries[word].Senses.push({
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
        Count: entry.Count,
        Senses: [
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
  console.log(combinedArray);
}

function combineAdverbs() {
  const adverbs = require("./data/JSON/adverbs.json");
  let combinedEntries = {};

  adverbs.forEach((entry) => {
    let word = entry.Word;

    if (combinedEntries[word]) {
      combinedEntries[word].Senses.push({
        Definition: entry.Definition,
        Example: entry.Example,
      });
    } else {
      combinedEntries[word] = {
        Word: word,
        Count: entry.Count,
        Senses: [
          {
            Definition: entry.Definition,
            Example: entry.Example,
          },
        ],
      };
    }
  });

  let combinedArray = Object.values(combinedEntries);
  console.log(combinedArray);
}

function combineAntonyms() {
  const antonyms = require("./data/JSON/antonyms.json");
  let combinedEntries = {};

  antonyms.forEach((entry) => {
    let word = entry.Word;

    if (combinedEntries[word]) {
      combinedEntries[word].POS.push({
        POS: entry.POS,
        Antonyms: entry.Antonyms,
      });
    } else {
      combinedEntries[word] = {
        Word: word,
        Count: entry.Count,
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
  console.log(combinedArray);
}

function combineHypernyms() {
  const hypernyms = require("./data/JSON/hypernyms.json");
  let combinedEntries = {};

  hypernyms.forEach((entry) => {
    let word = entry.lemma;

    if (combinedEntries[word]) {
      if (!combinedEntries[word].part_of_speech) {
        combinedEntries[word].part_of_speech = [];
      }
      combinedEntries[word].part_of_speech.push({
        part_of_speech: entry.part_of_speech,
        hypernyms: entry.hypernyms,
      });
    } else {
      combinedEntries[word] = {
        lemma: word,
        Count: entry.Count,
        part_of_speech: [
          {
            part_of_speech: entry.part_of_speech,
            hypernyms: entry.hypernyms,
          },
        ],
      };
    }
  });

  let combinedArray = Object.values(combinedEntries);
  console.log(combinedArray);
}

function combineHyponyms() {
  const hyponyms = require("./data/JSON/hyponyms.json");
  let combinedEntries = {};

  hyponyms.forEach((entry) => {
    let word = entry.lemma;

    if (combinedEntries[word]) {
      if (!combinedEntries[word].part_of_speech) {
        combinedEntries[word].part_of_speech = [];
      }
      combinedEntries[word].part_of_speech.push({
        part_of_speech: entry.part_of_speech,
        hypernyms: entry.hypernyms,
      });
    } else {
      combinedEntries[word] = {
        lemma: word,
        Count: entry.Count,
        part_of_speech: [
          {
            part_of_speech: entry.part_of_speech,
            hypernyms: entry.hypernyms,
          },
        ],
      };
    }
  });

  let combinedArray = Object.values(combinedEntries);
  console.log(combinedArray);
}

function combineSynonyms() {
  const synonyms = require("./data/JSON/synonyms.json");
  let combinedEntries = {};

  synonyms.forEach((entry) => {
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
        Count: entry.Count,
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
}

function combineVerbs() {
  const verbs = require("./data/JSON/verbs.json");
  let combinedEntries = {};

  verbs.forEach((entry) => {
    let word = entry.Word;

    if (combinedEntries[word]) {
      let existingSense = combinedEntries[word].Senses.find(
        (sense) => sense.Sense === entry.Sense
      );
      if (existingSense) {
        existingSense.Examples.push({
          Example: entry["Example 1"],
        });
        existingSense.Examples.push({
          Example: entry["Example 2"],
        });
      } else {
        combinedEntries[word].Senses.push({
          Sense: entry.Sense,
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
        Count: entry.Count,
        Senses: [
          {
            Sense: entry.Sense,
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
  console.log(combinedArray);
}

function combineNouns() {
  const nouns = require("./data/JSON/nouns.json");

  let combinedEntries = {};

  nouns.forEach(entry => {
    let word = entry.Word;

    if (combinedEntries[word]) {
      combinedEntries[word].Definitions.push(entry.Definition);
    } else {
      combinedEntries[word] = {
        Word: word,
        Count: entry.Count,
        POS: entry.POS,
        Definitions: [entry.Definition]
      };
    }
  });

  let combinedArray = Object.values(combinedEntries);
  console.log(combinedArray);
}

// combineNouns();
// combineVerbs();
// combineSynonyms();
// combineHyponyms();
// combineHypernyms();
// combineAntonyms();
// combineAdverbs();
// combineAdjectives();
