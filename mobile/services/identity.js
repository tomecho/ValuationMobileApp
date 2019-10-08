/**
 * Make request to server with image as base64
 * @param {string} image base64 image
 */
export async function identify(image) {
  var data = await fetch(`http://10.0.0.155:5000/identify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ image }),
  });
  return (await data.json()).identity;
}
