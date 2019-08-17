import request from "supertest";
import { app } from "./index";

describe("app", () => {
  describe("valuate", () => {
    it("has a route valuate", () => {
      return request(app)
        .post("/valuate")
        .send({ identity: "whatever" })
        .expect(200);
    });
  });
});
