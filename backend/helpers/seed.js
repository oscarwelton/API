const fs = require("fs");
const Mongoose = require("mongoose");
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
} = require("../models/word");
const words = JSON.parse(fs.readFileSync("../data/finalData.json"));

const dotenv = require("dotenv");
dotenv.config();

const connect = Mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function modelSelector(firstLetter, word) {
  switch (firstLetter) {
    case "a":
      await Aword.create(word);
      break;
    case "b":
      await Bword.create(word);
      break;
    case "c":
      await Cword.create(word);
      break;
    case "d":
      await Dword.create(word);
      break;
    case "e":
      await Eword.create(word);
      break;
    case "f":
      await Fword.create(word);
      break;
    case "g":
      await Gword.create(word);
      break;
    case "h":
      await Hword.create(word);
      break;
    case "i":
      await Iword.create(word);
      break;
    case "j":
      await Jword.create(word);
      break;
    case "k":
      await Kword.create(word);
      break;
    case "l":
      await Lword.create(word);
      break;
    case "m":
      await Mword.create(word);
      break;
    case "n":
      await Nword.create(word);
      break;
    case "o":
      await Oword.create(word);
      break;
    case "p":
      await Pword.create(word);
      break;
    case "q":
      await Qword.create(word);
      break;
    case "r":
      await Rword.create(word);
      break;
    case "s":
      await Sword.create(word);
      break;
    case "t":
      await Tword.create(word);
      break;
    case "u":
      await Uword.create(word);
      break;
    case "v":
      await Vword.create(word);
      break;
    case "w":
      await Wword.create(word);
      break;
    case "x":
      await Xword.create(word);
      break;
    case "y":
      await Yword.create(word);
      break;
    case "z":
      await Zword.create(word);
      break;
    default:
      console.log("Error inserting word: ", word.word, " into database.");
  }
}

connect.then(async (db) => {
  console.log("Connected correctly to server");

  for (let i = 0; i < words.length; i++) {
    try {
      const word = words[i];
      word.length = word.word.length;
      const firstLetter = word.word[0].toLowerCase();
      await modelSelector(firstLetter, word);
      console.log("Inserted word: ", word.word);
    } catch (err) {
      console.log(err);
    }
  }

  Mongoose.connection.close();
});
