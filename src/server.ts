import express from "express";
import { serverConfig } from "./config/index.js";
import pingRouter from "./routers/ping.router.js";

const app = express();

app.use("/ping", pingRouter);

app.listen(serverConfig.PORT, () => {
  console.log(`Server is running at port ${serverConfig.PORT}.`);
  console.log(`Press ctrl + c to stop the server.`);
});
