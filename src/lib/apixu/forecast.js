"use strict";
const APIRequest = require("../client").APIRequest;
const debug = require("debug");

const log = debug("Bondacom:ApiXu:Forecast");

/**
 * Wrap the Forecast API
 */
class Forecast extends APIRequest {
  /**
   * create a Weather
   * @param {String} accessToken - the key authorize ApiXu
   * @param {String} apiBase - the base ApiXu API URL
   */
  constructor(accessToken, apiBase) {
    super(accessToken, apiBase);
  }

  async get(query, days) {
    log(`show forecast city=${query}, days: ${JSON.stringify(days)}`);
    return this.request("GET", "forecast.json", { q: query, days });
  }
}

module.exports = Forecast;
