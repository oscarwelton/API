const Word = require('../models/Word.js');

function findWord(query) {
  return Word.find(query);
}

module.exports = {
  findWord
};
