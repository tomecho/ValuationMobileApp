import { valuate } from "./valuate";

describe("valutationWrapperService", () => {
  describe("requires identity", () => {
    it("throws an err if identity is undef", () => {
      return new Promise((resolve, reject) => valuate(undefined).then(reject, resolve));
    });

    it("throws an err if identity is empty", () => {
      return new Promise((resolve, reject) => valuate("").then(reject, resolve));
    });
  });

  it("returns a number", async () => {
    const value = await valuate("osprey atmos ag 50");
  });
}); 
