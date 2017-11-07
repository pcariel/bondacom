"use strict";
const db = require("../src/db");
const Weather = require("../src/models").Weather;
const expect = require("chai").expect;

describe("Models", () => {
  describe("Weather", () => {
    describe("create", () => {
      
      it("should create a new Weather", done => {
        (async () => {
          const data = {
            text: "Parcialmente nublado",
            humidity: 38,
            tempCelsius: 23,
            lastUpdate: new Date()
          };
          try {
            const weather = await Weather.create(data);
            expect(weather).to.be.a("object");
            done();
          } catch (error) {
            done(error);
          }
        })();
      });
    });
  });
});
