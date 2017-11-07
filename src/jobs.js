"use strict";
const CronJob = require("cron").CronJob;
const moment = require('moment');
const ApiXu = require("./lib/apixu");
const Weather = require("./models").Weather;
const debug = require("debug");

const log = debug("Bondacom:Jobs:Weather");


const apiXu = new ApiXu();
const apiWeather = apiXu.getWeather();

const jobWeather = new CronJob(
  "10 03,33,48 * * * *",
  async () => {
    log("Init");
    try {
      const currentWeather = await apiWeather.current("Buenos Aires");
      const {
        temp_c,
        humidity,
        condition: { text },
        last_updated
      } = currentWeather["current"];
      const weather = await Weather.create({
        humidity,
        text,
        lastUpdate: moment.utc(last_updated, "YYYY-MM-DD HH:mm").toDate(),
        tempCelsius: temp_c
      });
      log(`Saved Weathter: ${weather}`);
      log(`Result: ${JSON.stringify(currentWeather)}`)
    } catch (error) {
      log(`Error: ${error}`);
    }
  },
  () => {
    log("Finish");
  },
  false
);

module.exports = jobWeather;
