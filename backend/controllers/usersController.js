const User = require("../models/User.js");
const dotenv = require("dotenv");
dotenv.config();
const sendEmail = require("../helpers/validateEmail.js");

function generateApiKey() {
  return Math.random().toString(36).substr(2, 10);
}

function generateToken() {
  return Math.random().toString(36).substr(2, 10);
}
class UserManager {
  static async addUser(email) {
    const user = new User({
      email,
      apiKey: '',
      token: generateToken(),
      verified: false,
    });
    await user.save();
    return user;
  }

  static async findUserWithEmail(email) {
    return User.find({ email });
  }

  static async findUserWithToken(token) {
    return User.find({ token });
  }

  static async sendVerificationEmail(email) {
    const user = await User.findOne({ email });
    if (user) {
      const url = `http://localhost:3000/verify/${user.token}`;
      sendEmail(user.email, url);
    }
  }

  static async verifyUser(token) {
    const user = await User.findOne({ token });
    if (user) {
      user.verified = true;
      user.apiKey = generateApiKey();
      await user.save();
    }
    return user;
  }
}

module.exports = UserManager;
