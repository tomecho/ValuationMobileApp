import express from "express";

import { valuate } from "./services/valuate";

export const app = express();
app.use(express.json());

app.post("/valuate", (req, res) => {
  if (!req.body.identity) {
    return res.status(400).send();
  } else {
    return valuate(req.body.identity)
      .then(value => res.status(200).send({ value }))
      .catch(err => res.status(500).send(err));
  }
});

app.post("/identify", (req, res) => {
  // todo handle it
});
