import { testImageBase64 as fakeImage } from "../testImage";
import { identifyRequest } from "./identity";

describe("identityWrapperService", () => {
  it("returns single suggestion string", async () => {
    const suggestion = await identifyRequest(fakeImage);
    expect(suggestion).toEqual(expect.any(String))
  });

  it("throws when passed invalid image", () => {
    return new Promise((resolve, reject) => {
      identifyRequest("notanimage")
        .then(reject)
        .catch(resolve);
    });
  })
});
