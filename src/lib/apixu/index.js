"use strict";
const Weather = require("./weather");
const Forecast = require("./forecast");

const key = process.env.APIXU_KEY || "409167ff741942d9a59201326170304"
/**
 * ApiXu API wrapper objects.
 */
class ApiXu {
  /**
   * 
   * @param {String} accessToken - the key authorize ApiXu
   * @param {String} [lang=es] - the languange response ApiXu
   * @param {String} [type=json] - the response result ApiXu
    */
  constructor(accessToken, lang = "es", type = "json") {
    this.optionsDefault = {
      key: accessToken || key,  
      lang
    };
    this.urlBase = "http://api.apixu.com/v1/"; 
  }

  /**
   * Create a new Weather wrapper
   * @return {Weather}
   */
  getWeather() {
    return new Weather(this.optionsDefault, this.urlBase);
  }

  /**
   * Create a new Forecast wrapper
   * @return {Forecast}
   */
  getForecast() {
    return new Forecast(this.optionsDefault, this.urlBase);
  }

}

module.exports = ApiXu;

