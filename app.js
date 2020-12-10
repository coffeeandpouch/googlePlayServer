const express = require("express");
const morgan = require("morgan");

const app = express();

const apps = require("./google-play.js");

app.use(morgan("common"));

app.get("/apps", (req, res) => {
  res.json(apps);
});

module.exports = app;
