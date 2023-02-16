const express = require("express");
const category = require("./data/categories.json");
const cors = require("cors");
const app = express();

const port = 5000;
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World! This is my won server");
});
app.get("/category", (req, res) => {
  res.send(category);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
