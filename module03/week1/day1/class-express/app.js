const express = require("express");

const app = express();

const PORT = process.env.PORT || 5001;

const logger = require("morgan");

app.use(logger("dev"));

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("hello from Mars :) ");
  res.sendFile(__dirname + "/views/home-page.html");
});

app.listen(PORT, () => {
  console.log("hello there", PORT);
});
