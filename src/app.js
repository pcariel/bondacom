"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const api = require("./api");

const isProduction = process.env.NODE_ENV === "production";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/json" }));
app.use(cors());

app.use("/api", api);

if (isProduction) {
  app.disable("x-powered-by");
}

module.exports = app;
