const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const { findWord } = require("./helpers/db.js");
const port = 5000;

app.use(express.json());
app.use(cors());

app.post("/add", (req, res) => {
  const user = req.body.email;

  if (!validateEmail(user)) {
    return res.status(400).send("Invalid email address");
  }

  // Generate a random API key
  // Add user to database with Email, API Key, token and Verification status.
  // Send email to user with verification token.

  // if validation is successful, send response to user with API key.

  // else send error message to user - validation not complete.

  res.send("User has been added to the database");
});

app.get("/api", async (req, res) => {
  let result = await findWord(req.query);
  res.send(result);
});

app.get("/verify/:key", (req, res) => {
  const key = req.params.key;
  res.send(`Your API key is ${key}`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
