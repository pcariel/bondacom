"use strict";
const mongoose = require("mongoose");
const moment = require('moment');

/**
 * Model Weather
 */
const schema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  humidity: {
    type: Number,
    required: true
  },
  tempCelsius: {
    type: Number,
    required: true
  },
  lastUpdate: {
    type: Date,
    required: true,
    index: true
  }
});

class WeatherClass {
  static findBy24H() {
    return this.aggregate([
      {
        $match: {
          lastUpdate: {
            $gte: moment().subtract(24, "h").toDate(),
            $lt: moment().toDate()
          }
        }
      },
      {
        $group: {
          _id: null,
          max: { $max: "$tempCelsius" },
          min: { $min: "$tempCelsius" }
        }
      }
    ]);
  }
}

schema.loadClass(WeatherClass);

module.exports = mongoose.model("Weather", schema);
