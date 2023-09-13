const mongoose = require("mongoose");

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const wordSchema = new mongoose.Schema({
  word: { type: String, required: true },
  length: { type: Number, required: true },
  count: { type: Number, required: true },
  pos: { type: String, required: false },
  meanings: { type: [String], required: false },
  synonyms: { type: [String], required: false },
  antonyms: { type: [String], required: false },
  hypernyms: { type: [String], required: false },
  hyponyms: { type: [String], required: false },
});

module.exports = mongoose.model("Word", wordSchema);
