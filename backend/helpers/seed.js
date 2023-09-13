const fs = require("fs");
const Mongoose = require("mongoose");
const Word = require("../models/word");
const dotenv = require("dotenv");

dotenv.config();

const connect = Mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const words = JSON.parse(fs.readFileSync("../data/all-data.json"));

connect.then(async (db) => {
  console.log("Connected correctly to server");
  await Word.deleteMany({});

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    await Word.create(word);
  }

  Mongoose.connection.close();
});
