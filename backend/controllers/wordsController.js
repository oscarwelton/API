const {
  Aword,
  Bword,
  Cword,
  Dword,
  Eword,
  Fword,
  Gword,
  Hword,
  Iword,
  Jword,
  Kword,
  Lword,
  Mword,
  Nword,
  Oword,
  Pword,
  Qword,
  Rword,
  Sword,
  Tword,
  Uword,
  Vword,
  Wword,
  Xword,
  Yword,
  Zword,
} = require("../models/Word.js");

async function findWord(query) {
  const firstLetter = query.query[0];
  let result = {};

  switch (firstLetter) {
    case "a":
      result = await Aword.find({ word: query.query });
      break;
    case "b":
      result = await Bword.find({ word: query.query });
      break;
    case "c":
      result = await Cword.find({ word: query.query });
      break;
    case "d":
      result = await Dword.find({ word: query.query });
      break;
    case "e":
      result = await Eword.find({ word: query.query });
      break;
    case "f":
      result = await Fword.find({ word: query.query });
      break;
    case "g":
      result = await Gword.find({ word: query.query });
      break;
    case "h":
      result = await Hword.find({ word: query.query });
      break;
    case "i":
      result = await Iword.find({ word: query.query });
      break;
    case "j":
      result = await Jword.find({ word: query.query });
      break;
    case "k":
      result = await Kword.find({ word: query.query });
      break;
    case "l":
      result = await Lword.find({ word: query.query });
      break;
    case "m":
      result = await Mword.find({ word: query.query });
      break;
    case "n":
      result = await Nword.find({ word: query.query });
      break;
    case "o":
      result = await Oword.find({ word: query.query });
      break;
    case "p":
      result = await Pword.find({ word: query.query });
      break;
    case "q":
      result = await Qword.find({ word: query.query });
      break;
    case "r":
      result = await Rword.find({ word: query.query });
      break;
    case "s":
      result = await Sword.find({ word: query.query });
      break;
    case "t":
      result = await Tword.find({ word: query.query });
      break;
    case "u":
      result = await Uword.find({ word: query.query });
      break;
    case "v":
      result = await Vword.find({ word: query.query });
      break;
    case "w":
      result = await Wword.find({ word: query.query });
      break;
    case "x":
      result = await Xword.find({ word: query.query });
      break;
    case "y":
      result = await Yword.find({ word: query.query });
      break;
    case "z":
      result = await Zword.find({ word: query.query });
      break;
    default:
      result = {};
  }

  result = result[0];

  result = {
    word: result.word,
    length: result.length,
    definition: result.definition,
    pos: result.pos,
    meanings: result.meanings,
    synonyms: result.synonyms,
    antonyms: result.antonyms,
    hypernyms: result.hypernyms,
    hyponyms: result.hyponyms,
  }

  return result;
}

module.exports = {
  findWord,
};
