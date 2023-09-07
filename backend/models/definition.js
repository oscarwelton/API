const mongoose = require('mongoose');

const definitionSchema = new mongoose.Schema({
  definition: { type: String, required: true },
});

module.exports = mongoose.model('Definitions', definitionSchema);
