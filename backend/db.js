const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

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
} = require("./models/Word.js");

mongoose.connect(
  process.env.MONGO,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("error", (error) => console.error("MongoDB connection error:", error));
db.once("open", () => console.log("MongoDB connected successfully"));

function findWord(query) {
  const firstLetter = query.query[0];
  let result = {};

  switch (firstLetter) {
    case "a":
      result = Aword.find({ word: query.query });
      break;
    case "b":
      result = Bword.find({ word: query.query });
      break;
    case "c":
      result = Cword.find({ word: query.query });
      break;
    case "d":
      result = Dword.find({ word: query.query });
      break;
    case "e":
      result = Eword.find({ word: query.query });
      break;
    case "f":
      result = Fword.find({ word: query.query });
      break;
    case "g":
      result = Gword.find({ word: query.query });
      break;
    case "h":
      result = Hword.find({ word: query.query });
      break;
    case "i":
      result = Iword.find({ word: query.query });
      break;
    case "j":
      result = Jword.find({ word: query.query });
      break;
    case "k":
      result = Kword.find({ word: query.query });
      break;
    case "l":
      result = Lword.find({ word: query.query });
      break;
    case "m":
      result = Mword.find({ word: query.query });
      break;
    case "n":
      result = Nword.find({ word: query.query });
      break;
    case "o":
      result = Oword.find({ word: query.query });
      break;
    case "p":
      result = Pword.find({ word: query.query });
      break;
    case "q":
      result = Qword.find({ word: query.query });
      break;
    case "r":
      result = Rword.find({ word: query.query });
      break;
    case "s":
      result = Sword.find({ word: query.query });
      break;
    case "t":
      result = Tword.find({ word: query.query });
      break;
    case "u":
      result = Uword.find({ word: query.query });
      break;
    case "v":
      result = Vword.find({ word: query.query });
      break;
    case "w":
      result = Wword.find({ word: query.query });
      break;
    case "x":
      result = Xword.find({ word: query.query });
      break;
    case "y":
      result = Yword.find({ word: query.query });
      break;
    case "z":
      result = Zword.find({ word: query.query });
      break;
    default:
      result = {};
  }
  return result;
}

module.exports = {
  findWord,
};
