const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: {
      validator: async function (email) {
        const user = await this.constructor.findOne({ email });
        return !user;
      },
      message: (props) => `Email ${props.value} is already taken!`,
    },
  },
  verified: { type: Boolean, required: true, default: false },
  token: { type: String, required: true },
  apiKey: { type: String, required: false },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
