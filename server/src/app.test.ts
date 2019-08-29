import request from "supertest";
import { app } from "./app";

describe("app", () => {
  describe("valuate", () => {
    it("has a route valuate", done => {
      return request(app)
        .post("/valuate")
        .send({ identity: "whatever" })
        .expect(200, done);
    });

    it("returns 400 if the identity is missing", done => {
      return request(app)
        .post("/valuate")
        .send({ identity: null })
        .expect(400, done);
    });

    it("returns a value", done => {
      return request(app)
        .post("/valuate")
        .send({ identity: "osprey atmos ag 50" })
        .expect(res => {
          expect(res.body.value).toBeGreaterThan(20);
          expect(res.body.value).toBeLessThan(300);
        })
        .expect(200, done);
    });
  });
});
