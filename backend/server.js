const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const UserManager = require("./controllers/usersController.js");
const { findWord } = require("./helpers/db.js");
const User = require("./models/User.js");
const port = 5000;

mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error("MongoDB connection error:", error));
db.once("open", () => console.log("MongoDB connected successfully"));

app.use(express.json());
app.use(cors());

function validateEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}

app.post("/new", async (req, res) => {
  const user = req.body.email;

  if (!validateEmail(user)) {
    return res.status(400).send("Invalid email address");
  }

  const newUser = await UserManager.createUser(user);

  if (newUser) {
    await UserManager.sendVerificationEmail(user);
  }

  res.send("Success");
});

app.get("/api", async (req, res) => {
  let result = await findWord(req.query);
  res.send(result);
});

app.get("/verify/:email/:token", async (req, res) => {
  const email = req.params.email;
  const token = req.params.token;

  await UserManager.verifyUser(email, token);

  res.redirect("http://localhost:3000/documentation");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
