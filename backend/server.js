const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
var RateLimit = require("express-rate-limit");
var MongoStore = require("rate-limit-mongo");
dotenv.config();

const UserManager = require("./controllers/usersController.js");
const { findWord } = require("./helpers/db.js");
const port = 5000;

const limiter = RateLimit({
  store: new MongoStore({
    uri: process.env.MONGO,
    expireTimeMs: 60 * 1000,
    errorHandler: console.error.bind(null, "rate-limit-mongo"),
  }),
  max: 10,
  keyGenerator: function (req) {
    return req.params.apiKey;
  },
  handle: function (req, res) {
    res.status(429).send({
      error: "Too many requests from this API key, please try again later",
      status: 429,
      apiKey: req.params.apiKey,
      solution: "Please retry after 1 minute",
    });
  },
});

mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error("MongoDB connection error:", error));
db.once("open", () => console.log("MongoDB connected successfully"));

app.use(express.json());
app.use(limiter);
app.use(cookieParser(process.env.COOKIE_SECRET));
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

app.get("/demo", async (req, res) => {
  let result = await findWord(req.query);
  res.send(result);
});

app.get("/verify/:email/:token", async (req, res) => {
  const email = req.params.email;
  const token = req.params.token;
  const verified = await UserManager.verifyUser(email, token);

  if (verified) {
    res.cookie("email", verified.email);
    res.cookie("apiKey", verified.apiKey);
  }

  res.redirect("http://localhost:3000/documentation");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get("/api/wordweb/:apiKey/:word", limiter, async (req, res) => {
  const apiKey = req.params.apiKey;
  const query = req.params.word;

  if (!apiKey) {
    return res.status(400).send("No API key provided");
  }

  const validRequest = await UserManager.validateRequest(apiKey);

  if (!validRequest) {
    return res.status(401).send("Invalid API key");
  }

  let result = await findWord({ query });
  res.send(result);
});
