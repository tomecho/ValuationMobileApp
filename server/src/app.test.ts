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
  });
});
