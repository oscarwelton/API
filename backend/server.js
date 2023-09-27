const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const dotenv = require("dotenv");
var RateLimit = require("express-rate-limit");
var MongoStore = require("rate-limit-mongo");
dotenv.config();

const UserManager = require("./controllers/usersController.js");
const { findWord } = require("./controllers/wordsController.js");
const PORT = process.env.PORT || 5001;

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
});

mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error("MongoDB connection error:", error));
db.once("open", () => console.log("MongoDB connected successfully"));

const corsOptions = {
  credentials: true,
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(express.json());
app.use(limiter);

app.get("/demo", async (req, res) => {
  let result = await findWord(req.query);
  return res.send(result);
});

app.post("/new", async (req, res) => {
  try {
    const email = req.body.email;
    const user = await UserManager.getUser(email);

    if (user && user.verified) {
      console.log(user.email)
      res.cookie("email", user.email, {
        maxAge: 3600 * 1000,
        domain: "localhost",
        sameSite: "lax",
      });

      console.log(user.apiKey)
      res.cookie("apiKey", user.apiKey, {
        maxAge: 3600 * 1000,
        domain: "localhost",
        sameSite: "lax",
      });

      return res.send("verified");
    } else if (user && !user.verified) {
      return res.send("unverified");
    } else {
      const newUser = await UserManager.createUser(email);
      if (newUser !== null) {
        await UserManager.sendVerificationEmail(email);
        return res.send("new user");
      }
    }
  } catch (error) {
    console.error(error);
  }
});

app.get("/verify/:email/:token", async (req, res) => {
  const email = req.params.email;
  const token = req.params.token;

  const verified = await UserManager.verifyUser(email, token);
  if (verified) {
    res.cookie("email", verified.email);
    res.cookie("apiKey", verified.apiKey);
  }
  return res.redirect("http://localhost:3000/documentation");
});

app.post("/resend", async (req, res) => {
  const email = req.body.email;
  console.log(email);
  const user = await UserManager.getUser(email);

  if (user) {
    await UserManager.sendVerificationEmail(email);
    return res.send("1");
  }

  return res.send("0");
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
  return res.send(result);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
