import { valuate } from "./valuate";

describe("valutationWrapperService", () => {
  describe("requires identity", () => {
    it("throws an err if identity is undef", () => {
      expect(async () => await valuate(undefined)).toThrow();
    });

    it("throws an err if identity is empty", () => {
      expect(async () => await valuate("")).toThrow();
    });
  });

  it("returns a number", () => {

  });
}); 
