import express from "express";

import { valuate } from "./services/valuate";
import { identifyRequest } from "./services/identity";

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
  if (!req.body.image) {
    return res.status(400).send();
  } else {
    return identifyRequest(req.body.image)
      .then(identity => res.status(200).send({ identity }))
      .catch(err => res.status(500).send(err));
  }
});
