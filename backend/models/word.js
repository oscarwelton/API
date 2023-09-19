const mongoose = require("mongoose");

const wordSchema = new mongoose.Schema({
  word: { type: String, required: true },
  pos: { type: String, required: false },
  meanings: { type: Array, required: false },
  antonyms: { type: Array, required: false },
  synonyms: { type: Array, required: false },
  hypernyms: { type: Array, required: false },
  hyponyms: { type: Array, required: false },
  length: { type: Number, required: true },
});

const Aword = mongoose.model("Aword", wordSchema);
const Bword = mongoose.model("Bword", wordSchema);
const Cword = mongoose.model("Cword", wordSchema);
const Dword = mongoose.model("Dword", wordSchema);
const Eword = mongoose.model("Eword", wordSchema);
const Fword = mongoose.model("Fword", wordSchema);
const Gword = mongoose.model("Gword", wordSchema);
const Hword = mongoose.model("Hword", wordSchema);
const Iword = mongoose.model("Iword", wordSchema);
const Jword = mongoose.model("Jword", wordSchema);
const Kword = mongoose.model("Kword", wordSchema);
const Lword = mongoose.model("Lword", wordSchema);
const Mword = mongoose.model("Mword", wordSchema);
const Nword = mongoose.model("Nword", wordSchema);
const Oword = mongoose.model("Oword", wordSchema);
const Pword = mongoose.model("Pword", wordSchema);
const Qword = mongoose.model("Qword", wordSchema);
const Rword = mongoose.model("Rword", wordSchema);
const Sword = mongoose.model("Sword", wordSchema);
const Tword = mongoose.model("Tword", wordSchema);
const Uword = mongoose.model("Uword", wordSchema);
const Vword = mongoose.model("Vword", wordSchema);
const Wword = mongoose.model("Wword", wordSchema);
const Xword = mongoose.model("Xword", wordSchema);
const Yword = mongoose.model("Yword", wordSchema);
const Zword = mongoose.model("Zword", wordSchema);

module.exports = {
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
};
