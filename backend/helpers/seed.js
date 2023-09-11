const Mongoose = require("mongoose");
const Word = require("../models/word");
const Thesaurus = require("../models/thesaurus");
const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config();

const connect = Mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const words = JSON.parse(fs.readFileSync("../data/word-list.json"));


connect.then(async (db) => {
  console.log("Connected correctly to server");
  await Word.deleteMany({});

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const newWord = await Word.create(word);

  }


  console.log("Database seeded");
  Mongoose.connection.close();
});
