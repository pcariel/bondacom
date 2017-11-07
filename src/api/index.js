'use strict';
const express = require("express");
const weather = require("./weather");

const router = express.Router();

router.get("/weather", weather.current);
router.get("/weather/history", weather.history);

module.exports = router;