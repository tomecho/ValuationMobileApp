import express from "express";

import { valuate } from "./services/valuate";

export const app = express();

app.post("/valuate", (req, res) => {
  // todo handle it
});

app.post("/identify", (req, res) => {
  // todo handle it
});

app.listen(5000);
