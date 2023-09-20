const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  active: { type: Boolean, required: true, default: false },
  apiKey: { type: String, required: false },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
