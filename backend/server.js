const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const UserManager = require("./controllers/usersController.js");
dotenv.config();

const { findWord } = require("./helpers/db.js");
const port = 5000;

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

  const newUser = await UserManager.addUser(user);
  console.log(newUser);
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
