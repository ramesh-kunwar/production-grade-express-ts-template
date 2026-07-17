import express, { Router } from "express";
import { pingHandler } from "../../controllers/ping.controller";
const pingRouter: Router = express.Router();

pingRouter.get("/", pingHandler);
pingRouter.get("/health", (req, res) => {
  res.json({
    msg: "OK",
  });
});

export default pingRouter;
