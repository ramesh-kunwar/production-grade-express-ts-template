import express, { Router } from "express";
import pingRouter from "./ping.router";

const v1Router: Router = express.Router();

v1Router.use("/ping", pingRouter);

export default v1Router;
