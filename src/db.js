"use strict";
const mongoose = require('mongoose');
const debug = require("debug");

const log = debug("Bondacom:db");

mongoose.connect('mongodb://localhost/bondacom', { useMongoClient: true });
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on("error", () => {
    log("connection error:");
});

module.exports = db;