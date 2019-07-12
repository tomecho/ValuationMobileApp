import { identifyRequest } from "./identity";

describe("identityWrapperService", () => {
  const fakeImage = "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AIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIA4AQgAAAAgTgACAAAAiBOAAAAAAOIEIAAAAIC0v/76P4umq0Au8BSuAAAAAElFTkSuQmCC";

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