import express, { Router } from "express";
import { pingHandler } from "../../controllers/ping.controller";
import { validateRequestBody } from "../../validators";
import { pingSchema } from "../../validators/ping.validator";
const pingRouter: Router = express.Router();

pingRouter.get("/", validateRequestBody(pingSchema), pingHandler);
pingRouter.get("/health", (req, res) => {
  res.json({
    msg: "OK",
  });
});

export default pingRouter;
