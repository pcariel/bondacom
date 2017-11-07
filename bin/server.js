"use strict";
const app = require("../src/app");
const jobs = require("../src/jobs");
const db = require("../src/db");

const port = process.env.port || 8084;

const server = app.listen(port, err => {
  jobs.start();
});

process.on("SIGINT", () => {
  db.close();
  server.close();
  jobs.stop();
  process.exit(0);
});
