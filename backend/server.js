const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const { findWord } = require("./db.js");
const port = 5000;

app.use(express.json());
app.use(cors());

app.post("/add", (req, res) => {
  const user = req.body.email;

  if (!validateEmail(user)) {
    return res.status(400).send("Invalid email address");
  }
  res.send("User has been added to the database");
});

app.get("/api", async (req, res) => {
  let result = await findWord(req.query);
  res.send(result);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
