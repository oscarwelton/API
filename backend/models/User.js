const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  verified: { type: Boolean, required: true, default: false },
  token: { type: String, required: true },
  apiKey: { type: String, required: false },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
