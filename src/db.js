"use strict";
const mongoose = require('mongoose');
const debug = require("debug");

const log = debug("Bondacom:db");
const pathConnect = process.env.MONGODB_CONNECT || "mongodb://localhost/bondacom";

mongoose.connect(pathConnect, { useMongoClient: true });
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on("error", () => {
    log("connection error:");
});

module.exports = db;