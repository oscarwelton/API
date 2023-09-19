const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
  word: { type: String, required: true },
  length: { type: Number, required: false },
  pos: { type: String, required: false },
  meanings: { type: Array, required: false },
  synonyms: { type: Array, required: false },
  antonyms: { type: Array, required: false },
  hypernyms: { type: Array, required: false },
  hyponyms: { type: Array, required: false },
});

const WordA = mongoose.model('AWord', wordSchema);
const WordB = mongoose.model('BWord', wordSchema);
const WordC = mongoose.model('CWord', wordSchema);
const WordD = mongoose.model('DWord', wordSchema);
const WordE = mongoose.model('EWord', wordSchema);
const WordF = mongoose.model('FWord', wordSchema);
const WordG = mongoose.model('GWord', wordSchema);
const WordH = mongoose.model('HWord', wordSchema);
const WordI = mongoose.model('IWord', wordSchema);
const WordJ = mongoose.model('JWord', wordSchema);
const WordK = mongoose.model('KWord', wordSchema);
const WordL = mongoose.model('LWord', wordSchema);
const WordM = mongoose.model('MWord', wordSchema);
const WordN = mongoose.model('NWord', wordSchema);
const WordO = mongoose.model('OWord', wordSchema);
const WordP = mongoose.model('PWord', wordSchema);
const WordQ = mongoose.model('QWord', wordSchema);
const WordR = mongoose.model('RWord', wordSchema);
const WordS = mongoose.model('SWord', wordSchema);
const WordT = mongoose.model('TWord', wordSchema);
const WordU = mongoose.model('UWord', wordSchema);
const WordV = mongoose.model('VWord', wordSchema);
const WordW = mongoose.model('WWord', wordSchema);
const WordX = mongoose.model('XWord', wordSchema);
const WordY = mongoose.model('YWord', wordSchema);
const WordZ = mongoose.model('ZWord', wordSchema);

module.exports = {
  WordA,
  WordB,
  WordC,
  WordD,
  WordE,
  WordF,
  WordG,
  WordH,
  WordI,
  WordJ,
  WordK,
  WordL,
  WordM,
  WordN,
  WordO,
  WordP,
  WordQ,
  WordR,
  WordS,
  WordT,
  WordU,
  WordV,
  WordW,
  WordX,
  WordY,
  WordZ,
};
