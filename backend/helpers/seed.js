const fs = require("fs");
const Mongoose = require("mongoose");
const {
  wordA,
  wordB,
  wordC,
  wordD,
  wordE,
  wordF,
  wordG,
  wordH,
  wordI,
  wordJ,
  wordK,
  wordL,
  wordM,
  wordN,
  wordO,
  wordP,
  wordQ,
  wordR,
  wordS,
  wordT,
  wordU,
  wordV,
  wordW,
  wordX,
  wordY,
  wordZ,
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
      await wordA.create(word);
      break;
    case "b":
      await wordB.create(word);
      break;
    case "c":
      await wordC.create(word);
      break;
    case "d":
      await wordD.create(word);
      break;
    case "e":
      await wordE.create(word);
      break;
    case "f":
      await wordF.create(word);
      break;
    case "g":
      await wordG.create(word);
      break;
    case "h":
      await wordH.create(word);
      break;
    case "i":
      await wordI.create(word);
      break;
    case "j":
      await wordJ.create(word);
      break;
    case "k":
      await wordK.create(word);
      break;
    case "l":
      await wordL.create(word);
      break;
    case "m":
      await wordM.create(word);
      break;
    case "n":
      await wordN.create(word);
      break;
    case "o":
      await wordO.create(word);
      break;
    case "p":
      await wordP.create(word);
      break;
    case "q":
      await wordQ.create(word);
      break;
    case "r":
      await wordR.create(word);
      break;
    case "s":
      await wordS.create(word);
      break;
    case "t":
      await wordT.create(word);
      break;
    case "u":
      await wordU.create(word);
      break;
    case "v":
      await wordV.create(word);
      break;
    case "w":
      await wordW.create(word);
      break;
    case "x":
      await wordX.create(word);
      break;
    case "y":
      await wordY.create(word);
      break;
    case "z":
      await wordZ.create(word);
      break;
    default:
      console.log("Error");
  }
}

connect.then((db) => async () => {
  console.log("Connected correctly to server");

  for (let i = 0; i < words.length; i++) {
    try {
      const word = words[i];
      word.length = word.word.length;
      const firstLetter = word.word[0].toLowerCase();
      await modelSelector(firstLetter, word);
    } catch (err) {
      console.log(err);
    }
  }

  Mongoose.connection.close();
});
