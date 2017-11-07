"use strict";
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/app");

const expect = chai.expect;
chai.use(chaiHttp);

describe("API", () => {
  describe("Weather", () => {
    it("/GET current", done => {
      chai
        .request(app)
        .get("/api/weather")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;

          done();
        });
    });

    it("/GET history", done => {
      chai
        .request(app)
        .get("/api/weather/history")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          done();
        });
    });
  });
});
