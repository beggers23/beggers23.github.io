const express = require("express");
const logger = require("@port/logger");

const PORT = process.env.PORT || 8080;
const app = express();

app.get("/", (req, res) => {
  logger.info("/ was hit");
  res.json({ title: "pop pop" });
});

app.listen(PORT, () => console.log("Spinning"));
