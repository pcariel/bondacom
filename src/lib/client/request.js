"use strict";
const requestPromise = require("request-promise-native");
const debug = require("debug");

const log = debug("Bondacom:Request");

class APIRequest {
  /**
   * Construct a http client internals.
   * @param {String} accessToken - the credentials to authenticate to ApiXu
   * @param {String} apiBase - the base ApiXu API URL
   */
  constructor(optionsDefault, apiBase) {
    this.optionsDefault = optionsDefault;
    this.apiBase = apiBase;
  }

  /**
   * make a Request
   * @param {String} method - the method for the request (POST, GET, DELETE, PUT)
   * @param {String} path - the path for the request
   * @param {String} options - parameters
   */
  async request(method, path, options = {}) {
    const key = method !== "POST" ? "qs" : "form";
    const uri = `${this.apiBase}${path}`;
    options = {
      ...this.optionsDefault,
      ...options
    };
    log(`${method} - ${uri} - ${JSON.stringify(options)}`);

    return requestPromise({
      uri,
      [key]: options,
      method,
      json: true
    })
      .then(res => {
        return res;
      })
      .catch(err => {
        const error = err.error;
        log(
          `ERROR: ${err.message} - ${err.statusCode} - ${JSON.stringify(error)}`
        );

        throw new ResponseError(
          err.message,
          err.statusCode,
          JSON.stringify(error)
        );
      });
  }
}

class ResponseError extends Error {
  /**
   * Construct a new ResponseError
   * @param {string} message - an message to return instead of the the default error message
   * @param {string} path - the requested path
   * @param {Object} response - the object returned by Request-Promise-Native
   */
  constructor(message, path, response) {
    super(message);
    this.path = path;
    this.request = response.config;
    this.response = (response || {}).response || response;
    this.status = response.status;
  }
}

module.exports = APIRequest;
