import { identifyRequest } from "./identityWrapperService";

describe("identityWrapperService", () => {
  it("returns something", () => {
    const fakeImage = Symbol();




    expect(identifyRequest(fakeImage))
  });
});
