"use strict";
const Weather = require("../models").Weather;

/**
 * 
 * @api {get} / Request Weather Current information
 * @apiName GetCurrent
 * @apiGroup Weather
 * 
 * @apiSuccess {String} text Firstname of the User.
 * @apiSuccess {Number} humidity Firstname of the User.
 * @apiSuccess {Number} tempCelsius Firstname of the User.
 * @apiSuccess {Date} lastUpdate Firstname of the User.
 */
const current = async (req, res) => {
  try {
    const result = await Weather.findOne()
      .select({ _id: 0, __v: 0 })
      .sort("-lastUpdate");

    if (result) {
      res.json(result);
      return;
    } else {
      res.status(404).json({ error: "not found" });
      return;
    }
  } catch (error) {
    res.status(500).json({ error: " Internal Server Error" });
  }

  
};

/**
 * 
 * @api {get} /history Request Weather Current information
 * @apiName GetHistory
 * @apiGroup Weather
 * 
 * @apiSuccess {Number} min Firstname of the User.
 * @apiSuccess {Number} max Firstname of the User.
 */
const history = async (req, res) => {
  try {
    const result = await Weather.findBy24H();
    if (result) {
      res.json(result);
      return;
    } else {
      res.status(204).json({ error: "not found" });
      return;
    }
  } catch (error) {
    res.status(500).json({ error: " Internal Server Error" });
  }

  
};
module.exports = {
  current,
  history
};
