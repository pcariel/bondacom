"use strict";
const APIRequest = require("../client").APIRequest;
const debug = require("debug");

const log = debug("Bondacom:ApiXu:Weather");

/**
 * Wrap the Weather API
 */
class Weather extends APIRequest {
  /**
   * create a Weather
   * @param {String} accessToken - the key authorize ApiXu
   * @param {String} apiBase - the base ApiXu API URL
   */
  constructor(accessToken, apiBase) {
    super(accessToken, apiBase);
  }

  /**
   * show the current weather
   * @param {String} q - the city params query
   * @return {Promise} - the promise for the http request
   */
  async current(city) {
    log(`Show current Weather with options: ${city}`);
    return this.request("GET", "current.json", { q: city });
  }
}

module.exports = Weather;
