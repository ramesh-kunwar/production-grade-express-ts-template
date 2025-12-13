import express from "express";
const app = express();

const PORT = 4000;

app.get("/ping", (req, res) => {
  res.send("Pong");
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}.`);
  console.log(`Press ctrl + c to stop the server.`);
});
