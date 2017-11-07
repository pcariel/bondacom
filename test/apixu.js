"use strict";
const ApiXu = require("../src/lib/apixu");
const chai = require("chai");

const api = new ApiXu();

const expect = chai.expect;

describe("ApiXu", () => {
  it("/GET current.json", done => {
    (async () => {
      
      const apiWeather = api.getWeather();
      try {
        const weather = await apiWeather.current("Paris");
        expect(weather).to.be.a("object");
        done();
      } catch (error) {
        done(error);
      }
    })();
  });

  it("/GET forecast.json", done => {
    (async () => {
      const api = new ApiXu("409167ff741942d9a59201326170304");
      const apiForecast = api.getForecast();
      try {
        const forecast = await apiForecast.get("Paris", 2);
        expect(forecast).to.be.a("object");
        done();
      } catch (error) {
        done(error);
      }
    })();
  });
});
