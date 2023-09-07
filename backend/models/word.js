const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
  word: { type: String, required: true },
  count: { type: Number, required: true },
});

module.exports = mongoose.model('Word', wordSchema);
