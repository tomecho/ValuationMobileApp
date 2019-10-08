import Clarifai from "clarifai";
import { clarifaiApiKey } from "../secrets";

export async function identifyRequest(base64Image) {
  process.nextTick = setImmediate;
  const app = new Clarifai.App({ apiKey: clarifaiApiKey });
  const model = await app.models.get("aaa03c23b3724a16a56b629203edc62c");
  const prediction = await model.predict(base64Image, { language: "en", video: false });
  return prediction.outputs[0].data.concepts[0].name;
}
