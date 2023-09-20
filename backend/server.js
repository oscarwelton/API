const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.post("/add", (req, res) => {
  const user = req.body.email;
  console.log(user);
  res.send("User has been added to the database");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
